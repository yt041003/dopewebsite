# Twynzo SEO execution — 2026-09-12

Status at preparation: implemented and verified locally; production verification is recorded in the release section below. Previous production commit: e8dddcc5b7cc13e88300691babcff6521d0a3100. No pre-existing uncommitted changes were present.

## Initial condition and evidence

Windows / PowerShell; Next.js 16.3.3 App Router, React 19.2.6, TypeScript and npm. Public routes use static generation; original quiz components are interactive clients with server-rendered explanatory content. The registry drives catch-all editorial routes, metadata, reciprocal language alternates and the sitemap. API routes are dynamic. Vercel deploys the GitHub main branch with root `website`. No AGENTS.md was found in the workspace, repository or application paths checked.

The installed Codex SEO v1.9.6-codex.5 workflows supplied drift, technical/schema/sitemap, content/GEO/SXO, strategy/programmatic, performance/visual and image checks. Specialist source reviews ran in parallel; a complete public crawl and local verification supplied shared evidence. No arbitrary SEO score was used as an implementation target.

Before edits, all 72 sitemap URLs returned 200, with a title, description, canonical and one H1; none had noindex. The crawl saved parsed headings, schema, links, main text and content hashes, plus raw HTML outside Git. Eight installed-engine SQLite baselines were recorded (IDs 1–8); root ID 1 is the pre-change comparison anchor. Native drift's `/dev/stdout` fails on Windows. `tools/seo-drift.py` calls the same installed public-URL validator, fetcher, parser and drift engine in-process, preserving its SQLite store and security checks. The installed suite was not altered.

No demonstrated P0 indexing blocker. Existing useful foundations include clean self-canonicals, valid zh-Hant/en/x-default alternates, permanent root/www/legacy redirects, 404/noindex behavior, crawlable links and truthful scoring/AI-use disclosures. SSG content does not require Three.js or quiz completion to be read.

## Prioritized work

| Priority | Finding | Impact | Confidence | Effort | Outcome |
|---|---|---|---|---|---|
| P1 | Practical-guide format lacked lists, comparison tables and reusable working templates | High for utility; traffic impact unproven | High | Medium | Added optional server-rendered structures and three complete bilingual guides |
| P1 | Concept explanations had limited primary attribution | Medium | High | Low | Added reusable sources and an attributed four-pair reference; original exercises distinguished from official concepts |
| P2 | OG locale absent on six localized home/quiz pages | Low/Medium for sharing consistency | High | Low | Fixed locale, alternate locale, brand image dimensions and alt |
| P2 | Only DOPE had WebApplication schema | Medium for entity consistency | High | Low | All three quiz graphs now have free WebApplication/Offer linked from WebPage |
| P2 | DOPE bird profiles inherited an unrelated MBTI disclaimer | Medium for clarity | High | Low | MBTI qualification limited to 16-type profiles |
| P2 | Observed homepage LCP images were lazy loaded | Medium on slower loads | High for discovery behavior | Low | Homepage astronaut and bird illustration load eagerly; no speed percentage claimed |
| P2 | Article byline lacked a link to publisher context | Low/Medium | High | Low | Byline links to existing honest About page |
| P2 | Main brand PNG is 1,836,688 bytes, also used for favicon/apple/social | Medium delivery opportunity | High | Low/Medium | Remains; supplied artwork and favicon URL preserved |

## Implementation map

- `website/lib/practical-guides.ts`: three original bilingual guides, distinct use cases, copyable worksheets and one primary conceptual reference.
- `website/lib/editorial.ts`: optional list/table/worksheet/source fields, registry integration, incoming links from the hub, related guides and Dove profile.
- `website/components/editorial-page.tsx`: semantic lists/table/caption/scoped headers; readable plain-text worksheets; visible concept references; linked author; framework-specific disclaimer. Practical guides show useful content before the quiz CTA.
- `website/components/quiz-reading.tsx` and `website/lib/growth.ts`: each quiz links to its relevant exercise; new guides return to the right quiz instead of defaulting to 16-type.
- `website/lib/seo.ts`: localized OG objects and explicit brand image details.
- `website/lib/page-seo.ts`, both quiz route files: one coherent WebApplication graph per quiz with stable identifier, WebPage mainEntity and truthful free Offer. No review/rating/FAQ/HowTo or invented expert schema.
- `website/components/explore.tsx`: eager homepage LCP image discovery, retaining Next image delivery and dimensions.
- `website/app/pixel.css`: table, list and worksheet styles; larger article TOC targets. No new dependencies or client-side content library.
- `website/test-seo.py`: OG locale and quiz graph regression coverage; `website/test-growth.mjs`: new-guide bilingual structure, graph and CTA checks.
- `tools/seo-drift.py`, `.gitignore`, `SEO-MONITORING.md`: repeatable public baseline/compare/crawl workflow and ignored raw evidence.

## Content, intent and internal links

Three page concepts become six localized URLs; 72 → 78 public sitemap URLs, not a Google indexed-page count. The full mapping is appended to SEO-CONTENT-MAP.md.

1. `/guides/personality-preferences`: MBTI letters meaning / MBTI 字母意思. One consolidated four-pair table, a shared everyday scenario, seven-day observation sheet and explanation of Twynzo's own percentages. Avoids four near-duplicate letter-pair pages.
2. `/guides/dope-team-exercise`: DOPE team activity / DOPE 團隊活動. Complete voluntary 15-minute agenda, four checks, a worked handover and reusable team agreement.
3. `/guides/relationship-check-in`: relationship check-in questions / 情侶溝通問題. Mutual ten-minute agenda, concrete questions, worked example and small-action agreement. Distinct from the existing individual-needs guide.

Architecture: home → guides hub → exercise ↔ relevant existing guide → quiz; quiz reading → exercise; personality hub → letter reference; Dove → team exercise. Each new guide has descriptive incoming links, related supporting links and the correct localized quiz CTA. The prior DOPE-vs-16-types page retains ownership of framework comparison intent. No new competitor-alternative landing page was warranted by verified comparison evidence.

Clustering is a provisional editorial intent map. The small public search sample indicated that broad test queries favor interactive test destinations; it was not a controlled Google rank capture or measured SERP-overlap cluster. No search volume, difficulty, CPC, rank or backlink count is claimed.

## GEO and editorial quality

Answer-first introductions, self-contained definitions, original task examples, structured lists and worksheets offer extractable useful passages. The MBTI concept source is visibly linked and explicitly does not validate or endorse Twynzo's original quiz. Existing AI-assistance/methodology/limits disclosures remain. No fabricated authors, studies, stats or historical publishing dates were added. New guide content can be read and copied without JavaScript. AI citation or Google visibility is not guaranteed; missing llms.txt alone was not treated as a blocker.

## Performance and visual evidence

Browser lab: fresh contexts, Chromium, 1440×1000 desktop and 390×844 mobile, no CPU/network throttling, five-second observation. Pre-change production sample (home, DOPE and INFP-love, both sizes): LCP 528–640 ms, FCP 492–640 ms, TTFB 168–183 ms, observed CLS 0. These are single-run lab readings, not field CWV or proof of fast low-end mobile performance. Earlier network-idle runs timed out on a quiz; final measurement uses DOM readiness plus a fixed observation window, and preserves this limitation.

Local final sample: home and four new-guide locale examples, ten viewport runs; no page overflow, JS exceptions or observed layout shifts. Local latency is not comparable to production and is not reported as a speed improvement. Browser QA at 360 px also checked all six new guide URLs without JavaScript, tables, worksheet text and actual CTA navigation. Reduced motion skips the decorative canvas. Existing Three.js remains delayed, visibility-aware and disabled for reduced-motion/save-data preferences. Tables/worksheets add no client bundle dependency.

PageSpeed unauthenticated API returned HTTP 429 quota exhausted. No field LCP/INP/CLS, Lighthouse score or TBT is claimed. Installed analyzer heuristic fallback was not substituted for measurements. Representative browser resources and screenshots remain outside Git for review.

## Validation and two re-audits

1. Technical stage: build passed; 72 local routes passed SEO regression. Production drift against ID 1 triggered 0/17 rules before deployment, correctly confirming production had not changed yet.
2. Content stage: build passed (83 build entries including infrastructure); TypeScript passed; all 78 routes passed metadata, canonical, hreflang, JSON-LD, images, links/reachability, query canonicalization, robots, redirects and 404 regression. All new/changed runtime files passed targeted lint. Scoring tests cover all 16 outcomes, reverse items, exact ties, love styles and invalid answers; growth tests cover 256 pair inputs, sharing sanitization and new-guide mapping.
3. Full-repository lint still reports pre-existing UI accessibility/hook/session-restoration, native locale-link, PNG img and old CommonJS test-loader errors. It is not reported as a full pass; no blanket suppression was introduced. Initial new table lint issues were corrected before final validation.
4. Source/diff review preserves original questions, scoring, routes, counters/database, Stripe, result image export, brand artwork and both languages. No user changes were reset, stashed or removed.

## Programmatic decision

GO: maintain the existing finite, original 16 profiles and four birds. TEST: publish and observe these three useful guide concepts before further expansion. NO-GO: mass type×career/love keywords or 136 compatibility pair pages without unique evidence or functionality. Changing a code in a title does not create useful content or support relationship-success predictions.

## Integrations and remaining work

No SEO Google config/token, Google/PageSpeed/GSC/GA4 environment settings, DataForSEO credentials or Firecrawl key were found; no corresponding callable MCP tools were exposed. Existing Search Console HTML ownership proofs are preserved, but ownership proof is not API access or a verified indexed count.

- GSC: connect authorized read-only property access for actual queries, impressions, clicks, CTR, selected canonicals and indexation.
- PageSpeed/CrUX: own API quota for lab/field evidence; field coverage may still be insufficient for a small site.
- GA4: requires a chosen measurement setup and accurate privacy disclosure; would connect landing-page traffic to aggregate quiz starts/completions. Nothing was silently enabled.
- DataForSEO: measured SERP overlap, volume and competition; Firecrawl: more convenient crawl/render coverage. Neither is required for core indexing.

Remaining P0: none demonstrated. Remaining P1 operational priority: verify actual GSC indexing/query relevance after deployment, and gather real search evidence before scaling. Remaining P2: lighter brand icon variants, representative throttled/field performance, owner-approved corrections/contact details, and baseline full-lint cleanup outside unused UI scaffolding. No ranking deadline is promised.

Next batch candidates (research before creation): giving constructive feedback with a worked rewrite; receiving feedback without type labels; choosing communication pace in a decision; distinguishing preferences from learned skills; retest differences with a side-by-side reflection record; planning alone versus together; expressing a boundary with a specific request; repairing a misunderstood message. First check real queries and overlap with current guides; some may be better sections in existing pages.

## References

- https://nextjs.org/docs/app/api-reference/functions/generate-metadata — nested OG replacement behavior and metadata fields.
- https://developers.google.com/search/docs/appearance/favicon-in-search — favicon eligibility; current square artwork is retained, with no display guarantee.
- https://www.myersbriggs.org/my-mbti-personality-type/the-mbti-preferences/ — primary explanation of the four preference pairs; original exercises are Twynzo's.

## Release verification

Pending at report preparation. Confirm production independently after the Git deployment; see SEO-MONITORING.md for pinned baseline IDs and commands.
