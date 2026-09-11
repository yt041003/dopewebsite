"""Windows-compatible adapter to the installed, unchanged Codex SEO drift engine."""
import argparse, json, sys, time, hashlib, os
from pathlib import Path
from datetime import datetime, timezone
from urllib.parse import urlparse
from urllib.robotparser import RobotFileParser
from defusedxml import ElementTree
from bs4 import BeautifulSoup
scripts = Path(os.environ.get('CODEX_HOME',str(Path.home()/'.codex')))/'skills/seo/scripts'
sys.path.insert(0,str(scripts))
import drift_baseline, drift_compare
from fetch_page import fetch_page
from parse_html import parse_html

def fetch_data(url):
    fetched=fetch_page(url, max_redirects=3)
    return {'status_code':fetched['status_code'], 'html':fetched['content'], 'parsed':parse_html(fetched['content'], fetched['url']) if fetched['content'] else None, 'error':fetched['error']}

drift_baseline.fetch_page_data=fetch_data
drift_compare.fetch_page_data=fetch_data
parser=argparse.ArgumentParser()
parser.add_argument('mode',choices=['baseline','compare','crawl'])
parser.add_argument('url')
parser.add_argument('--output', required=True)
parser.add_argument('--baseline-id',type=int)
args=parser.parse_args()
out=Path(args.output); out.parent.mkdir(parents=True,exist_ok=True)
if args.mode=='crawl':
    base=f'{urlparse(args.url).scheme}://{urlparse(args.url).netloc}'
    robots=fetch_page(base+'/robots.txt'); sitemap=fetch_page(base+'/sitemap.xml')
    if robots['status_code']!=200 or sitemap['status_code']!=200: raise SystemExit('robots/sitemap unavailable')
    robot=RobotFileParser(); robot.parse(robots['content'].splitlines())
    urls=[n.text for n in ElementTree.fromstring(sitemap['content']).findall('{*}url/{*}loc')]
    data={'analyzed_at':datetime.now(timezone.utc).isoformat(),'robots':robots,'sitemap':sitemap,'pages':[]}
    for index,url in enumerate(urls):
        if not robot.can_fetch('CodexSEO',url): raise SystemExit('Robots excluded '+url)
        fetched=fetch_page(url,max_redirects=3)
        parsed=parse_html(fetched['content'], fetched['url']) if fetched['content'] else {}
        soup=BeautifulSoup(fetched['content'] or '', 'lxml')
        main=soup.find('main') or soup
        for el in main(['script','style']): el.decompose()
        visible=main.get_text(' ',strip=True)
        data['pages'].append({'url':url,'resolved_url':fetched['url'],'status':fetched['status_code'],'headers':fetched['headers'],'redirect_chain':fetched['redirect_chain'],'error':fetched['error'],'parsed':parsed,'main_text':visible,'main_text_hash':hashlib.sha256(visible.encode()).hexdigest()})
        (out.parent/'html').mkdir(exist_ok=True)
        (out.parent/'html'/(urlparse(url).path.strip('/').replace('/','--')+'.html')).write_text(fetched['content'] or '',encoding='utf-8')
        out.write_text(json.dumps(data,ensure_ascii=False,indent=2),encoding='utf-8')
        if index%12==0: print(f'{index+1}/{len(urls)}',flush=True)
        time.sleep(1)
    print(f'Captured {len(data["pages"])} URLs',flush=True)
else:
    data=drift_baseline.capture_baseline(args.url,skip_cwv=True) if args.mode=='baseline' else drift_compare.run_comparison(args.url,skip_cwv=True,baseline_id=args.baseline_id)
    out.write_text(json.dumps(data,ensure_ascii=False,indent=2),encoding='utf-8')
    print(json.dumps(data,ensure_ascii=True,indent=2))
    if data.get('error'): raise SystemExit(1)
