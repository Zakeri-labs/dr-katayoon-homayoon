import { Reveal } from "./Reveal";
import { useT, localizeDigits, type TKey } from "@/lib/i18n";

export function Experience() {
  const { t, lang } = useT();
  const steps = [1, 2, 3, 4].map((n) => ({
    n: localizeDigits(String(n).padStart(2, "0"), lang),
    t: t(`xp.${n}.t` as TKey),
    d: t(`xp.${n}.d` as TKey),
  }));
  return (
    <section className="relative px-5 py-32 md:py-44">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-20 max-w-3xl">
          <p className="mb-5 text-xs uppercase tracking-[0.3em] text-muted-foreground">{t("xp.kicker")}</p>
          <h2 className="font-display text-[clamp(2rem,5vw,4rem)] leading-[1.05] text-balance">
            {t("xp.title1")}
            <span className="italic text-bronze">{t("xp.title2")}</span>
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
