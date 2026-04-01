// "use client";
// import { useState, useEffect } from "react";

// //Componente 1
// const agentStates = [
//   { id: 1, name: "Agent Alpha", state: "Running", color: "bg-green-500" },
//   { id: 2, name: "Agent Beta", state: "Idle", color: "bg-white" },
//   { id: 3, name: "Agent Gamma", state: "Processing", color: "bg-orange-500" },
//   { id: 4, name: "Agent Delta", state: "Paused", color: "bg-blue-500" },
// ];

// // Componente 2
// const guardrailChecks = [
//   { id: 1, label: "Brand & Style", color: "bg-primary-general" },
//   { id: 2, label: "Compliance & Policy", color: "bg-primary-general" },
//   { id: 3, label: "Content Safety Filters", color: "bg-primary-general" },
//   { id: 4, label: "Approval Triggers", color: "bg-primary-general" },
//   { id: 5, label: "New implementation", color: "bg-primary-general" },
// ];

// export default function Component6() {
//   const [guardrailProgress, setGuardrailProgress] = useState(0);
//   const [activeAgent, setActiveAgent] = useState(0);

//   //Efecto del componente 1
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveAgent((prev) => (prev + 1) % agentStates.length);
//     }, 2200);
//     return () => clearInterval(interval);
//   }, []);

//   //Efecto del componente 2 (CORREGIDO)
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setGuardrailProgress((prev) => (prev + 1) % guardrailChecks.length);
//     }, 800);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="w-full py-12">
//       <div className="relative max-w-6xl mx-auto">
//         {/* Líneas en forma de cruz */}
//         <div className="absolute top-1/2 left-0 right-0 h-px bg-border/90" />
//         <div className="absolute top-0 bottom-0 left-1/2 w-px bg-border/90" />
//         <div className="grid grid-cols-2 grid-rows-2 min-h-[800px]">

//           {/* Componente 1 */}
//           <div className="p-10 space-y-20 overflow-hidden">
//             <div>
//               <h3 className="text-primary-general text-xl font-semibold mb-2 text-foreground">
//                 Live Agent States
//               </h3>
//               <p className="text-sm max-w-md text-primary-color-text">
//                 Real-time execution status of autonomous agents.
//               </p>
//             </div>

//             <div className="space-y-3">
//               {agentStates.map((agent, index) => (
//                 <div
//                   key={agent.id}
//                   className={`flex items-center justify-between p-5 rounded-lg border transition-all duration-500 ${
//                     activeAgent === index
//                       ? "border-primary/70 bg-card/15"
//                       : "border-border/50 bg-card/20 opacity-90"
//                   }`}
//                 >
//                   <span className="text-sm text-primary-color-text">
//                     {agent.name}
//                   </span>
//                   <div className="flex items-center gap-3">
//                     <span className="text-xs ">{agent.state}</span>
//                     <span
//                       className={`w-2.5 h-2.5 rounded-full ${agent.color} ${
//                         activeAgent === index ? "animate-pulse" : ""
//                       }`}
//                     />
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Texto arriba derecha */}
//           <div className="p-20 space-y-15 overflow-hidden">
//             <div className="relative space-y-4">
//               <p className="text-muted-foreground">
//                 Gemini is evolving to be more than just the models.{" "}
//                 <span className="text-accent-foreground font-bold">
//                   It supports an entire ecosystem
//                 </span>{" "}
//                 — from products innovate.
//               </p>
//               <p className="text-muted-foreground">
//                 It supports an entire ecosystem — from products to the APIs and
//                 platforms helping developers and businesses innovate
//               </p>

//               <div className="pt-6">
//                 <blockquote className="border-l-4 pl-4">
//                   <p>
//                     Using TailsUI has been like unlocking a secret design
//                     superpower. It's the perfect fusion of simplicity and
//                     versatility, enabling us to create UIs that are as stunning
//                     as they are user-friendly.
//                   </p>

//                   <div className="mt-6 space-y-3">
//                     <cite className="block font-medium">John Doe, CEO</cite>
//                     <img
//                       className="h-5 w-fit dark:invert"
//                       src="https://html.tailus.io/blocks/customers/nvidia.svg"
//                       alt="Nvidia Logo"
//                       height="20"
//                       width="auto"
//                     />
//                   </div>
//                 </blockquote>
//               </div>
//             </div>
//           </div>

//           {/* Texto abajo izquierda */}
//           <div className="p-20 space-y-15 overflow-hidden">
//             <div className="relative space-y-4">
//               <p className="text-muted-foreground">
//                 Gemini is evolving to be more than just the models.{" "}
//                 <span className="text-accent-foreground font-bold">
//                   It supports an entire ecosystem
//                 </span>{" "}
//                 — from products innovate.
//               </p>
//               <p className="text-muted-foreground">
//                 It supports an entire ecosystem — from products to the APIs and
//                 platforms helping developers and businesses innovate
//               </p>

//               <div className="pt-6">
//                 <blockquote className="border-l-4 pl-4">
//                   <p>
//                     Using TailsUI has been like unlocking a secret design
//                     superpower. It's the perfect fusion of simplicity and
//                     versatility, enabling us to create UIs that are as stunning
//                     as they are user-friendly.
//                   </p>

//                   <div className="mt-6 space-y-3">
//                     <cite className="block font-medium">John Doe, CEO</cite>
//                     <img
//                       className="h-5 w-fit dark:invert"
//                       src="https://html.tailus.io/blocks/customers/nvidia.svg"
//                       alt="Nvidia Logo"
//                       height="20"
//                       width="auto"
//                     />
//                   </div>
//                 </blockquote>
//               </div>
//             </div>
//           </div>

//           {/* Componente 2 */}
//           <div className="p-10 space-y-15 overflow-hidden">
//             <div>
//               <h3 className="text-primary-general text-xl font-semibold mb-2 text-foreground">
//                 Guardrail Engine
//               </h3>
//               <p className="text-sm max-w-md text-primary-color-text">
//                 Applies brand, tone, and policy checks before output goes live.
//               </p>
//             </div>

//             <div className="space-y-3">
//               {guardrailChecks.map((check, index) => (
//                 <div
//                   key={check.id}
//                   className={`flex items-center gap-5 p-5 rounded-md transition-all duration-800 ease-out ${
//                     guardrailProgress >= index
//                       ? "opacity-100 translate-x-2 bg-card/30"
//                       : "opacity-30 translate-x-1"
//                   }`}
//                 >
//                   <div
//                     className={`w-5 h-5 rounded-full border-1 flex items-center justify-center shrink-0 transition-all duration-500 ${
//                       guardrailProgress >= index
//                         ? `${check.color} border-transparent`
//                         : "border-border/50 bg-transparent"
//                     }`}
//                   >
//                     {guardrailProgress >= index && (
//                       <svg
//                         className="w-3.5 h-3.5 text-white"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={4}
//                           d="M5 13l4 4L19 7"
//                         />
//                       </svg>
//                     )}
//                   </div>
//                   <span className=" text-xs font-medium ">
//                     {check.label}
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }

"use client";
import { useState, useEffect } from "react";

// Componente 1
const agentStates = [
  { id: 1, name: "Agente Alfa", state: "Ejecutando", color: "bg-green-500" },
  { id: 2, name: "Agente Beta", state: "En espera", color: "bg-white" },
  { id: 3, name: "Agente Gamma", state: "Procesando", color: "bg-orange-500" },
  { id: 4, name: "Agente Delta", state: "Pausado", color: "bg-blue-500" },
];

// Componente 2
const guardrailChecks = [
  { id: 1, label: "Marca y Estilo", color: "bg-primary-general" },
  { id: 2, label: "Cumplimiento y Política", color: "bg-primary-general" },
  { id: 3, label: "Filtros de Seguridad", color: "bg-primary-general" },
  { id: 4, label: "Aprobaciones Requeridas", color: "bg-primary-general" },
  { id: 5, label: "Nueva implementación", color: "bg-primary-general" },
];

export default function Component6() {
  const [guardrailProgress, setGuardrailProgress] = useState(0);
  const [activeAgent, setActiveAgent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveAgent((prev) => (prev + 1) % agentStates.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setGuardrailProgress((prev) => (prev + 1) % guardrailChecks.length);
    }, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full py-8 bg-feat-bg text-feat-txt">
      <div className="relative max-w-7xl mx-auto">
        {/* líneas cruz */}
        <div className="absolute top-1/2 left-0 right-0 h-px bg-feat-border/80" />
        <div className="absolute top-0 bottom-0 left-1/2 w-px bg-feat-border/80" />

        <div className="grid grid-cols-2 grid-rows-2 min-h-[700px]">
          {/* ===== INTERACTIVO: AGENTS ===== */}
          <div className="p-12 pr-16 space-y-16">
            <div>
              <h3 className="text-xl font-semibold text-feat-ttl mb-2">
                Estado de Agentes en Vivo
              </h3>
              <p className="text-sm max-w-sm text-feat-desc">
                Estado de ejecución en tiempo real de agentes autónomos.
              </p>
            </div>

            <div className="space-y-3">
              {agentStates.map((agent, index) => (
                <div
                  key={agent.id}
                  className={`flex items-center justify-between p-5 rounded-lg border transition-all duration-500 ${
                    activeAgent === index
                      ? "border-primary/70 bg-card/15"
                      : "border-border/50 bg-card/20 opacity-90"
                  }`}
                >
                  <span className="text-sm text-feat-desc">
                    {agent.name}
                  </span>

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

          {/* ===== TEXTO AGENTS (MEJORADO) ===== */}
          <div className="p-12 pl-16 space-y-8">
            <div className="space-y-3 max-w-md">
              <p className="text-[11px] tracking-widest uppercase text-feat-desc">
                Orquestación en tiempo real
              </p>

              <h2 className="text-2xl font-semibold text-feat-ttl leading-snug">
                Visibilidad en la ejecución autónoma
              </h2>

              <p className="text-sm text-feat-desc leading-relaxed">
                Supervisa cómo los agentes transicionan entre estados operativos mientras los flujos de trabajo se ejecutan, ofreciendo información inmediata sobre su actividad, estabilidad y comportamiento del sistema.
              </p>
            </div>

            <ul className="space-y-2 text-sm text-feat-desc">
              <li>• Transmisión continua de cambios de estado</li>
              <li>• Identificación instantánea de procesos en espera o pausados</li>
              <li>• Conciencia en tiempo real del progreso</li>
              <li>• Respuesta a incidentes y depuración más rápida</li>
              <li>• Mayor confiabilidad en sistemas multi-agente</li>
            </ul>
          </div>

          {/* ===== TEXTO GUARDRAILS (MEJORADO) ===== */}
          <div className="p-12 pr-16 space-y-8">
            <div className="space-y-3 max-w-md">
              <p className="text-[11px] tracking-widest uppercase text-feat-desc">
                Seguridad y Gobernanza
              </p>

              <h2 className="text-2xl font-semibold text-feat-ttl leading-snug">
                Entrega controlada por validación
              </h2>

              <p className="text-sm text-feat-desc leading-relaxed">
                Cada respuesta generada se evalúa mediante capas de protección secuenciales que aseguran el alineamiento de la marca, el cumplimiento normativo y la seguridad del contenido antes del despliegue.
              </p>
            </div>

            <ul className="space-y-2 text-sm text-feat-desc">
              <li>• Aplicación automatizada de reglas de tono y políticas</li>
              <li>• Prevención de salidas inseguras o no conformes</li>
              <li>• Validación transparente durante el ciclo de vida</li>
              <li>• Reducción de riesgos legales y operativos</li>
              <li>• Comportamiento de IA confiable a nivel de producción</li>
            </ul>
          </div>

          {/* ===== INTERACTIVO: GUARDRAILS ===== */}
          <div className="p-12 pl-16 space-y-14">
            <div>
              <h3 className="text-xl font-semibold text-feat-ttl mb-2">
                Motor de Protección
              </h3>
              <p className="text-sm max-w-sm text-feat-desc">
                Capa de validación aplicada antes de salir a producción.
              </p>
            </div>

            <div className="space-y-3">
              {guardrailChecks.map((check, index) => (
                <div
                  key={check.id}
                  className={`flex items-center gap-5 p-5 rounded-md transition-all duration-700 ${
                    guardrailProgress >= index
                      ? "opacity-100 translate-x-2 bg-card/30"
                      : "opacity-30 translate-x-1"
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 transition-all duration-500 ${
                      guardrailProgress >= index
                        ? `${check.color}`
                        : "border border-border/50"
                    }`}
                  >
                    {guardrailProgress >= index && (
                      <svg
                        className="w-3.5 h-3.5 text-primary2"
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

                  <span className="text-xs font-medium">{check.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
