"use client";

import { useState } from "react";
import { Reveal, SectionHead } from "./ui";

const faqs = [
  {
    q: "How quickly can we kick off a project?",
    a: "Usually within 3 to 5 days after we've agreed on the scope. We start with a short call, write down what we're building, and get going.",
  },
  {
    q: "What tech stack do you specialize in?",
    a: "Next.js, Python and FastAPI, AI and LLM integrations, custom automations, and modern cloud setups. We pick what fits your problem rather than forcing one stack on everything.",
  },
  {
    q: "Do you offer post-launch support and maintenance?",
    a: "Yes. You can take a flexible monthly retainer, or have us hand everything over with documentation and dedicated bug-fix support.",
  },
  {
    q: "How does pricing work?",
    a: "Either fixed prices tied to project milestones, or a sprint-based monthly retainer. Either way you get clear deliverables up front, so there are no surprises on the invoice.",
  },
  {
    q: "Do we need our own technical team to work with you?",
    a: "No. We choose the tools, build the system, connect it to what you already use, and explain it in plain language. That's the point of working with us.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="py-20 md:py-28" aria-label="Frequently asked questions">
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <SectionHead
            eyebrow="FAQ"
            lines={["Questions we get", "*asked a lot.*"]}
            intro="Can't find yours? Ask us directly, we're happy to answer before you commit to anything."
            className="[&_p]:mx-auto"
          />
        </div>

        <ul className="mx-auto mt-14 max-w-3xl space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <li key={f.q}>
                <Reveal delay={i * 40}>
                  <div
                    className={`rounded-2xl border bg-white/80 p-6 transition-colors duration-300 ${
                      isOpen ? "border-accent/40" : "border-line"
                    }`}
                  >
                    <h3>
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={`faq-${i}`}
                        onClick={() => setOpen(isOpen ? -1 : i)}
                        className="flex w-full items-center justify-between gap-6 text-left text-lg font-medium tracking-tight sm:text-xl"
                      >
                        {f.q}
                        <span
                          aria-hidden
                          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-mist text-xl text-accent transition-transform duration-300 ease-soft ${
                            isOpen ? "rotate-45" : ""
                          }`}
                        >
                          +
                        </span>
                      </button>
                    </h3>
                    <div
                      id={`faq-${i}`}
                      role="region"
                      className={`grid transition-all duration-300 ease-soft ${
                        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="max-w-xl pt-4 text-[16px] leading-relaxed text-graphite">{f.a}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
