import type {MetadataRoute} from 'next';
import {locales} from '@/lib/seo';
import {publicPaths,localizedUrl,alternateUrls} from '@/lib/page-seo';
export default function sitemap():MetadataRoute.Sitemap {return publicPaths.flatMap(path=>locales.map(locale=>({url:localizedUrl(locale,path),alternates:{languages:alternateUrls(path)}})));}
