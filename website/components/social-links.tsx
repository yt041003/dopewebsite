import type {Locale} from '@/lib/seo';
import {socialDestinations} from '@/lib/social-sharing';
export default function SocialLinks({locale,path,text}:{locale:Locale;path:string;text:string}){
 const en=locale==='en';
 return <div className="social-destinations"><p>{en?'Choose an app, or save your card below for Instagram and Threads.':'選擇分享平台，或儲存下方圖卡後上載至 Instagram、Threads。'}</p><div>{socialDestinations(path,text).map(item=><a key={item.name} href={item.href} target="_blank" rel="noopener noreferrer" aria-label={(en?'Share on ':'分享到 ')+item.name+(en?' (opens a new tab)':'（開啟新分頁）')} data-conversion="result_share">{item.name}</a>)}</div></div>;
}
