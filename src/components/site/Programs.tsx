import { Reveal } from "./Reveal";
import { useT, type TKey } from "@/lib/i18n";

export function Programs() {
  const { t } = useT();
  const programs = [1, 2, 3, 4].map((n) => ({
    tag: t(`prog.${n}.tag` as TKey),
    name: t(`prog.${n}.name` as TKey),
    price: t(`prog.${n}.price` as TKey),
    desc: t(`prog.${n}.desc` as TKey),
    points: [t(`prog.${n}.p1` as TKey), t(`prog.${n}.p2` as TKey), t(`prog.${n}.p3` as TKey), t(`prog.${n}.p4` as TKey)],
  }));

  return (
    <section id="programs" className="relative px-5 py-32 md:py-44">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="mb-5 text-xs uppercase tracking-[0.3em] text-muted-foreground">{t("prog.kicker")}</p>
            <h2 className="font-display text-[clamp(2rem,5vw,4rem)] leading-[1.05] text-balance">
              {t("prog.title1")}
              <span className="italic text-bronze">{t("prog.title2")}</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground">{t("prog.intro")}</p>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          {programs.map((p, i) => (
            <Reveal key={p.name} delay={(i % 2) * 0.1}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-luxe transition-transform hover:-translate-y-1 md:p-10">
                <div className="mb-8 flex items-center justify-between">
                  <span className="rounded-full border border-bronze/40 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-bronze">{p.tag}</span>
                  <span className="text-xs text-muted-foreground">{p.price}</span>
                </div>
                <h3 className="font-display text-3xl text-foreground md:text-4xl">{p.name}</h3>
                <p className="mt-4 text-pretty text-muted-foreground">{p.desc}</p>
                <ul className="mt-8 space-y-2.5">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-3 text-sm">
                      <span className="mt-2 h-1 w-1 rounded-full bg-bronze" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
                <a href="#booking" className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-foreground">
                  {t("prog.enquire")}
                  <span className="transition-transform group-hover:translate-x-1 rtl:rotate-180">→</span>
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
