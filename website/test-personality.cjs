const fs=require('fs'),ts=require('typescript'),assert=require('node:assert/strict');
const source=fs.readFileSync(require('path').join(__dirname,'lib/personality-tests.ts'),'utf8');const out=ts.transpileModule(source,{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2020}}).outputText;const mod={exports:{}};new Function('exports','require','module',out)(mod.exports,require,mod);const x=mod.exports;
assert.equal(x.personalityQuestions.length,24);assert.equal(x.loveQuestions.length,20);
for(const code of Object.keys(x.typeNames)){const answers=x.personalityQuestions.map(q=>{const left=code[q.axis]===x.axes[q.axis].code[0];return left!==!!q.reverse?0:3;});assert.equal(x.calculate('personality-16',answers).code,code);}
const tie=x.calculate('personality-16',Array(24).fill(0));assert.equal(tie.code,'XXXX');assert.equal(tie.candidates.length,16);assert.deepEqual(tie.values,[50,50,50,50]);
for(let i=0;i<4;i++){const r=x.calculate('love-personality',Array(20).fill(i));assert.equal(r.values[i],100);assert.equal(r.values.reduce((a,b)=>a+b),100);}
assert.equal(x.calculate('love-personality',Array.from({length:20},(_,i)=>i%4)).code,'W+C+A+G');
for(const slug of ['personality-16','love-personality']){assert.equal(x.validTestAnswers(slug,[]),false);assert.equal(x.validTestAnswers(slug,Array(x.getQuestions(slug).length).fill(-1)),false);for(const q of x.getQuestions(slug)){assert.equal(q.options.length,4);assert.ok(q.q.every(Boolean));assert.ok(q.options.every(p=>p.length===2&&p.every(Boolean)));}}
console.log('Passed: 16 type outcomes, reverse scoring, exact ties, all love styles, bilingual completeness and invalid answers.');
