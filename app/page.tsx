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

import TestimonialsCarousel from "@/components/testimonials-with-carousel";
import Footer from "../components/footer";

import { motion } from "motion/react";
import Pricing from "@/components/pricing";

function FadeInSection({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      style={{ willChange: "opacity, transform" }}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="py-10">
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
          <Pricing />
        </FadeInSection>

        <FadeInSection>
          <TestimonialsCarousel />
        </FadeInSection>
      </main>
      <Footer />
    </div>
  );
}
