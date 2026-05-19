import { MessageCircle } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const WHATSAPP = "https://wa.me/971000000000";

export function WhatsAppFab() {
  const { t } = useI18n();
  const label = t("hero.whatsapp");

  return (
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="group fixed bottom-6 start-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-luxe ring-1 ring-black/10 transition-transform hover:scale-105 active:scale-95"
    >
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366]/40" />
      <MessageCircle className="h-6 w-6" strokeWidth={2.2} />
      <span className="pointer-events-none absolute start-full ms-3 whitespace-nowrap rounded-full bg-foreground px-3 py-1.5 text-xs font-medium text-background opacity-0 shadow-luxe transition-opacity group-hover:opacity-100">
        {label}
      </span>
    </a>
  );
}

export default WhatsAppFab;
