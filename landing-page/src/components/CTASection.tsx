import React from "react";
import { Phone } from "lucide-react";
import { motion } from "framer-motion";

const CTASection: React.FC = () => {
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">מוכנים להתחיל?</h2>
        <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
          התחילו לייעל את העסק שלכם עם מזכירה AI – פתרון חכם לניהול שיחות
          ווואטסאפ
        </p>

        <div className="flex flex-col gap-4 justify-center items-center">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=brightops.b@gmail.com&su=ניסיון%20חינם%20במזכירה%20AI&body=שלום,%20אני%20מעוניין%20להתחיל%20ניסיון%20חינם."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-indigo-500 to-indigo-700 text-white/90 px-8 py-4 rounded-lg font-medium duration-200 flex items-center hover:scale-105"
          >
            <Phone
              className="w-5 h-5 ml-4"
              style={{ transform: "scaleX(-1)" }}
            />
            צור קשר כדי להתחיל ניסיון חינם של 30 ימים{" "}
          </a>
          <p className="text-sm text-gray-300 mt-2">
            או שלחו לנו מייל ל - brightops.b@gmail.com
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
