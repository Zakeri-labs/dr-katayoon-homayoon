import { Reveal } from "./Reveal";
import { useT, type TKey } from "@/lib/i18n";

export function Insights() {
  const { t } = useT();
  const items = [
    { tag: "IBS", k: "ins.1.t", r: 5 },
    { tag: "Liver", k: "ins.2.t", r: 7 },
    { tag: "Women", k: "ins.3.t", r: 6 },
    { tag: "Prevention", k: "ins.4.t", r: 4 },
  ];
  return (
    <section id="insights" className="relative bg-card px-5 py-32 md:py-44">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="mb-5 text-xs uppercase tracking-[0.3em] text-muted-foreground">{t("ins.kicker")}</p>
            <h2 className="font-display text-[clamp(2rem,5vw,4rem)] leading-[1.05] text-balance">
              {t("ins.title1")}
              <span className="italic text-bronze">{t("ins.title2")}</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-px overflow-hidden rounded-3xl bg-border md:grid-cols-2">
          {items.map((i, idx) => (
            <Reveal key={i.k} delay={(idx % 2) * 0.08} className="group cursor-pointer bg-background p-8 transition-colors hover:bg-card md:p-12">
              <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                <span className="text-bronze">{i.tag}</span>
                <span>{i.r} {t("ins.min")}</span>
              </div>
              <h3 className="mt-8 font-display text-2xl leading-tight text-balance md:text-3xl">{t(i.k as TKey)}</h3>
              <span className="mt-8 inline-flex items-center gap-2 text-sm font-medium">
                {t("ins.read")}
                <span className="transition-transform group-hover:translate-x-1 rtl:rotate-180">→</span>
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
