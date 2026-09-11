import type {Metadata} from 'next';
import {siteUrl,metadataFor,type Locale} from './seo';
import {contentPages,findContent} from './editorial';
export const corePaths=['','/dope','/tests/personality-16','/tests/love-personality'];
export const publicPaths=[...corePaths,...contentPages.filter(p=>p.index!==false).map(p=>p.path)];
export function localizedUrl(locale:Locale,path:string){return `${siteUrl()}/${locale}${path}`;}
export function alternateUrls(path:string){return {'zh-Hant':localizedUrl('zh-hant',path),en:localizedUrl('en',path),'x-default':localizedUrl('zh-hant',path)};}
export function pageMetadata(locale:Locale,path:string,title:string,description:string):Metadata {
 const image=path.startsWith('/dope')?'/birds-pixel.png':'/twynzo-icon.png';
 return {...metadataFor(locale),title,description,robots:{index:process.env.VERCEL_ENV!=='preview',follow:true},alternates:{canonical:localizedUrl(locale,path),languages:alternateUrls(path)},openGraph:{type:'website',siteName:'Twynzo',title,description,url:localizedUrl(locale,path),locale:locale==='en'?'en_US':'zh_TW',alternateLocale:[locale==='en'?'zh_TW':'en_US'],images:[{url:image,alt:path.startsWith('/dope')?'Twynzo DOPE':'Twynzo'}]},twitter:{card:'summary_large_image',title,description,images:[image]}};
}
export function linkTitle(path:string,locale:Locale):string {
 const en=locale==='en';
 const names:Record<string,[string,string]>={'':['Twynzo','Twynzo'],'/dope':['DOPE 鳥類性格測驗','DOPE bird personality test'],'/tests/personality-16':['16 型人格探索','16-type personality quiz'],'/tests/love-personality':['戀愛人格測驗','Love personality quiz']};
 return findContent(path)?.title[en?1:0]??names[path]?.[en?1:0]??'Twynzo';
}
export function breadcrumbPaths(path:string):string[]{
 if(!path)return [''];
 if(path.startsWith('/personality/'))return ['', '/tests','/tests/personality-16',path];
 if(path.startsWith('/dope/'))return ['', '/tests','/dope',path];
 if(path.startsWith('/guides/'))return ['', '/guides',path];
 if(path.startsWith('/tests/')||path==='/dope')return ['', '/tests',path];
 return ['',path];
}
export function pageSchema(locale:Locale,path:string,title:string,description:string,article=false,published?:string,updated?:string,quiz=false){
 const base=siteUrl(),url=localizedUrl(locale,path);
 const publisher={'@type':'Organization','@id':base+'/#organization',name:'Twynzo',url:base,logo:{'@type':'ImageObject',url:base+'/twynzo-icon.png'}};
 const website={'@type':'WebSite','@id':base+'/#website',name:'Twynzo',alternateName:'TWYNZO',url:base,inLanguage:['zh-Hant','en'],publisher:{'@id':base+'/#organization'}};
 const webpage={'@type':'WebPage','@id':url+'#webpage',url,name:title,description,inLanguage:locale==='en'?'en':'zh-Hant',isPartOf:{'@id':base+'/#website'},...(quiz?{mainEntity:{'@id':url+'#quiz'}}:{})};
 const crumbs={'@type':'BreadcrumbList',itemListElement:breadcrumbPaths(path).map((p,i)=>({'@type':'ListItem',position:i+1,name:linkTitle(p,locale),item:localizedUrl(locale,p)}))};
 return {'@context':'https://schema.org','@graph':[publisher,website,webpage,...(quiz?[{'@type':'WebApplication','@id':url+'#quiz',name:title,url,inLanguage:webpage.inLanguage,description,applicationCategory:'LifestyleApplication',operatingSystem:'Any',isAccessibleForFree:true,offers:{'@type':'Offer',price:'0',priceCurrency:'USD'},publisher:{'@id':base+'/#organization'}}]:[]),...(path?[crumbs]:[]),...(article?[{'@type':'Article',headline:title,description,...(published?{datePublished:published}:{}),...(updated?{dateModified:updated}:{}),inLanguage:webpage.inLanguage,mainEntityOfPage:{'@id':url+'#webpage'},author:publisher,publisher,image:base+'/twynzo-icon.png'}]:[])]};
}
