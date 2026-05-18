import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useT } from "@/lib/i18n";

type Phase = "hidden" | "expanded" | "pill";

const PORTRAIT =
  "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80";
const WHATSAPP = "https://wa.me/971000000000";
const EASE = [0.22, 1, 0.36, 1] as const;

export function IntroOverlay() {
  const { t } = useT();
  const [phase, setPhase] = useState<Phase>("hidden");

  useEffect(() => {
    const seen = typeof window !== "undefined" && sessionStorage.getItem("intro_seen");
    if (seen) {
      setPhase("pill");
      return;
    }
    const open = setTimeout(() => setPhase("expanded"), 600);
    const collapse = setTimeout(() => {
      setPhase("pill");
      sessionStorage.setItem("intro_seen", "1");
    }, 600 + 4200);
    return () => {
      clearTimeout(open);
      clearTimeout(collapse);
    };
  }, []);

  const collapse = () => {
    sessionStorage.setItem("intro_seen", "1");
    setPhase("pill");
  };
  const expand = () => setPhase("expanded");

  return (
    <>
      <AnimatePresence>
        {phase === "expanded" && (
          <motion.aside
            key="intro-card"
            initial={{ x: "110%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "110%", opacity: 0 }}
            transition={{ duration: 0.9, ease: EASE }}
            className="fixed end-5 top-1/2 z-[100] w-[min(92vw,380px)] -translate-y-1/2 overflow-hidden rounded-3xl border border-border bg-card/95 shadow-luxe backdrop-blur-xl"
            aria-label={t("intro.name")}
          >
            <div className="relative">
              <motion.div
                layoutId="person-image"
                transition={{ duration: 0.7, ease: EASE }}
                className="relative aspect-[5/4] w-full overflow-hidden"
              >
                <img
                  src={PORTRAIT}
                  alt={t("intro.name")}
                  className="h-full w-full object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/70 via-transparent to-transparent" />
              </motion.div>

              <button
                onClick={collapse}
                aria-label={t("intro.close")}
                className="absolute end-3 top-3 grid h-9 w-9 place-items-center rounded-full border border-border bg-background/70 text-foreground backdrop-blur transition-transform hover:scale-105"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="p-6 md:p-7">
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4, ease: EASE }}
                className="text-[10px] uppercase tracking-[0.3em] text-bronze"
              >
                {t("intro.tag")}
              </motion.p>

              <motion.h2
                layoutId="person-name"
                transition={{ duration: 0.7, ease: EASE }}
                className="mt-3 font-display text-3xl leading-[1.05] text-foreground"
              >
                {t("intro.name")}
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5, ease: EASE }}
                className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground"
              >
                {t("intro.role")}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6, ease: EASE }}
                className="mt-5 text-pretty text-sm leading-relaxed text-muted-foreground"
              >
                {t("intro.bio")}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7, ease: EASE }}
                className="mt-6 flex flex-col gap-2"
              >
                <a
                  href={WHATSAPP}
                  onClick={collapse}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background/60 px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-background"
                >
                  {t("hero.whatsapp")}
                </a>
                <div className="flex gap-2">
                  <a
                    href="#booking"
                    onClick={collapse}
                    className="group inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-foreground px-4 py-2.5 text-sm font-medium text-background transition-transform hover:scale-[1.02]"
                  >
                    {t("intro.begin")}
                    <span className="transition-transform group-hover:translate-x-0.5 rtl:-scale-x-100">→</span>
                  </a>
                  <a
                    href="#about"
                    onClick={collapse}
                    className="inline-flex flex-1 items-center justify-center rounded-full border border-border px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary/60"
                  >
                    {t("intro.explore")}
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {phase === "pill" && (
        <motion.button
          key="intro-pill"
          onClick={expand}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.5, ease: EASE }}
          className="group fixed bottom-5 end-5 z-[90] flex items-center gap-3 overflow-hidden rounded-full border border-border bg-background/70 py-2 pe-5 ps-2 text-start shadow-luxe backdrop-blur-2xl backdrop-saturate-150 transition-shadow hover:shadow-glow dark:bg-card/55"
          aria-label={t("intro.pill")}
        >
          {/* Inner glass highlight */}
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-full"
            style={{
              background:
                "linear-gradient(135deg, color-mix(in oklab, var(--foreground) 8%, transparent) 0%, transparent 40%, color-mix(in oklab, var(--foreground) 4%, transparent) 100%)",
            }}
          />
          <motion.div
            layoutId="person-image"
            transition={{ duration: 0.7, ease: EASE }}
            className="relative h-11 w-11 overflow-hidden rounded-full ring-1 ring-border"
          >
            <img src={PORTRAIT} alt="" className="h-full w-full object-cover" />
          </motion.div>
          <motion.span
            layoutId="person-name"
            transition={{ duration: 0.7, ease: EASE }}
            className="relative font-display text-sm leading-tight text-foreground"
          >
            {t("intro.pill")}
          </motion.span>
        </motion.button>
      )}
    </>
  );
}
