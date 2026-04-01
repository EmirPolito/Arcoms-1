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
    <section className="relative w-full pt-16 pb-20 bg-testim-bg flex flex-col items-center px-4 overflow-hidden">
      <div className="relative z-10 flex flex-col items-center gap-2 w-full max-w-6xl mt-12">
        <motion.h1 
          className="text-primary-general text-3xl md:text-5xl font-bold mb-1"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Comentarios
        </motion.h1>

        <motion.p 
          className="text-primary-color-text max-w-4xl mx-auto text-base text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quod.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-full mt-3"
        >
          <TestimonialCarousel data={testimonials} borderType="solid" />
        </motion.div>
      </div>
    </section>
  );
}
