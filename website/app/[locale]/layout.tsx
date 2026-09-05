import {notFound} from 'next/navigation';
import {locales} from '@/lib/seo';
import '../globals.css';
export default async function Layout({children,params}:{children:React.ReactNode;params:Promise<{locale:string}>}){
 const {locale}=await params;
 if(!locales.includes(locale as 'en'|'zh-hant'))notFound();
 return <html lang={locale==='en'?'en':'zh-Hant'}><body>{children}</body></html>;
}
