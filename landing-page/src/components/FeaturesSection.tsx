import React from "react";
import {
  Phone,
  MessageCircle,
  Calendar,
  Users,
  BarChart3,
  Zap,
} from "lucide-react";

const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">תכונות מתקדמות לעסק שלך</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            טכנולוגיית בינה מלאכותית מתקדמת המספקת חוויית לקוח מושלמת
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all transform hover:scale-105">
            <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6">
              <Phone className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-xl font-bold mb-4">שימור לקוחות</h3>
            <p className="text-gray-400">
              הבוט יוזם שיחות עם לקוחות אחרי פגישה, שולח הצעות ומבצעים, ושומר
              אותך בתודעה שלהם לאורך זמן
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-purple-500/50 transition-all transform hover:scale-105">
            <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6">
              <MessageCircle className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-bold mb-4">וואטסאפ והודעות</h3>
            <p className="text-gray-400">
              מענה אוטומטי בוואטסאפ, SMS והודעות עם יכולות שיחה מתקדמות
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-green-500/50 transition-all transform hover:scale-105">
            <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-6">
              <Calendar className="w-6 h-6 text-green-400" />
            </div>
            <h3 className="text-xl font-bold mb-4">קביעת פגישות חכמה</h3>
            <p className="text-gray-400">
              תיאום פגישות אוטומטי עם היומן שלך, כולל שליחת תזכורות ללקוחות
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-yellow-500/50 transition-all transform hover:scale-105">
            <div className="w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center mb-6">
              <Users className="w-6 h-6 text-yellow-400" />
            </div>
            <h3 className="text-xl font-bold mb-4">ניהול לקוחות CRM</h3>
            <p className="text-gray-400">
              מעקב אוטומטי אחר כל הפניות והשיחות עם מידע מפורט על כל לקוח
            </p>
          </div>

          {/* Feature 5 */}
          <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-red-500/50 transition-all transform hover:scale-105">
            <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center mb-6">
              <BarChart3 className="w-6 h-6 text-red-400" />
            </div>
            <h3 className="text-xl font-bold mb-4">דוחות ואנליזה</h3>
            <p className="text-gray-400">
              מעקב בזמן אמת אחר ביצועים, זמני מענה ושביעות רצון לקוחות
            </p>
          </div>

          {/* Feature 6 */}
          <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-indigo-500/50 transition-all transform hover:scale-105">
            <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center mb-6">
              <Zap className="w-6 h-6 text-indigo-400" />
            </div>
            <h3 className="text-xl font-bold mb-4">אינטגרציות מתקדמות</h3>
            <p className="text-gray-400">
              התחברות קלה לכל המערכות הקיימות שלך - CRM, לוח שנה, ועוד
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
