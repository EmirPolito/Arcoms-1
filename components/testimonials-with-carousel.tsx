"use client";

import { motion } from "motion/react";
import TestimonialCarousel from "@/components/ui/testimonial-carousel";

const testimonials = [
  {
    name: "Sarah Mitchell",
    handle: "Diseñadora de Producto",
    description:
      "La atención al detalle es increíble. Cada interacción se siente pulida e intencional. Mis clientes siempre se impresionan con los resultados finales.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&q=80&auto=format",
  },
  {
    name: "Michael Torres",
    handle: "Desarrollador Principal",
    description:
      "La implementación fue impecable de principio a fin. La calidad del código es excepcional y todo funciona a la perfección.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80&auto=format",
  },
  {
    name: "Jessica Park",
    handle: "Líder de Sistemas de Diseño",
    description:
      "La arquitectura de componentes es brillante. Es lo suficientemente flexible para casos de uso complejos pero simple para prototipos rápidos.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=80&q=80&auto=format",
  },
  {
    name: "Robert Kim",
    handle: "Ingeniero Senior",
    description:
      "Finalmente, una biblioteca que no sacrifica rendimiento por estética. Todo fluye suavemente incluso en dispositivos de gama baja.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&q=80&auto=format",
  },
];

export default function TestimonialsCarousel() {
  const title = "Diseñado para equipos veloces";
  const titleWords = title.split(" ");

  return (
    <section className="relative w-full min-h-screen bg-testim-bg flex flex-col items-center justify-center px-4">
      <div className="relative z-10 flex flex-col items-center gap-1 w-full max-w-6xl">
        <div className="flex flex-col items-center gap-3 text-center">
          <h2 className="text-3xl lg:text-5xl font-extrabold tracking-tighter text-[var(--primary-general)] leading-tight mb-4">
            {titleWords.map((word, index) => (
              <motion.span
                key={`title-${word}-${index}`}
                initial={{ opacity: 0, scale: 0.9, y: 15 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100,
                }}
                className="mr-3 inline-block drop-shadow-sm font-extrabold"
              >
                {word}
              </motion.span>
            ))}
          </h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-base md:text-lg text-testim-desc max-w-2xl"
          >
            Únete a miles de profesionales construyendo mejores productos
            <br className="hidden sm:block" />
            con componentes que simplemente funcionan.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="w-full"
        >
          <TestimonialCarousel data={testimonials} borderType="solid" />
        </motion.div>
      </div>
    </section>
  );
}
