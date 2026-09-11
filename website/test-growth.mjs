import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import {fileURLToPath,pathToFileURL} from 'node:url';
import ts from 'typescript';
import assert from 'node:assert/strict';
const root=path.dirname(fileURLToPath(import.meta.url));
const temp=fs.mkdtempSync(path.join(os.tmpdir(),'twynzo-growth-test-'));
const written=[];
function prepare(name){
 const dest=path.join(temp,name+'.mjs');
 if(written.includes(dest))return dest;
 written.push(dest);
 const source=fs.readFileSync(path.join(root,'lib',name+'.ts'),'utf8');
 let out=ts.transpileModule(source,{compilerOptions:{module:ts.ModuleKind.ESNext,target:ts.ScriptTarget.ES2020}}).outputText;
 out=out.replace(/from ['"]\.\/([^'"]+)['"]/g,(_,dependency)=>{prepare(dependency);return `from './${dependency}.mjs'`;});
 fs.writeFileSync(dest,out);return dest;
}
async function load(name){return import(pathToFileURL(prepare(name)).href);}
try {
const {contentPages}=await load('editorial'),{typeProfiles}=await load('type-content'),{quizForContent,quizDestinations,stableResultPath}=await load('growth');
const paths=new Set(['','/dope','/tests/personality-16','/tests/love-personality',...contentPages.map(p=>p.path)]);
assert.equal(contentPages.length,35);assert.equal(paths.size,39);
for(const page of contentPages){
 assert.ok(page.title.every(Boolean)&&page.description.every(Boolean));
 assert.ok(page.sections.every(s=>s.heading.length===2&&s.body.length===2&&s.body.every(Boolean)));
 assert.ok(page.links.every(p=>paths.has(p)),page.path);
 const quiz=quizForContent(page.path);if(page.kind==='type'||page.kind==='guide')assert.ok(quiz,page.path);
 if(quiz)assert.ok(paths.has(quizDestinations[quiz].path));
 if(page.path.startsWith('/personality/'))assert.equal(page.sections.length,10);
 if(page.path.startsWith('/dope/'))assert.equal(page.sections.length,8);
}
for(const [path,kind] of [['/guides/personality-preferences','personality-16'],['/guides/dope-team-exercise','dope'],['/guides/relationship-check-in','love-personality']]){
 const page=contentPages.find(p=>p.path===path);assert.ok(page);assert.equal(quizForContent(path),kind);assert.ok(page.sections.some(s=>s.worksheet?.every(Boolean)));assert.ok(contentPages.filter(p=>p.path!==path).some(p=>p.links.includes(path)));
 for(const section of page.sections){if(section.table){assert.ok(section.table.rows.every(row=>row.length===section.table.headers.length));}if(section.items)assert.ok(section.items.every(item=>item.length===2&&item.every(Boolean)));}
}
const {comparePreferences}=await load('compatibility');
const keys=new Set();
for(const a of typeProfiles)for(const b of typeProfiles){
 const r=comparePreferences({first:a.code,second:b.code});
 assert.equal(r.pairKey,comparePreferences({first:b.code,second:a.code}).pairKey);
 assert.equal(r.indexable,false);assert.equal(r.dimensions.length,4);keys.add(r.pairKey);
 if(a.code===b.code)assert.ok(r.dimensions.every(d=>d.samePreference));
}
assert.equal(keys.size,136);assert.throws(()=>comparePreferences({first:'XXXX',second:'INFP'}));
assert.equal(stableResultPath('en','personality-16','XXXX'),'/en/tests/personality-16');
assert.equal(stableResultPath('zh-hant','dope','O'),'/zh-hant/dope/owl');
assert.equal(stableResultPath('en','dope','D+O'),'/en/dope');
const {socialDestinations}=await load('social-sharing');
for(const item of socialDestinations('/zh-hant/personality/infp?answers=secret#session','測驗 & reflection')){
 const u=new URL(item.href);assert.equal(u.protocol,'https:');
 assert.ok(!decodeURIComponent(u.search).includes('secret'));assert.ok(!decodeURIComponent(u.search).includes('#session'));
}
assert.throws(()=>socialDestinations('https://example.com','test'));
const {validOffer}=await load('monetization');
assert.equal(validOffer({kind:'affiliate',placement:'article-break',label:'Book',disclosure:'',href:'https://example.com'}),false);
assert.equal(validOffer({kind:'premium',placement:'result-secondary',label:'Report',description:'Details',href:'javascript:alert(1)'}),false);
assert.equal(validOffer({kind:'ad',placement:'article-break',label:'Ad',reservedHeight:0}),false);
console.log('PASS: bilingual content graph, quiz CTAs, 256 compatibility inputs, tie-safe stable shares, stripped query/session data and disabled-offer validation.');

} finally { for(const file of written)if(fs.existsSync(file))fs.unlinkSync(file);fs.rmdirSync(temp); }
