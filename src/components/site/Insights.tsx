import { Reveal } from "./Reveal";

const insights = [
  { tag: "IBS", t: "The five myths about IBS that delay healing", r: "5 min read" },
  { tag: "Liver", t: "Why fatty liver is the silent epidemic of Dubai's executives", r: "7 min read" },
  { tag: "Women", t: "Menopause, hormones and the gut — what changes after 45", r: "6 min read" },
  { tag: "Prevention", t: "Colon cancer screening: the modern, painless reality", r: "4 min read" },
];

export function Insights() {
  return (
    <section id="insights" className="relative bg-card px-5 py-32 md:py-44">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="mb-5 text-xs uppercase tracking-[0.3em] text-muted-foreground">Health Insights</p>
            <h2 className="font-display text-[clamp(2rem,5vw,4rem)] leading-[1.05] text-balance">
              Quiet wisdom, written
              <span className="italic text-bronze"> with care.</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-px overflow-hidden rounded-3xl bg-border md:grid-cols-2">
          {insights.map((i, idx) => (
            <Reveal
              key={i.t}
              delay={(idx % 2) * 0.08}
              className="group cursor-pointer bg-background p-8 transition-colors hover:bg-card md:p-12"
            >
              <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                <span className="text-bronze">{i.tag}</span>
                <span>{i.r}</span>
              </div>
              <h3 className="mt-8 font-display text-2xl leading-tight text-balance md:text-3xl">
                {i.t}
              </h3>
              <span className="mt-8 inline-flex items-center gap-2 text-sm font-medium">
                Read
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
