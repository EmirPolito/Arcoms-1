"use client";

import React from "react";
import { LayoutTextFlip } from "@/components/ui/1-ui";
import { motion } from "motion/react";

export function TituloTarjetas() {
  return (
    <div className="px-4">
      <motion.div className="relative mx-2 sm:mx-6 mt-18 mb-4 sm:mt-20 sm:mb-4 flex flex-row flex-wrap items-center justify-center gap-4 text-center sm:mx-0">
        <LayoutTextFlip
          text="Título "
          words={["texto 1", "texto 2", "texto 3", "texto 4"]}
        />
      </motion.div>

      <p className="-mb-0 sm:mb-0 text-center text-sm sm:text-base text-title-desc">
        Lorem dolor sit met consectetu adipisicing elit. Quisquam, quod. lo
        adipisicing elit. Quisquam.
      </p>
    </div>
  );
}
