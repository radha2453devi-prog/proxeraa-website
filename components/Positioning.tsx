import Image from "next/image";
import { Bot, Code2, Gauge, TrendingUp, type LucideIcon } from "lucide-react";
import { MaskHeading, Reveal } from "./ui";

const pics = ["grow", "automate", "build", "optimize"];
const icons: LucideIcon[] = [TrendingUp, Bot, Code2, Gauge];

const blocks = [
  { n: "01", t: "Grow", d: "Get in front of the right people, and give them a reason to reply." },
  { n: "02", t: "Automate", d: "Hand the repetitive work to software so your team can do the real work." },
  { n: "03", t: "Build", d: "Websites, apps and tools made around how you actually run things." },
  { n: "04", t: "Optimize", d: "Look at the numbers, see what's working, and do more of it." },
];

const stack = ["Marketing", "AI", "Automation", "Software", "Data"];

export default function Positioning() {
  return (
    <section id="about" className="px-3 py-6 sm:px-5 md:py-10" aria-label="How we are different">
      <div className="mx-auto max-w-[1312px] rounded-[2rem] bg-forest px-5 py-16 text-bone sm:rounded-[3rem] sm:px-10 md:py-24 lg:px-16">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <Reveal>
              <p className="eyebrow mb-6 text-leaf">Why Proxeraa</p>
            </Reveal>
            <MaskHeading
              as="h2"
              lines={["Most businesses don't need", "*another agency.*"]}
              className="h-xl"
            />
          </div>
          <Reveal delay={200} className="lg:col-span-4 lg:pt-14">
            <p className="text-xl leading-snug text-mute">
              They need someone who looks at the whole picture: the ads, the website, the follow-up and the numbers behind it all.
            </p>
          </Reveal>
        </div>

        <Reveal className="mt-14 flex flex-wrap items-center gap-x-3 gap-y-2 border-y border-bone/15 py-5 text-[12px] font-medium uppercase tracking-[0.14em] text-mute sm:text-[13px]">
          {stack.map((s, i) => (
            <span key={s} className="flex items-center gap-3">
              <span className="text-bone">{s}</span>
              {i < stack.length - 1 && <span className="text-leaf">+</span>}
            </span>
          ))}
          <span className="ml-auto hidden text-leaf sm:inline">working as one</span>
        </Reveal>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {blocks.map((b, i) => {
            const Icon = icons[i];
            return (
              <li
                key={b.t}
                className="group relative overflow-hidden rounded-3xl bg-bone text-ink transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <Image
                  src={`/images/bg-card-${pics[i]}.jpg`}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  quality={85}
                  priority={false}
                  aria-hidden
                  className="pointer-events-none object-cover transition-transform duration-700 ease-soft group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bone/95 via-bone/50 to-transparent" />
                <Reveal delay={i * 80} className="relative h-full">
                  <div className="flex h-full min-h-[260px] flex-col justify-between p-6 lg:min-h-[330px]">
                    <span className="flex items-center gap-2 font-mono text-xs text-slate">
                      <Icon className="h-4 w-4 text-accent" aria-hidden />
                      {b.n}
                    </span>
                    <div>
                      <h3 className="font-serif text-5xl tracking-tight">{b.t}</h3>
                      <p className="mt-3 max-w-[26ch] text-graphite">{b.d}</p>
                    </div>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
