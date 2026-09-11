import type {Locale} from './seo';
export type QuizKind='dope'|'personality-16'|'love-personality';
export const quizDestinations:Record<QuizKind,{path:string;label:readonly [string,string];prompt:readonly [string,string]}>= {
 dope:{path:'/dope',label:['開始免費 DOPE 測驗','Take the free DOPE quiz'],prompt:['想探索自己的溝通習慣？用 20 個情境找到可以練習的下一步。','Explore your communication habits through 20 situations and find something to practice.']},
 'personality-16':{path:'/tests/personality-16',label:['開始免費 16 型人格探索','Take the free 16-type quiz'],prompt:['哪些描述像你，哪些不一樣？用 24 題原創問題探索四組日常偏好。','Which descriptions fit and which do not? Explore four everyday preferences in 24 original questions.']},
 'love-personality':{path:'/tests/love-personality',label:['開始免費戀愛人格測驗','Take the free love personality quiz'],prompt:['想更清楚自己怎樣表達在乎？用結果開啟一段關於需要的對話。','Explore how you show care and use the result to start a conversation about needs.']},
};
export function quizForContent(path:string):QuizKind|null {
 if(path.startsWith('/dope/')||path==='/guides/communication-differences'||path==='/guides/dope-team-exercise')return 'dope';
 if(path==='/guides/relationship-check-in'||path==='/guides/infp-love'||path==='/guides/expressing-relationship-needs')return 'love-personality';
 if(path.startsWith('/personality')||path.startsWith('/guides/'))return 'personality-16';
 return null;
}
export const birdPaths:Record<string,string>={D:'/dope/dove',O:'/dope/owl',P:'/dope/peacock',E:'/dope/eagle'};
export function stableResultPath(locale:Locale,kind:QuizKind,code?:string):string {
 if(kind==='personality-16'&&code&&/^[EI][SN][TF][JP]$/.test(code))return `/${locale}/personality/${code.toLowerCase()}`;
 if(kind==='dope'&&code&&birdPaths[code])return `/${locale}${birdPaths[code]}`;
 return `/${locale}${quizDestinations[kind].path}`;
}
