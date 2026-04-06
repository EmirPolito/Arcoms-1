"use client";
import { useState, useEffect } from "react";

// Componente 1
const agentStates = [
  { id: 1, name: "Subtitulo 1", state: "Ejecutando", color: "bg-green-500" },
  { id: 2, name: "Subtitulo 2", state: "En espera", color: "bg-white" },
  { id: 3, name: "Subtitulo 3", state: "Procesando", color: "bg-orange-500" },
  { id: 4, name: "Subtitulo 4", state: "Pausado", color: "bg-blue-500" },
  { id: 5, name: "Subtitulo 5", state: "Pausado", color: "bg-red-500" },
];

// Componente 2
const guardrailChecks = [
  { id: 1, label: "Subtitulo 1", color: "bg-primary-general" },
  { id: 2, label: "Subtitulo 2", color: "bg-primary-general" },
  { id: 3, label: "Subtitulo 3", color: "bg-primary-general" },
  { id: 4, label: "Subtitulo 4", color: "bg-primary-general" },
  { id: 5, label: "Subtitulo 5", color: "bg-primary-general" },
];

export default function EstadoAgentes() {
  const [guardrailProgress, setGuardrailProgress] = useState(0);
  const [activeAgent, setActiveAgent] = useState(0);

  // MÁS SUAVE + RECORRE BIEN LOS 5
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveAgent((prev) => {
        if (prev === agentStates.length - 1) {
          return 0; // reinicia limpio después del último
        }
        return prev + 1;
      });
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  // MISMA VELOCIDAD QUE EL PRIMERO
  useEffect(() => {
    const interval = setInterval(() => {
      setGuardrailProgress((prev) => {
        if (prev === guardrailChecks.length - 1) {
          return 0;
        }
        return prev + 1;
      });
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full py-8 bg-feat-bg text-feat-txt">
      <div className="relative max-w-7xl mx-auto">
        {/* líneas cruz */}
        <div className="absolute top-1/2 left-0 right-0 h-px bg-feat-border/100" />
        <div className="absolute top-0 bottom-0 left-1/2 w-px bg-feat-border/100" />

        <div className="grid grid-cols-2 grid-rows-2 min-h-[700px]">
          <div className="p-12 pr-16 space-y-10">
            <div>
              <h2 className="text-2xl font-semibold text-feat-ttl mb-2">
                Título de la sección
              </h2>
              <p className="text-sm max-w-md-lg text-feat-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quod. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Quisquam, quod.
              </p>
            </div>

            <div className="space-y-3">
              {agentStates.map((agent, index) => (
                <div
                  key={agent.id}
                  className={`flex items-center justify-between p-5 rounded-lg border transition-[opacity,background-color,border-color,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    activeAgent === index
                      ? "border-primary/45 bg-primary/5 shadow-sm"
                      : "border-border bg-card shadow-xs opacity-90"
                  }`}
                >
                  <span className="text-sm text-feat-desc">{agent.name}</span>

                  <div className="flex items-center gap-3">
                    <span className="text-xs">{agent.state}</span>
                    <span
                      className={`w-2.5 h-2.5 rounded-full ${agent.color} ${
                        activeAgent === index ? "animate-pulse" : ""
                      }`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ===== TEXTO  ===== */}
          <div className="p-12 pl-16 space-y-10">
            <div className="space-y-3 max-w-md">
              <h2 className="text-2xl font-semibold text-feat-ttl leading-snug">
                Título de la sección
              </h2>

              <p className="text-[11px] tracking-widest uppercase text-feat-desc">
                Subtítulo de la sección
              </p>

              <p className="text-sm max-w-md-lg text-feat-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quod. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet
                consectetur adipisicing.
              </p>
            </div>

            <ul className="py-2 space-y-2.5 text-sm text-feat-desc">
              <li>
                • Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </li>
              <li>
                • Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </li>
              <li>
                • Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </li>
              <li>
                • Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </li>
              <li>
                • Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </li>
              <li>
                • Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </li>
              <li>
                • Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </li>
              <li>
                • Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </li>
              <li>
                • Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </li>
            </ul>
          </div>

          {/* ===== TEXTO  ===== */}
          <div className="p-12 pl-16 space-y-10">
            <div className="space-y-3 max-w-md">
              <h2 className="text-2xl font-semibold text-feat-ttl leading-snug">
                Título de la sección
              </h2>

              <p className="text-[11px] tracking-widest uppercase text-feat-desc">
                Subtítulo de la sección
              </p>

              <p className="text-sm max-w-md-lg text-feat-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quod. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet
                consectetur adipisicing.
              </p>
            </div>

            <ul className="py-2 space-y-2.5 text-sm text-feat-desc">
              <li>
                • Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </li>
              <li>
                • Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </li>
              <li>
                • Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </li>
              <li>
                • Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </li>
              <li>
                • Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </li>
              <li>
                • Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </li>
              <li>
                • Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </li>
              <li>
                • Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </li>
              <li>
                • Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </li>
            </ul>
          </div>

          {/* ===== INTERACTIVO ===== */}
          <div className="p-12 pl-16 space-y-14">
            <div>
              <h2 className="text-2xl font-semibold text-feat-ttl mb-2">
                Título de la sección
              </h2>
              <p className="text-sm max-w-md-lg text-feat-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quod. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Quisquam, quod.
              </p>
            </div>

            <div className="space-y-3">
              {guardrailChecks.map((check, index) => (
                <div
                  key={check.id}
                  className={`flex items-center gap-5 p-5 rounded-md border transition-[opacity,transform,background-color,border-color,box-shadow] duration-600 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform ${
                    guardrailProgress >= index
                      ? "opacity-90 translate-x-0 bg-card border-feat-border/60 shadow-xs"
                      : "opacity-0 translate-x-2 border-transparent"
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 transition-[background-color,border-color] duration-500 ease-out ${
                      guardrailProgress >= index
                        ? `${check.color}`
                        : "border border-border/50"
                    }`}
                  >
                    {guardrailProgress >= index && (
                      <svg
                        className="w-3.5 h-3.5 text-primary2 transition-opacity duration-500 ease-out"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={4}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    )}
                  </div>

                  <span className="text-xs font-medium transition-opacity duration-700 ease-out">
                    {check.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
