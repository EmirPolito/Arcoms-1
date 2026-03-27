"use client";

import { useState, useEffect } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/21-colores-ui";

type Theme = "light" | "dark" | "colorblind";
type ColorTheme = "orange" | "blue" | "green" | "violet" | "rose" | "yellow";

const SunIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M2 12h2M20 12h2" />
  </svg>
);

const MoonIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
  </svg>
);

const ColorblindIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="3" />
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
  </svg>
);

/* MAPA DE COLORES PARA TAILWIND */
const colorClasses: Record<ColorTheme, string> = {
    orange: "bg-orange-500",
    blue: "bg-blue-500",
    green: "bg-green-500",
    violet: "bg-violet-500",
    rose: "bg-rose-500",
    yellow: "bg-yellow-500",
};

export function ThemeSwitcher() {
  let initialTheme: Theme = "light";
  let initialColor: ColorTheme | "neutro" = "neutro";

  if (typeof window !== "undefined") {
    const savedTheme = localStorage.getItem("theme") as Theme | null;
    const savedColor = localStorage.getItem("color") as ColorTheme | "neutro" | null;

    if (savedTheme) initialTheme = savedTheme;

    if (savedColor) initialColor = savedColor;
    else {
      localStorage.setItem("color", "neutro");
      document.documentElement.setAttribute("data-color", "neutro");
    }
  }

  const [theme, setTheme] = useState<Theme>(initialTheme);
  const [color, setColor] = useState<ColorTheme | "neutro">(initialColor);
  const [mounted, setMounted] = useState(false);

  const animatedColors: ColorTheme[] = [
    "orange",
    "blue",
    "green",
    "violet",
    "rose",
    "yellow",
  ];

  const [animatedDotColor, setAnimatedDotColor] =
    useState<ColorTheme>("orange");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme | null;
    const savedColor = localStorage.getItem("color") as ColorTheme | null;

    if (savedTheme) setTheme(savedTheme);
    if (savedColor) setColor(savedColor);

    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      document.documentElement.setAttribute("data-theme", theme);
      document.documentElement.setAttribute("data-color", color);
      localStorage.setItem("theme", theme);
      localStorage.setItem("color", color);
    }
  }, [theme, color, mounted]);

  // Animación solo en neutro
  useEffect(() => {
    if (color !== "neutro") return;

    let i = 0;

    const id = setInterval(() => {
      setAnimatedDotColor(animatedColors[i]);
      i = (i + 1) % animatedColors.length;
    }, 800);

    return () => clearInterval(id);
  }, [color]);

  if (!mounted) return null;

<<<<<<< HEAD
    const colorLabel =
        color === "neutro"
            ? "Neutro"
            : color.charAt(0).toUpperCase() + color.slice(1);
=======
  const cycleTheme = () => {
    const order: Theme[] = ["light", "dark", "colorblind"];
    setTheme(order[(order.indexOf(theme) + 1) % order.length]);
  };
>>>>>>> 71a60b0 (Se mejoro el contenido)

  const icon =
    theme === "light"
      ? <SunIcon />
      : theme === "dark"
      ? <MoonIcon />
      : <ColorblindIcon />;

  const colorLabel =
    color === "neutro"
      ? "Neutro"
      : color.charAt(0).toUpperCase() + color.slice(1);

  return (
    <div className="flex gap-3 items-center">
      <button
        onClick={cycleTheme}
        className="cursor-pointer w-9 h-9 rounded-full flex items-center justify-center border-2 bg-[var(--primary)] text-white border-[var(--primary)] shadow-lg hover:scale-110 active:scale-95 transition"
      >
        {icon}
      </button>

<<<<<<< HEAD
                    {/* ÚNICO puntito visible */}
                    {color === "neutro" ? (
                        <span className={`w-2.5 h-2.5 rounded-full ${colorClasses[animatedDotColor]} transition-colors`} />
                    ) : (
                        <span className={`w-2.5 h-2.5 rounded-full ${colorClasses[color]}`} />
                    )}

                    <SelectValue>{colorLabel}</SelectValue>
                </SelectTrigger>
=======
      <div className="w-px h-4 bg-[var(--divider-color)]" />

      <Select value={color} onValueChange={(v) => setColor(v as ColorTheme)}>
        <SelectTrigger className="h-8 w-28 text-xs flex items-center gap-2 cursor-pointer">
>>>>>>> 71a60b0 (Se mejoro el contenido)

          {/* ÚNICO puntito visible */}
          {color === "neutro" ? (
            <span
              className={`w-2.5 h-2.5 rounded-full bg-${animatedDotColor}-500 transition-colors`}
            />
          ) : (
            <span
              className={`w-2.5 h-2.5 rounded-full bg-${color}-500`}
            />
          )}

<<<<<<< HEAD
                    {animatedColors.map((c) => (
                        <SelectItem key={c} value={c} className="text-xs">
                            <span className="flex items-center gap-1.5">
                                <span className={`w-2.5 h-2.5 rounded-full ${colorClasses[c]}`} />
                                {c.charAt(0).toUpperCase() + c.slice(1)}
                            </span>
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
    );
}
=======
          <SelectValue>{colorLabel}</SelectValue>
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="neutro" className="text-xs">
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full" />
              Neutro
            </span>
          </SelectItem>

          {animatedColors.map((c) => (
            <SelectItem key={c} value={c} className="text-xs">
              <span className="flex items-center gap-1.5">
                <span
                  className={`w-2.5 h-2.5 rounded-full bg-${c}-500`}
                />
                {c.charAt(0).toUpperCase() + c.slice(1)}
              </span>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
>>>>>>> 71a60b0 (Se mejoro el contenido)
