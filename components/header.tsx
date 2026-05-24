"use client";

import { useState, useEffect } from "react";
import { ThemeSwitcher } from "./21-colores-comp";
import { cn } from "@/lib/utils";
import { EASE_PREMIUM_CSS } from "@/lib/motion-config";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full h-19 border-b",
        scrolled
          ? "bg-background/80 backdrop-blur-md border-border shadow-sm"
          : "bg-transparent border-transparent",
      )}
      style={{
        transition: `background-color 0.3s ${EASE_PREMIUM_CSS}, border-color 0.3s ${EASE_PREMIUM_CSS}, box-shadow 0.3s ${EASE_PREMIUM_CSS}`,
      }}
    >
      <div className="container relative flex items-center h-19 px-4 mx-auto">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 shrink-0">
          <span className="font-bold text-header-txt text-lg">
            Arcoms <span className="font-light">One</span>
          </span>
        </a>

        {/* Nav — Desktop */}
        <nav className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-5">
          {[
            { label: "Contacto", href: "/contacto" },
            { label: "Nosotros", href: "/acerca" },
            { label: "Ayuda", href: "/ayuda" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-normal text-header-txt opacity-70 hover:opacity-100 hover:text-header-hover px-4"
              style={{
                transition: `opacity 0.25s ${EASE_PREMIUM_CSS}, color 0.25s ${EASE_PREMIUM_CSS}`,
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center justify-end shrink-0 ml-auto gap-2 sm:gap-3">
          <ThemeSwitcher />

          {/* Hamburger — Mobile */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col items-center justify-center w-9 h-9 gap-[5px] cursor-pointer"
            aria-label="Toggle menu"
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className={cn(
                  "block h-[2px] w-5 bg-header-txt transform-gpu",
                  i === 0 && (menuOpen ? "rotate-45 translate-y-[7px]" : ""),
                  i === 1 && (menuOpen ? "opacity-0" : ""),
                  i === 2 && (menuOpen ? "-rotate-45 -translate-y-[7px]" : ""),
                )}
                style={{
                  transition: `transform 0.3s ${EASE_PREMIUM_CSS}, opacity 0.3s ${EASE_PREMIUM_CSS}`,
                  willChange: "transform, opacity",
                }}
              />
            ))}
          </button>
        </div>
      </div>

      {/* Mobile Menu — usa scaleY + opacity en vez de max-height para evitar reflow */}
      <div
        className={cn(
          "md:hidden bg-background/95 backdrop-blur-md border-b border-border overflow-hidden transform-gpu",
          menuOpen
            ? "scale-y-100 opacity-100 pointer-events-auto"
            : "scale-y-0 opacity-0 pointer-events-none",
        )}
        style={{
          transformOrigin: "top",
          transition: `transform 0.3s ${EASE_PREMIUM_CSS}, opacity 0.25s ${EASE_PREMIUM_CSS}`,
          willChange: "transform, opacity",
        }}
      >
        <nav className="flex flex-col items-center gap-4 py-6">
          {[
            { label: "Contacto", href: "/contacto" },
            { label: "Nosotros", href: "/acerca" },
            { label: "Ayuda", href: "/ayuda" },
          ].map((item, i) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium text-header-txt opacity-70 hover:opacity-100 hover:text-header-hover px-4"
              style={{
                transition: `opacity 0.25s ${EASE_PREMIUM_CSS}, color 0.25s ${EASE_PREMIUM_CSS}, transform 0.3s ${EASE_PREMIUM_CSS}`,
                transitionDelay: menuOpen ? `${i * 0.05}s` : "0s",
                transform: menuOpen ? "translate3d(0, 0, 0)" : "translate3d(0, -8px, 0)",
                opacity: menuOpen ? undefined : 0,
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
