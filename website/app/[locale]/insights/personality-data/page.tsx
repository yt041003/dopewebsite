import type {Metadata} from 'next';
import {notFound} from 'next/navigation';
import PixelSpace from '@/components/pixel-space';
import TwynzoBrand from '@/components/twynzo-brand';
import {Breadcrumbs,JsonLd,ResourceLinks,SiteResources} from '@/components/content-navigation';
import {pageMetadata,pageSchema,localizedUrl} from '@/lib/page-seo';
import {resultAggregates,type AggregateRow} from '@/lib/counter';
import {locales,type Locale,siteUrl} from '@/lib/seo';
import {loveStyles,typeNames} from '@/lib/personality-tests';
import {birds} from '@/lib/quiz';

const MIN_SAMPLE=25;
const TESTS=['dope','personality-16','love-personality'] as const;
type Slug=typeof TESTS[number];

const testNames:Record<Slug,readonly [string,string]>={
 dope:['DOPE 鳥類性格測驗','DOPE bird personality test'],
 'personality-16':['16 型人格探索','16-type personality exploration'],
 'love-personality':['戀愛人格測驗','Love personality test'],
};
const testPaths:Record<Slug,string>={
 dope:'/dope',
 'personality-16':'/tests/personality-16',
 'love-personality':'/tests/love-personality',
};
function labelFor(slug:Slug,code:string,en:boolean){
 const i=en?1:0;
 if(slug==='dope')return code.split('+').map(part=>birds.find(b=>b.code===part)?.name[i]??part).join(' + ');
 if(slug==='love-personality')return code.split('+').map(part=>loveStyles.find(s=>s.code===part)?.name[i]??part).join(' + ');
 return typeNames[code]?.[i]??code.replaceAll('X',en?'undetermined':'未明確');
}
function groupRows(rows:AggregateRow[],slug:Slug){return rows.filter(row=>row.slug===slug).sort((a,b)=>b.completions-a.completions||a.resultCode.localeCompare(b.resultCode));}

export function generateStaticParams(){return locales.map(locale=>({locale}));}
export async function generateMetadata({params}:{params:Promise<{locale:string}>}):Promise<Metadata>{
 const {locale}=await params;if(!locales.includes(locale as Locale))notFound();const en=locale==='en';
 return pageMetadata(locale as Locale,'/insights/personality-data',en?'Twynzo Personality Data — Anonymous Quiz Trends | Twynzo':'Twynzo 人格趨勢資料｜匿名測驗結果 — Twynzo',en?'Explore privacy-safe aggregate result trends from Twynzo quizzes. The dataset starts on October 8, 2026, excludes historical display baselines and is shown only after a minimum sample size.':'查看 Twynzo 測驗的匿名匯總結果趨勢。資料由 2026 年 10 月 8 日開始記錄，不包含歷史展示基數，並只在達到最低樣本量後顯示分布。');
}

export default async function Page({params}:{params:Promise<{locale:string}>}){
 const {locale:raw}=await params;if(!locales.includes(raw as Locale))notFound();const locale=raw as Locale,en=locale==='en',i=en?1:0;
 let rows:AggregateRow[]=[];let unavailable=false;
 try{rows=await resultAggregates();}catch{unavailable=true;}
 const publishable=TESTS.some(slug=>(groupRows(rows,slug)[0]?.sample??0)>=MIN_SAMPLE);
 const title=en?'Twynzo personality data':'Twynzo 人格趨勢資料';
 const description=en?'Privacy-safe aggregate quiz outcomes recorded from October 8, 2026 onward. Historical display baselines are excluded.':'由 2026 年 10 月 8 日起記錄的私隱友善匿名測驗匯總結果；歷史展示基數不會計入。';
 const dataset=publishable?{
  '@context':'https://schema.org','@type':'Dataset',
  name:en?'Twynzo anonymous personality quiz result trends':'Twynzo 匿名人格測驗結果趨勢',
  description,
  url:localizedUrl(locale,'/insights/personality-data'),
  creator:{'@type':'Organization',name:'Twynzo',url:siteUrl()},
  temporalCoverage:'2026-10-08/..',
  measurementTechnique:en?'Anonymous first-completion aggregate counts; no answer sequence or result-to-visitor mapping is stored.':'匿名首次完成匯總計數；不儲存作答序列或結果與訪客的對應。',
  variableMeasured:[en?'Quiz result code':'測驗結果代碼',en?'Anonymous first-completion count':'匿名首次完成次數'],
 }:null;
 return <div className="explore-theme editorial-theme" style={{'--accent':'#9bccff','--wash':'#20263d'} as CSSProperties}><PixelSpace en={en}/><div className="site-shell">
  <JsonLd data={pageSchema(locale,'/insights/personality-data',title,description)}/>{dataset&&<JsonLd data={dataset}/>}
  <header className="topbar"><TwynzoBrand locale={locale}/><div className="language"><a href="/zh-hant/insights/personality-data" aria-current={!en?'page':undefined}>繁中</a><a href="/en/insights/personality-data" aria-current={en?'page':undefined}>EN</a></div></header>
  <main id="main-content" className="editorial-main"><Breadcrumbs locale={locale} path="/insights/personality-data"/><article>
   <div className="sector-label">TWYNZO / DATA NOTES</div><h1>{title}</h1><p className="editorial-lead">{description}</p>
   <p className="editorial-disclaimer">{en?'These are descriptive counts from people who completed a Twynzo quiz after tracking began. They are not a representative population sample, prevalence estimate or psychological norm.':'以下只是開始記錄後完成 Twynzo 測驗者的描述性計數，不是具代表性的人口樣本、盛行率估計或心理常模。'}</p>
   <nav className="article-toc" aria-label={en?'On this page':'本頁內容'}><a href="#method">{en?'How the data works':'資料怎樣產生'}</a>{TESTS.map(slug=><a key={slug} href={'#'+slug}>{testNames[slug][i]}</a>)}</nav>
   <section id="method"><h2>{en?'How this dataset works':'這份資料怎樣產生？'}</h2>
    <p>{en?'Result-distribution tracking starts on October 8, 2026. Only a browser’s first counted completion for a quiz can add to its aggregate result count. Twynzo does not store the answer sequence or a table linking a visitor to a result type for this dataset.':'結果分布由 2026 年 10 月 8 日開始記錄。每個瀏覽器在同一測驗只有首次被計入的完成可增加匯總結果數；這份資料不儲存作答序列，也不建立訪客與結果類型的對應表。'}</p>
    <p>{en?'The older 3,125 display baseline is excluded because it was never a verified result-by-result sample. A distribution is hidden until at least 25 newly recorded outcomes exist for that quiz. Clearing cookies, using another device or automated traffic can still affect counts, so the data should be treated as exploratory product data rather than research evidence.':'舊有 3,125 展示基數不會計入，因為它從來不是逐個結果驗證的樣本。每個測驗至少累積 25 個新記錄結果後才顯示分布。清除 Cookie、使用其他裝置或自動化流量仍可能影響計數，因此只能視為探索性的產品資料，不是研究證據。'}</p>
   </section>
   {unavailable&&<section><h2>{en?'Data temporarily unavailable':'資料暫時未能讀取'}</h2><p>{en?'The quizzes remain available. This page will show aggregate trends again when the counter service is reachable.':'測驗仍可正常使用；匯總計數服務恢復後，本頁會再次顯示趨勢。'}</p></section>}
   {TESTS.map(slug=>{const data=groupRows(rows,slug),sample=data[0]?.sample??0,ready=sample>=MIN_SAMPLE;return <section id={slug} key={slug}><h2>{testNames[slug][i]}</h2><p>{en?'New tracked sample: '+sample.toLocaleString()+' first-counted completions.':'新增追蹤樣本：'+sample.toLocaleString()+' 次首次計入完成。'} {ready?(en?'The minimum display threshold has been reached.':'已達最低展示門檻。'):(en?'Distribution stays hidden until '+MIN_SAMPLE+' new outcomes are recorded.':'累積至 '+MIN_SAMPLE+' 個新結果前不顯示分布。')}</p>
    {ready&&<div className="article-table-scroll"><table><caption>{en?'Observed result distribution':'觀察到的結果分布'}</caption><thead><tr><th scope="col">{en?'Result':'結果'}</th><th scope="col">{en?'Count':'次數'}</th><th scope="col">{en?'Share':'比例'}</th></tr></thead><tbody>{data.map(row=><tr key={row.resultCode}><th scope="row">{labelFor(slug,row.resultCode,en)}</th><td>{row.completions.toLocaleString()}</td><td>{(row.completions/row.sample*100).toFixed(1)}%</td></tr>)}</tbody></table></div>}
    <ResourceLinks locale={locale} paths={[testPaths[slug],slug==='dope'?'/topics/communication':slug==='love-personality'?'/topics/relationships':'/topics/personality','/methodology']}/>
   </section>;})}
   <section><h2>{en?'What this data cannot tell you':'這些資料不能告訴你甚麼？'}</h2><p>{en?'It cannot establish how common a personality type is in a country, age group or gender; it cannot validate the quizzes; and it cannot show causation. No demographic breakdown is collected for this dataset.':'它不能證明某人格在某國家、年齡或性別有多常見，不能驗證測驗效度，也不能推論因果。這份資料不收集人口統計分類。'}</p></section>
   <section><h2>{en?'Continue exploring':'繼續探索'}</h2><ResourceLinks locale={locale} paths={['/topics','/tests','/guides/read-personality-results','/editorial-policy','/privacy']}/></section>
  </article></main>
  <footer><SiteResources locale={locale}/></footer>
 </div></div>;
}
