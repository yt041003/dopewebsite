import type {ContentPage,Section} from './editorial';
import type {TextPair} from './type-content';

const s=(heading:TextPair,body:TextPair):Section=>({heading,body});

export const loveProfilePaths:Record<string,string>={
 W:'/love/warm-communicator',
 C:'/love/present-companion',
 A:'/love/practical-carer',
 G:'/love/growing-explorer',
};

export const loveProfiles:ContentPage[]=[
 {
  path:'/love/warm-communicator',
  kind:'type',
  title:['暖心表達者：把在乎說清楚，也留空間聆聽','Warm communicator: express care clearly and keep listening'],
  description:['深入理解暖心表達者如何用說話、肯定與聆聽建立連結，並練習在關係中把感受轉成清楚、可回應的需要。','Explore how a Warm communicator uses words, affirmation and listening to build connection, with practical ways to turn feelings into clear, answerable needs.'],
  published:'2026-10-08',
  links:['/tests/love-personality','/topics/relationships','/guides/expressing-relationship-needs','/guides/relationship-check-in','/love/present-companion','/love/practical-carer','/methodology'],
  sections:[
   s(['這個結果代表甚麼？','What does this result mean?'],['在 Twynzo 戀愛人格測驗中，暖心表達者代表你在本次回答裡較常選擇用語言、回應與理解去表達在乎。這是一個相處偏好的提示，不是依附類型、診斷，也不代表你每次都需要用說話解決事情。','In Twynzo’s love personality quiz, Warm communicator means your answers more often used words, responses and understanding to express care. It is a reflection prompt, not an attachment type or diagnosis, and it does not mean every situation should be solved by talking.']),
   s(['優勢：讓感受容易被理解','Strength: making feelings easier to understand'],['你可能自然地說出欣賞、關心與鼓勵，亦願意聽對方把事情說完。當訊息具體，例如「我很欣賞你今天主動處理那件事」，對方更容易知道哪個行動真正有影響。','You may naturally express appreciation, concern and encouragement while giving someone room to finish. Specific language—such as naming the action you appreciated—makes it easier to understand what actually mattered.']),
   s(['盲點：很多說話不一定等於有被聽見','Blind spot: more words do not always mean more understanding'],['焦急時不斷解釋，可能令對方沒有整理或回應的空間。可以先問：「你想我聽，還是一起想方法？」若對方需要時間，也可以約定何時再談，而不是立即追問。','When anxious, repeated explanation can leave little room for the other person to process or respond. Ask whether they want listening or ideas. If they need time, agree on when to return rather than pressing for an immediate answer.']),
   s(['你可能怎樣接收在乎','How you may receive care'],['你可能對真誠、具體的肯定特別有感，但別假設自己一定只需要言語。壓力大時，也可能更需要陪伴、實際幫忙或安靜空間。把當下需要說成一個可做到的請求，比要求對方「應該懂」更有效。','Sincere, specific affirmation may feel meaningful, but words need not be your only need. Under stress you may prefer presence, practical help or quiet. Turning the current need into a doable request is more useful than expecting someone to automatically know it.']),
   s(['衝突時：描述事情、影響和請求','In conflict: describe the event, impact and request'],['把「你從來不在乎」改成「昨天我分享那件事時你一直看電話，我有點失落；下次可以先聽我兩分鐘嗎？」具體內容讓對方知道可以回應甚麼，也減少用人格標籤替代真正問題。','Replace a global judgment with the event, its impact and a request. Concrete wording shows what can be answered and keeps a personality label from replacing the real issue.']),
   s(['界線：坦白不等於必須即時回答','Boundary: openness does not require an immediate answer'],['重視溝通仍可以接受暫停。重要的是清楚說明：「我想談，但現在需要休息，我們今晚九點再回來。」這同時保留連結與界線。','Valuing communication can include a pause. Naming both the intention to talk and the time you need preserves connection and a boundary at the same time.']),
   s(['一個一週練習','A one-week experiment'],['這一週選三次你想表達在乎的時刻，只說一個具體觀察、一句感受和一個問題。記下對方最有回應的是哪一部分，也找一次不用說很多話、只專心陪伴的反例。','Choose three moments this week to express care using one concrete observation, one feeling and one question. Notice what the other person responds to, and include one counterexample where quiet presence works better than many words.']),
   s(['下一步：比較其他戀愛風格','Next step: compare another love style'],['如果這篇只符合一部分，可以比較專注陪伴者或踏實照顧者。混合結果很常見於這種相對選擇題；較有用的問題是「哪種方式在甚麼情境最像我？」而不是急著選唯一標籤。','If this profile fits only partly, compare Present companion or Practical carer. With relative-choice items, a blended result is possible. Ask which approach fits you in which context rather than forcing a single label.']),
  ],
 },
 {
  path:'/love/present-companion',
  kind:'type',
  title:['專注陪伴者：用時間和注意力建立連結','Present companion: build connection through time and attention'],
  description:['了解專注陪伴者如何透過共同時間、專心在場與穩定節奏表達在乎，也學習在親密與個人空間之間保持彈性。','Understand how a Present companion uses shared time, attention and steady presence to express care while keeping flexibility between closeness and personal space.'],
  published:'2026-10-08',
  links:['/tests/love-personality','/topics/relationships','/guides/relationship-check-in','/guides/expressing-relationship-needs','/love/warm-communicator','/love/growing-explorer','/methodology'],
  sections:[
   s(['這個結果代表甚麼？','What does this result mean?'],['專注陪伴者代表你在本次測驗較常把「一起好好相處」選作表達在乎的方式。你可能重視沒有被打斷的時間、共同日常和在重要時刻出現。這不是對社交需求或依附狀態的診斷。','Present companion means your answers often treated meaningful time together as a way to show care. You may value uninterrupted attention, shared routines and showing up for important moments. This is not a diagnosis of social needs or attachment.']),
   s(['優勢：把注意力變成可感受到的支持','Strength: turning attention into felt support'],['專心聽一段話、陪對方散步或一起完成平凡事情，都能讓連結有可見的時間。你可能不需要大型驚喜，反而重視對方是否真的在場。','Listening without distraction, taking a walk or doing ordinary things together can give connection visible time. You may care less about a large gesture than whether someone is genuinely present.']),
   s(['盲點：在一起不等於已經互相理解','Blind spot: being together is not the same as understanding'],['長時間相處仍可能避開重要話題。若氣氛變得模糊，可以問：「最近有沒有甚麼你想我們多談一點？」把時間和清楚溝通配合，會比只增加相處時數更有用。','Spending a lot of time together can still leave important topics untouched. Ask what deserves more conversation. Pairing time with clear communication is often more useful than simply adding more hours together.']),
   s(['你可能怎樣接收在乎','How you may receive care'],['被預留時間或得到完整注意力可能令你感到被重視，但每次都要求同步節奏可能造成壓力。可以一起定義甚麼算有品質的相處，例如二十分鐘不看電話，也容許各自休息。','Reserved time and full attention may feel meaningful, but expecting the same rhythm every time can create pressure. Define what quality time means together, such as twenty phone-free minutes, while allowing individual rest.']),
   s(['衝突時：先約定何時回來','In conflict: agree on when to return'],['如果你想立即靠近而對方需要冷靜，暫停不一定代表拒絕。可以先約定一個具體時間再談，既避免無限拖延，也不逼對方在未準備時回答。','If you want closeness immediately while the other person needs space, a pause need not mean rejection. Agree on a specific time to return so the issue is not abandoned and no one is forced to answer before they are ready.']),
   s(['界線：陪伴不是全天候可用','Boundary: presence is not constant availability'],['願意陪伴不表示任何時候都必須回覆。把工作、休息與個人時間說清楚，反而能令共同時間更專注。','Being present does not mean being available at every moment. Naming work, rest and personal time can make shared time more intentional.']),
   s(['一個一週練習','A one-week experiment'],['安排兩次短而專注的相處，每次只有一個共同活動；另留一次各自做自己的事。比較哪種安排讓你更有連結感，也問對方的感受是否一樣。','Plan two short, focused moments with one shared activity and one period of separate time. Compare which arrangement feels more connecting to you, and ask whether the other person experiences it the same way.']),
   s(['下一步：比較其他戀愛風格','Next step: compare another love style'],['若你也常用行動照顧人，可以讀踏實照顧者；若共同體驗與未來計畫更吸引你，可以比較共同成長者。結果是一張地圖，不是關係規則。','If practical action is also common for you, read Practical carer. If shared experiences and future plans stand out, compare Growing explorer. The result is a map for reflection, not a relationship rule.']),
  ],
 },
 {
  path:'/love/practical-carer',
  kind:'type',
  title:['踏實照顧者：把在乎化成可靠的小行動','Practical carer: turn care into reliable everyday action'],
  description:['探索踏實照顧者如何用具體幫忙、記住細節與履行承諾建立安全感，同時避免未經詢問就替對方解決一切。','Explore how a Practical carer uses concrete help, remembered details and follow-through to show care without assuming every problem needs to be solved for someone else.'],
  published:'2026-10-08',
  links:['/tests/love-personality','/topics/relationships','/guides/expressing-relationship-needs','/guides/relationship-check-in','/love/warm-communicator','/love/present-companion','/methodology'],
  sections:[
   s(['這個結果代表甚麼？','What does this result mean?'],['踏實照顧者代表你在本次回答中較常選擇「做一件有用的事」來表達在乎，例如分擔、準備或記住對方需要。這描述行動偏好，不是責任感或愛得更多的排名。','Practical carer means your answers often chose doing something useful—helping, preparing or remembering a need—as a way to show care. It describes an action preference, not a ranking of responsibility or how much someone loves.']),
   s(['優勢：讓支持變得可靠','Strength: making support reliable'],['準時做到答應的事情、留意小細節和在忙亂時分擔，都能把抽象的關心變成實際體驗。你可能特別擅長發現「有甚麼可以處理」。','Following through, noticing details and sharing work during busy periods can make care tangible. You may be quick to spot something useful that can be done.']),
   s(['盲點：幫忙之前仍需要同意','Blind spot: help still needs consent'],['對方訴苦時立即解決問題，可能不是他當下想要的支持。先問「你想我聽，還是幫你處理一件事？」可以避免好意變成接管。','Immediately solving a problem may not be the support someone wants in that moment. Ask whether they want listening or practical help so good intentions do not become taking over.']),
   s(['你可能怎樣接收在乎','How you may receive care'],['你可能會留意對方是否記得承諾和生活細節，但也值得說出自己想要的協助。長期默默承擔再期待對方自動發現，容易累積失望。','You may notice whether someone remembers promises and daily details, but it is still useful to name the support you want. Carrying everything silently and hoping it will be noticed can build disappointment.']),
   s(['衝突時：先分清問題和情緒','In conflict: separate the task from the feeling'],['有些爭執需要解決一件具體事情，有些先需要被理解。可以問：「我們現在先處理安排，還是先談剛才的感受？」避免用效率跳過關係修復。','Some conflicts need a practical decision; others first need understanding. Ask whether to handle the arrangement or the feeling first so efficiency does not skip relationship repair.']),
   s(['界線：可靠不等於全部由你負責','Boundary: reliable does not mean responsible for everything'],['清楚分配責任，能讓照顧保持可持續。當你沒有能力再承擔，可以說明能做哪一部分，而不是先答應再耗盡自己。','Clear responsibility keeps care sustainable. When you cannot take on more, name what part you can do rather than agreeing first and exhausting yourself later.']),
   s(['一個一週練習','A one-week experiment'],['這週在主動幫忙前先問一次對方真正想要的支持；同時提出一件你希望別人幫你的具體小事。觀察「詢問」是否比直接猜測更有效。','This week, ask what support is actually wanted before stepping in, and make one concrete request for help yourself. Notice whether asking works better than guessing.']),
   s(['下一步：比較其他戀愛風格','Next step: compare another love style'],['如果你重視可靠行動，也可能同時重視專注陪伴。比較另一篇結果時，找出你「喜歡付出」與「希望收到」是否相同。','If reliable action matters to you, focused presence may matter too. When comparing another profile, notice whether the care you like to give is the same as the care you hope to receive.']),
  ],
 },
 {
  path:'/love/growing-explorer',
  kind:'type',
  title:['共同成長者：用好奇與共同目標讓關係前進','Growing explorer: connect through curiosity and shared growth'],
  description:['認識共同成長者如何透過新體驗、共同目標與彼此鼓勵建立連結，也練習接受不同步調與平凡日常。','Learn how a Growing explorer connects through new experiences, shared goals and encouragement while making room for different paces and ordinary routines.'],
  published:'2026-10-08',
  links:['/tests/love-personality','/topics/relationships','/guides/relationship-check-in','/guides/expressing-relationship-needs','/love/present-companion','/love/practical-carer','/methodology'],
  sections:[
   s(['這個結果代表甚麼？','What does this result mean?'],['共同成長者代表你在本次回答較常把新體驗、共同目標或彼此進步視為連結方式。你可能喜歡一起學習、計畫和探索，但這不代表關係必須不斷升級才有價值。','Growing explorer means your answers often treated new experiences, shared goals or mutual growth as ways to connect. You may enjoy learning, planning and exploring together, but a relationship does not need constant upgrading to be valuable.']),
   s(['優勢：把未來變成可以一起參與的事','Strength: making the future something shared'],['提出新點子、鼓勵對方嘗試和把願望變成小步驟，可以為關係帶來方向感。你可能很自然地問：「我們下一步想一起做甚麼？」','New ideas, encouragement and small shared steps can give a relationship a sense of direction. You may naturally ask what you could try together next.']),
   s(['盲點：成長不等於持續優化對方','Blind spot: growth is not continuous improvement of another person'],['如果每個興趣都變成目標、每個問題都要改善，對方可能感到被評估。先確認這是不是共同想要的改變，也讓「甚麼都不用進步」的日子存在。','If every interest becomes a target and every problem requires improvement, the other person may feel evaluated. Check whether a change is actually shared and leave room for days when nothing needs to improve.']),
   s(['你可能怎樣接收在乎','How you may receive care'],['有人願意和你一起想像未來、學新事物或支持個人目標，可能令你很有連結感。也可以直接問自己：今天我需要的是鼓勵向前，還是只是被陪伴？','Someone imagining the future, learning with you or supporting a personal goal may feel connecting. Also ask whether today you want encouragement to move forward or simply someone to be with you.']),
   s(['衝突時：不要把爭執變成成長計畫','In conflict: do not turn every disagreement into a growth project'],['有時最重要的是承認影響和修復，而不是立即總結「我們學到了甚麼」。先處理當下需要，再決定是否一起找新的做法。','Sometimes the important step is acknowledging impact and repairing it, not immediately turning the disagreement into a lesson. Address the current need first, then decide whether a new approach would help.']),
   s(['界線：共同目標必須真的是共同','Boundary: a shared goal must actually be shared'],['旅行、學習、財務或生活安排都可能牽涉不同資源與步調。把「我希望」和「我們已同意」分開，讓對方有真正拒絕或修改的空間。','Travel, learning, finances and routines involve different resources and paces. Separate what you hope for from what both people have actually agreed to, leaving genuine room to decline or change the plan.']),
   s(['一個一週練習','A one-week experiment'],['挑一個兩人都想做的小目標，把它縮到一週內可以完成的一步；另外安排一段完全沒有產出要求的相處。比較兩種時刻各自帶來甚麼。','Choose one small goal both people genuinely want and reduce it to a step you can complete this week. Also plan time together with no productivity goal at all, then compare what each moment gives you.']),
   s(['下一步：比較其他戀愛風格','Next step: compare another love style'],['如果共同體驗比目標更重要，可以讀專注陪伴者；如果你更常用具體行動支持對方，可以比較踏實照顧者。把結果當作對話起點，不是最佳配對規則。','If shared experience matters more than goals, read Present companion. If concrete support is more typical, compare Practical carer. Use the result to start a conversation, not as a compatibility rule.']),
  ],
 },
];
