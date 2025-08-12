import { useState, useEffect } from "react";
import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import HowItWorksSection from "./components/HowItWorksSection";
import IndustriesSection from "./components/IndustriesSection";
import TestimonialsSection from "./components/TestimonialsSection";
import StatsSection from "./components/StatsSection";
import PricingSection from "./components/PricingSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

import IntegrationsSection from "./components/IntegrationsSection";

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white" dir="rtl">
      <Navigation scrolled={scrolled} />
      <HeroSection />
      <IndustriesSection />
      <IntegrationsSection />
      <FeaturesSection />
      <HowItWorksSection />
      {/* <TestimonialsSection /> */}
      {/* <StatsSection /> */}
      {/* <PricingSection /> */}
      <CTASection />
      <Footer />
    </div>
  );
}

export default App;
