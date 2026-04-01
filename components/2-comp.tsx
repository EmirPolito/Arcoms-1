"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import createGlobe from "cobe";

/* =====================================================
   SECTION
===================================================== */

export function Component2() {
  return (
    <section className="relative z-20 max-w-7xl mx-auto pt-10 pb-24 space-y-5.5 bg-feat-bg text-feat-txt">
      {/* ROW 1 */}
      <div className="flex flex-col md:flex-row gap-4.5 items-stretch">
        {/* LEFT — GLOBE CARD */}
        <div className="relative overflow-hidden rounded-2xl bg-feat-card border border-feat-border p-5 h-[23rem] w-full md:w-[26rem] flex flex-col">
          <div className="relative z-10 space-y-1.5">
            <h3 className="text-feat-ttl text-base font-semibold">
              Distribución Global Edge
            </h3>
            <p className="text-sm text-feat-desc">
              Con nuestra red perimetral, interactúa en tiempo real a nivel
              mundial.
            </p>
          </div>

          <div className="absolute inset-0 flex items-end justify-center translate-x-[8.75rem]">
            <Globe />
          </div>

          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-card to-transparent" />
        </div>

        {/* RIGHT — GLOBAL INFRASTRUCTURE */}
        <div className="relative flex-1 rounded-2xl bg-feat-card border border-feat-border p-5.5 overflow-hidden">
          <div className="max-w-md space-y-2">
            <h4 className="text-feat-ttl text-base font-semibold">
              Infraestructura Global
            </h4>
            <p className="text-sm text-feat-desc leading-relaxed">
              Tecnología en la nube que escala tus operaciones visuales
              inteligentemente.
            </p>
          </div>

          <div className="absolute bottom-[-15rem] right-[-1.5rem]">
            <div className="rounded-2xl border border-border bg-muted/40 p-4">
              <img
                src="/img/5.jpg"
                alt="Infrastructure"
                draggable={false}
                className="
                  w-40
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
          <h4 className="text-feat-ttl text-base font-semibold">
            Rendimiento Superior Garantizado
          </h4>
          <p className="text-sm text-feat-desc leading-relaxed">
            Supera a la competencia con velocidad, disponibilidad asombrosa y
            tiempos de respuesta mínimos.
          </p>

          <div className="flex items-center justify-center gap-13 mt-19">
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
                  h-43 w-43
                  rounded-xl
                  border border-border
                  bg-background
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
        <div className="relative overflow-hidden rounded-2xl bg-feat-card border border-feat-border p-5.5 h-[23rem] w-full md:w-[26rem] flex flex-col">
          <div className="relative z-10 space-y-1.5">
            <h3 className="text-feat-ttl text-base font-semibold">
              Escalado Inteligente
            </h3>
            <p className="text-sm text-feat-desc">
              Escala instantáneamente sin comprometer latencia en renderizados
              3D.
            </p>
          </div>

          <div className="absolute bottom-[-4rem] right-[-1.5rem]">
            <div className="rounded-2xl border border-border bg-muted/40 p-4">
              <img
                src="/img/5.jpg"
                alt="Scaling"
                draggable={false}
                className="
                  h-[18rem]
                  w-[24rem]
                  object-right
                  rounded-xl
                  opacity-90
                  pointer-events-none
                "
              />
            </div>
          </div>

          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-feat-card to-transparent" />
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
        <p className="text-2xl font-bold text-emerald-400">99.9%</p>
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
        <p className="text-2xl font-bold text-blue-400">10x</p>
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
        <p className="text-2xl font-bold text-purple-400">&lt;10ms</p>
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

  useEffect(() => {
    if (!canvasRef.current) return;

    let phi = 0;
    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 840,
      height: 840,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.25, 0.25, 0.25],
      markerColor: [1, 1, 1],
      glowColor: [1, 1, 1],
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
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="translate-y-[9rem] scale-[1.1] aspect-square"
      style={{ width: 500, height: 420, maxWidth: "110%" }}
    />
  );
}
