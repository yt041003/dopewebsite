import type {MonetizationOffer,Placement} from '@/lib/monetization';
import {validOffer} from '@/lib/monetization';
// Omitted offers produce no DOM or empty space. Future configuration is explicit.
export function MonetizationSlot({placement,offer}:{placement:Placement;offer?:MonetizationOffer}){
 if(!offer||offer.placement!==placement||!validOffer(offer))return null;
 if(offer.kind==='ad')return <aside className="monetization-slot" aria-label={offer.label} style={{minHeight:offer.reservedHeight}}><small>{offer.label}</small>{offer.content}</aside>;
 return <aside className="monetization-slot"><p>{offer.kind==='affiliate'?offer.disclosure:offer.description}</p><a href={offer.href} rel={offer.kind==='affiliate'?'sponsored noopener noreferrer':undefined}>{offer.label}</a></aside>;
}
