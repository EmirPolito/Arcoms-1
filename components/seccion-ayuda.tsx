"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";

interface SupportItem {
  id: string;
  title: string;
  description: string;
  href: string;
}

const supportItems: SupportItem[] = [
  {
    id: "faq",
    title: "Preguntas Frecuentes",
    description:
      "Respuestas rápidas a problemas comunes: navegación, configuraciones, compatibilidad y más.",
    href: "/ayuda/preguntas-frecuentes",
  },
  {
    id: "reportes",
    title: "Reporte de Problemas",
    description:
      "Envía reportes de errores, fallos visuales o problemas técnicos para que el equipo de desarrollo los revise y corrija.",
    href: "/ayuda/contacto",
  },
  {
    id: "correo",
    title: "Soporte por Correo",
    description:
      "Contacta directamente al equipo de soporte para resolver dudas, reportar problemas o recibir asistencia personalizada.",
    href: "/ayuda/contacto",
  },
  {
    id: "manual-usuario",
    title: "Manual de Usuario",
    description:
      "Aprende paso a paso cómo utilizar nuestra plataforma: registro, configuración de cuenta, interacciones y navegación general.",
    href: "/ayuda/manual-usuario",
  },

  {
    id: "actualizaciones",
    title: "Historial de Actualizaciones",
    description:
      "Consulta los cambios más recientes, mejoras, correcciones de bugs y nuevas funciones añadidas a la plataforma.",
    href: "/ayuda/historial",
  },
  {
    id: "docs-tecnicas",
    title: "Documentación Técnica",
    description:
      "Información para desarrolladores: APIs, arquitectura del sistema, estructura de componentes y detalles de despliegue.",
    href: "/ayuda/documentacion",
  },
  {
    id: "tutoriales",
    title: "Videos Tutoriales",
    description:
      "Visualiza videos explicativos sobre cómo operar cada función del proyecto, desde configuraciones hasta integraciones avanzadas.",
    href: "/ayuda/tutoriales",
  },

  {
    id: "comunidad",
    title: "Foro de la Comunidad",
    description:
      "Comparte ideas, resuelve dudas con otros usuarios y colabora en discusiones sobre el uso de la plataforma.",
    href: "/ayuda/comunidad",
  },

  {
    id: "estado-sistema",
    title: "Estado del Sistema",
    description:
      "Revisa si los servicios del sistema están funcionando: servidor web, base de datos y APIs externas.",
    href: "/ayuda/estado",
  },
];

export default function ContenidoBlog() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const rows = [];
  for (let i = 0; i < supportItems.length; i += 3) {
    rows.push(supportItems.slice(i, i + 3));
  }

  return (
    <div className="w-full py-8 transition-colors px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-10 md:mb-20"
        >
          <h1 className="text-primary-general text-3xl md:text-5xl font-semibold mb-3">
            Centro de Ayuda
          </h1>

          <p className="text-primary-color-text max-w-4xl mx-auto text-sm sm:text-base">
            Encuentra asistencia rápida sobre el funcionamiento de la
            plataforma, guías, tutoriales, reportes y soporte personalizado.
          </p>
        </motion.div>

        {/* Items */}
        <div className="space-y-6 md:space-y-10">
          {rows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2"
            >
              {row.map((item, itemIndex) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    delay: (rowIndex * 3 + itemIndex) * 0.08, // animación escalonada SOLO al cargar
                  }}
                  className={`py-5 px-5 sm:py-7 sm:px-8 transition-all duration-300 relative group border-border
                    ${itemIndex !== row.length - 1 ? "md:border-r" : ""}
                  `}
                  onMouseEnter={() => setHoveredId(item.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <div className="mb-5">
                    <h2 className="text-primary-general text-lg sm:text-xl font-semibold mb-3 sm:mb-5">
                      {item.title}
                    </h2>
                    <p className="text-primary-color-text text-sm sm:text-base text-accent leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div
                    className={`text-primary-general transition-all duration-300 overflow-hidden 
                      ${
                        hoveredId === item.id
                          ? "opacity-100 visible"
                          : "opacity-0 invisible"
                      }
                    `}
                  >
                    <Link
                      href={item.href}
                      className="inline-flex items-center gap-2 text-primary-2 font-medium hover:gap-3 transition-all duration-300 group/link"
                    >
                      Ver más
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                    </Link>
                  </div>

                  <div
                    className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10
                      from-[var(--card-background,rgba(0,0,0,0.2))]
                      to-transparent
                    `}
                  />
                </motion.div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
