"use client";

import { useEffect, useRef, useState, memo } from "react";
import { motion, useInView } from "motion/react";
import createGlobe from "cobe";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import {
  VIEWPORT_CONFIG,
  STAGGER_CONTAINER,
  FADE_UP,
  FADE_UP_REDUCED,
  EASE_PREMIUM,
} from "@/lib/motion-config";

/* =====================================================
   SECTION
===================================================== */

export function CuatroCaracteristicas() {
  const prefersReduced = useReducedMotion();
  const fadeUpVariant = prefersReduced ? FADE_UP_REDUCED : FADE_UP;

  return (
    <section
      className="relative z-20 max-w-8xl mx-auto pt-0 pb-24 space-y-6 md:space-y-5 bg-feat-bg text-feat-txt px-6 sm:px-25 flex flex-col items-center"
      style={{ contain: "layout style" }}
    >
      {/* HEADER INTEGRADO */}
      <div className="text-center  mb-5 md:mb-0 px-4 py-0 md:py-7">
        <div className="flex flex-row flex-wrap items-center justify-center gap-4 mb-2">
          <span className="text-2xl md:text-4xl font-bold tracking-tight text-titulos">
            Título
          </span>
          <span className="bg-buttonC text-primary-foreground px-5 py-1.5 rounded-md text-2xl md:text-4xl font-bold tracking-tight ring-1 ring-white/10">
            texto
          </span>
        </div>
        <p className="text-sm md:text-base text-title-desc max-w-2xl mx-auto">
          Lorem dolor sit met lot amet si consectetu adipisicing meetings elit.
          Quisquam, quod.
        </p>
      </div>

      <motion.div
        className="w-full flex flex-col gap-6 md:gap-5"
        variants={STAGGER_CONTAINER}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT_CONFIG}
      >
        {/* ROW 1 */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-5 items-stretch w-full">
          {/* LEFT — GLOBE CARD */}
          <motion.div
            className="relative overflow-hidden rounded-2xl bg-feat-card border border-feat-border p-5 h-[21rem] md:h-[23rem] w-full md:w-[26rem] flex flex-col"
            variants={fadeUpVariant}
            style={{ willChange: "transform, opacity" }}
          >
            <div className="relative z-10 space-y-1">
              <h3 className="text-feat-ttl text-base font-semibold">Titulo</h3>
              <p className="text-sm text-feat-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit bot,
                quod.adipisicing elite.
              </p>
            </div>

            <div className="absolute inset-0 flex items-end justify-center md:translate-x-[7rem] translate-x-[2.5rem]">
              <Globe />
            </div>

            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-card to-transparent hidden dark:block" />
          </motion.div>

          {/* RIGHT — GLOBAL INFRASTRUCTURE */}
          <motion.div
            className="relative flex-1 rounded-2xl bg-feat-card border border-feat-border p-5.5 overflow-hidden min-h-[23.5rem] md:min-h-0"
            variants={fadeUpVariant}
            style={{ willChange: "transform, opacity" }}
          >
            <div className="max-w-md space-y-1">
              <h4 className="text-feat-ttl text-base font-semibold">Título</h4>
              <p className="text-sm text-feat-desc leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit bot,
                quod.adipisicing elite.
              </p>
            </div>

            <div className="absolute bottom-[-16rem] md:bottom-[-16rem] right-[-5rem] md:right-[-5rem]">
              <div className="rounded-2xl border border-img-frame bg-muted/40 p-4">
                <Image
                  src="/img/5.jpg"
                  alt="Infrastructure"
                  width={800}
                  height={450}
                  draggable={false}
                  className="
                    w-[20rem]
                    md:w-[51rem]
                    h-[28.5rem]
                    object-cover
                    object-center
                    rounded-xl
                    opacity-90
                    pointer-events-none
                  "
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* ROW 2 */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-5 items-stretch w-full">
          {/* LEFT — CHART IMAGE (MOVED FROM RIGHT) */}
          <motion.div
            className="relative flex-1 rounded-2xl bg-feat-card border border-feat-border p-6 overflow-hidden min-h-[23.5rem] md:min-h-0"
            variants={fadeUpVariant}
            style={{ willChange: "transform, opacity" }}
          >
            <div className="max-w-md space-y-1 relative z-10">
              <h4 className="text-feat-ttl text-base font-semibold">Título</h4>
              <p className="text-sm text-feat-desc leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit bot,
                quod.adipisicing elite.
              </p>
            </div>

            <div className="absolute bottom-[-16rem] md:bottom-[-16rem] right-[-5rem] md:right-[-5rem]">
              <div className="rounded-2xl border border-img-frame bg-muted/40 p-4">
                <Image
                  src="/img/5.jpg"
                  alt="Infrastructure"
                  width={800}
                  height={450}
                  draggable={false}
                  className="
                    w-[20rem]
                    md:w-[51rem]
                    h-[28.5rem]
                    object-cover
                    object-center
                    rounded-xl
                    opacity-90
                    pointer-events-none
                  "
                />
              </div>
            </div>
          </motion.div>

          {/* RIGHT — METRIC CARDS (MOVED FROM LEFT) */}
          <motion.div
            className="relative overflow-hidden rounded-2xl bg-feat-card border border-feat-border p-5.5 h-[21rem] md:h-[23rem] w-full md:w-[26rem] flex flex-col"
            variants={fadeUpVariant}
            style={{ willChange: "transform, opacity" }}
          >
            <div className="relative z-10 space-y-1.5">
              <h3 className="text-feat-ttl text-base font-semibold">Titulo</h3>
              <p className="text-sm text-feat-desc">
                Lorem ipsum dolor sit amet consecteetur adipisicing elit.
                Quisquam.adipisicing elit.
              </p>
            </div>

            <div className="flex-1 flex items-center justify-center gap-4 sm:gap-6 md:gap-4 mt-4 md:mt-4 flex-wrap relative z-10">
              {workflowSwingCards.map((card, i) => (
                <motion.div
                  key={card.id}
                  initial={false}
                  animate={
                    prefersReduced
                      ? { rotate: 0, y: 0 }
                      : {
                          rotate: [0, i % 2 === 0 ? 1.5 : -1.5, 0],
                          y: [0, -3, 0],
                        }
                  }
                  transition={{
                    duration: prefersReduced ? 0 : 8 + i * 2,
                    repeat: prefersReduced ? 0 : Infinity,
                    ease: EASE_PREMIUM,
                  }}
                  className="
                    h-20 w-20
                    sm:h-28 sm:w-28
                    md:h-28 md:w-28
                    rounded-xl
                    border border-border
                    bg-secondary
                    shadow-sm
                    flex items-center justify-center
                    transform-gpu
                  "
                  style={{ willChange: "transform" }}
                >
                  {card.content}
                </motion.div>
              ))}
            </div>

            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-feat-card to-transparent hidden dark:block" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

/* =====================================================
   WORKFLOW SWING CARDS
===================================================== */

const workflowSwingCards = [
  {
    id: 1,
    content: (
      <div className="text-center">
        <p className="text-xl md:text-2xl font-bold text-emerald-400">99.9%</p>
        <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider mt-1">
          Uptime Seguro
        </p>
      </div>
    ),
  },
  {
    id: 2,
    content: (
      <div className="text-center">
        <p className="text-xl md:text-2xl font-bold text-blue-400">10x</p>
        <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider mt-1">
          Más Rápido
        </p>
      </div>
    ),
  },
  {
    id: 3,
    content: (
      <div className="text-center">
        <p className="text-xl md:text-2xl font-bold text-purple-400">
          &lt;10ms
        </p>
        <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider mt-1">
          Latencia
        </p>
      </div>
    ),
  },
];

/* =====================================================
   GLOBE (OPTIMIZADO)
===================================================== */

const Globe = memo(function Globe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { resolvedTheme } = useTheme();
  const [themeTick, setThemeTick] = useState(0);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (
          mutation.attributeName === "data-theme" ||
          mutation.attributeName === "data-color"
        ) {
          setThemeTick((t) => t + 1);
        }
      }
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme", "data-color"],
    });
    return () => observer.disconnect();
  }, []);

  const isVisible = useInView(canvasRef, { margin: "200px" });

  useEffect(() => {
    if (!canvasRef.current || !isVisible) return;

    let phi = 0;
    const isDark = resolvedTheme === "dark";

    const getCssVarRgb = (
      varName: string,
      fallback: [number, number, number],
    ): [number, number, number] => {
      if (typeof window === "undefined") return fallback;
      const hex = getComputedStyle(document.documentElement)
        .getPropertyValue(varName)
        .trim();
      if (hex.startsWith("#")) {
        const r = parseInt(hex.slice(1, 3), 16) / 255;
        const g = parseInt(hex.slice(3, 5), 16) / 255;
        const b = parseInt(hex.slice(5, 7), 16) / 255;
        if (!isNaN(r) && !isNaN(g) && !isNaN(b)) return [r, g, b];
      }
      return fallback;
    };

    const primaryRgb = getCssVarRgb(
      "--primary",
      isDark ? [0.1, 0.1, 0.1] : [1, 1, 1],
    );

    // Detecta colores neutrales (blancos, negros, grises) incluyendo tonos casi grises
    const isNeutral =
      Math.abs(primaryRgb[0] - primaryRgb[1]) < 0.1 &&
      Math.abs(primaryRgb[1] - primaryRgb[2]) < 0.1;

    // Asignación inteligente de color:
    // - Si es neutral, usa blanco puro en claro y "un poco oscuro" en oscuro.
    // - Si hay un color llamativo (naranja, azul), usa ese color.
    const globeColor: [number, number, number] = isNeutral
      ? isDark
        ? [0.25, 0.25, 0.25]
        : [1, 1, 1]
      : primaryRgb;

    // Si el globo es blanco/muy claro, necesita líneas oscuras para que se vea la red.
    const isBright = globeColor[0] + globeColor[1] + globeColor[2] > 2.5;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 1,
      width: 600,
      height: 600,
      phi: 0,
      theta: 0,
      dark: isBright ? 0 : 1,
      diffuse: 1.2,
      mapSamples: prefersReduced ? 2000 : 8000,
      mapBrightness: 6,
      baseColor: globeColor,
      glowColor: globeColor,
      markerColor: isBright ? [0.1, 0.1, 0.1] : [1, 1, 1],
      markers: [
        { location: [37.7595, -122.4367], size: 0.03 },
        { location: [40.7128, -74.006], size: 0.1 },
      ],
      onRender: (state: Record<string, number>) => {
        state.phi = phi;
        if (!prefersReduced) {
          phi += 0.005;
        }
      },
    });

    return () => globe.destroy();
  }, [resolvedTheme, themeTick, isVisible, prefersReduced]);

  return (
    <canvas
      ref={canvasRef}
      className="translate-y-[9rem] scale-[0.75] md:scale-80 aspect-square"
      style={{ width: 450, height: 450, maxWidth: "110%" }}
    />
  );
});
