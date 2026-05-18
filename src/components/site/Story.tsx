import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Reveal } from "./Reveal";

function LiverGlow() {
  return (
    <svg viewBox="0 0 600 600" className="h-full w-full">
      <defs>
        <radialGradient id="liver" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="oklch(0.92 0.12 75)" />
          <stop offset="60%" stopColor="oklch(0.75 0.14 60)" stopOpacity="0.7" />
          <stop offset="100%" stopColor="oklch(0.5 0.08 50)" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="300" cy="300" r="240" fill="url(#liver)" />
      <path
        d="M180 280 C 200 200, 320 180, 400 220 C 460 250, 470 360, 400 400 C 320 440, 220 420, 190 360 Z"
        fill="oklch(0.78 0.1 65)"
        opacity="0.65"
      />
    </svg>
  );
}

export function Story() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const rotate = useTransform(scrollYProgress, [0, 1], [-10, 25]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1.1, 1]);

  return (
    <section ref={ref} className="relative overflow-hidden bg-dark px-5 py-32 text-ivory md:py-48">
      <div className="mx-auto max-w-6xl">
        {/* IBS chapter */}
        <div className="grid items-center gap-16 md:grid-cols-2">
          <Reveal>
            <p className="mb-5 text-xs uppercase tracking-[0.3em] text-gold">Chapter 01 · IBS</p>
            <h3 className="font-display text-[clamp(2rem,5vw,4.5rem)] leading-[1.02] text-ivory">
              What type of IBS
              <br />
              <span className="italic text-gold">do you really have?</span>
            </h3>
            <p className="mt-8 max-w-md text-pretty text-ivory/70">
              IBS is not one condition — it is a constellation. We map your
              subtype, triggers and microbiome to design care that finally
              brings calm to your digestion.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="grid grid-cols-3 gap-3">
              {["IBS-D", "IBS-C", "IBS-M"].map((t) => (
                <div
                  key={t}
                  className="glass-dark aspect-[3/4] rounded-2xl p-5 transition-transform hover:-translate-y-1"
                >
                  <p className="text-[10px] uppercase tracking-[0.25em] text-gold">Subtype</p>
                  <p className="mt-auto block pt-16 font-display text-3xl text-ivory">{t}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Liver chapter */}
        <div className="mt-40 grid items-center gap-16 md:grid-cols-2">
          <motion.div
            style={{ rotate, scale }}
            className="relative mx-auto aspect-square w-full max-w-md md:order-2"
          >
            <LiverGlow />
          </motion.div>
          <Reveal className="md:order-1">
            <p className="mb-5 text-xs uppercase tracking-[0.3em] text-gold">Chapter 02 · Liver</p>
            <h3 className="font-display text-[clamp(2rem,5vw,4.5rem)] leading-[1.02] text-ivory">
              Your liver often
              <br />
              <span className="italic text-gold">speaks quietly.</span>
            </h3>
            <p className="mt-8 max-w-md text-pretty text-ivory/70">
              Fatty liver disease grows in silence. FibroScan elastography and
              metabolic screening give you a clear, early picture — long before
              symptoms ever arrive.
            </p>
          </Reveal>
        </div>

        {/* Preventive */}
        <div className="mt-40">
          <Reveal>
            <p className="mb-5 text-xs uppercase tracking-[0.3em] text-gold">Chapter 03 · Prevention</p>
            <h3 className="max-w-4xl font-display text-[clamp(2rem,5vw,4.5rem)] leading-[1.02] text-ivory">
              Colonoscopy, reimagined as
              <span className="italic text-gold"> executive longevity care.</span>
            </h3>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-2xl text-pretty text-ivory/70">
              Modern preventive medicine is not about fear — it is about
              clarity. Detect early, optimise continually, live longer with
              confidence.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
