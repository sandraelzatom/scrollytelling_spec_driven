# Phases

Phased, actionable implementation plan for Scrolly. Each phase is a self-contained checklist grounded in the canonical spec ([../specs/](../specs/)) and reference implementation ([../_references/bseai_degree/](../_references/bseai_degree/)).

## How to use this

Tell me **"implement phase N"** (e.g. *"implement phase 01"*) and I will:

1. Re-read the phase file and the spec sections it references.
2. Read the exact reference files it lists before writing any code.
3. Apply the listed changes to this workspace.
4. Run the phase's **Exit checks**.
5. Update `STATUS.md` and flip the phase's front-matter `status` to `done`.

## Phase index

| # | Phase | Status |
|---|---|---|
| 00 | [Scaffold](./00-scaffold.md) | ✅ done |
| 01 | [Design system foundation](./01-design-system.md) | ⏳ pending |
| 02 | [Content pipeline](./02-content-pipeline.md) | ⏳ pending |
| 03 | [Standard layout + markdown renderer](./03-standard-layout.md) | ⏳ pending |
| 04 | [Motion primitives](./04-motion-primitives.md) | ⏳ pending |
| 05 | [Presentation layout](./05-presentation-layout.md) | ⏳ pending |
| 06 | [Visualizations](./06-visualizations.md) | ⏳ pending |
| 07 | [CI + deploy hardening](./07-ci-deploy.md) | ⏳ pending |
| 08 | [Content authoring pass](./08-content-pass.md) | ⏳ pending |

Current live tracker: [STATUS.md](./STATUS.md).

## Ground rules (apply to every phase)

- **Read the reference files first.** Do not invent patterns that already exist in [../_references/bseai_degree/](../_references/bseai_degree/). Port, then adapt.
- **Do not copy domain-specific content** (NJIT, BSEAI, studio_ordo branding). The phase files call out what is reusable vs what must be generalized.
- **Each phase must leave the build green and the test suite passing.** `npm run lint && npm run test && npm run build && npm run test:e2e` must all succeed at the end of every phase.
- **Every phase declares tests up front** in `## Tests required` — see [specs/07-testing.md](../specs/07-testing.md) for the matrix. No merge without tests covering the changed code.
- **Non-trivial phases get an audit pass** (Knuth / Clean Code / GoF). Findings dispositioned as blocker / backlog / wontfix in `## Audit findings`.
- **Commit boundaries = phase boundaries.** One phase, one (set of) commits.
- **Update the phase file on completion.** At the bottom of each phase file is a "Completion notes" section — fill it in with what was actually done, what deviated from the plan, and any follow-ups for later phases. This is how the plan stays grounded.

## Phase file structure

Every phase file follows this shape:

```markdown
---
status: pending | in-progress | done
phase: NN
title: …
depends-on: [list of prior phases]
---

# Phase NN — Title

## Objective
(1–3 sentences)

## Spec references
- specs/NN-*.md §section

## Reference code to port
- docs/_references/bseai_degree/<path>   → scrolly/<target>

## Steps
1. …
2. …

## Files created / modified
- path — purpose

## Tests required
Declared up front, alongside objectives. See [specs/07-testing.md](../specs/07-testing.md) for the matrix.
- **Unit** (Vitest): positive / negative / edge cases for each changed `lib/` module.
- **Integration** (Vitest): seams between modules introduced or changed in this phase.
- **E2E golden path** (Playwright): one spec per user-facing spec this phase fulfils.

## Exit checks
- [ ] concrete command or state to verify
- [ ] `npm run lint && npm run test && npm run build && npm run test:e2e` all pass

## Audit findings
(filled in after execution — optional but recommended for non-trivial phases)

Run Knuth / Clean Code / GoF audit passes. Each finding:
- `[file:line] — observation — disposition (blocker | backlog | wontfix)`

Blockers must be resolved before closing the phase. Backlog items become follow-up phases or `NOTES.md` entries. Wontfix entries carry a one-line reason.

## Completion notes
(filled in after execution)
```

See [guide/07-prompt-templates.md](../guide/07-prompt-templates.md) for copy-pasteable prompts that drive each section of this template.
