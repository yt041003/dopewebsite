import type {Locale} from './seo';
import type {QuizKind} from './growth';
export type Placement='article-break'|'result-secondary';
export type FreeReport={tier:'free';quiz:QuizKind;code:string;overview:string;strengths:string[];challenges:string[]};
export type PremiumReport={tier:'premium';version:string;locale:Locale;quiz:QuizKind;code:string;sections:{kind:'communication'|'relationships'|'work'|'conflict'|'growth'|'compatibility'|'actions';heading:string;body:string}[]};
// Server-owned product configuration only. No offers, providers or billing are enabled.
// Future report delivery must verify entitlement server-side; never ship paid data hidden in HTML.
export type MonetizationOffer=
 |{kind:'ad';placement:Placement;label:string;reservedHeight:number;content:React.ReactNode}
 |{kind:'affiliate';placement:Placement;label:string;disclosure:string;href:string}
 |{kind:'premium'|'compatibility';placement:Placement;label:string;description:string;href:string};
export function validOffer(offer:MonetizationOffer):boolean{
 if(!offer.label.trim())return false;
 if(offer.kind==='ad')return Number.isFinite(offer.reservedHeight)&&offer.reservedHeight>=100;
 if(offer.kind==='affiliate'&&!offer.disclosure.trim())return false;
 if((offer.kind==='premium'||offer.kind==='compatibility')&&!offer.description.trim())return false;
 return offer.href.startsWith('https://')||(/^\/(zh-hant|en)\//.test(offer.href)&&!offer.href.includes('\\'));
}
