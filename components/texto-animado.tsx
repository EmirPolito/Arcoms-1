"use client";

import React from "react";

export function TituloTarjetas() {
  return (
    <div className="px-4">
      <div className="relative mx-2 sm:mx-6 mt-18 mb-4 sm:mt-20 sm:mb-4 flex flex-row flex-wrap items-center justify-center gap-4 text-center sm:mx-0">
        <span className="text-2xl font-bold tracking-tight drop-shadow-lg md:text-4xl">
          Título
        </span>
        <span className="relative w-fit overflow-hidden rounded-md px-4 py-2 text-2xl font-bold tracking-tight shadow-sm drop-shadow-lg md:text-4xl bg-buttonC text-primary-foreground ring-1 ring-black/10 dark:ring-white/10 inline-block whitespace-nowrap">
          texto
        </span>
      </div>

      <p className="-mb-0 sm:mb-0 text-center text-sm sm:text-base text-title-desc">
        Lorem dolor sit met consectetu adipisicing elit. Quisquam, quod. lo
        adipisicing elit. Quisquam.
      </p>
    </div>
  );
}
