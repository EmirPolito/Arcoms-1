"use client";
import { useEffect, useRef, ReactNode } from "react";

import { Header } from "../components/header";
import { HeroSection } from "@/components/hero";
import LogoCloud from "@/components/logo-cloud";
import { TarjetaPines } from "@/components/tarjeta-pines";
import EstadoAgentes from "@/components/estado-agentes";
import { BentoCaracteristicas } from "@/components/bento-caracteristicas";
import TestimonialsCarousel from "@/components/testimonials-with-carousel";
import Footer from "../components/footer";

function FadeInSection({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "50px 0px" }
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
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      <main className="py-10">
        <FadeInSection>
          <HeroSection />
        </FadeInSection>

        <FadeInSection>
          <LogoCloud />
        </FadeInSection>

        <FadeInSection>
          <TarjetaPines />
        </FadeInSection>

        <FadeInSection>
          <EstadoAgentes />
        </FadeInSection>

        <FadeInSection>
          <BentoCaracteristicas />
        </FadeInSection>

        <FadeInSection>
          <TestimonialsCarousel />
        </FadeInSection>
      </main>
      <Footer />
    </div>
  );
}
