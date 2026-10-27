import { Reveal } from "./ui";

/**
 * Replace the placeholders with real client logos.
 * If you don't have logos yet, remove this whole section from app/page.tsx.
 */
export default function TrustBar() {
  return (
    <section aria-labelledby="trust-h" className="py-20 lg:py-28">
      <div className="container-x">
        <div className="flex flex-col gap-8 border-y border-ink/15 py-10 lg:flex-row lg:items-center lg:gap-16">
          <Reveal className="lg:w-1/4">
            <h2 id="trust-h" className="text-2xl font-semibold leading-tight tracking-tight">
              Some of the businesses we work with
            </h2>
          </Reveal>
          <ul className="grid flex-1 grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <li key={i}>
                <Reveal delay={i * 60}>
                  <div
                    role="img"
                    aria-label="Client logo placeholder"
                    className="flex h-16 items-center justify-center border border-dashed border-ink/20 bg-mist"
                  >
                    <span className="eyebrow text-slate">Client logo</span>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
