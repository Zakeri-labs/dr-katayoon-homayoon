import { Reveal } from "./Reveal";

const conditions = [
  "Irritable Bowel Syndrome",
  "Fatty Liver Disease",
  "Hepatitis B & C",
  "Acid Reflux & GERD",
  "Colonoscopy",
  "Upper Endoscopy",
  "Crohn's Disease",
  "Ulcerative Colitis",
  "Food Intolerance",
  "Chronic Digestive Pain",
  "Preventive Screening",
  "Liver Elastography",
];

export function Expertise() {
  return (
    <section id="expertise" className="relative px-5 py-32 md:py-44">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-16 max-w-3xl">
          <p className="mb-5 text-xs uppercase tracking-[0.3em] text-muted-foreground">Expertise</p>
          <h2 className="font-display text-[clamp(2rem,5vw,4rem)] leading-[1.05] text-balance">
            Conditions cared for with
            <span className="italic text-bronze"> precision and patience.</span>
          </h2>
        </Reveal>

        <ul className="grid grid-cols-1 gap-px overflow-hidden rounded-3xl bg-border md:grid-cols-3">
          {conditions.map((c, i) => (
            <Reveal
              key={c}
              as="li"
              delay={(i % 3) * 0.06}
              className="group relative cursor-default bg-background p-8 transition-colors hover:bg-card"
            >
              <span className="absolute right-6 top-6 font-display text-xs text-muted-foreground">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="font-display text-2xl text-foreground">{c}</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Advanced diagnostics, modern treatment.
              </p>
              <span className="mt-6 inline-block h-px w-8 bg-bronze transition-all duration-500 group-hover:w-16" />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
