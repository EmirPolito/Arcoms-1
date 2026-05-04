"use client";

import { PointerHighlight } from "@/components/ui/8-ui";

export function TituloDemo() {
  return (
    <div className="mx-auto text-center mt-0 md:mt-20 mb-4 px-5">
      <div className="text-title-ttl text-2xl sm:text-2xl font-bold tracking-tight md:text-4xl">
        Lo necesario{" "}
        <PointerHighlight>
          <span>en un solo plan</span>
        </PointerHighlight>
      </div>

      <p className="px-2 mt-2 sm:mt-2  text-center text-sm sm:text-base text-title-desc">
        Lorem dolor sit met consectetu adipisicing elit. Quisquam, quod. lo
        adipisicing elit. Quisquam.
      </p>
    </div>
  );
}
