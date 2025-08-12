import React from "react";

const ChatDemoSection: React.FC = () => {
  return (
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
  );
};

export default ChatDemoSection;
