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
  const [isVisible, setIsVisible] = useState(false);

  // Animación inicial inmediata para mayor respuesta
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div
      className="w-full h-auto min-h-[500px] md:h-[600px] lg:h-[650px] relative overflow-hidden bg-background border-0 shadow-none ring-0 text-foreground"
    >
      {/* Background Lights removed by user request for 100% Pure Black */}

      {/* Contenido */}
      <div
        className={`
          relative z-10 flex h-full items-center pointer-events-none px-4 sm:px-6 pt-6 pb-12 md:py-0 transform-gpu
          transition-[opacity,transform] duration-[500ms] ease-out will-change-[opacity,transform]
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
        `}
      >
        <div className="mx-auto w-full max-w-lg text-center lg:ml-16 lg:text-left -mt-8 md:-mt-36">
          <div className="relative z-20 mb-3 flex justify-center lg:justify-start">
            <Announcement styled animation="fade">
              <AnnouncementTag>Tu Landing</AnnouncementTag>
              <AnnouncementTitle>Experiencia Inmersiva</AnnouncementTitle>
            </Announcement>
          </div>
          <h1 className="relative z-20 font-semibold text-4xl sm:text-5xl md:text-6xl xl:text-7xl text-hero-ttl">
            Bienvenidos
            <br />
            <span className="block">a Arcoms 1</span>
          </h1>

          {/* ROBOT: Inline en móvil, Fondo absoluto en laptop */}
          <div
            className={`
              relative md:absolute md:inset-0 z-10 block transform-gpu pointer-events-auto
              h-[350px] md:h-auto my-6 md:my-0 w-full
            `}
          >
            <div className="w-full h-full scale-[1.0] sm:scale-[1.1] md:scale-[1.09] origin-center md:origin-top -translate-y-4 md:-translate-y-24 md:translate-x-[180px] lg:translate-x-[290px]">
              <SplineScene
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
              />
            </div>
          </div>

          <p className={`relative z-20 mt-3 text-pretty text-hero-desc ${paragraphSize}`}>
            Esta es una landing page adaptable enfocada en crear una experiencia
            inmersiva mediante animaciones, interacción y diseño minimalista. Su
            objetivo es impactar visualmente y servir como plantilla base de
            alto nivel.
          </p>

          <div className="relative z-20 pointer-events-auto mt-8 md:mt-12 flex flex-col sm:flex-row justify-center gap-3 sm:gap-5 lg:justify-start">
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
