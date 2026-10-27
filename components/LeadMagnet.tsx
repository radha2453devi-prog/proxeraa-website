"use client";

import { useEffect, useState, type FormEvent } from "react";

/**
 * The checklist PDF lives at /public/ai-automation-checklist-2026.pdf.
 * Replace that file with your own version any time (keep the same name).
 * To receive the emails, set NEXT_PUBLIC_FORM_ENDPOINT in .env.local
 * (same Formspree-style endpoint the contact modal uses).
 */
const FORM_ENDPOINT = process.env.NEXT_PUBLIC_FORM_ENDPOINT || "";
const GUIDE_URL = "/ai-automation-checklist-2026.pdf";

export default function LeadMagnet() {
  const [toast, setToast] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 6000);
    return () => clearTimeout(t);
  }, [toast]);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    if (fd.get("company")) return; // honeypot
    const email = String(fd.get("email") || "").trim();

    setBusy(true);
    if (FORM_ENDPOINT) {
      try {
        await fetch(FORM_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({ email, source: "checklist" }),
        });
      } catch {
        /* the download still goes ahead */
      }
    }

    const a = document.createElement("a");
    a.href = GUIDE_URL;
    a.download = "Proxeraa-AI-Workflow-Automation-Checklist-2026.pdf";
    document.body.appendChild(a);
    a.click();
    a.remove();

    form.reset();
    setBusy(false);
    setToast("Thanks! Your checklist is downloading.");
  }

  return (
    <section aria-label="Free checklist" className="border-t border-neutral-200/60 bg-white py-10 md:py-12">
      <div className="container-x flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
        <p className="max-w-2xl text-lg font-medium leading-snug tracking-tight text-ink">
          Not ready for a sprint yet? Download our Free 2026 AI &amp; Workflow Automation Checklist for B2B Founders.
        </p>

        <form onSubmit={onSubmit} className="flex w-full flex-col gap-3 sm:flex-row lg:max-w-md">
          <label className="sr-only" htmlFor="guide-email">
            Work email
          </label>
          <input
            id="guide-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="Work email"
            className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-[15px] text-ink outline-none transition-colors placeholder:text-slate/70 focus:border-accent focus:ring-2 focus:ring-accent/20"
          />
          <input name="company" type="text" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
          <button type="submit" disabled={busy} className="btn-accent shrink-0 disabled:opacity-60">
            Get Free Guide
          </button>
        </form>
      </div>

      {toast && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-6 left-1/2 z-[70] -translate-x-1/2 rounded-lg bg-ink px-5 py-3 text-sm font-medium text-white shadow-lg"
        >
          {toast}
        </div>
      )}
    </section>
  );
}
