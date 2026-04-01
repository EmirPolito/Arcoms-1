"use client";
import React from "react";
import { PinContainer } from "@/components/ui/3-ui";

export function Component3() {
  return (
    <div className="w-full flex items-center justify-center py-11">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20">
        {/* TARJETA 1 */}
        <PinContainer title="Despliegues" href="/docs">
          <div className="flex basis-full flex-col p-4 tracking-tight text-primary-color-text w-[20rem] h-[20rem]">
            <h3 className="max-w-xs pb-3 m-0 font-bold text-base text-foreground">
              Despliegues Rápidos
            </h3>
            <div className="text-sm m-0 p-0 font-normal">
              Automatiza tu ciclo de desarrollo web con CI/CD instantáneos.
            </div>
            <div className="flex flex-1 w-full rounded-lg mt-4 bg-primary-color-1" />
          </div>
        </PinContainer>

        {/* TARJETA 2 — Realidad Aumentada */}
        <PinContainer title="Disponibilidad" href="/docs">
          <div className="flex basis-full flex-col p-4 tracking-tight text-foreground/60 w-[20rem] h-[20rem]">
            <h3 className="max-w-xs pb-3 m-0 font-bold text-base text-foreground">
              Alta Disponibilidad
            </h3>
            <div className="text-sm m-0 p-0 font-normal">
              Infraestructura robusta sin límites en decenas de regiones globales.
            </div>
            <div className="flex flex-1 w-full rounded-lg mt-4 bg-primary-color-2" />
          </div>
        </PinContainer>

        {/* TARJETA 3 — Laboratorios Virtuales */}
        <PinContainer title="Seguridad" href="/docs">
          <div className="flex basis-full flex-col p-4 tracking-tight text-foreground/60 w-[20rem] h-[20rem]">
            <h3 className="max-w-xs pb-3 m-0 font-bold text-base text-foreground">
              Seguridad Total
            </h3>
            <div className="text-sm m-0 p-0 font-normal">
              Cifrado inteligente de datos y cumplimiento riguroso de normativas.
            </div>
            <div className="flex flex-1 w-full rounded-lg mt-4 bg-primary-color-3" />
          </div>
        </PinContainer>
      </div>
    </div>
  );
}
