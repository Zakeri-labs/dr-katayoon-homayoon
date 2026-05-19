import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Reveal } from "./Reveal";
import { useT } from "@/lib/i18n";
import liverVideo from "../../../public/videos/liver.mp4.asset.json";
import digestVideo from "../../../public/videos/digest.mp4.asset.json";

function OrganVideo({ src, label }: { src: string; label: string }) {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-2xl bg-dark">
      <video
        src={src}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        aria-label={label}
        className="h-full w-full object-cover"
      />
    </div>
  );
}


export function Story() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const rotate = useTransform(scrollYProgress, [0, 1], [-10, 25]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1.1, 1]);
  const { t } = useT();

  return (
    <section ref={ref} className="relative overflow-hidden bg-dark px-5 py-32 text-ivory md:py-48">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-16 md:grid-cols-2">
          <Reveal>
            <p className="mb-5 text-xs uppercase tracking-[0.3em] text-gold">{t("story.ch1.k")}</p>
            <h3 className="font-display text-[clamp(2rem,5vw,4.5rem)] leading-[1.02] text-ivory">
              {t("story.ch1.t1")}
              <br />
              <span className="italic text-gold">{t("story.ch1.t2")}</span>
            </h3>
            <p className="mt-8 max-w-md text-pretty text-ivory/70">{t("story.ch1.p")}</p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="grid grid-cols-3 gap-3">
              {["IBS-D", "IBS-C", "IBS-M"].map((x) => (
                <div key={x} className="glass-dark aspect-[3/4] rounded-2xl p-5 transition-transform hover:-translate-y-1">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-gold">{t("story.ch1.subtype")}</p>
                  <p className="mt-auto block pt-16 font-display text-3xl text-ivory">{x}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="mt-40 grid items-center gap-16 md:grid-cols-2">
          <div className="relative mx-auto aspect-square w-full max-w-md md:order-2">
            <OrganVideo src={liverVideo.url} label="Liver visualization" />
          </motion.div>
          <Reveal className="md:order-1">
            <p className="mb-5 text-xs uppercase tracking-[0.3em] text-gold">{t("story.ch2.k")}</p>
            <h3 className="font-display text-[clamp(2rem,5vw,4.5rem)] leading-[1.02] text-ivory">
              {t("story.ch2.t1")}
              <br />
              <span className="italic text-gold">{t("story.ch2.t2")}</span>
            </h3>
            <p className="mt-8 max-w-md text-pretty text-ivory/70">{t("story.ch2.p")}</p>
          </Reveal>
        </div>

        <div className="mt-40 grid items-center gap-16 md:grid-cols-2">
          <motion.div style={{ rotate: useTransform(scrollYProgress, [0, 1], [15, -20]), scale }} className="relative mx-auto aspect-square w-full max-w-md">
            <OrganVideo src={digestVideo.url} label="Digestion visualization" />
          </motion.div>
          <Reveal>
            <p className="mb-5 text-xs uppercase tracking-[0.3em] text-gold">{t("story.chD.k")}</p>
            <h3 className="font-display text-[clamp(2rem,5vw,4.5rem)] leading-[1.02] text-ivory">
              {t("story.chD.t1")}
              <br />
              <span className="italic text-gold">{t("story.chD.t2")}</span>
            </h3>
            <p className="mt-8 max-w-md text-pretty text-ivory/70">{t("story.chD.p")}</p>
          </Reveal>
        </div>



        <div className="mt-40">
          <Reveal>
            <p className="mb-5 text-xs uppercase tracking-[0.3em] text-gold">{t("story.ch3.k")}</p>
            <h3 className="max-w-4xl font-display text-[clamp(2rem,5vw,4.5rem)] leading-[1.02] text-ivory">
              {t("story.ch3.t1")}
              <span className="italic text-gold">{t("story.ch3.t2")}</span>
            </h3>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-2xl text-pretty text-ivory/70">{t("story.ch3.p")}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
