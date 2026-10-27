import { Reveal, SectionHead } from "./ui";

const steps = [
  {
    n: "1",
    t: "20-Min Discovery & Audit",
    when: "Days 1-3",
    d: "We audit your manual workflows, data leaks, or tech bottlenecks, and align on a fixed scope, deliverables, and timeline.",
  },
  {
    n: "2",
    t: "Sprint & Rapid Build",
    when: "Week 1-2",
    d: "We build the pipeline, AI integration, or full-stack web app with daily async progress updates and staging demos.",
  },
  {
    n: "3",
    t: "Deploy, Integrate & Train",
    when: "Launch",
    d: "Production deployment, team onboarding, comprehensive documentation, plus a 14-day warranty period for bug fixes.",
  },
];

export default function Process() {
  return (
    <section id="process" className="border-t border-neutral-200/60 py-20 md:py-28" aria-label="How we work">
      <div className="container-x">
        <SectionHead
          eyebrow="How we work"
          lines={["From Bottleneck to Deployment", "in Days, Not Months"]}
        />

        <ol className="relative mt-14 grid gap-5 lg:mt-16 lg:grid-cols-3 lg:gap-6">
          {steps.map((s, i) => (
            <li key={s.n} className="relative">
              <Reveal delay={i * 100} className="h-full">
                <div className="flex h-full flex-col rounded-2xl border border-neutral-200/80 bg-white p-6 shadow-sm transition-all duration-200 hover:shadow-md sm:p-7">
                  <div className="flex items-center justify-between">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-base font-semibold text-white">
                      {s.n}
                    </span>
                    <span className="rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                      {s.when}
                    </span>
                  </div>
                  <h3 className="mt-6 text-2xl font-semibold leading-tight tracking-tight">{s.t}</h3>
                  <p className="mt-3 text-[15.5px] leading-relaxed text-graphite">{s.d}</p>
                </div>
              </Reveal>
              {i < steps.length - 1 && (
                <span
                  aria-hidden
                  className="absolute -right-4 top-1/2 z-10 hidden h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-neutral-200/80 bg-paper text-accentdeep lg:flex"
                >
                  →
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
