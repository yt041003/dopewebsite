export function socialDestinations(path:string,text:string){
 // A canonical public path only; never carry answers, query parameters or session IDs.
 const url=new URL(path,'https://twynzo.com');
 if(url.origin!=='https://twynzo.com'||!/^\/(zh-hant|en)(\/|$)/.test(url.pathname))throw new Error('Invalid share path');
 const clean=url.origin+url.pathname,combined=text+' '+clean;
 return [
  {name:'WhatsApp',href:'https://wa.me/?'+new URLSearchParams({text:combined})},
  {name:'LINE',href:'https://social-plugins.line.me/lineit/share?'+new URLSearchParams({url:clean,text})},
  {name:'Facebook',href:'https://www.facebook.com/sharer/sharer.php?'+new URLSearchParams({u:clean})},
  {name:'X',href:'https://x.com/intent/tweet?'+new URLSearchParams({text,url:clean})},
  {name:'Threads',href:'https://www.threads.com/intent/post?'+new URLSearchParams({text:combined})},
 ];
}
