# Roadmap

Status: ⬜ not started · 🔄 in progress · ✅ done

## Phase 1 — Walking skeleton ⬜
**Goal:** the whole site exists end-to-end, runnable locally, in both languages.

Astro project scaffolded; base layout with header, nav, footer, language switch;
all routes render with real structure and rough content: landing page, 4 product
pages (chania-koroneiki, lakonia-koroneiki, lakonia-athinaiki, honey), coming-soon,
order page (form not wired yet). English at `/`, Greek at `/el/`.

**You can verify:** run `npm install && npm run dev`, open http://localhost:4321 —
every page reachable from the nav in both languages; switching language on any page
lands on that same page in the other language.

## Phase 2 — Content & design ⬜
**Goal:** the site looks like the tins and reads like the brand.

Heritage visual system (parchment textures, serif display type, per-line palettes:
olive/gold Crete, bronze/black Lakonia, amber honey). Real bilingual copy for every
product drawing on the label stories (Minoan Crete / Spartan Lakonia); icon rows
(100% variety, hand-picked, cold-pressed, no additives); provided tin artwork placed;
styled placeholders where images are missing. Coming-soon page gets its "something
exciting" treatment (teaser copy + visual, no fake countdown).

**You can verify:** each product page visibly belongs to its product line; all text
reads correctly in both Greek and English; the site looks right on a phone.

## Phase 3 — Working order flow ⬜
**Goal:** a visitor can actually place an order request.

Order form with product/quantity selection, contact details, message; localized
validation and thank-you pages; form relay (Web3Forms/Formspree) delivering
submissions to the owner's email; product pages pre-select their product on the form.

**You can verify:** submit a test order from the live/local site and receive it in
your inbox with the right products and quantities.

## Phase 4 — Launch polish ⬜
**Goal:** production-ready on Vercel.

SEO (titles, descriptions, OpenGraph images, hreflang alternates, sitemap), favicon,
accessibility pass (contrast, alt text, keyboard nav), performance check, deploy to
Vercel production; custom domain if provided.

**You can verify:** the site is live on a public Vercel URL; sharing the link on
WhatsApp/Facebook shows a proper preview card; Lighthouse scores are green.
