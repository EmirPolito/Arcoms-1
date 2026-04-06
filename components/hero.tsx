"use client";
import Link from "next/link";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

const SplineScene = dynamic(
  () => import("@/components/ui/splite").then((mod) => mod.SplineScene),
  { ssr: false },
);
import {
  Announcement,
  AnnouncementTag,
  AnnouncementTitle,
} from "@/components/ui/announcement";

interface SplineSceneBasicProps {
  paragraphSize?: string;
  buttonWidth?: string;
}

export function HeroSection({
  paragraphSize = "text-base md:text-lg ",
  buttonWidth = "px-6 md:px-8",
}: SplineSceneBasicProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Glow que sigue el cursor SOLO dentro del card
  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    let rafId: number;
    const move = (e: MouseEvent) => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        el.style.setProperty("--x", `${x}px`);
        el.style.setProperty("--y", `${y}px`);
      });
    };

    el.addEventListener("mousemove", move, { passive: true });
    return () => {
      el.removeEventListener("mousemove", move);
      cancelAnimationFrame(rafId);
    };
  }, []);

  // Animación inicial
  useEffect(() => {
    const t = setTimeout(() => setIsVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      ref={cardRef}
      className="w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[650px] relative overflow-hidden bg-background border-0 shadow-none ring-0 text-foreground"
    >
      {/* Background Lights removed by user request for 100% Pure Black */}

      {/* Spline — hidden on mobile for performance, visible from md up */}
      <div
        className={`
          absolute inset-0 z-10 hidden md:block
          transition-[opacity,transform] duration-[1600ms] ease-out will-change-[opacity,transform]
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
        `}
      >
        <div className="w-full h-full scale-[1.09] origin-top -translate-y-22.5 md:translate-x-[180px] lg:translate-x-[290px]">
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>

      {/* Contenido */}
      <div
        className={`
          relative z-10 flex h-full items-center pointer-events-none px-4 sm:px-6
          transition-[opacity,transform] duration-[1800ms] ease-out delay-300 will-change-[opacity,transform]
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
        `}
      >
        <div className="mx-auto max-w-lg text-center lg:ml-32 lg:text-left -mt-12 md:-mt-24">
          <div className="mb-3 flex justify-center lg:justify-start">
            <Announcement styled animation="fade">
              <AnnouncementTag>Tu Landing</AnnouncementTag>
              <AnnouncementTitle>Experiencia Inmersiva</AnnouncementTitle>
            </Announcement>
          </div>
          <h1 className="font-semibold text-4xl sm:text-5xl md:text-6xl xl:text-7xl text-hero-ttl">
            Bienvenidos
            <br />
            <span className="block">a Arcoms 1</span>
          </h1>

          <p className={`mt-3 text-pretty text-hero-desc ${paragraphSize}`}>
            Esta es una landing page adaptable enfocada en crear una experiencia
            inmersiva mediante animaciones, interacción y diseño minimalista. Su
            objetivo es impactar visualmente y servir como plantilla base de
            alto nivel.
          </p>

          <div className="pointer-events-auto mt-8 md:mt-12 flex flex-col sm:flex-row justify-center gap-3 sm:gap-5 lg:justify-start">
            <Link
              href="/explore"
              className={`${buttonWidth} w-full sm:w-[165px] h-[43px] flex items-center justify-center text-base md:text-lg rounded-md font-medium shadow-md text-hero-btn-txt bg-hero-btn-bg hover:opacity-95 transition-opacity cursor-pointer`}
            >
              Explorar
            </Link>

            <Link
              href="/work"
              className={`${buttonWidth} w-full sm:w-[165px] h-[43px] flex items-center justify-center text-base md:text-lg rounded-lg text-hero-ttl font-medium shadow-md transition-colors hover:opacity-95 cursor-pointer`}
            >
              Resumen
            </Link>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-40 bg-gradient-to-t from-background to-transparent hidden dark:block" />
    </div>
  );
}
