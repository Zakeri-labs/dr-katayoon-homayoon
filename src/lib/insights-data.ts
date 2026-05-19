import type { Lang } from "@/lib/i18n";

export type InsightPost = {
  url: string;
  date: string; // ISO
  tag: { en: string; fa: string; ar: string };
  title: { en: string; fa: string; ar: string };
};

// Latest Instagram posts (curated from @dr.katayoonhomayoon)
export const INSIGHT_POSTS: InsightPost[] = [
  {
    url: "https://www.instagram.com/p/DSSz_IUjHU3/",
    date: "2025-12-15",
    tag: { en: "Diagnosis", fa: "تشخیص", ar: "التشخيص" },
    title: {
      en: "Persistent gut pain: why systematic diagnosis matters",
      fa: "دردهای گوارشی مداوم و اهمیت تشخیص سیستماتیک",
      ar: "آلام الجهاز الهضمي المستمرة وأهمية التشخيص المنهجي",
    },
  },
  {
    url: "https://www.instagram.com/p/DRhlI-DjKeI/",
    date: "2025-11-26",
    tag: { en: "Liver", fa: "کبد", ar: "الكبد" },
    title: {
      en: "Fatty liver is not one disease — MASLD, MASH and beyond",
      fa: "کبد چرب یک بیماری نیست — MASLD، MASH و فراتر",
      ar: "الكبد الدهني ليس مرضًا واحدًا — MASLD وMASH وأكثر",
    },
  },
  {
    url: "https://www.instagram.com/p/DQzVfGFjDdD/",
    date: "2025-11-08",
    tag: { en: "IBS", fa: "IBS", ar: "القولون" },
    title: {
      en: "IBS-C, IBS-D, IBS-M: tailoring treatment to your subtype",
      fa: "IBS-C، IBS-D، IBS-M: درمان متناسب با زیرنوع شما",
      ar: "IBS-C وIBS-D وIBS-M: علاج مخصص لنوعك",
    },
  },
  {
    url: "https://www.instagram.com/p/DS5RCaajNKH/",
    date: "2025-12-30",
    tag: { en: "Women", fa: "زنان", ar: "المرأة" },
    title: {
      en: "After menopause: the liver and heart checks worth doing",
      fa: "پس از یائسگی: بررسی‌های ضروری کبد و قلب",
      ar: "بعد انقطاع الطمث: فحوصات الكبد والقلب المهمة",
    },
  },
  {
    url: "https://www.instagram.com/p/DS0JNQqjjB0/",
    date: "2025-12-28",
    tag: { en: "Reflux", fa: "ریفلاکس", ar: "الارتجاع" },
    title: {
      en: "Heartburn that won't respond — when to look deeper",
      fa: "سوزش معده‌ای که با درمان معمول برطرف نمی‌شود",
      ar: "حرقة المعدة التي لا تستجيب — متى نتعمق في الفحص",
    },
  },
  {
    url: "https://www.instagram.com/p/DQpK7zejBtB/",
    date: "2025-11-04",
    tag: { en: "Weight loss", fa: "کاهش وزن", ar: "إنقاص الوزن" },
    title: {
      en: "Mounjaro (Tirzepatide): the reality behind the miracle",
      fa: "مانجارو (Tirzepatide): واقعیت پشت یک داروی معجزه‌آسا",
      ar: "مونجارو (Tirzepatide): الحقيقة وراء الدواء المعجزة",
    },
  },
];

export function pick<T extends { en: string; fa: string; ar: string }>(
  v: T,
  lang: Lang,
): string {
  return v[lang];
}
