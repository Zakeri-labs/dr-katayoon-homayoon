import { Reveal } from "./Reveal";
import { useT, type TKey } from "@/lib/i18n";

export function Testimonials() {
  const { t } = useT();
  const items = [
    { k: "tst.1.q", a: "L. M., Dubai" },
    { k: "tst.2.q", a: "A. R., Abu Dhabi" },
    { k: "tst.3.q", a: "K. S., Tehran" },
  ];
  return (
    <section className="relative px-5 py-32 md:py-44">
      <div className="mx-auto max-w-5xl">
        <Reveal className="mb-20 max-w-2xl">
          <p className="mb-5 text-xs uppercase tracking-[0.3em] text-muted-foreground">{t("tst.kicker")}</p>
          <h2 className="font-display text-[clamp(2rem,5vw,4rem)] leading-[1.05] text-balance">
            {t("tst.title1")}
            <span className="italic text-bronze">{t("tst.title2")}</span>
          </h2>
        </Reveal>

        <div className="space-y-20">
          {items.map((it, i) => (
            <Reveal key={it.a} delay={i * 0.05}>
              <figure className="border-t border-border pt-10">
                <blockquote className="font-display text-[clamp(1.5rem,3vw,2.5rem)] leading-[1.2] text-balance text-foreground">
                  “{t(it.k as TKey)}”
                </blockquote>
                <figcaption className="mt-8 text-xs uppercase tracking-[0.3em] text-muted-foreground">{it.a}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
