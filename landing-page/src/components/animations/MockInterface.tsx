import { motion } from "framer-motion";
import {
  SiWhatsapp,
  SiMessenger,
  SiInstagram,
  SiTelegram,
} from "react-icons/si";
import Logo from "@/assets/StaysyncLogo.svg";
export function IntegrationMockup() {
  const platforms = [
    {
      name: "WhatsApp",
      brandColor: "#00B2FF",
      Icon: SiMessenger,
      pos: { row: 1, col: 3 },
    },
    {
      name: "Messenger",
      brandColor: "#25D366",
      Icon: SiWhatsapp,
      pos: { row: 1, col: 1 },
    },
    {
      name: "Instagram",
      brandColor: "#229ED9",
      Icon: SiTelegram,
      pos: { row: 3, col: 3 },
    },
    {
      name: "Telegram",
      brandColor: "#E1306C",
      Icon: SiInstagram,
      pos: { row: 3, col: 1 },
    },
  ];

  const gridIndexToPercent = (index: number) => (index - 1) * 33.3333 + 16.6667;

  return (
    <div className="w-full h-full min-h-96  p-8 flex items-center justify-center">
      <div className="w-full max-w-md h-full relative grid grid-cols-3 grid-rows-3 gap-6">
        {/* Enhanced grid lines */}
        <div className="absolute inset-0 z-0">
          {[1, 2].map((i) => (
            <motion.div
              key={`v${i}`}
              className="absolute top-0 bottom-0 bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent"
              style={{ left: `calc(${i * 33.33}% - 0.5px)`, width: "1px" }}
              initial={{ opacity: 0, scaleY: 0 }}
              animate={{ opacity: 1, scaleY: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            />
          ))}
          {[1, 2].map((i) => (
            <motion.div
              key={`h${i}`}
              className="absolute left-0 right-0 bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent"
              style={{ top: `calc(${i * 33.33}% - 0.5px)`, height: "1px" }}
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
            />
          ))}
        </div>

        {/* Central AI hub */}
        <motion.div
          className="col-start-2 row-start-2 flex items-center justify-center relative z-10"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 20,
            delay: 0.8,
          }}
        >
          <div className="relative">
            <div className="w-20 h-20 rounded-2xl flex items-center justify-center shadow-2xl shadow-cyan-500/30">
              <img className="rounded-md" src={Logo} alt="" />
            </div>
            {/* Pulsing ring effect */}
            <motion.div
              className="absolute inset-0 rounded-2xl border-2 border-cyan-400/50"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.5, 0, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>

        {/* Platform nodes */}
        {platforms.map((platform, index) => (
          <motion.div
            key={platform.name}
            className="relative z-10 flex items-center justify-center"
            style={{ gridRow: platform.pos.row, gridColumn: platform.pos.col }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 20,
              delay: 1.2 + index * 0.1,
            }}
          >
            <div className="relative group">
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center backdrop-blur-sm bg-slate-800/60 border border-slate-700/50 hover:border-slate-600/70 transition-all duration-300 shadow-xl"
                style={{
                  boxShadow: `0 0 0 1px ${platform.brandColor}15, 0 8px 24px ${platform.brandColor}10`,
                }}
                title={platform.name}
                aria-label={platform.name}
              >
                <platform.Icon size={24} color={platform.brandColor} />
              </div>
              {/* Hover glow effect */}
              <div
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"
                style={{
                  background: `radial-gradient(circle, ${platform.brandColor}40, transparent 70%)`,
                  filter: "blur(8px)",
                }}
              />
            </div>
          </motion.div>
        ))}

        {/* Connection lines - now uniform color */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none z-5"
          style={{ overflow: "visible" }}
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient
              id="connectionGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.3" />
            </linearGradient>
          </defs>

          {platforms.map((platform, index) => {
            const x2 = gridIndexToPercent(platform.pos.col);
            const y2 = gridIndexToPercent(platform.pos.row);

            return (
              <g key={`conn-${platform.name}`}>
                {/* Vertical line */}
                <motion.line
                  x1="50"
                  y1="50"
                  x2="50"
                  y2={y2}
                  stroke="url(#connectionGradient)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{
                    duration: 1,
                    ease: "easeOut",
                    delay: 1.5 + index * 0.2,
                  }}
                />
                {/* Horizontal line */}
                <motion.line
                  x1="50"
                  y1={y2}
                  x2={x2}
                  y2={y2}
                  stroke="url(#connectionGradient)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{
                    pathLength: 1,
                    opacity: 1,
                  }}
                  transition={{
                    pathLength: {
                      duration: 1,
                      ease: "easeOut",
                      delay: 1.8 + index * 0.2,
                    },
                    opacity: {
                      duration: 1,
                      delay: 1.8 + index * 0.2,
                    },
                  }}
                />
                {/* Data flow animation */}
                <motion.circle
                  r="1"
                  fill={
                    platform.name === "WhatsApp"
                      ? "#25D366"
                      : platform.name === "Instagram"
                      ? "#E1306C"
                      : "#06b6d4"
                  }
                  opacity="0.8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: 3 + index * 0.3,
                    ease: "easeInOut",
                  }}
                >
                  <motion.animateMotion
                    dur="2s"
                    repeatCount="indefinite"
                    begin={`${3 + index * 0.3}s`}
                    path={`M ${x2},${y2} L 50,${y2} L 50,50`}
                  />
                </motion.circle>
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
}
