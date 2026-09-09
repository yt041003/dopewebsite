import PersonalityQuiz from '@/components/personality-quiz';
import { tests } from '@/lib/catalog';
import { locales,exploreMetadata,type Locale } from '@/lib/seo';
import { notFound } from 'next/navigation';
export function generateStaticParams(){return locales.flatMap(locale=>tests.map(test=>({locale,test:test.slug})));}
export async function generateMetadata({params}:{params:Promise<{locale:string;test:string}>}) {
 const {locale,test:slug}=await params;const test=tests.find(t=>t.slug===slug);if(!test||!locales.includes(locale as Locale))notFound();
 return exploreMetadata(locale as Locale,test);
}
export default async function Page({params}:{params:Promise<{locale:string;test:string}>}) {
 const {locale,test:slug}=await params;const test=tests.find(t=>t.slug===slug);if(!test||!locales.includes(locale as Locale))notFound();
 return <PersonalityQuiz locale={locale as Locale} slug={test.slug}/>;
}
