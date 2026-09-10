import type {CSSProperties} from 'react';
import type {Locale} from '@/lib/seo';
import type {ContentPage} from '@/lib/editorial';
import {pageSchema} from '@/lib/page-seo';
import PixelSpace from './pixel-space';
import TwynzoBrand from './twynzo-brand';
import {Breadcrumbs,JsonLd,ResourceLinks} from './content-navigation';
export default function EditorialPage({locale,page}:{locale:Locale;page:ContentPage}){
 const en=locale==='en',i=en?1:0;
 const theme={'--accent':page.path.startsWith('/personality')?'#9bccff':'#d4c1ff','--wash':'#20263d'} as CSSProperties;
 return <div className="explore-theme editorial-theme" style={theme}><PixelSpace en={en}/><div className="site-shell">
  <JsonLd data={pageSchema(locale,page.path,page.title[i],page.description[i],page.kind==='guide',page.published,page.updated)}/>
  <header className="topbar"><TwynzoBrand locale={locale}/><div className="language"><a href={'/zh-hant'+page.path} aria-current={!en?'page':undefined}>繁中</a><a href={'/en'+page.path} aria-current={en?'page':undefined}>EN</a></div></header>
  <main id="main-content" className="editorial-main"><Breadcrumbs locale={locale} path={page.path}/><article>
   <div className="sector-label">TWYNZO / FIELD NOTES</div><h1>{page.title[i]}</h1><p className="editorial-lead">{page.description[i]}</p>
   {page.kind==='guide'&&<p className="byline">{en?'By Twynzo · Original self-reflection guide':'作者：Twynzo · 原創自我探索指南'}</p>}
   {(page.published||page.updated)&&<p className="byline">{page.published&&<>{en?'Published: ':'發布：'}<time dateTime={page.published}>{page.published}</time></>}{page.updated&&<> · {en?'Updated: ':'更新：'}<time dateTime={page.updated}>{page.updated}</time></>}</p>}
   {page.kind==='type'&&<p className="editorial-disclaimer">{en?'Read this as a set of possibilities to compare with your experience, not a complete description of you. These are original reflection prompts, not validated assessments or official MBTI® profiles.':'把這篇當作可以與經驗比較的可能性，而不是對你的完整定義。以下為原創反思提示，並非經驗證的評估或官方 MBTI® 類型解讀。'}</p>}
   <nav className="article-toc" aria-label={en?'On this page':'本頁內容'}>{page.sections.map((section,n)=><a key={n} href={'#section-'+n}>{section.heading[i]}</a>)}</nav>
   {page.sections.map((section,n)=><section id={'section-'+n} key={n}><h2>{section.heading[i]}</h2><p>{section.body[i]}</p></section>)}
   {page.path==='/guides/dope-vs-16-types'&&<p><a href="https://www.myersbriggs.org/my-mbti-personality-type/the-mbti-preferences/">{en?'Reference: Myers & Briggs Foundation — the four preference pairs':'概念參考：Myers & Briggs Foundation — 四組偏好'}</a></p>}
   {page.path==='/privacy'&&<p><a href="https://vercel.com/legal/privacy-policy">Vercel</a> · <a href="https://supabase.com/privacy">Supabase</a> · <a href="https://stripe.com/privacy">Stripe</a></p>}
   <section><h2>{page.kind==='hub'?(en?'Choose your next step':'選擇下一步'):en?'Continue exploring':'繼續探索'}</h2><ResourceLinks locale={locale} paths={page.links}/></section>
  </article></main></div></div>;
}
