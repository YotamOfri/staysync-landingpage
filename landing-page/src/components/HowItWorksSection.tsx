import React from "react";

const HowItWorksSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">איך זה עובד?</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            התקנה פשוטה בשלושה שלבים והעוזר האישי AI מוכן לעבודה
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-bold text-white">1</span>
            </div>
            <h3 className="text-xl font-bold mb-4">התאמה אישית</h3>
            <p className="text-gray-400">
              אנחנו מספקים לעוזר האישי AI את המידע על העסק שלך ואת סוגי השירותים
            </p>
          </div>

          {/* Step 2 */}
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-bold text-white">2</span>
            </div>
            <h3 className="text-xl font-bold mb-4">התקנה</h3>
            <p className="text-gray-400">
              אנחנו מחברים את העוזר האישי לפלטפורמות בהן העסק שלכם מתנהל מול
              לקוחות וליומן שלכם
            </p>
          </div>

          {/* Step 3 */}
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-bold text-white">3</span>
            </div>
            <h3 className="text-xl font-bold mb-4">התחל לעבוד</h3>
            <p className="text-gray-400">
              העוזר האישי AI מוכן לענות על שיחות ולקבוע פגישות 24/7
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
