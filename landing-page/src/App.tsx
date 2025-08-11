import React, { useState, useEffect } from "react";
import {
  Phone,
  Brain,
  Clock,
  Users,
  Zap,
  Star,
  Check,
  ArrowLeft,
  Menu,
  X,
  MessageCircle,
  BarChart3,
  Shield,
  Smartphone,
  Globe,
  TrendingUp,
  Award,
  PlayCircle,
  ArrowRight,
  Building,
  Headphones,
  Calendar,
  FileText,
} from "lucide-react";
import ChatAnimation from "./components/ChatAnimation";
import StatsCounter from "./components/StatsCounter";
import { motion, AnimatePresence } from "framer-motion";
function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white" dir="rtl">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-gray-900/95 backdrop-blur-md border-b border-gray-800"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center space-x-2 space-x-reverse">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">ממזכירה AI</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8 space-x-reverse">
              <a
                href="#product"
                className="text-gray-300 hover:text-white transition-colors"
              >
                מוצר
              </a>
              <a
                href="#features"
                className="text-gray-300 hover:text-white transition-colors"
              >
                תכונות
              </a>
              <a
                href="#pricing"
                className="text-gray-300 hover:text-white transition-colors"
              >
                מחירים
              </a>
              <a
                href="#about"
                className="text-gray-300 hover:text-white transition-colors"
              >
                אודות
              </a>
              <a
                href="#contact"
                className="text-gray-300 hover:text-white transition-colors"
              >
                צור קשר
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center space-x-4 space-x-reverse">
              <button className="text-gray-300 hover:text-white transition-colors">
                התחבר
              </button>
              <button className="bg-white text-gray-900 px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
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
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  מוצר
                </a>
                <a
                  href="#features"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  תכונות
                </a>
                <a
                  href="#pricing"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  מחירים
                </a>
                <a
                  href="#about"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  אודות
                </a>
                <a
                  href="#contact"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  צור קשר
                </a>
                <div className="pt-4 border-t border-gray-800">
                  <button className="w-full bg-white text-gray-900 px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                    התחל בחינם
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* New Feature Badge */}
          <div className="inline-flex items-center bg-blue-600/20 text-blue-300 px-4 py-2 rounded-full text-sm mb-8 border border-blue-500/30">
            <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs ml-2">
              חדש
            </span>
            ממזכירה AI עם תמיכה בוואטסאפ והודעות
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
              הממזכירה הדיגיטלית
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              שמדברת עם הלקוחות
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            מענה אוטומטי בוואטסאפ, הודעות וטלפון. קביעת פגישות חכמה וניהול
            לקוחות מתקדם 24/7
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
            <button className="bg-white text-gray-900 px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-all transform hover:scale-105 flex items-center">
              <Phone className="w-5 h-5 ml-2" />
              התחל בחינם
            </button>
            <button className="text-white border border-gray-600 px-8 py-4 rounded-lg font-medium hover:border-gray-400 transition-colors flex items-center">
              <PlayCircle className="w-5 h-5 ml-2" />
              צפה בהדגמה
            </button>
          </div>
          <ChatAnimation />
          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-blue-400">
                <StatsCounter end={99.9} suffix="%" />
              </div>
              <div className="text-gray-400">זמינות</div>
            </div>
            <div className="text-center">
              <div className="text-purple-400 text-3xl font-bold">24/7</div>
              <div className="text-gray-400">שירות</div>
            </div>
            <div className="text-center">
              <div className="text-green-400">
                <StatsCounter end={10000} suffix="+" />
              </div>
              <div className="text-gray-400">עסקים</div>
            </div>
          </div>
        </div>
      </section>

      {/* Chat Demo Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-green-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              רואים את הממזכירה AI בפעולה
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              הממזכירה שלנו מתנהלת בשיחות טבעיות עם הלקוחות בכל הפלטפורמות
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
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
              <h3 className="text-xl font-bold mb-4">מענה אוטומטי לשיחות</h3>
              <p className="text-gray-400">
                ממזכירה AI עונה לכל השיחות הנכנסות באופן מקצועי ומנתבת ללקוחות
                המתאימים
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
              <h3 className="text-xl font-bold mb-4">דוחות ואנליטיקה</h3>
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

      {/* How It Works Section */}
      <section className="py-20 bg-gray-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">איך זה עובד?</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              התקנה פשוטה בשלושה שלבים והממזכירה AI מוכנה לעבודה
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-bold mb-4">הרשמה והתקנה</h3>
              <p className="text-gray-400">
                הירשם לשירות, חבר את מספר הטלפון ואת חשבונות הוואטסאפ שלך
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-bold mb-4">התאמה אישית</h3>
              <p className="text-gray-400">
                הגדר את הממזכירה AI עם המידע על העסק שלך ואת סוגי השירותים
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-bold mb-4">התחל לעבוד</h3>
              <p className="text-gray-400">
                הממזכירה AI מוכנה לענות על שיחות ולקבוע פגישות 24/7
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">מתאים לכל תחום</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              הממזכירה AI שלנו משרתת עסקים מכל התחומים
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

      {/* Testimonials */}
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

      {/* Stats Section */}
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

      {/* Pricing */}
      <section id="pricing" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">תוכניות מחיר פשוטות</h2>
            <p className="text-gray-400 text-lg">
              בחר את התוכנית המתאימה לעסק שלך
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Basic Plan */}
            <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700/50">
              <h3 className="text-xl font-bold mb-4">תוכנית בסיסית</h3>
              <div className="text-4xl font-bold mb-6">
                ₪299 <span className="text-lg text-gray-400">/חודש</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-400 ml-3" />
                  עד 500 שיחות בחודש
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-400 ml-3" />
                  מענה אוטומטי 24/7
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-400 ml-3" />
                  וואטסאפ והודעות
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-400 ml-3" />
                  תמיכה בצ'אט
                </li>
              </ul>
              <button className="w-full bg-gray-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-600 transition-colors">
                התחל עכשיו
              </button>
            </div>

            {/* Pro Plan */}
            <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 p-8 rounded-2xl border border-blue-500/50 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-2 rounded-full text-sm font-medium">
                  הכי פופולרי
                </span>
              </div>
              <h3 className="text-xl font-bold mb-4">תוכנית מקצועית</h3>
              <div className="text-4xl font-bold mb-6">
                ₪599 <span className="text-lg text-gray-400">/חודש</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-400 ml-3" />
                  עד 2,000 שיחות בחודש
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-400 ml-3" />
                  כל התכונות הבסיסיות
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-400 ml-3" />
                  אינטגרציות מתקדמות
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-400 ml-3" />
                  דוחות ואנליטיקה
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-400 ml-3" />
                  תמיכה טלפונית
                </li>
              </ul>
              <button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-600 hover:to-purple-600 transition-all">
                התחל עכשיו
              </button>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700/50">
              <h3 className="text-xl font-bold mb-4">תוכנית ארגונית</h3>
              <div className="text-4xl font-bold mb-6">
                ₪1,199 <span className="text-lg text-gray-400">/חודש</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-400 ml-3" />
                  שיחות ללא הגבלה
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-400 ml-3" />
                  כל התכונות המתקדמות
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-400 ml-3" />
                  התאמה אישית מלאה
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-400 ml-3" />
                  מנהל לקוחות ייעודי
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-400 ml-3" />
                  SLA מובטח
                </li>
              </ul>
              <button className="w-full bg-gray-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-600 transition-colors">
                צור קשר
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">מוכן להתחיל?</h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            הצטרף לאלפי העסקים שכבר משתמשים בממזכירה AI והופכים כל שיחה ווואטסאפ
            להזדמנות
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-lg font-medium hover:from-blue-600 hover:to-purple-600 transition-all transform hover:scale-105 flex items-center">
              <Phone className="w-5 h-5 ml-2" />
              התחל ניסיון חינם של 30 יום
            </button>
            <button className="text-white border border-gray-600 px-8 py-4 rounded-lg font-medium hover:border-gray-400 transition-colors">
              הזמן הדגמה אישית
            </button>
          </div>

          <p className="text-gray-500 text-sm mt-6">
            ללא כרטיס אשראי • ביטול בכל עת • תמיכה בעברית
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-2 space-x-reverse mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">ממזכירה AI</span>
              </div>
              <p className="text-gray-400 mb-4">
                הממזכירה הדיגיטלית המתקדמת ביותר לעסק שלך
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
              © 2025 ממזכירה AI. כל הזכויות שמורות.
            </p>
            <div className="flex items-center space-x-4 space-x-reverse mt-4 md:mt-0">
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
    </div>
  );
}

export default App;
