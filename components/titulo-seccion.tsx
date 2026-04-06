"use client";

import { PointerHighlight } from "@/components/ui/8-ui";

export function TituloEstadoAgentes() {
  return (
    <div className="mx-auto sm:mb-0 text-center my-14 md:my-20 px-4">
      <div className="text-title-ttl text-xl sm:text-2xl font-bold tracking-tight md:text-4xl">
        <PointerHighlight>
          <span>Título de la sección</span>
        </PointerHighlight>
      </div>

      <p className="mt-2 text-center text-sm sm:text-base text-title-desc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
      </p>
    </div>
  );
}
