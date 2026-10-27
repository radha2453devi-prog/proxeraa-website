import { Reveal, SectionHead } from "./ui";

const steps = [
  {
    n: "01",
    when: "Days 1-3",
    t: "20-Min Discovery & Audit",
    d: "We audit your manual workflows, data leaks, or tech bottlenecks, and align on a fixed scope, deliverables, and timeline.",
  },
  {
    n: "02",
    when: "Week 1-2",
    t: "Sprint & Rapid Build",
    d: "We build the pipeline, AI integration, or full-stack web app with daily async progress updates and staging demos.",
  },
  {
    n: "03",
    when: "Go live",
    t: "Deploy, Integrate & Train",
    d: "Production deployment, team onboarding, comprehensive documentation, plus a 14-day warranty period for bug fixes.",
  },
];

export default function HowWeWork() {
  return (
    <section id="process" className="border-t border-neutral-200/60 bg-mist py-20 md:py-28" aria-label="How we work">
      <div className="container-x">
        <SectionHead
          eyebrow="How we work"
          lines={["From Bottleneck to Deployment", "in Days, Not Months"]}
        />

        <ol className="mt-14 grid gap-5 md:grid-cols-3">
          {steps.map((s, i) => (
            <li key={s.n} className="relative">
              <Reveal delay={i * 90} className="h-full">
                <div className="flex h-full flex-col rounded-2xl border border-neutral-200/80 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
                  <div className="flex items-center justify-between">
                    <span className="text-5xl font-semibold tracking-[-0.04em] text-accent">{s.n}</span>
                    <span className="rounded-full border border-line bg-mist px-3 py-1 text-xs font-semibold text-accentdeep">
                      {s.when}
                    </span>
                  </div>
                  <h3 className="mt-8 text-xl font-semibold leading-tight tracking-tight">{s.t}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-graphite">{s.d}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
