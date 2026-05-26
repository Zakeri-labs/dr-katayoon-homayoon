import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Reveal } from "./Reveal";

type Props = {
  src: string;
  alt: string;
  caption?: string;
  kicker?: string;
  align?: "left" | "right" | "center";
  aspect?: "wide" | "ultrawide" | "square";
};

const ASPECT: Record<NonNullable<Props["aspect"]>, string> = {
  wide: "aspect-[16/9]",
  ultrawide: "aspect-[21/9]",
  square: "aspect-[4/3]",
};

export function ImageBand({
  src,
  alt,
  caption,
  kicker,
  align = "center",
  aspect = "wide",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  const width =
    align === "center"
      ? "mx-auto max-w-5xl"
      : align === "left"
        ? "me-auto max-w-4xl"
        : "ms-auto max-w-4xl";

  return (
    <section ref={ref} className="relative px-5 py-20 md:py-28">
      <Reveal className={width}>
        <figure className={`group relative ${ASPECT[aspect]} overflow-hidden rounded-3xl bg-champagne shadow-luxe`}>
          <motion.img
            src={src}
            alt={alt}
            loading="lazy"
            style={{ y }}
            className="absolute inset-0 h-[115%] w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent" />
          {(kicker || caption) && (
            <figcaption className="absolute bottom-6 left-6 right-6 text-ivory">
              {kicker && (
                <p className="text-[10px] uppercase tracking-[0.3em] text-gold">{kicker}</p>
              )}
              {caption && (
                <p className="mt-2 max-w-xl font-display text-xl md:text-2xl leading-snug">
                  {caption}
                </p>
              )}
            </figcaption>
          )}
        </figure>
      </Reveal>
    </section>
  );
}
