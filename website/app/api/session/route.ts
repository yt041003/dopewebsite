import {NextRequest,NextResponse} from 'next/server';
import {COOKIE,configured,createVisitor,readVisitor} from '@/lib/counter';
export async function POST(request:NextRequest){
 if(request.headers.get('origin')!==request.nextUrl.origin)return NextResponse.json({error:'Invalid origin'},{status:403});
 if(!configured())return NextResponse.json({error:'Counter unavailable'},{status:503});
 const response=NextResponse.json({ok:true},{headers:{'Cache-Control':'no-store'}});
 if(!readVisitor(request.cookies.get(COOKIE)?.value))response.cookies.set(COOKIE,createVisitor(),{httpOnly:true,secure:request.nextUrl.protocol==='https:',sameSite:'strict',path:'/',maxAge:365*86400});
 return response;
}
