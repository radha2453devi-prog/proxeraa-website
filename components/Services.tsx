"use client";

import { useState } from "react";
import { Reveal, SectionHead } from "./ui";

const services = [
  {
    key: "Grow",
    tag: "Marketing",
    line: "Posts, ads and landing pages that bring in enquiries you can actually follow up.",
    items: [
      "Social Media Management",
      "Content Strategy",
      "Paid Advertising",
      "Performance Marketing",
      "Lead Generation",
      "Conversion Optimization",
    ],
  },
  {
    key: "Automate",
    tag: "AI & Automation",
    line: "Chatbots, AI agents and workflows that handle the busywork around the clock.",
    items: [
      "AI Agents",
      "AI Chatbots",
      "Workflow Automation",
      "Business Process Automation",
      "WhatsApp Automation",
      "AI Consulting",
    ],
  },
  {
    key: "Build",
    tag: "Software",
    line: "Websites, web apps and internal tools, built to fit the way your team works.",
    items: [
      "Website Development",
      "Custom Web Applications",
      "SaaS Development",
      "Internal Business Tools",
      "API Integrations",
      "Dashboards",
    ],
  },
  {
    key: "Intelligence",
    tag: "Data",
    line: "Research, scraped data and dashboards, so you stop guessing and start knowing.",
    items: [
      "Web Scraping",
      "Data Intelligence",
      "Business Research",
      "Analytics",
      "Reporting Dashboards",
      "Custom Data Solutions",
    ],
  },
];

export default function Services() {
  const [active, setActive] = useState(0);

  return (
    <section id="services" className="border-t border-neutral-200/60 py-20 md:py-28" aria-label="Services">
      <div className="container-x">
        <SectionHead
          eyebrow="What we do"
          lines={["Here's what we can", "take off your plate."]}
          intro="Pick any area to see what's inside. Most clients start with one and add others as things get easier."
        />

        <div className="mt-16 border-t border-ink/15 lg:mt-20">
          {services.map((s, i) => {
            const isOpen = active === i;
            return (
              <Reveal key={s.key} delay={i * 60}>
                <div className="border-b border-ink/15">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`svc-${s.key}`}
                    onClick={() => setActive(i)}
                    onMouseEnter={() => {
                      if (typeof window !== "undefined" && window.matchMedia("(hover: hover)").matches) setActive(i);
                    }}
                    className="group flex w-full items-baseline gap-4 py-6 text-left sm:gap-8 lg:py-8"
                  >
                    <span className="w-8 shrink-0 font-mono text-xs text-slate">0{i + 1}</span>
                    <span
                      className={`flex-1 text-[clamp(2rem,6vw,5rem)] font-semibold leading-none tracking-[-0.04em] transition-colors duration-500 ease-soft ${
                        isOpen ? "text-ink" : "text-ink/45 group-hover:text-ink/75"
                      }`}
                    >
                      {s.key}
                    </span>
                    <span className="eyebrow hidden text-slate sm:block">{s.tag}</span>
                    <span
                      aria-hidden
                      className={`text-2xl transition-transform duration-500 ease-soft ${
                        isOpen ? "rotate-45 text-accentdeep" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>

                  <div
                    id={`svc-${s.key}`}
                    role="region"
                    aria-label={`${s.key} services`}
                    className={`grid transition-all duration-500 ease-soft ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="grid gap-8 pb-10 pl-0 sm:pl-16 lg:grid-cols-12 lg:gap-12 lg:pl-20">
                        <p className="max-w-sm text-lg leading-snug text-graphite lg:col-span-4">{s.line}</p>
                        <ul className="grid gap-x-8 sm:grid-cols-2 lg:col-span-8">
                          {s.items.map((it) => (
                            <li
                              key={it}
                              className="flex items-center justify-between border-t border-ink/10 py-3.5 text-[15px] font-medium"
                            >
                              {it}
                              <span aria-hidden className="text-accentdeep">
                                ↗
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
