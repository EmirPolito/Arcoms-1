"use client";

import React from "react";
import { LayoutTextFlip } from "@/components/ui/1-ui";
import { motion } from "motion/react";

export function TituloTarjetas() {
  return (
    <div>
      <motion.div className="relative mx-6 my-30 flex flex-col items-center justify-center gap-3 text-center sm:mx-0 sm:mb-0 sm:flex-row">
        <LayoutTextFlip
          text="Título del"
          words={["texto 1", "texto 2", "texto 3"]}
          duration={2500}
        />
      </motion.div>
      <p className="mt-1 text-center text-base text-primary-color-text">
        Explora la personalización completa de tus componentes frontend.
      </p>
    </div>
  );
}
