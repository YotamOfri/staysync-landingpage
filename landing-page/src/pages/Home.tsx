import { useState, useEffect } from "react";
import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import HowItWorksSection from "../components/HowItWorksSection";
import IndustriesSection from "../components/IndustriesSection";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";

import IntegrationsSection from "../components/IntegrationsSection";

function Home() {
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
      <CTASection />
      <Footer />
    </div>
  );
}

export default Home;
