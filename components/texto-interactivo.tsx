"use client";
import { LayoutTextFlip } from "@/components/ui/1-ui";
import { motion } from "motion/react";

export function TituloCaracteristicas() {
  return (
    <div className="px-4">
      <motion.div className="relative mx-2 sm:mx-6 my-20 sm:my-35 flex flex-col items-center justify-center gap-3 text-center sm:mx-0 sm:mb-0 sm:flex-row">
        <LayoutTextFlip
          text="Título "
          words={["texto 1", "texto 2", "texto 3", "texto 4"]}
        />
      </motion.div>
      <p className="mt-2 text-center text-sm sm:text-base text-title-desc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
      </p>
    </div>
  );
}
