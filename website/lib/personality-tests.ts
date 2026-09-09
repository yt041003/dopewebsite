export type Pair = readonly [string,string];
export type TestSlug = 'personality-16'|'love-personality';
export type Question={q:Pair;options:Pair[];axis?:number;reverse?:boolean};
export const axes=[
 {code:['E','I'],name:['外向 / 內向','Extraversion / Introversion'],left:['外向','Extraversion'],right:['內向','Introversion'],tip:['在交流與獨處之間，安排適合自己的充電節奏。','Make room for the mix of company and solitude that restores you.']},
 {code:['S','N'],name:['實感 / 直覺','Sensing / Intuition'],left:['實感','Sensing'],right:['直覺','Intuition'],tip:['既看具體證據，也留意新的可能，讓兩種視角互相補充。','Balance concrete evidence with new possibilities.']},
 {code:['T','F'],name:['思考 / 情感','Thinking / Feeling'],left:['思考','Thinking'],right:['情感','Feeling'],tip:['說明你的判斷準則，也聽聽決定如何影響他人。','Explain your criteria and listen to how a decision affects others.']},
 {code:['J','P'],name:['判斷 / 感知','Judging / Perceiving'],left:['判斷','Judging'],right:['感知','Perceiving'],tip:['把必要的安排做好，同時為變化留出空間。','Plan what matters and leave some room for change.']},
] as const;
export const preferenceNotes:Record<string,Pair>={
 E:['你的回答較常透過互動整理想法、從交流中獲得動力。討論時可以先說想法，也留出安靜整理和聽別人說的時間。','Your answers favor thinking through interaction and drawing energy from exchange. Share ideas while leaving room to reflect and listen.'],
 I:['你的回答較常先在心裡整理，再投入交流。可以預留思考時間，也讓身邊的人知道你何時想分享。','Your answers favor private reflection before engaging. Make time to think and let others know when you are ready to share.'],
 S:['你的回答較重視可觀察的資訊與具體步驟。這能幫你把事情落實，也可以刻意問一句：還有其他可能嗎？','Your answers emphasize observable information and concrete steps. This can help you put ideas into practice; also ask what other possibilities exist.'],
 N:['你的回答較容易從模式與可能性出發。探索新方向之餘，可以用一個具體例子或小實驗檢查想法。','Your answers start with patterns and possibilities. Ground new directions in a concrete example or a small experiment.'],
 T:['你的回答較先比較邏輯、準則與利弊。說明理由時，也可主動確認對方的感受與實際處境。','Your answers prioritize logic, criteria and trade-offs. When explaining a decision, also check feelings and personal circumstances.'],
 F:['你的回答較先考慮價值、需要與關係影響。照顧人的同時，也把自己的判斷準則與界線說清楚。','Your answers prioritize values, needs and relationship effects. Alongside care for others, make your criteria and boundaries clear.'],
 J:['你的回答較偏好提前安排與明確結論。善用規劃的安心感，也可以為新資訊留下調整空間。','Your answers favor planning ahead and reaching closure. Use that structure while allowing adjustments when new information arrives.'],
 P:['你的回答較偏好彈性與保留選擇。享受即興之餘，替重要事項設定一個簡單的截止點會有幫助。','Your answers favor flexibility and keeping options open. Alongside spontaneity, set a simple decision point for important commitments.'],
};
const agreement:Pair[]=[['非常像我','Very like me'],['比較像我','Somewhat like me'],['比較不像我','Somewhat unlike me'],['非常不像我','Very unlike me']];
const statements:Pair[][]=[
 [['想整理想法時，我傾向先和別人談談。','I tend to talk things through with someone to organize my thoughts.'],['忙完一天後，我通常想先獨處一段時間。','After a busy day, I usually want some time alone first.'],['認識新朋友時，我通常會主動開啟話題。','When meeting new people, I usually start the conversation.'],['參與討論前，我喜歡先在心裡想清楚。','I like to think things through privately before joining a discussion.'],['有趣的群體活動常讓我更有精神。','An engaging group activity often energizes me.'],['有空檔時，我喜歡安靜地投入自己的興趣。','In my free time, I enjoy quietly immersing myself in my interests.']],
 [['學習新技能時，我喜歡具體的示範與步驟。','When learning a skill, I like concrete examples and steps.'],['接觸新題目時，我先想它能帶來哪些可能。','With a new topic, I first imagine the possibilities it could open up.'],['說明事情時，我常用實際發生的例子。','I often explain things using examples of what actually happened.'],['我容易注意到不同事情之間的隱含連結。','I readily notice underlying connections between different things.'],['處理問題時，我通常先確認眼前的事實。','When solving a problem, I usually establish the immediate facts first.'],['比起照著熟悉的方法，我喜歡設想新的做法。','I enjoy imagining a new approach more than following a familiar one.']],
 [['做重要決定時，我先比較各選項的邏輯與利弊。','For an important decision, I first compare the logic and trade-offs.'],['我會優先想一個決定是否符合我重視的價值。','I first consider whether a decision fits my personal values.'],['評估方案時，我偏好一套一致的判斷準則。','When evaluating proposals, I prefer consistent criteria.'],['給建議時，我首先關心對方的感受與需要。','When giving advice, I first consider the other person’s feelings and needs.'],['意見不同時，我常先檢查論點是否合理。','In a disagreement, I first examine whether the reasoning holds up.'],['考慮改變時，我自然會先想到對關係的影響。','When considering a change, I naturally think first about its effect on relationships.']],
 [['安排旅行時，我喜歡提前確定主要行程。','When traveling, I like to settle the main itinerary in advance.'],['休假時，我喜歡當天再看心情決定活動。','On a day off, I like choosing activities as the day unfolds.'],['事情有了明確結論，我通常比較安心。','I usually feel more at ease once a matter is settled.'],['面對新資訊，我喜歡保留修改計畫的餘地。','I like keeping plans open to revision when new information appears.'],['開始一個任務前，我喜歡先訂好執行順序。','Before a task, I like deciding the sequence of steps.'],['即使沒有完整安排，我也享受即興探索。','I enjoy exploring spontaneously without a complete plan.']],
];
export const personalityQuestions:Question[]=Array.from({length:6},(_,n)=>statements.map((group,axis)=>({q:group[n],axis,reverse:n%2===1,options:agreement}))).flat();
export const loveStyles=[
 {code:'W',name:['暖心表達者','Warm communicator'],desc:['用言語與傾聽，讓愛被看見。','You make care visible through words and listening.'],tip:['把喜歡與需要說得具體，也問問對方喜歡怎樣被理解。','Be specific about your affection and needs, and ask how your partner likes to be understood.']},
 {code:'C',name:['專注陪伴者','Present companion'],desc:['透過共同的時間，慢慢建立連結。','You build connection through meaningful time together.'],tip:['一起安排有品質的相處，也尊重各自休息和獨處的空間。','Plan meaningful time together while respecting each person’s rest and solitude.']},
 {code:'A',name:['踏實照顧者','Practical carer'],desc:['把在乎化成可靠的小行動。','You turn care into reliable everyday actions.'],tip:['幫忙之前先確認對方的需要，也讓對方知道你希望獲得什麼支持。','Ask what help is wanted before stepping in, and express the support you need too.']},
 {code:'G',name:['共同成長者','Growing explorer'],desc:['用新體驗與共同目標，讓關係前進。','You connect through new experiences and shared goals.'],tip:['分享你的期待，但讓步調由雙方一起決定；平凡的日常也值得珍惜。','Share your hopes and agree on a pace together; ordinary moments matter too.']},
] as const;
const lovePrompts:Pair[]=[['想讓喜歡的人感受到你的在乎，你最自然會⋯⋯','To show someone you care, you most naturally…'],['對方度過辛苦的一天，你會先⋯⋯','After your partner has a hard day, you first…'],['安排紀念日，你最想重視⋯⋯','For an anniversary, you most want to focus on…'],['久未見面，再次相聚時你最期待⋯⋯','After time apart, you most look forward to…'],['對方正在準備一個重要計畫，你會⋯⋯','When your partner prepares for an important project, you…'],['理想的週末相處是⋯⋯','Your ideal weekend together involves…'],['一段關係讓你覺得踏實，通常是因為⋯⋯','A relationship feels reassuring when…'],['你想慶祝對方的小成就，會⋯⋯','To celebrate a small achievement, you…'],['生活節奏很忙時，你傾向用什麼維繫關係？','During a busy period, how do you tend to stay connected?'],['一起遇到困難時，你最自然的貢獻是⋯⋯','Facing a difficulty together, your natural contribution is…'],['收到哪一種心意，你比較容易被打動？','Which gesture is most likely to move you?'],['當彼此有點疏遠，你會先嘗試⋯⋯','When you feel a little distant, you first try to…'],['剛開始了解一個人時，你最想知道⋯⋯','When getting to know someone, you most want to learn…'],['你心中的浪漫，比較接近⋯⋯','Romance, to you, is closer to…'],['對方想學一件新事物，你會⋯⋯','When your partner wants to learn something new, you…'],['一起度過平凡的晚上，你偏好⋯⋯','On an ordinary evening together, you prefer…'],['對方問你需要什麼支持，你會比較想說⋯⋯','Asked what support you need, you would most likely say…'],['回想讓你珍惜的關係片刻，通常是⋯⋯','A relationship moment you treasure is usually…'],['談到未來，你最希望彼此持續⋯⋯','Looking ahead, you most hope you keep…'],['如果今天只有一點時間表達愛，你會⋯⋯','With only a little time to express care today, you…']];
const loveOptions:Pair[][]=[
 [['認真說出我欣賞對方的地方','Say what I appreciate about them'],['留一段不被打擾的相處時間','Make uninterrupted time together'],['主動做好一件對方需要的小事','Do a small useful thing for them'],['邀請對方一起嘗試新體驗','Invite them to try something new together']],
 [['聽他說完，回應他的感受','Listen and acknowledge their feelings'],['陪在身旁，一起放慢步調','Stay with them and slow down together'],['分擔今天還沒做完的事情','Help with unfinished tasks'],['一起想下一步可以怎樣調整','Explore what could work better next time']],
 [['寫一段真誠的心裡話','Write something heartfelt'],['安排專屬於彼此的一天','Set aside a day just for us'],['準備貼近對方需要的小驚喜','Prepare something thoughtful and useful'],['創造一個沒試過的共同回憶','Create a shared experience we have not tried']],
 [['好好聊聊這段時間的心情','Talk about how we have been feeling'],['沒有壓力地待在一起','Simply spend relaxed time together'],['替對方處理旅途後的小麻煩','Help them settle in after the journey'],['計畫下一次可以一起做的事','Plan something we can look forward to']],
 [['鼓勵並肯定他的努力','Offer encouragement and recognition'],['在他需要時陪他練習','Keep them company while they practice'],['協助整理材料或處理雜事','Help organize materials or practical tasks'],['一起討論想達成的目標','Discuss the goals they want to pursue']],
 [['深入聊聊最近的想法','Have a thoughtful conversation'],['一起散步或安靜看電影','Take a walk or watch a film together'],['一起把生活整理得更舒服','Make everyday life more comfortable'],['去沒到過的地方走走','Explore somewhere new']],
 [['我們會坦白表達感受','We express our feelings openly'],['我們有穩定的相處時間','We make regular time together'],['我們答應的事會做到','We follow through on promises'],['我們願意支持彼此成長','We support each other’s growth']],
 [['說清楚我替他高興的原因','Say specifically why I am happy for them'],['一起享受慶祝的時光','Share a celebratory moment'],['準備他喜歡的餐點或小禮物','Prepare a favorite meal or small gift'],['一起規劃下一個值得期待的挑戰','Imagine the next exciting challenge together']],
 [['傳一句真誠的關心','Send a sincere message'],['約定短短但專注的相處','Arrange a short but focused catch-up'],['幫彼此減少生活上的負擔','Lighten everyday burdens'],['保留一個共同期待的小計畫','Keep a small shared plan to look forward to']],
 [['把感受與需要說清楚','Clarify feelings and needs'],['願意一起待著面對它','Stay present and face it together'],['先處理一件能解決的小事','Take care of one manageable task'],['一起尋找新的可能與方法','Explore new possibilities together']],
 [['被真誠理解與肯定','Being understood and appreciated'],['被專心陪伴','Receiving undivided time'],['對方記得並照顧我的需要','Having my needs remembered and supported'],['對方願意與我一起成長','Someone wanting to grow with me']],
 [['溫和地說出我的感受','Gently express how I feel'],['邀請對方一起好好相處','Invite meaningful time together'],['用小行動重新表達關心','Show care through small actions'],['一起找一件能重新連結的活動','Find an activity that reconnects us']],
 [['他怎樣表達感受','How they express feelings'],['他喜歡怎樣相處','How they enjoy spending time together'],['生活中什麼支持對他最有用','What practical support helps them'],['他對未來有哪些好奇與期待','What they are curious about for the future']],
 [['一句被認真說出口的心意','A sincerely expressed feeling'],['一段專屬彼此的時光','Time that belongs to just us'],['一個剛好被照顧到的細節','A thoughtful detail taken care of'],['一段一起探索未知的旅程','A journey into something new together']],
 [['聽他分享學習的心情','Listen to how learning feels'],['陪他一起投入時間','Spend time alongside them'],['幫他找需要的工具或資源','Help find useful tools or resources'],['一起設定小目標並嘗試','Try it together with small goals']],
 [['聊一件彼此真正在意的事','Talk about something that matters'],['舒服地待著，享受陪伴','Relax and enjoy each other’s presence'],['一起煮飯或打理生活','Cook or take care of daily life together'],['嘗試新遊戲或新點子','Try a new game or idea']],
 [['聽聽我，讓我說完','Listen and let me finish'],['留一點時間陪我','Spend some time with me'],['幫我分擔一件具體的事','Help with a specific task'],['陪我想想還有哪些可能','Explore the possibilities with me']],
 [['一場真誠的對話','An honest conversation'],['一段安靜卻不孤單的時間','A quiet moment that felt connected'],['被對方細心照顧的時刻','A moment of thoughtful practical care'],['一起完成新挑戰的時刻','A new challenge we completed together']],
 [['分享真實的感受','Sharing honest feelings'],['為彼此留出時間','Making time for one another'],['在日常裡可靠地支持彼此','Being reliable in everyday life'],['保持好奇，探索新的方向','Staying curious and exploring new directions']],
 [['說一句具體的感謝','Express specific appreciation'],['專心陪對方聊一會','Give them my full attention'],['做好一件貼心的小事','Do one thoughtful thing'],['提議下次一起的小冒險','Suggest a little adventure for next time']],
];
export const loveQuestions:Question[]=lovePrompts.map((q,i)=>({q,options:loveOptions[i]}));
export function getQuestions(slug:TestSlug){return slug==='personality-16'?personalityQuestions:loveQuestions;}
export function validTestAnswers(slug:TestSlug,value:unknown):value is number[]{return Array.isArray(value)&&value.length===getQuestions(slug).length&&value.every(n=>Number.isInteger(n)&&n>=0&&n<=3);}
export function calculate(slug:TestSlug,answers:number[]){
 if(!validTestAnswers(slug,answers))throw Error('Complete every question');
 if(slug==='love-personality'){const values=loveStyles.map((_,i)=>answers.filter(n=>n===i).length*5);return {values,code:loveStyles.filter((_,i)=>values[i]===Math.max(...values)).map(s=>s.code).join('+'),candidates:[] as string[]};}
 const totals=[0,0,0,0];personalityQuestions.forEach((q,i)=>{totals[q.axis!]+=(3-answers[i]*2)*(q.reverse?-1:1);});
 const values=totals.map(n=>Math.round((n+18)/36*100));
 const letters=totals.map((n,i)=>n===0?'X':axes[i].code[n>0?0:1]);
 const candidates=letters.reduce<string[]>((list,letter,i)=>list.flatMap(prefix=>(letter==='X'?axes[i].code:[letter]).map(l=>prefix+l)),['']);
 return {values,code:letters.join(''),candidates};
}
export const typeNames:Record<string,Pair>={ISTJ:['務實規劃者','Practical planner'],ISFJ:['細心支持者','Thoughtful supporter'],INFJ:['深思引路者','Reflective guide'],INTJ:['策略構想者','Strategic designer'],ISTP:['靈活實踐者','Adaptable problem-solver'],ISFP:['溫柔體驗者','Gentle experiencer'],INFP:['理想探索者','Idealistic explorer'],INTP:['好奇分析者','Curious analyst'],ESTP:['即興行動者','Spontaneous doer'],ESFP:['熱情體驗者','Enthusiastic experiencer'],ENFP:['可能性探索者','Possibility explorer'],ENTP:['創意挑戰者','Inventive challenger'],ESTJ:['清晰組織者','Clear organizer'],ESFJ:['熱心連結者','Warm connector'],ENFJ:['鼓舞同行者','Encouraging companion'],ENTJ:['目標推進者','Goal-driven organizer']};
