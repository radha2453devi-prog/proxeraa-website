"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Bell, Database, MessageSquare, Zap } from "lucide-react";
import { MaskHeading, Reveal } from "./ui";

const bubbles = [
  { t: "New enquiry from the website form", cls: "left-[2%] top-[8%]", d: 0 },
  { t: "Reply sent in seconds", cls: "left-[34%] top-[58%]", d: 0.8 },
  { t: "Passed to the right person", cls: "right-[4%] top-[14%]", d: 1.6 },
  { t: "Reminder set for tomorrow", cls: "right-[22%] top-[72%]", d: 2.2 },
];

const nodes = [
  { Icon: Zap, cls: "left-[18%] top-[48%]", d: 0.3 },
  { Icon: Database, cls: "left-[50%] top-[30%]", d: 1.1 },
  { Icon: MessageSquare, cls: "left-[72%] top-[52%]", d: 1.9 },
  { Icon: Bell, cls: "left-[88%] top-[40%]", d: 2.6 },
];

export default function Breakout() {
  const reduce = useReducedMotion();
  const float = (d: number) =>
    reduce
      ? {}
      : { animate: { y: [0, -10, 0] }, transition: { duration: 5.5, repeat: Infinity, ease: "easeInOut" as const, delay: d } };

  return (
    <section
      aria-label="Automation that removes delays"
      className="px-3 py-6 sm:px-5 md:py-10"
    >
      <div className="relative mx-auto max-w-[1312px] overflow-hidden rounded-[2rem] bg-forest px-5 py-16 text-paper sm:rounded-[3rem] sm:px-10 md:py-24 lg:px-16">
        <div className="relative z-10">
        <Reveal>
          <p className="eyebrow mb-6 text-leaf">Automation</p>
        </Reveal>
        <MaskHeading
          as="h2"
          className="h-xl"
          lines={["Systems that capture", "the edge cases", "*and eliminate human lag.*"]}
        />

        {/* Mobile: simple stack */}
        <ul className="mt-12 flex flex-wrap gap-3 md:hidden">
          {bubbles.map((b) => (
            <li key={b.t} className="rounded-full border border-paper/20 bg-paper/10 px-4 py-2 text-[13px]">
              {b.t}
            </li>
          ))}
        </ul>

        {/* Desktop: floating bubbles and nodes */}
        <div className="relative mt-12 hidden h-[320px] md:block" aria-hidden>
          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1000 320" preserveAspectRatio="none" fill="none">
            <path
              d="M180 155 C 330 40, 420 60, 500 98 S 660 190, 720 166 S 840 100, 880 128"
              stroke="#9AD9B5"
              strokeOpacity="0.45"
              strokeWidth="1.5"
              strokeDasharray="5 7"
            />
          </svg>
          {nodes.map(({ Icon, cls, d }, i) => (
            <motion.span
              key={i}
              {...float(d)}
              className={`absolute ${cls} flex h-14 w-14 -translate-x-1/2 items-center justify-center rounded-full border border-leaf/40 bg-forest text-leaf shadow-[0_0_0_8px_rgba(154,217,181,0.08)]`}
            >
              <Icon className="h-5 w-5" />
            </motion.span>
          ))}
          {bubbles.map((b) => (
            <motion.span
              key={b.t}
              {...float(b.d)}
              className={`absolute ${b.cls} max-w-[260px] rounded-2xl border border-paper/20 bg-paper/10 px-4 py-2.5 text-[14px] backdrop-blur-sm`}
            >
              {b.t}
            </motion.span>
          ))}
        </div>
        </div>

      <div aria-hidden className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-leaf/10 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-paper/5 blur-3xl" />
      </div>
    </section>
  );
}
