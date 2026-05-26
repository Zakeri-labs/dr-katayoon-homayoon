import { Reveal } from "./Reveal";
import { useT, type TKey } from "@/lib/i18n";
import { Quote, Star } from "lucide-react";

export function Testimonials() {
  const { t } = useT();
  const items = [
    { k: "tst.1.q", a: "L. M.", city: "Dubai" },
    { k: "tst.2.q", a: "A. R.", city: "Abu Dhabi" },
    { k: "tst.3.q", a: "K. S.", city: "Tehran" },
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

        <div className="space-y-12">
          {items.map((it, i) => (
            <Reveal key={it.a} delay={i * 0.05}>
              <figure className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-luxe md:p-12">
                <Quote
                  aria-hidden
                  className="absolute -end-2 -top-2 h-24 w-24 text-bronze/10 md:h-32 md:w-32"
                  strokeWidth={1}
                />
                <div className="relative">
                  <div className="mb-6 flex items-center gap-1 text-bronze">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} className="h-4 w-4 fill-current" strokeWidth={0} />
                    ))}
                  </div>
                  <blockquote className="font-display text-[clamp(1.25rem,2.4vw,2rem)] leading-[1.25] text-balance text-foreground">
                    “{t(it.k as TKey)}”
                  </blockquote>
                  <figcaption className="mt-8 flex items-center gap-4">
                    <span
                      aria-hidden
                      className="grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-bronze/30 to-bronze/10 font-display text-base text-bronze"
                    >
                      {it.a.split(" ").map((p) => p[0]).join("")}
                    </span>
                    <span>
                      <span className="block font-display text-base text-foreground">{it.a}</span>
                      <span className="block text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
                        {it.city}
                      </span>
                    </span>
                  </figcaption>
                </div>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

