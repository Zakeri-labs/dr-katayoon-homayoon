import { Reveal } from "./Reveal";

const facts = [
  { k: "11+", v: "Years gastroenterology" },
  { k: "16+", v: "Years internal medicine" },
  { k: "3", v: "Languages — EN · FA · AR" },
  { k: "Dubai", v: "London Hospital affiliation" },
];

export function About() {
  return (
    <section id="about" className="relative px-5 py-32 md:py-44">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-16 max-w-3xl" as="div">
          <p className="mb-5 text-xs uppercase tracking-[0.3em] text-muted-foreground">About</p>
          <h2 className="font-display text-[clamp(2rem,5vw,4rem)] leading-[1.05] text-balance">
            A specialist who treats the person,
            <span className="italic text-bronze"> not just the diagnosis.</span>
          </h2>
        </Reveal>

        <div className="grid gap-16 md:grid-cols-[1.1fr_1fr] md:gap-20">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-champagne shadow-luxe">
              {/* Editorial portrait stand-in built with SVG */}
              <svg viewBox="0 0 400 500" className="absolute inset-0 h-full w-full">
                <defs>
                  <radialGradient id="g1" cx="50%" cy="40%" r="70%">
                    <stop offset="0%" stopColor="oklch(0.96 0.04 80)" />
                    <stop offset="100%" stopColor="oklch(0.85 0.06 70)" />
                  </radialGradient>
                  <linearGradient id="g2" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="oklch(0.5 0.04 55)" stopOpacity="0" />
                    <stop offset="100%" stopColor="oklch(0.3 0.03 55)" stopOpacity="0.5" />
                  </linearGradient>
                </defs>
                <rect width="400" height="500" fill="url(#g1)" />
                <ellipse cx="200" cy="180" rx="78" ry="92" fill="oklch(0.78 0.05 60)" opacity="0.55" />
                <path d="M80 500 Q 200 280 320 500 Z" fill="oklch(0.92 0.03 70)" opacity="0.9" />
                <rect width="400" height="500" fill="url(#g2)" />
              </svg>
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div>
                  <p className="font-display text-2xl text-ink">Dr. Katayoon</p>
                  <p className="text-xs uppercase tracking-[0.25em] text-bronze">Homayoon, MD</p>
                </div>
                <span className="h-2 w-2 rounded-full bg-gold" />
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
                A specialist gastroenterologist and hepatologist trained at Shiraz
                University of Medical Sciences, Dr. Katayoon brings more than a
                decade of advanced digestive expertise to her practice at
                Dubai London Hospital — combining quiet precision with deeply
                human care.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
                Her work focuses on IBS, fatty liver, reflux, hepatitis,
                inflammatory bowel disease and preventive screening — supported
                by advanced endoscopy, colonoscopy and elastography.
              </p>
            </Reveal>

            <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-border">
              {facts.map((f, i) => (
                <Reveal key={f.v} delay={i * 0.08} className="bg-background p-6">
                  <p className="font-display text-3xl text-foreground">{f.k}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    {f.v}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
