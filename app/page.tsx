"use client";
import { useEffect, useRef } from "react";

import { Header } from "../components/header";
import { HeroSection } from "@/components/hero";
import LogoCloud from "@/components/logo-cloud";

import { TituloEstadoAgentes } from "@/components/titulo-seccion";
import { TarjetaPines } from "@/components/tarjeta-pines";

import EstadoAgentes from "@/components/estado-agentes";

import { TituloCaracteristicas } from "@/components/texto-interactivo";
import { BentoCaracteristicas } from "@/components/bento-caracteristicas";

import { TituloDemo } from "@/components/resaltador-cursor";

import { TituloTarjetas } from "@/components/texto-animado";
import TestimonialsCarousel from "@/components/testimonials-with-carousel";
import Footer from "../components/footer";

function FadeInSection({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.05, rootMargin: "0px 0px -40px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="fade-section">
      {children}
    </div>
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
          <LogoCloud />
        </FadeInSection>

        <FadeInSection>
          <TituloEstadoAgentes />
        </FadeInSection>
        <FadeInSection>
          <TarjetaPines />
        </FadeInSection>

        <FadeInSection>
          <EstadoAgentes />
        </FadeInSection>

        <FadeInSection>
          <TituloCaracteristicas />
        </FadeInSection>
        <FadeInSection>
          <BentoCaracteristicas />
        </FadeInSection>

        <FadeInSection>
          <TituloDemo />
        </FadeInSection>

        {/* <FadeInSection>
          <TituloTarjetas />
        </FadeInSection> */}
        <FadeInSection>
          <TestimonialsCarousel />
        </FadeInSection>
      </main>
      <Footer />
    </div>
  );
}
