import { useState } from "react";
import { Reveal } from "./Reveal";
import { useT } from "@/lib/i18n";
import { MessageCircle, Phone } from "lucide-react";


export function Booking() {
  const [sent, setSent] = useState(false);
  const { t } = useT();
  return (
    <section id="booking" className="relative overflow-hidden bg-dark px-5 py-32 text-ivory md:py-44">
      <div aria-hidden className="pointer-events-none absolute -right-40 top-0 h-[60vh] w-[60vh] rounded-full opacity-30 blur-3xl" style={{ background: "oklch(0.78 0.12 65)" }} />
      <div className="relative mx-auto grid max-w-6xl gap-16 md:grid-cols-[1fr_1.1fr]">
        <div>
          <Reveal>
            <p className="mb-5 text-xs uppercase tracking-[0.3em] text-gold">{t("bk.kicker")}</p>
            <h2 className="font-display text-[clamp(2rem,5vw,4rem)] leading-[1.05] text-balance text-ivory">
              {t("bk.title1")}
              <span className="italic text-gold">{t("bk.title2")}</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-md text-pretty text-ivory/70">{t("bk.intro")}</p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-10 space-y-3">
              <a href="https://wa.me/971000000000" className="group flex items-center justify-between gap-4 rounded-2xl border border-ivory/15 bg-ivory/5 px-6 py-5 transition-colors hover:bg-ivory/10">
                <span className="flex items-center gap-4">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-gold/15 text-gold transition-transform group-hover:scale-110">
                    <MessageCircle className="h-5 w-5" strokeWidth={1.6} />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-[0.25em] text-gold">{t("bk.fastest")}</span>
                    <span className="mt-1 block font-display text-xl text-ivory">{t("bk.wa")}</span>
                  </span>
                </span>
                <span className="text-ivory/60 rtl:rotate-180">→</span>
              </a>
              <a href="tel:+971000000000" className="group flex items-center justify-between gap-4 rounded-2xl border border-ivory/15 bg-ivory/5 px-6 py-5 transition-colors hover:bg-ivory/10">
                <span className="flex items-center gap-4">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-gold/15 text-gold transition-transform group-hover:scale-110">
                    <Phone className="h-5 w-5" strokeWidth={1.6} />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-[0.25em] text-gold">{t("bk.direct")}</span>
                    <span className="mt-1 block font-display text-xl text-ivory">{t("bk.call")}</span>
                  </span>
                </span>
                <span className="text-ivory/60 rtl:rotate-180">→</span>
              </a>

            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="glass-dark rounded-3xl p-8 md:p-10">
            <p className="font-display text-2xl text-ivory">{t("bk.req")}</p>
            <p className="mt-2 text-sm text-ivory/60">{t("bk.respond")}</p>

            <div className="mt-8 grid gap-5">
              <Field label={t("bk.name")} name="name" placeholder={t("bk.name.ph")} />
              <div className="grid gap-5 md:grid-cols-2">
                <Field label={t("bk.email")} name="email" type="email" placeholder="you@email.com" />
                <Field label={t("bk.phone")} name="phone" placeholder="+971" />
              </div>
              <div className="grid gap-5 md:grid-cols-2">
                <Select label={t("bk.consult")} name="type" options={[t("bk.inperson"), t("bk.video"), t("bk.second")]} />
                <Select label={t("bk.lang")} name="lang" options={[t("bk.lang.en"), t("bk.lang.fa"), t("bk.lang.ar")]} />
              </div>
              <div>
                <label className="mb-2 block text-[11px] uppercase tracking-[0.25em] text-ivory/60">{t("bk.help")}</label>
                <textarea rows={3} className="w-full rounded-xl border border-ivory/15 bg-ivory/5 px-4 py-3 text-ivory placeholder:text-ivory/30 focus:border-gold focus:outline-none" placeholder={t("bk.help.ph")} />
              </div>
            </div>

            <button type="submit" className="mt-8 w-full rounded-full bg-ivory px-6 py-4 text-sm font-medium text-ink transition-transform hover:scale-[1.01]">
              {sent ? t("bk.thanks") : t("bk.submit")}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", placeholder }: { label: string; name: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label className="mb-2 block text-[11px] uppercase tracking-[0.25em] text-ivory/60">{label}</label>
      <input name={name} type={type} placeholder={placeholder} className="w-full rounded-xl border border-ivory/15 bg-ivory/5 px-4 py-3 text-ivory placeholder:text-ivory/30 focus:border-gold focus:outline-none" />
    </div>
  );
}

function Select({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <div>
      <label className="mb-2 block text-[11px] uppercase tracking-[0.25em] text-ivory/60">{label}</label>
      <select name={name} className="w-full rounded-xl border border-ivory/15 bg-ivory/5 px-4 py-3 text-ivory focus:border-gold focus:outline-none">
        {options.map((o) => (
          <option key={o} className="bg-ink text-ivory">{o}</option>
        ))}
      </select>
    </div>
  );
}
