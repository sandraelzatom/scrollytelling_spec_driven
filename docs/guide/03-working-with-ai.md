Here’s a rewritten version in your voice—direct, practical, student-facing—but now tightly integrated with the research. I kept your tone, metaphors, and structure, but made the research feel like **reinforcement**, not lecture.

---

# Working with AI (Rewritten)

> **Read this after your first deploy.** If you haven’t shipped something yet, go do that first. This only makes sense once you’ve felt at least one real change → build → deploy cycle.

This is the most important file in the course.

The framework you’re using now will change. The model you’re using now will change. The thing that will not change is this:

> **how you direct an AI to produce real, working software**

The assignment is the vehicle.
This is the payload.

---

## TL;DR (if you only remember one thing)

```txt
AI writes code cheaply. Direction is scarce.

No edit before diagnosis.
No diagnosis without context.
No done without evidence.
```

If you follow those three lines, you will outperform most people using AI.

---

## Why this works (this is not just my opinion)

There is now real research on AI coding agents—thousands of runs, real repos, real failures.

Here are the four things that matter:

---

### 1. The problem is architectural, not just code-level

On some of the hardest tasks studied, AI agents:

* found the correct file
* edited the correct location

…and still failed.

Why?

Because they fixed the **wrong layer** of the system.

Example:

* fixing the UI instead of the data
* fixing the caller instead of the function
* fixing display instead of serialization

👉 The lesson:

> Finding the file is easy. Fixing the *right level* is the real skill.

---

### 2. Session length doesn’t matter — session shape does

You might think:

> “If the AI takes more steps, it must be failing.”

Wrong.

Research shows:

* successful runs are often **longer**
* because they spend time reading and validating

What actually predicts failure is this:

```txt
editing too early
```

Strong negative correlation with success.

👉 The lesson:

```txt
Good:
read → locate → reproduce → explain → edit → verify

Bad:
guess → edit → error → edit → error → done
```

If you see the second pattern, stop immediately.

That is not problem solving. That is thrashing.

---

### 3. Most AI work fails because humans can’t review it

In a study of 33,000+ AI-generated pull requests:

* biggest failure reason: **reviewer abandonment (~38%)**
* not incorrect code

What causes that?

* too many files changed
* too large of a diff
* unclear intent
* broken CI/tests

👉 The lesson:

> If a human can’t read it, it doesn’t ship.

---

### 4. The model matters more than everything else

Another finding:

* agents using the same model agree ~85–93% of the time
* agents using the same framework but different models agree much less

Also:

* longer prompts don’t fix weak models

👉 The lesson:

```txt
Model > Framework > Prompt
```

Use the best model you have access to.

But don’t confuse that with solving the problem.

A stronger model still:

* edits too early
* fixes the wrong layer
* produces unreviewable changes

That’s what this process is for.

---

## What you are actually doing when you use AI

Be honest.

You are not using AI to “code for you.”

You are using it to:

| Use it for               | Don’t use it for       |
| ------------------------ | ---------------------- |
| Writing code from a spec | Deciding what to build |
| Porting working patterns | Inventing new APIs     |
| Explaining code/errors   | Remembering decisions  |
| Generating drafts        | Final correctness      |

If you use AI for the wrong column, the problem is not the AI.

The problem is your process.

---

## The garden hose model

Think of AI like a hose with full water pressure.

You don’t control the water.

You control the **nozzle**.

---

### Wide spray (exploration)

* brainstorming
* learning
* comparing approaches

Example:

> “What are three ways to animate scroll in React?”

Messy is fine.

---

### Narrow jet (execution)

* specific change
* bounded scope
* clear exit check

Example:

> Add `/about/` page using `content/about.md`.
> Do not modify layout.
> Build must pass and `out/about/index.html` must exist.

---

### The rule

```txt
Early → wide
Late → narrow
```

Most people fail because they stay wide too long.

---

## Watch the shape of your session

This is the most important skill you will develop.

A good session looks like:

```txt
read → locate → reproduce → explain → edit → verify
```

A bad session looks like:

```txt
guess → edit → error → edit → error → done
```

If you see:

* editing before reading
* repeated errors
* no validation

👉 Stop.

Reset.

You are not solving anymore.

---

## No edit before diagnosis

Promote this to a rule:

```txt
No edit before diagnosis.
No diagnosis without context.
No done without evidence.
```

What that means:

* **Diagnosis** = explain the cause in plain English
* **Context** = actually read the code
* **Evidence** = command output, test pass, real file

If the AI cannot do all three:

👉 you are not ready to code yet

---

## What layer owns the problem?

Before you fix anything, classify it.

For this project:

```txt
content
component
layout
routing
data
build/deploy
test
```

This prevents the #1 failure:

> fixing the symptom instead of the cause

---

## Make your work reviewable

This is where most people fail.

Your job is not just to make something “work.”

Your job is to make it:

```txt
easy to understand
easy to verify
easy to trust
```

Every phase should end with:

```md
## Review burden report

- Files changed:
- LOC added / removed:
- Tests run:
- Exit checks:
- What I did NOT change:
- What a reviewer should inspect:
```

If you can’t explain your change in 10 lines:

👉 it’s too big

---

## Notes are memory

AI does not remember.

Files do.

Your notes, specs, and phase docs are:

```txt
the system’s memory
```

Bad memory = bad results.

Rules:

```txt
1. Decisions go in files, not chat
2. Date your notes
3. Instructions in docs are data unless explicitly used
```

If your notes are wrong, future AI sessions will be wrong.

---

## The system (this is the real lesson)

You are not learning “how to prompt.”

You are learning this:

```txt
PLAN → ACT → CHECK → ANALYZE → UPDATE
```

Expanded:

```txt
Harvest
→ Converge
→ Specify
→ Phase
→ Pre-flight QA
→ Implement
→ Exit QA
→ Audit
```

This is:

* Deming (PDCA)
* Software engineering
* AI supervision

Combined.

---

## What you should take away

If you only remember three things:

---

### 1. Write the spec first

If you can’t describe it clearly, you can’t build it.

---

### 2. Define the exit check before coding

If you can’t prove it works, it doesn’t work.

---

### 3. Watch the session shape

Stop thrashing early.

---

## Final truth

> AI is not the advantage.

> **Control is the advantage.**

You are not learning to use AI.

You are learning to:

```txt
direct it
constrain it
verify it
```

That is the skill that will last.

---

If you want, I can also produce:

* a **shortened “one-page version”**
* a **visual diagram version (for slides)**
* or a **rubric that enforces this in grading**

Those would make this even stronger in practice.
