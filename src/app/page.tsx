import Hero from "@/components/Home/Hero";
import TrustSignals from "@/components/Home/TrustSignals";
import AboutSection from "@/components/Home/AboutSection";
import ServicesPreview from "@/components/Home/ServicesPreview";
import StatsSplit from "@/components/Home/StatsSplit";
import WhatWeProvide from "@/components/Home/WhatWeProvide";
import Testimonials from "@/components/Home/Testimonials";
import BottomCTA from "@/components/Home/BottomCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustSignals />
      <AboutSection />
      <ServicesPreview />
      <StatsSplit />
      <WhatWeProvide />
      <Testimonials />
      <BottomCTA />
    </main>
  );
}
