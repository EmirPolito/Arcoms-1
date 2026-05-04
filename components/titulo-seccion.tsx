"use client";

import { PointerHighlight } from "@/components/ui/8-ui";

export function TituloEstadoAgentes() {
  return (
    <div className="mx-auto sm:mb-0 text-center my-10 md:my-20 px-3">
      <div className="text-title-ttl text-2xl sm:text-2xl font-bold tracking-tight md:text-4xl">
        <PointerHighlight>
          <span>Título de la sección</span>
        </PointerHighlight>
      </div>

      <p className="px-2 mt-2 sm:mt-2 text-center text-sm sm:text-base text-title-desc">
        Lorem dolor sit met consectetu adipisicing elit. Quisquam, quod. lo
        adipisicing elit. Quisquam.
      </p>
    </div>
  );
}
