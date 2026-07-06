# STATE

## Now
Roadmap Phase 1 (walking skeleton): scaffold the Astro site with EN/EL routing and
all pages rendering with rough content.

## Next
1. Scaffold Astro project (package.json, config, base layout, i18n helper)
2. Product data module (4 products, both languages)
3. Pages: landing, 4 product pages, coming-soon, order (form unwired) — EN + EL
4. Verify: build passes, all routes render in both languages, language switch works
5. Commit, mark roadmap Phase 1 ✅, seed Phase 2 in Now/Next

## Decisions
<!-- One dated line per decision, newest last. -->
- 2026-07-06: Order-request form at launch, no online payments (user choice; Stripe possible later).
- 2026-07-06: Astro static site on Vercel free tier (user chose Vercel).
- 2026-07-06: English default at `/`, Greek at `/el/` (user choice).
- 2026-07-06: Plan approved by user; autonomy line confirmed (stop only for irreversible/scope/user-only questions).
