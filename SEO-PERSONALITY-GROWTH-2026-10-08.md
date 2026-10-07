# Twynzo Personality SEO Growth Release — 2026-10-08

Branch: `seo/personality-growth-2026-10-08`

## Scope

This release extends the existing SEO foundation without changing quiz questions, scoring formulas, the visual system, payment flow, or current public canonicals.

### 1. Stronger test landing pages
- Added explicit scoring explanations for DOPE, 16-type and Love Personality.
- Added tie-handling explanations.
- Added answer/privacy handling copy.
- Added direct links from each quiz page into its result library, topic cluster and methodology.
- Strengthened 16-type and Love Personality search metadata.

### 2. Deeper personality result library
Existing:
- 16 evergreen 16-type profiles.
- 4 evergreen DOPE communication profiles.

Added:
- `/love/warm-communicator`
- `/love/present-companion`
- `/love/practical-carer`
- `/love/growing-explorer`

Single Love Personality outcomes now share/link to their evergreen result page. Mixed/tied outcomes intentionally stay on the quiz page to avoid thin combinatorial pages.

### 3. Methodology and trust
Added:
- `/editorial-policy`

Expanded:
- `/methodology`
- `/privacy`

The disclosures cover original content, AI-assisted creation, lack of invented professional review, scoring, tie handling, versioning, correction practices, answer handling and aggregate-data limits.

### 4. EN + zh-Hant topical clusters
Added bilingual hubs:
- `/topics`
- `/topics/personality`
- `/topics/relationships`
- `/topics/communication`
- `/topics/self-discovery`

They connect tests, result profiles, practical guides, methodology and data notes into crawlable topic graphs.

### 5. Original aggregate data
Added:
- `/insights/personality-data`
- `database/result-aggregates.sql`

Design:
- Result-distribution tracking begins only after this release.
- Historical display baseline 3,125 is excluded.
- Answer sequences are not stored.
- The aggregate table does not store visitor hashes.
- Existing hashed visitor tables remain only for first-completion deduplication.
- Distributions remain hidden until a quiz has at least 25 new recorded outcomes.
- No demographic claims or population prevalence claims are made.
- Dataset JSON-LD appears only after a displayable sample exists.

The SQL is intentionally not active until the dedicated Supabase project is active and the schema is applied.

### 6. Internal linking
- Quiz landing pages → topic hub + result library + methodology.
- Exact results → evergreen result page.
- Result profiles → related profiles/guides/topic hub.
- Topic hubs → tests/results/guides/trust/data.
- Site-wide resources → Tests, Topics, Guides, Data, About, Methodology, Editorial Policy, Privacy, Terms.
- Breadcrumb handling extended to Love results and Topics.

## Public URL graph

After this release the registry contains 50 canonical public paths per locale, for 100 localized sitemap URLs across English and Traditional Chinese.

## Regression protection

`test-growth.mjs` now validates:
- public content-path count,
- bilingual content completeness,
- valid internal-link destinations,
- result-library section depth,
- quiz CTA mapping,
- stable result routing for exact vs tied Love outcomes,
- compatibility behavior,
- sanitized share URLs.

It runs automatically through the npm `prebuild` lifecycle before every Vercel `next build`.

## Database rollout

The production Vercel app currently points at Supabase project `dope-test` (`iztzysfrujrozcpdhvim`), which was inactive when this branch was prepared.

Do not invent historical distributions. When the project is active:

1. Apply `website/database/result-aggregates.sql`.
2. Verify the three new RPCs:
   - `dope_complete_v2`
   - `twynzo_complete_v2`
   - `twynzo_result_aggregates`
3. Run Supabase security/performance advisors.
4. Verify no answer sequence or visitor-to-result mapping exists.
5. Deploy the app. The server code falls back to the legacy completion RPC if V2 is not yet present, so rollout order is safe.
