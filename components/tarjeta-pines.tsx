"use client";
import React from "react";
import { PinContainer } from "@/components/ui/3-ui";

export function TarjetaPines() {
  return (
    <div className="w-full flex items-center justify-center py-11" style={{ contain: "layout style" }}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20">
        {/* TARJETA 1 */}
        <PinContainer title="Descripcion1/" href="/">
          <div className="flex basis-full flex-col p-4 tracking-tight text-primary-color-text w-[20rem] h-[20rem]">
            <h3 className="max-w-xs pb-2 m-0 font-bold text-base text-foreground">
              Titulo 1
            </h3>
            <div className="text-left text-sm m-0 p-0 font-normal">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quod.Quisquam.
            </div>
            <div className="flex flex-1 w-full rounded-lg mt-4 bg-primary-color-1" />
          </div>
        </PinContainer>

        {/* TARJETA 2 — Realidad Aumentada */}
        <PinContainer title="Descripcion2/" href="/">
          <div className="flex basis-full flex-col p-4 tracking-tight text-foreground/60 w-[20rem] h-[20rem]">
            <h3 className="max-w-xs pb-2 m-0 font-bold text-base text-foreground">
              Titulo 2
            </h3>
            <div className="text-sm m-0 p-0 font-normal">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quod.Quisquam.
            </div>
            <div className="flex flex-1 w-full rounded-lg mt-4 bg-primary-color-2" />
          </div>
        </PinContainer>

        {/* TARJETA 3 — Laboratorios Virtuales */}
        <PinContainer title="Descripcion3/" href="/">
          <div className="flex basis-full flex-col p-4 tracking-tight text-foreground/60 w-[20rem] h-[20rem]">
            <h3 className="max-w-xs pb-2 m-0 font-bold text-base text-foreground">
              Titulo 3
            </h3>
            <div className="text-sm m-0 p-0 font-normal">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quod.Quisquam.
            </div>
            <div className="flex flex-1 w-full rounded-lg mt-4 bg-primary-color-3" />
          </div>
        </PinContainer>
      </div>
    </div>
  );
}
