import React from "react";
import { Home, ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="relative bg-gray-900 min-h-screen py-20 px-6 sm:px-10 lg:px-20 text-gray-300">
      {/* Background Gradients */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500/10 rounded-full blur-2xl"></div>
      </div>

      <div className="relative max-w-4xl mx-auto text-center flex flex-col justify-center items-center min-h-screen">
        {/* 404 Number */}
        <div className="mb-8">
          <h1 className="text-9xl md:text-[12rem] font-bold leading-none">
            <span className="bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
              4
            </span>
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              0
            </span>
            <span className="bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
              4
            </span>
          </h1>
        </div>

        {/* Main Message */}
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            הדף שחיפשת לא נמצא
          </span>
        </h2>

        {/* Subtitle */}
        <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          נראה שהדף שאתה מחפש לא קיים או שהוא עבר למיקום אחר. בוא נחזור לעמוד
          הבית ונמצא מה שאתה צריך.
        </p>

        {/* Floating Animation */}
        <div className="mb-12">
          <div className="relative">
            <div className="w-24 h-24 mx-auto bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center animate-pulse">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-60 animate-ping"></div>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
          <button
            onClick={() => (window.location.href = "/")}
            className="bg-indigo-400/85 text-white px-8 py-4 rounded-lg font-medium hover:bg-indigo-300/85 hover:cursor-pointer transition-all transform hover:scale-105 flex items-center duration-200 gap-2"
          >
            <Home className="w-5 h-5 ml-2" />
            <span>חזור לעמוד הבית</span>
          </button>
          <button
            onClick={() => window.history.back()}
            className="text-white border border-gray-600 px-8 py-4 rounded-lg font-medium hover:border-gray-400 transition-colors flex items-center hover:cursor-pointer hover:bg-white/5 duration-200 gap-2"
          >
            <ArrowRight className="w-5 h-5 ml-2" />
            <span>חזור לדף הקודם</span>
          </button>
        </div>

        {/* Decorative Elements */}
        <div className="grid grid-cols-3 gap-8 mt-16 max-w-lg mx-auto">
          <div className="text-center opacity-60">
            <div className="w-8 h-8 mx-auto bg-gradient-to-r from-blue-400/30 to-blue-400/10 rounded-full mb-2"></div>
            <div className="text-gray-500 text-sm">בטוח</div>
          </div>
          <div className="text-center opacity-60">
            <div className="w-8 h-8 mx-auto bg-gradient-to-r from-purple-400/30 to-purple-400/10 rounded-full mb-2"></div>
            <div className="text-gray-500 text-sm">מהיר</div>
          </div>
          <div className="text-center opacity-60">
            <div className="w-8 h-8 mx-auto bg-gradient-to-r from-indigo-400/30 to-indigo-400/10 rounded-full mb-2"></div>
            <div className="text-gray-500 text-sm">קל</div>
          </div>
        </div>

        {/* Additional Help Text */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 text-sm">
            צריך עזרה? אנחנו כאן 24/7 בשבילך
          </p>
        </div>
      </div>
    </div>
  );
}
