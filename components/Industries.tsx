import { Briefcase, Building2, GraduationCap, HeartPulse, Hotel, Rocket, ShoppingBag, Store } from "lucide-react";
import { Reveal, SectionHead } from "./ui";
import Image from "next/image";

const industries = [
  { n: "Healthcare", pic: "healthcare", Icon: HeartPulse },
  { n: "Education", pic: "education", Icon: GraduationCap },
  { n: "Real estate", pic: "real-estate", Icon: Building2 },
  { n: "Hospitality", pic: "hospitality", Icon: Hotel },
  { n: "E-commerce", pic: "ecommerce", Icon: ShoppingBag },
  { n: "Professional services", pic: "professional", Icon: Briefcase },
  { n: "Startups", pic: "startups", Icon: Rocket },
  { n: "Small and mid-size businesses", pic: "smb", Icon: Store },
];

export default function Industries() {
  return (
    <section id="industries" className="border-t border-neutral-200/60 pb-20 pt-24 md:pb-28 md:pt-28" aria-label="Industries">
      <div className="container-x">
        <SectionHead
          eyebrow="Who we help"
          lines={["Who we usually", "work with."]}
          intro="Don't see your industry? Most of what we build isn't industry-specific. Tell us what you do and we'll take it from there."
        />

        <ul className="mt-14 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {industries.map(({ n, pic, Icon }, i) => (
            <li
              key={n}
              className="group relative overflow-hidden rounded-2xl border border-neutral-200/80 bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-accent/60 hover:shadow-md"
            >
              <Image
                src={`/images/bg-ind-${pic}.jpg`}
                alt=""
                fill
                sizes="(min-width: 1024px) 25vw, 50vw"
                quality={85}
                priority={false}
                aria-hidden
                className="pointer-events-none object-cover object-right transition-transform duration-700 group-hover:scale-110"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/90 via-white/40 to-transparent" />
              <Reveal delay={i * 40} className="relative h-full">
                <div className="flex min-h-[120px] flex-col justify-between p-5 sm:min-h-[150px]">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] text-slate transition-colors duration-200 group-hover:text-accent">0{i + 1}</span>
                    <Icon className="h-5 w-5 text-slate transition-colors duration-200 group-hover:text-accent" aria-hidden />
                  </div>
                  <span className="text-lg font-semibold leading-tight tracking-tight text-ink sm:text-2xl">{n}</span>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
