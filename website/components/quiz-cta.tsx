import Link from 'next/link';
import type {Locale} from '@/lib/seo';
import {quizDestinations,type QuizKind} from '@/lib/growth';
export default function QuizCta({locale,kind}:{locale:Locale;kind:QuizKind}){
 const item=quizDestinations[kind],i=locale==='en'?1:0;
 return <aside className="quiz-cta" aria-label={i?'Try a free quiz':'試試免費測驗'}><p>{item.prompt[i]}</p><Link className="primary" href={`/${locale}${item.path}`} data-conversion="guide_to_quiz_click">{item.label[i]} →</Link></aside>;
}
