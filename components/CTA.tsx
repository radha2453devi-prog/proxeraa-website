import { MaskHeading, Reveal } from "./ui";

export default function CTA() {
  return (
    <section id="contact" className="px-3 py-6 sm:px-5 md:py-10" aria-label="Talk to Proxeraa">
      <div className="mx-auto max-w-[1312px] rounded-[2rem] bg-ink px-5 py-16 text-bone sm:rounded-[3rem] sm:px-10 lg:px-16 lg:py-24">
        <Reveal>
          <p className="eyebrow mb-8 text-accentlight">
            Let's talk
          </p>
        </Reveal>
        <MaskHeading
          lines={["Got something you want", "to *automate, build or grow?*"]}
          className="h-xl"
        />
        <div className="mt-12 grid gap-10 border-t border-bone/15 pt-10 lg:grid-cols-12">
          <Reveal delay={200} className="lg:col-span-6">
            <p className="max-w-md text-xl leading-snug text-mute">
              Tell us where things are today. If we can help, we'll explain how. If we can't, we'll say that too.
            </p>
          </Reveal>
          <Reveal delay={300} className="flex lg:col-span-6 lg:justify-end">
            {/* data-open-contact opens the booking modal (components/ContactModal.tsx) */}
            <a href="mailto:hello@proxeraa.com" data-open-contact className="btn-accent">
              Talk to Proxeraa
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
