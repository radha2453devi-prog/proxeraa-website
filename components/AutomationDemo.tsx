"use client";

import { useEffect, useState } from "react";
import { Reveal, SectionHead, useInView } from "./ui";

const steps = [
  { t: "A lead comes in", d: "From your website form, WhatsApp, Instagram or an ad. It all lands in one place.", tag: "Trigger" },
  { t: "AI reads it", d: "It checks what they want, whether they're a fit, and how urgent it is.", tag: "AI" },
  { t: "Your CRM updates itself", d: "Name, source and notes get filed. Nobody copies and pastes.", tag: "Sync" },
  { t: "They get a reply", d: "A proper, personal follow-up goes out within minutes, even at 2 a.m.", tag: "Reply" },
  { t: "Your team gets a nudge", d: "The good leads reach the right person, with the full story attached.", tag: "Handoff" },
  { t: "You see what worked", d: "Every lead is traced back to where it came from.", tag: "Report" },
];

export default function AutomationDemo() {
  const { ref, inView } = useInView<HTMLDivElement>(0.25);
  const [active, setActive] = useState(-1);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (!inView || paused) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setActive(steps.length - 1);
      return;
    }
    const id = setInterval(() => setActive((a) => (a >= steps.length - 1 ? -1 : a + 1)), 1600);
    return () => clearInterval(id);
  }, [inView, paused]);

  return (
    <section id="automation" className="py-20 md:py-28" aria-label="AI automation">
      <div className="container-x grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <SectionHead
              eyebrow="AI automation"
              lines={["Stop copy-pasting", "your way through", "*the day.*"]}
              intro="Here's what happens when a lead comes in and nobody has to touch it. Click a step to see what it does, or just watch it run."
            />
            <Reveal delay={300} className="mt-8">
              <button
                type="button"
                onClick={() => setPaused((p) => !p)}
                className="btn-line !py-2.5"
                aria-pressed={paused}
              >
                {paused ? "Resume" : "Pause"}
              </button>
            </Reveal>
          </div>
        </div>

        <div ref={ref} className="lg:col-span-7">
          <div className="rounded-[2rem] bg-mist p-3 sm:p-5">
          <ol className="relative">
            <span aria-hidden className="absolute bottom-6 left-[27px] top-6 w-px bg-ink/15" />
            {steps.map((s, i) => {
              const done = i <= active;
              const current = i === active;
              return (
                <li key={s.t} className="relative pb-3 last:pb-0">
                  <button
                    type="button"
                    onClick={() => {
                      setPaused(true);
                      setActive(i);
                    }}
                    className={`relative flex w-full items-start gap-5 rounded-2xl border p-4 text-left transition-all duration-500 ease-soft sm:p-5 ${
                      current
                        ? "border-accent/50 bg-white shadow-sm"
                        : done
                        ? "border-ink/15 bg-white/70"
                        : "border-transparent bg-transparent"
                    }`}
                    aria-current={current ? "step" : undefined}
                  >
                    <span
                      className={`relative z-10 flex h-[26px] w-[26px] shrink-0 items-center justify-center border font-mono text-[10px] transition-colors duration-500 ${
                        done ? "border-accent bg-accent text-white" : "border-ink/25 bg-mist text-slate"
                      }`}
                    >
                      {done && !current ? "✓" : i + 1}
                    </span>
                    <span className="flex-1">
                      <span className="flex items-center justify-between gap-3">
                        <span
                          className={`text-lg font-semibold tracking-tight transition-colors duration-500 sm:text-xl ${
                            done ? "text-ink" : "text-slate"
                          }`}
                        >
                          {s.t}
                        </span>
                        <span className="eyebrow text-slate">{s.tag}</span>
                      </span>
                      <span
                        className={`grid transition-all duration-500 ease-soft ${
                          current ? "mt-2 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <span className="overflow-hidden text-[15px] text-graphite">{s.d}</span>
                      </span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>
          </div>
          <p className="mt-6 text-sm text-slate">
            An example workflow. Every business ends up a little different.
          </p>
        </div>
      </div>
    </section>
  );
}
