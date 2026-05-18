import { useEffect, useState, type MouseEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LANGS, useT, type Lang } from "@/lib/i18n";
import { useTheme } from "@/lib/theme";
import { Globe, Moon, Sun } from "lucide-react";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { t, lang, setLang } = useT();
  const { theme, toggle } = useTheme();

  const links = [
    { href: "#about", label: t("nav.about") },
    { href: "#expertise", label: t("nav.expertise") },
    { href: "#programs", label: t("nav.programs") },
    { href: "#insights", label: t("nav.insights") },
    { href: "#booking", label: t("nav.booking") },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onToggleTheme = (e: MouseEvent<HTMLButtonElement>) => {
    toggle({ clientX: e.clientX, clientY: e.clientY });
  };

  const current = LANGS.find((l) => l.code === lang)!;

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "py-3" : "py-5"}`}
    >
      <div className="mx-auto max-w-6xl px-5">
        <div
          className={`flex items-center justify-between gap-4 rounded-full px-5 py-3 transition-all duration-500 ${
            scrolled ? "glass shadow-luxe" : "bg-transparent"
          }`}
        >
          <a href="#top" className="flex items-center gap-2 font-display text-base tracking-tight">
            <span className="inline-block h-2 w-2 rounded-full bg-gold" />
            <span className="hidden sm:inline">Dr. Katayoon Homayoon</span>
            <span className="sm:hidden">Dr. Katayoon</span>
          </a>

          <nav className="hidden gap-8 md:flex">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            {/* Language switcher */}
            <div className="relative">
              <button
                onClick={() => setOpen((o) => !o)}
                onBlur={() => setTimeout(() => setOpen(false), 150)}
                className="flex items-center gap-1.5 rounded-full border border-border bg-background/40 px-3 py-2 text-xs font-medium text-foreground backdrop-blur transition-colors hover:bg-background"
                aria-label="Change language"
              >
                <Globe className="h-3.5 w-3.5" />
                <span>{current.short}</span>
              </button>
              <AnimatePresence>
                {open && (
                  <motion.ul
                    initial={{ opacity: 0, y: -6, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -6, scale: 0.96 }}
                    transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute end-0 mt-2 min-w-[160px] overflow-hidden rounded-2xl border border-border bg-background/95 p-1 shadow-luxe backdrop-blur"
                  >
                    {LANGS.map((l) => (
                      <li key={l.code}>
                        <button
                          onMouseDown={(e) => e.preventDefault()}
                          onClick={() => {
                            setLang(l.code as Lang);
                            setOpen(false);
                          }}
                          className={`flex w-full items-center justify-between rounded-xl px-3 py-2 text-sm transition-colors ${
                            l.code === lang ? "bg-secondary text-foreground" : "text-muted-foreground hover:bg-secondary/60"
                          }`}
                          style={l.code !== "en" ? { fontFamily: l.code === "fa" ? "var(--font-fa)" : "var(--font-ar)" } : undefined}
                        >
                          <span>{l.label}</span>
                          <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{l.short}</span>
                        </button>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>

            {/* Theme toggle */}
            <button
              onClick={onToggleTheme}
              aria-label="Toggle theme"
              className="relative grid h-9 w-9 place-items-center overflow-hidden rounded-full border border-border bg-background/40 text-foreground backdrop-blur transition-colors hover:bg-background"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={theme}
                  initial={{ y: 14, opacity: 0, rotate: -90 }}
                  animate={{ y: 0, opacity: 1, rotate: 0 }}
                  exit={{ y: -14, opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute"
                >
                  {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                </motion.span>
              </AnimatePresence>
            </button>

            <a
              href="#booking"
              className="hidden rounded-full bg-foreground px-4 py-2 text-xs font-medium tracking-wide text-background transition-transform hover:scale-[1.03] sm:inline-block md:text-sm"
            >
              {t("nav.book")}
            </a>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
