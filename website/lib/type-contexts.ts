import type {TextPair} from './type-content';

// Original situations to compare with experience, not predictions about a type.
export const contextHeadings:TextPair[]=[['衝突時，先確認甚麼？','What to check during conflict'],['作決定的習慣','Decision-making habits'],['社交節奏與恢復','Social pace and recovery']];
export const typeContexts:Record<string,TextPair[]>={
 ISTJ:[
  ['當約好的安排臨時改變，你可能首先追問誰沒有履行承諾。先確認改變是否出於新限制，再討論如何補救。例如朋友遲到，分開說明「我等了多久」和「下次怎樣通知」，比推斷對方不重視你更容易解決問題。','A changed agreement may draw your attention to who failed to follow through. Check whether new constraints arose before discussing repair. If a friend is late, separate the time you waited from how you want to be notified next time, rather than assuming they do not value you.'],
  ['比較選項時，你可能先看過往紀錄和可執行步驟。選一門課除了查完成率，也問它是否符合現在的目標；熟悉的選項未必最適合已改變的需要。替重要決定保留一次重新檢查假設的機會。','Past performance and workable steps may guide a choice. When selecting a course, ask whether it serves your current goal as well as checking its track record. A familiar option may not suit a changed need; schedule a chance to revisit the assumptions.'],
  ['有開始和結束時間的小聚會，可能比臨時的大型活動容易安排。你可以預先說明能停留多久，並偶爾接受一個範圍清楚的新邀請。偏好可預期的社交，不代表不珍惜朋友。','A small gathering with a clear start and finish may be easier to accommodate than an open-ended event. State how long you can stay and occasionally try a new invitation with clear boundaries. Predictable social plans can coexist with close friendships.'],
 ],
 ISFJ:[
  ['你可能先忍讓，希望不愉快自行消退。若同一問題反覆出現，把最近一次的情境說清楚，而不是一次翻出所有委屈。例如分工不均時，提出下週具體怎樣分配，再確認對方是否真正同意。','You may accommodate first, hoping discomfort will pass. If an issue repeats, describe the latest example instead of presenting every accumulated grievance. For uneven chores, suggest a specific division for next week and check that agreement is genuine.'],
  ['選擇可能會先經過「大家會不會不方便」這一關。把自己的時間也列作必要條件：能幫忙不等於有餘力承擔。決定參與活動前，先查日程，再答覆能負責哪部分。','A choice may first pass through concern about inconveniencing others. Include your own time among the constraints: being able to help is not the same as having capacity. Check your calendar before specifying what part of an event you can take on.'],
  ['熟悉的人和小圈子可能讓你較容易放鬆。但每次聚會都負責照顧大家，也可能讓你回家後很累。試一次只帶一道食物、其餘交給別人，觀察單純參與時的感受。','Familiar people and smaller groups may help you relax. Being the caretaker at every gathering can still leave you exhausted. Try bringing one dish and leaving the rest to others, noticing how it feels simply to participate.'],
 ],
 INFJ:[
  ['爭論時，你可能把一句話連到整段關係的意義。先核實眼前的具體意思：「你是反對這個安排，還是擔心我們的方向？」不要把暫時分歧直接理解成價值不合；有些衝突只是時間和資訊不同。','In an argument, one remark may seem to carry the meaning of the entire relationship. Ask whether the objection concerns this arrangement or your shared direction. A temporary disagreement may reflect timing or missing information rather than incompatible values.'],
  ['長遠意義可能幫助你整理選項，也可能使日常選擇變得過重。把決定分成可修改和難以挽回兩類；對可修改的安排，用短期試行取得經驗，不必先找到完美的人生方向。','Long-term meaning may organize your options but can make everyday choices feel weighty. Separate reversible choices from difficult-to-reverse ones. A short trial can inform a changeable arrangement without requiring a perfect life direction first.'],
  ['深入的一對一交流可能比連續寒暄更有吸引力。若聚會後需要安靜，預留恢復時間，也別因此判斷所有輕鬆對話都沒有價值；共同的小事有時正是信任的起點。','A sustained one-to-one conversation may appeal more than repeated introductions. Leave quiet time after a gathering if needed, while allowing lighter conversation to matter too. Small shared experiences can be the beginning of trust.'],
 ],
 INTJ:[
  ['當方案被質疑，你可能急於證明整體邏輯。先找出對方反對的是目標、資源還是執行方法，再回應那一點。若討論的是感受，承認影響並不等於承認你的全部推理錯誤。','When a plan is challenged, you may defend its overall logic. First locate the disagreement: goal, resources or method. Respond to that part. If someone describes an emotional impact, acknowledging it does not require abandoning every part of your reasoning.'],
  ['你可能傾向選擇未來能擴充的方案。列出這個預測依賴的條件，再比較當下的成本。例如買工具時，分開真正會使用的功能與想像中的用途，避免為尚未出現的需要付出太多。','You may favor an option that can scale later. List the conditions that forecast depends on and compare present costs. When buying a tool, separate features you will actually use from imagined uses, avoiding excessive investment in needs that may not arise.'],
  ['有共同題目的交流可能較容易投入。直接約朋友一起看展或討論一本書，可以減少不知道聊甚麼的壓力。也為對方分享沒有結論的近況留位置，陪伴不一定需要議程。','A shared topic may make conversation easier. An exhibition or book can offer a starting point with a friend. Leave room for updates without a conclusion as well; spending time together need not always have an agenda.'],
 ],
 ISTP:[
  ['你可能先離開現場整理想法，但沒有交代的離開容易被理解為拒絕。說清楚需要多久，並按約定回來；回來後先回應對方最在意的一點，再處理可修正的問題。','Stepping away may help you think, but leaving without explanation can feel like refusal. Say how long you need and return as agreed. Address the other person’s main concern before working on the practical fix.'],
  ['實際試用可能比長篇介紹更能幫你判斷。替試驗設定停止條件和預算，尤其當別人也會承擔後果。能快速修正的小選擇可以邊做邊學，共同承諾則需要先說明。','Hands-on trials may inform you better than lengthy descriptions. Set a budget and stopping condition, particularly when others share the consequences. Reversible choices can support learning by doing; shared commitments need prior discussion.'],
  ['一起修東西、運動或做飯，可能讓你自然參與。若別人想聊感受，別只把活動當成代替回答的方法；可以邊走邊談，找到不必一直對望也能交流的形式。','Repairing something, exercising or cooking together may make participation natural. If someone wants to discuss feelings, an activity need not replace an answer. Talking while walking can provide a comfortable format for both action and conversation.'],
 ],
 ISFP:[
  ['受到批評時，你可能先感到自己的用心被否定。請對方指出具體行為，而不是猜整個評價：「你希望我下次提早通知嗎？」這能把對身份的壓力轉成可討論的調整。','Criticism may initially feel like rejection of your intention. Ask for the specific behavior rather than inferring a judgment of your identity: “Would you like earlier notice next time?” This turns a broad personal threat into a discussable adjustment.'],
  ['你可能在親身體驗後才知道選擇是否合適。先用短時間參與、借用或試做，並留意價格、時間和共同責任。真實感受是重要資訊，但不是唯一需要考慮的條件。','Experience may tell you whether an option fits. Try a short visit, loan or sample task while considering cost, time and shared responsibilities. Your immediate response is useful information, alongside other constraints.'],
  ['不用時刻表現的相處可能最自在。散步或一起聽音樂，也可以是完整的邀約。若你臨時不想參加，說明並提出替代時間，比讓朋友猜測是否做錯了甚麼更清楚。','Company without constant performance may feel comfortable. A walk or shared music can be a complete invitation. If you no longer feel like attending, explain and suggest another time rather than leaving a friend to wonder what went wrong.'],
 ],
 INFP:[
  ['當你重視的事被輕描淡寫，爭論可能一下變得很私人。先說出被觸動的是哪個價值，再把要求縮小到眼前行為。例如希望尊重作品，可以具體請對方先問清楚再開玩笑。','When something meaningful is dismissed, disagreement may quickly feel personal. Name the value involved and narrow your request to the immediate behavior. If you want respect for your work, ask the person to check with you before joking about it.'],
  ['你可能同時看到很多有意義的方向，因放棄任何一個而猶豫。選擇下一個月想投入的一項，不必把它當成永久身份。用可試行的承諾取代一次決定餘生，再記錄實際感受。','Several meaningful directions may make it hard to let one go. Choose what to explore for a month without treating it as a permanent identity. A trial commitment and a record of the experience can replace pressure to decide your entire future.'],
  ['你可能喜歡有想像空間的深談，卻不一定想長時間待在人群中。把聚會長度和親近程度分開看：短暫但專注的見面也能維持連結。想獨處時可主動約好下次聯絡。','Imaginative, personal conversation may appeal even when long periods in a crowd do not. Separate duration from closeness: a short, attentive meeting can sustain connection. If you need solitude, offer a next time to check in.'],
 ],
 INTP:[
  ['你可能把爭論當成共同找出漏洞，對方卻在表達受傷。先問現在需要釐清事實還是理解影響。若你確實說錯話，直接承認那一句，比繼續辯論定義更能修復對話。','You may treat an argument as a shared search for inconsistencies while the other person is expressing hurt. Ask whether facts or impact need attention first. If you said something unhelpful, acknowledge the specific remark instead of extending a debate over definitions.'],
  ['還有一個模型可以比較，可能使你難以結束分析。先訂「足夠好」的條件和截止時間；只補會改變決定的資訊。小選擇不必採用和重大承諾一樣的研究深度。','One more model to compare can keep analysis open. Set acceptable criteria and a deadline, gathering only information likely to change the choice. Small decisions do not require the same investigation as major commitments.'],
  ['共同好奇的問題可能讓你突然健談。若對方只想分享日常，先回應他的經驗，再問是否想一起拆解原因。對話的價值也可以是被理解，而非提出新理論。','A question you both find interesting may make you talkative. When someone shares an everyday experience, respond to that experience before asking whether they want to analyze its cause. Being understood can be the purpose of a conversation.'],
 ],
 ESTP:[
  ['你可能想立即把爭議處理完，對方卻需要較長反應時間。先約定何時再談，避免把沉默當作同意。提出快速方案時，也詢問它是否處理了對方真正的不滿。','You may want to settle a disagreement immediately while someone else needs more response time. Agree when to return to it instead of treating silence as consent. Check whether a quick solution addresses the concern that actually matters to them.'],
  ['眼前可用的機會可能很有吸引力。行動前用一分鐘問：最壞可接受結果是甚麼、誰會受影響、怎樣退出？這種短檢查能保留速度，也減少把風險轉嫁給別人的機會。','An immediately available opportunity may be attractive. Before acting, take a minute to ask what downside is acceptable, who is affected and how to exit. A brief check can preserve speed without transferring unexamined risk to others.'],
  ['互動和即興活動可能讓你投入。留意是否一直由自己決定節奏；邀請別人選下一個活動，或安排安靜一點的替代方案。同行者放慢步調，不一定是不想和你相處。','Interactive, spontaneous activities may engage you. Notice whether you always set the pace; let someone else choose the next activity or offer a quieter option. A companion slowing down need not mean they dislike your company.'],
 ],
 ESFP:[
  ['你可能希望氣氛快點恢復，於是用玩笑或活動轉移話題。先確認問題已被聽見，再提議休息。若對方仍在意，約一個具體時間談完，不讓愉快氣氛代替真正的修復。','You may use humor or an activity to restore the mood. First check that the concern has been heard, then suggest a break. If it remains unresolved, choose a time to finish the conversation rather than letting a pleasant atmosphere stand in for repair.'],
  ['當下的體驗和對人的影響可能很重要。安排旅行時，把喜歡的活動和固定預算一起看；保留即興額度，比完全不規劃或把行程填滿更能照顧興致與責任。','Immediate experience and effects on people may matter in a choice. For a trip, consider appealing activities alongside a fixed budget. Leaving room for spontaneity can serve both enjoyment and responsibility better than either no plan or a packed schedule.'],
  ['你可能很會把大家帶進活動，但熱鬧不代表每個人都自在。給旁觀、提早離開或只參加一部分的選擇。也觀察自己的疲倦，不必一直扮演維持氣氛的人。','You may draw people into an activity, but energy does not ensure everyone is comfortable. Allow observing, leaving early or joining only part. Notice your own fatigue too; you do not have to maintain the mood throughout.'],
 ],
 ENFP:[
  ['分歧可能引出很多相關議題，令對方不知先回應哪一個。寫下其他想談的事，這次只處理一個具體問題。理解了原因後，再一起選一個能在下週驗證的改變。','A disagreement may bring many connected issues to mind, leaving someone unsure what to answer first. Save the other topics and address one concrete issue now. Once the reasons are understood, choose one change to try during the coming week.'],
  ['新方向容易帶來動力，但每個「可以」都需要時間。選一個方案前，列出要因此暫停的事情。若不願意放下任何安排，就先做小試驗，不急著對外作完整承諾。','A new direction may bring energy, but every possibility takes time. Before choosing, list what must pause to make room. If you cannot release any current commitments, try a small experiment before promising a full project.'],
  ['認識新觀點可能讓社交很有趣，但密集交流後也可能需要整理。把聯絡名單化成少量可持續的約定，例如每月與一位朋友深談；不必以認識多少人衡量連結深度。','New perspectives can make social contact engaging while still creating a need to process afterward. Turn contacts into a few sustainable arrangements, such as one thoughtful conversation each month. The number of people you meet need not measure closeness.'],
 ],
 ENTP:[
  ['你可能透過反駁測試想法，卻讓對方覺得自己的立場一直不被接受。先重述你認同的部分，問是否願意聽另一種看法。對方拒絕繼續辯論時，也可以尊重停止。','Challenging an idea may help you test it but leave another person feeling unaccepted. Restate what you agree with and ask whether they want an alternative view. Respecting a request to stop is also part of a productive exchange.'],
  ['找出新解法可能比選定其中一個更容易。先分開發想時間與決定時間，訂三個必須符合的條件。不要在即將執行時又加入全新標準，除非真的出現重要資訊。','Finding alternatives may be easier than committing to one. Separate exploration from decision time and agree on three essential criteria. Avoid introducing entirely new standards at execution unless important new information has emerged.'],
  ['有來有往的討論可能很有活力，但不是所有人都用反駁表示投入。注意對方是否仍想參與，給較慢的回應留空間；有時一句好奇的問題，比另一個反例更能延續對話。','Lively exchanges may energize you, but not everyone uses objections to show engagement. Check that the other person still wants to participate and allow slower responses. A curious question can sometimes sustain contact better than another counterexample.'],
 ],
 ESTJ:[
  ['你可能先指出規則和責任，但衝突有時源於規則本身沒有被共同理解。請對方說明限制，再確認哪些標準必要、哪些做法可調整。共同修訂流程不等於放棄品質。','You may first point to rules and responsibilities, though the rule may never have been understood together. Ask about constraints and distinguish essential standards from adjustable methods. Revising a process together does not require abandoning quality.'],
  ['明確成果和完成期限可能有助你選擇。若時間允許，先問執行的人需要哪些資源，再承諾交付日期。決定的可行性不只取決於你自己能否做到，也包括共同承擔者的能力與容量。','Clear outcomes and deadlines may guide you. When possible, ask implementers what resources they need before committing to a delivery date. Feasibility depends on the capacity of everyone involved, not only what you could accomplish yourself.'],
  ['有任務或固定安排的聚會可能容易投入。偶爾把主辦權交給別人，練習參與不同節奏。朋友講述困難時，可以先聽完，再問他希望獲得建議還是只是有人陪伴。','Gatherings with a purpose or regular schedule may suit you. Let someone else organize occasionally and practice joining at their pace. When a friend describes a difficulty, listen before asking whether advice or company would help.'],
 ],
 ESFJ:[
  ['團體中的不和可能讓你想立即調解。先確認當事人是否需要協助，不必承擔每段關係的和諧。若爭議涉及你，直接表達自己的需要，比透過第三者傳話更清楚。','Group tension may prompt immediate mediation. Check whether those involved want help; you need not carry responsibility for every relationship. When the disagreement concerns you, state your own need directly rather than communicating through a third person.'],
  ['你可能重視選擇是否獲得大家支持。蒐集意見後，區分真正的共同限制和個人偏好；不是每個人都滿意才可以行動。說明取捨，也保留少數意見被記住的方式。','Support from the group may matter in a choice. After listening, separate shared constraints from individual preferences. Action need not wait for universal enthusiasm; explain the trade-off and preserve a way to acknowledge minority concerns.'],
  ['固定見面和日常問候可能幫你感到連結。對方回覆較慢時，先確認他的聯絡習慣，而非立即解讀成疏遠。也給自己不用即時回應所有訊息的時段。','Regular meetings and everyday check-ins may sustain connection. If replies are slower, ask about the person’s communication habits before assuming distance. Give yourself periods when you do not have to answer every message immediately either.'],
 ],
 ENFJ:[
  ['你可能想帶領對方走向和解，但對方未必準備好採用你的方案。先問他希望這段對話達成甚麼，再說你的期待。互相理解可以先於一致，別把不同意當成拒絕成長。','You may want to guide someone toward resolution before they are ready for your approach. Ask what they want from the conversation, then state your hope. Understanding can precede agreement; disagreement need not mean unwillingness to grow.'],
  ['你可能考慮一個選擇能如何幫助大家發展。把對方實際提出的目標與你想像的潛力分開，例如邀請朋友參與計畫前，先確認那是不是他現在想投入的方向。','You may consider how a choice could help people develop. Separate goals they actually name from potential you imagine. Before inviting a friend into a project, check whether that is a direction they currently want to pursue.'],
  ['深度交流與共同活動可能很重要，但持續留意所有人的感受也會消耗心力。聚會後不必逐一確認大家是否開心；容許他人照顧自己的體驗，也接受別人主動照顧你。','Meaningful conversation and shared activities may matter, while tracking everyone’s feelings can be tiring. You need not check every person’s satisfaction afterward. Let others own their experience and allow them to care for you too.'],
 ],
 ENTJ:[
  ['爭論時，你可能快速整理出結論，卻讓別人覺得尚未說完。先請對方補充你漏掉的條件，再決定下一步。共同決定需要同意；對方的不同優先次序不一定是阻礙。','You may reach a conclusion quickly in conflict while others feel unfinished. Invite the condition you may have missed before deciding a next step. Shared decisions require agreement; another priority need not be an obstacle to overcome.'],
  ['你可能著眼於影響力、資源和長期成果。除了成功指標，也列出停止或縮減計畫的條件。定期問團隊負擔是否可持續，讓進展不只由完成速度衡量。','Impact, resources and long-term outcomes may guide a choice. Define conditions for stopping or reducing a plan as well as success measures. Check whether the workload remains sustainable so progress is not measured by speed alone.'],
  ['有共同目標的交流可能很吸引你。也試試沒有產出的相處，例如吃飯時不討論改善計畫。朋友不需要每次都帶著進展來見你，關係可以容納停頓和不確定。','Contact around a shared goal may appeal to you. Try time together without an output, such as a meal without improvement plans. Friends need not bring progress to every meeting; a relationship can hold uncertainty and pauses too.'],
 ],
};
