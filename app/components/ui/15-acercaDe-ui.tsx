"use client";

import {
  useScroll,
  useTransform,
  motion,
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-[var(--background)] font-sans md:px-10"
      ref={containerRef}
    >
      {/* 🔥 TÍTULO PRINCIPAL + PÁRRAFO PRINCIPAL CON EFECTO */}
      <div className="max-w-7xl mx-auto py-35 px-4 md:px-8 lg:px-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-bold text-foreground mb-5 text-balance"
        >
          Acerca de nosotros
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          viewport={{ once: true }}
          className="text-lg text-muted-foreground text-balance max-w-1xl mx-auto"
        >
          Desde 2023, hemos estado desarrollando RALQ, con el objetivo de crear
          experiencias educativas interactivas para estudiantes de química.
        </motion.p>
      </div>

      {/* 🔥 TIMELINE */}
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: index * 0.15,
            }}
            className="flex justify-start pt-10 md:pt-50 md:gap-10"
          >
            {/* Punto + título grande */}
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-[var(--card)] flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-[var(--foreground-secondary)] border border-[var(--border-theme)] p-2" />
              </div>

              {/* 🔥 TÍTULO GRANDE ANIMADO */}
              <motion.h3
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: true }}
                className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-[var(--foreground-secondary)]"
              >
                {item.title}
              </motion.h3>
            </div>

            {/* Contenido */}
            <div className="relative pl-20 pr-4 md:pl-4 w-full">

              {/* 🔥 TÍTULO MÓVIL ANIMADO */}
              <motion.h3
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: true }}
                className="md:hidden block text-2xl mb-4 text-left font-bold text-[var(--foreground-secondary)]"
              >
                {item.title}
              </motion.h3>

              {/* 🔥 SOLO TEXTO ANIMADO (IMÁGENES NO) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                {item.content}
              </motion.div>
            </div>
          </motion.div>
        ))}

        {/* LÍNEA IZQUIERDA */}
        <div
          style={{ height: height + "px" }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[var(--foreground)] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{ height: heightTransform, opacity: opacityTransform }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-[var(--foreground)] via-[var(--foreground)] to-transparent rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
