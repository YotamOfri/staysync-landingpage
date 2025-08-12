import React from "react";
import StatsCounter from "./StatsCounter";

const StatsSection: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">המספרים מדברים בעד עצמם</h2>
          <p className="text-gray-400 text-lg">
            תוצאות מרשימות שהלקוחות שלנו משיגים
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-blue-400 mb-2">
              <StatsCounter end={50000} suffix="+" />
            </div>
            <div className="text-gray-400">שיחות בחודש</div>
          </div>
          <div className="text-center">
            <div className="text-purple-400 mb-2">
              <StatsCounter end={95} suffix="%" />
            </div>
            <div className="text-gray-400">שביעות רצון</div>
          </div>
          <div className="text-center">
            <div className="text-green-400 mb-2">
              <StatsCounter end={3} suffix=" שניות" />
            </div>
            <div className="text-gray-400">זמן מענה ממוצע</div>
          </div>
          <div className="text-center">
            <div className="text-yellow-400 mb-2">
              <StatsCounter end={40} suffix="%" />
            </div>
            <div className="text-gray-400">חיסכון בעלויות</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
