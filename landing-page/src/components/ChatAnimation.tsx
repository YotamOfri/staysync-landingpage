import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const messages = [
  { from: "user", text: "היי, אפשר לקבוע תור לתספורת?" },
  {
    from: "bot",
    text: "בוודאי! בוקר טוב. אני 'אסיסט', העוזר הדיגיטלי של 'מספרת הסטייל'. מתי הכי נוח לך להגיע?",
  },
  { from: "user", text: "מחר בבוקר יתאים לי" },
  { from: "bot", text: "מעולה. יש לי תור פנוי מחר בשעה 10:30. זה מתאים לך?" },
  { from: "user", text: "כן, מצוין." },
  {
    from: "bot",
    text: "נהדר. קבעתי לך תור לתספורת מחר, יום רביעי, בשעה 10:30. שלחתי לך אישור לווצאפ. נתראה!",
  },
];

export default function ChatAnimation() {
  const [currentMessages, setCurrentMessages] = useState([]);
  const timeoutRef = useRef(null);

  const playConversation = () => {
    setCurrentMessages([]);
    messages.forEach((msg, i) => {
      timeoutRef.current = setTimeout(() => {
        setCurrentMessages((prev) => [...prev, msg]);
      }, i * 2000); // 2 sec delay between each message
    });

    // Restart after conversation ends
    timeoutRef.current = setTimeout(() => {
      playConversation();
    }, messages.length * 2000 + 3000); // Wait 3s after last message
  };

  useEffect(() => {
    playConversation();
    return () => clearTimeout(timeoutRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden w-full max-w-lg mx-auto h-[420px] shadow-2xl z-50">
      {/* Top bar */}
      <div className="flex items-center gap-2 p-3 border-b border-white/10 bg-gray-900/70">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 bg-red-500 rounded-full" />
          <div className="w-3 h-3 bg-yellow-500 rounded-full" />
          <div className="w-3 h-3 bg-green-500 rounded-full" />
        </div>
        <div className="flex-1 text-center">
          <p className="text-sm text-gray-300">שיחה עם לקוח</p>
        </div>
        <div className="w-3 h-3" />
      </div>

      {/* Chat messages */}
      <div className="p-6 space-y-4 h-full min-h-fit overflow-y-auto ">
        <AnimatePresence>
          {currentMessages.map((msg, index) => (
            <motion.div
              key={`${index}-${msg.from}-${msg.text.substring(0, 10)}`}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className={`flex ${
                msg.from === "user" ? "justify-start" : "justify-end"
              }`}
            >
              <div
                className={`max-w-xs md:max-w-md text-right px-4 py-2 rounded-2xl text-white text-sm ${
                  msg.from === "user"
                    ? "bg-gray-700 rounded-br-lg"
                    : "bg-blue-600 rounded-bl-lg"
                }`}
              >
                {msg.text}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
