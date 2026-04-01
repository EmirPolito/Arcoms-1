"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { ArrowRight, Mail, Phone, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SeparatorPro } from "@/components/ui/seperatorpro";
import dynamic from "next/dynamic";
const GlobeWireframe = dynamic(
  () => import("@/components/ui/globe-wireframe"),
  { ssr: false },
);

const smoothEase = [0.25, 0.1, 0.25, 1] as const;

const CONTACT_LINKS = [
  {
    icon: Mail,
    label: "contact@ejemplo.com",
    href: "mailto:contact@ejemplo.com",
  },
  { icon: Phone, label: "+1 (800) 321 XX21", href: "tel:+18003214321" },
  {
    icon: Headphones,
    label: "support@ejemplo.com",
    href: "mailto:support@ejemplo.com",
  },
];

interface ContactWithGlobeProps {
  title?: string;
  subtitle?: string;
  description?: string;
  className?: string;
}

export default function ContactWithGlobe({
  title = "Contactanos",
  description = "Estamos siempre buscando formas de mejorar. Contáctanos y déjanos saber cómo podemos ayudarte.",
  className,
}: ContactWithGlobeProps) {
  return (
    <section
      className={cn(
        "relative w-full bg-background overflow-hidden py-8",
        className,
      )}
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col items-center text-center gap-2 mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.15, ease: smoothEase }}
            className="text-4xl  lg:text-6xl  md:text-5xl font-semibold text-primary-general "
          >
            {title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.3, ease: smoothEase }}
            className="text-base text-primary-color-text max-w-[900px] mx-auto"
          >
            {description}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-30 max-w-7xl mx-auto items-start">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0, delay: 0.2, ease: smoothEase }}
            className="flex flex-col gap-6"
          >
            <div className="flex flex-col gap-1">
              <h3 className="text-xl font-semibold text-foreground">
                Contacto Directo
              </h3>
              <p className="text-sm text-primary-color-text leading-relaxed max-w-xs">
                Usa cualquiera de los siguientes canales. Respondemos rápido.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              {CONTACT_LINKS.map(({ icon: Icon, label, href }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 0.3 + i * 0.1,
                    ease: smoothEase,
                  }}
                  className="group flex items-center gap-3 w-fit text-sm text-primary-color-text hover:text-foreground transition-colors duration-200"
                >
                  <div className="w-8 h-8 rounded-lg bg-card border border-border group-hover:border-primary-general/50 group-hover:bg-primary-general/10 flex items-center justify-center shrink-0 transition-all duration-200">
                    <Icon className="w-3.5 h-3.5 text-primary-color-text group-hover:text-primary-general transition-colors duration-200" />
                  </div>
                  {label}
                </motion.a>
              ))}
            </div>

            <div className="relative overflow-hidden h-52">
              <GlobeWireframe
                className="w-full aspect-square max-w-full absolute top-0 left-0"
                variant="wireframesolid"
                autoRotate
                autoRotateSpeed={0.45}
                strokeWidth={0.6}
                graticuleOpacity={0.12}
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-background to-transparent" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0, delay: 0.35, ease: smoothEase }}
            className="rounded-2xl border border-border bg-card p-6 sm:p-8 flex flex-col gap-5"
          >
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-0.5">
                Envíanos tu mensaje
              </h3>
              <p className="text-sm text-primary-color-text">
                Llena el formulario y responderemos a la brevedad.
              </p>
            </div>

            <SeparatorPro variant="dots" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold tracking-widest uppercase text-primary-color-text">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  placeholder="Tu nombre aquí"
                  className="w-full bg-background border border-border rounded-xl px-4 py-2.5 text-sm text-foreground placeholder:text-primary-color-text outline-none focus:border-primary-general focus:ring-2 focus:ring-primary-general/20 transition-all duration-200"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold tracking-widest uppercase text-primary-color-text">
                  Compañía
                </label>
                <input
                  type="text"
                  placeholder="Tu compañía"
                  className="w-full bg-background border border-border rounded-xl px-4 py-2.5 text-sm text-foreground placeholder:text-primary-color-text outline-none focus:border-primary-general focus:ring-2 focus:ring-primary-general/20 transition-all duration-200"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold tracking-widest uppercase text-primary-color-text">
                Correo Electrónico
              </label>
              <input
                type="email"
                placeholder="usuario@ejemplo.com"
                className="w-full bg-background border border-border rounded-xl px-4 py-2.5 text-sm text-foreground placeholder:text-primary-color-text outline-none focus:border-primary-general focus:ring-2 focus:ring-primary-general/20 transition-all duration-200"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold tracking-widest uppercase text-primary-color-text">
                Mensaje
              </label>
              <textarea
                placeholder="Escribe tu mensaje aquí"
                rows={4}
                className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-primary-color-text outline-none focus:border-primary-general focus:ring-2 focus:ring-primary-general/20 resize-none transition-all duration-200"
              />
            </div>

            <Button className="w-fit h-[43px] px-8 rounded-xl font-medium text-[16px] bg-hero-btn-bg hover:opacity-90 text-primary2 group cursor-pointer transition-opacity">
              Enviar
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:-rotate-45" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
