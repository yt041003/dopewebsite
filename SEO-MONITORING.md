# SEO monitoring — Twynzo

Run from the repository root (`work/dopewebsite`), using the installed Codex SEO virtualenv. These commands fetch public pages only; they do not complete quizzes or modify database counters.

## Preserve the pre-change reference

On 2026-09-12 HKT (2026-09-11 UTC), root baseline ID 1 and seven template baselines were saved in `C:/Users/a5512/.cache/codex-seo/drift/baselines.db`:

| ID | URL |
|---|---|
| 1 | https://twynzo.com/ |
| 2 | https://twynzo.com/zh-hant |
| 3 | https://twynzo.com/en |
| 4 | https://twynzo.com/zh-hant/dope |
| 5 | https://twynzo.com/zh-hant/tests/personality-16 |
| 6 | https://twynzo.com/zh-hant/tests/love-personality |
| 7 | https://twynzo.com/en/guides/read-personality-results |
| 8 | https://twynzo.com/en/guides/infp-love |

The original 72-page crawl is `.seo-cache/pre-change-crawl.json`; full HTML and browser evidence are in the workspace's sibling `work/seo-execution-20260912/`. `.seo-cache/` is ignored by Git. Preserve/copy these local artifacts and SQLite database when moving computers; a Git clone alone does not include them.

## Compare after a deployment

```powershell
$seoPython = Join-Path $env:USERPROFILE '.codex/skills/seo/.venv/Scripts/python.exe'
& $seoPython tools/seo-drift.py compare https://twynzo.com --baseline-id 1 --output .seo-cache/compare-to-pre-change.json
& $seoPython website/test-seo.py https://twynzo.com
& $seoPython tools/seo-drift.py crawl https://twynzo.com --output .seo-cache/current/crawl.json
```

Repeat the first command for the template URLs and their pinned IDs above. An expected new OG field, new Article, link or text edit is not automatically a regression. Investigate removed schema, new noindex, broken canonical, missing H1/title, errors, lost internal links, or unexpected body changes. Review fetched status and triggered findings, not only their count.

The wrapper fixes an upstream Windows `/dev/stdout` incompatibility by invoking the unchanged installed modules directly. URL/redirect validation, TLS verification, SQLite and all 17 comparison rules remain in use. CWV is explicitly skipped because no authorized field-data source is configured. Native drift hashes do not describe link changes individually; compare the `parsed.links` and `main_text` in the complete crawls, and use `test-seo.py` for broken-link/orphan regressions. Dynamic counter/build HTML changes can trigger a content hash without a content regression.

## Establish an accepted release baseline

Only after checking live HTML and approving all expected changes:

```powershell
& $seoPython tools/seo-drift.py baseline https://twynzo.com --output .seo-cache/accepted-release-root.json
& $seoPython tools/seo-drift.py baseline https://twynzo.com/en/guides/personality-preferences --output .seo-cache/accepted-preferences.json
& $seoPython tools/seo-drift.py baseline https://twynzo.com/zh-hant/guides/dope-team-exercise --output .seo-cache/accepted-team.json
& $seoPython tools/seo-drift.py baseline https://twynzo.com/en/guides/relationship-check-in --output .seo-cache/accepted-check-in.json
```

Record returned IDs with the deployment commit. Future `compare` without `--baseline-id` uses the most recent baseline for that exact normalized URL. Keep ID 1 for historical before/after comparisons; do not mistake an old template ID for the accepted current release.

## Operating cadence

After every SEO-critical deploy: compare key templates, run all-URL regression, inspect new page mobile layout and accept a baseline only after review. Every 2–4 weeks: review actual GSC queries/pages by locale, indexing exclusions and Google-selected canonical. Compare clicks/impressions/CTR over appropriate periods, accounting for low volume; do not infer Google indexing from sitemap inclusion. Query/page cannibalization should be investigated before adding related pages. Check field CWV when available, and repeat identical throttled lab scenarios for performance changes.

No scheduled automation was created; this document is the repeatable manual workflow. See SEARCH-CONSOLE-PLAYBOOK.md for property and measurement setup, and SEO-EXECUTION-2026-09-12.md for outstanding priorities and integration limitations.
