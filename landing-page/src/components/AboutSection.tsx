import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-32 px-6 bg-black text-white relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="max-w-6xl mx-auto relative">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Header */}
          <div className="mb-16">
            <div className="inline-block px-4 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm mb-6">
              <span className="text-sm font-medium uppercase tracking-wider">
                Why Choose Us
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              Your Trusted AI Partner
            </h2>
          </div>

          {/* Content grid */}
          <div className="grid md:grid-cols-2 gap-16 mb-16">
            <div>
              <h3 className="text-2xl font-bold mb-4">Proven Expertise</h3>
              <p className="text-white/70 leading-relaxed mb-6 font-light text-lg">
                We've partnered with leading enterprises across healthcare,
                finance, retail, and manufacturing to deliver AI solutions that
                drive real ROI. Our team combines deep technical expertise with
                industry knowledge to solve your most complex challenges.
              </p>
              <p className="text-white/70 leading-relaxed font-light text-lg">
                From Fortune 500 companies to innovative startups, our clients
                trust us to deliver scalable, production-ready AI systems that
                transform their operations.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">Our Approach</h3>
              <p className="text-white/70 leading-relaxed mb-6 font-light text-lg">
                We don't believe in one-size-fits-all solutions. Every
                engagement begins with a deep understanding of your unique
                business context, challenges, and goals. We co-create solutions
                with your team, ensuring adoption and long-term success.
              </p>
              <p className="text-white/70 leading-relaxed font-light text-lg">
                Our agile methodology delivers value quickly, with continuous
                iteration based on real-world performance and your evolving
                needs.
              </p>
            </div>
          </div>

          {/* Trust indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 border-t border-white/10">
            <div>
              <div className="text-4xl font-bold mb-2">10+</div>
              <div className="text-sm text-white/50 uppercase tracking-wider font-medium">
                Years in AI
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">85+</div>
              <div className="text-sm text-white/50 uppercase tracking-wider font-medium">
                AI Engineers
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">300+</div>
              <div className="text-sm text-white/50 uppercase tracking-wider font-medium">
                Projects Delivered
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15</div>
              <div className="text-sm text-white/50 uppercase tracking-wider font-medium">
                Industries Served
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <Button
              size="lg"
              className="bg-white hover:bg-white/90 text-black px-8 py-6 text-lg rounded-full group transition-all duration-300 hover:shadow-2xl hover:scale-105"
            >
              Start Your AI Journey
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
