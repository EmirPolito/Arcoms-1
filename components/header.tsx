"use client";

import { useState } from "react";
import { ThemeSwitcher } from "./21-colores-comp";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur supports-backdrop-filter:bg-header-bg/60 h-18 ">
      <div className="container relative flex items-center h-17 translate-y-3 px-4">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 shrink-0">
          <span className="font-bold text-header-txt text-lg">
            Arcoms <span className="font-light">1</span>
          </span>
        </a>

        {/* Nav — Desktop */}
        <nav className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-5">
          {["acerca", "contacto", "ayuda"].map((item) => (
            <a
              key={item}
              href={`/${item}`}
              className="text-sm font-medium text-header-txt opacity-70 hover:opacity-100 hover:text-header-hover px-4"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center justify-end shrink-0 ml-auto gap-3">
          <ThemeSwitcher />

          {/* Hamburger — Mobile */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col items-center justify-center w-9 h-9 gap-[5px] cursor-pointer"
            aria-label="Toggle menu"
          >
            <span
              className={`block h-[2px] w-5 bg-header-txt transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-[7px]" : ""
              }`}
            />
            <span
              className={`block h-[2px] w-5 bg-header-txt transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-[2px] w-5 bg-header-txt transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-background/95 backdrop-blur-md border-b border-border ${
          menuOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col items-center gap-4 py-6">
          {["acerca", "contacto", "ayuda"].map((item) => (
            <a
              key={item}
              href={`/${item}`}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium text-header-txt opacity-70 hover:opacity-100 hover:text-header-hover px-4"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
