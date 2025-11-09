import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Zap, Shield, Brain, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "../components/landing/Navbar";
import HeroSection from "../components/landing/HeroSection";
import FeaturesSection from "../components/landing/FeaturesSection";
import AboutSection from "../components/landing/AboutSection";
import FooterSection from "../components/landing/FooterSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <FooterSection />
    </div>
  );
}
