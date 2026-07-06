# CLAUDE.md

## Project
Bilingual (EN default at `/`, EL at `/el/`) static website selling a family's Greek
products: three olive oils and honey, with an order-request form instead of online
payments. Full picture: docs/ARCHITECTURE.md.

## Commands
- Setup: `npm install`
- Run: `npm run dev` (http://localhost:4321)
- Build: `npm run build` (output in `dist/`)
- Preview build: `npm run preview`

## Conventions
Astro 5 static site, plain CSS with custom properties (no framework). Product data
and translations live in `src/data/` and `src/i18n/` — pages never hardcode
product text. Every English page has a Greek mirror under `/el/` with the same slug.
Visual identity per product line: olive/gold (Crete), bronze/black (Lakonia),
amber (honey) — see docs/ARCHITECTURE.md "Visual direction".

## Memory
Read docs/STATE.md and the current docs/ROADMAP.md phase at session start;
update STATE.md after every task. Record lessons in docs/LESSONS.md (one per
entry, one-line summary, why it mattered; update rather than duplicate;
remove ones proven wrong). Park out-of-scope ideas in docs/IDEAS.md.

## Working rules
Verify before claiming done — point to real tool output. Small commits after
each verified change. Two failures on one approach → record the lesson and
change course. Only interrupt the user for the irreversible, scope changes,
or questions only they can answer.
