/**
 * Utilidad para desactivar temporalmente TODAS las transiciones CSS
 * en el documento al mutar clases/atributos críticos (como data-theme).
 *
 * Previene parpadeos indeseados durante cambios de tema claro/oscuro.
 */
export function disableTransitionsTemporarily(duration = 50): void {
  const root = document.documentElement;
  root.classList.add("no-transitions");

  // Forzar un reflow para que el cambio se aplique inmediatamente
  // antes de restaurar las transiciones
  requestAnimationFrame(() => {
    setTimeout(() => {
      root.classList.remove("no-transitions");
    }, duration);
  });
}
