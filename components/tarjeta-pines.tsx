"use client";
import React from "react";
import { PinContainer } from "@/components/ui/3-ui";

export function TarjetaPines() {
  return (
    <section className="w-full py-11 px-4 flex flex-col items-center">
      {/* HEADER INTEGRADO */}
      <div className="text-center mb-2.5 md:mb-10  px-4">
        <div className="flex flex-row flex-wrap items-center justify-center gap-4 mb-2">
          <span className="text-2xl md:text-4xl font-bold tracking-tight text-titulos">
            Título
          </span>
          <span className="bg-buttonC text-primary-foreground px-5 py-1.5 rounded-md text-2xl md:text-4xl font-bold tracking-tight ring-1 ring-white/10">
            texto
          </span>
        </div>
        <p className="text-sm md:text-base text-title-desc max-w-2xl mx-auto">
          Lorem dolor sit met consectetu adipisicing elit. Quisquam, quod. lo
          adipisicing elit.
        </p>
      </div>

      {/* GRID DE TARJETAS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-14 lg:gap-10">
        <div className="fade-section" style={{ transitionDelay: "0ms" }}>
          <PinContainer title="Descripcion1/" href="/">
            <div className="flex basis-full flex-col p-3.5 tracking-tight text-primary-color-text w-[17.5rem] h-[17.5rem] sm:w-[18rem] sm:h-[18rem] lg:w-[20rem] lg:h-[20rem]">
              <h3 className="max-w-xs pb-2 m-0 font-bold text-base text-foreground">
                Titulo 1
              </h3>
              <div className="text-left text-sm m-0 p-0 font-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quod. meeet.
              </div>
              <div className="flex flex-1 w-full rounded-lg mt-4 bg-primary-color-1" />
            </div>
          </PinContainer>
        </div>

        <div className="fade-section" style={{ transitionDelay: "150ms" }}>
          <PinContainer title="Descripcion2/" href="/">
            <div className="flex basis-full flex-col p-3.5 tracking-tight text-foreground/60 w-[17.5rem] h-[17.5rem] sm:w-[18rem] sm:h-[18rem] lg:w-[20rem] lg:h-[20rem]">
              <h3 className="max-w-xs pb-2 m-0 font-bold text-base text-foreground">
                Titulo 2
              </h3>
              <div className="text-sm m-0 p-0 font-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quod. meeet
              </div>
              <div className="flex flex-1 w-full rounded-lg mt-4 bg-primary-color-2" />
            </div>
          </PinContainer>
        </div>

        <div className="fade-section" style={{ transitionDelay: "300ms" }}>
          <PinContainer title="Descripcion3/" href="/">
            <div className="flex basis-full flex-col p-3.5 tracking-tight text-foreground/60 w-[17.5rem] h-[17.5rem] sm:w-[18rem] sm:h-[18rem] lg:w-[20rem] lg:h-[20rem]">
              <h3 className="max-w-xs pb-2 m-0 font-bold text-base text-foreground">
                Titulo 3
              </h3>
              <div className="text-sm m-0 p-0 font-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quod. meeet
              </div>
              <div className="flex flex-1 w-full rounded-lg mt-4 bg-primary-color-3" />
            </div>
          </PinContainer>
        </div>
      </div>
    </section>
  );
}
