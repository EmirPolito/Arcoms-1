"use client";

import { PointerHighlight } from "@/components/ui/8-ui";

export function TituloDemo() {
  return (
    <div className="mx-auto text-center mt-14 md:mt-20 mb-4 px-4">
      <div className="text-title-ttl text-xl sm:text-2xl font-bold tracking-tight md:text-4xl">
        Todo lo que necesitas{" "}
        <PointerHighlight>
          <span>en un solo plan</span>
        </PointerHighlight>
      </div>

      <p className="mt-2 text-center text-sm sm:text-base text-title-desc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam.
      </p>
    </div>
  );
}
