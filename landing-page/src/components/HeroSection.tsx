import React from "react";
import { Phone, PlayCircle } from "lucide-react";
import ChatAnimation from "./ChatAnimation";
import StatsCounter from "./StatsCounter";

const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20">
      {/* Background Gradients */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* New Feature Badge */}
        <div className="inline-flex items-center bg-blue-600/20 text-blue-300 px-4 py-2 rounded-full text-sm mb-8 border border-blue-500/30">
          <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs ml-2">
            חדש
          </span>
          ממזכירה AI עם תמיכה בוואטסאפ והודעות
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
            קבעו תורים בקלות
          </span>
          <br />
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            הבוט שדואג ללקוחות שלך 24/7
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          הבוט שלנו מנהל שיחות בווצאפ עם הלקוחות, קובע תורים, עונה לשאלות וחוסך
          לך זמן – בכל תחום, בכל שעה.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
          <button className="bg-white text-gray-900 px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-all transform hover:scale-105 flex items-center">
            <Phone className="w-5 h-5 ml-2" />
            התחל בחינם
          </button>
          <button className="text-white border border-gray-600 px-8 py-4 rounded-lg font-medium hover:border-gray-400 transition-colors flex items-center">
            <PlayCircle className="w-5 h-5 ml-2" />
            צפה בהדגמה
          </button>
        </div>
        <ChatAnimation />
        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-blue-400">
              <StatsCounter end={99.9} suffix="%" />
            </div>
            <div className="text-gray-400">זמינות</div>
          </div>
          <div className="text-center">
            <div className="text-purple-400 text-3xl font-bold">24/7</div>
            <div className="text-gray-400">שירות</div>
          </div>
          <div className="text-center">
            <div className="text-green-400">
              <StatsCounter end={56} suffix="+" />
            </div>
            <div className="text-gray-400">עסקים</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
