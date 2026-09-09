import {NextRequest,NextResponse} from 'next/server';
import {COOKIE,configured,readVisitor,counterRpc,completeTestVisitor} from '@/lib/counter';
import {validTestAnswers} from '@/lib/personality-tests';
export const dynamic='force-dynamic';
const headers={'Cache-Control':'no-store'};
type Context={params:Promise<{test:string}>};
export async function GET(_request:NextRequest,{params}:Context){const {test}=await params;if(test!=='personality-16'&&test!=='love-personality')return NextResponse.json({error:'Unknown test'},{status:404,headers});try{return NextResponse.json(await counterRpc('twynzo_get_count',{p_slug:test}),{headers});}catch{return NextResponse.json({error:'Counter temporarily unavailable'},{status:503,headers});}}
export async function POST(request:NextRequest,{params}:Context){
 const {test}=await params;if(test!=='personality-16'&&test!=='love-personality')return NextResponse.json({error:'Unknown test'},{status:404,headers});
 if(request.headers.get('origin')!==request.nextUrl.origin)return NextResponse.json({error:'Invalid origin'},{status:403,headers});
 if(!configured())return NextResponse.json({error:'Counter unavailable'},{status:503,headers});
 if(Number(request.headers.get('content-length'))>1024)return NextResponse.json({error:'Request too large'},{status:413,headers});
 try{const raw=await request.text();if(raw.length>1024)return NextResponse.json({error:'Request too large'},{status:413,headers});const input=JSON.parse(raw);
 if(!validTestAnswers(test,input?.answers))return NextResponse.json({error:'Complete every question'},{status:400,headers});
 const visitor=readVisitor(request.cookies.get(COOKIE)?.value);if(!visitor||Date.now()-visitor.issuedAt<5000)return NextResponse.json({error:'Quiz session not ready'},{status:403,headers});
 return NextResponse.json(await completeTestVisitor(test,visitor.id),{headers});
 }catch(error){return NextResponse.json({error:error instanceof SyntaxError?'Invalid JSON':'Counter temporarily unavailable'},{status:error instanceof SyntaxError?400:503,headers});}
}
