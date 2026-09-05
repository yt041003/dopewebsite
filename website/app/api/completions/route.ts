import {NextRequest,NextResponse} from 'next/server';
import {COOKIE,configured,readVisitor,validAnswers,counterRpc,completeVisitor} from '@/lib/counter';
export const dynamic='force-dynamic';
const headers={'Cache-Control':'no-store'};
export async function GET(){try{return NextResponse.json(await counterRpc('dope_get_count'),{headers});}catch{return NextResponse.json({error:'Counter temporarily unavailable'},{status:503,headers});}}
export async function POST(request:NextRequest){
 if(request.headers.get('origin')!==request.nextUrl.origin)return NextResponse.json({error:'Invalid origin'},{status:403,headers});
 if(!configured())return NextResponse.json({error:'Counter unavailable'},{status:503,headers});
 if(Number(request.headers.get('content-length'))>1024)return NextResponse.json({error:'Request too large'},{status:413,headers});
 try{
  const raw=await request.text();if(raw.length>1024)return NextResponse.json({error:'Request too large'},{status:413,headers});
  const input=JSON.parse(raw);if(!validAnswers(input.answers))return NextResponse.json({error:'Complete all 20 questions'},{status:400,headers});
  const visitor=readVisitor(request.cookies.get(COOKIE)?.value);
  if(!visitor||Date.now()-visitor.issuedAt<5000)return NextResponse.json({error:'Quiz session not ready'},{status:403,headers});
  return NextResponse.json(await completeVisitor(visitor.id),{headers});
 }catch(error){return NextResponse.json({error:error instanceof SyntaxError?'Invalid JSON':'Counter temporarily unavailable'},{status:error instanceof SyntaxError?400:503,headers});}
}
