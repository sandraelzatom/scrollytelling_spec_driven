<<<<<<< Updated upstream
import Link from "next/link";

const REPO = "https://github.com/kaw393939/scrollytelling_spec_driven";
const DOCS = `${REPO}/blob/main/docs`;

const goodSteps = [
  { label: "read", note: "scan the relevant files" },
  { label: "locate", note: "pinpoint the exact code" },
  { label: "reproduce", note: "make the failure concrete" },
  { label: "explain", note: "state the cause in words" },
  { label: "edit", note: "smallest safe change" },
  { label: "verify", note: "run a real command" },
];

const badSteps = [
  { label: "guess", note: "skip the code" },
  { label: "edit", note: "patch a symptom" },
  { label: "error", note: "syntax or test fails" },
  { label: "edit", note: "try again, blind" },
  { label: "error", note: "it still fails" },
  { label: "done", note: "declare victory" },
];

const loopSteps = [
  "Harvest",
  "Converge",
  "Specify",
  "Phase",
  "Pre-flight QA",
  "Implement",
  "Exit QA",
  "Audit",
];

const researchCards = [
  {
    title: "Trajectory shape matters",
    body: "Raw session length is a weak signal. What predicts success is the shape: agents that read and validate beat agents that edit and guess — even at the same length.",
  },
  {
    title: "No edit before context",
    body: "Successful runs look like understand → reproduce → fix → verify. Failed runs find the right file, then thrash on syntax errors without ever running the tests.",
  },
  {
    title: "Simple patches, hard problems",
    body: "Some tasks with tiny diffs still defeat agents because the real work is architectural reasoning — not typing code. Ask which layer owns the problem before editing.",
  },
  {
    title: "Review burden is real",
    body: "Agentic pull requests that don't merge tend to touch more files, add more lines, and fail CI more often. A good AI change should be easy for a human to inspect.",
  },
  {
    title: "Notes are memory",
    body: "Project docs feed the next AI session. Bad notes poison future runs the same way bad code breaks a build. Validate instructions stored in files.",
  },
];

const problemLayers = [
  "content",
  "component",
  "layout",
  "routing",
  "data",
  "build / deploy",
];

const startLinks = [
  {
    href: `${DOCS}/guide/00-start-here.md`,
    label: "00 · Start here",
    note: "Orientation and the three-part guide.",
  },
  {
    href: `${DOCS}/guide/03-working-with-ai.md`,
    label: "03 · Working with AI",
    note: "The most important file. The garden-hose model, trajectory, control loop.",
  },
  {
    href: `${DOCS}/guide/07-prompt-templates.md`,
    label: "07 · Prompt templates",
    note: "Copy-pasteable prompts for each step of the loop.",
  },
  {
    href: `${DOCS}/guide/08-a-real-run.md`,
    label: "08 · A real run",
    note: "One honest end-to-end transcript, including loopbacks.",
  },
];

export default function Home() {
  return (
    <main className="bg-white text-slate-900">
      {/* Hero */}
      <section className="border-b border-slate-200 bg-linear-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            Scrolly · spec-driven AI workflow
          </p>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-6xl">
            Learn to <span className="text-sky-600">direct</span> AI,
            <br className="hidden sm:block" /> not just use it.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl">
            Build a scrollytelling page while learning a research-backed
            workflow for supervising coding agents. AI writes code cheaply.
            Direction is scarce. This site teaches how to supply it.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`${DOCS}/guide/00-start-here.md`}
              className="rounded-md bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-700"
            >
              Start the guide →
            </a>
            <a
              href={`${DOCS}/guide/03-working-with-ai.md`}
              className="rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-900"
            >
              Jump to the payload
            </a>
            <Link
              href="/images/"
              className="rounded-md border border-transparent px-5 py-3 text-sm font-semibold text-slate-600 transition hover:text-slate-900"
            >
              Image library
            </Link>
          </div>
          <p className="mt-10 font-mono text-sm leading-6 text-slate-500">
            No edit before diagnosis.
            <br />
            No diagnosis without context.
            <br />
            No done without evidence.
          </p>
        </div>
      </section>

      {/* The real lesson */}
      <section className="border-b border-slate-200">
        <div className="mx-auto grid max-w-5xl gap-10 px-6 py-16 sm:grid-cols-2 sm:py-20">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-sky-600">
              The real lesson
            </h2>
            <p className="mt-3 text-2xl font-medium leading-snug text-slate-900 sm:text-3xl">
              AI coding is not magic prompting. It is supervised engineering.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              The human provides direction, context, scope, judgment, and
              verification. The AI provides fluent output. You decide whether
              that output is correct.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
            <div className="text-xs font-semibold uppercase tracking-widest text-slate-500">
              Vehicle
            </div>
            <p className="mt-1 text-lg font-medium text-slate-900">
              A scrollytelling personal web page.
            </p>
            <div className="mt-6 text-xs font-semibold uppercase tracking-widest text-slate-500">
              Payload
            </div>
            <p className="mt-1 text-lg font-medium text-slate-900">
              Agentic coding discipline that outlives any framework.
            </p>
          </div>
        </div>
      </section>

      {/* Hose model */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-sky-600">
            The hose model
          </h2>
          <p className="mt-3 text-2xl font-medium text-slate-900 sm:text-3xl">
            Same hose. Same water. Completely different outcome.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-amber-200 bg-amber-50 p-6">
              <div className="text-xs font-semibold uppercase tracking-widest text-amber-700">
                Wide spray
              </div>
              <p className="mt-2 text-lg font-semibold text-slate-900">
                Exploration
              </p>
              <p className="mt-2 text-sm leading-relaxed text-slate-700">
                Thumb off the nozzle. You are making a menu: brainstorming,
                comparing approaches, learning a new area. Lots of output, some
                of it useful.
              </p>
            </div>
            <div className="rounded-xl border border-sky-200 bg-sky-50 p-6">
              <div className="text-xs font-semibold uppercase tracking-widest text-sky-700">
                Narrow jet
              </div>
              <p className="mt-2 text-lg font-semibold text-slate-900">
                Implementation
              </p>
              <p className="mt-2 text-sm leading-relaxed text-slate-700">
                Thumb pressed down. One scoped task, one reference, one exit
                check. The water hits the patch you aimed at.
              </p>
            </div>
          </div>
          <p className="mt-6 text-sm text-slate-600">
            The skill is knowing which mode you are in and switching
            deliberately. Exploring when you should be executing is the most
            common mistake.
          </p>
        </div>
      </section>

      {/* Good trajectory vs bad */}
      <section className="border-b border-slate-200">
        <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-sky-600">
            The good trajectory
          </h2>
          <p className="mt-3 max-w-3xl text-2xl font-medium text-slate-900 sm:text-3xl">
            A good AI session has a shape. When the shape breaks, stop the
            session.
          </p>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <TrajectoryCard
              tone="good"
              title="Good shape"
              steps={goodSteps}
              caption="read → locate → reproduce → explain → edit → verify"
            />
            <TrajectoryCard
              tone="bad"
              title="Thrash"
              steps={badSteps}
              caption="guess → edit → error → edit → error → done"
            />
          </div>

          <blockquote className="mt-10 border-l-4 border-slate-900 bg-slate-50 p-6 text-base leading-relaxed text-slate-800">
            When the AI starts editing before it understands, stop the session.
            You are no longer coding. You are watching the hose whip around the
            yard.
          </blockquote>
        </div>
      </section>

      {/* Control loop */}
      <section className="border-b border-slate-200 bg-slate-900 text-slate-100">
        <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-sky-300">
            The control loop
          </h2>
          <p className="mt-3 text-2xl font-medium sm:text-3xl">
            Planning goes wide then narrow. Execution runs per phase, before →
            during → after.
          </p>

          <ol className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {loopSteps.map((step, i) => (
              <li
                key={step}
                className="rounded-lg border border-slate-700 bg-slate-800 p-4"
              >
                <div className="text-xs font-semibold uppercase tracking-widest text-sky-300">
                  Step {i + 1}
                </div>
                <div className="mt-1 text-lg font-semibold text-white">
                  {step}
                </div>
              </li>
            ))}
          </ol>

          <p className="mt-8 text-sm leading-relaxed text-slate-300">
            If exit QA fails, you loop back. That is why it is called a control
            loop, not a checklist. Copy-pasteable prompts for each step:{" "}
            <a
              href={`${DOCS}/guide/07-prompt-templates.md`}
              className="text-sky-300 underline decoration-sky-500/50 underline-offset-4 hover:text-sky-200"
            >
              07 · Prompt templates
            </a>
            .
          </p>
        </div>
      </section>

      {/* What research confirms */}
      <section className="border-b border-slate-200">
        <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-sky-600">
            What research now confirms
          </h2>
          <p className="mt-3 max-w-3xl text-2xl font-medium text-slate-900 sm:text-3xl">
            The intuition is old. The vocabulary is new.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {researchCards.map((card) => (
              <article
                key={card.title}
                className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-base font-semibold text-slate-900">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {card.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* What layer owns the problem */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-sky-600">
            What layer owns the problem?
          </h2>
          <p className="mt-3 max-w-3xl text-2xl font-medium text-slate-900 sm:text-3xl">
            Before you ask AI to fix something, classify it.
          </p>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-600">
            Some tiny code changes require architectural reasoning. Some
            &ldquo;big&rdquo; bugs are actually one content edit. Name the
            layer first.
          </p>
          <ul className="mt-8 flex flex-wrap gap-2">
            {problemLayers.map((layer) => (
              <li
                key={layer}
                className="rounded-full border border-slate-300 bg-white px-4 py-1.5 text-sm font-medium text-slate-700"
              >
                {layer}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Start here */}
      <section>
        <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-sky-600">
            Start here
          </h2>
          <p className="mt-3 text-2xl font-medium text-slate-900 sm:text-3xl">
            Four files, in order.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {startLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-slate-900 hover:shadow-md"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-semibold text-slate-900">
                    {link.label}
                  </h3>
                  <span
                    aria-hidden
                    className="text-slate-400 transition group-hover:translate-x-1 group-hover:text-slate-900"
                  >
                    →
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {link.note}
                </p>
              </a>
            ))}
          </div>

          <div className="mt-12 rounded-xl border border-slate-200 bg-slate-50 p-6 text-sm leading-relaxed text-slate-700">
            <p className="font-semibold text-slate-900">After this site,</p>
            <p className="mt-2">
              a student should understand five things:
            </p>
            <ol className="mt-3 list-decimal space-y-1 pl-5">
              <li>AI output is cheap; direction is scarce.</li>
              <li>
                Specs, references, phases, and tests are how humans supply
                direction.
              </li>
              <li>The shape of the AI session matters.</li>
              <li>
                A good agent reads, locates, reproduces, explains, edits, and
                verifies.
              </li>
              <li>
                A bad agent guesses, edits, errors, edits, errors, and declares
                victory.
              </li>
            </ol>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-6 py-8 text-sm text-slate-500">
          <span>
            Scrolly · a teaching site for spec-driven AI workflows.
          </span>
          <div className="flex gap-4">
            <a href={REPO} className="hover:text-slate-900">
              GitHub
            </a>
            <a href={`${DOCS}/specs/`} className="hover:text-slate-900">
              Specs
            </a>
            <a href={`${DOCS}/phases/`} className="hover:text-slate-900">
              Phases
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
=======
import { getHomeRepo } from "@/lib/content/repository";
import { PageLayoutFactory } from "@/components/layouts/PageLayoutFactory";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getHomeRepo().getPageBySlug("home");
  return {
    title: page.frontmatter.seo?.title ?? page.frontmatter.title,
    description: page.frontmatter.seo?.description ?? page.frontmatter.summary,
  };
}

export default async function Home() {
  const page = await getHomeRepo().getPageBySlug("home");
  return <PageLayoutFactory page={page} />;
>>>>>>> Stashed changes
}

function TrajectoryCard({
  tone,
  title,
  steps,
  caption,
}: {
  tone: "good" | "bad";
  title: string;
  steps: { label: string; note: string }[];
  caption: string;
}) {
  const good = tone === "good";
  const ring = good ? "border-emerald-200" : "border-rose-200";
  const bg = good ? "bg-emerald-50" : "bg-rose-50";
  const badge = good ? "bg-emerald-600 text-white" : "bg-rose-600 text-white";
  const headingTone = good ? "text-emerald-800" : "text-rose-800";
  const captionTone = good ? "text-emerald-900" : "text-rose-900";

  return (
    <div className={`rounded-xl border ${ring} ${bg} p-6`}>
      <div className="flex items-center gap-3">
        <span
          className={`rounded-full px-2.5 py-0.5 text-xs font-semibold uppercase tracking-widest ${badge}`}
        >
          {good ? "Good" : "Bad"}
        </span>
        <h3 className={`text-lg font-semibold ${headingTone}`}>{title}</h3>
      </div>

      <ol className="mt-5 space-y-2">
        {steps.map((s, i) => (
          <li
            key={`${tone}-${i}-${s.label}`}
            className="flex items-start gap-3 rounded-md bg-white/70 px-3 py-2"
          >
            <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white text-[11px] font-semibold text-slate-700 ring-1 ring-slate-300">
              {i + 1}
            </span>
            <div>
              <div className="font-mono text-sm font-semibold text-slate-900">
                {s.label}
              </div>
              <div className="text-xs text-slate-600">{s.note}</div>
            </div>
          </li>
        ))}
      </ol>

      <p className={`mt-5 font-mono text-xs ${captionTone}`}>{caption}</p>
    </div>
  );
}
