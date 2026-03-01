import { Comparison } from "@/components/home/comparison";
import { FaqAccordion } from "@/components/home/faq";
import { FinalCta } from "@/components/home/cta";
import { Footer } from "@/components/home/footer";
import { Hero } from "@/components/home/hero";
import { Marquee } from "@/components/home/marquee";
import { Navbar } from "@/components/home/navbar";
import { Pillars } from "@/components/home/pillars";
import { ProcessTimeline } from "@/components/home/timeline";
import { RoiCalculator } from "@/components/home/roi-calculator";
import { Testimonials } from "@/components/home/testimonials";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Marquee />
      <Pillars />
      <Comparison />
      <ProcessTimeline />
      <RoiCalculator />
      <Testimonials />
      <FaqAccordion />
      <FinalCta />
      <Footer />
    </main>
  );
}
