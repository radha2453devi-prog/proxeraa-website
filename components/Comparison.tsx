import { Reveal, SectionHead } from "./ui";

const rows = [
  {
    c: "Speed to Kickoff",
    a: "4-8 weeks hiring drag",
    b: "2-3 weeks of pitching",
    p: "3-5 Days to Sprint 1",
  },
  {
    c: "Pricing & Overheads",
    a: "₹15L-₹30L+ salary, perks & benefits",
    b: "High markups & retainers",
    p: "Flat, transparent sprint pricing",
  },
  {
    c: "Tech Specialization",
    a: "Single skillset",
    b: "Outdated tech stacks",
    p: "Modern AI pipelines, Next.js & Automations",
  },
  {
    c: "Direct Communication",
    a: "Dependent on 1 person",
    b: "Layered account managers",
    p: "Direct access to the engineers building it",
  },
  {
    c: "Commitment Risk",
    a: "High severance & lock-in",
    b: "Long multi-month contracts",
    p: "Flexible sprint model; pause or scale anytime",
  },
];

export default function Comparison() {
  return (
    <section id="compare" className="border-t border-neutral-200/60 py-20 md:py-28" aria-label="Comparison">
      <div className="container-x">
        <SectionHead
          eyebrow="Why Proxeraa"
          lines={["Why choose Proxeraa over", "traditional hiring or legacy agencies?"]}
        />

        <Reveal className="mt-12">
          <div className="overflow-x-auto rounded-2xl border border-neutral-200/80 bg-white shadow-sm">
            <table className="w-full min-w-[780px] border-collapse text-left text-[15px]">
              <caption className="sr-only">
                Comparison of an in-house senior developer, a legacy agency and Proxeraa
              </caption>
              <thead>
                <tr className="border-b border-neutral-200/80">
                  <th scope="col" className="w-[19%] px-5 py-4 text-sm font-semibold text-slate">
                    Criteria
                  </th>
                  <th scope="col" className="w-[27%] px-5 py-4 text-sm font-semibold text-slate">
                    In-House Senior Dev
                  </th>
                  <th scope="col" className="w-[27%] px-5 py-4 text-sm font-semibold text-slate">
                    Legacy Agency
                  </th>
                  <th scope="col" className="w-[27%] bg-mist px-5 py-4 text-sm font-semibold text-accentdeep">
                    Proxeraa
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.c} className="border-t border-neutral-200/70 first:border-t-0">
                    <th scope="row" className="px-5 py-4 align-top font-semibold">
                      {r.c}
                    </th>
                    <td className="px-5 py-4 align-top text-graphite">{r.a}</td>
                    <td className="px-5 py-4 align-top text-graphite">{r.b}</td>
                    <td className="bg-mist px-5 py-4 align-top font-semibold text-ink">{r.p}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-slate">
            Typical figures for illustration. Actual timelines and costs vary by company and project.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
