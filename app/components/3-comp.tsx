"use client";
import React from "react";
import { PinContainer } from "@/app/components/ui/3-ui";

export function Component3() {
  return (
    <div className="w-full flex items-center justify-center py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">


        {/* TARJETA 1 */}
        <PinContainer title="/visores-3d" href="/visores-3d">
          <div className="flex basis-full flex-col p-4 tracking-tight text-primary-color-text w-[20rem] h-[20rem]">
            <h3 className="max-w-xs pb-3 m-0 font-bold text-base text-foreground">
              Titulo 1
            </h3>
            <p className="text-sm m-0 p-0 font-normal text-muted-foreground">
              Explora moléculas e instrumentos con visualización 3D interactiva
            </p>
            <div className="flex flex-1 w-full rounded-lg mt-4 bg-primary-color-1" />
          </div>
        </PinContainer>

        {/* TARJETA 2 — Realidad Aumentada */}
        <PinContainer title="/realidad-aumentada" href="/realidad-aumentada">
          <div className="flex basis-full flex-col p-4 tracking-tight text-foreground/60 w-[20rem] h-[20rem]">
            <h3 className="max-w-xs pb-3 m-0 font-bold text-base text-foreground">
              Titulo 2
            </h3>
            <p className="text-sm m-0 p-0 font-normal text-muted-foreground">
              Lleva moléculas e instrumentos al mundo real usando tu cámara.
            </p>
            <div className="flex flex-1 w-full rounded-lg mt-4 bg-primary-color-2" />
          </div>
        </PinContainer>

        {/* TARJETA 3 — Laboratorios Virtuales */}
        <PinContainer title="/laboratorios" href="/laboratorios">
          <div className="flex basis-full flex-col p-4 tracking-tight text-foreground/60 w-[20rem] h-[20rem]">
            <h3 className="max-w-xs pb-3 m-0 font-bold text-base text-foreground">
              Titulo 3
            </h3>
            <p className="text-sm m-0 p-0 font-normal text-muted-foreground">
              Simulaciones interactivas para practicar técnicas de laboratorio
              sin riesgo.
            </p>
            <div className="flex flex-1 w-full rounded-lg mt-4 bg-primary-color-3" />
          </div>
        </PinContainer>
      </div>
    </div>
  );
}
