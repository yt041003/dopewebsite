import type {MetadataRoute} from 'next';
import {siteUrl,locales} from '@/lib/seo';
export default function sitemap():MetadataRoute.Sitemap { const base=siteUrl();return locales.map(locale=>({url:`${base}/${locale}`,alternates:{languages:{'zh-Hant':`${base}/zh-hant`,en:`${base}/en`}}})); }
