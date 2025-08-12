import { AnimatedNumber } from "@/lib/animationUtils";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Clock, CheckCircle, Activity } from "lucide-react";
import { useState, useEffect } from "react";

export function DashboardMockup() {
  const [currentStats, setCurrentStats] = useState({
    messages: 147,
    responseTime: "12 שניות",
    satisfaction: "98%",
  });

  const [activities, setActivities] = useState([
    { id: 1, text: "תור נקבע עם דני כהן", time: "לפני 2 דקות", active: true },
    {
      id: 2,
      text: "הודעה נענתה - שאלה על מחירים",
      time: "לפני 5 דקות",
      active: false,
    },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStats((prev) => ({
        ...prev,
        messages: prev.messages + Math.floor(Math.random() * 3),
      }));

      if (Math.random() < 0.3) {
        const newActivities = [
          "פגישה נקבעה עם מירי לוי",
          "שאלה על שעות פעילות",
          "בקשה לביטול תור",
          "פנייה חדשה מלקוח פוטנציאלי",
          "הודעה נענתה אוטומטית",
        ];

        const newActivity = {
          id: Date.now(),
          text: newActivities[Math.floor(Math.random() * newActivities.length)],
          time: "עכשיו",
          active: true,
        };

        setActivities((prev) => [newActivity, ...prev.slice(0, 2)]);

        setTimeout(() => {
          setActivities((prev) =>
            prev.map((activity) =>
              activity.id === newActivity.id
                ? { ...activity, active: false }
                : activity
            )
          );
        }, 3000);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const stats = [
    {
      label: "הודעות היום",
      value: currentStats.messages,
      icon: MessageCircle,
      color: "blue",
    },
    {
      label: "זמן תגובה ממוצע",
      value: currentStats.responseTime,
      icon: Clock,
      color: "green",
    },
    {
      label: "שביעות רצון",
      value: currentStats.satisfaction,
      icon: CheckCircle,
      color: "purple",
    },
  ];

  return (
    <div className="w-full h-full bg-gradient-to-br from-gray-900/50 to-black/30 rounded-2xl border border-white/10 overflow-hidden">
      <div className="p-4 border-b border-white/10 flex items-center justify-between">
        <h4 className="text-white font-semibold flex items-center gap-2">
          <motion.div
            className="w-6 h-6 bg-blue-500 rounded-md flex items-center justify-center"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <Activity className="w-3 h-3 text-white" />
          </motion.div>
          לוח בקרה - מזכירה AI
        </h4>
        <motion.div
          className="flex items-center gap-1 text-green-400 text-xs"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-2 h-2 bg-green-400 rounded-full" />
          <span>פעיל</span>
        </motion.div>
      </div>

      <div className="p-6 grid grid-cols-1 gap-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            className={`bg-${stat.color}-500/10 border border-${stat.color}-500/30 rounded-xl p-4`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 + index * 0.2 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center gap-3">
              <motion.div
                className={`p-2 bg-${stat.color}-500/20 rounded-lg`}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.5,
                }}
              >
                <stat.icon className={`w-4 h-4 text-${stat.color}-400`} />
              </motion.div>
              <div>
                <p className="text-gray-400 text-sm">{stat.label}</p>
                <p className={`font-bold text-lg text-${stat.color}-400`}>
                  {typeof stat.value === "number" ? (
                    <AnimatedNumber value={stat.value} />
                  ) : (
                    stat.value
                  )}
                </p>
              </div>
            </div>
          </motion.div>
        ))}

        <motion.div
          className="bg-white/5 rounded-xl p-4 mt-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.1 }}
        >
          <h5 className="text-white font-medium mb-3 flex items-center gap-2">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
              <Activity className="w-4 h-4" />
            </motion.div>
            פעילות אחרונה
          </h5>
          <AnimatePresence mode="popLayout">
            {activities.map((activity) => (
              <motion.div
                key={activity.id}
                initial={{ opacity: 0, y: -20, scale: 0.9 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  backgroundColor: activity.active
                    ? "rgba(34, 197, 94, 0.1)"
                    : "transparent",
                }}
                exit={{ opacity: 0, y: 20, scale: 0.9 }}
                transition={{ duration: 0.5, ease: "circOut" }}
                className="flex items-center gap-3 text-sm py-2 px-2 rounded-lg mb-1"
              >
                <motion.div
                  className={`w-2 h-2 rounded-full ${
                    activity.active ? "bg-green-400" : "bg-blue-400"
                  }`}
                  animate={
                    activity.active
                      ? {
                          scale: [1, 1.5, 1],
                          boxShadow: [
                            "0 0 0px rgba(34, 197, 94, 0)",
                            "0 0 10px rgba(34, 197, 94, 0.8)",
                            "0 0 0px rgba(34, 197, 94, 0)",
                          ],
                        }
                      : {}
                  }
                  transition={{
                    duration: 1.5,
                    repeat: activity.active ? Infinity : 0,
                  }}
                />
                <span className="text-gray-300">{activity.text}</span>
                <span className="text-gray-500 text-xs mr-auto">
                  {activity.time}
                </span>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
