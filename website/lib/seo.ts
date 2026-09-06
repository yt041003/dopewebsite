import type { Metadata } from 'next';
export const locales = ['zh-hant','en'] as const;
export type Locale = typeof locales[number];
// Public ownership proof issued by Google Search Console for this site's owner.
const googleVerification=process.env.GOOGLE_SITE_VERIFICATION || 'QSX9KRZWeWKr-v-SfDE_bj6YwWjqrEF9oGilaXUhGTc';
export function siteUrl() {
 // Keep production and preview canonical URLs on the public custom domain.
 if (process.env.NODE_ENV === 'production') return 'https://twynzo.com';
 const configured = process.env.NEXT_PUBLIC_SITE_URL || (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : 'http://localhost:3000');
 return new URL(configured).origin;
}
export function metadataFor(locale:Locale):Metadata {
 const en=locale==='en',base=siteUrl();
 const title=en?'Free DOPE Bird Personality Test | Communication Styles':'DOPE 鳥類性格測驗｜免費心理與溝通風格測試';
 const description=en?'Discover your Dove, Owl, Peacock and Eagle communication styles with 20 original questions. Free results, practical tips and a quiz to share with friends.':'20 道免費原創情境題，探索鴿子、貓頭鷹、孔雀、老鷹四種心理與溝通風格，查看比例及實用建議，分享給朋友一起玩。約 4 分鐘，不需註冊。';
 return {metadataBase:new URL(base),title,description,alternates:{canonical:`/${locale}`,languages:{'zh-Hant':'/zh-hant',en:'/en','x-default':'/zh-hant'}},robots:{index:true,follow:true},openGraph:{type:'website',siteName:'DOPE TEST',title,description,url:`/${locale}`,locale:en?'en_US':'zh_TW',alternateLocale:[en?'zh_TW':'en_US'],images:[{url:'/birds.png',alt:en?'Dove, Owl, Peacock and Eagle mascots':'鴿子、貓頭鷹、孔雀與老鷹吉祥物'}]},twitter:{card:'summary_large_image',title,description,images:['/birds.png']},verification:{google:googleVerification}};
}

