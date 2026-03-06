"use client";

import { useEffect, useState } from "react";
import { ThemeSwitcher } from "./21-colores-comp";

export function Header() {
  // ...existing code...

  return (
    <header
      className="sticky top-0 z-50 w-full  backdrop-blur supports-backdrop-filter:bg-background/60 h-18 "
    >
      <div className="container relative flex items-center h-17 0">
        {/* Logo */}
        <a href="/" className="flex items-center shrink-0 w-50 ">
          <span className="font-bold text-foreground">
            Arcoms <span className="font-light">1</span>
          </span>
        </a>

        {/* Nav */}
        <nav className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-5">
          {["acerca", "contacto", "ayuda"].map((item) => (
            <a
              key={item}
              href={`/${item}`}
              className="text-sm font-medium text-muted-foreground hover:text-primary-header px-4"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
        </nav>

        {/* Theme Switcher */}
        <div className="flex items-center justify-end shrink-0 w-32 ml-auto">
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
}
