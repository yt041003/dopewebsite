import type {MetadataRoute} from 'next';
import {siteUrl,locales} from '@/lib/seo';
export default function sitemap():MetadataRoute.Sitemap { const base=siteUrl();return ['', '/dope'].flatMap(suffix=>locales.map(locale=>({url:`${base}/${locale}${suffix}`,alternates:{languages:{'zh-Hant':`${base}/zh-hant${suffix}`,en:`${base}/en${suffix}`}}}))); }
