import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { href: "#about", label: "About" },
  { href: "#expertise", label: "Expertise" },
  { href: "#programs", label: "Programs" },
  { href: "#insights", label: "Insights" },
  { href: "#booking", label: "Booking" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-6xl px-5">
        <div
          className={`flex items-center justify-between rounded-full px-5 py-3 transition-all duration-500 ${
            scrolled ? "glass shadow-luxe" : "bg-transparent"
          }`}
        >
          <a href="#top" className="flex items-center gap-2 font-display text-base tracking-tight">
            <span className="inline-block h-2 w-2 rounded-full bg-gold" />
            <span>Dr. Katayoon Homayoon</span>
          </a>
          <nav className="hidden gap-8 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <a
            href="#booking"
            className="rounded-full bg-foreground px-4 py-2 text-xs font-medium tracking-wide text-background transition-transform hover:scale-[1.03] md:text-sm"
          >
            Book consultation
          </a>
        </div>
      </div>
    </motion.header>
  );
}
