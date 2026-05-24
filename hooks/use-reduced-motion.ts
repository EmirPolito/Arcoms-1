"use client";

import { useState, useEffect } from "react";

/**
 * Hook que detecta la preferencia de movimiento reducido del sistema operativo.
 * Si `prefers-reduced-motion: reduce` está activo, retorna `true`.
 *
 * Uso: desactivar animaciones pesadas y reemplazarlas por
 * transiciones instantáneas o simples desvanecimientos (opacity).
 */
export function useReducedMotion(): boolean {
  const [prefersReduced, setPrefersReduced] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReduced(mql.matches);

    const handler = (e: MediaQueryListEvent) => setPrefersReduced(e.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);

  return prefersReduced;
}
