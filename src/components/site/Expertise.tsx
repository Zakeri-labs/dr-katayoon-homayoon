import { Reveal } from "./Reveal";
import { useT, localizeDigits, type TKey } from "@/lib/i18n";
import {
  Stethoscope,
  Activity,
  HeartPulse,
  Microscope,
  Pill,
  ShieldCheck,
  Sparkles,
  Salad,
  FlaskConical,
  ClipboardList,
  Syringe,
  Leaf,
  type LucideIcon,
} from "lucide-react";

const ITEMS: { k: TKey; Icon: LucideIcon }[] = [
  { k: "exp.c1", Icon: Stethoscope },
  { k: "exp.c2", Icon: Activity },
  { k: "exp.c3", Icon: HeartPulse },
  { k: "exp.c4", Icon: Microscope },
  { k: "exp.c5", Icon: FlaskConical },
  { k: "exp.c6", Icon: Pill },
  { k: "exp.c7", Icon: ShieldCheck },
  { k: "exp.c8", Icon: Syringe },
  { k: "exp.c9", Icon: ClipboardList },
  { k: "exp.c10", Icon: Salad },
  { k: "exp.c11", Icon: Leaf },
  { k: "exp.c12", Icon: Sparkles },
];

export function Expertise() {
  const { t, lang } = useT();
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
          {ITEMS.map(({ k, Icon }, i) => (
            <Reveal key={k} as="li" delay={(i % 3) * 0.06} className="group relative cursor-default bg-background p-8 transition-colors hover:bg-card">
              <span className="absolute end-6 top-6 font-display text-xs text-muted-foreground">{localizeDigits(String(i + 1).padStart(2, "0"), lang)}</span>
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-bronze/30 bg-bronze/5 text-bronze transition-all duration-500 group-hover:scale-110 group-hover:bg-bronze/10">
                <Icon className="h-5 w-5" strokeWidth={1.5} />
              </div>
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

