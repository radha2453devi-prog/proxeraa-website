"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";

/**
 * TWO WAYS THIS MODAL WORKS
 *
 * 1. Booking calendar: add your Cal.com or Calendly link to .env.local
 *      NEXT_PUBLIC_CAL_URL=https://cal.com/your-name/20min
 *    The scheduler then loads inside the modal (with a loading skeleton).
 *
 * 2. Quick form (used when no calendar link is set): Full Name, Work Email and a
 *    short message. To receive these in your inbox, create a free form at
 *    formspree.io and add:
 *      NEXT_PUBLIC_FORM_ENDPOINT=https://formspree.io/f/xxxxxxx
 *    Without it, the form opens the visitor's email app with the message pre-filled.
 */
const CONTACT_EMAIL = "hello@proxeraa.com"; // TODO: replace with your real inbox
const CAL_URL = process.env.NEXT_PUBLIC_CAL_URL || "";
const FORM_ENDPOINT = process.env.NEXT_PUBLIC_FORM_ENDPOINT || "";

type Status = "idle" | "sending" | "sent" | "mailto" | "error";

const field =
  "w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-[15px] text-ink outline-none transition-colors placeholder:text-slate/70 focus:border-accent focus:ring-2 focus:ring-accent/20";

export default function ContactModal() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [calLoaded, setCalLoaded] = useState(false);
  const firstRef = useRef<HTMLInputElement>(null);

  // Any element with data-open-contact opens the modal.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const el = (e.target as HTMLElement | null)?.closest("[data-open-contact]");
      if (el) {
        e.preventDefault();
        setStatus("idle");
        setCalLoaded(false);
        setOpen(true);
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    const t = setTimeout(() => firstRef.current?.focus(), 60);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
      clearTimeout(t);
    };
  }, [open]);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries()) as Record<string, string>;
    if (data.company) return; // honeypot: real people leave this empty

    if (FORM_ENDPOINT) {
      setStatus("sending");
      try {
        const res = await fetch(FORM_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({ name: data.name, email: data.email, message: data.message }),
        });
        setStatus(res.ok ? "sent" : "error");
      } catch {
        setStatus("error");
      }
    } else {
      const body = `Name: ${data.name}\nWork email: ${data.email}\n\n${data.message}`;
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
        `New enquiry from ${data.name}`
      )}&body=${encodeURIComponent(body)}`;
      setStatus("mailto");
    }
  }

  if (!open) return null;

  const wide = Boolean(CAL_URL);

  return (
    <div className="fixed inset-0 z-[60] flex items-end justify-center sm:items-center sm:p-6" role="presentation">
      <button
        type="button"
        aria-label="Close"
        tabIndex={-1}
        onClick={() => setOpen(false)}
        className="absolute inset-0 cursor-default bg-ink/70 backdrop-blur-sm"
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-title"
        className={`relative max-h-[92dvh] w-full overflow-y-auto rounded-t-2xl bg-paper p-6 shadow-2xl sm:rounded-2xl sm:p-9 ${
          wide ? "max-w-3xl" : "max-w-lg"
        }`}
      >
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Close"
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-lg text-2xl leading-none text-ink transition-colors hover:bg-neutral-200/70"
        >
          ×
        </button>

        {CAL_URL ? (
          <div>
            <p className="eyebrow text-accentdeep">Book a call</p>
            <h2 id="contact-title" className="mt-3 text-3xl font-semibold tracking-[-0.03em]">
              Talk to Proxeraa
            </h2>
            <p className="mt-3 text-[15px] text-graphite">Pick a time that suits you. The first call is a short, no-pressure chat.</p>
            <div className="relative mt-6 h-[560px] overflow-hidden rounded-xl border border-neutral-200 bg-white">
              {!calLoaded && (
                <div className="absolute inset-0 animate-pulse space-y-4 p-6" aria-hidden>
                  <div className="h-6 w-1/3 rounded bg-neutral-200" />
                  <div className="h-4 w-2/3 rounded bg-neutral-200" />
                  <div className="mt-6 grid grid-cols-7 gap-2">
                    {Array.from({ length: 28 }).map((_, i) => (
                      <div key={i} className="h-10 rounded bg-neutral-100" />
                    ))}
                  </div>
                </div>
              )}
              <iframe
                src={CAL_URL}
                title="Book a call with Proxeraa"
                loading="lazy"
                onLoad={() => setCalLoaded(true)}
                className="h-full w-full border-0"
              />
            </div>
          </div>
        ) : status === "sent" || status === "mailto" ? (
          <div className="py-8">
            <p className="eyebrow text-accentdeep">{status === "sent" ? "Message sent" : "One more step"}</p>
            <h2 id="contact-title" className="mt-3 text-3xl font-semibold tracking-[-0.03em]">
              {status === "sent" ? "Thanks, we've got it." : "Your email app should be open."}
            </h2>
            <p className="mt-4 text-graphite">
              {status === "sent"
                ? "We'll read it properly and reply with next steps, usually within one working day."
                : "Your message is pre-filled. Just press send. If nothing opened, write to us at " + CONTACT_EMAIL + "."}
            </p>
            <button type="button" onClick={() => setOpen(false)} className="btn-accent mt-8">
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={onSubmit}>
            <p className="eyebrow text-accentdeep">Book a call</p>
            <h2 id="contact-title" className="mt-3 text-3xl font-semibold tracking-[-0.03em]">
              Talk to Proxeraa
            </h2>
            <p className="mt-3 text-[15px] text-graphite">Three quick fields. We'll reply with next steps.</p>

            <div className="mt-7 space-y-4">
              <label className="block">
                <span className="mb-1.5 block text-sm font-medium">Full Name</span>
                <input ref={firstRef} name="name" type="text" required autoComplete="name" className={field} placeholder="Your name" />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-sm font-medium">Work Email</span>
                <input name="email" type="email" required autoComplete="email" className={field} placeholder="you@company.com" />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-sm font-medium">What do you want to automate or build?</span>
                <textarea
                  name="message"
                  required
                  rows={4}
                  className={`${field} resize-y`}
                  placeholder="A sentence or two is plenty."
                />
              </label>
              {/* honeypot */}
              <input name="company" type="text" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
            </div>

            {status === "error" && (
              <p role="alert" className="mt-4 text-sm font-medium text-accentdeep">
                Something went wrong sending that. Please try again, or email {CONTACT_EMAIL}.
              </p>
            )}

            <button type="submit" disabled={status === "sending"} className="btn-accent mt-7 w-full disabled:opacity-60">
              {status === "sending" ? "Sending..." : "Send message"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
