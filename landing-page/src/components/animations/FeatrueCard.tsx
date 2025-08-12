import React from "react";
import { motion } from "framer-motion";

export default function FeatureCard({
  title,
  description,
  children,
  className = "",
  delay = 0,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      className={`relative bg-black/10 rounded-3xl border border-white/10 overflow-hidden group hover:border-white/20 transition-all duration-500 ${className}`}
      style={{
        backgroundImage:
          "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)",
        backgroundSize: "20px 20px",
      }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ borderRadius: "inherit" }}
      />
      <motion.div
        whileHover={{ scale: 1.01 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="relative z-10 p-8 lg:p-10 h-full flex flex-col"
      >
        {/* Content */}
        <div className="flex-shrink-0">
          <motion.h3
            className="text-2xl lg:text-3xl font-bold text-white mb-4 leading-tight"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: delay + 0.2 }}
          >
            {title}
          </motion.h3>
          <motion.p
            className="text-gray-300 text-lg leading-relaxed mb-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: delay + 0.4 }}
          >
            {description}
          </motion.p>
        </div>

        {/* Visual */}
        <motion.div
          className="flex-grow flex items-center justify-center min-h-[350px]"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: delay + 0.3 }}
        >
          {children}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
