import { Reveal } from "./Reveal";

const items = [
  {
    q: "For the first time in years I felt heard. Dr. Katayoon explained my IBS with a clarity no one ever offered me.",
    a: "L. M., Dubai",
  },
  {
    q: "Quiet, precise and deeply human. The entire experience felt closer to a private wellness atelier than a clinic.",
    a: "A. R., Abu Dhabi",
  },
  {
    q: "She caught my fatty liver early. Two years later my numbers are perfect. I am genuinely grateful.",
    a: "K. S., Tehran",
  },
];

export function Testimonials() {
  return (
    <section className="relative px-5 py-32 md:py-44">
      <div className="mx-auto max-w-5xl">
        <Reveal className="mb-20 max-w-2xl">
          <p className="mb-5 text-xs uppercase tracking-[0.3em] text-muted-foreground">In Their Words</p>
          <h2 className="font-display text-[clamp(2rem,5vw,4rem)] leading-[1.05] text-balance">
            Care that quietly
            <span className="italic text-bronze"> changes lives.</span>
          </h2>
        </Reveal>

        <div className="space-y-20">
          {items.map((t, i) => (
            <Reveal key={t.a} delay={i * 0.05}>
              <figure className="border-t border-border pt-10">
                <blockquote className="font-display text-[clamp(1.5rem,3vw,2.5rem)] leading-[1.2] text-balance text-foreground">
                  “{t.q}”
                </blockquote>
                <figcaption className="mt-8 text-xs uppercase tracking-[0.3em] text-muted-foreground">
                  {t.a}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
