import React from "react";
import { Star } from "lucide-react";

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">מה הלקוחות שלנו אומרים</h2>
          <p className="text-gray-400 text-lg">
            אלפי עסקים כבר סומכים על הממזכירה AI שלנו
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700/50">
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 text-yellow-400 fill-current"
                />
              ))}
            </div>
            <p className="text-gray-300 mb-6">
              "הממזכירה AI שינתה לנו את העסק! הלקוחות מקבלים מענה מיידי
              בוואטסאפ ובטלפון, ואנחנו כבר לא מפסידים שיחות."
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center ml-4">
                <span className="text-white font-bold">ד.כ</span>
              </div>
              <div>
                <div className="font-medium">דני כהן</div>
                <div className="text-gray-400 text-sm">מנכ"ל, כהן ושות'</div>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700/50">
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 text-yellow-400 fill-current"
                />
              ))}
            </div>
            <p className="text-gray-300 mb-6">
              "המערכת קלה לשימוש והלקוחות אוהבים לקבוע תורים בוואטסאפ. חוסכת
              לנו המון זמן ועלויות."
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center ml-4">
                <span className="text-white font-bold">ש.ל</span>
              </div>
              <div>
                <div className="font-medium">שרה לוי</div>
                <div className="text-gray-400 text-sm">בעלת מרפאה</div>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700/50">
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 text-yellow-400 fill-current"
                />
              ))}
            </div>
            <p className="text-gray-300 mb-6">
              "הטכנולוגיה המתקדמת ביותר שראיתי. הממזכירה AI מנהלת שיחות טבעיות
              ומקצועיות יותר מממזכירה אנושית!"
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center ml-4">
                <span className="text-white font-bold">מ.ר</span>
              </div>
              <div>
                <div className="font-medium">מיכאל רוזן</div>
                <div className="text-gray-400 text-sm">
                  מנהל משרד עורכי דין
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
