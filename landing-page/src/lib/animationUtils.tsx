import { animate, motion } from "framer-motion";
import { useEffect, useState } from "react";

interface AnimatedNumberProps {
  value: number;
}

export function AnimatedNumber({ value }: AnimatedNumberProps) {
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
  }, [value, currentValue]);

  return <motion.span>{currentValue}</motion.span>;
}
