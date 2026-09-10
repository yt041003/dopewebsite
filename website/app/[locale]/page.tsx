import {pageSchema} from '@/lib/page-seo';
import {JsonLd} from '@/components/content-navigation';
import Explore from '@/components/explore';
import {locales,exploreMetadata,type Locale} from '@/lib/seo';
import {notFound} from 'next/navigation';
export function generateStaticParams(){return locales.map(locale=>({locale}));}
export async function generateMetadata({params}:{params:Promise<{locale:string}>}) { const {locale}=await params; if(!locales.includes(locale as Locale))notFound(); return exploreMetadata(locale as Locale); }
export default async function Page({params}:{params:Promise<{locale:string}>}){
 const {locale}=await params;if(!locales.includes(locale as Locale))notFound();

 return <><JsonLd data={pageSchema(locale as Locale,'',locale==='en'?'Free personality tests':'免費人格測驗',locale==='en'?'Explore communication, preferences and relationships with Twynzo.':'與 Twynzo 探索溝通、日常偏好與關係。')}/><Explore locale={locale as Locale}/></>;
}
