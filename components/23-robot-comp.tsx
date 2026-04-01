"use client";

import { useEffect, useRef, useState } from "react";
import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";
import {
  Announcement,
  AnnouncementTag,
  AnnouncementTitle,
} from "@/components/ui/announcement";

interface SplineSceneBasicProps {
  paragraphSize?: string;
  buttonWidth?: string;
}

export function Component23({
  paragraphSize = "text-lg",
  buttonWidth = "px-8",
}: SplineSceneBasicProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Glow que sigue el cursor SOLO dentro del card
  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const move = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      el.style.setProperty("--x", `${x}px`);
      el.style.setProperty("--y", `${y}px`);
    };

    el.addEventListener("mousemove", move);
    return () => el.removeEventListener("mousemove", move);
  }, []);

  // Animación inicial
  useEffect(() => {
    const t = setTimeout(() => setIsVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <Card
      ref={cardRef}
      className="w-full h-[650px] relative overflow-hidden bg-hero-bg text-white border-none"
    >
      {/* Glow */}
      <div
        className="pointer-events-none absolute inset-0 z-20"
        style={{
          background:
            "radial-gradient(200px circle at var(--x) var(--y), rgba(255,255,255,0.15), transparent 0%)",
        }}
      />

      {/* Spotlight */}
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />

      {/* Spline */}
      <div
        className={`
          absolute inset-0 z-10
          transition-all duration-[1600ms] ease-out
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
        `}
      >
        <div className="w-full h-full scale-[1.02] origin-top -translate-y-20 translate-x-[280px]">
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>

      {/* Contenido */}
      <div
        className={`
          relative z-10 flex h-full items-center pointer-events-none
          transition-all duration-[1800ms] ease-out delay-300
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
        `}
      >
        <div className="mx-auto max-w-lg text-center lg:ml-32 lg:text-left -mt-24">
          <div className="mb-3 flex justify-center lg:justify-start">
            <Announcement styled animation="fade">
              <AnnouncementTag>Tu Landing</AnnouncementTag>
              <AnnouncementTitle>Experiencia Inmersiva</AnnouncementTitle>
            </Announcement>
          </div>
          <h1 className="font-semibold xl:text-7xl text-hero-ttl">
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

          <div className="pointer-events-auto mt-10 flex justify-center gap-5 lg:justify-start">
            <a
              href="/explore"
              className={`${buttonWidth} w-[165px] h-[43px] flex items-center justify-center text-lg rounded-md font-medium shadow-md text-hero-btn-txt bg-hero-btn-bg hover:opacity-80 transition-opacity`}
            >
              Explorar
            </a>

            <a
              href="/work"
              className={`${buttonWidth} w-[165px] h-[43px] flex items-center justify-center text-lg rounded-lg text-hero-ttl font-medium shadow-md transition-colors`}
            >
              Ver trabajo
            </a>
          </div>
        </div>
      </div>
    </Card>
  );
}
