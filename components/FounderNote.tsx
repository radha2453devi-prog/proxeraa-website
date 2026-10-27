import { Reveal } from "./ui";

export default function FounderNote() {
  return (
    <Reveal className="mt-12">
      <figure className="rounded-2xl border border-neutral-200/80 border-l-4 border-l-accent bg-white p-6 shadow-sm sm:p-8">
        <blockquote className="text-xl font-medium leading-snug tracking-tight text-ink sm:text-2xl">
          We are builders and engineers, not account managers. When you hire Proxeraa, you talk directly with the people
          architecting your system and writing your code. No corporate layers, no bloated timelines.
        </blockquote>
        <figcaption className="mt-5 flex items-center gap-3 text-sm">
          <span className="font-semibold">The Proxeraa Engineering Team</span>
        </figcaption>
      </figure>
    </Reveal>
  );
}
