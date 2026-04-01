"use client";

import React from "react";
import { LayoutTextFlip } from "@/components/ui/5-ui";
import { motion } from "motion/react";

export function Titulo5() {
  return (
    <div>
      <motion.div className="relative mx-6 my-30 flex flex-col items-center justify-center gap-3 text-center sm:mx-0 sm:mb-0 sm:flex-row">
        <LayoutTextFlip
          text="Descubre"
          words={["Modos", "Temas", "Colores", "Diseño"]}
          duration={2500}
        />
      </motion.div>
      <p className="mt-1 text-center text-base text-primary-color-text">
        Explora la personalización completa de tus componentes frontend.
      </p>
    </div>
  );
}
