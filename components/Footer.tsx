
import Image from "next/image";

const nav = [
  { label: "Services", href: "#services" },
  { label: "Case Studies", href: "#work" },
  { label: "FAQs", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const legal = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];

const social: { label: string; href?: string }[] = [
  { label: "LinkedIn" },
  { label: "GitHub" },
  { label: "whatsApp" },
  { label: "Instagram" },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-paper text-ink">
      <div className="container-x py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12">

          <div className="lg:col-span-5">
            <Image
              src="/logo-full-dark.png"
              alt="Proxeraa"
              width={957}
              height={703}
              className="h-auto w-[170px] sm:w-[210px]"
            />

            <p className="mt-5 font-mono text-[12px] uppercase tracking-[0.16em] text-slate">
              AI. Automation. Technology. Growth.
            </p>
          </div>

          <nav aria-label="Footer" className="lg:col-span-3">
            <p className="eyebrow mb-5 text-slate">Explore</p>

            <ul className="space-y-3">
              {nav.map((n) => (
                <li key={n.label}>
                  <a
                    href={n.href}
                    className="link-u text-[15px] transition-colors hover:text-accent"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-2">
            <p className="eyebrow mb-5 text-slate">Legal</p>

            <ul className="space-y-3">
              {legal.map((n) => (
                <li key={n.label}>
                  <a
                    href={n.href}
                    className="link-u text-[15px] transition-colors hover:text-accent"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="eyebrow mb-5 text-slate">Follow</p>

            <ul className="space-y-3">
              {social.map((s) => (
                <li key={s.label}>
                  {s.href ? (
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-u text-[15px] transition-colors hover:text-accent"
                    >
                      {s.label}
                    </a>
                  ) : (
                    <span className="text-[15px] text-slate">
                      {s.label}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="mt-16 flex flex-col justify-between gap-3 border-t border-ink/15 pt-6 font-mono text-[11px] uppercase tracking-[0.14em] text-slate sm:flex-row">
          <span>© 2026 Proxeraa. All rights reserved.</span>

          <a
            href="#top"
            className="link-u transition-colors hover:text-accent"
          >
            Back to top ↑
          </a>
        </div>

      </div>
    </footer>
  );
}
