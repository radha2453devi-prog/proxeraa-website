import Image from "next/image";
import { Reveal, SectionHead } from "./ui";

/**
 * Add REAL testimonials here, with the client's permission.
 * Example:
 *   { quote: "Your client's own words.", name: "Client name", role: "Founder", company: "Company", photo: "/images/client-1.jpg" }
 * "photo" is optional. Without it, the card shows the person's initials.
 * While this list is empty the section stays hidden, so the site never shows
 * an invented quote. Cards pick up terracotta, sage and violet in turn.
 */
type Testimonial = { quote: string; name: string; role: string; company: string; photo?: string };
const testimonials: Testimonial[] = [];

const tones = [
  "bg-terracotta text-ink",
  "bg-sage text-ink",
  "bg-lilac text-ink",
  "bg-forest text-paper",
];
// Asymmetric rhythm on large screens: wide, narrow, narrow, wide, ...
const spans = ["lg:col-span-7", "lg:col-span-5", "lg:col-span-5", "lg:col-span-7"];

export default function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <section id="testimonials" className="py-20 md:py-28" aria-label="Client quotes">
      <div className="container-x">
        <SectionHead eyebrow="What clients say" lines={["Kind words from", "*people we work with.*"]} />
        <div className="mt-14 grid gap-4 lg:grid-cols-12">
          {testimonials.map((t, i) => {
            const initials = t.name
              .split(" ")
              .map((p) => p[0])
              .slice(0, 2)
              .join("");
            return (
              <Reveal key={i} delay={i * 80} className={spans[i % spans.length]}>
                <figure className={`flex h-full flex-col justify-between gap-10 rounded-[2rem] p-7 sm:p-10 ${tones[i % tones.length]}`}>
                  <blockquote className="font-serif text-2xl leading-snug sm:text-3xl">“{t.quote}”</blockquote>
                  <figcaption className="flex items-center gap-4 text-sm">
                    <span className="relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white/60 font-semibold">
                      {t.photo ? <Image src={t.photo} alt={t.name} fill sizes="56px" className="object-cover" /> : initials}
                    </span>
                    <span>
                      <span className="block font-semibold">{t.name}</span>
                      <span className="block opacity-70">
                        {t.role}, {t.company}
                      </span>
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
