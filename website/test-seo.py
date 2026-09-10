"""Read-only SEO regression check against a running production build.
Usage: python test-seo.py [http://localhost:3002]
No quiz submissions, database writes or external-link requests.
"""
import concurrent.futures
import json
import sys
import urllib.error
import urllib.parse
import urllib.request
import xml.etree.ElementTree as ET
from html.parser import HTMLParser

BASE = (sys.argv[1] if len(sys.argv) > 1 else 'http://localhost:3002').rstrip('/')
PUBLIC = 'https://twynzo.com'

class Page(HTMLParser):
    def __init__(self, html):
        super().__init__()
        self.links, self.metas, self.anchors, self.images, self.schemas = [], [], [], [], []
        self.h1s, self.title, self.h1, self.ids = [], '', '', set()
        self.in_title = self.in_h1 = self.in_schema = False
        self.schema = ''
        self.lang = ''
        self.feed(html)

    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if 'id' in a: self.ids.add(a['id'])
        if tag == 'html': self.lang = a.get('lang')
        if tag == 'link': self.links.append(a)
        if tag == 'meta': self.metas.append(a)
        if tag == 'a': self.anchors.append(a.get('href', ''))
        if tag == 'img': self.images.append(a)
        if tag == 'title': self.in_title = True
        if tag == 'h1': self.in_h1 = True; self.h1 = ''
        if tag == 'script' and a.get('type') == 'application/ld+json':
            self.in_schema = True; self.schema = ''

    def handle_data(self, text):
        if self.in_title: self.title += text
        if self.in_h1: self.h1 += text
        if self.in_schema: self.schema += text

    def handle_endtag(self, tag):
        if tag == 'title': self.in_title = False
        if tag == 'h1': self.in_h1 = False; self.h1s.append(self.h1)
        if tag == 'script' and self.in_schema:
            self.schemas.append(json.loads(self.schema)); self.in_schema = False

    def meta(self, name):
        return [m.get('content', '') for m in self.metas if m.get('name', m.get('property')) == name]

def get(path):
    try:
        with urllib.request.urlopen(BASE + path, timeout=30) as r:
            return r.status, r.read().decode(), r.headers, r.url
    except urllib.error.HTTPError as e:
        return e.code, e.read().decode(), e.headers, e.url

status, xml, _, _ = get('/sitemap.xml')
assert status == 200
tree = ET.fromstring(xml)
urls = [n.text for n in tree.findall('{*}url/{*}loc')]
assert len(urls) == len(set(urls)) and len(urls) >= 68
assert all(u.startswith(PUBLIC + '/') and '?' not in u for u in urls)
paths = [u.removeprefix(PUBLIC) for u in urls]
for item in tree.findall('{*}url'):
    alts = {a.attrib['hreflang']: a.attrib['href'] for a in item.findall('{*}link')}
    assert set(alts) == {'zh-Hant', 'en', 'x-default'}
    assert all(u in urls for u in alts.values())

def inspect(path):
    status, html, headers, final = get(path)
    assert status == 200 and final == BASE + path, (path, status, final)
    p = Page(html)
    assert len(p.h1s) == 1 and p.h1s[0], (path, 'H1', p.h1s)
    assert p.lang == ('en' if path.startswith('/en') else 'zh-Hant'), (path, 'lang')
    assert len(p.meta('description')) == 1 and p.meta('description')[0], (path, 'description')
    assert [a['href'] for a in p.links if a.get('rel') == 'canonical'] == [PUBLIC + path], (path, 'canonical')
    assert not any('noindex' in x for x in p.meta('robots')), (path, 'robots')
    assert 'noindex' not in headers.get('X-Robots-Tag', ''), path
    suffix = path.split('/', 2)[2] if path.count('/') > 1 else ''
    suffix = '/' + suffix if suffix else ''
    expected = {'zh-Hant':PUBLIC+'/zh-hant'+suffix,'en':PUBLIC+'/en'+suffix,'x-default':PUBLIC+'/zh-hant'+suffix}
    assert {a['hreflang']:a['href'] for a in p.links if a.get('hreflang')} == expected, (path, 'hreflang')
    for name in ['og:title','og:description','og:url','og:image','twitter:card','twitter:title','twitter:description','twitter:image']:
        assert len(p.meta(name)) == 1 and p.meta(name)[0], (path,name)
    assert p.meta('og:url') == [PUBLIC+path], (path,'OG URL')
    assert all('alt' in a and a.get('width') and a.get('height') for a in p.images), (path,'image alt/size')
    assert p.schemas, (path,'JSON-LD')
    graph = [n for schema in p.schemas for n in schema.get('@graph',[schema])]
    types = [n.get('@type') for n in graph]
    assert 'WebSite' in types and 'WebPage' in types and 'Organization' in types, (path,types)
    if suffix:
        assert 'BreadcrumbList' in types, (path,'breadcrumbs')
        crumbs = next(n for n in graph if n.get('@type')=='BreadcrumbList')['itemListElement']
        assert [c['position'] for c in crumbs] == list(range(1,len(crumbs)+1))
        assert crumbs[-1]['item'] == PUBLIC+path
    if suffix.startswith('/guides/'): assert 'Article' in types
    for href in p.anchors:
        u = urllib.parse.urlparse(urllib.parse.urljoin(PUBLIC+path,href))
        if u.netloc != 'twynzo.com': continue
        assert u.path in paths, (path,'broken internal link',href)
        if u.path == path and u.fragment: assert u.fragment in p.ids, (path,'fragment',href)
    return path,p

with concurrent.futures.ThreadPoolExecutor(max_workers=6) as pool:
    pages = dict(pool.map(inspect, paths))
for attribute in ['title','h1s']:
    seen = {}
    for path,p in pages.items():
        value = str(getattr(p,attribute))
        assert value not in seen, (attribute,'duplicate',seen.get(value),path)
        seen[value] = path
descriptions=[p.meta('description')[0] for p in pages.values()]
assert len(descriptions)==len(set(descriptions)), 'Duplicate descriptions'
for locale in ['en','zh-hant']:
    visited=set();todo=['/'+locale]
    while todo:
        path=todo.pop()
        if path in visited: continue
        visited.add(path)
        todo.extend(urllib.parse.urlparse(urllib.parse.urljoin(path,a)).path for a in pages[path].anchors if a.startswith('/'+locale) and urllib.parse.urlparse(a).path not in visited)
    assert set(p for p in paths if p.startswith('/'+locale)) <= visited, (locale,'orphan pages')
for path in ['/zh-hant/missing-page','/en/personality/nope','/xx','/en/tests/missing']:
    status,html,_,_=get(path)
    assert status==404, (path,status)
    assert any('noindex' in x for x in Page(html).meta('robots')), (path,'404 noindex')
for path,expected in [('/', '/zh-hant'),('/en/tests/', '/en/tests')]:
    status,_,headers,final=get(path)
    if status in (301,302,307,308):
        assert headers.get('Location')==expected, (path,headers.get('Location'))
        status,_,_,final=get(expected)
    assert status==200 and final==BASE+expected, (path,status,final)
status,html,_,_=get('/en/tests/personality-16?type=infp&score=99')
assert status==200 and [a['href'] for a in Page(html).links if a.get('rel')=='canonical']==[PUBLIC+'/en/tests/personality-16']
status,robots,_,_=get('/robots.txt')
assert status==200 and 'Allow: /' in robots and 'Disallow: /api/' in robots and PUBLIC+'/sitemap.xml' in robots
print(f'PASS: {len(paths)} URLs; server HTML, unique metadata/H1, canonical, reciprocal hreflang, JSON-LD, images, internal links, reachability, queries, robots, redirects and 404s.')
