import { MaskHeading, Photo, Reveal } from "./ui";
import { HeroBoard } from "./visuals";

export default function Hero() {
  return (
    <section id="top" className="relative pt-32 sm:pt-36 lg:pt-44">
      <div className="container-x">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <p className="eyebrow text-slate">AI · Automation · Growth · Technology</p>
          </Reveal>

          <MaskHeading
            as="h1"
            delay={100}
            className="display mt-6 text-[clamp(3.4rem,9.5vw,8rem)]"
            lines={["Build. Automate.", "*Grow.*"]}
          />

          <Reveal delay={250}>
            <p className="mx-auto mt-8 max-w-xl text-xl leading-snug text-graphite sm:text-[22px]">
              Marketing, software and AI automation from one team, so you're not chasing three vendors who never talk to each other.
            </p>
          </Reveal>
          <Reveal delay={350} className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="#contact" data-open-contact className="btn-accent">
              Talk to Proxeraa
            </a>
            <a href="#services" className="btn-line">
              See what we do
            </a>
          </Reveal>
          <Reveal delay={450}>
            <p className="mt-6 text-sm text-slate">
              Tell us what's slowing you down. We'll tell you honestly whether we can help.
            </p>
          </Reveal>
        </div>

        <Reveal delay={400} className="mt-14 lg:mt-20">
          <HeroBoard />
        </Reveal>

        <Reveal delay={200} className="mt-6">
          <Photo
            src="/images/hero.jpg"
            alt="The Proxeraa team at work"
            label="ADD HERO PHOTO"
            hint="public/images/hero.jpg · 2400 × 1000"
            ratio="21/8"
          />
        </Reveal>
      </div>
    </section>
  );
}
