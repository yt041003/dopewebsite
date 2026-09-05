import Quiz from '@/components/quiz';
import {locales,metadataFor,siteUrl,type Locale} from '@/lib/seo';
import {notFound} from 'next/navigation';
export function generateStaticParams(){return locales.map(locale=>({locale}));}
export async function generateMetadata({params}:{params:Promise<{locale:string}>}) { const {locale}=await params; if(!locales.includes(locale as Locale))notFound(); return metadataFor(locale as Locale); }
export default async function Page({params}:{params:Promise<{locale:string}>}){
 const {locale}=await params;if(!locales.includes(locale as Locale))notFound();
 const en=locale==='en';
 const data={'@context':'https://schema.org','@type':'WebApplication',name:'DOPE TEST',url:`${siteUrl()}/${locale}`,inLanguage:en?'en':'zh-Hant',applicationCategory:'LifestyleApplication',operatingSystem:'Any',isAccessibleForFree:true,description:en?'20-question bird personality and communication style self-reflection quiz.':'20 道鳥類性格與溝通風格自我探索情境題。',offers:{'@type':'Offer',price:'0',priceCurrency:'USD'}};
 return <><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(data).replace(/</g,'\\u003c')}}/><Quiz initialLocale={locale as Locale}/></>;
}
