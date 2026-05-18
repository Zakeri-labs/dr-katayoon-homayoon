import { useState } from "react";
import { Reveal } from "./Reveal";

export function Booking() {
  const [sent, setSent] = useState(false);
  return (
    <section id="booking" className="relative overflow-hidden bg-dark px-5 py-32 text-ivory md:py-44">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-0 h-[60vh] w-[60vh] rounded-full opacity-30 blur-3xl"
        style={{ background: "oklch(0.78 0.12 65)" }}
      />
      <div className="relative mx-auto grid max-w-6xl gap-16 md:grid-cols-[1fr_1.1fr]">
        <div>
          <Reveal>
            <p className="mb-5 text-xs uppercase tracking-[0.3em] text-gold">Booking</p>
            <h2 className="font-display text-[clamp(2rem,5vw,4rem)] leading-[1.05] text-balance text-ivory">
              Begin with a
              <span className="italic text-gold"> conversation.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-md text-pretty text-ivory/70">
              In-person at Dubai London Hospital, or a private video
              consultation from anywhere in the world. English, Persian
              or Arabic — whichever feels most like home.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-10 space-y-3">
              <a
                href="https://wa.me/971000000000"
                className="flex items-center justify-between rounded-2xl border border-ivory/15 bg-ivory/5 px-6 py-5 transition-colors hover:bg-ivory/10"
              >
                <span>
                  <span className="block text-xs uppercase tracking-[0.25em] text-gold">Fastest</span>
                  <span className="mt-1 block font-display text-xl text-ivory">WhatsApp the clinic</span>
                </span>
                <span className="text-ivory/60">→</span>
              </a>
              <a
                href="tel:+971000000000"
                className="flex items-center justify-between rounded-2xl border border-ivory/15 bg-ivory/5 px-6 py-5 transition-colors hover:bg-ivory/10"
              >
                <span>
                  <span className="block text-xs uppercase tracking-[0.25em] text-gold">Direct</span>
                  <span className="mt-1 block font-display text-xl text-ivory">Call reception</span>
                </span>
                <span className="text-ivory/60">→</span>
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="glass-dark rounded-3xl p-8 md:p-10"
          >
            <p className="font-display text-2xl text-ivory">Request an appointment</p>
            <p className="mt-2 text-sm text-ivory/60">
              We respond personally within one business day.
            </p>

            <div className="mt-8 grid gap-5">
              <Field label="Full name" name="name" placeholder="Your name" />
              <div className="grid gap-5 md:grid-cols-2">
                <Field label="Email" name="email" type="email" placeholder="you@email.com" />
                <Field label="Phone / WhatsApp" name="phone" placeholder="+971" />
              </div>
              <div className="grid gap-5 md:grid-cols-2">
                <Select label="Consultation" name="type" options={["In-person", "Video", "Second opinion"]} />
                <Select label="Language" name="lang" options={["English", "Persian", "Arabic"]} />
              </div>
              <div>
                <label className="mb-2 block text-[11px] uppercase tracking-[0.25em] text-ivory/60">
                  Briefly, how can we help?
                </label>
                <textarea
                  rows={3}
                  className="w-full rounded-xl border border-ivory/15 bg-ivory/5 px-4 py-3 text-ivory placeholder:text-ivory/30 focus:border-gold focus:outline-none"
                  placeholder="Symptoms, history, or the program that interests you."
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-8 w-full rounded-full bg-ivory px-6 py-4 text-sm font-medium text-ink transition-transform hover:scale-[1.01]"
            >
              {sent ? "Thank you — we'll be in touch." : "Request appointment"}
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
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full rounded-xl border border-ivory/15 bg-ivory/5 px-4 py-3 text-ivory placeholder:text-ivory/30 focus:border-gold focus:outline-none"
      />
    </div>
  );
}

function Select({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <div>
      <label className="mb-2 block text-[11px] uppercase tracking-[0.25em] text-ivory/60">{label}</label>
      <select
        name={name}
        className="w-full rounded-xl border border-ivory/15 bg-ivory/5 px-4 py-3 text-ivory focus:border-gold focus:outline-none"
      >
        {options.map((o) => (
          <option key={o} className="bg-ink text-ivory">{o}</option>
        ))}
      </select>
    </div>
  );
}
