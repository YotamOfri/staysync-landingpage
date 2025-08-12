import React from "react";
import { Headphones, Building, Users, FileText } from "lucide-react";

const IndustriesSection: React.FC = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">מתאים לכל תחום</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            העוזר האישי AI שלנו משרת עסקים מכל התחומים
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Industry 1 */}
          <div className="text-center group">
            <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500/30 transition-colors">
              <Headphones className="w-8 h-8 text-blue-400" />
            </div>
            <h3 className="font-medium text-white">רפואה ובריאות</h3>
          </div>

          {/* Industry 2 */}
          <div className="text-center group">
            <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-500/30 transition-colors">
              <Building className="w-8 h-8 text-purple-400" />
            </div>
            <h3 className="font-medium text-white">משרדי עורכי דין</h3>
          </div>

          {/* Industry 3 */}
          <div className="text-center group">
            <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-green-500/30 transition-colors">
              <Users className="w-8 h-8 text-green-400" />
            </div>
            <h3 className="font-medium text-white">שירותים עסקיים</h3>
          </div>

          {/* Industry 4 */}
          <div className="text-center group">
            <div className="w-16 h-16 bg-yellow-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-500/30 transition-colors">
              <FileText className="w-8 h-8 text-yellow-400" />
            </div>
            <h3 className="font-medium text-white">ייעוץ ופיננסים</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
