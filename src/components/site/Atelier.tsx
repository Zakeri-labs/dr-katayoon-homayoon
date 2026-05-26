import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Reveal } from "./Reveal";
import { useT, localizeDigits } from "@/lib/i18n";
import consultation from "@/assets/dr-consultation.jpg";
import reviewing from "@/assets/dr-reviewing.jpg";
import clinic from "@/assets/dr-clinic.jpg";

const COPY = {
  kicker: {
    en: "In Practice",
    fa: "در عمل",
    ar: "في الممارسة",
  },
  title1: {
    en: "Quiet rooms,",
    fa: "اتاق‌های آرام،",
    ar: "غرف هادئة،",
  },
  title2: {
    en: " careful hands.",
    fa: " دستان دقیق.",
    ar: " أيدٍ دقيقة.",
  },
  intro: {
    en: "A glimpse of the practice — unhurried consultations, considered diagnostics and an environment designed for clarity.",
    fa: "نگاهی به مطب — مشاوره‌های بدون شتاب، تشخیص‌های دقیق و فضایی برای آرامش و وضوح.",
    ar: "لمحة عن العيادة — استشارات بلا عجلة، تشخيصات مدروسة وبيئة مصممة للوضوح.",
  },
  c1: {
    en: "Listening first",
    fa: "ابتدا گوش دادن",
    ar: "الإصغاء أولاً",
  },
  c2: {
    en: "Precision diagnostics",
    fa: "تشخیص دقیق",
    ar: "تشخيص دقيق",
  },
  c3: {
    en: "Calm environment",
    fa: "محیط آرام",
    ar: "بيئة هادئة",
  },
  m1: { en: "Consultation", fa: "مشاوره", ar: "الاستشارة" },
  m2: { en: "Diagnostics", fa: "تشخیص", ar: "التشخيص" },
  m3: { en: "The Clinic", fa: "مطب", ar: "العيادة" },
  stat1k: { en: "Years", fa: "سال", ar: "سنوات" },
  stat1v: { en: "20+", fa: "+۲۰", ar: "+٢٠" },
  stat2k: { en: "Patients", fa: "بیمار", ar: "مريض" },
  stat2v: { en: "12k", fa: "۱۲هزار", ar: "١٢ألف" },
  stat3k: { en: "Languages", fa: "زبان", ar: "لغات" },
  stat3v: { en: "EN · FA · AR", fa: "EN · FA · AR", ar: "EN · FA · AR" },
} as const;

export function Atelier() {
  const { lang } = useT();
  const tt = (k: keyof typeof COPY) => COPY[k][lang];
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const yA = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const yB = useTransform(scrollYProgress, [0, 1], [-40, 40]);
  const yC = useTransform(scrollYProgress, [0, 1], [40, -40]);

  const stats: Array<{ k: keyof typeof COPY; v: keyof typeof COPY }> = [
    { k: "stat1k", v: "stat1v" },
    { k: "stat2k", v: "stat2v" },
    { k: "stat3k", v: "stat3v" },
  ];

  return (
    <section ref={ref} className="relative overflow-hidden px-5 py-32 md:py-44">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-16 grid gap-6 md:grid-cols-[1.2fr_1fr] md:items-end">
          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.3em] text-muted-foreground">{tt("kicker")}</p>
            <h2 className="font-display text-[clamp(2rem,5vw,4rem)] leading-[1.05] text-balance">
              {tt("title1")}
              <span className="italic text-bronze">{tt("title2")}</span>
            </h2>
          </div>
          <p className="text-pretty text-sm leading-relaxed text-muted-foreground md:text-base">{tt("intro")}</p>
        </Reveal>

        <div className="grid grid-cols-12 gap-4 md:gap-6">
          {/* Left tall — consultation */}
          <Reveal className="col-span-12 md:col-span-7">
            <motion.figure
              style={{ y: yA }}
              className="group relative aspect-[4/3] overflow-hidden rounded-3xl bg-champagne shadow-luxe"
            >
              <img
                src={consultation}
                alt={tt("m1")}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
              <figcaption className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-ivory">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-gold">{localizeDigits("01", lang)}</p>
                  <p className="mt-2 font-display text-2xl md:text-3xl">{tt("m1")}</p>
                </div>
                <span className="hidden text-xs uppercase tracking-[0.25em] text-ivory/70 md:block">
                  {tt("c1")}
                </span>
              </figcaption>
            </motion.figure>
          </Reveal>

          {/* Right column — diagnostics + stats */}
          <div className="col-span-12 grid gap-4 md:col-span-5 md:gap-6">
            <Reveal delay={0.1}>
              <motion.figure
                style={{ y: yB }}
                className="group relative aspect-[3/4] overflow-hidden rounded-3xl bg-dark shadow-luxe"
              >
                <img
                  src={reviewing}
                  alt={tt("m2")}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/65 via-transparent to-transparent" />
                <figcaption className="absolute bottom-5 left-5 right-5 text-ivory">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-gold">{localizeDigits("02", lang)}</p>
                  <p className="mt-2 font-display text-xl md:text-2xl">{tt("m2")}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.25em] text-ivory/70">{tt("c2")}</p>
                </figcaption>
              </motion.figure>
            </Reveal>
          </div>

          {/* Bottom wide — clinic */}
          <Reveal className="col-span-12 md:col-span-8 md:col-start-3">
            <motion.figure
              style={{ y: yC }}
              className="group relative aspect-[16/9] overflow-hidden rounded-3xl bg-champagne shadow-luxe"
            >
              <img
                src={clinic}
                alt={tt("m3")}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent" />
              <figcaption className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-ivory">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-gold">{localizeDigits("03", lang)}</p>
                  <p className="mt-2 font-display text-2xl md:text-3xl">{tt("m3")}</p>
                </div>
                <span className="hidden text-xs uppercase tracking-[0.25em] text-ivory/70 md:block">{tt("c3")}</span>
              </figcaption>
            </motion.figure>
          </Reveal>
        </div>

        {/* Stat strip */}
        <Reveal delay={0.15}>
          <div className="mt-16 grid grid-cols-3 gap-px overflow-hidden rounded-2xl bg-border">
            {stats.map((s, i) => (
              <div key={i} className="bg-background p-6 md:p-8">
                <p className="font-display text-3xl text-foreground md:text-4xl">{tt(s.v)}</p>
                <p className="mt-2 text-[10px] uppercase tracking-[0.25em] text-muted-foreground md:text-xs">
                  {tt(s.k)}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
