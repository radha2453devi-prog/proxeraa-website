import { Reveal, SectionHead } from "./ui";

/**
 * Names only, no logos: brand logos need to be sourced from each vendor's own
 * press kit. Drop them in later if you want them.
 */
const groups = [
  {
    title: "Core Engineering",
    icon: (
      <path d="M8 7 3 12l5 5M16 7l5 5-5 5M14 4l-4 16" strokeLinecap="round" strokeLinejoin="round" />
    ),
    items: ["Next.js", "React", "TypeScript", "Python (FastAPI)", "Node.js", "PostgreSQL"],
  },
  {
    title: "AI & LLMs",
    icon: (
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18" strokeLinecap="round" />
    ),
    items: ["OpenAI API", "Anthropic Claude", "LangChain", "Custom RAG", "Vector DBs (Pinecone/Supabase)"],
  },
  {
    title: "Automations & Cloud",
    icon: (
      <path d="M7 16a4 4 0 0 1-.5-7.97A5.5 5.5 0 0 1 17 9a3.5 3.5 0 0 1 .5 7H7Z" strokeLinecap="round" strokeLinejoin="round" />
    ),
    items: ["n8n", "Make", "Custom Webhooks", "AWS", "Vercel", "Docker"],
  },
];

export default function TechStack() {
  return (
    <section id="technology" className="border-t border-neutral-200/60 bg-mist py-20 md:py-28" aria-label="Tech stack and integrations">
      <div className="container-x">
        <SectionHead
          eyebrow="Tech stack & integrations"
          lines={["Production ready tools,", "chosen for your workflow."]}
          intro="This is what we ship with. We pick what fits your problem, not what's fashionable."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {groups.map((g, i) => (
            <Reveal key={g.title} delay={i * 90} className="h-full">
              <div className="h-full rounded-2xl border border-neutral-200/80 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-line bg-mist text-accentdeep">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
                      {g.icon}
                    </svg>
                  </span>
                  <h3 className="text-lg font-semibold tracking-tight">{g.title}</h3>
                </div>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {g.items.map((it) => (
                    <li
                      key={it}
                      className="rounded-lg border border-neutral-200 bg-paper px-3 py-1.5 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:text-accentdeep"
                    >
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
