import { Reveal, SectionHead } from "./ui";
import Image from "next/image";
import { CampaignBoard } from "./visuals";

const funnel = ["Content", "Distribution", "Paid ads", "Leads", "Conversion", "Retention"];
const funnelPics = ["content", "distribution", "paid-ads", "leads", "conversion", "retention"];
const offers = [
  { t: "Social media", d: "Regular posting that sounds like you, not a template." },
  { t: "Content strategy", d: "What to say, to whom, and where." },
  { t: "Paid ads", d: "Campaigns on the platforms your customers actually use." },
  { t: "Creative strategy", d: "Angles and ideas worth testing." },
  { t: "Lead generation", d: "Forms, funnels and follow-up that don't leak." },
  { t: "Performance analytics", d: "Plain-English reports on what's working." },
];

export default function GrowthSection() {
  return (
    <section id="growth" className="border-t border-neutral-200/60 py-20 md:py-28" aria-label="Growth and marketing">
      <div className="container-x">
        <SectionHead
          eyebrow="Growth"
          lines={["Attention only helps if it", "turns into enquiries."]}
          intro="We plan the content, run the ads and track what happens after the click, so you know which spend did what."
        />

        <Reveal className="mt-14">
          <ol className="grid border border-ink/15 sm:grid-cols-3 lg:grid-cols-6">
            {funnel.map((f, i) => (
              <li
                key={f}
                className="group relative flex min-h-[132px] items-center justify-between gap-3 overflow-hidden border-b border-ink/15 bg-white p-5 last:border-b-0 sm:border-r sm:[&:nth-child(3n)]:border-r-0 lg:border-b-0 lg:[&:nth-child(3n)]:border-r lg:[&:nth-child(6n)]:border-r-0"
              >
                <Image
                  src={`/images/bg-funnel-${funnelPics[i]}.jpg`}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 17vw, (min-width: 640px) 33vw, 100vw"
                  quality={85}
                  priority={false}
                  aria-hidden
                  className="pointer-events-none object-cover object-right transition-transform duration-700 ease-soft group-hover:scale-110"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/90 via-white/30 to-transparent" />
                <span className="relative">
                  <span className="block font-mono text-[11px] text-slate transition-colors group-hover:text-accent">0{i + 1}</span>
                  <span className="mt-6 block text-lg font-semibold tracking-tight">{f}</span>
                </span>
                <span aria-hidden className="relative text-accentdeep lg:hidden">
                  ↓
                </span>
              </li>
            ))}
          </ol>
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:gap-16">
          <ul className="grid content-start lg:col-span-5">
            {offers.map((o, i) => (
              <li key={o.t}>
                <Reveal delay={i * 50}>
                  <div className="group border-t border-ink/15 py-4 transition-all duration-300 ease-soft last:border-b hover:pl-3">
                    <p className="text-lg font-semibold tracking-tight">{o.t}</p>
                    <p className="mt-0.5 text-[15px] text-graphite">{o.d}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>

          <Reveal delay={150} className="lg:col-span-7">
            {/* Swap CampaignBoard for your real campaign creatives when ready */}
            <CampaignBoard />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
