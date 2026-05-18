import { Reveal } from "./Reveal";

const programs = [
  {
    tag: "Signature",
    name: "Executive Gut Health",
    price: "From AED 4,800 / quarter",
    desc: "A concierge digestive optimisation program with quarterly monitoring, advanced screenings, nutrition design and direct access to Dr. Katayoon.",
    points: ["Quarterly diagnostic review", "Personalised nutrition plan", "Preventive liver assessment", "VIP consultations"],
  },
  {
    tag: "Reset",
    name: "Gut Reset Program",
    price: "From AED 2,200",
    desc: "Designed for chronic bloating, IBS and food intolerance — a structured 6-week reset with clear, measurable outcomes.",
    points: ["IBS subtype assessment", "Microbiome guidance", "Nutrition review", "Follow-up plan"],
  },
  {
    tag: "Wellness",
    name: "Liver Wellness Program",
    price: "From AED 2,800",
    desc: "Modern hepatology care with FibroScan elastography and metabolic screening — early clarity for long-term liver health.",
    points: ["FibroScan elastography", "Fatty liver evaluation", "Metabolic screening", "Lifestyle optimisation"],
  },
  {
    tag: "Longevity",
    name: "Executive Screening",
    price: "From AED 5,500",
    desc: "Preventive endoscopy and colonoscopy under one calm, premium experience — designed around your schedule.",
    points: ["Upper endoscopy", "Colonoscopy", "Preventive diagnostics", "Advanced consultation"],
  },
];

export function Programs() {
  return (
    <section id="programs" className="relative px-5 py-32 md:py-44">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="mb-5 text-xs uppercase tracking-[0.3em] text-muted-foreground">Programs</p>
            <h2 className="font-display text-[clamp(2rem,5vw,4rem)] leading-[1.05] text-balance">
              Membership-grade care,
              <span className="italic text-bronze"> built around your life.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground">
            Four signature programs designed for executives, founders and
            wellness-conscious individuals across the GCC.
          </p>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          {programs.map((p, i) => (
            <Reveal key={p.name} delay={(i % 2) * 0.1}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-luxe transition-transform hover:-translate-y-1 md:p-10">
                <div className="mb-8 flex items-center justify-between">
                  <span className="rounded-full border border-bronze/40 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-bronze">
                    {p.tag}
                  </span>
                  <span className="text-xs text-muted-foreground">{p.price}</span>
                </div>
                <h3 className="font-display text-3xl text-foreground md:text-4xl">{p.name}</h3>
                <p className="mt-4 text-pretty text-muted-foreground">{p.desc}</p>
                <ul className="mt-8 space-y-2.5">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-3 text-sm">
                      <span className="mt-2 h-1 w-1 rounded-full bg-bronze" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#booking"
                  className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-foreground"
                >
                  Enquire
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
