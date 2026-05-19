import { Reveal } from "./Reveal";
import { useT } from "@/lib/i18n";
import { INSIGHT_POSTS, pick } from "@/lib/insights-data";

export function Insights() {
  const { t, lang } = useT();

  const dateFmt = new Intl.DateTimeFormat(
    lang === "fa" ? "fa-IR" : lang === "ar" ? "ar-AE" : "en-GB",
    { year: "numeric", month: "short", day: "numeric" },
  );

  return (
    <section id="insights" className="relative bg-card px-5 py-32 md:py-44">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="mb-5 text-xs uppercase tracking-[0.3em] text-muted-foreground">{t("ins.kicker")}</p>
            <h2 className="font-display text-[clamp(2rem,5vw,4rem)] leading-[1.05] text-balance">
              {t("ins.title1")}
              <span className="italic text-bronze">{t("ins.title2")}</span>
            </h2>
          </div>
          <a
            href="https://www.instagram.com/dr.katayoonhomayoon/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs uppercase tracking-[0.25em] text-bronze hover:underline"
          >
            @dr.katayoonhomayoon →
          </a>
        </Reveal>

        <div className="grid gap-px overflow-hidden rounded-3xl bg-border md:grid-cols-2">
          {INSIGHT_POSTS.map((post, idx) => (
            <Reveal
              key={post.url}
              delay={(idx % 2) * 0.08}
              className="group bg-background transition-colors hover:bg-card"
            >
              <a
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-8 md:p-12"
              >
                <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                  <span className="text-bronze">{pick(post.tag, lang)}</span>
                  <span>{dateFmt.format(new Date(post.date))}</span>
                </div>
                <h3 className="mt-8 font-display text-2xl leading-tight text-balance md:text-3xl">
                  {pick(post.title, lang)}
                </h3>
                <span className="mt-8 inline-flex items-center gap-2 text-sm font-medium">
                  {t("ins.read")}
                  <span className="transition-transform group-hover:translate-x-1 rtl:rotate-180">→</span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
