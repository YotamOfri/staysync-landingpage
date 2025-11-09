import React, { useEffect, useState, useRef } from "react";
import { ArrowRight, Sparkles } from "lucide-react";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden"
    >
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />

      {/* Cursor-following orb */}
      <div
        className="absolute w-[500px] h-[500px] bg-black opacity-[0.04] rounded-full blur-3xl pointer-events-none"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: "translate(-50%, -50%)",
          transition: "left 0.3s ease-out, top 0.3s ease-out",
        }}
      />

      {/* Static animated orb */}
      <div
        className="absolute bottom-20 left-20 w-96 h-96 bg-black opacity-[0.02] rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      <div
        className={`relative max-w-6xl mx-auto text-center transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Floating badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/10 bg-white/50 backdrop-blur-sm mb-8 shadow-sm">
          <Sparkles className="w-4 h-4" />
          <span className="text-sm font-medium tracking-wide">
            Enterprise AI Solutions
          </span>
        </div>

        {/* Main headline */}
        <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-8 leading-[0.9]">
          <span className="block text-black">Run Your Business Smoothly</span>
          <span className="block text-black mt-2">with Less Effort</span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-black/60 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
          We build smart systems that manage your leads, engage customers, and
          keep your business running - even when you're not working.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="bg-black hover:bg-black/90 text-white px-8 py-6 text-lg rounded-full group transition-all duration-300 hover:shadow-2xl hover:scale-105">
            Schedule Demo
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            // variant="outline"
            className="border-2 border-black/20 hover:border-black hover:bg-black hover:text-white px-8 py-6 text-lg rounded-full transition-all duration-300"
          >
            View Case Studies
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 md:gap-16 max-w-3xl mx-auto mt-20 pt-20 border-t border-black/10">
          <div>
            <div className="text-4xl md:text-5xl font-bold text-black mb-2">
              98%
            </div>
            <div className="text-sm text-black/50 uppercase tracking-wider font-medium">
              Client Retention
            </div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold text-black mb-2">
              $50M+
            </div>
            <div className="text-sm text-black/50 uppercase tracking-wider font-medium">
              Revenue Generated
            </div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold text-black mb-2">
              150+
            </div>
            <div className="text-sm text-black/50 uppercase tracking-wider font-medium">
              Enterprise Clients
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
