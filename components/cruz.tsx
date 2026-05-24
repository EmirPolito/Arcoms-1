"use client";
import React, { useState, useEffect, memo } from "react";
import { Check } from "lucide-react";
import { motion } from "motion/react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import {
  VIEWPORT_CONFIG,
  STAGGER_CONTAINER_FAST,
  FADE_UP,
  FADE_UP_REDUCED,
  EASE_PREMIUM_CSS,
} from "@/lib/motion-config";

// Data defined outside to prevent re-creation on render
const AGENT_STATES = [
  { id: 1, name: "Subtitulo 1", state: "Ejecutando", color: "bg-green-500" },
  { id: 2, name: "Subtitulo 2", state: "En espera", color: "bg-background" },
  { id: 3, name: "Subtitulo 3", state: "Procesando", color: "bg-orange-500" },
  { id: 4, name: "Subtitulo 4", state: "Pausado", color: "bg-blue-500" },
  { id: 5, name: "Subtitulo 5", state: "Pausado", color: "bg-red-500" },
];

const GUARDRAIL_CHECKS = [
  { id: 1, label: "Subtitulo 1", color: "bg-primary" },
  { id: 2, label: "Subtitulo 2", color: "bg-primary" },
  { id: 3, label: "Subtitulo 3", color: "bg-primary" },
  { id: 4, label: "Subtitulo 4", color: "bg-primary" },
  { id: 5, label: "Subtitulo 5", color: "bg-primary" },
];

/* ─── Memoized Sub-components ─── */

const AgentItem = memo(
  ({
    agent,
    isActive,
    prefersReduced,
  }: {
    agent: (typeof AGENT_STATES)[0];
    isActive: boolean;
    prefersReduced: boolean;
  }) => (
    <div
      className={`flex items-center justify-between p-3 sm:p-5 rounded-lg border ${
        isActive
          ? "border-primary/80 bg-primary/15 shadow-md ring-1 ring-primary/20"
          : "border-feat-border bg-feat-card opacity-70"
      }`}
      style={{
        transition: prefersReduced
          ? "none"
          : `background-color 0.4s ${EASE_PREMIUM_CSS}, border-color 0.4s ${EASE_PREMIUM_CSS}, box-shadow 0.4s ${EASE_PREMIUM_CSS}, opacity 0.4s ${EASE_PREMIUM_CSS}`,
      }}
    >
      <span className="text-sm text-feat-desc font-medium">{agent.name}</span>
      <div className="flex items-center gap-3">
        <span className="text-xs text-feat-desc/80">{agent.state}</span>
        <span
          className={`w-2.5 h-2.5 rounded-full ${agent.color} ${
            isActive && !prefersReduced ? "animate-pulse" : ""
          }`}
        />
      </div>
    </div>
  ),
);
AgentItem.displayName = "AgentItem";

const GuardrailItem = memo(
  ({
    check,
    isCompleted,
    prefersReduced,
  }: {
    check: (typeof GUARDRAIL_CHECKS)[0];
    isCompleted: boolean;
    prefersReduced: boolean;
  }) => (
    <div className="flex items-center gap-3 sm:gap-5 p-3 sm:p-5 rounded-md border border-feat-border/60 bg-feat-card shadow-xs">
      <div
        className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
          isCompleted ? check.color : "border border-feat-border"
        }`}
        style={{
          transition: prefersReduced
            ? "none"
            : `background-color 0.3s ${EASE_PREMIUM_CSS}, border-color 0.3s ${EASE_PREMIUM_CSS}`,
        }}
      >
        {isCompleted && (
          <Check className="w-3.5 h-3.5 text-primary2" strokeWidth={4} />
        )}
      </div>
      <span className="text-xs font-medium text-feat-desc">{check.label}</span>
    </div>
  ),
);
GuardrailItem.displayName = "GuardrailItem";

export default function EstadoAgentes() {
  const [progress, setProgress] = useState(0);
  const prefersReduced = useReducedMotion();
  const fadeUpVariant = prefersReduced ? FADE_UP_REDUCED : FADE_UP;

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev + 1) % 5);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full py-16 md:py-27 bg-feat-bg text-feat-txt overflow-hidden">
      <div className="relative max-w-8xl mx-auto px-4 sm:px-15 flex flex-col items-center">
        {/* HEADER */}
        <div className="text-center mb-1 md:mb-20 px-4">
          <div className="inline-flex relative items-center justify-center px-6 py-2 border border-primary-general/30 mb-2 group transition-colors">
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-title-ttl">
              Ecosistema de Agentes
            </h2>
            <div className="absolute -bottom-2 -right-2 transform rotate-[-90deg] text-primary-general">
              <svg className="h-5 w-5 fill-current" viewBox="0 0 16 16">
                <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z" />
              </svg>
            </div>
          </div>
          <p className="text-sm md:text-base text-title-desc max-w-2xl mx-auto leading-relaxed">
            Gestión inteligente y segura en tiempo real. Gestión inteligente y
            segura en tiempo real.
          </p>
        </div>

        {/* GRID CONTAINER */}
        <div className="relative w-full">
          {/* Decorative Grid Lines */}
          <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-feat-border/20 hidden md:block" />
          <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-feat-border/20 hidden md:block" />

          <div className="grid grid-cols-1 md:grid-cols-2 md:min-h-[600px] gap-px bg-feat-border/20">
            {/* COLUMN 1: Agent Status (Top-Left) */}
            <div className="bg-feat-bg p-6 md:p-15 space-y-8">
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-feat-ttl mb-2">
                  Monitoreo de Agentes
                </h3>
                <p className="text-sm text-feat-desc max-w-md">
                  Estado actual y flujo de ejecución de las entidades
                  inteligentes activas en el sistema.
                </p>
              </div>
              <motion.div
                className="space-y-3"
                variants={STAGGER_CONTAINER_FAST}
                initial="hidden"
                whileInView="visible"
                viewport={VIEWPORT_CONFIG}
              >
                {AGENT_STATES.map((agent, index) => (
                  <motion.div
                    key={agent.id}
                    variants={fadeUpVariant}
                    style={{ willChange: "transform, opacity" }}
                  >
                    <AgentItem
                      agent={agent}
                      isActive={progress === index}
                      prefersReduced={prefersReduced}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* COLUMN 2: Features Text 1 (Top-Right) */}
            <div className="bg-feat-bg p-6 md:p-15 space-y-6">
              <div className="space-y-4">
                <h3 className="text-xl md:text-2xl font-semibold text-feat-ttl">
                  Operación Autónoma
                </h3>
                <p className="text-[10px] tracking-[0.3em] uppercase text-primary-general font-bold">
                  Sistema Inteligente
                </p>
                <p className="text-sm text-feat-desc leading-relaxed">
                  Nuestros agentes operan de manera independiente, coordinando
                  tareas complejas con mínima intervención, asegurando una
                  productividad constante y optimizada.
                </p>
              </div>
              <ul className="grid grid-cols-1 gap-3 text-sm text-feat-desc/80">
                {[
                  "Toma de decisiones proactiva",
                  "Coordinación multi-agente fluida",
                  "Aprendizaje continuo en tiempo real",
                  "Priorización inteligente de objetivos",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 group">
                    <span
                      className="w-1.5 h-1.5 rounded-full bg-primary-general/60 group-hover:bg-primary-general"
                      style={{
                        transition: prefersReduced
                          ? "none"
                          : `background-color 0.3s ${EASE_PREMIUM_CSS}`,
                      }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* COLUMN 3: Features Text 2 (Bottom-Left) */}
            <div className="bg-feat-bg p-6 md:p-15 space-y-6 order-last md:order-none">
              <div className="space-y-4">
                <h3 className="text-xl md:text-2xl font-semibold text-feat-ttl">
                  Seguridad y Control
                </h3>
                <p className="text-[10px] tracking-[0.3em] uppercase text-primary-general font-bold">
                  Guardrails Activos
                </p>
                <p className="text-sm text-feat-desc leading-relaxed">
                  Cada acción es filtrada a través de protocolos estrictos que
                  previenen comportamientos inesperados y garantizan el
                  cumplimiento de normativas.
                </p>
              </div>
              <ul className="grid grid-cols-1 gap-3 text-sm text-feat-desc/80">
                {[
                  "Filtrado de contenido sensible",
                  "Límites operativos definidos",
                  "Auditoría de procesos en vivo",
                  "Prevención de sesgos y errores",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 group">
                    <span
                      className="w-1.5 h-1.5 rounded-full bg-primary-general/60 group-hover:bg-primary-general"
                      style={{
                        transition: prefersReduced
                          ? "none"
                          : `background-color 0.3s ${EASE_PREMIUM_CSS}`,
                      }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* COLUMN 4: Guardrail Progress (Bottom-Right) */}
            <div className="bg-feat-bg p-6 md:p-15 space-y-8">
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-feat-ttl mb-2">
                  Validación de Protocolos
                </h3>
                <p className="text-sm text-feat-desc max-w-md">
                  Verificación secuencial de normativas y reglas de cumplimiento
                  activas en el entorno.
                </p>
              </div>
              <motion.div
                className="space-y-3"
                variants={STAGGER_CONTAINER_FAST}
                initial="hidden"
                whileInView="visible"
                viewport={VIEWPORT_CONFIG}
              >
                {GUARDRAIL_CHECKS.map((check, index) => (
                  <motion.div
                    key={check.id}
                    variants={fadeUpVariant}
                    style={{ willChange: "transform, opacity" }}
                  >
                    <GuardrailItem
                      check={check}
                      isCompleted={progress >= index}
                      prefersReduced={prefersReduced}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
