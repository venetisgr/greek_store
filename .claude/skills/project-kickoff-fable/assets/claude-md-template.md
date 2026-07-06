# CLAUDE.md template

Copy into the repo root as `CLAUDE.md` and fill the brackets. Keep it lean — it loads into context every session, so every line costs attention. Details live in `docs/`; pointers and principles live here.

```
# CLAUDE.md

## Project
[1–2 sentences: what this is and for whom. Full picture: docs/ARCHITECTURE.md]

## Commands
- Setup: [...]
- Run: [...]
- Test: [...]
- Lint / typecheck: [...]

## Conventions
[Stack + versions, and the few rules or patterns that actually matter.]

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
```
