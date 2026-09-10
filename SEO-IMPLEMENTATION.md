# Twynzo SEO implementation

Implemented 2026-09-09–10, starting from a04a134. See SEO-AUDIT.md for the before-state and SEO-CONTENT-MAP.md for the editorial roadmap.

## What changed

- Preserved Next.js, existing three quiz item sets and scoring functions, translations, Stripe link, completion APIs/database, result PNG generation, and pixel-space identity.
- Changed the homepage H1 and title to the free-personality-test intent while retaining the astronaut hero, quiz cards and visual tone. Added concise platform and result-interpretation copy.
- Added a useful test comparison hub, a 16-type reading map, a guides hub, 16 original type profiles, four DOPE profiles, three cornerstone guides, and four trust pages, each in English and Traditional Chinese.
- Added love-quiz explanations covering purpose, what is measured, single participants, mixed results and limits. Kept the interactive quiz ahead of explanatory material.
- Passed explanatory content and breadcrumbs from Server Components into the interactive quizzes. The editorial library is not imported by quiz client components.
- Added clean archetype links from 16-type results. A single recognized type shares its evergreen profile URL; mixed/tied results retain a clean quiz invitation URL. No score/session query pages were added. Existing downloadable cards remain available.
- Added visible, ordered breadcrumbs, matching schema, a skip link and concise site-information navigation.

## Files and architecture

| Files | Responsibility |
|---|---|
| `website/lib/type-content.ts` | Bilingual, individually written profiles for all 16 codes; seven substantive sections per profile and related types. |
| `website/lib/editorial.ts` | Typed registry of DOPE, guide, hub and trust content; localized titles/descriptions, sections, links, optional real publication/update dates, index flag. |
| `website/app/[locale]/[...content]/page.tsx` | Reusable static content route, parameter validation and metadata. Existing explicit quiz routes retain precedence. Unknown slugs return notFound. |
| `website/components/editorial-page.tsx` | Server-rendered article/hub layout, table of contents, attribution, contextual links and dates when supplied. |
| `website/lib/page-seo.ts` | Canonical URL/alternate helpers, canonical route registry, WebSite/Organization/WebPage/Article/BreadcrumbList generation, shared link names. |
| `website/components/content-navigation.tsx` | Safe JSON-LD serialization, semantic breadcrumbs, resource cards and footer navigation. |
| `website/components/quiz-reading.tsx` | Static explanations and links for each quiz. |
| `website/lib/seo.ts` | Existing metadata enhanced for homepage/love intent, preview noindex and appropriate brand social imagery. Both existing Search Console proofs preserved. |
| Existing localized page/layout files | Server content composition, schema and skip/site navigation. |
| `website/components/explore.tsx`, `quiz.tsx`, `personality-quiz.tsx` | Homepage intent, content slots, test-hub navigation and result-profile links. |
| `website/components/pixel-space.tsx`, `app/pixel.css` | Deferred graphics, reduced-motion import avoidance, smaller mobile particle set, pause cleanup, reserved count space and responsive article layout. |
| `website/app/sitemap.ts`, `next.config.ts`, localized `not-found.tsx` | Registry-driven sitemap, host normalization, preview/API index control and helpful 404. Existing robots policy remains valid. |
| `website/test-seo.py` | Read-only HTTP/HTML regression checker. No submissions or database mutation. |

## Routes

Each suffix below exists under **both `/zh-hant` and `/en`**:

- Existing: home, `/dope`, `/tests/personality-16`, `/tests/love-personality`.
- Hubs: `/tests`, `/personality`, `/guides`.
- Types: `/personality/{istj,isfj,infj,intj,istp,isfp,infp,intp,estp,esfp,enfp,entp,estj,esfj,enfj,entj}`.
- DOPE: `/dope/{dove,owl,peacock,eagle}`.
- Guides: `/guides/read-personality-results`, `/guides/dope-vs-16-types`, `/guides/communication-differences`.
- Trust: `/about`, `/methodology`, `/privacy`, `/terms`.

**68 canonical public URLs**, 60 newly added; 34 per language. This is a bounded library, not a combinatorial keyword generator.

## Technical SEO strategy

- Sitemap comes from existing core routes plus registry entries whose `index` is not false. It excludes API paths, 404s, result sessions and queries. Adding a complete bilingual editorial entry automatically creates its route, sitemap entries and metadata. A new interactive quiz still needs its working page and a core route registry entry.
- Every public page has its own production `https://twynzo.com/{locale}/...` canonical. Query parameters do not alter content or the canonical. English is never canonicalized to Chinese.
- Reciprocal `zh-Hant`, `en`, and `x-default` alternate URLs are generated in both HTML and sitemap; x-default points to the genuine Traditional Chinese equivalent, matching the site's default language.
- `/` permanently redirects to `/zh-hant`. Next normalizes trailing slashes. Explicit www and legacy hostname rules normalize to the apex domain. No language is inferred from location or browser settings.
- Public assets and pages remain crawlable; robots blocks only `/api/` and references the absolute production sitemap. APIs also emit `X-Robots-Tag: noindex, nofollow`. Vercel preview builds receive noindex metadata/headers while keeping production canonicals.
- WebSite and Organization identify Twynzo without invented credentials; WebPage describes each page. BreadcrumbList matches visible navigation. Article is limited to three actual guides and matches visible Twynzo attribution. Optional dates are emitted only when supplied and shown. No fake ratings/reviews/FAQ or medical schema.
- JSON-LD serialization escapes `<`. All metadata is in initial HTML. Titles, descriptions and H1s are distinct across all 68 pages.
- DOPE uses the bird illustration for social metadata; other topics use the user-provided Twynzo icon. The favicon remains the supplied astronaut/Twynzo artwork. Search/social platforms choose when and how to refresh their caches.

## Content and trust

Profiles describe possibilities to compare with experience, with unique examples, blind spots and exercises. They do not prescribe careers or predict relationship success. The methodology documents original questions, exact scoring, reverse items, X ties, non-validation and the distinction from official MBTI.

Privacy explains actual answer validation, lack of answer storage in the quiz database, session transfer behavior, a roughly one-year anonymous cookie, retained completion hashes, and the roles of Vercel, Supabase and Stripe. Methodology explicitly explains the 3,125 initial baseline and why displayed totals are not verified distinct people. No tracker or advertising integration was added.

## Performance and accessibility

- Headings, primary links and content render independently of WebGL. Articles use static generation and do not require a database request.
- Three.js remains a dynamic import, deferred 500ms. Initial reduced-motion preference skips loading it. Mobile uses 220 points rather than 650; desktop uses 500. Low-power renderer, reduced resolution, visibility pause, context-loss handling and cleanup are preserved.
- Pause toggles CSS animation and rendering; unmount removes its global CSS state. Existing reduced-motion CSS remains in place.
- Added count-area minimum height, single-column article layout, wrapping breadcrumbs/link cards and focusable skip navigation. Existing meaningful next/image alt text and dimensions retained; decorative astronaut/canvas remain non-semantic.
- System font stack retained; no remote font dependency added. PNG result previews use a local blob generated only on request; replacing them with a server image optimizer would be inappropriate.
- **No measured field LCP/INP/CLS or Lighthouse score is claimed.** Use Search Console/CrUX once sufficient real traffic is available. Remaining CWV opportunities: replace rAF scheduling with a lower-frequency timer only if profiling supports it, test low-end devices, and consider reducing the large favicon/social asset without changing the supplied artwork.

## Verification

- `npm --prefix website run build`: PASS; static generation completed, including all 68 public URLs.
- `npx tsc --noEmit` inside website: PASS.
- `node website/test-personality.cjs`: PASS, all 16 outcomes, reverse items, exact ties, all love styles, invalid answers and bilingual completeness. Scoring/item source files unchanged.
- `python website/test-seo.py`: PASS against the production build on localhost:3002. Checks 68 HTTP routes, initial HTML, one unique H1 and title per page, unique descriptions, canonical, hreflang reciprocity, social tags, JSON-LD parse/type/breadcrumb positions, image alt/dimensions, internal links and fragments, reachability from each homepage, 404/noindex, root/trailing-slash redirects, query canonical and robots.
- Browser: desktop article and homepage checked; 390×844 mobile layout checked with no horizontal overflow. Fixed inherited grid layout discovered during visual review.
- Browser: all three quizzes completed using synthetic local answers; expected mixed/tied results displayed. English-to-Chinese 16-type switching restored question 2 and the saved answer. DOPE and 16-type cards generated at 1080×1350. Pause button applied the pause class. Homepage/article console checks showed no errors.
- Local DB connection intentionally disabled for browser testing; expected counter-unavailable feedback appears, and no synthetic production completions were recorded. Database logic/credentials unchanged.
- **Full repository lint is not clean:** `npm run lint` reports existing scaffold/UI accessibility rules, existing session-restoration effects, native language-switch anchors, blob-preview image and CommonJS test-loader rules. New SEO files and the new not-found page pass targeted oxlint. Do not describe the full lint as passing; no blanket rules were disabled or generated component library rewritten to conceal the baseline.

## Manual follow-up / Search Console

1. Existing Google ownership proofs remain installed. The submitted sitemap keeps the same URL; Google can refetch it. Check the property for latest read/discovered count and inspect representative new URLs (test hub, love quiz, INFP guide, methodology). Sitemap presence is not proof of indexing.
2. Record an initial Search Console performance baseline; compare page/query impressions, clicks and CTR after several weeks, separately by language and search intent. Investigate selected canonicals and “crawled/discovered, currently not indexed” before expanding page count.
3. Confirm www DNS/TLS and Vercel alias settings if changed outside the repository. Code-level redirect does not provision a domain certificate.
4. Owner should supply a public support/privacy contact and confirm the actual operating identity and retention policy before adding accounts, advertising, affiliate tools or premium products. No identity or email address was fabricated. Current privacy/terms are plain service explanations, not a jurisdiction-specific legal compliance certification.
5. Add publication dates only on actual first publication, update dates only after substantive revisions. AI assistance is disclosed on About; do not invent expert review. Consider a qualified independent editorial review before making stronger psychological claims.
6. Keep optional monetization separate from results. Any future advertising needs reserved layout space and an appropriate privacy/consent review; any affiliate recommendation needs transparent disclosure and genuine editorial value.

No ranking, index coverage or organic revenue guarantee is made. Prioritize observed user needs and editorial quality over adding more URLs.
