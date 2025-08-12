import { animate, motion } from "framer-motion";
import { useEffect, useState } from "react";

export function AnimatedNumber({ value }) {
  const [currentValue, setCurrentValue] = useState(value);

  useEffect(() => {
    const controls = animate(currentValue, value, {
      duration: 1.5,
      ease: "easeOut",
      onUpdate(latest) {
        setCurrentValue(Math.round(latest));
      },
    });
    return () => controls.stop();
  }, [value]);

  return <motion.span>{currentValue}</motion.span>;
}
