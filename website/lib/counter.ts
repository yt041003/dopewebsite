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

type CounterRpcName='dope_get_count'|'dope_complete'|'twynzo_get_count'|'twynzo_complete'|'dope_complete_v2'|'twynzo_complete_v2';
class RpcError extends Error {constructor(public status:number){super('Counter unavailable');}}
async function rpcJson(name:string,args:Record<string,unknown>={}){
 if(!configured())throw Error('Counter not configured');
 const response=await fetch(`${process.env.SUPABASE_URL}/rest/v1/rpc/${name}`,{method:'POST',headers:{apikey:process.env.SUPABASE_PUBLISHABLE_KEY!,'Content-Type':'application/json'},body:JSON.stringify(args),cache:'no-store',signal:AbortSignal.timeout(8000)});
 if(!response.ok)throw new RpcError(response.status);
 return response.json() as Promise<unknown>;
}
export async function counterRpc(name:CounterRpcName,args:Record<string,unknown>={}){
 const data=await rpcJson(name,args);
 if(!data||typeof data!=='object'||!Number.isSafeInteger((data as {total?:unknown}).total)||(data as {total:number}).total<BASELINE)throw Error('Invalid counter response');
 return data as {total:number;added?:boolean};
}
function missingV2(error:unknown){return error instanceof RpcError&&error.status===404;}
export async function completeVisitor(id:string,result?:string){
 if(result){
  try{return await counterRpc('dope_complete_v2',{p_visitor:visitorHash(id),p_secret:secret(),p_result:result});}
  catch(error){if(!missingV2(error))throw error;}
 }
 return counterRpc('dope_complete',{p_visitor:visitorHash(id),p_secret:secret()});
}
export async function completeTestVisitor(slug:string,id:string,result?:string){
 if(result){
  try{return await counterRpc('twynzo_complete_v2',{p_slug:slug,p_visitor:visitorHash(id),p_secret:secret(),p_result:result});}
  catch(error){if(!missingV2(error))throw error;}
 }
 return counterRpc('twynzo_complete',{p_slug:slug,p_visitor:visitorHash(id),p_secret:secret()});
}

export type AggregateRow={slug:'dope'|'love-personality'|'personality-16';resultCode:string;completions:number;sample:number;recordedFrom:string};
export async function resultAggregates():Promise<AggregateRow[]>{
 if(!configured())return [];
 let data:unknown;
 try{data=await rpcJson('twynzo_result_aggregates');}
 catch(error){if(missingV2(error))return [];throw error;}
 if(!Array.isArray(data))throw Error('Invalid aggregate response');
 const rows:AggregateRow[]=[];
 for(const row of data){
  if(!row||typeof row!=='object')continue;
  const r=row as Record<string,unknown>;
  if(!['dope','love-personality','personality-16'].includes(String(r.slug)))continue;
  const completions=Number(r.completions),sample=Number(r.sample),resultCode=String(r.result_code??''),recordedFrom=String(r.recorded_from??'');
  if(!Number.isSafeInteger(completions)||completions<0||!Number.isSafeInteger(sample)||sample<0||!resultCode||!/^\d{4}-\d{2}-\d{2}$/.test(recordedFrom))continue;
  rows.push({slug:r.slug as AggregateRow['slug'],resultCode,completions,sample,recordedFrom});
 }
 return rows;
}
