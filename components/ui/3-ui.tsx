"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "motion/react";
import { cn } from "@/lib/utils";

export const PinContainer = ({
  children,
  title,
  href,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  title?: string;
  href?: string;
  className?: string;
  containerClassName?: string;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-20% 0px -20% 0px" });
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isActive = isMobile ? isInView : isHovered;

  const transform = isActive
    ? isMobile
      ? "translate(-50%,-50%) rotateX(25deg) scale(0.95)"
      : "translate(-50%,-50%) rotateX(40deg) scale(0.8)"
    : "translate(-50%,-50%) rotateX(0deg) scale(1)";

  return (
    <a
      ref={ref}
      className={cn(
        "relative group/pin cursor-pointer z-10",
        containerClassName,
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      href={href || "/"}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div
        style={{
          perspective: "1000px",
          transform: "rotateX(70deg) translateZ(0deg)",
        }}
        className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"
      >
        <div
          style={{ transform }}
          className={cn(
            "absolute left-1/2 top-1/2 p-4 flex justify-start items-start rounded-2xl transition-[opacity,transform] duration-500 overflow-hidden transform-gpu will-change-transform",
            "bg-background text-foreground border border-border shadow-md dark:shadow-lg",
            className,
          )}
        >
          <div className="relative z-20">{children}</div>
        </div>
      </div>

      {/* TEXTO Y EFECTO */}
      <PinPerspective title={title} isActive={isActive} isMobile={isMobile} />
    </a>
  );
};

export const PinPerspective = ({
  title,
  isActive,
  isMobile,
}: {
  title?: string;
  isActive: boolean;
  isMobile: boolean;
}) => {
  return (
    <motion.div
      className={cn(
        "pointer-events-none w-full md:w-96 h-83.5 flex items-center justify-center z-20 transition duration-500 transform-gpu",
        isActive ? "opacity-100" : "opacity-0",
      )}
    >
      <div className="absolute inset-0 flex items-center justify-center w-full">
        {/* TITULO */}
        <div
          className={cn(
            "absolute inset-x-0 flex justify-center transition-all duration-500",
            isMobile ? "top-4" : "top-0",
          )}
        >
          <div className="relative flex space-x-2 items-center z-10 rounded-full bg-background/70 backdrop-blur-sm py-0.5 px-4 ring-1 ring-border">
            <span className="relative z-20 text-xs font-bold text-foreground inline-block py-0.5">
              {title}
            </span>
            <div className="bg-gradient-to-r from-black/0 via-black/70 to-black/0 dark:from-white/0 dark:via-white/70 dark:to-white/0"></div>
          </div>
        </div>

        {/* HALOS ANIMADOS — Desactivados en móvil para rendimiento */}
        <div
          style={{
            perspective: "1000px",
            transform: "rotateX(70deg) translateZ(0)",
          }}
          className={cn(
            "absolute left-1/2 top-1/2 ml-[0.09375rem] -translate-x-1/2 -translate-y-1/2 transform-gpu hidden md:block",
            isMobile ? "mt-10" : "mt-4",
          )}
        >
          {(!isMobile ? [0, 3] : []).map((delay) => (
            <motion.div
              key={delay}
              initial={{ opacity: 0, scale: 0, x: "-50%", y: "-50%" }}
              animate={{ opacity: [0, 0.8, 0.4, 0], scale: 1.1 }}
              transition={{ duration: 5, repeat: Infinity, delay }}
              className={cn(
                "absolute left-1/2 top-1/2 rounded-full shadow-md transform-gpu will-change-transform",
                isMobile
                  ? "h-[7rem] w-[7rem] bg-white/5"
                  : "h-[10rem] w-[10rem] bg-primary/10",
              )}
            />
          ))}
        </div>

        {/* PARTICULAS - Ocultas en móvil */}
        <div className="hidden md:block">
          <motion.div
            className={cn(
              "absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-primary-color-linea w-px transition-all duration-500 blur-[2px] transform-gpu",
              isMobile ? "translate-y-[38px]" : "translate-y-[14px]",
              isActive ? (isMobile ? "h-48" : "h-40") : "h-20",
            )}
          />
          <motion.div
            className={cn(
              "absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-primary-color-linea w-px transition-all duration-500 transform-gpu",
              isMobile ? "translate-y-[38px]" : "translate-y-[14px]",
              isActive ? (isMobile ? "h-48" : "h-40") : "h-20",
            )}
          />
          <motion.div
            className={cn(
              "absolute right-1/2 translate-x-[1.5px] bottom-1/2 bg-primary-color-linea w-1 h-1 rounded-full z-40 blur-[3px] transform-gpu",
              isMobile ? "translate-y-[38px]" : "translate-y-[14px]",
            )}
          />
          <motion.div
            className={cn(
              "absolute right-1/2 translate-x-[0.5px] bottom-1/2 bg-primary-color-linea/70 w-[2px] h-[2px] rounded-full z-40 transform-gpu",
              isMobile ? "translate-y-[38px]" : "translate-y-[14px]",
            )}
          />
        </div>
      </div>
    </motion.div>
  );
};
