import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Story } from "@/components/site/Story";
import { Expertise } from "@/components/site/Expertise";
import { Programs } from "@/components/site/Programs";
import { Experience } from "@/components/site/Experience";
import { Insights } from "@/components/site/Insights";
import { Testimonials } from "@/components/site/Testimonials";
import { Booking } from "@/components/site/Booking";
import { Location } from "@/components/site/Location";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dr. Katayoon Homayoon — Gastroenterology & Hepatology, Dubai" },
      {
        name: "description",
        content:
          "Modern medicine. Human care. Specialist gastroenterology and liver care in Dubai with advanced diagnostics, preventive medicine and concierge programs.",
      },
      { property: "og:title", content: "Dr. Katayoon Homayoon — Modern Medicine. Human Care." },
      {
        property: "og:description",
        content: "Premium gastroenterology and hepatology in Dubai.",
      },
      { property: "og:type", content: "website" },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;1,9..144,300&family=Inter:wght@300;400;500;600&family=Vazirmatn:wght@300;400;500;600&family=Gulzar&family=Tajawal:wght@300;400;500;700&family=Reem+Kufi:wght@400;500;600&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative overflow-x-hidden bg-background text-foreground">
      <Nav />
      <Hero />
      <About />
      <Story />
      <Expertise />
      <Programs />
      <Experience />
      <Insights />
      <Testimonials />
      <Booking />
      <Location />
      <Footer />
    </main>
  );
}
