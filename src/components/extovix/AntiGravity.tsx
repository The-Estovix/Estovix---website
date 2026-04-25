import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface AntiGravityProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}

export const AntiGravity = ({ 
  children, 
  className, 
  delay = 0,
  duration = 6
}: AntiGravityProps) => {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      animate={reduce ? {} : { y: [0, -20, 0] }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
};
