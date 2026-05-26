import { Reveal } from "./Reveal";
import { useT, localizeDigits, type TKey } from "@/lib/i18n";
import { CalendarCheck, MessagesSquare, ClipboardList, HeartHandshake, type LucideIcon } from "lucide-react";

const STEP_ICONS: LucideIcon[] = [CalendarCheck, MessagesSquare, ClipboardList, HeartHandshake];

export function Experience() {
  const { t, lang } = useT();
  const steps = [1, 2, 3, 4].map((n, i) => ({
    n: localizeDigits(String(n).padStart(2, "0"), lang),
    t: t(`xp.${n}.t` as TKey),
    d: t(`xp.${n}.d` as TKey),
    Icon: STEP_ICONS[i],
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
            <Reveal as="li" key={s.n} delay={i * 0.08} className="group relative bg-background p-8 transition-colors hover:bg-card md:p-10">
              <div className="flex items-start justify-between">
                <p className="font-display text-4xl text-bronze">{s.n}</p>
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-bronze/30 bg-bronze/5 text-bronze transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
                  <s.Icon className="h-5 w-5" strokeWidth={1.5} />
                </div>
              </div>
              <p className="mt-6 font-display text-2xl">{s.t}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
              {i < steps.length - 1 && (
                <span aria-hidden className="absolute end-0 top-1/2 hidden h-px w-6 -translate-y-1/2 bg-gradient-to-r from-bronze/40 to-transparent md:block rtl:rotate-180" />
              )}
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

