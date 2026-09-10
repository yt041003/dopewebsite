# Twynzo SEO audit — 2026-09-09

Baseline: commit a04a134. Inspected App Router pages/layout, quiz components and data, catalog, metadata, robots/sitemap, redirects, CSS, animation, image assets, counters and sharing. This report precedes implementation; completion evidence belongs in SEO-IMPLEMENTATION.md.

## Architecture and findings

| Area | Baseline / issue | Priority / action |
|---|---|---|
| Framework/rendering | Next.js 16.3.3 / React 19.2.6. Static localized App Router pages; interactive quizzes are client components but initial content is server rendered. No need to rebuild. | P2: move explanatory content outside quiz client bundles using server children. |
| Routes | Eight indexable URLs: two languages × home, DOPE, love, 16-type. No real test hub, type library, guides or trust pages. | P1: introduce data-driven evergreen content and useful hubs. |
| Titles/descriptions | Centralized but homepage focuses on DOPE/MBTI instead of the platform's free-test intent. Love description is vague. | P1: unique intent-driven metadata. |
| Canonicals | Correct self-canonicals for existing languages; production host forced. | P2: extend consistently to all new routes; retain query-free canonicals. |
| Hreflang | Reciprocal zh-Hant/en/x-default metadata. Sitemap omits x-default. | P3: share URL generation, only real translated routes. |
| robots.txt | Public content allowed, API blocked, absolute sitemap. | Pass; preserve. API responses should also carry noindex. |
| Sitemap | Four hard-coded suffixes; easy to omit future content. | P1: derive evergreen routes from shared content registry. No synthetic lastmod. |
| Schema | Home WebSite with nested publisher; DOPE WebApplication; other pages none. | P2: central safe JSON-LD, WebPage/Organization/breadcrumbs and genuine guide Article. |
| Headings | One H1 per current page; homepage H1 poetic but unclear. Results use H2. | P1: clarify homepage H1 while preserving visual identity. |
| Links | Quiz cards exist; repeated generic guide; no deeper resource graph. | P1: descriptive quiz/type/guide cross-links and visible breadcrumbs. |
| Images | next/image with sizes for bird artwork; decorative astronaut alt empty. Large legacy PNGs remain but are not all loaded. | P2: keep optimized delivery; use brand rather than birds for non-DOPE social images. |
| Social metadata | All pages currently use bird image regardless of topic. Result cards downloadable; sharing links to clean quiz URL. | P2: brand-aware social defaults, stable archetype links without scores. |
| Localization | Bilingual tuples and locale-aware links; html lang validated. Quiz switching preserves answers for 60s. | Pass: maintain behavior; add equivalent translations only. |
| Redirects | Root → zh-hant; legacy dopewebsite-lilac host → custom domain. Next handles trailing slash. | P2: explicitly normalize www; validate loops and unknown locale behavior. |
| 404 | next/navigation notFound used; default error presentation. | P2: add localized helpful missing-page navigation; verify actual HTTP status. |
| Queries | State is React/sessionStorage; no individual result route. Query strings ignored, canonical clean. | Pass: preserve sharing; do not add score/session pages to sitemap. |
| Duplicate URLs | Preview deployments canonical to production but no explicit code-level preview noindex. | P2: environment-aware robots; avoid indexing previews. |
| CWV | Dynamic Three import; 650 points; capped render rate but rAF runs each frame; visibility and reduced-motion stop drawing. Pause reconstructs renderer; reduced-motion still loads Three. | P2: defer graphics, skip Three for reduced motion, smaller mobile particle count; reserve count height. No field CWV available in repo. |
| Accessibility | Labeled controls, focus on changed questions, reduced-motion CSS; no skip link or breadcrumbs. | P2: add skip navigation and semantic breadcrumbs, check narrow screens. |
| Trust | No methodology/privacy/terms/about; original, unvalidated scoring stated in results. Count includes seeded baseline but main label suggests real persons. | P1: honest methodology including baseline and browser dedupe; actual data handling, no invented credentials. |
| Analytics | No analytics tracker installed; GSC verification exists. | Pass: preserve verification, add no tracker. Manual field monitoring required. |

No P0 crawl-blocking failure identified in the inspected baseline. Missing content is not evidence that Google will not index a site; rankings/indexing are not guaranteed.

## Evidence / editorial principles

- [Google Search Essentials](https://developers.google.com/search/docs/essentials)
- [People-first content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)
- [Canonical URLs](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls)
- [Sitemap guidance](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)
- [MBTI preference terminology](https://www.myersbriggs.org/my-mbti-personality-type/the-mbti-preferences/)

Type descriptions will be original reflection prompts, not measured traits, diagnostic claims, compatibility predictions, career prescriptions or official MBTI profiles. No fake expertise, endorsements, ratings or FAQ schema.
