import Link from 'next/link';
import type {Locale} from '@/lib/seo';
import {birdPaths,quizDestinations,type QuizKind} from '@/lib/growth';
import {loveProfilePaths} from '@/lib/love-content';
import {loveStyles} from '@/lib/personality-tests';
import {MonetizationSlot} from './monetization-slot';
export default function ResultNext({locale,kind,leaders=[]}:{locale:Locale;kind:QuizKind;leaders?:string[]}){
 const en=locale==='en',i=en?1:0;
 return <section className="result-next"><h3>{en?'Make your result useful':'把結果帶回生活'}</h3>
 <p>{en?'Choose one description that fits and one that does not. Then try one small change in a real conversation.':'找出一段符合、一段不符合的描述，再選一個小改變，放進下一次真實對話。'}</p>
 {kind==='dope'&&<ul>{leaders.filter(code=>birdPaths[code]).map(code=><li key={code}><Link data-conversion="personality_detail_click" href={`/${locale}${birdPaths[code]}`}>{en?'Read your ':'深入閱讀你的 '}{({D:['鴿子','Dove'],O:['貓頭鷹','Owl'],P:['孔雀','Peacock'],E:['老鷹','Eagle']}[code]??[code,code])[i]}{en?' communication profile':'溝通風格'} →</Link></li>)}</ul>}
 {kind==='love-personality'&&<ul>{leaders.filter(code=>loveProfilePaths[code]).map(code=>{const style=loveStyles.find(item=>item.code===code);return <li key={code}><Link data-conversion="personality_detail_click" href={`/${locale}${loveProfilePaths[code]}`}>{en?'Read your ':'深入閱讀你的 '}{style?.name[i]??code}{en?' profile':'結果解讀'} →</Link></li>;})}</ul>}
 <Link href={`/${locale}/guides/${kind==='love-personality'?'expressing-relationship-needs':'read-personality-results'}`}>{en?(kind==='love-personality'?'Practice expressing relationship needs':'Turn percentages into everyday observations'):(kind==='love-personality'?'練習向伴侶說明需要':'把測驗比例轉成日常觀察')} →</Link>
 <h3>{en?'Explore another side of yourself':'探索另一面的自己'}</h3><div className="next-test-links">{(Object.keys(quizDestinations) as QuizKind[]).filter(k=>k!==kind).map(k=><Link key={k} data-conversion="related_test_click" href={`/${locale}${quizDestinations[k].path}`}>{quizDestinations[k].label[i]} →</Link>)}</div>
 <MonetizationSlot placement="result-secondary"/>
 </section>;
}
