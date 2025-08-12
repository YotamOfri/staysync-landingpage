import React, { useState } from "react";
import { Brain, Menu, X, Phone } from "lucide-react";
import Logo from "@/assets/StaysyncLogo.svg";

interface NavigationProps {
  scrolled: boolean;
}

const Navigation: React.FC<NavigationProps> = ({ scrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    // Close mobile menu if open
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 border  ${
        scrolled
          ? "bg-gray-900/20 backdrop-blur-md border-gray-800"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              {/* <Brain className="w-5 h-5 text-white" /> */}
              <img className="rounded-md" src={Logo} alt="" />
            </div>
            <span className="text-xl font-bold">StaySync</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#product"
              onClick={(e) => handleNavClick(e, "product")}
              className="text-gray-300 hover:text-white transition-colors"
            >
              מוצר
            </a>
            <a
              href="#features"
              onClick={(e) => handleNavClick(e, "features")}
              className="text-gray-300 hover:text-white transition-colors"
            >
              תכונות
            </a>
            <a
              href="#pricing"
              onClick={(e) => handleNavClick(e, "pricing")}
              className="text-gray-300 hover:text-white transition-colors"
            >
              מחירים
            </a>
            <a
              href="#about"
              onClick={(e) => handleNavClick(e, "about")}
              className="text-gray-300 hover:text-white transition-colors"
            >
              אודות
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "contact")}
              className="text-gray-300 hover:text-white transition-colors"
            >
              צור קשר
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <button className="bg-white text-gray-900 px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center gap-2">
              <Phone className="w-4 h-4" />
              התחל בחינם
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-800 py-4">
            <div className="flex flex-col space-y-4">
              <a
                href="#product"
                onClick={(e) => handleNavClick(e, "product")}
                className="text-gray-300 hover:text-white transition-colors"
              >
                מוצר
              </a>
              <a
                href="#features"
                onClick={(e) => handleNavClick(e, "features")}
                className="text-gray-300 hover:text-white transition-colors"
              >
                תכונות
              </a>
              <a
                href="#pricing"
                onClick={(e) => handleNavClick(e, "pricing")}
                className="text-gray-300 hover:text-white transition-colors"
              >
                מחירים
              </a>
              <a
                href="#about"
                onClick={(e) => handleNavClick(e, "about")}
                className="text-gray-300 hover:text-white transition-colors"
              >
                אודות
              </a>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "contact")}
                className="text-gray-300 hover:text-white transition-colors"
              >
                צור קשר
              </a>
              <div className="pt-4 border-t border-gray-800">
                <button className="w-full bg-white text-gray-900 px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
                  <Phone className="w-4 h-4" />
                  התחל בחינם
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
