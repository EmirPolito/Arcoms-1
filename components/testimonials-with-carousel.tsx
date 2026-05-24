"use client";
import React, { memo } from "react";
import TestimonialCarousel from "@/components/ui/testimonial-carousel";

const TESTIMONIALS = [
  {
    name: "Sarah Mitchell",
    handle: "Product Designer @ Innovate",
    description:
      "La atención al detalle en esta plataforma es excepcional. Cada interacción se siente fluida y natural, elevando la experiencia del usuario final a un nivel superior.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80&auto=format",
  },
  {
    name: "Michael Torres",
    handle: "CTO @ TechFlow",
    description:
      "La implementación técnica es impecable. El rendimiento y la escalabilidad de los componentes nos han permitido iterar con una velocidad que antes era impensable.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80&auto=format",
  },
  {
    name: "Jessica Park",
    handle: "Design Systems Lead",
    description:
      "Una arquitectura de componentes brillante que equilibra perfectamente la flexibilidad con la robustez. Es la base ideal para cualquier proyecto moderno.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&q=80&auto=format",
  },
  {
    name: "Robert Kim",
    handle: "Senior Software Engineer",
    description:
      "Rendimiento puro sin comprometer la estética. La optimización de recursos es notable, manteniendo una fluidez constante incluso en entornos exigentes.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80&auto=format",
  },
];

const TestimonialsCarousel = memo(() => {
  return (
    <section className="relative w-full py-0 bg-testim-bg flex flex-col items-center px-4 overflow-hidden">
      {/* HEADER */}
      <div className="text-center mb-4 md:mb-0 px-4 py-0 md:py-7">
        <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-foreground mb-3">
          Nuestra comunidad{" "}
          <span className="text-title-ttl inline-flex relative items-center justify-center px-4 py-1.5 border border-primary-general/30 ml-1">
            dice esto
            <div className="absolute -bottom-2 -right-2 transform rotate-[-90deg] text-primary-general">
              <svg className="h-5 w-5 fill-current" viewBox="0 0 16 16">
                <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z" />
              </svg>
            </div>
          </span>
        </h2>
        <p className="mt-2 text-sm md:text-base text-testim-desc max-w-2xl mx-auto leading-relaxed">
          Descubre cómo estamos transformando la manera en que los equipos
          construyen productos digitales excepcionales.
        </p>
      </div>

      {/* CAROUSEL WRAPPER */}
      <div className="relative z-10 w-full max-w-7xl px-0 md:px-10">
        <TestimonialCarousel data={TESTIMONIALS} />
      </div>
    </section>
  );
});

TestimonialsCarousel.displayName = "TestimonialsCarousel";

export default TestimonialsCarousel;
