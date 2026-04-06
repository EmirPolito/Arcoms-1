"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { OrbButton } from "@/components/ui/orb-button";
import Image from "next/image";
import Link from "next/link";

interface CTAWithFloatingGalleryProps {
  title?: string;
  description?: string;
  buttonLabel?: string;
  className?: string;
}

const galleryImages = [
  {
    url: "/img/cap1.png",
    alt: "Hero Portadas",
    delay: 0,
  },
  {
    url: "/img/cap2.png",
    alt: "Secciones Footer",
    delay: 0.1,
  },
  {
    url: "/img/cap3.png",
    alt: "Diseño Bento",
    delay: 0.2,
  },
  {
    url: "/img/cap4.png",
    alt: "Secciones de Precios",
    delay: 0.15,
  },
  {
    url: "/img/cap5.png",
    alt: "Sección de Contacto",
    delay: 0.25,
  },
  {
    url: "/img/cap6.png",
    alt: "Logos y Clientes",
    delay: 0.3,
  },
];

export default function CTAWithFloatingGallery({
  title = "Resumen del proyecto",
  description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
  buttonLabel = "Ver proyecto",
  className,
}: CTAWithFloatingGalleryProps) {
  const words = title.split(" ");
  const leftImages = galleryImages.slice(0, 3);
  const rightImages = galleryImages.slice(3);

  return (
    <section
      className={cn(
        "mx-auto my-10 sm:my-20 grid w-full max-w-7xl grid-cols-1 items-center gap-8 px-4 sm:px-6 md:my-0 md:grid-cols-2 md:gap-16 md:px-8",
        className,
      )}
    >
      <div className="max-w-xl">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-balance text-[var(--primary-general)] md:text-5xl">
          {words.map((word, index) => (
            <motion.span
              key={`${word}-${index}`}
              initial={{ opacity: 0, filter: "blur(6px)", y: 12 }}
              whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.08,
                ease: "easeInOut",
              }}
              className="mr-2 inline-block"
            >
              {word}
            </motion.span>
          ))}
        </h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-4 sm:mt-6 max-w-lg text-sm sm:text-base text-[var(--primary-color-text)] md:text-lg"
        >
          {description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-6 sm:mt-8"
        >
          <OrbButton>
            <Link href="/">
              <span className="flex items-center gap-2">{buttonLabel}</span>
            </Link>
          </OrbButton>
        </motion.div>
      </div>

      <div className="relative overflow-hidden rounded-2xl bg-background/60 p-3">
        <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-24 bg-linear-to-b from-background to-transparent hidden dark:block"></div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-24 bg-linear-to-t from-background to-transparent hidden dark:block"></div>

        <div className="grid grid-cols-2 gap-3 overflow-hidden">
          <div className="flex flex-col gap-3">
            {leftImages.map((image) => (
              <motion.div
                key={image.alt}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: image.delay,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="overflow-hidden rounded-xl shadow-sm border border-img-frame"
              >
                <Image
                  src={image.url}
                  alt={image.alt}
                  width={400}
                  height={176}
                  className="h-32 sm:h-44 w-full object-cover scale-[1.12]"
                />
              </motion.div>
            ))}
          </div>

          <div className="mt-6 sm:mt-10 flex flex-col gap-3">
            {rightImages.map((image) => (
              <motion.div
                key={image.alt}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: image.delay,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="overflow-hidden rounded-xl shadow-sm border border-img-frame"
              >
                <Image
                  src={image.url}
                  alt={image.alt}
                  width={400}
                  height={176}
                  className="h-32 sm:h-44 w-full object-cover scale-[1.12]"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
