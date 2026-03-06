"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import createGlobe from "cobe";

/* =====================================================
   SECTION
===================================================== */

export function Component2() {
  return (
<section className="relative z-20 max-w-6xl mx-auto pt-10 pb-24 space-y-5.5">
      {/* ROW 1 */}
      <div className="flex flex-col md:flex-row gap-4.5 items-stretch">
        
        {/* LEFT — GLOBE CARD */}
        <div className="relative overflow-hidden rounded-2xl bg-card border border-border p-5 h-[23rem] w-full md:w-[26rem] flex flex-col">
          <div className="relative z-10 space-y-1.5">
            <h3 className="text-primary-general text-base font-semibold">
              Hosting over the edge
            </h3>
            <p className="text-sm text-primary-color-text">
              With our edge network, we host your website globally.
            </p>
          </div>

          <div className="absolute inset-0 flex items-end justify-center translate-x-[8.75rem]">
            <Globe />
          </div>

          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-card to-transparent" />
        </div>



        {/* RIGHT — GLOBAL INFRASTRUCTURE */}
        <div className="relative flex-1 rounded-2xl bg-card border border-border p-5.5 overflow-hidden">
          <div className="max-w-md space-y-2">
            <h4 className="text-primary-general text-base font-semibold">
              Global infrastructure
            </h4>
            <p className="text-sm text-primary-color-text leading-relaxed">
              You are running out of copy for your website.
            </p>
          </div>

          <div className="absolute bottom-[-14rem] right-[-1.5rem]">
            <div className="rounded-2xl border border-neutral-800/70 bg-neutral-800/40 p-4">
              <img
                src="/img/5.jpg"
                alt="Infrastructure"
                draggable={false}
                className="
                  w-40
                  md:w-[43rem]
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
        <div className="relative flex-1 rounded-2xl bg-card border border-border p-6 overflow-hidden">
            <h4 className="text-primary-general text-base font-semibold">
            Automated workflows
          </h4>
          <p className="text-sm text-primary-color-text leading-relaxed">
            Deploy and manage your infrastructure with smooth automated steps.
          </p>

          <div className="flex items-center justify-center gap-10 mt-19">
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
                  border border-neutral-800/60
                  bg-neutral-900/90
                  backdrop-blur-md
                  shadow-[0_30px_40px_-20px_rgba(0,0,0,0.8)]
                  flex items-center justify-center
                "
              >
                {card.content}
              </motion.div>
            ))}
          </div>
        </div>

        {/* RIGHT — INTELLIGENT SCALING */}
        <div className="relative overflow-hidden rounded-2xl bg-card border border-border p-5.5 h-[23rem] w-full md:w-[26rem] flex flex-col">
          <div className="relative z-10 space-y-1.5">
            <h3 className="text-primary-general text-base font-semibold">
              Intelligent scaling
            </h3>
            <p className="text-sm text-primary-color-text">
              Scale instantly with smart edge distribution.
            </p>
          </div>

          <div className="absolute bottom-[-3rem] right-[-1.5rem]">
            <div className="rounded-2xl border border-neutral-800/70 bg-neutral-800/40 p-4">
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

          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-card to-transparent" />
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
      <pre className="text-sm text-neutral-300 font-mono leading-relaxed">
        git add .{"\n"}
        git commit -m "update"{"\n"}
        git push
      </pre>
    ),
  },
  {
    id: 2,
    content: (
      <svg viewBox="0 0 24 24" className="h-10 w-10 fill-neutral-200">
        <path d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.11 3.29 9.44 7.86 10.97.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.3 1.2-3.11-.12-.3-.52-1.52.11-3.16 0 0 .97-.31 3.18 1.19.92-.26 1.9-.39 2.88-.39.98 0 1.96.13 2.88.39 2.21-1.5 3.18-1.19 3.18-1.19.63 1.64.23 2.86.11 3.16.75.81 1.2 1.85 1.2 3.11 0 4.42-2.69 5.4-5.25 5.68.41.35.78 1.04.78 2.1 0 1.52-.01 2.75-.01 3.12 0 .31.21.67.8.56 4.57-1.53 7.85-5.86 7.85-10.97C23.5 5.74 18.27.5 12 .5z" />
      </svg>
    ),
  },
  {
    id: 3,
    content: (
      <div className="text-center">
        <p className="text-lg font-semibold text-neutral-200">aws</p>
        <p className="text-xs text-neutral-400">your site is live ✨</p>
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