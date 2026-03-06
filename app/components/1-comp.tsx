"use client";
import { LayoutTextFlip } from "@/app/components/ui/1-ui";
import { motion } from "motion/react";

export function Titulo1() {
  return (
    <div>
      <motion.div className="relative mx-6 my-15 flex flex-col items-center justify-center gap-3 text-center sm:mx-1 sm:mb-0 sm:flex-row">
        <LayoutTextFlip
          text="Welcome to "
          words={["Aceternity UI", "Fight Club", "The Matrix", "The Jungle"]}
        />
      </motion.div>
      <p className="mt-2 text-center text-base text-primary-color-text">
        Experience the power of modern UI components that bring your ideas to
        life.
      </p>
    </div>
  );
}
