import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "fa" | "ar";
export const LANGS: { code: Lang; label: string; short: string; dir: "ltr" | "rtl" }[] = [
  { code: "en", label: "English", short: "EN", dir: "ltr" },
  { code: "fa", label: "فارسی", short: "FA", dir: "rtl" },
  { code: "ar", label: "العربية", short: "AR", dir: "rtl" },
];

type Dict = Record<string, { en: string; fa: string; ar: string }>;

export const dict = {
  // Nav
  "nav.about": { en: "About", fa: "درباره", ar: "نبذة" },
  "nav.expertise": { en: "Expertise", fa: "تخصص", ar: "الخبرة" },
  "nav.programs": { en: "Programs", fa: "برنامه‌ها", ar: "البرامج" },
  "nav.insights": { en: "Insights", fa: "بینش‌ها", ar: "رؤى" },
  "nav.booking": { en: "Booking", fa: "نوبت‌گیری", ar: "الحجز" },
  "nav.book": { en: "Book consultation", fa: "رزرو مشاوره", ar: "احجز استشارة" },

  // Intro overlay
  "intro.tag": { en: "Welcome", fa: "خوش آمدید", ar: "أهلاً بك" },
  "intro.name": { en: "Dr. Katayoon Homayoon", fa: "دکتر کتایون همایون", ar: "د. كتايون همايون" },
  "intro.role": { en: "Specialist Gastroenterologist & Hepatologist · Dubai", fa: "متخصص گوارش و کبد · دبی", ar: "استشارية أمراض الجهاز الهضمي والكبد · دبي" },
  "intro.bio": {
    en: "Modern medicine, human care. A calm, premium experience for digestive and liver health — in English, Persian or Arabic.",
    fa: "پزشکی مدرن، مراقبتی انسانی. تجربه‌ای آرام و ویژه برای سلامت گوارش و کبد — به انگلیسی، فارسی یا عربی.",
    ar: "طب حديث ورعاية إنسانية. تجربة هادئة وراقية لصحة الجهاز الهضمي والكبد — بالإنجليزية أو الفارسية أو العربية.",
  },
  "intro.begin": { en: "Begin", fa: "شروع", ar: "ابدأ" },
  "intro.explore": { en: "Explore", fa: "کاوش", ar: "استكشف" },
  "intro.pill": { en: "Meet Dr. Katayoon", fa: "آشنایی با دکتر کتایون", ar: "تعرّف على د. كتايون" },
  "intro.close": { en: "Close", fa: "بستن", ar: "إغلاق" },

  // Hero
  "hero.eyebrow": {
    en: "Gastroenterology · Hepatology · Dubai",
    fa: "گوارش · کبد · دبی",
    ar: "أمراض الجهاز الهضمي · الكبد · دبي",
  },
  "hero.title1": { en: "Modern medicine.", fa: "پزشکی مدرن.", ar: "طب حديث." },
  "hero.title2": { en: "Human care.", fa: "مراقبتی انسانی.", ar: "رعاية إنسانية." },
  "hero.body": {
    en: "Personalised gastroenterology and liver care with advanced diagnostics, preventive medicine, and compassionate treatment — designed for the modern executive life in Dubai.",
    fa: "مراقبت تخصصی گوارش و کبد، با تشخیص پیشرفته، پزشکی پیشگیرانه و درمانی همراه با همدلی — طراحی‌شده برای زندگی مدرن مدیران در دبی.",
    ar: "رعاية متخصصة للجهاز الهضمي والكبد مع تشخيصات متقدمة، طب وقائي وعلاج إنساني — مصمّمة لأسلوب الحياة العصري في دبي.",
  },
  "hero.whatsapp": { en: "WhatsApp clinic", fa: "واتس‌اپ کلینیک", ar: "واتساب العيادة" },
  "hero.scroll": { en: "scroll", fa: "اسکرول", ar: "مرر" },

  // About
  "about.kicker": { en: "About", fa: "درباره", ar: "نبذة" },
  "about.title1": { en: "A specialist who treats the person,", fa: "متخصصی که انسان را درمان می‌کند،", ar: "طبيبة تعالج الإنسان،" },
  "about.title2": { en: " not just the diagnosis.", fa: " نه فقط بیماری را.", ar: " وليس التشخيص فقط." },
  "about.p1": {
    en: "A specialist gastroenterologist and hepatologist trained at Shiraz University of Medical Sciences, Dr. Katayoon brings more than a decade of advanced digestive expertise to her practice at Dubai London Hospital — combining quiet precision with deeply human care.",
    fa: "دکتر کتایون، متخصص گوارش و کبد فارغ‌التحصیل دانشگاه علوم پزشکی شیراز، بیش از یک دهه تجربه پیشرفته در بیماری‌های گوارشی را در بیمارستان دبی لندن گرد آورده — دقتی آرام در کنار مراقبتی عمیقاً انسانی.",
    ar: "الدكتورة كتايون، استشارية أمراض الجهاز الهضمي والكبد، خريجة جامعة شيراز للعلوم الطبية، تقدّم أكثر من عقد من الخبرة المتقدّمة في مستشفى دبي لندن — دقة هادئة مع رعاية إنسانية عميقة.",
  },
  "about.p2": {
    en: "Her work focuses on IBS, fatty liver, reflux, hepatitis, inflammatory bowel disease and preventive screening — supported by advanced endoscopy, colonoscopy and elastography.",
    fa: "تمرکز اصلی او بر سندرم روده تحریک‌پذیر، کبد چرب، رفلاکس، هپاتیت، بیماری التهابی روده و غربالگری پیشگیرانه است — همراه با آندوسکوپی، کولونوسکوپی و الاستوگرافی پیشرفته.",
    ar: "يركز عملها على القولون العصبي، الكبد الدهني، الارتجاع، التهاب الكبد، أمراض الأمعاء الالتهابية والفحوصات الوقائية — مدعومة بالمنظار الهضمي والقولون والإيلاستوغرافيا.",
  },
  "about.f1k": { en: "11+", fa: "+۱۱", ar: "+11" },
  "about.f1v": { en: "Years gastroenterology", fa: "سال گوارش", ar: "سنوات في الجهاز الهضمي" },
  "about.f2k": { en: "16+", fa: "+۱۶", ar: "+16" },
  "about.f2v": { en: "Years internal medicine", fa: "سال طب داخلی", ar: "سنوات في الطب الباطني" },
  "about.f3k": { en: "3", fa: "۳", ar: "3" },
  "about.f3v": { en: "Languages — EN · FA · AR", fa: "زبان — انگلیسی · فارسی · عربی", ar: "لغات — EN · FA · AR" },
  "about.f4k": { en: "Dubai", fa: "دبی", ar: "دبي" },
  "about.f4v": { en: "London Hospital affiliation", fa: "وابسته به بیمارستان لندن", ar: "تابعة لمستشفى لندن" },

  // Story
  "story.ch1.k": { en: "Chapter 01 · IBS", fa: "فصل ۰۱ · IBS", ar: "الفصل 01 · القولون" },
  "story.ch1.t1": { en: "What type of IBS", fa: "کدام نوع از IBS را", ar: "أي نوع من القولون" },
  "story.ch1.t2": { en: "do you really have?", fa: "واقعاً دارید؟", ar: "تعاني منه حقاً؟" },
  "story.ch1.p": {
    en: "IBS is not one condition — it is a constellation. We map your subtype, triggers and microbiome to design care that finally brings calm to your digestion.",
    fa: "IBS یک بیماری واحد نیست — یک مجموعه است. ما زیرنوع، محرک‌ها و میکروبیوم شما را شناسایی می‌کنیم تا آرامش را به گوارش‌تان بازگردانیم.",
    ar: "القولون العصبي ليس حالة واحدة — بل مجموعة من الحالات. نحدد نوعك ومحفّزاتك وميكروبيوم أمعائك لنصمم رعاية تعيد الهدوء لجهازك الهضمي.",
  },
  "story.ch1.subtype": { en: "Subtype", fa: "زیرنوع", ar: "النوع" },

  "story.ch2.k": { en: "Chapter 02 · Liver", fa: "فصل ۰۲ · کبد", ar: "الفصل 02 · الكبد" },
  "story.ch2.t1": { en: "Your liver often", fa: "کبد شما اغلب", ar: "كبدك غالباً" },
  "story.ch2.t2": { en: "speaks quietly.", fa: "آرام سخن می‌گوید.", ar: "يتحدث بهدوء." },
  "story.ch2.p": {
    en: "Fatty liver disease grows in silence. FibroScan elastography and metabolic screening give you a clear, early picture — long before symptoms ever arrive.",
    fa: "کبد چرب در سکوت پیشرفت می‌کند. فیبرواسکن و غربالگری متابولیک تصویری روشن و زودهنگام در اختیار شما می‌گذارند — مدت‌ها پیش از ظهور علائم.",
    ar: "يتطور الكبد الدهني بصمت. الفيبروسكان والفحوصات الأيضية تمنحك صورة مبكرة وواضحة — قبل ظهور أي أعراض بوقت طويل.",
  },

  "story.ch3.k": { en: "Chapter 03 · Prevention", fa: "فصل ۰۳ · پیشگیری", ar: "الفصل 03 · الوقاية" },
  "story.ch3.t1": { en: "Colonoscopy, reimagined as", fa: "کولونوسکوپی، بازآفرینی‌شده به‌عنوان", ar: "تنظير القولون، أعيد تصوّره بوصفه" },
  "story.ch3.t2": { en: " executive longevity care.", fa: " مراقبت طول عمر مدیران.", ar: " رعاية طول العمر للمديرين." },
  "story.ch3.p": {
    en: "Modern preventive medicine is not about fear — it is about clarity. Detect early, optimise continually, live longer with confidence.",
    fa: "پزشکی پیشگیرانه مدرن درباره ترس نیست — درباره وضوح است. زودتر تشخیص دهید، پیوسته بهینه کنید و با اطمینان عمر طولانی‌تری داشته باشید.",
    ar: "الطب الوقائي الحديث ليس عن الخوف — بل عن الوضوح. اكتشف مبكراً، حسّن باستمرار، وعش أطول بثقة.",
  },

  // Expertise
  "exp.kicker": { en: "Expertise", fa: "تخصص", ar: "الخبرة" },
  "exp.title1": { en: "Conditions cared for with", fa: "بیماری‌هایی که با", ar: "حالات تُعالج" },
  "exp.title2": { en: " precision and patience.", fa: " دقت و صبر درمان می‌شوند.", ar: " بدقة وصبر." },
  "exp.note": { en: "Advanced diagnostics, modern treatment.", fa: "تشخیص پیشرفته، درمان مدرن.", ar: "تشخيص متقدم وعلاج حديث." },
  "exp.c1": { en: "Irritable Bowel Syndrome", fa: "سندرم روده تحریک‌پذیر", ar: "متلازمة القولون العصبي" },
  "exp.c2": { en: "Fatty Liver Disease", fa: "بیماری کبد چرب", ar: "مرض الكبد الدهني" },
  "exp.c3": { en: "Hepatitis B & C", fa: "هپاتیت B و C", ar: "التهاب الكبد B و C" },
  "exp.c4": { en: "Acid Reflux & GERD", fa: "ریفلاکس معده", ar: "ارتجاع المريء" },
  "exp.c5": { en: "Colonoscopy", fa: "کولونوسکوپی", ar: "تنظير القولون" },
  "exp.c6": { en: "Upper Endoscopy", fa: "آندوسکوپی فوقانی", ar: "التنظير العلوي" },
  "exp.c7": { en: "Crohn's Disease", fa: "بیماری کرون", ar: "داء كرون" },
  "exp.c8": { en: "Ulcerative Colitis", fa: "کولیت اولسراتیو", ar: "التهاب القولون التقرحي" },
  "exp.c9": { en: "Food Intolerance", fa: "عدم تحمل غذایی", ar: "عدم تحمل الطعام" },
  "exp.c10": { en: "Chronic Digestive Pain", fa: "درد مزمن گوارشی", ar: "آلام هضمية مزمنة" },
  "exp.c11": { en: "Preventive Screening", fa: "غربالگری پیشگیرانه", ar: "الفحوصات الوقائية" },
  "exp.c12": { en: "Liver Elastography", fa: "الاستوگرافی کبد", ar: "إيلاستوغرافيا الكبد" },

  // Programs
  "prog.kicker": { en: "Programs", fa: "برنامه‌ها", ar: "البرامج" },
  "prog.title1": { en: "Membership-grade care,", fa: "مراقبتی در سطح عضویت ویژه،", ar: "رعاية بمستوى العضوية،" },
  "prog.title2": { en: " built around your life.", fa: " طراحی‌شده گرد زندگی شما.", ar: " مصممة حول حياتك." },
  "prog.intro": {
    en: "Four signature programs designed for executives, founders and wellness-conscious individuals across the GCC.",
    fa: "چهار برنامه ویژه برای مدیران، بنیان‌گذاران و افراد سلامت‌محور در سراسر کشورهای حاشیه خلیج فارس.",
    ar: "أربعة برامج مميزة مصممة للمديرين والمؤسسين والمهتمين بالعافية في دول الخليج.",
  },
  "prog.enquire": { en: "Enquire", fa: "درخواست", ar: "استفسار" },

  "prog.1.tag": { en: "Signature", fa: "ویژه", ar: "مميز" },
  "prog.1.name": { en: "Executive Gut Health", fa: "سلامت گوارش مدیران", ar: "صحة الجهاز الهضمي التنفيذية" },
  "prog.1.price": { en: "From AED 4,800 / quarter", fa: "از ۴٬۸۰۰ درهم / فصل", ar: "من 4,800 درهم / ربع سنوي" },
  "prog.1.desc": {
    en: "A concierge digestive optimisation program with quarterly monitoring, advanced screenings, nutrition design and direct access to Dr. Katayoon.",
    fa: "برنامه اختصاصی بهینه‌سازی گوارش با پایش فصلی، غربالگری پیشرفته، طراحی تغذیه و دسترسی مستقیم به دکتر کتایون.",
    ar: "برنامج كونسيرج لتحسين الجهاز الهضمي مع متابعة فصلية وفحوصات متقدمة وتخطيط غذائي ووصول مباشر للدكتورة كتايون.",
  },
  "prog.1.p1": { en: "Quarterly diagnostic review", fa: "بررسی تشخیصی فصلی", ar: "مراجعة تشخيصية فصلية" },
  "prog.1.p2": { en: "Personalised nutrition plan", fa: "برنامه تغذیه اختصاصی", ar: "خطة تغذية شخصية" },
  "prog.1.p3": { en: "Preventive liver assessment", fa: "ارزیابی پیشگیرانه کبد", ar: "تقييم وقائي للكبد" },
  "prog.1.p4": { en: "VIP consultations", fa: "مشاوره ویژه VIP", ar: "استشارات VIP" },

  "prog.2.tag": { en: "Reset", fa: "بازنشانی", ar: "إعادة ضبط" },
  "prog.2.name": { en: "Gut Reset Program", fa: "برنامه بازنشانی گوارش", ar: "برنامج إعادة ضبط الأمعاء" },
  "prog.2.price": { en: "From AED 2,200", fa: "از ۲٬۲۰۰ درهم", ar: "من 2,200 درهم" },
  "prog.2.desc": {
    en: "Designed for chronic bloating, IBS and food intolerance — a structured 6-week reset with clear, measurable outcomes.",
    fa: "طراحی‌شده برای نفخ مزمن، IBS و عدم تحمل غذایی — بازنشانی ۶ هفته‌ای ساختاریافته با نتایج روشن و قابل اندازه‌گیری.",
    ar: "مصمم للانتفاخ المزمن والقولون العصبي وعدم تحمل الطعام — إعادة ضبط منظمة على مدى 6 أسابيع بنتائج قابلة للقياس.",
  },
  "prog.2.p1": { en: "IBS subtype assessment", fa: "ارزیابی زیرنوع IBS", ar: "تقييم نوع القولون" },
  "prog.2.p2": { en: "Microbiome guidance", fa: "راهنمایی میکروبیوم", ar: "إرشادات الميكروبيوم" },
  "prog.2.p3": { en: "Nutrition review", fa: "بازنگری تغذیه", ar: "مراجعة التغذية" },
  "prog.2.p4": { en: "Follow-up plan", fa: "برنامه پیگیری", ar: "خطة متابعة" },

  "prog.3.tag": { en: "Wellness", fa: "تندرستی", ar: "عافية" },
  "prog.3.name": { en: "Liver Wellness Program", fa: "برنامه سلامت کبد", ar: "برنامج عافية الكبد" },
  "prog.3.price": { en: "From AED 2,800", fa: "از ۲٬۸۰۰ درهم", ar: "من 2,800 درهم" },
  "prog.3.desc": {
    en: "Modern hepatology care with FibroScan elastography and metabolic screening — early clarity for long-term liver health.",
    fa: "مراقبت مدرن کبد با فیبرواسکن و غربالگری متابولیک — وضوح زودهنگام برای سلامت بلندمدت کبد.",
    ar: "رعاية حديثة للكبد مع الفيبروسكان والفحوصات الأيضية — وضوح مبكر لصحة الكبد على المدى الطويل.",
  },
  "prog.3.p1": { en: "FibroScan elastography", fa: "فیبرواسکن", ar: "فيبروسكان" },
  "prog.3.p2": { en: "Fatty liver evaluation", fa: "ارزیابی کبد چرب", ar: "تقييم الكبد الدهني" },
  "prog.3.p3": { en: "Metabolic screening", fa: "غربالگری متابولیک", ar: "فحص أيضي" },
  "prog.3.p4": { en: "Lifestyle optimisation", fa: "بهینه‌سازی سبک زندگی", ar: "تحسين نمط الحياة" },

  "prog.4.tag": { en: "Longevity", fa: "طول عمر", ar: "طول العمر" },
  "prog.4.name": { en: "Executive Screening", fa: "غربالگری مدیران", ar: "الفحص التنفيذي" },
  "prog.4.price": { en: "From AED 5,500", fa: "از ۵٬۵۰۰ درهم", ar: "من 5,500 درهم" },
  "prog.4.desc": {
    en: "Preventive endoscopy and colonoscopy under one calm, premium experience — designed around your schedule.",
    fa: "آندوسکوپی و کولونوسکوپی پیشگیرانه در یک تجربه آرام و لوکس — منطبق با برنامه شما.",
    ar: "تنظير وقائي علوي وقولوني ضمن تجربة هادئة وراقية — مصممة وفق جدولك.",
  },
  "prog.4.p1": { en: "Upper endoscopy", fa: "آندوسکوپی فوقانی", ar: "تنظير علوي" },
  "prog.4.p2": { en: "Colonoscopy", fa: "کولونوسکوپی", ar: "تنظير القولون" },
  "prog.4.p3": { en: "Preventive diagnostics", fa: "تشخیص پیشگیرانه", ar: "تشخيص وقائي" },
  "prog.4.p4": { en: "Advanced consultation", fa: "مشاوره پیشرفته", ar: "استشارة متقدمة" },

  // Experience
  "xp.kicker": { en: "The Experience", fa: "تجربه", ar: "التجربة" },
  "xp.title1": { en: "A patient journey designed like", fa: "سفری برای بیمار، طراحی‌شده مانند", ar: "رحلة المريض، مصممة كأنها" },
  "xp.title2": { en: " a private atelier.", fa: " یک آتلیه خصوصی.", ar: " أتيليه خاص." },
  "xp.1.t": { en: "Listen", fa: "گوش دادن", ar: "الإصغاء" },
  "xp.1.d": {
    en: "A calm, unhurried conversation. We understand your story before suggesting anything clinical.",
    fa: "گفت‌وگویی آرام و بی‌شتاب. ابتدا داستان شما را می‌فهمیم، سپس درمان را پیشنهاد می‌دهیم.",
    ar: "محادثة هادئة وغير مستعجلة. نفهم قصتك أولاً قبل اقتراح أي خطوة طبية.",
  },
  "xp.2.t": { en: "Investigate", fa: "بررسی", ar: "الفحص" },
  "xp.2.d": {
    en: "Advanced diagnostics — endoscopy, colonoscopy, FibroScan, microbiome and metabolic panels — chosen with intent.",
    fa: "تشخیص پیشرفته — آندوسکوپی، کولونوسکوپی، فیبرواسکن، میکروبیوم و پنل‌های متابولیک — با هدفی روشن.",
    ar: "تشخيصات متقدمة — تنظير، فيبروسكان، ميكروبيوم وتحاليل أيضية — مختارة بعناية.",
  },
  "xp.3.t": { en: "Design", fa: "طراحی", ar: "التخطيط" },
  "xp.3.d": {
    en: "A personalised, written plan in your language: English, Persian or Arabic.",
    fa: "برنامه‌ای مکتوب و اختصاصی به زبان شما: انگلیسی، فارسی یا عربی.",
    ar: "خطة مكتوبة وشخصية بلغتك: الإنجليزية أو الفارسية أو العربية.",
  },
  "xp.4.t": { en: "Accompany", fa: "همراهی", ar: "المرافقة" },
  "xp.4.d": {
    en: "Ongoing care, follow-ups and direct messaging — so you never feel alone in the process.",
    fa: "مراقبت مستمر، پیگیری و پیام مستقیم — تا هرگز در این مسیر تنها نباشید.",
    ar: "رعاية مستمرة ومتابعة وتواصل مباشر — لتشعر دائماً بأنك لست وحدك.",
  },

  // Insights
  "ins.kicker": { en: "Health Insights", fa: "بینش‌های سلامت", ar: "رؤى صحية" },
  "ins.title1": { en: "Quiet wisdom, written", fa: "حکمتی آرام، نوشته‌شده", ar: "حكمة هادئة، مكتوبة" },
  "ins.title2": { en: " with care.", fa: " با دقت.", ar: " بعناية." },
  "ins.read": { en: "Read", fa: "مطالعه", ar: "اقرأ" },
  "ins.1.t": { en: "The five myths about IBS that delay healing", fa: "پنج باور غلط درباره IBS که درمان را به تأخیر می‌اندازند", ar: "خمس خرافات عن القولون تؤخر الشفاء" },
  "ins.2.t": { en: "Why fatty liver is the silent epidemic of Dubai's executives", fa: "چرا کبد چرب اپیدمی خاموش مدیران دبی است", ar: "لماذا الكبد الدهني وباء صامت بين مديري دبي" },
  "ins.3.t": { en: "Menopause, hormones and the gut — what changes after 45", fa: "یائسگی، هورمون و گوارش — چه چیزی بعد از ۴۵ سالگی تغییر می‌کند", ar: "انقطاع الطمث والهرمونات والأمعاء — ما الذي يتغير بعد الـ45" },
  "ins.4.t": { en: "Colon cancer screening: the modern, painless reality", fa: "غربالگری سرطان روده: واقعیت مدرن و بدون درد", ar: "فحص سرطان القولون: واقع حديث وبلا ألم" },
  "ins.min": { en: "min read", fa: "دقیقه مطالعه", ar: "دقائق قراءة" },

  // Testimonials
  "tst.kicker": { en: "In Their Words", fa: "به زبان آن‌ها", ar: "بكلماتهم" },
  "tst.title1": { en: "Care that quietly", fa: "مراقبتی که در سکوت", ar: "رعاية تغيّر الحياة" },
  "tst.title2": { en: " changes lives.", fa: " زندگی‌ها را تغییر می‌دهد.", ar: " بهدوء." },
  "tst.1.q": {
    en: "For the first time in years I felt heard. Dr. Katayoon explained my IBS with a clarity no one ever offered me.",
    fa: "برای اولین بار پس از سال‌ها احساس کردم شنیده می‌شوم. دکتر کتایون IBS مرا با وضوحی توضیح داد که هیچ‌کس قبلاً نتوانسته بود.",
    ar: "للمرة الأولى منذ سنوات شعرت بأنني مسموعة. شرحت لي الدكتورة كتايون حالتي بوضوح لم أجده عند غيرها.",
  },
  "tst.2.q": {
    en: "Quiet, precise and deeply human. The entire experience felt closer to a private wellness atelier than a clinic.",
    fa: "آرام، دقیق و عمیقاً انسانی. تمام تجربه بیشتر شبیه یک آتلیه خصوصی تندرستی بود تا یک کلینیک.",
    ar: "هادئة، دقيقة وإنسانية عميقاً. التجربة كلها تشبه أتيليه عافية خاصاً أكثر من عيادة.",
  },
  "tst.3.q": {
    en: "She caught my fatty liver early. Two years later my numbers are perfect. I am genuinely grateful.",
    fa: "کبد چرب من را زود تشخیص داد. دو سال بعد، نتایجم عالی است. واقعاً سپاسگزارم.",
    ar: "اكتشفت الكبد الدهني مبكراً. وبعد عامين أصبحت نتائجي مثالية. أنا ممتن حقاً.",
  },

  // Booking
  "bk.kicker": { en: "Booking", fa: "نوبت‌گیری", ar: "الحجز" },
  "bk.title1": { en: "Begin with a", fa: "آغاز با", ar: "ابدأ بـ" },
  "bk.title2": { en: " conversation.", fa: " یک گفت‌وگو.", ar: " محادثة." },
  "bk.intro": {
    en: "In-person at Dubai London Hospital, or a private video consultation from anywhere in the world. English, Persian or Arabic — whichever feels most like home.",
    fa: "حضوری در بیمارستان دبی لندن، یا مشاوره ویدئویی خصوصی از هر نقطه‌ای از جهان. به انگلیسی، فارسی یا عربی — هر زبانی که برایتان آشناتر است.",
    ar: "حضورياً في مستشفى دبي لندن، أو استشارة فيديو خاصة من أي مكان. بالإنجليزية أو الفارسية أو العربية — اللغة التي تشعرك بالراحة.",
  },
  "bk.fastest": { en: "Fastest", fa: "سریع‌ترین", ar: "الأسرع" },
  "bk.wa": { en: "WhatsApp the clinic", fa: "واتس‌اپ کلینیک", ar: "واتساب العيادة" },
  "bk.direct": { en: "Direct", fa: "مستقیم", ar: "مباشر" },
  "bk.call": { en: "Call reception", fa: "تماس با پذیرش", ar: "اتصل بالاستقبال" },
  "bk.req": { en: "Request an appointment", fa: "درخواست نوبت", ar: "اطلب موعداً" },
  "bk.respond": { en: "We respond personally within one business day.", fa: "ظرف یک روز کاری پاسخ شخصی می‌دهیم.", ar: "نرد شخصياً خلال يوم عمل واحد." },
  "bk.name": { en: "Full name", fa: "نام کامل", ar: "الاسم الكامل" },
  "bk.name.ph": { en: "Your name", fa: "نام شما", ar: "اسمك" },
  "bk.email": { en: "Email", fa: "ایمیل", ar: "البريد الإلكتروني" },
  "bk.phone": { en: "Phone / WhatsApp", fa: "تلفن / واتس‌اپ", ar: "الهاتف / واتساب" },
  "bk.consult": { en: "Consultation", fa: "نوع مشاوره", ar: "الاستشارة" },
  "bk.lang": { en: "Language", fa: "زبان", ar: "اللغة" },
  "bk.help": { en: "Briefly, how can we help?", fa: "به‌اختصار، چگونه می‌توانیم کمک کنیم؟", ar: "باختصار، كيف يمكننا المساعدة؟" },
  "bk.help.ph": { en: "Symptoms, history, or the program that interests you.", fa: "علائم، سابقه یا برنامه‌ای که علاقه‌مندید.", ar: "الأعراض، التاريخ المرضي، أو البرنامج الذي يهمك." },
  "bk.submit": { en: "Request appointment", fa: "درخواست نوبت", ar: "اطلب الموعد" },
  "bk.thanks": { en: "Thank you — we'll be in touch.", fa: "سپاسگزاریم — به‌زودی با شما تماس می‌گیریم.", ar: "شكراً لك — سنتواصل قريباً." },
  "bk.inperson": { en: "In-person", fa: "حضوری", ar: "حضوري" },
  "bk.video": { en: "Video", fa: "ویدئویی", ar: "فيديو" },
  "bk.second": { en: "Second opinion", fa: "نظر دوم", ar: "رأي ثانٍ" },
  "bk.lang.en": { en: "English", fa: "انگلیسی", ar: "الإنجليزية" },
  "bk.lang.fa": { en: "Persian", fa: "فارسی", ar: "الفارسية" },
  "bk.lang.ar": { en: "Arabic", fa: "عربی", ar: "العربية" },

  // Location
  "loc.kicker": { en: "Location", fa: "مکان", ar: "الموقع" },
  "loc.title1": { en: "In the quiet heart of", fa: "در قلب آرام", ar: "في قلب" },
  "loc.title2": { en: " Dubai.", fa: " دبی.", ar: " دبي الهادئ." },
  "loc.p": {
    en: "Dubai London Hospital & Clinic — a calm, contemporary setting designed for advanced care without the institutional feel.",
    fa: "بیمارستان و کلینیک دبی لندن — فضایی آرام و معاصر، طراحی‌شده برای مراقبت پیشرفته بدون حس کلینیکی.",
    ar: "مستشفى وعيادة دبي لندن — بيئة هادئة وعصرية للرعاية المتقدمة بعيداً عن الطابع المؤسسي.",
  },
  "loc.clinic": { en: "Clinic", fa: "کلینیک", ar: "العيادة" },
  "loc.clinic.v": { en: "Dubai London Hospital", fa: "بیمارستان دبی لندن", ar: "مستشفى دبي لندن" },
  "loc.area": { en: "Area", fa: "منطقه", ar: "المنطقة" },
  "loc.area.v": { en: "Al Wasl Road, Jumeirah · Dubai", fa: "خیابان الوصل، جمیرا · دبی", ar: "شارع الوصل، جميرا · دبي" },
  "loc.hours": { en: "Hours", fa: "ساعات", ar: "الساعات" },
  "loc.hours.v": { en: "Sun – Thu · 10:00 – 19:00", fa: "یکشنبه تا پنجشنبه · ۱۰:۰۰ – ۱۹:۰۰", ar: "الأحد – الخميس · 10:00 – 19:00" },
  "loc.lang": { en: "Languages", fa: "زبان‌ها", ar: "اللغات" },
  "loc.lang.v": { en: "English · Persian · Arabic", fa: "انگلیسی · فارسی · عربی", ar: "الإنجليزية · الفارسية · العربية" },
  "loc.dir": { en: "Directions →", fa: "مسیریابی →", ar: "الاتجاهات →" },

  // Footer
  "ft.role": { en: "Specialist Gastroenterologist & Hepatologist · Dubai", fa: "متخصص گوارش و کبد · دبی", ar: "استشارية أمراض الجهاز الهضمي والكبد · دبي" },
  "ft.practice": { en: "Practice", fa: "مطب", ar: "الممارسة" },
  "ft.contact": { en: "Contact", fa: "تماس", ar: "التواصل" },
  "ft.languages": { en: "Languages", fa: "زبان‌ها", ar: "اللغات" },
  "ft.rights": { en: "All rights reserved.", fa: "تمامی حقوق محفوظ است.", ar: "جميع الحقوق محفوظة." },
} satisfies Dict;

export type TKey = keyof typeof dict;

const Ctx = createContext<{ lang: Lang; setLang: (l: Lang) => void; t: (k: TKey) => string; dir: "ltr" | "rtl" } | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const saved = (typeof window !== "undefined" && localStorage.getItem("lang")) as Lang | null;
    if (saved && LANGS.some((l) => l.code === saved)) setLangState(saved);
  }, []);

  useEffect(() => {
    const meta = LANGS.find((l) => l.code === lang)!;
    document.documentElement.lang = lang;
    document.documentElement.dir = meta.dir;
    document.documentElement.dataset.lang = lang;
    localStorage.setItem("lang", lang);
  }, [lang]);

  const setLang = (l: Lang) => setLangState(l);
  const t = (k: TKey) => dict[k][lang];
  const dir = LANGS.find((l) => l.code === lang)!.dir;

  return <Ctx.Provider value={{ lang, setLang, t, dir }}>{children}</Ctx.Provider>;
}

export function useT() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useT outside LanguageProvider");
  return ctx;
}

const FA_DIGITS = ["۰","۱","۲","۳","۴","۵","۶","۷","۸","۹"];
const AR_DIGITS = ["٠","١","٢","٣","٤","٥","٦","٧","٨","٩"];
export function localizeDigits(input: string | number, lang: Lang): string {
  const str = String(input);
  if (lang === "fa") return str.replace(/[0-9]/g, (d) => FA_DIGITS[+d]);
  if (lang === "ar") return str.replace(/[0-9]/g, (d) => AR_DIGITS[+d]);
  return str;
}

