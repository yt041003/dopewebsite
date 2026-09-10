import QuizReading from '@/components/quiz-reading';
import {Breadcrumbs,JsonLd} from '@/components/content-navigation';
import {pageSchema} from '@/lib/page-seo';
import Quiz from '@/components/quiz';
import {locales,metadataFor,siteUrl,type Locale} from '@/lib/seo';
import {notFound} from 'next/navigation';
export function generateStaticParams(){return locales.map(locale=>({locale}));}
export async function generateMetadata({params}:{params:Promise<{locale:string}>}) { const {locale}=await params; if(!locales.includes(locale as Locale))notFound(); return metadataFor(locale as Locale); }
export default async function Page({params}:{params:Promise<{locale:string}>}){
 const {locale}=await params;if(!locales.includes(locale as Locale))notFound();
 const en=locale==='en';
 const data={'@context':'https://schema.org','@type':'WebApplication',name:'DOPE TEST',url:`${siteUrl()}/${locale}/dope`,inLanguage:en?'en':'zh-Hant',applicationCategory:'LifestyleApplication',operatingSystem:'Any',isAccessibleForFree:true,description:en?'20-question bird personality and communication style self-reflection quiz.':'20 道鳥類性格與溝通風格自我探索情境題。',offers:{'@type':'Offer',price:'0',priceCurrency:'USD'}};
 return <><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(data).replace(/</g,'\\u003c')}}/><JsonLd data={pageSchema(locale as Locale,'/dope','DOPE TEST',en?'Free communication style quiz':'免費溝通風格測驗')}/><Quiz initialLocale={locale as Locale} navigation={<Breadcrumbs locale={locale as Locale} path="/dope"/>}><QuizReading locale={locale as Locale} kind="dope"/></Quiz></>;
}
