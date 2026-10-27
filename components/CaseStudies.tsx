import { Photo, Reveal, SectionHead } from "./ui";

/**
 * These are written as EXAMPLE SCENARIOS of the kind of work Proxeraa does.
 * They contain no client names and no numbers on purpose.
 *
 * When you have a real, approved project, replace the text and add real figures:
 *   metrics: [{ value: "85%", label: "Manual work reduced" }, ...]
 * The result tiles only appear when `metrics` has entries. Only add numbers you can prove.
 */
type Metric = { value: string; label: string };
type Case = {
  title: string;
  kind: string;
  category: string;
  problem: string;
  solution: string;
  tech: string[];
  metrics?: Metric[];
};

const cases: Case[] = [
  {
    title: "Smart Lead Qualification Engine",
    category: "AI Automation",
    kind: "Workflow automation · B2B",
    problem:
      "Inbound B2B enquiries arrive by email and web forms, and someone has to read, verify and sort every one by hand before sales can act.",
    solution:
      "An end-to-end automation pipeline: webhooks catch each enquiry, custom scraping enriches it, and an AI classifier scores it and syncs it to the CRM within seconds.",
    tech: ["Webhooks", "Web scraping", "LLM classifier", "CRM sync"],
    metrics: [],
  },
  {
    title: "Enterprise Support & Knowledge Hub",
    category: "AI Chatbot",
    kind: "AI chatbot · Knowledge assistant",
    problem:
      "A lean support team gets the same questions again and again, tickets take too long to resolve, and customers drift away while they wait.",
    solution:
      "A production chatbot grounded in the company's own documentation (RAG), with intent detection, multi-language replies and instant hand-off to a human when it should.",
    tech: ["RAG chatbot", "Intent classification", "Multi-lingual", "Escalation rules"],
    metrics: [],
  },
  {
    title: "Automated Operations & Analytics Dashboard",
    category: "Internal Tools",
    kind: "Custom web platform · Internal tools",
    problem:
      "Operations run across a pile of spreadsheets, so inventory updates and reports are always a step behind what's actually happening.",
    solution:
      "A custom web dashboard with live data sync, automatic alerts and role-based permissions, so every team sees the same up-to-date numbers.",
    tech: ["Full-stack web app", "Real-time sync", "Alerts", "Role-based access"],
    metrics: [],
  },
];

export default function CaseStudies() {
  return (
    <section id="work" className="border-t border-neutral-200/60 bg-paper py-20 md:py-28" aria-label="Case studies">
      <div className="container-x">
        <SectionHead
          eyebrow="Case studies"
          lines={["The kind of work", "we take on."]}
          intro="Example scenarios that show how we approach a problem. Real client stories will replace these as they're cleared for publishing."
        />

        <div className="mt-14 space-y-8 lg:mt-16 lg:space-y-10">
          {cases.map((c, i) => (
            <article key={c.title} className="grid gap-8 rounded-2xl border border-neutral-200/80 bg-white p-5 shadow-sm transition-all duration-200 hover:shadow-md sm:p-8 lg:grid-cols-12 lg:gap-12">
              <Reveal className={`lg:col-span-7 ${i % 2 ? "lg:order-2" : ""}`}>
                <Photo
                  src={`/images/work-${i + 1}.jpg`}
                  alt={`${c.title} project screenshot`}
                  label="ADD PROJECT IMAGE"
                  hint={`public/images/work-${i + 1}.jpg`}
                  ratio="16/11"
                />
              </Reveal>

              <Reveal delay={120} className={`lg:col-span-5 ${i % 2 ? "lg:order-1" : ""}`}>
                <p className="eyebrow text-accentdeep">
                  0{i + 1} · {c.kind}
                </p>
                <h3 className="mt-3 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">{c.title}</h3>
                <p className="mt-4 inline-block rounded-full border border-line bg-mist px-3 py-1 text-xs font-semibold text-accentdeep">
                  {c.category}
                </p>

                <dl className="mt-7 divide-y divide-ink/10 border-y border-ink/10">
                  <div className="grid grid-cols-[104px_1fr] gap-4 py-4">
                    <dt className="eyebrow pt-0.5 text-slate">The problem</dt>
                    <dd className="text-[15px] leading-relaxed">{c.problem}</dd>
                  </div>
                  <div className="grid grid-cols-[104px_1fr] gap-4 py-4">
                    <dt className="eyebrow pt-0.5 text-slate">What we build</dt>
                    <dd className="text-[15px] leading-relaxed">{c.solution}</dd>
                  </div>
                  <div className="grid grid-cols-[104px_1fr] gap-4 py-4">
                    <dt className="eyebrow pt-0.5 text-slate">Built with</dt>
                    <dd className="flex flex-wrap gap-2">
                      {c.tech.map((t) => (
                        <span key={t} className="border border-ink/20 px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider">
                          {t}
                        </span>
                      ))}
                    </dd>
                  </div>
                </dl>

                {c.metrics && c.metrics.length > 0 && (
                  <div className="mt-6">
                    <p className="eyebrow text-slate">Key results</p>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {c.metrics.map((m) => (
                        <li
                          key={m.label}
                          className="rounded-full border border-line bg-mist px-3 py-1 text-xs font-semibold text-accentdeep"
                        >
                          {m.value} {m.label}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </Reveal>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
