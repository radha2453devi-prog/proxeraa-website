import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "2026 AI & Workflow Automation Checklist for B2B Founders | Proxeraa",
  description: "A practical checklist for deciding what to automate, starting small and keeping AI projects safe.",
};

const sections = [
  {
    t: "1. Find the work worth automating",
    items: [
      "List every task your team repeats each week.",
      "Write down roughly how long each one takes and how often it happens.",
      "Mark the tasks where mistakes are common or people wait on a handoff.",
      "Pick the one task that costs the most time for the least thinking.",
    ],
  },
  {
    t: "2. Check the basics first",
    items: [
      "Know where leads, tickets and orders arrive today, and keep that to as few places as you can.",
      "Make sure your CRM or database is reasonably clean and has one owner.",
      "Write the current process down, even roughly. If nobody can explain it, automating it will not fix it.",
      "Confirm who has access to which tools and data.",
    ],
  },
  {
    t: "3. Start small",
    items: [
      "Automate one workflow, not five.",
      "Decide how you will measure success before you build (time saved, response time, errors).",
      "Keep a person in the loop for the first weeks and review the output.",
      "Run a short pilot, then widen it.",
    ],
  },
  {
    t: "4. If AI is involved",
    items: [
      "Decide what data may and may not be sent to an AI model.",
      "Test it with real examples from your own business, including awkward ones.",
      "Give it a clear way to hand over to a human when it is unsure.",
      "Log what it does so you can check it later.",
    ],
  },
  {
    t: "5. After launch",
    items: [
      "Give the system a named owner on your side.",
      "Review results weekly at first, then monthly.",
      "Keep simple documentation so the setup does not live in one person's head.",
      "Collect exceptions and use them to improve the next version.",
    ],
  },
];

export default function Checklist() {
  return (
    <main className="container-x max-w-3xl py-28 md:py-32">
      <a href="/" className="link-u text-sm font-medium">
        Back to home
      </a>
      <p className="eyebrow mt-10 text-accentdeep">Free checklist</p>
      <h1 className="display mt-3 text-4xl sm:text-5xl">2026 AI &amp; Workflow Automation Checklist for B2B Founders</h1>
      <p className="mt-5 text-lg leading-relaxed text-graphite">
        Use this before you spend money on automation. Tick things off as you go. To keep a copy, use your browser's
        print option and choose "Save as PDF".
      </p>

      <div className="mt-10 space-y-5">
        {sections.map((s) => (
          <section key={s.t} className="rounded-2xl border border-neutral-200/80 bg-white p-6 shadow-sm sm:p-7">
            <h2 className="text-xl font-semibold tracking-tight">{s.t}</h2>
            <ul className="mt-4 space-y-3">
              {s.items.map((i) => (
                <li key={i} className="flex gap-3 text-[16px] leading-relaxed text-graphite">
                  <span aria-hidden className="mt-1 h-4 w-4 shrink-0 rounded border border-neutral-400" />
                  {i}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <p className="mt-10 text-graphite">
        Want a second pair of eyes on your list?{" "}
        <a href="/#contact" className="font-semibold text-accentdeep underline underline-offset-2">
          Talk to Proxeraa
        </a>
        .
      </p>
    </main>
  );
}
