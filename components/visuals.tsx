/**
 * Visuals built in code (no image files, nothing downloaded).
 * They are sample interfaces for illustration. Swap any of them for real
 * project screenshots whenever you have them.
 */

import { AlertTriangle, Check, GitBranch, GitCommit, X } from "lucide-react";

const leads = [
  { src: "Website form", msg: "Needs a quote for a new site", chip: "Qualified" },
  { src: "WhatsApp", msg: "Asking about weekend slots", chip: "Replied" },
  { src: "Instagram DM", msg: "Wants to know pricing", chip: "Follow-up set" },
  { src: "Google Ads", msg: "Asked for a call on Thursday", chip: "Booked" },
];

const chat: { from: "them" | "us"; text: string }[] = [
  { from: "them", text: "Hi, do you take bookings on Saturdays?" },
  { from: "us", text: "We do, 10 to 4. Want me to hold a slot?" },
  { from: "them", text: "Yes please, 11 works." },
  { from: "us", text: "Done. You'll get a reminder the day before." },
];

const channels = [
  { l: "Ads", w: "82%" },
  { l: "Social", w: "61%" },
  { l: "Website", w: "47%" },
  { l: "WhatsApp", w: "34%" },
];

function PanelHead({ title, right }: { title: string; right?: string }) {
  return (
    <div className="flex items-center justify-between border-b border-line px-5 py-4">
      <span className="flex items-center gap-2 text-[15px] font-medium text-ink">
        <span className="dot-live h-2 w-2 rounded-full bg-emerald-500" />
        {title}
      </span>
      {right && <span className="text-[11px] font-medium uppercase tracking-wider text-slate">{right}</span>}
    </div>
  );
}

/** Hero visual: a sample of what the systems we build look like day to day. */
export function HeroBoard() {
  return (
    <figure aria-label="Sample interface showing leads, an automated chat reply and lead sources">
      <div className="grid gap-3 rounded-[2rem] bg-mist p-3 sm:p-4 lg:grid-cols-12">
        {/* Inbox */}
        <div className="overflow-hidden rounded-3xl border border-line bg-white lg:col-span-5">
          <PanelHead title="New enquiries" right="Today" />
          <ul>
            {leads.map((l, i) => (
              <li
                key={l.src}
                className="row-in flex items-center justify-between gap-3 border-b border-line px-5 py-4 last:border-b-0"
                style={{ ["--d" as string]: `${500 + i * 140}ms` }}
              >
                <div className="min-w-0">
                  <p className="text-[11px] font-medium uppercase tracking-wider text-slate">{l.src}</p>
                  <p className="mt-1 truncate text-[16px] text-ink">{l.msg}</p>
                </div>
                <span className="shrink-0 rounded-full bg-lilac px-3 py-1 text-[12px] font-medium text-accentdeep">
                  {l.chip}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Chat */}
        <div className="overflow-hidden rounded-3xl border border-line bg-white lg:col-span-4">
          <PanelHead title="Reply assistant" right="Auto" />
          <div className="space-y-3 p-5">
            {chat.map((m, i) => (
              <div
                key={i}
                className={`row-in flex ${m.from === "us" ? "justify-end" : "justify-start"}`}
                style={{ ["--d" as string]: `${700 + i * 220}ms` }}
              >
                <p
                  className={`max-w-[88%] rounded-2xl px-4 py-2.5 text-[15px] leading-snug ${
                    m.from === "us" ? "rounded-br-md bg-accent text-white" : "rounded-bl-md bg-mist text-ink"
                  }`}
                >
                  {m.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Sources */}
        <div className="overflow-hidden rounded-3xl border border-line bg-white lg:col-span-3">
          <PanelHead title="Where leads come from" />
          <div className="space-y-5 p-5">
            {channels.map((c, i) => (
              <div key={c.l} className="row-in" style={{ ["--d" as string]: `${900 + i * 120}ms` }}>
                <p className="mb-2 text-[14px] text-slate">{c.l}</p>
                <div className="h-2.5 rounded-full bg-mist">
                  <div className="h-full rounded-full bg-accent" style={{ width: c.w }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <figcaption className="mt-3 text-center text-[12px] text-slate">Sample interface for illustration</figcaption>
    </figure>
  );
}

type Preview = "alerts" | "compare" | "board" | "checklist" | "chat" | "pipeline";
type Tile = { bg: string; fg: string; text: string; preview: Preview };

const tiles: Tile[] = [
  { bg: "bg-ink", fg: "text-bone", text: "3 follow-up mistakes that cost you leads", preview: "alerts" },
  { bg: "bg-accent", fg: "text-white", text: "Before and after: one landing page", preview: "compare" },
  { bg: "bg-white border border-ink/15", fg: "text-ink", text: "Behind the scenes with the team", preview: "board" },
  { bg: "bg-mist border border-ink/10", fg: "text-ink", text: "What a good ad brief looks like", preview: "checklist" },
  { bg: "bg-graphite", fg: "text-bone", text: "Customer question of the week", preview: "chat" },
  { bg: "bg-paper border border-ink/20", fg: "text-ink", text: "Our process in 60 seconds", preview: "pipeline" },
];

const pill = "rounded-full px-1.5 py-px text-[8px] font-medium leading-none sm:text-[9px]";

function Alerts() {
  const rows = [
    { l: "No reply in 24h", b: "Late", c: "text-amber-300", p: "bg-amber-400/20 text-amber-300" },
    { l: "Lead never tagged", b: "Lost", c: "text-red-400", p: "bg-red-500/20 text-red-300" },
    { l: "No next step set", b: "Risk", c: "text-amber-300", p: "bg-amber-400/20 text-amber-300" },
  ];
  return (
    <div className="space-y-1.5">
      {rows.map((r) => (
        <div key={r.l} className="flex items-center gap-1.5 rounded-md border border-white/10 bg-white/[0.06] px-1.5 py-1.5">
          <AlertTriangle className={`h-3 w-3 shrink-0 ${r.c}`} aria-hidden />
          <span className="min-w-0 flex-1 truncate text-[9px] text-white/85 sm:text-[10px]">{r.l}</span>
          <span className={`${pill} ${r.p}`}>{r.b}</span>
        </div>
      ))}
    </div>
  );
}

function Compare() {
  const panel = "rounded-md p-1.5 sm:p-2";
  const row = "flex items-center gap-1 text-[9px] sm:text-[10px]";
  return (
    <div className="grid grid-cols-2 gap-1.5">
      <div className={`${panel} bg-black/25`}>
        <p className="mb-1.5 text-[8px] font-medium uppercase tracking-wider text-white/60">Before</p>
        <div className="space-y-1.5">
          <p className={row}><X className="h-3 w-3 shrink-0 text-red-400" aria-hidden />Slow load</p>
          <p className={row}><X className="h-3 w-3 shrink-0 text-red-400" aria-hidden />No clear CTA</p>
        </div>
      </div>
      <div className={`${panel} bg-white/20`}>
        <p className="mb-1.5 text-[8px] font-medium uppercase tracking-wider text-white/80">After</p>
        <div className="space-y-1.5">
          <p className={row}><Check className="h-3 w-3 shrink-0 text-emerald-300" aria-hidden />Fast load</p>
          <p className={row}><Check className="h-3 w-3 shrink-0 text-emerald-300" aria-hidden />Clear CTA</p>
        </div>
      </div>
    </div>
  );
}

function Board() {
  const rows = [
    { l: "feat: lead form", b: "Merged", p: "bg-emerald-100 text-emerald-700" },
    { l: "fix: nav spacing", b: "Review", p: "bg-amber-100 text-amber-700" },
    { l: "chore: seo meta", b: "Todo", p: "bg-neutral-200 text-neutral-600" },
  ];
  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between text-[8px] font-medium uppercase tracking-wider text-slate sm:text-[9px]">
        <span>Sprint 12</span>
        <span className="flex items-center gap-1"><GitBranch className="h-2.5 w-2.5" aria-hidden />main</span>
      </div>
      <div className="space-y-1.5">
        {rows.map((r) => (
          <div key={r.l} className="flex items-center gap-1.5 rounded-md border border-neutral-200 bg-neutral-50 px-1.5 py-1.5">
            <GitCommit className="h-3 w-3 shrink-0 text-accent" aria-hidden />
            <span className="min-w-0 flex-1 truncate font-mono text-[8.5px] text-ink sm:text-[9.5px]">{r.l}</span>
            <span className={`${pill} ${r.p}`}>{r.b}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Checklist() {
  const rows = [
    { l: "Clear goal", t: "KPI", done: true },
    { l: "Target audience", t: "Who", done: true },
    { l: "Budget and dates", t: "Spend", done: true },
    { l: "Creative angles", t: "Test", done: false },
  ];
  return (
    <div className="space-y-1.5">
      {rows.map((r) => (
        <div key={r.l} className="flex items-center gap-1.5 text-[9px] sm:text-[10px]">
          <span
            className={`flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded ${
              r.done ? "bg-accent text-white" : "border border-ink/30 bg-white"
            }`}
          >
            {r.done && <Check className="h-2.5 w-2.5" strokeWidth={3} aria-hidden />}
          </span>
          <span className={`min-w-0 flex-1 truncate ${r.done ? "text-ink" : "text-slate"}`}>{r.l}</span>
          <span className="rounded border border-accent/30 bg-accent/10 px-1 py-px text-[8px] font-medium leading-none text-accentdeep">
            {r.t}
          </span>
        </div>
      ))}
    </div>
  );
}

function Chat() {
  return (
    <div className="space-y-1.5">
      <p className="max-w-[88%] rounded-lg rounded-bl-sm bg-white/10 px-2 py-1.5 text-[9px] leading-snug text-white/90 sm:text-[10px]">
        Can this integrate with our existing CRM?
      </p>
      <p className="ml-auto max-w-[88%] rounded-lg rounded-br-sm bg-accent px-2 py-1.5 text-[9px] leading-snug text-white sm:text-[10px]">
        Yes, fully synced via automated webhooks.
      </p>
    </div>
  );
}

function Pipeline() {
  const steps = ["Brief", "Build", "Launch"];
  return (
    <div>
      <div className="flex items-center">
        {steps.map((s, i) => (
          <div key={s} className={`flex items-center ${i < steps.length - 1 ? "flex-1" : ""}`}>
            {i < 2 ? (
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent text-white">
                <Check className="h-3 w-3" strokeWidth={3} aria-hidden />
              </span>
            ) : (
              <span className="relative flex h-5 w-5 shrink-0 items-center justify-center">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/40" />
                <span className="relative h-2.5 w-2.5 rounded-full bg-accent" />
              </span>
            )}
            {i < steps.length - 1 && <span className={`mx-1 h-px flex-1 ${i === 0 ? "bg-accent" : "bg-ink/20"}`} />}
          </div>
        ))}
      </div>
      <div className="mt-1.5 flex justify-between text-[8px] font-medium text-slate sm:text-[9px]">
        {steps.map((s) => (
          <span key={s}>{s}</span>
        ))}
      </div>
      <p className="mt-2 flex items-center gap-1 text-[8px] font-medium uppercase tracking-wider text-accentdeep sm:text-[9px]">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
        In progress
      </p>
    </div>
  );
}

const previews: Record<Preview, () => JSX.Element> = {
  alerts: Alerts,
  compare: Compare,
  board: Board,
  checklist: Checklist,
  chat: Chat,
  pipeline: Pipeline,
};

/** Growth visual: a content grid with small interface previews. */
export function CampaignBoard() {
  return (
    <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-3" aria-label="Content ideas we create">
      {tiles.map((t) => {
        const Preview = previews[t.preview];
        return (
          <div
            key={t.text}
            className={`${t.bg} ${t.fg} group flex aspect-[5/4] flex-col justify-between gap-3 overflow-hidden rounded-xl p-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:aspect-square sm:p-4`}
          >
            <div aria-hidden>
              <Preview />
            </div>
            <p className="text-[12px] font-medium leading-tight sm:text-[14px]">{t.text}</p>
          </div>
        );
      })}
    </div>
  );
}
