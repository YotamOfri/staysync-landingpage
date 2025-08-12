import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-gray-800 flex flex-col md:flex-row justify-between items-center">
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
