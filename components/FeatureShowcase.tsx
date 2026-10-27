"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Bot, Check, Database, Flame, MessageSquare, Bell, Zap } from "lucide-react";
import { emph } from "./ui";

/* ---------- Example mockups (code made, sample content) ---------- */

function LeadsMock() {
  const rows = [
    { src: "Website form", note: "Asked for a quote this week", tag: "Hot", tone: "bg-terracotta/30 text-[#9A4A1C]" },
    { src: "WhatsApp", note: "Comparing two options", tag: "Warm", tone: "bg-sage/50 text-[#2F5A2F]" },
    { src: "Instagram DM", note: "Just browsing for now", tag: "Cold", tone: "bg-mist text-slate" },
  ];
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between text-[12px] font-medium text-slate">
        <span>New enquiries</span>
        <span className="rounded-full bg-lilac px-2.5 py-1 text-accentdeep">Scored automatically</span>
      </div>
      {rows.map((r) => (
        <div key={r.src} className="flex items-center gap-3 rounded-2xl border border-line bg-white p-4">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-mist">
            {r.tag === "Hot" ? <Flame className="h-4 w-4 text-terracotta" aria-hidden /> : <MessageSquare className="h-4 w-4 text-slate" aria-hidden />}
          </span>
          <span className="min-w-0 flex-1">
            <span className="block text-[14px] font-medium">{r.src}</span>
            <span className="block truncate text-[13px] text-slate">{r.note}</span>
          </span>
          <span className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${r.tone}`}>{r.tag}</span>
        </div>
      ))}
    </div>
  );
}

function ChatMock() {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 text-[12px] font-medium text-slate">
        <span className="dot-live h-2 w-2 rounded-full bg-emerald-500" />
        Support agent is online
      </div>
      <p className="max-w-[80%] rounded-2xl rounded-bl-md border border-line bg-white px-4 py-3 text-[14px]">
        Do you ship to my city, and how long does it take?
      </p>
      <p className="ml-auto max-w-[80%] rounded-2xl rounded-br-md bg-accent px-4 py-3 text-[14px] text-white">
        Yes, we do. Usually 2 to 3 days. Want me to check your pincode?
      </p>
      <p className="max-w-[80%] rounded-2xl rounded-bl-md border border-line bg-white px-4 py-3 text-[14px]">
        I'd like to talk to someone about a bulk order.
      </p>
      <p className="flex items-center gap-2 text-[12px] font-medium text-accentdeep">
        <Bot className="h-4 w-4" aria-hidden />
        Handed over to a person, with the full conversation
      </p>
    </div>
  );
}

function DashMock() {
  const metrics = [
    { l: "New leads", v: "128" },
    { l: "Replied", v: "112" },
    { l: "Booked", v: "34" },
  ];
  const bars = [38, 52, 44, 66, 58, 80, 72];
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-3 gap-3">
        {metrics.map((m) => (
          <div key={m.l} className="rounded-2xl border border-line bg-white p-4">
            <p className="text-[12px] text-slate">{m.l}</p>
            <p className="mt-1 font-serif text-3xl">{m.v}</p>
          </div>
        ))}
      </div>
      <div className="rounded-2xl border border-line bg-white p-4">
        <p className="text-[12px] font-medium text-slate">This week</p>
        <div className="mt-4 flex h-28 items-end gap-2">
          {bars.map((h, i) => (
            <span key={i} className="flex-1 rounded-t-lg bg-accent/80" style={{ height: `${h}%` }} />
          ))}
        </div>
      </div>
      <p className="text-[11px] text-slate">Sample numbers for illustration</p>
    </div>
  );
}

function PipelineMock() {
  const steps = [
    { icon: Zap, t: "Enquiry comes in", d: "Form, WhatsApp or email" },
    { icon: Bot, t: "AI qualifies it", d: "Checks the details that matter" },
    { icon: Database, t: "CRM is updated", d: "No copy and paste" },
    { icon: Bell, t: "Your team is told", d: "Right person, right moment" },
  ];
  return (
    <ol className="space-y-2.5">
      {steps.map((s, i) => (
        <li key={s.t} className="relative flex items-center gap-4 rounded-2xl border border-line bg-white p-4">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-lilac text-accentdeep">
            <s.icon className="h-4 w-4" aria-hidden />
          </span>
          <span className="flex-1">
            <span className="block text-[14px] font-medium">{s.t}</span>
            <span className="block text-[13px] text-slate">{s.d}</span>
          </span>
          <Check className="h-4 w-4 text-emerald-600" aria-hidden />
          {i < steps.length - 1 && <span aria-hidden className="absolute -bottom-2.5 left-9 h-2.5 w-px bg-accent/40" />}
        </li>
      ))}
    </ol>
  );
}

const features: { id: string; label: string; title: string; text: string; mock: ReactNode }[] = [
  {
    id: "leads",
    label: "Smart Lead Qualification",
    title: "Know which leads are *worth a call.*",
    text: "Every enquiry is scored on the details that matter, so your team spends its time on the people most likely to say yes.",
    mock: <LeadsMock />,
  },
  {
    id: "support",
    label: "24/7 AI Support Agents",
    title: "Answers at 2am, *without the 2am shift.*",
    text: "An AI agent handles the common questions, collects the details, and hands over to a person at the right moment.",
    mock: <ChatMock />,
  },
  {
    id: "dash",
    label: "Custom Internal Dashboards",
    title: "One screen for *how the business is doing.*",
    text: "Dashboards built around your own numbers, pulling from the tools you already use, in plain language.",
    mock: <DashMock />,
  },
  {
    id: "flow",
    label: "Workflow Automation Pipelines",
    title: "The boring steps, *done while you sleep.*",
    text: "Follow-ups, data entry and handovers run on their own, with a clear log of what happened and when.",
    mock: <PipelineMock />,
  },
];

export default function FeatureShowcase() {
  const [active, setActive] = useState(features[0].id);
  const refs = useRef<Record<string, HTMLElement | null>>({});
  const reduce = useReducedMotion();

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.getAttribute("data-id") || features[0].id);
        });
      },
      { rootMargin: "-40% 0px -45% 0px" }
    );
    Object.values(refs.current).forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section id="features" className="py-20 md:py-28" aria-label="What we build">
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow mb-6 text-accentdeep">What we build</p>
          <h2 className="h-xl">
            {emph("Tools that quietly *do the work.*")}
          </h2>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-12 lg:gap-16">
          {/* Sticky list (desktop) */}
          <aside className="hidden lg:col-span-4 lg:block">
            <ol className="sticky top-40 space-y-1">
              {features.map((f) => {
                const on = active === f.id;
                return (
                  <li key={f.id} className="relative pl-5">
                    {on && (
                      <motion.span
                        layoutId="feature-bar"
                        className="absolute bottom-1 left-0 top-1 w-[3px] rounded-full bg-accent"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    )}
                    <button
                      type="button"
                      onClick={() =>
                        refs.current[f.id]?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "center" })
                      }
                      aria-current={on ? "true" : undefined}
                      className={`block py-2 text-left transition-all duration-300 ${
                        on ? "font-serif text-3xl text-accent" : "text-[17px] text-slate/70 hover:text-ink"
                      }`}
                    >
                      {f.label}
                    </button>
                  </li>
                );
              })}
            </ol>
          </aside>

          {/* Scrolling cards */}
          <div className="space-y-10 lg:col-span-8 lg:space-y-0">
            {features.map((f) => (
              <motion.article
                key={f.id}
                data-id={f.id}
                ref={(el) => {
                  refs.current[f.id] = el;
                }}
                initial={reduce ? false : { opacity: 0, y: 48 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
                className="flex flex-col justify-center lg:min-h-[78vh] lg:py-10"
              >
                <p className="mb-4 text-[13px] font-medium uppercase tracking-[0.14em] text-accentdeep lg:hidden">{f.label}</p>
                <div className="rounded-[2rem] bg-mist p-4 sm:p-7">{f.mock}</div>
                <h3 className="mt-8 font-serif text-4xl leading-[1.05] tracking-tight sm:text-5xl">{emph(f.title)}</h3>
                <p className="mt-4 max-w-xl text-lg leading-relaxed text-graphite">{f.text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
