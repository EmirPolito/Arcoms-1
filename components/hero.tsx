"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";

const SplineScene = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
  loading: () => null,
});

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
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="w-full min-h-[500px] md:h-[600px] lg:h-[650px] relative overflow-hidden bg-background border-0 shadow-none ring-0 text-foreground">
      {/* Contenido */}
      <div className="relative z-10 flex h-full items-center pointer-events-none px-5 sm:px-6 pt-0 pb-12 md:py-0 transform-gpu opacity-100 translate-y-7">
        <div className="mx-auto w-full max-w-lg text-center  lg:ml-16 lg:text-left mt-8 md:-mt-15">
          <div className="relative z-20 mt-2 mb-1 flex justify-center lg:justify-start">
            <Announcement styled animation="fade">
              <AnnouncementTag>Tu Landing</AnnouncementTag>
              <AnnouncementTitle>Experiencia Inmersiva</AnnouncementTitle>
            </Announcement>
          </div>

          <h1 className="relative z-20 font-semibold text-4xl sm:text-5xl md:text-6xl xl:text-7xl text-hero-ttl">
            Bienvenidos
            <br />
            <span>
              a Arcoms <span className="font-light">One</span>
            </span>
          </h1>

          {/* IMAGE FOR MOBILE */}
          <div className="block md:hidden relative z-10 w-full mt-10 flex justify-center">
            <img
              src="/img/Arcoms-mobile-2.png"
              alt="Arcoms Mobile"
              className="w-full max-w-sm h-auto object-contain pointer-events-none"
            />
          </div>

          {/* ROBOT DESKTOP */}
          <div className="hidden md:block absolute inset-0 z-10 transform-gpu pointer-events-auto w-full">
            <div className="w-full h-full origin-top -translate-y-8 md:translate-x-[180px] lg:translate-x-[290px] md:scale-[1.09]">
              {!isMobile && (
                <SplineScene
                  scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                  className="w-full h-full"
                />
              )}
            </div>
          </div>

          <p
            className={`text-center md:text-left text-sm md:text-base relative z-20 mt-8 md:mt-3 text-pretty text-hero-desc ${paragraphSize}`}
          >
            Landing page con experiencia futurista mediante animaciones,
            interacción y diseño minimalista.
          </p>

          <div className="relative z-20 pointer-events-auto mt-3 md:mt-12 flex flex-row justify-center gap-4 sm:gap-5 lg:justify-start">
            <Link
              href="/explore"
              className={`${buttonWidth} w-full max-w-[135px] sm:w-[165px] h-[43px] flex items-center justify-center text-base md:text-lg rounded-md font-medium shadow-md text-hero-btn-txt bg-hero-btn-bg transition-opacity cursor-pointer md:hover:opacity-95`}
            >
              Explorar
            </Link>

            <Link
              href="/work"
              className={`${buttonWidth} w-full max-w-[135px] sm:w-[165px] h-[43px] flex items-center justify-center text-base md:text-lg rounded-lg text-hero-ttl font-medium shadow-md transition-opacity cursor-pointer md:hover:opacity-95`}
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
