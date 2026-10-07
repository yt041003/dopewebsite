import type {ContentPage,Section} from './editorial';
import type {TextPair} from './type-content';

const s=(heading:TextPair,body:TextPair):Section=>({heading,body});

export const topicClusters:ContentPage[]=[
 {
  path:'/topics',
  kind:'hub',
  title:['人格與關係主題地圖：從測驗走到日常','Personality and relationship topic map: from quizzes to everyday life'],
  description:['按人格偏好、關係需要、溝通方式與自我探索四個主題，找到 Twynzo 的免費測驗、結果解讀和實用指南。','Browse Twynzo by personality preferences, relationship needs, communication styles and self-discovery, with free quizzes, result profiles and practical guides.'],
  published:'2026-10-08',
  links:['/topics/personality','/topics/relationships','/topics/communication','/topics/self-discovery','/tests','/guides'],
  sections:[
   s(['人格偏好','Personality preferences'],['從 16 型人格探索開始，再閱讀 16 個類型輪廓、四組偏好與結果解讀。重點不是把人固定成一類，而是把四個面向連回具體情境。','Start with the 16-type exploration, then read sixteen profiles, four preference dimensions and guidance on interpreting results. The goal is to connect dimensions to real situations rather than fixing a person into a label.']),
   s(['關係與親密感','Relationships and closeness'],['從戀愛人格測驗觀察表達在乎、陪伴、實際照顧與共同成長，再用關係指南把結果轉成需要、界線與可回應的請求。','Use the love personality quiz to reflect on expression, presence, practical care and shared growth, then turn results into needs, boundaries and answerable requests with relationship guides.']),
   s(['溝通與合作','Communication and teamwork'],['DOPE 四鳥測驗聚焦溝通選擇；風格文章和團隊練習則把速度、細節、氣氛與目標差異轉成可以一起工作的下一步。','The DOPE bird quiz focuses on communication choices. Style profiles and teamwork exercises turn differences in pace, detail, atmosphere and goals into practical next steps.']),
   s(['自我探索方法','Self-discovery methods'],['先理解測驗能說甚麼、不能說甚麼，再比較結果與真實生活。Twynzo 公開方法、限制和編輯原則，讓你知道內容如何製作和更新。','Understand what a quiz can and cannot say, then compare the result with real life. Twynzo publishes its methodology, limitations and editorial approach so you can see how content is made and updated.']),
  ],
 },
 {
  path:'/topics/personality',
  kind:'hub',
  title:['人格測驗與 16 型人格：偏好、結果與日常解讀','Personality tests and 16 types: preferences, results and everyday interpretation'],
  description:['從免費 16 型人格測驗、16 個人格結果頁與偏好指南，理解 E/I、S/N、T/F、J/P 如何連回日常選擇。','Explore the free 16-type quiz, sixteen result profiles and preference guides to connect E/I, S/N, T/F and J/P with everyday choices.'],
  published:'2026-10-08',
  links:['/tests/personality-16','/personality','/guides/personality-preferences','/guides/read-personality-results','/guides/dope-vs-16-types','/methodology','/insights/personality-data'],
  sections:[
   s(['先做測驗，再讀面向','Start with the quiz, then read the dimensions'],['24 道原創題目分成四組偏好，每組保留接近分數與完全同分。先看每個面向的比例，再看四字母組合，可以減少只記一個標籤而忽略細節。','Twenty-four original items are split across four preference pairs, preserving close scores and exact ties. Reading each dimension before the four-letter combination helps avoid reducing the result to a single label.']),
   s(['16 個結果頁是比較工具','Use the sixteen profiles for comparison'],['每個類型頁都包含優勢、盲點、溝通、關係、工作環境與成長練習。讀完自己的類型後，再選一個只有一個字母不同的類型，找出哪些描述真正依情境改變。','Each type profile covers strengths, blind spots, communication, relationships, work environments and growth experiments. After your result, compare a neighboring type that differs by one letter and notice what changes by context.']),
   s(['不要把偏好當能力','Preferences are not abilities'],['外向不等於社交能力高，思考偏好也不等於沒有感受。Twynzo 的比例描述本次回答，不是人口百分位、智力、準確率或適合職業的分數。','Extraversion is not social skill, and a Thinking preference does not mean a lack of feeling. Twynzo percentages describe these answers, not population percentiles, intelligence, accuracy or career suitability.']),
   s(['用觀察驗證結果是否有用','Test usefulness with observation'],['挑一個描述，在一週內記錄三個符合和一個不符合的情境。若結果沒有幫助，可以放下；自我探索的價值來自更清楚的觀察，不是維持某個人格標籤。','Choose one description and record three situations that fit and one that does not during the week. If a result is not useful, set it aside; self-reflection is valuable when it sharpens observation, not when it preserves a label.']),
  ],
 },
 {
  path:'/topics/relationships',
  kind:'hub',
  title:['戀愛人格與關係需要：表達、陪伴、界線與成長','Love personality and relationship needs: expression, presence, boundaries and growth'],
  description:['免費戀愛人格測驗、四種結果解讀與關係指南，幫你把相處偏好轉成更清楚的需要、界線和對話。','Use the free love personality quiz, four result profiles and relationship guides to turn connection preferences into clearer needs, boundaries and conversations.'],
  published:'2026-10-08',
  links:['/tests/love-personality','/love/warm-communicator','/love/present-companion','/love/practical-carer','/love/growing-explorer','/guides/expressing-relationship-needs','/guides/relationship-check-in','/guides/infp-love','/methodology','/insights/personality-data'],
  sections:[
   s(['四種風格不是配對排名','Four styles, not a compatibility ranking'],['戀愛人格測驗比較暖心表達、專注陪伴、踏實照顧與共同成長在本次回答中的比例。沒有最佳風格，也沒有哪兩種一定更適合交往。','The love personality quiz compares Warm communication, Present companionship, Practical care and Shared growth in your answers. There is no best style and no pair that is guaranteed to make a better relationship.']),
   s(['付出方式和想收到的方式可以不同','How you give and receive care can differ'],['你可能喜歡幫忙做事，壓力大時卻想被安靜陪伴。讀結果時分開問「我自然怎樣付出？」和「我現在希望收到甚麼？」會比只看最高分更有用。','You may enjoy helping practically while wanting quiet presence under stress. Separate “How do I naturally give care?” from “What support do I want now?” rather than relying only on the top score.']),
   s(['把結果變成可以回答的請求','Turn a result into an answerable request'],['與其說「你都不懂我」，可以說「今晚我想先被聽五分鐘，再一起想方法」。好的關係對話要談行為、影響與需要，而不是用測驗結果替彼此下定論。','Instead of a global judgment, make a request someone can answer. Useful relationship conversations focus on behavior, impact and needs rather than using quiz results as verdicts about each other.']),
   s(['單身也可以使用','You can use it while single'],['可以回想過往互動，或想像希望建立的關係方式。重點是整份測驗盡量採用一致參考情境，避免每題在不同人物和理想狀態之間切換。','You can reflect on past interactions or the kind of relationship you want to build. Use a reasonably consistent reference throughout the quiz rather than switching between different people and idealized situations for every item.']),
  ],
 },
 {
  path:'/topics/communication',
  kind:'hub',
  title:['溝通風格與團隊合作：DOPE 四鳥的實用解讀','Communication styles and teamwork: practical DOPE bird reflections'],
  description:['從 DOPE 鳥類性格測驗、四種溝通風格與團隊練習，理解速度、細節、關係和目標差異怎樣影響合作。','Use the DOPE bird quiz, four communication profiles and teamwork exercises to explore how pace, detail, relationships and goals shape collaboration.'],
  published:'2026-10-08',
  links:['/dope','/dope/dove','/dope/owl','/dope/peacock','/dope/eagle','/guides/communication-differences','/guides/dope-team-exercise','/tests/love-personality','/methodology','/insights/personality-data'],
  sections:[
   s(['DOPE 在看甚麼？','What does DOPE look at?'],['Twynzo 用 20 個原創情境比較四種溝通取向：鴿子的關係與理解、貓頭鷹的細節與證據、孔雀的交流與可能性、老鷹的目標與行動。','Twynzo uses twenty original scenarios to compare four communication orientations: Dove for relationship and understanding, Owl for detail and evidence, Peacock for exchange and possibilities, and Eagle for goals and action.']),
   s(['不同風格不是高低之分','Styles are differences, not rankings'],['每一種方式在某些情境都有價值。問題通常不在「哪個人比較好」，而在速度、資訊量和支持方式是否被說清楚。','Each approach can be useful in different situations. The practical question is usually whether pace, information needs and forms of support are clear—not which person is better.']),
   s(['先談需要，再談類型','Name the need before the type'],['「你就是老鷹型」很容易變成指責；「我想在明天下午前知道決定」才是一個可回應的需要。類型可以提示問題，但不應成為替行為找藉口的方式。','“You are such an Eagle” can become an accusation. “I need a decision by tomorrow afternoon” is answerable. A style can suggest a question but should not excuse behavior.']),
   s(['團隊最有用的是翻譯差異','Teamwork improves when differences are translated'],['想快速推進的人可以先給方向和截止點，需要細節的人再補關鍵風險；偏重關係的人指出對人的影響，喜歡發想的人提出替代方案。把差異變成分工，比要求大家變得一樣更實際。','Someone who wants speed can name direction and timing; a detail-focused person can surface key risks; a relationship-focused person can note people impact; an idea-focused person can offer alternatives. Turning differences into roles is more practical than making everyone work the same way.']),
  ],
 },
 {
  path:'/topics/self-discovery',
  kind:'hub',
  title:['自我探索測驗怎樣用才有幫助？方法、限制與下一步','How to use self-discovery quizzes well: method, limits and next steps'],
  description:['了解人格測驗能提供甚麼、不能提供甚麼，閱讀 Twynzo 的方法、編輯原則、隱私說明與結果解讀指南。','Learn what personality quizzes can and cannot provide through Twynzo’s methodology, editorial policy, privacy notes and result-reading guides.'],
  published:'2026-10-08',
  links:['/tests','/guides','/methodology','/editorial-policy','/privacy','/guides/read-personality-results','/insights/personality-data'],
  sections:[
   s(['把測驗當作問題產生器','Treat a quiz as a question generator'],['有用的結果不是「它完全定義我」，而是「哪一段值得我在生活中觀察？」用結果提出一個可驗證的問題，再找符合與不符合的例子。','A useful result is not “this fully defines me” but “which part is worth observing in my life?” Turn a result into a question you can test, then look for both examples and counterexamples.']),
   s(['看清楚測驗的證據邊界','Check the evidence boundary'],['娛樂或自我反思測驗不應被包裝成臨床診斷、招聘工具或關係成功預測。Twynzo 公開題數、計分、同分處理和未完成的驗證，讓用途與證據保持一致。','Entertainment and self-reflection quizzes should not be presented as clinical diagnoses, hiring tools or predictors of relationship success. Twynzo publishes item counts, scoring, tie handling and validation limits so claims stay within the evidence.']),
   s(['留意情境和重測差異','Notice context and retest differences'],['壓力、近期經驗和對題目的理解都可能改變回答。重測有差異時，先找是哪個情境改變，而不是把每次結果都當成新的固定身份。','Stress, recent experience and question interpretation can change answers. When a retest differs, first ask which context changed instead of treating every result as a new fixed identity.']),
   s(['知道內容如何製作','Know how the content is made'],['Twynzo 的原創內容使用 AI 輔助研究、撰寫與開發，但不冒充心理師審核或學術驗證。編輯原則頁會說明來源、人工檢查、修訂與更正方式。','Twynzo uses AI assistance in research, writing and development of original content without pretending it has psychologist review or academic validation. The editorial policy explains sourcing, human checks, revisions and corrections.']),
  ],
 },
];
