import React from "react";
import { cn } from "@/lib/utils";

type SpotlightProps = {
  className?: string;
  fill?: string;
};

export const Spotlight = ({ className, fill = "white" }: SpotlightProps) => {
  return (
    <div
      className={cn(
        "animate-spotlight pointer-events-none absolute z-[1] h-[120%] w-[100%] lg:w-[60%] opacity-0",
        className
      )}
      style={{
        background: `radial-gradient(circle at center, ${fill} 0%, transparent 65%)`,
        filter: "blur(80px)",
        opacity: 0.06,
        transform: "scale(1.2) translateY(-10%)",
        mixBlendMode: "screen"
      }}
    />
  );
};
