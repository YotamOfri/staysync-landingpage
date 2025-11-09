import React from "react";
import { Mail, Linkedin, Twitter, Github } from "lucide-react";

export default function FooterSection() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-black/10 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="text-3xl font-bold mb-4 tracking-tight">
              AI Solutions
            </div>
            <p className="text-black/60 mb-6 font-light max-w-md">
              Empowering businesses with intelligent automation and data-driven
              insights through custom AI solutions.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-bold text-black mb-4 uppercase text-sm tracking-wider">
              Solutions
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-black/60 hover:text-black transition-colors font-light"
                >
                  Process Automation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-black/60 hover:text-black transition-colors font-light"
                >
                  Predictive Analytics
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-black/60 hover:text-black transition-colors font-light"
                >
                  Natural Language AI
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-black/60 hover:text-black transition-colors font-light"
                >
                  Computer Vision
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-black mb-4 uppercase text-sm tracking-wider">
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-black/60 hover:text-black transition-colors font-light"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-black/60 hover:text-black transition-colors font-light"
                >
                  Case Studies
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-black/60 hover:text-black transition-colors font-light"
                >
                  Partners
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-black/60 hover:text-black transition-colors font-light"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-black/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-black/50 font-light">
            © {currentYear} AI Solutions. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-sm text-black/50 hover:text-black transition-colors font-light"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-sm text-black/50 hover:text-black transition-colors font-light"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-sm text-black/50 hover:text-black transition-colors font-light"
            >
              Security
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
