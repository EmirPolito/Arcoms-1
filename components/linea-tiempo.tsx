"use client";

import React from "react";
import Image from "next/image";
import { Timeline } from "@/components/ui/15-acercaDe-ui";

export function AcercaDe() {
  const data = [
    {
      title: "2023",
      content: (
        <div>
          <p className="mb-2 text-base md:text-lg text-muted-foreground">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            deserunt laboriosam quo impedit dolor.
          </p>
          <p className="mb-8 text-base md:text-lg text-muted-foreground">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            deserunt laboriosam quo impedit dolor.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              width={500}
              height={500}
              className="h-50 w-full rounded-lg object-cover border-[var(--border-theme)]"
            />
            <Image
              src="https://assets.aceternity.com/features-section.png"
              alt="feature template"
              width={500}
              height={500}
              className="h-50 w-full rounded-lg object-cover border-[var(--border-theme)]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div>
          <p className="mb-2 text-base md:text-lg text-muted-foreground">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            deserunt laboriosam quo impedit dolor.
          </p>
          <p className="mb-8 text-base md:text-lg text-muted-foreground">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            deserunt laboriosam quo impedit dolor.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              width={500}
              height={500}
              className="h-50 w-full rounded-lg object-cover border-[var(--border-theme)]"
            />
            <Image
              src="https://assets.aceternity.com/features-section.png"
              alt="feature template"
              width={500}
              height={500}
              className="h-50 w-full rounded-lg object-cover border-[var(--border-theme)]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2025",
      content: (
        <div>
          <p className="mb-2 text-base md:text-lg text-muted-foreground">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            deserunt laboriosam quo impedit dolor.
          </p>
          <p className="mb-8 text-base md:text-lg text-muted-foreground">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            deserunt laboriosam quo impedit dolor.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              width={500}
              height={500}
              className="h-50 w-full rounded-lg object-cover border-[var(--border-theme)]"
            />
            <Image
              src="https://assets.aceternity.com/features-section.png"
              alt="feature template"
              width={500}
              height={500}
              className="h-50 w-full rounded-lg object-cover border-[var(--border-theme)]"
            />
          </div>
        </div>
      ),
    },

    {
      title: "Impacto y Visión",
      content: (
        <div>
          <p className="mb-2 text-base md:text-lg text-muted-foreground">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            deserunt laboriosam quo impedit dolor.
          </p>
          <p className="mb-8 text-base md:text-lg text-muted-foreground">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            deserunt laboriosam quo impedit dolor.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              width={500}
              height={500}
              className="h-50 w-full rounded-lg object-cover border-[var(--border-theme)]"
            />
            <Image
              src="https://assets.aceternity.com/features-section.png"
              alt="feature template"
              width={500}
              height={500}
              className="h-50 w-full rounded-lg object-cover border-[var(--border-theme)]"
            />
          </div>
        </div>
      ),
    },

    {
      title: "",
      content: (
        <div>
          <div className="grid grid-cols-2 gap-4"></div>
        </div>
      ),
    },
  ];

  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
