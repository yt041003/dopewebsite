import {notFound} from 'next/navigation';
import {contentPages,findContent} from '@/lib/editorial';
import {locales,type Locale} from '@/lib/seo';
import {pageMetadata} from '@/lib/page-seo';
import EditorialPage from '@/components/editorial-page';
type Props={params:Promise<{locale:string;content:string[]}>};
function resolve(locale:string,content:string[]){const page=findContent('/'+content.join('/'));if(!locales.includes(locale as Locale)||!page)notFound();return {page,locale:locale as Locale};}
export function generateStaticParams(){return locales.flatMap(locale=>contentPages.map(page=>({locale,content:page.path.slice(1).split('/')})));}
export async function generateMetadata({params}:Props){const p=await params;const {page,locale}=resolve(p.locale,p.content),i=locale==='en'?1:0;return {...pageMetadata(locale,page.path,page.title[i]+' | Twynzo',page.description[i]),robots:{index:page.index!==false&&process.env.VERCEL_ENV!=='preview',follow:true}};}
export default async function Page({params}:Props){const p=await params;const {page,locale}=resolve(p.locale,p.content);return <EditorialPage locale={locale} page={page}/>;}
