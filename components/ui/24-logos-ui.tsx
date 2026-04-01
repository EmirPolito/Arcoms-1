"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

type AnimationDirection = "loop" | "vloop";

interface LogoItem {
  icon: React.ReactNode;
  label: string;
}

interface LogoStepperProps {
  logos: LogoItem[];
  animationDuration?: number;
  animationDelay?: number;
  direction?: AnimationDirection;
  visibleCount?: number;
}

export const LogoStepper: React.FC<LogoStepperProps> = ({
  logos,
  animationDuration = 0.6,
  animationDelay = 1.2,
  direction = "loop",
  visibleCount = 5,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % logos.length);
    }, animationDelay * 1000);

    return () => clearInterval(interval);
  }, [logos.length, animationDelay]);

  const getVisibleLogos = () => {
    const visible = [];
    const offset = Math.floor(visibleCount / 2);

    for (let i = -offset; i <= offset; i++) {
      const index = (currentIndex + i + logos.length) % logos.length;
      visible.push({
        logo: logos[index],
        originalIndex: index,
        position: i,
      });
    }

    return visible;
  };

  const visibleLogos = getVisibleLogos();

  return (
    <div className="relative w-full flex items-start justify-center overflow-hidden py-10">
      <div
        className="flex items-start justify-center gap-40"
        style={{ width: "fit-content" }}
      >
        <AnimatePresence initial={false} mode="popLayout">
          {visibleLogos.map(({ logo, originalIndex, position }) => {
            let lineOpacity = 0;
            if (position === 0) lineOpacity = 1;
            else if (position === -1) lineOpacity = 0.3;
            else if (position === 1) lineOpacity = 0.3;

            return (
              <motion.div
                key={originalIndex}
                layout="position"
                initial={{
                  x: direction === "loop" ? 120 : -120,
                  opacity: 0,
                  scale: 0.7,
                }}
                animate={{
                  x: 0,
                  opacity: position === 0 ? 1 : 0.3,
                  scale: position === 0 ? 1 : 0.75,
                }}
                exit={{
                  x: direction === "loop" ? -120 : 120,
                  opacity: 0,
                  scale: 0.7,
                }}
                transition={{
                  duration: animationDuration,
                  ease: [0.4, 0, 0.2, 1],
                }}
                className="flex flex-col items-center shrink-0 min-h-50 w-20"
              >
                <motion.div className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-card p-6 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors shadow-sm dark:shadow-none">
                  <div className="w-10 h-10 flex items-center justify-center">
                    {logo.icon}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: lineOpacity }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: animationDuration,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                  className="flex flex-col items-center mt-4 h-28"
                >
                  <div className="w-px h-16 mb-4 bg-neutral-200 dark:bg-neutral-800" />
                  <span className="text-muted-foreground uppercase text-xs font-medium tracking-wider whitespace-nowrap">
                    {logo.label}
                  </span>
                </motion.div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
};
