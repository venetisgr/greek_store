# STATE

## Now
Phase 2 nearly done. Heritage design shipped and independently reviewed (PASS on
line identity + mobile; its one defect — duplicated variety on the order page —
was eliminated by renaming the Athinaiki oil). Latest content round committed:
"Athena's Gift" rename, regions fixed (Lakonia ×2, honey → Chania), tin mottos +
pull-quotes on product pages, fifth "mystery" card on the landing grid.
RUNNING: 'landing-redesign' workflow (wf_e46e805d-43b) — 3 design variants in
worktrees + 3-lens judge panel — to replace emoji icons with crafted SVG emblems
and make the landing page sophisticated (user request).

## Next
1. Apply the winning design variant's patch, fix judge-noted flaws, verify
   (build + screenshots EN/EL/mobile), commit, push, send screenshots to user
2. Wire real tin artwork when the user commits image files (RESOURCES.md #1)
3. Then Phase 3: order form relay (needs user's email + Web3Forms key)

## Decisions
<!-- One dated line per decision, newest last. -->
- 2026-07-06: Order-request form at launch, no online payments (user choice; Stripe possible later).
- 2026-07-06: Astro static site on Vercel free tier (user chose Vercel).
- 2026-07-06: English default at `/`, Greek at `/el/` (user choice).
- 2026-07-06: Plan approved by user; autonomy line confirmed (stop only for irreversible/scope/user-only questions).
