import React from "react";
import { Check } from "lucide-react";

const PricingSection: React.FC = () => {
  return (
    <section id="pricing" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">תוכניות מחיר פשוטות</h2>
          <p className="text-gray-400 text-lg">
            בחר את התוכנית המתאימה לעסק שלך
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Basic Plan */}
          <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700/50">
            <h3 className="text-xl font-bold mb-4">תוכנית בסיסית</h3>
            <div className="text-4xl font-bold mb-6">
              ₪299 <span className="text-lg text-gray-400">/חודש</span>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <Check className="w-5 h-5 text-green-400 ml-3" />
                עד 500 שיחות בחודש
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-green-400 ml-3" />
                מענה אוטומטי 24/7
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-green-400 ml-3" />
                וואטסאפ והודעות
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-green-400 ml-3" />
                תמיכה בצ'אט
              </li>
            </ul>
            <button className="w-full bg-gray-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-600 transition-colors">
              התחל עכשיו
            </button>
          </div>

          {/* Pro Plan */}
          <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 p-8 rounded-2xl border border-blue-500/50 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-2 rounded-full text-sm font-medium">
                הכי פופולרי
              </span>
            </div>
            <h3 className="text-xl font-bold mb-4">תוכנית מקצועית</h3>
            <div className="text-4xl font-bold mb-6">
              ₪599 <span className="text-lg text-gray-400">/חודש</span>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <Check className="w-5 h-5 text-green-400 ml-3" />
                עד 2,000 שיחות בחודש
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-green-400 ml-3" />
                כל התכונות הבסיסיות
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-green-400 ml-3" />
                אינטגרציות מתקדמות
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-green-400 ml-3" />
                דוחות ואנליטיקה
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-green-400 ml-3" />
                תמיכה טלפונית
              </li>
            </ul>
            <button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-600 hover:to-purple-600 transition-all">
              התחל עכשיו
            </button>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700/50">
            <h3 className="text-xl font-bold mb-4">תוכנית ארגונית</h3>
            <div className="text-4xl font-bold mb-6">
              ₪1,199 <span className="text-lg text-gray-400">/חודש</span>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <Check className="w-5 h-5 text-green-400 ml-3" />
                שיחות ללא הגבלה
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-green-400 ml-3" />
                כל התכונות המתקדמות
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-green-400 ml-3" />
                התאמה אישית מלאה
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-green-400 ml-3" />
                מנהל לקוחות ייעודי
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-green-400 ml-3" />
                SLA מובטח
              </li>
            </ul>
            <button className="w-full bg-gray-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-600 transition-colors">
              צור קשר
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
