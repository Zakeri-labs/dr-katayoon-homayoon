import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Atelier } from "@/components/site/Atelier";
import { Story } from "@/components/site/Story";
import { Expertise } from "@/components/site/Expertise";
import { Programs } from "@/components/site/Programs";
import { Experience } from "@/components/site/Experience";
import { Insights } from "@/components/site/Insights";
import { Testimonials } from "@/components/site/Testimonials";
import { Booking } from "@/components/site/Booking";
import { Location } from "@/components/site/Location";
import { Footer } from "@/components/site/Footer";
import { ImageBand } from "@/components/site/ImageBand";
import drListening from "@/assets/dr-listening.jpg";
import drWindow from "@/assets/dr-window.jpg";
import drNotes from "@/assets/dr-notes.jpg";

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
        href: "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;1,9..144,300&family=Inter:wght@300;400;500;600&family=Vazirmatn:wght@300;400;500;600;700&family=Tajawal:wght@300;400;500;700&display=swap",
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
      <Atelier />
      <Story />
      <Expertise />
      <ImageBand
        src={drListening}
        alt="Dr. Katayoon Homayoon listening to a patient"
        kicker="In session"
        caption="Every consultation begins with listening — carefully, without rushing."
        align="left"
        aspect="square"
      />
      <Programs />
      <Experience />
      <ImageBand
        src={drWindow}
        alt="Dr. Katayoon Homayoon reviewing notes by a window overlooking Dubai"
        kicker="Between patients"
        caption="A quiet moment of reflection above the city she has practiced in for two decades."
        align="right"
        aspect="ultrawide"
      />
      <Insights />
      <Testimonials />
      <ImageBand
        src={drNotes}
        alt="Dr. Katayoon Homayoon writing clinical notes"
        kicker="Considered care"
        caption="Detailed notes, individualized plans — medicine practiced one patient at a time."
        align="center"
        aspect="wide"
      />
      <Booking />
      <Location />
      <Footer />
    </main>
  );
}
