import React, { useEffect, useRef, useState } from "react";
import { Brain, Zap, Shield, Cpu, TrendingUp, Users } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Custom AI Models",
    description:
      "Tailored machine learning solutions designed specifically for your business challenges, trained on your data, and optimized for your workflows.",
  },
  {
    icon: Zap,
    title: "Automatic Lead Follow-Up",
    description:
      "Never lose another potential customer again. Our system responds instantly to every inquiry, 24/7.",
  },
  {
    icon: Shield,
    title: "Smarter Lead Nurturing",
    description:
      "Keep past leads warm and engaged automatically with personalized, timely communications.",
  },
  {
    icon: Cpu,
    title: "Higher Conversion Rates",
    description:
      "Reach the right people at the right time, every time. Turn more leads into paying customers.",
  },
  {
    icon: TrendingUp,
    title: "Save Hours Every Week",
    description:
      "Free your team from repetitive tasks. Focus on what matters while automation handles the rest.",
  },
  {
    icon: Users,
    title: "Better Customer Experience",
    description:
      "Faster responses, happier clients. Deliver exceptional service without lifting a finger.",
  },
];

function FeatureCard({ feature, index }) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const Icon = feature.icon;

  return (
    <div
      ref={cardRef}
      className={`group relative p-8 border border-black/10 hover:border-black/30 rounded-2xl transition-all duration-500 hover:shadow-xl ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Hover effect overlay */}
      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-[0.02] rounded-2xl transition-opacity duration-300" />

      <div className="relative">
        <div className="w-14 h-14 rounded-xl bg-black/5 flex items-center justify-center mb-6 group-hover:bg-black group-hover:scale-110 transition-all duration-300">
          <Icon className="w-7 h-7 text-black group-hover:text-white transition-colors duration-300" />
        </div>

        <h3 className="text-2xl font-bold text-black mb-3 tracking-tight">
          {feature.title}
        </h3>

        <p className="text-black/60 leading-relaxed font-light">
          {feature.description}
        </p>
      </div>
    </div>
  );
}

export default function FeaturesSection() {
  return (
    <section className="py-32 px-6 bg-gradient-to-b from-white to-black/[0.02]">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 rounded-full border border-black/10 bg-white mb-6">
            <span className="text-sm font-medium uppercase tracking-wider">
              Solutions
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-6 tracking-tight">
            What Happens When Your Business Runs{" "}
          </h2>
          <p className="text-xl text-black/60 max-w-2xl mx-auto font-light">
            Smarter Experience the transformation when AI takes over your
            routine tasks
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
