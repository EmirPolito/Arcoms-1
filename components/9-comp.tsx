"use client";

import { PointerHighlight } from "@/components/ui/9-ui";

export function Titulo9() {
  return (
    <div className="mx-auto text-center mt-20 mb-4">
      <div className="text-title-ttl whitespace-nowrap text-2xl font-bold tracking-tight md:text-4xl">
        Todo lo que necesitas{" "}
        <PointerHighlight>
          <span>en un solo plan</span>
        </PointerHighlight>
      </div>

      <p className="mt-2 text-center text-base text-title-desc whitespace-nowrap">
        Experimenta el poder de componentes de interfaz modernos que dan vida a
        tus ideas.
      </p>
    </div>
  );
}
