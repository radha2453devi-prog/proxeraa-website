import { Reveal, SectionHead } from "./ui";

const rows = [
  {
    c: "Speed to Kickoff",
    inhouse: "4-8 weeks hiring drag",
    agency: "2-3 weeks of pitching",
    us: "3-5 Days to Sprint 1",
  },
  {
    c: "Pricing & Overheads",
    inhouse: "₹15L-₹30L+ salary, perks & benefits",
    agency: "High markups & retainers",
    us: "Flat, transparent sprint pricing",
  },
  {
    c: "Tech Specialization",
    inhouse: "Single skillset",
    agency: "Outdated tech stacks",
    us: "Modern AI pipelines, Next.js & Automations",
  },
  {
    c: "Direct Communication",
    inhouse: "Dependent on 1 person",
    agency: "Layered account managers",
    us: "Direct access to the engineers building it",
  },
  {
    c: "Commitment Risk",
    inhouse: "High severance & lock-in",
    agency: "Long multi-month contracts",
    us: "Flexible sprint model; pause or scale anytime",
  },
];

export default function ComparisonTable() {
  return (
    <section id="compare" className="border-t border-neutral-200/60 bg-white py-20 md:py-28" aria-label="Comparison">
      <div className="container-x">
        <SectionHead
          eyebrow="Compare"
          lines={["Why choose Proxeraa over", "traditional hiring or", "legacy agencies?"]}
        />

        <Reveal className="mt-12">
          <p className="mb-3 text-xs text-slate md:hidden">Scroll sideways to compare.</p>
          <div className="overflow-hidden rounded-2xl border border-neutral-200/80 bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[760px] border-collapse text-left text-[15px]">
                <caption className="sr-only">
                  Comparison of an in-house senior developer, a legacy agency and Proxeraa
                </caption>
                <thead>
                  <tr className="text-sm">
                    <th scope="col" className="w-[19%] px-5 py-4 font-semibold text-slate">
                      Criteria
                    </th>
                    <th scope="col" className="w-[24%] px-5 py-4 font-semibold text-slate">
                      In-House Senior Dev
                    </th>
                    <th scope="col" className="w-[24%] px-5 py-4 font-semibold text-slate">
                      Legacy Agency
                    </th>
                    <th scope="col" className="w-[33%] bg-mist px-5 py-4 font-semibold text-accentdeep">
                      Proxeraa
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r) => (
                    <tr key={r.c} className="border-t border-neutral-200/80">
                      <th scope="row" className="px-5 py-5 align-top font-semibold">
                        {r.c}
                      </th>
                      <td className="px-5 py-5 align-top text-graphite">{r.inhouse}</td>
                      <td className="px-5 py-5 align-top text-graphite">{r.agency}</td>
                      <td className="bg-mist px-5 py-5 align-top font-semibold text-ink">{r.us}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
