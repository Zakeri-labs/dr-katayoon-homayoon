import { Reveal } from "./Reveal";

const steps = [
  { n: "01", t: "Listen", d: "A calm, unhurried conversation. We understand your story before suggesting anything clinical." },
  { n: "02", t: "Investigate", d: "Advanced diagnostics — endoscopy, colonoscopy, FibroScan, microbiome and metabolic panels — chosen with intent." },
  { n: "03", t: "Design", d: "A personalised, written plan in your language: English, Persian or Arabic." },
  { n: "04", t: "Accompany", d: "Ongoing care, follow-ups and direct messaging — so you never feel alone in the process." },
];

export function Experience() {
  return (
    <section className="relative px-5 py-32 md:py-44">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-20 max-w-3xl">
          <p className="mb-5 text-xs uppercase tracking-[0.3em] text-muted-foreground">The Experience</p>
          <h2 className="font-display text-[clamp(2rem,5vw,4rem)] leading-[1.05] text-balance">
            A patient journey designed like
            <span className="italic text-bronze"> a private atelier.</span>
          </h2>
        </Reveal>

        <ol className="grid gap-px overflow-hidden rounded-3xl bg-border md:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal as="li" key={s.n} delay={i * 0.08} className="bg-background p-8 md:p-10">
              <p className="font-display text-4xl text-bronze">{s.n}</p>
              <p className="mt-6 font-display text-2xl">{s.t}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
