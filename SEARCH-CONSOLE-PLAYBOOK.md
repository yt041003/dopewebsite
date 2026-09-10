# Search Console playbook

## One-time setup after deployment

1. Use the owner's Google account. Existing URL-prefix property `https://twynzo.com/` was verified previously; this does not prove a Domain property exists. Add `twynzo.com` as a Domain property if absent, copy the Google-issued TXT value into GoDaddy DNS, preserve all existing records, then verify. Never invent a token or remove unrelated records.
2. Submit `https://twynzo.com/sitemap.xml` in that property. If already submitted, inspect its last read and errors rather than creating a duplicate. The current registry contains 72 public localized URLs; discovered does not mean indexed.
3. Inspect `/zh-hant`, `/en`, and both `/tests` hubs with URL Inspection. Compare indexed status and the live test. Request indexing only for a small representative set of substantially changed URLs.
4. Inspect `/zh-hant/dope`, `/zh-hant/tests/personality-16`, `/zh-hant/tests/love-personality` and English equivalents.
5. Sample `/zh-hant/personality/infp`, `/zh-hant/personality/istj`, `/en/personality/intj`, `/zh-hant/dope/owl` and the new relationship guides.
6. Compare user-declared and Google-selected canonicals. Each locale should select itself; parameters, www and trailing slash variants should consolidate to the clean URL. Inspect anomalies before changing configuration.
7. Track Page indexing: indexed, discovered-not-indexed, crawled-not-indexed, excluded duplicates and unexpected noindex/404. Legitimate unknown URLs should remain 404.
8. Check crawl stats and server errors. Robots intentionally excludes API; never block CSS/JS required to render pages.
9. Read mobile/desktop Core Web Vitals when enough field data exists. A lack of data is not a passing result. Use PageSpeed Insights for reproducible lab diagnosis, recording date, device and conditions.
10. Record queries, landing pages, country and device in Performance. Separate branded Twynzo traffic from non-branded discovery. Keep Traditional Chinese and English cohorts distinct where possible.

No Search Console submissions or indexing requests are performed by this code change. The owner must complete/confirm the above in the relevant property. Do not report index counts without live evidence.

## Every 2–4 weeks

Export page/query data over comparable windows (normally 28 days, longer for low traffic). Seek relevant queries with meaningful impressions and positions roughly 8–30; this is a prioritization clue, not a ranking promise. Record sample size and avoid decisions based on a few impressions.

For each selected query:

1. Identify the actual ranking page, device and intent. Check whether multiple pages compete for the same purpose.
2. Read the result page and ask what the visitor still cannot do or understand.
3. Improve a specific example, explanation, comparison or quiz entry point. Preserve a useful existing URL.
4. If CTR is weak relative to comparable queries/positions, improve title/description accurately. Do not promise accuracy, official MBTI status or compatibility prediction.
5. Add a few contextual links from relevant pages; do not expand global footer lists.
6. Create a supporting guide only when it answers a distinct recurring question that the current page cannot naturally cover.
7. Log changes and wait for enough new impressions before evaluating. Avoid concurrent rewrites that make attribution impossible.

Suggested log columns: date, page, query group, locale, device, impressions/clicks/CTR/position, user question, change, expected benefit, comparison date, observed result, next action. Search Console measures discovery, not quiz completion; do not infer conversion rates from search clicks alone.

## Product measurement boundary

No analytics framework exists in this repository. No tracker or event endpoint was added. `data-conversion` attributes are integration hooks, not collected events. A future consent/privacy-reviewed provider may record quiz_view/start/complete, result_view, result_share, related_test_click, personality_detail_click and guide_to_quiz_click; later premium_report_click and compatibility_click only for real features. Payload allowlist: event name, locale, quiz slug, source path and destination category. Do not include answers, scores, full query strings, cookies or browser identifiers. A share-button click means intent, not proof of publication.

## References

- [Google: Search Console getting started](https://support.google.com/webmasters/answer/9128668)
- [Google: URL Inspection](https://support.google.com/webmasters/answer/9012289)
- [Google: sitemap guidance](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)
