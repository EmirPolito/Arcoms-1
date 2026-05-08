"use client";

import React from "react";

/* ─── Inline InfiniteSlider (CSS marquee, pausa suave en hover) ─── */
function InfiniteSlider({
  children,
  speed = 40,
  gap = 112,
}: {
  children: React.ReactNode;
  speed?: number;
  gap?: number;
}) {
  const items = React.Children.toArray(children);

  return (
    <div className="overflow-hidden w-full group/slider">
      <div
        className="flex w-max animate-marquee-logos group-hover/slider:[animation-play-state:paused] transform-gpu will-change-transform"
        style={{ gap: `${gap}px`, animationDuration: `${speed}s` }}
      >
        {[...items, ...items].map((child, i) => (
          <div key={i} className="flex items-center shrink-0">
            {child}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Logos ─── */
const logos = [
  {
    light: "/icons/React_light.svg",
    dark: "/icons/React_dark.svg",
    label: "React",
    themed: true,
    h: 42,
  },
  {
    light: "/icons/next.svg",
    dark: "/icons/next.svg",
    label: "Next.js",
    themed: false,
    h: 34,
  },
  {
    light: "/icons/typescript.svg",
    dark: "/icons/typescript.svg",
    label: "TypeScript",
    themed: false,
    h: 40,
  },
  {
    light: "/icons/tailwindcss.svg",
    dark: "/icons/tailwindcss.svg",
    label: "Tailwind",
    themed: false,
    h: 34,
  },
  {
    light: "/icons/Vercel_light.svg",
    dark: "/icons/Vercel_dark.svg",
    label: "Vercel",
    themed: true,
    h: 34,
  },
  {
    light: "/icons/GitHub_light.svg",
    dark: "/icons/GitHub_dark.svg",
    label: "GitHub",
    themed: true,
    h: 38,
  },
  {
    light: "/icons/OpenAI_light.svg",
    dark: "/icons/OpenAI_dark.svg",
    label: "OpenAI",
    themed: true,
    h: 36,
  },
];

function Logo({ logo }: { logo: (typeof logos)[0] }) {
  // Altura ajustada: un poco más grandes como pediste
  // 22px en mobile, 32px en desktop
  const hCls = "h-[28px] md:h-[38.5px]";

  if (logo.themed) {
    return (
      <div className={`relative shrink-0 ${hCls}`}>
        <img
          src={logo.light}
          alt={logo.label}
          loading="lazy"
          decoding="async"
          className="h-full w-auto object-contain transition-opacity duration-300 dark:opacity-0"
        />
        <img
          src={logo.dark}
          alt={logo.label}
          loading="lazy"
          decoding="async"
          className="h-full w-auto object-contain transition-opacity duration-300 opacity-0 dark:opacity-100 absolute inset-0"
        />
      </div>
    );
  }
  return (
    <img
      src={logo.light}
      alt={logo.label}
      loading="lazy"
      decoding="async"
      className={`object-contain shrink-0 ${hCls} w-auto`}
    />
  );
}

/* ─── Main export ─── */
export default function LogoCloud() {
  return (
    <section className="bg-background overflow-hidden py-0 md:py-10">
      <div className="relative w-full px-4 md:px-2">
        <div className="flex items-center md:flex-row">
          {/* Left label - Ajustado ancho para dar más espacio al slider en laptop */}
          <div className="w-24 shrink-0 border-r border-border pr-3 md:w-40 md:pr-8">
            <p className="text-left md:text-end text-[11px] md:text-sm text-muted-foreground font-medium leading-tight">
              Tecnologías
              <br />
              utilizadas
            </p>
          </div>

          {/* Slider */}
          <div className="relative py-4 flex-1 md:pl-10 overflow-hidden">
            <div
              className="flex w-max animate-marquee-logos hover:[animation-play-state:paused] gap-16 md:gap-32 transform-gpu will-change-transform"
              style={{ animationDuration: "40s" }}
            >
              {[...logos, ...logos].map((logo, i) => (
                <div key={i} className="flex items-center shrink-0">
                  <Logo logo={logo} />
                </div>
              ))}
            </div>

            {/* Fade edges */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-y-0 left-0 w-8 md:w-20 bg-gradient-to-r from-background to-transparent z-10"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-y-0 right-0 w-8 md:w-20 bg-gradient-to-l from-background to-transparent z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
