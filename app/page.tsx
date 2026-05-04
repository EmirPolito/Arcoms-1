"use client";
import { motion } from "motion/react";

import { Header } from "../components/header";
import { HeroSection } from "@/components/hero";
import CarruselLogos from "@/components/carrusel-logos";

import { TituloEstadoAgentes } from "@/components/titulo-seccion";
import { TarjetaPines } from "@/components/tarjeta-pines"; /**pines 3d */

import EstadoAgentes from "@/components/estado-agentes"; /** 2 lineas */

import { TituloCaracteristicas } from "@/components/texto-interactivo";
import { BentoCaracteristicas } from "@/components/bento-caracteristicas"; /**mundo */

import { TituloDemo } from "@/components/resaltador-cursor";
import Pricing from "@/components/pricing"; /**precios */

import { TituloTarjetas } from "@/components/texto-animado";
import TestimonialsCarousel from "@/components/testimonials-with-carousel";
import Footer from "../components/footer";

function FadeInSection({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "100px" }}
      transition={{ duration: 0.35, ease: "easeOut" }}
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
          <TarjetaPines />
        </FadeInSection>

        <FadeInSection>
          {/* <TituloTarjetas /> */}
          <EstadoAgentes />
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
          <TituloTarjetas />
          <TestimonialsCarousel />
        </FadeInSection>
      </main>
      <Footer />
    </div>
  );
}
