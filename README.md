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

1. Read [docs/phases/README.md](docs/phases/README.md).
2. Check `STATUS.md` for the next pending phase.
3. Say **"implement phase N"** to your AI pair, or do it by hand.
4. Run the phase's exit checks.
5. Fill in the Completion notes. Update `STATUS.md`.
6. Commit. Repeat.

## License

TBD.
