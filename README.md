# Scrolly

A statically-exported Next.js site that teaches **how to build a scrollytelling web experience** by being one.

- **Live site:** https://kaw393939.github.io/scrollytelling_spec_driven/
- **Image library:** https://kaw393939.github.io/scrollytelling_spec_driven/images/
- **Repo:** https://github.com/kaw393939/scrollytelling_spec_driven
- **Stack:** Next.js 16 App Router (static export) · React 19 · TypeScript · framer-motion · Markdown + Zod · CSS Modules

## If you are a student

Start here &rarr; **[docs/guide/00-start-here.md](docs/guide/00-start-here.md)**.

That guide covers, in order:

1. [The stack](docs/guide/01-the-stack.md) — what Next.js, React, JSX, and static export actually are.
2. [Hosting](docs/guide/02-hosting.md) — GitHub Pages vs Vercel vs the rest, and why this class uses Pages.
3. [Working with AI](docs/guide/03-working-with-ai.md) — the garden-hose mental model, the three-layer process, and the habits that make AI pairing reliable. **Most important file.**
4. [Your assignment](docs/guide/04-your-assignment.md) — setup, workflow, rubric, how to submit.
5. [Glossary](docs/guide/05-glossary.md) — every term in one place.
6. [Reference projects as context packs](docs/guide/06-reference-as-context-pack.md) — how to harvest ideas and code from working sites (including this one's parent, [bseai_degree](https://github.com/kaw393939/bseai_degree)) into your own specs and phases. This is how you make your work reusable.
7. [Prompt templates — the control loop](docs/guide/07-prompt-templates.md) — the seven prompts that drive planning and execution, copy-pasteable.

## Quick start

```bash
npm install
npm run dev        # http://localhost:3000

npm run build      # static export → out/
```

Deploying to Pages is handled by [.github/workflows/deploy.yml](.github/workflows/deploy.yml); see [docs/specs/08-deployment.md](docs/specs/08-deployment.md).

## How this project is built

This repo uses a deliberately structured, three-layer process to keep a human and an AI coding assistant aligned across long sessions.

```
┌──────────────────────────────────────────────────────────────┐
│  docs/_references/     Reference implementation              │
│  (ground truth)        Real working code to port from        │
├──────────────────────────────────────────────────────────────┤
│  docs/specs/           Specification — what to build         │
│  (stable)              10 short files, one concern each      │
├──────────────────────────────────────────────────────────────┤
│  docs/phases/          Phased plan — how and when            │
│  (executed)            9 scoped phases + STATUS tracker      │
└──────────────────────────────────────────────────────────────┘
```

The idea in one paragraph: a modern AI coding assistant is a nearly unlimited supply of raw intelligence — electricity converted into something that behaves like reasoning. What is scarce, and what a human has to bring, is **direction**. Specs give the AI stable meaning; phases give it a scoped task; references give it real code to port from instead of patterns to invent. Runnable exit checks decide when a task is actually done, so correctness is a matter of commands and not of vibes.

Long-form treatment of the methodology — including the garden-hose mental model for *how* to apply the pressure — lives in [docs/guide/03-working-with-ai.md](docs/guide/03-working-with-ai.md).

## The control loop

Every real task in this repo runs through the same seven-step loop — once for planning, then once per phase for execution. Full copy-pasteable versions live in [docs/guide/07-prompt-templates.md](docs/guide/07-prompt-templates.md).

**Planning (wide → narrow):**

1. **Harvest.** *"Go look at this codebase and tell me all the good ideas you can find."*
2. **Converge.** *"Discuss. Refine. Agree on what needs done."*
3. **Specify.** *"Go into `docs/specs/` and create as many specs as we need to cover this part of the project."*
4. **Phase.** *"Review the specs and plan phases so that at the end we will have addressed 100% of the specs we defined."*

**Per phase (before → during → after):**

5. **Pre-flight QA.** *"QA `docs/phases/NN-name.md` and update it with any relevant information from the current codebase to prepare it for implementation."*
6. **Implement.** One phase, one session, thumb on the nozzle.
    - **6a. Tests.** Unit / integration / e2e covering positive, negative, edge, and golden-path cases. Every spec gets a golden-path e2e; every objective gets a test as its exit check. Matrix: [docs/specs/07-testing.md](docs/specs/07-testing.md).
7. **Exit QA.** *"QA this phase to ensure that 100% of the phase objectives are met."* Lint, unit, build, and e2e all green.
    - **7.5. Audit pass** (recommended for non-trivial phases). Knuth / Clean Code / Gang of Four reading passes. Each finding dispositioned as **blocker**, **backlog**, or **wontfix**.

If step 7 fails, you do not move on — you loop back to step 5 (or further). That is why it is a *control loop* and not a checklist.

Two ideas do most of the work:

- **100% coverage as an explicit target.** Every spec has a phase; every phase objective has a runnable check; every spec has a golden-path e2e test. Gaps are failures.
- **Pre-flight QA.** Reading the codebase against the plan *before* touching it catches drift before the AI has a chance to invent around it.
- **Tests as durable exit checks + audits as planned reading passes.** Tests (positive, negative, edge, golden) fight regression and enable refactoring. Audits (Knuth / Clean Code / GoF) answer *"is it any good?"* after correctness is settled.

## Project layout

```
scrolly/
├── .github/workflows/deploy.yml   # GitHub Pages CI
├── docs/
│   ├── guide/                     # student-facing teaching material
│   ├── specs/                     # what to build (stable)
│   ├── phases/                    # how to build it (executed)
│   └── _references/               # real working code to port from
├── public/images/                 # assets (listed at /images/ on the live site)
├── src/app/                       # App Router entry points
├── next.config.ts                 # static export + basePath for Pages
├── package.json
└── tsconfig.json
```

## Current status

See [docs/phases/STATUS.md](docs/phases/STATUS.md). At the time of writing, Phase 00 (scaffold) is done; Phase 01 (design system) is next.

## Continuing the build

Run the [control loop](#the-control-loop) once per phase:

1. Read [docs/phases/README.md](docs/phases/README.md) and check `STATUS.md` for the next pending phase.
2. **Pre-flight QA** the phase file against the current codebase (loop step 5).
3. **Implement** the phase with tests (loop steps 6 + 6a).
4. **Exit QA** — `npm run lint && npm run test && npm run build && npm run test:e2e` all green (loop step 7).
5. **Audit pass** for non-trivial phases — Knuth / Clean Code / GoF (loop step 7.5).
6. Fill in the Completion notes and Audit findings. Update `STATUS.md`.
7. Commit. Repeat.

Copy-pasteable prompts for each step: [docs/guide/07-prompt-templates.md](docs/guide/07-prompt-templates.md).

## License

TBD.
