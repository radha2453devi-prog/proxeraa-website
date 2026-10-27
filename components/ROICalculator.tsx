"use client";

import { useState } from "react";
import { Reveal, SectionHead } from "./ui";

/**
 * The assumptions behind the numbers. They are shown to visitors under the
 * calculator, so keep them honest. Change them here if your experience differs.
 */
const AUTOMATED_SHARE = 0.8; // share of the repetitive time we assume can be automated
const RATE_LOW = 15; // blended cost per hour, USD
const RATE_HIGH = 30;
const WEEKS = 52;

const usd = (n: number) => "$" + n.toLocaleString("en-US");

export default function ROICalculator() {
  const [hours, setHours] = useState(20);

  const saved = Math.round(hours * AUTOMATED_SHARE);
  const yearlyHours = saved * WEEKS;
  const low = Math.floor((yearlyHours * RATE_LOW) / 1000) * 1000;
  const high = Math.round((yearlyHours * RATE_HIGH) / 1000) * 1000;

  return (
    <section id="roi" className="border-t border-neutral-200/60 py-20 md:py-28" aria-label="Time saved calculator">
      <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHead
            eyebrow="Time saved calculator"
            lines={["What could automation", "give back to your team?"]}
            intro="Move the slider to get a rough idea. It takes ten seconds and you don't need to sign up."
          />
        </div>

        <Reveal delay={120} className="lg:col-span-7">
          <div className="rounded-2xl border border-neutral-200/80 bg-white p-6 shadow-sm sm:p-8">
            <label htmlFor="hours" className="block text-[17px] font-semibold leading-snug tracking-tight">
              How many hours does your team spend weekly on manual repetitive tasks or support tickets?
            </label>

            <div className="mt-6 flex items-center gap-5">
              <input
                id="hours"
                type="range"
                min={5}
                max={60}
                step={1}
                value={hours}
                onChange={(e) => setHours(Number(e.target.value))}
                aria-valuetext={`${hours} hours per week`}
                className="h-2 w-full cursor-pointer accent-[#075847]"
              />
              <output htmlFor="hours" className="w-24 shrink-0 text-right text-3xl font-semibold tracking-tight text-accent">
                {hours}
                <span className="ml-1 text-sm font-medium text-slate">hrs/wk</span>
              </output>
            </div>
            <div className="mt-1 flex justify-between text-xs text-slate">
              <span>5</span>
              <span>60</span>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2" aria-live="polite">
              <div className="rounded-xl border border-line bg-mist p-5">
                <p className="eyebrow text-slate">Hours saved</p>
                <p className="mt-3 text-2xl font-semibold tracking-tight">~80% automated</p>
                <p className="mt-1 text-sm text-graphite">e.g., {saved} hrs/week saved</p>
              </div>
              <div className="rounded-xl border border-line bg-mist p-5">
                <p className="eyebrow text-slate">Annual productivity value</p>
                <p className="mt-3 text-2xl font-semibold tracking-tight">
                  {usd(low)}+ to {usd(high)}+
                </p>
                <p className="mt-1 text-sm text-graphite">Estimated saved per year</p>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <a href="mailto:hello@proxeraa.com" data-open-contact className="btn-accent">
                Automate This Workflow
              </a>
              <p className="max-w-sm text-xs leading-relaxed text-slate">
                A rough estimate, not a promise. It assumes about {Math.round(AUTOMATED_SHARE * 100)}% of that time can be automated and a blended
                cost of ${RATE_LOW} to ${RATE_HIGH} per hour. Real results depend on your workflow, and we'll tell you honestly after a short audit.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
