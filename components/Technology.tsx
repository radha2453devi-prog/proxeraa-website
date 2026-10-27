import { Reveal, SectionHead } from "./ui";

// "ab" is the monochrome badge shown beside each tool. Swap it for an official logo file if you like.
const groups = [
  {
    title: "Core Engineering",
    blurb: "The foundation for fast, secure web products.",
    tools: [
      { n: "Next.js", ab: "Nx" },
      { n: "React", ab: "Re" },
      { n: "TypeScript", ab: "TS" },
      { n: "Python (FastAPI)", ab: "Py" },
      { n: "Node.js", ab: "No" },
      { n: "PostgreSQL", ab: "Pg" },
    ],
  },
  {
    title: "AI & LLMs",
    blurb: "Models and retrieval that work on your own data.",
    tools: [
      { n: "OpenAI API", ab: "OA" },
      { n: "Anthropic Claude", ab: "Cl" },
      { n: "LangChain", ab: "LC" },
      { n: "Custom RAG", ab: "Rg" },
      { n: "Vector DBs (Pinecone/Supabase)", ab: "Vx" },
    ],
  },
  {
    title: "Automations & Cloud",
    blurb: "Workflows that run on their own, on reliable infrastructure.",
    tools: [
      { n: "n8n", ab: "n8" },
      { n: "Make", ab: "Mk" },
      { n: "Custom Webhooks", ab: "Wh" },
      { n: "AWS", ab: "Aw" },
      { n: "Vercel", ab: "Vc" },
      { n: "Docker", ab: "Dk" },
    ],
  },
];

export default function Technology() {
  return (
    <section id="technology" className="border-t border-neutral-200/60 bg-mist py-20 md:py-28" aria-label="Tech stack">
      <div className="container-x">
        <SectionHead
          eyebrow="Tech stack"
          lines={["Production-ready tools,", "picked for your workflow."]}
          intro="We choose what fits the problem, build it properly, and look after it. You don't need a tech team to use it."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-3 lg:gap-6">
          {groups.map((g, gi) => (
            <Reveal key={g.title} delay={gi * 100} className="h-full">
              <div className="h-full rounded-2xl border border-neutral-200/80 bg-white p-6 shadow-sm sm:p-7">
                <h3 className="text-xl font-semibold tracking-tight">{g.title}</h3>
                <p className="mt-1.5 text-sm text-slate">{g.blurb}</p>
                <ul className="mt-6 space-y-2.5">
                  {g.tools.map((t) => (
                    <li
                      key={t.n}
                      className="flex items-center gap-3 rounded-lg border border-neutral-200/80 bg-white px-3 py-2.5 text-[15px] font-medium transition-all duration-200 hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-md"
                    >
                      <span
                        aria-hidden
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-indigo-100 bg-indigo-50 font-mono text-[11px] font-semibold text-indigo-700"
                      >
                        {t.ab}
                      </span>
                      {t.n}
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
