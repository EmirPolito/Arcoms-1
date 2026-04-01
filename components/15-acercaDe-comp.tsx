"use client";

import React from "react";
import { Timeline } from "@/components/ui/15-acercaDe-ui"


export function AcercaDe() {
  const data = [
    
    {
      title: "2023",
      content: (
        <div>
          <p className="mb-2 text-base md:text-lg text-[var(--foreground)]">
            Establecimos los cimientos del proyecto, alineando la arquitectura
            de datos y el modelo de negocio.
          </p>
          <p className="mb-8 text-base md:text-lg text-[var(--foreground-secondary)]">
            Dedicamos esfuerzos a validar la tracción del producto y lanzar la primera MVP al mercado.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              className="h-50 w-full rounded-lg object-cover border-[var(--border-theme)]"
            />
            <img
              src="https://assets.aceternity.com/features-section.png"
              alt="feature template"
              className="h-50 w-full rounded-lg object-cover border-[var(--border-theme)]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div>
          <p className="mb-2 text-base md:text-lg text-[var(--foreground)]">
            Desarrollamos nuevas secciones, optimizamos el rendimiento e introdujimos un sistema de diseño propio.
          </p>
          <p className="mb-8 text-base md:text-lg text-[var(--foreground-secondary)]">
            Alcanzamos miles de usuarios escalando la infraestructura y adaptando la interfaz a estándares globales.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              className="h-50 w-full rounded-lg object-cover border-[var(--border-theme)]"
            />
            <img
              src="https://assets.aceternity.com/features-section.png"
              alt="feature template"
              className="h-50 w-full rounded-lg object-cover border-[var(--border-theme)]"
            />

          </div>
        </div>
      ),
    },
    {
      title: "2025",
      content: (
        <div>
          <p className="mb-2 text-base md:text-lg text-[var(--foreground)]">
            Expandimos nuestras capacidades, consolidando un ecosistema de herramientas digitales listas para producción.
          </p>
          <p className="mb-8 text-base md:text-lg text-[var(--foreground-secondary)]">
            Nos enfocamos en el éxito del cliente, aportando un diseño responsivo y fácil de integrar por desarrolladores.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              className="h-50 w-full rounded-lg object-cover border-[var(--border-theme)]"
            />
            <img
              src="https://assets.aceternity.com/features-section.png"
              alt="feature template"
              className="h-50 w-full rounded-lg object-cover border-[var(--border-theme)]"
            />
          </div>
        </div>
      ),
    },
    
   
     {

      
      title: "Impacto y Visión",
      content: (
        <div>
          <p className="mb-2 text-base md:text-lg text-[var(--foreground)]">
            Continuamos revolucionando en la construcción de interfaces premium para SaaS.
          </p>
          <p className="mb-8 text-base md:text-lg text-[var(--foreground-secondary)]">
            Líderes de la industria y desarrolladores modernos confían en nuestras soluciones aceleradas.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              className="h-50 w-full rounded-lg object-cover border-[var(--border-theme)]"
            />
            <img
              src="https://assets.aceternity.com/features-section.png"
              alt="feature template"
              className="h-50 w-full rounded-lg object-cover border-[var(--border-theme)]"
            />

          </div>
        </div>
      ),
    },
    
    {
      
      title: "",
      content: (
        <div>
          <div className="grid grid-cols-2 gap-4">
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
