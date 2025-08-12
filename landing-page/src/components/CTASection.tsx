import React from "react";
import { Phone } from "lucide-react";

const CTASection: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">מוכן להתחיל?</h2>
        <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
          הצטרף לאלפי העסקים שכבר משתמשים בממזכירה AI והופכים כל שיחה ווואטסאפ
          להזדמנות
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-lg font-medium hover:from-blue-600 hover:to-purple-600 transition-all transform hover:scale-105 flex items-center">
            <Phone className="w-5 h-5 ml-2" />
            התחל ניסיון חינם של 30 יום
          </button>
          <button className="text-white border border-gray-600 px-8 py-4 rounded-lg font-medium hover:border-gray-400 transition-colors">
            הזמן הדגמה אישית
          </button>
        </div>

        <p className="text-gray-500 text-sm mt-6">
          ללא כרטיס אשראי • ביטול בכל עת • תמיכה בעברית
        </p>
      </div>
    </section>
  );
};

export default CTASection;
