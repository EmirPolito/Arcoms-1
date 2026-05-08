"use client";
import { useEffect } from "react";

import { Header } from "../components/header";
import { HeroSection } from "@/components/hero";
import LogoCloud from "@/components/logo-cloud";
import { TarjetaPines } from "@/components/tarjeta-pines";
import EstadoAgentes from "@/components/estado-agentes";
import { BentoCaracteristicas } from "@/components/bento-caracteristicas";
import TestimonialsCarousel from "@/components/testimonials-with-carousel";
import Footer from "../components/footer";

/**
 * Shared observer for all sections to improve performance.
 * Ensure the CSS for .fade-section includes:
 * transition: opacity 0.6s cubic-bezier(0.2, 0.8, 0.2, 1), transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);
 */
const useSharedObserver = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { 
        threshold: 0, 
        rootMargin: "0px 0px -50px 0px" 
      }
    );

    const elements = document.querySelectorAll(".fade-section");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
};

function FadeInSection({ children }: { children: React.ReactNode }) {
  return (
    <div className="fade-section">
      {children}
    </div>
  );
}

export default function Home() {
  useSharedObserver();

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
