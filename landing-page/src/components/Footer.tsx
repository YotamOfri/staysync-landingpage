import React from "react";
import { Brain } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 space-x-reverse mb-4 gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-0">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">עוזר אישי AI</span>
            </div>
            <p className="text-gray-400 mb-4">
              העוזר האישי הדיגיטלי המתקדם ביותר לעסק שלך
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold mb-4">מוצר</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  תכונות
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  מחירים
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  אינטגרציות
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  API
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">תמיכה</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  מרכז עזרה
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  צור קשר
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  סטטוס המערכת
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  עדכונים
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">החברה</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  אודות
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  בלוג
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  קריירה
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  פרטיות
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 StaySync. כל הזכויות שמורות.
          </p>
          <div className="flex items-center space-x-4 space-x-reverse mt-4 md:mt-0 gap-4">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              תנאי שימוש
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              מדיניות פרטיות
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
