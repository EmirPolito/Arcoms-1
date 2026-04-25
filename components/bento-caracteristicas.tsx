"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import createGlobe from "cobe";
import Image from "next/image";
import { useTheme } from "next-themes";
/* =====================================================
   SECTION
===================================================== */

export function BentoCaracteristicas() {
  return (
    <section
      className="relative z-20 max-w-7xl mx-auto pt-10 pb-24 space-y-5.5 bg-feat-bg text-feat-txt px-4 sm:px-6"
      style={{ contain: "layout style" }}
    >
      {/* ROW 1 */}
      <div className="flex flex-col md:flex-row gap-4.5 items-stretch">
        {/* LEFT — GLOBE CARD */}
        <div className="relative overflow-hidden rounded-2xl bg-feat-card border border-feat-border p-5 h-[20rem] md:h-[23rem] w-full md:w-[26rem] flex flex-col will-change-transform">
          <div className="relative z-10 space-y-1">
            <h3 className="text-feat-ttl text-base font-semibold">Titulo</h3>
            <p className="text-sm text-feat-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quod.adipisicing elit. Quisquam.
            </p>
          </div>

          <div className="absolute inset-0 flex items-end justify-center md:translate-x-[7rem] translate-x-[2.5rem]">
            <Globe />
          </div>

          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-card to-transparent hidden dark:block" />
        </div>

        {/* RIGHT — GLOBAL INFRASTRUCTURE */}
        <div className="relative flex-1 rounded-2xl bg-feat-card border border-feat-border p-5.5 overflow-hidden min-h-[16rem] md:min-h-0">
          <div className="max-w-md space-y-1">
            <h4 className="text-feat-ttl text-base font-semibold">Título</h4>
            <p className="text-sm text-feat-desc leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam.
            </p>
          </div>

          <div className="absolute bottom-[-23rem] md:bottom-[-15rem] right-[-2rem] md:right-[-4.5rem]">
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
        </div>
      </div>

      {/* ROW 2 */}
      <div className="flex flex-col md:flex-row gap-4 items-stretch">
        {/* LEFT — AUTOMATED WORKFLOWS (NEW) */}
        <div className="relative flex-1 rounded-2xl bg-feat-card border border-feat-border p-6 overflow-hidden">
          <h4 className="text-feat-ttl text-base font-semibold">Título</h4>
          <p className="text-sm text-feat-desc leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam.
          </p>

          <div className="flex items-center justify-center gap-6 sm:gap-8 md:gap-13 mt-10 md:mt-19 flex-wrap">
            {workflowSwingCards.map((card, i) => (
              <motion.div
                key={card.id}
                animate={{
                  rotate: [0, i % 2 === 0 ? 2 : -2, 0],
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 4 + i,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  h-28 w-28
                  sm:h-36 sm:w-36
                  md:h-43 md:w-43
                  rounded-xl
                  border border-border
                  bg-secondary
                  shadow-sm
                  flex items-center justify-center
                "
              >
                {card.content}
              </motion.div>
            ))}
          </div>
        </div>

        {/* RIGHT — INTELLIGENT SCALING */}
        <div className="relative overflow-hidden rounded-2xl bg-feat-card border border-feat-border p-5.5 h-[20rem] md:h-[23rem] w-full md:w-[26rem] flex flex-col">
          <div className="relative z-10 space-y-1.5">
            <h3 className="text-feat-ttl text-base font-semibold">Titulo</h3>
            <p className="text-sm text-feat-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quisquam.adipisicing elit. Quisquam.Quisquam
            </p>
          </div>

          <div className="absolute bottom-[-9rem] md:bottom-[-4rem] right-[0] md:right-[-1.5rem]">
            <div className="rounded-2xl border border-img-frame bg-muted/40 p-4">
              <Image
                src="/img/5.jpg"
                alt="Scaling"
                width={400}
                height={300}
                draggable={false}
                className="
                  h-[18rem]
                  w-[18rem]
                  sm:w-[24rem]
                  object-right
                  rounded-xl
                  opacity-90
                  pointer-events-none
                "
              />
            </div>
          </div>

          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-feat-card to-transparent hidden dark:block" />
        </div>
      </div>
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
   GLOBE (NO TOCADO)
===================================================== */

function Globe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { resolvedTheme } = useTheme();
  const [themeTick, setThemeTick] = useState(0);

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

  useEffect(() => {
    if (!canvasRef.current) return;

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
      devicePixelRatio: 2,
      width: 840,
      height: 840,
      phi: 0,
      theta: 0,
      dark: isBright ? 0 : 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: globeColor,
      glowColor: globeColor,
      markerColor: isBright ? [0.1, 0.1, 0.1] : [1, 1, 1],
      markers: [
        { location: [37.7595, -122.4367], size: 0.03 },
        { location: [40.7128, -74.006], size: 0.1 },
      ],
      onRender: (state: any) => {
        state.phi = phi;
        phi += 0.01;
      },
    });

    return () => globe.destroy();
  }, [resolvedTheme, themeTick]);

  return (
    <canvas
      ref={canvasRef}
      className="translate-y-[8rem] scale-[0.75] md:scale-100 aspect-square"
      style={{ width: 450, height: 450, maxWidth: "110%" }}
    />
  );
}
