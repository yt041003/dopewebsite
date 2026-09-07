import Explore from '@/components/explore';
import {locales,exploreMetadata,siteUrl,type Locale} from '@/lib/seo';
import {notFound} from 'next/navigation';
export function generateStaticParams(){return locales.map(locale=>({locale}));}
export async function generateMetadata({params}:{params:Promise<{locale:string}>}) { const {locale}=await params; if(!locales.includes(locale as Locale))notFound(); return exploreMetadata(locale as Locale); }
export default async function Page({params}:{params:Promise<{locale:string}>}){
 const {locale}=await params;if(!locales.includes(locale as Locale))notFound();
 const data={'@context':'https://schema.org','@type':'WebSite',name:'Twynzo',url:siteUrl(),inLanguage:['zh-Hant','en']};
 return <><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(data)}}/><Explore locale={locale as Locale}/></>;
}
