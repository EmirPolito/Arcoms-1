"use client";
import { useEffect, useRef, ReactNode, memo, useCallback } from "react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

import { Header } from "../components/header";
import { HeroSection } from "@/components/hero";
import LogoCloud from "@/components/logo-cloud";
import { TarjetaPines } from "@/components/tarjeta-pines";
import EstadoAgentes from "@/components/estado-agentes";
import { CuatroCaracteristicas } from "@/components/4tarjetas";
import TestimonialsCarousel from "@/components/testimonials-with-carousel";
import Footer from "../components/footer";

const STAGGER_BASE_DELAY = 80; // ms entre cada sección

const FadeInSection = memo(function FadeInSection({
  children,
  index = 0,
}: {
  children: ReactNode;
  index?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Si reduced motion, mostrar inmediatamente
    if (prefersReduced) {
      el.classList.add("visible");
      return;
    }

    // Activar inmediatamente si ya está visible al cargar
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.85) {
      // Stagger delay basado en índice para las secciones visibles al cargar
      const delay = index * STAGGER_BASE_DELAY;
      setTimeout(() => el.classList.add("visible"), delay);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.disconnect();
        }
      },
      { threshold: 0.2 } // Umbral del 20% — no se re-anima al scroll up/down
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [prefersReduced, index]);

  return (
    <div
      ref={ref}
      className="fade-section"
      style={{ transitionDelay: `${index * 0.05}s` }}
    >
      {children}
    </div>
  );
});

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      <main className="py-10">
        <FadeInSection index={0}>
          <HeroSection />
        </FadeInSection>

        <FadeInSection index={1}>
          <LogoCloud />
        </FadeInSection>

        <FadeInSection index={2}>
          <TarjetaPines />
        </FadeInSection>

        <FadeInSection index={3}>
          <EstadoAgentes />
        </FadeInSection>

        <FadeInSection index={4}>
          <CuatroCaracteristicas />
        </FadeInSection>

        <FadeInSection index={5}>
          <TestimonialsCarousel />
        </FadeInSection>
      </main>
      <Footer />
    </div>
  );
}
