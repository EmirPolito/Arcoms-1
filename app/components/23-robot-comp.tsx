"use client";

import { useEffect, useRef, useState } from "react";
import { SplineScene } from "@/app/components/ui/splite";
import { Card } from "@/app/components/ui/card";
import { Spotlight } from "@/app/components/ui/spotlight";

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
    <Card ref={cardRef} className="w-full h-[650px] relative overflow-hidden">
      {/* Glow */}
      <div
        className="pointer-events-none absolute inset-0 z-20"
        style={{
          background:
            "radial-gradient(200px circle at var(--x) var(--y), rgba(255,255,255,0.15), transparent 0%)",
        }}
      />

      {/* Spotlight */}
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />

      {/* Spline */}
      <div
        className={`
          absolute inset-0 z-10
          transition-all duration-[1600ms] ease-out
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
        `}
      >
        <div className="w-full h-full scale-[1] origin-top -translate-y-17 translate-x-[285px]">
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>

      {/* Contenido */}
      <div
        className={`
          relative z-10 flex h-full items-start pt-20 pointer-events-none
          transition-all duration-[1800ms] ease-out delay-300
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
        `}
      >
        <div className="mx-auto max-w-lg text-center lg:ml-32 lg:text-left">
          <h1 className="font-medium xl:text-7xl text-primary-general">
            Welcome
            <br />
            <span className="block">to Arcoms 1</span>
          </h1>

          <p className={`mt-3 text-pretty ${paragraphSize}`}>
            Arcoms 1 is a project that explores the vision of design and the
            creation of modern web experiences, where structure, aesthetics and
            interaction are integrated into every detail.
          </p>

          <div className="pointer-events-auto mt-14 flex justify-center gap-5 lg:justify-start">
            <a
              href="/"
              className={`${buttonWidth} w-[160px] h-[43px] flex items-center justify-center text-lg rounded-lg font-medium shadow-md text-23-hero-boton1 bg-primary-general`}
            >
              Explore
            </a>

            <a
              href="/"
              className={`${buttonWidth} w-[160px] h-[43px] flex items-center justify-center text-lg rounded-lg text-white font-medium shadow-md transition-colors`}
            >
              View work
            </a>
          </div>
        </div>
      </div>
    </Card>
  );
}
