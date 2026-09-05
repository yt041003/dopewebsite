import 'server-only';
import {createHmac,randomUUID,timingSafeEqual} from 'node:crypto';
export const COOKIE='dope_visitor_v1';
export const BASELINE=3125;
function secret(){const value=process.env.COUNTER_SECRET;if(!value||value.length<32)throw Error('Counter not configured');return value;}
export function configured(){return Boolean(process.env.SUPABASE_URL&&process.env.SUPABASE_PUBLISHABLE_KEY&&process.env.COUNTER_SECRET);}
export function createVisitor(){const payload=`${randomUUID()}.${Date.now()}`;return `${payload}.${createHmac('sha256',secret()).update(payload).digest('hex')}`;}
export function readVisitor(value:string|undefined){
 if(!value)return null;const parts=value.split('.');if(parts.length!==3)return null;
 const [id,time,signature]=parts;if(!/^[a-f0-9-]{36}$/.test(id)||!/^\d{13}$/.test(time)||!/^[a-f0-9]{64}$/.test(signature))return null;
 const expected=createHmac('sha256',secret()).update(`${id}.${time}`).digest();
 if(!timingSafeEqual(expected,Buffer.from(signature,'hex'))||Number(time)>Date.now()||Date.now()-Number(time)>366*86400000)return null;
 return {id,issuedAt:Number(time)};
}
export function visitorHash(id:string){return createHmac('sha256',secret()).update('visitor:'+id).digest('hex');}
export function validAnswers(value:unknown):value is number[]{return Array.isArray(value)&&value.length===20&&value.every(n=>Number.isInteger(n)&&n>=0&&n<4);}
export async function counterRpc(name:'dope_get_count'|'dope_complete',args:Record<string,unknown>={}){
 if(!configured())throw Error('Counter not configured');
 const response=await fetch(`${process.env.SUPABASE_URL}/rest/v1/rpc/${name}`,{method:'POST',headers:{apikey:process.env.SUPABASE_PUBLISHABLE_KEY!,'Content-Type':'application/json'},body:JSON.stringify(args),cache:'no-store',signal:AbortSignal.timeout(8000)});
 if(!response.ok)throw Error('Counter unavailable');
 const data=await response.json();
 if(!data||!Number.isSafeInteger(data.total)||data.total<BASELINE)throw Error('Invalid counter response');
 return data as {total:number;added?:boolean};
}
export function completeVisitor(id:string){return counterRpc('dope_complete',{p_visitor:visitorHash(id),p_secret:secret()});}
