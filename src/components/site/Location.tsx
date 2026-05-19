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
              <img
                src={dubai}
                alt="Dubai skyline at golden hour"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
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
