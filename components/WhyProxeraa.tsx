import { Photo, Reveal, SectionHead } from "./ui";
import FounderNote from "./FounderNote";

const reasons = [
  { t: "We start with your goal, not our service list", d: "If all you need is a better follow-up process, we'll say so." },
  { t: "AI where it helps, people where it matters", d: "We automate the dull parts and keep a human on the important ones." },
  { t: "Marketing and tech in the same room", d: "The people running your ads talk to the people building your site." },
  { t: "Built around you", d: "Custom work, not a template with your logo on it." },
  { t: "Numbers you can read", d: "Reports in plain language, tied to what you're actually trying to do." },
  { t: "We stick around", d: "Support, fixes and improvements continue long after launch." },
];

export default function WhyProxeraa() {
  return (
    <section id="why" className="border-t border-neutral-200/60 bg-mist py-20 md:py-28" aria-label="Why work with us">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHead
              eyebrow="Working with us"
              lines={["One team instead", "of three vendors."]}
              intro="You'll talk to the people actually doing the work. No account managers playing telephone."
            />
            <Reveal delay={200} className="mt-10">
              <Photo src="/images/team.jpg" alt="The Proxeraa team" label="ADD TEAM PHOTO" hint="public/images/team.jpg" ratio="4/3" />
            </Reveal>
          </div>

          <ul className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
            {reasons.map((r, i) => (
              <li key={r.t} className="rounded-2xl border border-neutral-200/80 bg-white shadow-sm transition-all duration-200 hover:shadow-md">
                <Reveal delay={i * 60} className="h-full">
                  <div className="flex h-full min-h-[210px] flex-col justify-between p-6">
                    <span className="font-mono text-xs text-accentdeep">
                      0{i + 1}
                    </span>
                    <div>
                      <h3 className="text-xl font-semibold leading-tight tracking-tight">{r.t}</h3>
                      <p className="mt-3 text-[15px] leading-relaxed text-graphite">
                        {r.d}
                      </p>
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>

        <FounderNote />
      </div>
    </section>
  );
}
