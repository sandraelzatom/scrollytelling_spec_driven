---
title: Working with AI
audience: students
last-reviewed: 2026-04-23
---

# Working with AI

This is the most important file in the guide. The tech stack is something you will forget and re-learn. The habit you build *here* — how to direct an AI pair on a real project — will outlast any framework.

## Start from the physics

Take a moment to notice what is actually happening when you open an AI coding assistant.

Somewhere in a data centre, electricity is flowing through chips. Those chips are running matrix multiplications across weights that were trained on most of the public code humanity has ever written. Electricity is being converted, in real time, into something that looks and behaves very much like **intelligence**. You can ask it to write a React component and it does. You can ask it to design a database schema and it does. You can ask it to explain recursion to a seven-year-old and it does.

This is genuinely new. It is also genuinely raw. The output is not scarce — an AI will produce as much code as you will let it — and it is not automatically correct. What is scarce, and what you have to bring, is **direction**.

## The garden-hose model

Think of an AI coding assistant as a garden hose hooked up to mains pressure.

The **water** is already there. You do not have to generate it, and you cannot make more of it. You have a nearly unlimited supply of raw intelligence on tap.

What you control is your **thumb on the nozzle**.

- **Thumb off.** The water sprays wide. It reaches the flower bed, the fence, the neighbour's cat, and a little bit of your own feet. This is an AI with no specs, no scope, and no exit checks. It produces a lot, some of it useful, most of it not quite what you wanted.
- **Thumb pressed down.** The water narrows into a focused jet. It hits exactly the patch you are aiming at, with force. This is an AI given a single, scoped task: *port this file from here to there; here is the exit check.*

Same hose. Same water. Completely different outcome.

The skill is not "always narrow" or "always wide." It is **knowing which mode you are in and switching deliberately**.

| Mode | Use it for | Example prompt |
|------|-----------|----------------|
| **Wide spray** (exploration) | Brainstorming, comparing approaches, learning a new area | *"What are three different ways to animate something on scroll in React?"* |
| **Narrow jet** (execution) | Making a specific change correctly | *"Add a new page at `/about/` that renders the Markdown file at `content/about.md`. When I run `npm run build`, `out/about/index.html` must exist."* |

A rough rule: the earlier you are in a task, the wider the spray. The closer you are to shipping, the narrower the jet.

## Why this matters — the four failure modes, briefly

AI pairs fail in predictable ways on real projects. You will see all four of these in your own work. The three-layer process we use exists to prevent each one.

1. **Short memory.** The AI does not remember what you decided three messages ago, let alone three sessions ago. *Fix:* write decisions to files, not chat.
2. **Invents when unsure.** Faced with an API it does not know, the AI will often produce a plausible-looking call that does not exist. *Fix:* give it a reference implementation to port from.
3. **Does more than you asked.** Ask for a button; get a refactor. *Fix:* a scoped task list with explicit files and exit checks.
4. **Cannot tell you it is lost.** There is no reliable "I do not know" signal. The output always reads as confident. *Fix:* runnable checks, so correctness is decided by a command, not a vibe.

## The three-layer process

This is the specific shape we use to keep the jet narrow when it needs to be narrow. You will see the same three folders in almost any serious project built this way.

```
┌────────────────────────────────────────────────────────────┐
│  References    Real working code we port from              │
│  (ground truth)   e.g. docs/_references/                   │
├────────────────────────────────────────────────────────────┤
│  Specs         What the project is supposed to do          │
│  (stable)         e.g. docs/specs/                         │
├────────────────────────────────────────────────────────────┤
│  Phases        How and when we build it, step by step      │
│  (executed)       e.g. docs/phases/                        │
└────────────────────────────────────────────────────────────┘
```

Each layer exists because the other two cannot do its job:

- **Specs** outlive individual tasks. They are where meaning lives.
- **Phases** are sized for one focused session. They turn the abstract spec into concrete steps.
- **References** give the AI something real to port from. This is the single most effective thing you can do to stop it from inventing.

## Three habits to take away

If you only remember three things from this file, make it these.

1. **Write the spec before the code.** One paragraph is enough. What are you building? For whom? What does "done" look like? Writing this forces you to think; handing it to the AI focuses the jet.
2. **Run the exit check.** For every task, decide *in advance* what would prove it is done. Then run that check. "Build passes" is not a check. `npm run build && test -f out/about/index.html` is a check.
3. **Write down what you changed from the plan.** When the AI does something different than you intended (and it will), write it down in the phase file or a `NOTES.md`. Future-you — and future AI sessions — will need to know.

## A worked example

Same task, two prompts. Notice the difference in scope.

**Wide spray (early in the task — OK):**

> I want to add a page about my favourite album. What are some ways I could lay it out using scrollytelling techniques? Give me three rough approaches.

This is fine. You are exploring. You want range.

**Narrow jet (when you are ready to build):**

> In this repo, add a new page at `src/app/album/page.tsx`.
> It should:
> - Render a `<h1>` with the text "Kind of Blue".
> - Render the image at `/images/album-cover.jpg` using `next/image`.
> - Use the existing layout at `src/app/layout.tsx`; do not modify it.
>
> When done, confirm: `npm run build` succeeds, and `out/album/index.html` exists.
>
> Reference an existing page at `src/app/page.tsx` for the import style.

This is what the thumb pressed down looks like. Notice:

- One file named.
- Behaviour specified concretely.
- Explicit "do not touch."
- A runnable exit check.
- A reference file so the AI is porting, not inventing.

## When the hose is misbehaving

Symptoms and fixes you will actually use:

| Symptom | Likely cause | Fix |
|---------|--------------|-----|
| AI keeps "fixing" things you did not ask about | Scope too wide | Re-state the task narrower; list files it may and may not touch |
| AI references a function or import that does not exist | No reference, inventing | Give it a real file to port from |
| AI contradicts a decision from earlier in the session | Short memory | Write the decision to a file, then point the AI at the file |
| AI says "done" but the build breaks | No exit check | Define and run a concrete check; make it re-verify |
| Answers feel confident but subtly off | Operating beyond training (newer library version) | Feed it the actual docs or reference code; do not trust training data on moving targets |

## Keep reading

- Next: [04-your-assignment.md](04-your-assignment.md)
- Glossary: [05-glossary.md](05-glossary.md)
