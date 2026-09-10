import {SiteResources} from '@/components/content-navigation';
import type {Locale} from '@/lib/seo';
import {notFound} from 'next/navigation';
import {locales} from '@/lib/seo';
import '../globals.css';
import '../pixel.css';
export default async function Layout({children,params}:{children:React.ReactNode;params:Promise<{locale:string}>}){
 const {locale}=await params;
 if(!locales.includes(locale as 'en'|'zh-hant'))notFound();
 return <html lang={locale==='en'?'en':'zh-Hant'}><body><a className="skip-link" href="#main-content">{locale==='en'?'Skip to content':'跳至主要內容'}</a>{children}<div className="site-shell"><SiteResources locale={locale as Locale}/></div></body></html>;
}
