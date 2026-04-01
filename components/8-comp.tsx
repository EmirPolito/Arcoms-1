"use client";

import { PointerHighlight } from "@/components/ui/8-ui";

export function Titulo8() {
  return (
    <div className=" mx-auto sm:mb-0 text-center my-20">
      <div className="text-title-ttl whitespace-nowrap text-2xl font-bold tracking-tight md:text-4xl">
        {/* The best way to grow is to{" "} */}
        <PointerHighlight>
          <span>Tecnología Viva</span>
        </PointerHighlight>
      </div>

      <p className="mt-2 text-center text-base text-title-desc whitespace-nowrap">
        Experimenta el poder de componentes de interfaz modernos que dan vida a
        tus ideas.
      </p>
    </div>
  );
}
