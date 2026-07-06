# Architecture

## What this is
A bilingual (EN/EL) promotional + ordering website for a family's Greek products:
three extra-virgin olive oils (Chania Crete Koroneiki, Lakonia Koroneiki, Lakonia
Athinaiki), honey, and a teaser page for a future product. Customers browse product
pages and submit an **order request form**; the family confirms price/shipping and
arranges payment off-site. No online payments at launch.

## Stack

| Choice | Rationale |
|---|---|
| **Astro** (static site) | Content-first site with a handful of pages and one form — no app framework needed. Ships near-zero JS, fast on mobile, free to host. Built-in i18n routing. |
| **Vercel** (free tier) | User's choice. Zero-config Astro deploys, preview URLs per push, custom domain attachable later. |
| **Web3Forms** (or Formspree) for the order form | Static site keeps no server; the form POSTs to a form-relay service that emails submissions to the owner. Free tier is enough for order-request volume. Swappable later for Stripe checkout. |
| Plain CSS (custom properties, no framework) | The visual identity comes from the tin artwork (vintage parchment / engraved illustration style) — a utility framework fights that more than it helps at this size. |

## Components

```
src/
  content/products/        # one JSON/MD entry per product per language (name, story,
                           #   tasting notes, sizes, images) — single source of truth
  i18n/                    # ui.en.json, ui.el.json — nav labels, buttons, form strings
  layouts/Base.astro       # <head>, hreflang tags, header (nav + language switch), footer
  pages/                   # English (default): /, /products/<slug>/, /coming-soon/, /order/
  pages/el/                # Greek mirror: /el/, /el/products/<slug>/, ...
  components/              # ProductHero, StoryBlock, IconRow (100% Koroneiki / hand-picked /
                           #   cold-pressed / no-additives), OrderForm, LanguageSwitch
public/images/             # tin artwork, landscape art, product photos
```

## Data flow
1. Product data + translations live in `src/content/` — pages are generated statically
   for both locales at build time.
2. Language switch links to the same page in the other locale (path-based: `/` ↔ `/el/`),
   with `hreflang` alternates in `<head>` for SEO.
3. Order form (client) → POST to Web3Forms endpoint → email to owner's inbox →
   redirect to a localized thank-you page. Product pages link to `/order/?product=<slug>`
   to pre-select the product.

## Visual direction
Derived from the provided tin labels: parchment/aged-paper backgrounds, engraved-
illustration art, serif display type, olive-green + gold for the Crete line, dark
bronze/black + gold Spartan palette for the Lakonia line, warm amber for honey.
Each product page carries its line's palette; the landing page unifies them.

## Open risks
- **Product images**: the tin artwork was shared in chat but isn't in the repo yet;
  honey and Athinaiki oil have no imagery. Pages will use styled placeholders until
  real files are provided (see RESOURCES.md).
- **Form deliverability**: free form relays can land in spam; verify with a test
  order before launch.
- **Prices/sizes**: order form works without listed prices ("we'll confirm total"),
  but final copy needs the owner's pricing decision.
