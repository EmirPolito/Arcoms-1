"use client";

import { PointerHighlight } from "@/app/components/ui/8-ui";

export function Titulo8() {
  return (
    <div className=" mx-auto sm:mb-0 text-center my-5">
      <div className="text-primary-general whitespace-nowrap text-2xl font-bold tracking-tight md:text-4xl">
        {/* The best way to grow is to{" "} */}
        <PointerHighlight>
          <span>Collaborate New</span>
        </PointerHighlight>
      </div>

      <p className="mt-2 text-center text-base text-primary-color-text whitespace-nowrap">
        Experience the power of modern UI components that bring your ideas to
        life.
      </p>
    </div>
  );
}
