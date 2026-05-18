import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useT } from "@/lib/i18n";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const yNeg = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const yMid = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const { t } = useT();

  return (
    <section ref={ref} id="top" className="relative isolate min-h-[100svh] overflow-hidden bg-hero grain">
      <motion.div style={{ y, scale }} aria-hidden className="pointer-events-none absolute -left-40 top-20 h-[60vh] w-[60vh] rounded-full opacity-70 blur-3xl">
        <motion.div className="h-full w-full rounded-full bg-gold" animate={{ x: [0, 80, -40, 0], y: [0, -60, 40, 0], scale: [1, 1.15, 0.95, 1] }} transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }} />
      </motion.div>
      <motion.div style={{ y: yNeg }} aria-hidden className="pointer-events-none absolute -right-32 bottom-0 h-[55vh] w-[55vh] rounded-full opacity-50 blur-3xl">
        <motion.div className="h-full w-full rounded-full" style={{ background: "oklch(0.88 0.06 60)" }} animate={{ x: [0, -70, 50, 0], y: [0, 50, -40, 0], scale: [1, 0.9, 1.1, 1] }} transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }} />
      </motion.div>
      <motion.div aria-hidden className="pointer-events-none absolute left-1/2 top-1/3 h-[40vh] w-[40vh] -translate-x-1/2 rounded-full opacity-40 blur-3xl">
        <motion.div className="h-full w-full rounded-full" style={{ background: "oklch(0.82 0.08 70)" }} animate={{ x: [0, 60, -60, 0], y: [0, -40, 60, 0], scale: [1, 1.2, 0.9, 1] }} transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }} />
      </motion.div>

      <motion.div style={{ opacity, y: yMid }} className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-5 pb-20 pt-40 md:pb-32">
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.9, ease: [0.22, 1, 0.36, 1] }} className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">
          <span className="h-px w-10 bg-bronze/60" />
          {t("hero.eyebrow")}
        </motion.p>

        <h1 className="font-display text-balance text-[clamp(2.75rem,8vw,7rem)] leading-[0.95] tracking-[-0.03em] text-foreground">
          <motion.span initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 1, ease: [0.22, 1, 0.36, 1] }} className="inline-block">
            {t("hero.title1")}
          </motion.span>
          <br />
          <motion.span initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 1, ease: [0.22, 1, 0.36, 1] }} className="inline-block italic text-bronze">
            {t("hero.title2")}
          </motion.span>
        </h1>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2, duration: 1, ease: [0.22, 1, 0.36, 1] }} className="mt-8 max-w-xl text-pretty text-base text-muted-foreground md:text-lg">
          {t("hero.body")}
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.4, duration: 1, ease: [0.22, 1, 0.36, 1] }} className="mt-10 flex flex-wrap gap-3">
          <a href="#booking" className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background transition-transform hover:scale-[1.02]">
            {t("nav.book")}
            <span className="transition-transform group-hover:translate-x-0.5 rtl:rotate-180">→</span>
          </a>
          <a href="https://wa.me/971000000000" className="inline-flex items-center gap-2 rounded-full border border-border bg-background/40 px-6 py-3.5 text-sm font-medium backdrop-blur transition-colors hover:bg-background">
            {t("hero.whatsapp")}
          </a>
        </motion.div>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8, duration: 1 }} className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
        {t("hero.scroll")}
      </motion.div>
    </section>
  );
}
