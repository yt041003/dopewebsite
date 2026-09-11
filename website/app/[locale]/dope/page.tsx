import QuizReading from '@/components/quiz-reading';
import {Breadcrumbs,JsonLd} from '@/components/content-navigation';
import {pageSchema} from '@/lib/page-seo';
import Quiz from '@/components/quiz';
import {locales,metadataFor,type Locale} from '@/lib/seo';
import {notFound} from 'next/navigation';
export function generateStaticParams(){return locales.map(locale=>({locale}));}
export async function generateMetadata({params}:{params:Promise<{locale:string}>}) { const {locale}=await params; if(!locales.includes(locale as Locale))notFound(); return metadataFor(locale as Locale); }
export default async function Page({params}:{params:Promise<{locale:string}>}){
 const {locale}=await params;if(!locales.includes(locale as Locale))notFound();
 const en=locale==='en';
 return <><JsonLd data={pageSchema(locale as Locale,'/dope','DOPE TEST',en?'Free communication style quiz':'免費溝通風格測驗',false,undefined,undefined,true)}/><Quiz initialLocale={locale as Locale} navigation={<Breadcrumbs locale={locale as Locale} path="/dope"/>}><QuizReading locale={locale as Locale} kind="dope"/></Quiz></>;
}
