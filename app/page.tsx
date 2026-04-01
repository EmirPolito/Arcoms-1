"use client";

import { Header } from "../components/header";

import { HeroSection } from "@/components/hero";

import CarruselLogos from "@/components/carrusel-logos";

import { TituloEstadoAgentes } from "@/components/titulo-seccion";
import EstadoAgentes from "@/components/estado-agentes";

import { TituloCaracteristicas } from "@/components/texto-interactivo";
import { BentoCaracteristicas } from "@/components/bento-caracteristicas";

import { TituloTarjetas } from "@/components/texto-animado";
import { TarjetaPines } from "@/components/tarjeta-pines";

import { TituloDemo } from "@/components/resaltador-cursor";
import DemoInteractiva from "@/components/demo-interactiva";

import TestimonialsCarousel from "@/components/testimonials-with-carousel";
import Footer from "../components/footer";

import { motion } from "motion/react";

function FadeInSection({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="py-10 overflow-hidden">
        <FadeInSection>
          <HeroSection />
        </FadeInSection>

        <FadeInSection>
          <CarruselLogos />
        </FadeInSection>

        <FadeInSection>
          <TituloEstadoAgentes />
          <EstadoAgentes />
        </FadeInSection>

        <FadeInSection>
          <TituloTarjetas />
          <TarjetaPines />
        </FadeInSection>

        <FadeInSection>
          <TituloCaracteristicas />
          <BentoCaracteristicas />
        </FadeInSection>

        <FadeInSection>
          <TituloDemo />
          <DemoInteractiva />
        </FadeInSection>

        <FadeInSection>
          <TestimonialsCarousel />
        </FadeInSection>
      </main>
      <Footer />
    </div>
  );
}
