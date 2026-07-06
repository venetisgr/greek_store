---
name: project-kickoff-fable
description: Bootstrap a project for efficient, autonomous execution. Interviews the user, produces planning docs (architecture, phased roadmap, resources needed), sets up a persistent memory system (CLAUDE.md, STATE.md, LESSONS.md, IDEAS.md), and establishes a working protocol with autonomy rules — planning first and stopping for approval before any implementation. Use this whenever the user is starting a new project, greenfield app, or empty repo and says things like "kick off", "bootstrap", "set up this project", "let's start building X", "new project", or pastes a project idea and asks to begin — even if they never mention planning or scaffolding. Also use when the user asks to add project memory, state files, a roadmap, or autonomous-agent scaffolding to an existing codebase.
---

# Project Kickoff

Turn a project idea into a planned, memory-equipped workspace where work can proceed autonomously across sessions and context compactions. The sequence: understand → plan → get approval → set up memory → execute. One hard rule: never skip the approval gate — a wrong plan executed efficiently is the most expensive failure in autonomous work.

## Phase 0 — Understand

Anchor on purpose: what's being built, for whom, and what it enables — extract this from what the user already said before asking anything. Ask only questions whose answers would change the architecture or roadmap, batched into one message. In an existing repo, explore the code first so the plan describes reality rather than aspiration.

## Phase 1 — Plan, don't build

Produce three documents, then stop:

* `docs/ARCHITECTURE.md` — components and their responsibilities, data flow, tech choices with rationale, open risks.
* `docs/ROADMAP.md` — phases, each with a goal, the high-level design, and acceptance criteria the user can verify themselves; ⬜/🔄/✅ status markers. Phase 1 ends with something runnable end-to-end, however minimal — a walking skeleton surfaces integration problems while they're cheap.
* `docs/RESOURCES.md` — keys, accounts, sample data, and decisions needed from the user, ordered by when work blocks without each.

Present a short summary, confirm the autonomy line below fits the user's comfort level, and wait for explicit approval before any implementation.

## Phase 2 — Memory (after approval)

Create from `assets/memory-templates.md`:

* `docs/STATE.md` — Now / Next / Decisions (dated). Update after every task; this is how work survives compactions and new sessions.
* `docs/LESSONS.md` — one lesson per entry with a one-line summary: corrections and confirmed approaches both, with why each mattered. Don't record what the repo or chat history already holds; update an entry rather than duplicating it; remove ones later proven wrong. Check it before non-trivial attempts.
* `docs/IDEAS.md` — out-of-scope parking lot. Add freely; act only when the user promotes an item to the roadmap.

Create `CLAUDE.md` at the repo root from `assets/claude-md-template.md`, kept lean — it loads into context every session. Don't add further state files unless each has a clear read/write trigger; untriggered files go stale.

## Phase 3 — Execute

Read `CLAUDE.md`, `docs/STATE.md`, and the current roadmap phase at session start, then work in small verified increments: tests/lint/typecheck, commit, update `STATE.md`.

* Audit before reporting. Cross-check every progress claim against a tool result produced this session. Claim only what has evidence behind it; name anything not yet verified. If tests fail, show the output rather than a summary.
* Parallelize. Delegate independent subtasks to subagents and keep working while they run; intervene if one drifts or is missing context.
* Independent review. At each phase's end, have a fresh agent that hasn't seen the work judge the result against the roadmap's acceptance criteria alone; fix findings before moving on.
* Assessment vs. action. When the user is describing a problem or thinking out loud rather than requesting a change, deliver your read and stop — no fixes until asked.
* Outcome-first reporting. Final messages lead with what happened and the evidence, then the next step; keep internal shorthand out.

Autonomy line (confirmed at approval): stop only for something that can't be undone, a real change in scope or architecture, or a question only the user can answer — otherwise keep going.

## Adapting

Existing codebase: document what is, plan the delta. Tiny project: one `PLAN.md` combining roadmap and state — the value is the protocol, not the file count. Non-code work (research, writing, analysis): same shape, with the user's review criteria standing in for tests.
