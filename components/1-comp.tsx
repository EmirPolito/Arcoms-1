"use client";
import { LayoutTextFlip } from "@/components/ui/1-ui";
import { motion } from "motion/react";

export function Titulo1() {
  return (
    <div>
      <motion.div className="relative mx-6 my-35 flex flex-col items-center justify-center gap-3 text-center sm:mx-0 sm:mb-0 sm:flex-row">
        <LayoutTextFlip
          text="Bienvenido a "
          words={["Arcoms 1", "El Futuro", "La Inmersión", "El Diseño"]}
        />
      </motion.div>
      <p className="mt-2 text-center text-base text-title-desc">
        Experimenta el poder de componentes de interfaz modernos que dan vida a
        tus ideas.
      </p>
    </div>
  );
}
