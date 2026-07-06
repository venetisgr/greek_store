# Resources needed

Ordered by when work blocks without each.

## Needed during Phase 2 (content & design)
1. **Product image files** — the tin artworks have been shared in chat twice, but
   chat images are previews only; the actual files never reach the repo. To place
   them on the site, commit them to `public/images/` on branch
   `claude/reload-skills-zsczaf` (e.g. drag-and-drop on GitHub → "Add file →
   Upload files"), ideally named: `cretan-legacy-front.jpg`, `cretan-legacy-back.jpg`,
   `laconian-legacy-front.jpg`, `laconian-legacy-back.jpg`, `crete-landscape.jpg`,
   `crete-map.jpg`. The label text ("quotes") is already transcribed into the
   product pages; until the files arrive the site uses crafted SVG artwork.
   Still missing entirely: imagery for **Athena's Gift (Athinaiki)** and **honey**.
2. **Brand name for the site itself** — the tins say "Cretan Legacy" / "Laconian
   Legacy"; the site needs one umbrella name for the header/domain (e.g. "Legacy
   Greek Goods", a family name, or one of the line names). Placeholder until decided.
3. **Honey details** — ✅ variety (thyme, exceptional concentration) and region
   (Chania) provided 2026-07-06. Still needed: jar sizes.
4. **Prices & sizes** — per product, or confirm the order form should say
   "price confirmed with your order" at launch.
5. **Greek copy review** — I will write both languages; a native read-through of
   the Greek before launch is strongly recommended.

## Needed during Phase 3 (order flow)
6. **Order destination email** — the inbox that should receive order requests.
7. **Web3Forms access key** (or Formspree account) — free; created with that email
   in ~2 minutes. I'll provide exact steps when we get there.

## Needed during Phase 4 (launch)
8. **Vercel account** — free; connect it to this GitHub repo (venetisgr/greek_store)
   for automatic deploys. I'll provide exact steps.
9. **Custom domain (optional)** — the site launches fine on `*.vercel.app`.

## Decisions already made
- Buying flow: order-request form at launch (no online payments yet) — 2026-07-06
- Hosting: Vercel free tier — 2026-07-06
- Default language: English at `/`, Greek at `/el/` — 2026-07-06
