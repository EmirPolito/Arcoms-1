/**
 * Constantes centralizadas de animación premium.
 *
 * Curva principal: cubic-bezier(0.22, 1, 0.36, 1) — desaceleración fluida
 * inspirada en las interfaces de Apple y Stripe.
 */

/* ─── Easing ─── */

/** Curva de desaceleración fluida para Framer Motion y CSS */
export const EASE_PREMIUM = [0.22, 1, 0.36, 1] as const;

/** String CSS para usar en inline styles o globals */
export const EASE_PREMIUM_CSS = "cubic-bezier(0.22, 1, 0.36, 1)";

/* ─── Springs ─── */

/** Resorte responsivo sin rebotes — para elementos dinámicos / cursor */
export const SPRING_RESPONSIVE = {
  type: "spring" as const,
  stiffness: 300,
  damping: 30,
};

/** Resorte suave — para entradas y transiciones sutiles */
export const SPRING_GENTLE = {
  type: "spring" as const,
  stiffness: 150,
  damping: 25,
};

/* ─── Stagger ─── */

/** Delay rápido para listas pequeñas (menús, badges) */
export const STAGGER_FAST = 0.05;

/** Delay por defecto para cuadrículas y listas medianas */
export const STAGGER_DEFAULT = 0.08;

/** Delay lento para secciones grandes */
export const STAGGER_SLOW = 0.1;

/* ─── Viewport / IntersectionObserver ─── */

/** Configuración unificada para `whileInView` — anima al instante, un poco antes de ser visible */
export const VIEWPORT_CONFIG = { once: true, amount: 0, margin: "100px" } as const;

/* ─── Variantes de entrada ─── */

/** Fade-up estándar con easing premium */
export const FADE_UP = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE_PREMIUM },
  },
} as const;

/** Fade simple (solo opacity) para modo reduced motion */
export const FADE_UP_REDUCED = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.15 },
  },
} as const;

/** Variante de contenedor con stagger para hijos */
export const STAGGER_CONTAINER = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: STAGGER_DEFAULT,
    },
  },
} as const;

/** Variante de contenedor con stagger rápido */
export const STAGGER_CONTAINER_FAST = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: STAGGER_FAST,
    },
  },
} as const;

/* ─── will-change helper ─── */

/** Style object para forzar aceleración GPU en elementos animados */
export const GPU_ACCELERATED: React.CSSProperties = {
  willChange: "transform, opacity",
};

// Importar React solo para el tipo
import type React from "react";
