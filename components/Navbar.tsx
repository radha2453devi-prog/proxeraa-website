"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const links = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#why" },
  { label: "FAQ", href: "#faq" },
];

const toggle = [
  { label: "Services", id: "services" },
  { label: "Work", id: "work" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("services");

  // Highlight Services or Work in the toggle, depending on what is on screen.
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    const els = toggle.map((t) => document.getElementById(t.id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="pointer-events-none fixed inset-x-0 top-4 z-50 flex justify-center px-3 sm:top-6">
      <motion.div
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
        className="pointer-events-auto relative"
      >
        <div className="flex items-center gap-3 rounded-full border border-line bg-paper/85 px-3 py-2 shadow-sm backdrop-blur-md sm:gap-8 sm:px-6 sm:py-2.5">
          <a href="#top" className="flex items-center gap-2.5" aria-label="Proxeraa home">
            <Image src="/logo-mark-dark.png" alt="" width={569} height={580} priority className="h-7 w-auto" />
            <Image
              src="/logo-wordmark-dark.png"
              alt="Proxeraa"
              width={957}
              height={82}
              priority
              className="hidden h-[12px] w-auto sm:block"
            />
          </a>

          <div role="tablist" aria-label="Jump to" className="hidden items-center rounded-full bg-mist p-1 md:flex">
            {toggle.map((t) => {
              const on = active === t.id;
              return (
                <button
                  key={t.id}
                  type="button"
                  role="tab"
                  aria-selected={on}
                  onClick={() => {
                    setActive(t.id);
                    go(t.id);
                  }}
                  className={`relative rounded-full px-4 py-1.5 text-[13px] font-medium transition-colors ${
                    on ? "text-ink" : "text-slate hover:text-ink"
                  }`}
                >
                  {on && (
                    <motion.span
                      layoutId="nav-toggle"
                      className="absolute inset-0 rounded-full bg-white shadow-sm"
                      transition={{ type: "spring", stiffness: 420, damping: 34 }}
                    />
                  )}
                  <span className="relative">{t.label}</span>
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            <a href="#contact" data-open-contact className="btn-accent !px-4 !py-2 text-[13px] sm:!px-5">
              Talk to Proxeraa
            </a>
            <button
              type="button"
              className="relative h-9 w-9 md:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((v) => !v)}
            >
              <span
                className={`absolute left-2 right-2 h-px bg-ink transition-all duration-300 ${
                  open ? "top-1/2 rotate-45" : "top-[13px]"
                }`}
              />
              <span
                className={`absolute left-2 right-2 h-px bg-ink transition-all duration-300 ${
                  open ? "top-1/2 -rotate-45" : "top-[22px]"
                }`}
              />
            </button>
          </div>
        </div>

        <div
          id="mobile-menu"
          className={`absolute left-0 right-0 top-full mt-2 rounded-3xl border border-line bg-paper p-3 shadow-lg md:hidden ${
            open ? "block" : "hidden"
          }`}
        >
          <nav aria-label="Mobile" className="flex flex-col">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 font-serif text-2xl hover:bg-mist"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      </motion.div>
    </header>
  );
}
