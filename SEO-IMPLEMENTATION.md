# Twynzo SEO growth implementation — 2026-09-10

This release extends baseline 6fe73ff. SEO-GROWTH-AUDIT.md records every one of the 68 pre-change URLs before implementation. SEO-AUDIT.md preserves the earlier foundation audit. Current release: 36 canonical suffixes, 72 localized public URLs. These are eligible URLs, not a Google index count.

## Product outcome

Preserved all three quizzes, original questions, scoring and exact ties, locale transfer, count APIs/database, Stripe coffee link and PNG export. Strengthened the path from useful search content into a quiz and from results into reading, another test and sharing. No ads, report checkout, analytics tracker or pair-page generation was enabled.

## Changes and file map

- `lib/type-contexts.ts`: 48 original bilingual scenarios across conflict, decisions and social pace. Existing `type-content.ts` seven sections remain; all sixteen profiles now have ten sections, including overview/core traits, strengths, blind spots, communication, relationships, work/environments and growth. Existing scoring data is untouched.
- `lib/dope-contexts.ts`: eight bilingual decision/stress sections, bringing each bird article to eight sections. All retain quiz and related-bird links.
- `lib/relationship-guides.ts`: two cornerstone guides, each six original bilingual sections, with clear boundaries and practical examples.
- `lib/editorial.ts`: integrates structured datasets and related links; the guides hub discovers both new guides. INFP links directly to its relationship article.
- `lib/growth.ts`: lightweight quiz destinations, contextual CTA selection and stable result path resolver. No editorial body dataset is imported into quiz client components.
- `components/quiz-cta.tsx`: server-renderable contextual free-test invitation near the introduction and after the article. The free article stays complete.
- `components/editorial-page.tsx`: inserts contextual CTAs and a disabled article monetization slot; preserves attribution, semantic headings, table of contents and visible/schema breadcrumbs.
- `components/quiz-reading.tsx`: love pillar now explains emotional expression, differing needs, expectations and conflict, below the interactive product.
- `components/result-next.tsx`: result reflection prompt, DOPE leader-detail links, related guide and the other two quizzes. Inserted in `quiz.tsx` and `personality-quiz.tsx` after sharing; preserves retake.
- `lib/social-sharing.ts` + `components/social-links.tsx`: WhatsApp, LINE, Facebook, X and Threads intent links. External composers open only on user clicks. Existing native share, clipboard fallback and result PNG remain. No automatic posting or SDK load.
- `lib/monetization.ts` + `components/monetization-slot.tsx`: separate FreeReport/PremiumReport models, typed ad/affiliate/premium/compatibility offers, explicit placement and validation. No offer produces no DOM, no blank placeholder and no external request. An enabled ad must reserve height; affiliate requires disclosure and sponsored rel. Real premium fulfillment must later verify entitlement server-side, never hide paid text in client HTML.
- `lib/compatibility.ts`: validates two complete types, normalizes symmetric pairs and compares four preference dimensions without predicting success. Tests cover all 256 ordered inputs / 136 normalized pairs. There is no public compatibility route or pair sitemap entry.
- `components/pixel-space.tsx`: initial reduced-motion, pause or save-data skips canvas; constrained devices use 120 particles. A timeout plus rAF avoids scheduling at every display frame; hidden tabs, motion changes and context loss cancel both. HTML, H1 and CTA never wait for Three.js.
- `app/pixel.css`: responsive CTA, social/next-test buttons and offer slots. Explicit dark CTA text fixed an observed contrast regression. No overlays or ads inside questions.
- `test-growth.mjs`: bilingual graph/CTA invariants, all compatibility combinations, share sanitization/tie handling and offer validation. Temporary transpilation uses local installed TypeScript, not eval or runtime dependencies.

## New routes

Both `/zh-hant` and `/en` equivalents:

- `/guides/expressing-relationship-needs`
- `/guides/infp-love`

Existing routes retained: localized home, tests hub, DOPE quiz, two other tests, sixteen personality profiles, four DOPE profiles, personality reading hub, guides hub, three previous guides and four trust pages. No session, parameter-result or commercial placeholder routes added. Content map proposals are not published routes.

## Technical SEO architecture

Next.js 16.3.3 App Router statically renders public routes. Explicit quizzes coexist with `[...content]`; unknown routes return 404/noindex. `lib/seo.ts` handles core metadata, production origin and existing Google verification/favicon. `lib/page-seo.ts` provides registry URLs, metadata, alternates, link titles and schema. Each locale self-canonicalizes. Query variants point to the clean canonical; English never canonicalizes to Chinese. Reciprocal `zh-Hant`, `en`, `x-default` reference actual equivalents. www, root, legacy hostname and trailing slash normalization remain.

`app/sitemap.ts` derives from core paths plus indexable registry pages: 72 URLs, no APIs, sessions, params or compatibility pairs; no fabricated lastmod. `robots.ts` allows public/asset crawling and excludes API. Preview pages noindex through metadata/headers; API has noindex headers. Content marked `index:false` is excluded by the registry and route metadata. Drafts should stay outside the registry until reviewed.

Schema remains centralized: Organization, WebSite, WebPage, BreadcrumbList and Article for guides. No ratings, psychological diagnoses or fabricated experts. Article dates are optional and omitted unless a real publishing/editing date is recorded. JSON-LD is escaped and matches visible headings/attribution. Open Graph/Twitter use the supplied brand or bird artwork; favicon is unchanged.

## Internal links and sharing

Homepage → tests → quiz → result → profile/guide → related quiz. INFP → relationship guide → love quiz is now a direct contextual path. DOPE single-leader shares link to the bird article; ties keep the clean quiz URL. Recognized single sixteen-type shares link to that profile; X/tied results keep the quiz URL. Social URL generation removes queries/fragments, carries only the voluntary summary and a public path, and rejects external path input. Personalized answers are not included. Sharing links is not proof a post was sent; authenticated publication on third-party platforms was not performed.

## Analytics and monetization status

No analytics framework was found, so no provider or data collection was added. `data-conversion` attributes mark future integration points for guide_to_quiz_click, personality_detail_click, related_test_click and result_share; these are not emitted or stored events. SEARCH-CONSOLE-PLAYBOOK.md defines the future aggregate-event allowlist and explicitly excludes answers, scores and identifiers. Coffee donations remain the only enabled payment. Premium, affiliate, advertising and compatibility are foundations, not live products or offers.

Safe future commercial placements: after an article body and in the result secondary section. Keep ads out of questions and primary CTA, reserve size before load, and require real disclosure/content. Free content and reports are not weakened. Before paid products: build real report content, entitlement/fulfillment, support/refunds and owner-approved pricing. Existing Stripe coffee Payment Link does not grant report access.

## Validation

- Production build and separate TypeScript check passed (77 generated build entries including infrastructure).
- All 72 public localized URLs passed read-only HTML regression: unique metadata/H1, clean canonicals, reciprocal valid alternates, sitemap/robots, JSON-LD, image dimensions/alt, graph reachability, internal links, queries, redirects and unknown-path 404s.
- Existing scoring regression passed all 16 outcomes, reverse items, exact ties, all love styles and invalid answers. Growth tests passed content/CTA graph, 256 pair inputs, tie-safe shares and query stripping.
- All newly added runtime/test files and edited editorial/animation components passed targeted lint. Full repository lint still reports baseline UI accessibility, session-restoration effects, native locale anchors, PNG img and old CommonJS test-loader issues. No blanket rule suppression was added; new violations were fixed.
- Local browser completed love, 16-type and DOPE quizzes with synthetic answers and database disabled. Confirmed language switch retained question 2, XXXX stayed tied, Owl leader linked to its article, five social destinations, two related quizzes, clipboard feedback and a 1080×1350 love PNG.
- Mobile article/result checks at 360/390px had no horizontal overflow; CTA contrast was visually checked after correction. Article console had no errors. Counter 503 messages during local QA are intentional because DB writes were disabled.
- No field CWV result or Google ranking/index count is claimed. External app posting and physical-device native share still depend on the user's device/account.

## Follow-up documents

SEO-CONTENT-MAP.md: controlled proposed expansion, not an automatic publishing queue. CONTENT-QUALITY-CHECKLIST.md: human editorial gates plus technical checks. SEARCH-CONSOLE-PLAYBOOK.md: manual property/sitemap/inspection steps and 2–4 week feedback loop. SEO-ROADMAP.md: 30/60/90-day indexing, engagement and monetization sequence.

Manual work remains: confirm Domain property (existing URL-prefix verification is not proof), sitemap reading and Google-selected canonicals; collect real search/CWV data; provide genuine operator/contact information; approve any future analytics or paid product. No such submissions, measurements or offers are fabricated.

## Sharing implementation references

- https://developers.line.biz/en/docs/line-social-plugins/install-guide/using-line-share-buttons/
- https://docs.x.com/x-for-websites/web-intents/overview
- Meta documentation endpoints for Threads web intents / Facebook share button were unavailable to the documentation fetcher during this release. Links were inspected for correctly encoded destination/payload; authenticated composer publication was not tested. Native share, copy and PNG remain fallbacks.
