import { Reveal } from "./Reveal";
import { useT, type TKey } from "@/lib/i18n";
import dubai from "@/assets/dubai-skyline.jpg";

export function Location() {
  const { t } = useT();
  return (
    <section className="relative px-5 py-32 md:py-44">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-16 md:grid-cols-2 md:items-center">
          <Reveal>
            <p className="mb-5 text-xs uppercase tracking-[0.3em] text-muted-foreground">{t("loc.kicker")}</p>
            <h2 className="font-display text-[clamp(2rem,5vw,4rem)] leading-[1.05] text-balance">
              {t("loc.title1")}
              <span className="italic text-bronze">{t("loc.title2")}</span>
            </h2>
            <p className="mt-8 max-w-md text-pretty text-muted-foreground">{t("loc.p")}</p>
            <dl className="mt-10 space-y-4 text-sm">
              {(
                [
                  ["loc.clinic", "loc.clinic.v"],
                  ["loc.area", "loc.area.v"],
                  ["loc.hours", "loc.hours.v"],
                  ["loc.lang", "loc.lang.v"],
                ] as [TKey, TKey][]
              ).map(([k, v]) => (
                <div key={k} className="flex justify-between border-t border-border pt-4">
                  <dt className="text-xs uppercase tracking-[0.25em] text-muted-foreground">{t(k)}</dt>
                  <dd className="text-right text-foreground">{t(v)}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-dark shadow-luxe">
              <svg viewBox="0 0 400 500" className="absolute inset-0 h-full w-full">
                <defs>
                  <linearGradient id="sky" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="oklch(0.25 0.02 60)" />
                    <stop offset="60%" stopColor="oklch(0.35 0.04 70)" />
                    <stop offset="100%" stopColor="oklch(0.55 0.09 75)" />
                  </linearGradient>
                </defs>
                <rect width="400" height="500" fill="url(#sky)" />
                <g fill="oklch(0.15 0.01 60)" opacity="0.95">
                  <rect x="30" y="380" width="40" height="100" />
                  <rect x="80" y="340" width="32" height="140" />
                  <rect x="120" y="360" width="28" height="120" />
                  <polygon points="170,180 195,500 145,500" />
                  <rect x="210" y="300" width="36" height="180" />
                  <rect x="255" y="330" width="30" height="150" />
                  <rect x="295" y="290" width="40" height="190" />
                  <rect x="345" y="350" width="30" height="130" />
                </g>
                <g fill="oklch(0.85 0.1 75)" opacity="0.7">
                  {Array.from({ length: 30 }).map((_, i) => (
                    <circle key={i} cx={40 + (i * 13) % 340} cy={400 + ((i * 7) % 70)} r="1" />
                  ))}
                </g>
              </svg>
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-ivory">
                <div>
                  <p className="font-display text-xl">{t("loc.clinic.v")}</p>
                  <p className="text-xs uppercase tracking-[0.25em] text-gold">Jumeirah</p>
                </div>
                <a href="https://maps.google.com" className="rounded-full border border-ivory/30 px-4 py-2 text-xs">
                  {t("loc.dir")}
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
