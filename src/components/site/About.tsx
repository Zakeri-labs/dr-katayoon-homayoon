import { Reveal } from "./Reveal";
import { useT } from "@/lib/i18n";
import portrait from "@/assets/dr-katayoon-portrait.jpg";

export function About() {
  const { t } = useT();
  const facts = [
    { k: t("about.f1k"), v: t("about.f1v") },
    { k: t("about.f2k"), v: t("about.f2v") },
    { k: t("about.f3k"), v: t("about.f3v") },
    { k: t("about.f4k"), v: t("about.f4v") },
  ];
  return (
    <section id="about" className="relative px-5 py-32 md:py-44">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-16 max-w-3xl" as="div">
          <p className="mb-5 text-xs uppercase tracking-[0.3em] text-muted-foreground">{t("about.kicker")}</p>
          <h2 className="font-display text-[clamp(2rem,5vw,4rem)] leading-[1.05] text-balance">
            {t("about.title1")}
            <span className="italic text-bronze">{t("about.title2")}</span>
          </h2>
        </Reveal>

        <div className="grid gap-16 md:grid-cols-[1.1fr_1fr] md:gap-20">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-champagne shadow-luxe">
              <img
                src={portrait}
                alt="Dr. Katayoon Homayoon"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-ivory">
                <div>
                  <p className="font-display text-2xl">Dr. Katayoon</p>
                  <p className="text-xs uppercase tracking-[0.25em] text-gold">Homayoon, MD</p>
                </div>
                <span className="h-2 w-2 rounded-full bg-gold" />
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <p className="text-pretty text-lg leading-relaxed text-muted-foreground">{t("about.p1")}</p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">{t("about.p2")}</p>
            </Reveal>

            <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-border">
              {facts.map((f, i) => (
                <Reveal key={i} delay={i * 0.08} className="bg-background p-6">
                  <p className="font-display text-3xl text-foreground">{f.k}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">{f.v}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
