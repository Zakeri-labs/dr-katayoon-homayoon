import { useT } from "@/lib/i18n";

export function Footer() {
  const { t } = useT();
  return (
    <footer className="border-t border-border px-5 py-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:justify-between">
        <div className="max-w-sm">
          <p className="font-display text-2xl">Dr. Katayoon Homayoon</p>
          <p className="mt-2 text-sm text-muted-foreground">{t("ft.role")}</p>
        </div>
        <div className="grid grid-cols-2 gap-10 text-sm md:grid-cols-3">
          <FooterCol title={t("ft.practice")} items={[t("nav.about"), t("nav.expertise"), t("nav.programs"), t("nav.insights")]} />
          <FooterCol title={t("ft.contact")} items={[t("bk.wa"), t("bk.call"), "Email", t("loc.dir")]} />
          <FooterCol title={t("ft.languages")} items={["English", "فارسی", "العربية"]} />
        </div>
      </div>
      <div className="mx-auto mt-16 flex max-w-6xl flex-col items-start justify-between gap-4 border-t border-border pt-8 text-xs text-muted-foreground md:flex-row md:items-center">
        <p>© {new Date().getFullYear()} Dr. Katayoon Homayoon. {t("ft.rights")}</p>
        <p className="uppercase tracking-[0.25em]">Dubai · DXB</p>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">{title}</p>
      <ul className="mt-4 space-y-2.5">
        {items.map((i) => (
          <li key={i}>
            <a href="#" className="transition-colors hover:text-foreground">{i}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
