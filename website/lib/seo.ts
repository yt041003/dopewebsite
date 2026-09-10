import { tests } from './catalog';
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
 const title=en?'DOPE TEST: Free Bird Personality Test | Twynzo':'DOPE TEST 鳥類性格測驗｜免費人格測試 — Twynzo';
 const description=en?'Discover your Dove, Owl, Peacock and Eagle communication styles with 20 original questions. Free results, practical tips and a quiz to share with friends.':'20 道免費原創情境題，探索鴿子、貓頭鷹、孔雀、老鷹四種心理與溝通風格，查看比例及實用建議，分享給朋友一起玩。約 4 分鐘，不需註冊。';
 return {metadataBase:new URL(base),icons:{icon:[{url:'/twynzo-icon.png',type:'image/png'}],apple:'/twynzo-icon.png'},title,description,alternates:{canonical:`/${locale}/dope`,languages:{'zh-Hant':'/zh-hant/dope',en:'/en/dope','x-default':'/zh-hant/dope'}},robots:{index:process.env.VERCEL_ENV!=='preview',follow:true},openGraph:{type:'website',siteName:'Twynzo',title,description,url:`/${locale}/dope`,locale:en?'en_US':'zh_TW',alternateLocale:[en?'zh_TW':'en_US'],images:[{url:'/birds-pixel.png',alt:en?'Dove, Owl, Peacock and Eagle mascots':'鴿子、貓頭鷹、孔雀與老鷹吉祥物'}]},twitter:{card:'summary_large_image',title,description,images:['/birds-pixel.png']},verification:{google:[googleVerification,'a_ZXANbWS_HEjQGXwti1i2OfU3HXVSp1efxviY3woms']}};
}



export function exploreMetadata(locale:Locale,test?:typeof tests[number]):Metadata {
 const en=locale==='en',i=en?1:0,suffix=test?'/tests/'+test.slug:'';
 const title=test?.slug==='personality-16'?(en?'Free 16-Type Personality Quiz, Inspired by MBTI | Twynzo':'16 型人格測驗｜MBTI 靈感的免費人格探索 — Twynzo'):test?test.name[i]+(en?' — Free quiz | Twynzo':'｜免費測驗 — Twynzo'):(en?'Free Personality Tests — Explore Your Inner Universe | Twynzo':'免費人格測驗，探索你的內在宇宙｜Twynzo');
 const description=test?.slug==='personality-16'?(en?'Learn about MBTI’s four preference pairs, 16 personality types and how they differ from DOPE. Take Twynzo’s original 24-question quiz and download your result.':'認識 MBTI 四組偏好、16 型人格與 DOPE TEST 的差異，了解人格測試如何幫助自我探索。免費完成 24 道原創情境題，探索你的偏好並下載結果圖卡。'):test?(en?'Reflect on affection, companionship, practical care and shared growth in 20 original questions. Free bilingual results and a downloadable share card.':'20 道原創情境題，探索表達在乎、專注陪伴、踏實照顧與共同成長的相處偏好。免費查看中英文結果，下載圖卡與朋友交流。'):(en?'Explore personality, communication and relationships with Twynzo. Start the free bilingual DOPE quiz and discover more self-reflection tests.':'透過 Twynzo 探索人格、溝通與親密關係。立即體驗免費中英文 DOPE 鳥類性格測驗，發現更多認識自己的方式。');
 return {...metadataFor(locale),title,description,robots:{index:process.env.VERCEL_ENV!=='preview',follow:true},alternates:{canonical:`/${locale}${suffix}`,languages:{'zh-Hant':`/zh-hant${suffix}`,en:`/en${suffix}`,'x-default':`/zh-hant${suffix}`}},openGraph:{type:'website',siteName:'Twynzo',title,description,url:`/${locale}${suffix}`,images:['/twynzo-icon.png']},twitter:{card:'summary_large_image',title,description,images:['/twynzo-icon.png']}};
}
