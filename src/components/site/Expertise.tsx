import { Reveal } from "./Reveal";
import { useT, type TKey } from "@/lib/i18n";

export function Expertise() {
  const { t } = useT();
  const keys: TKey[] = ["exp.c1","exp.c2","exp.c3","exp.c4","exp.c5","exp.c6","exp.c7","exp.c8","exp.c9","exp.c10","exp.c11","exp.c12"];
  return (
    <section id="expertise" className="relative px-5 py-32 md:py-44">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-16 max-w-3xl">
          <p className="mb-5 text-xs uppercase tracking-[0.3em] text-muted-foreground">{t("exp.kicker")}</p>
          <h2 className="font-display text-[clamp(2rem,5vw,4rem)] leading-[1.05] text-balance">
            {t("exp.title1")}
            <span className="italic text-bronze">{t("exp.title2")}</span>
          </h2>
        </Reveal>

        <ul className="grid grid-cols-1 gap-px overflow-hidden rounded-3xl bg-border md:grid-cols-3">
          {keys.map((k, i) => (
            <Reveal key={k} as="li" delay={(i % 3) * 0.06} className="group relative cursor-default bg-background p-8 transition-colors hover:bg-card">
              <span className="absolute end-6 top-6 font-display text-xs text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
              <p className="font-display text-2xl text-foreground">{t(k)}</p>
              <p className="mt-2 text-sm text-muted-foreground">{t("exp.note")}</p>
              <span className="mt-6 inline-block h-px w-8 bg-bronze transition-all duration-500 group-hover:w-16" />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
