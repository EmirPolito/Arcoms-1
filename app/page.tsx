"use client";

import { Header } from "../components/20-header-comp";

import { Component23 } from "@/components/23-robot-comp";

import ComponentLogos24 from "@/components/24-logos-comp";

import { Titulo8 } from "@/components/8-comp";
import Component6 from "@/components/6-comp";

import { Titulo1 } from "@/components/1-comp";
import { Component2 } from "@/components/2-comp";

import { Titulo5 } from "@/components/5-comp";
import { Component3 } from "@/components/3-comp";

import { Titulo9 } from "@/components/9-comp";
import Component4 from "@/components/4-comp";

import TestimonialsCarousel from "@/components/testimonials-with-carousel";
import Footer2 from "../components/22-footer2-comp";
//Footer

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="py-10">
        <Component23 />

        <ComponentLogos24 />

        <Titulo8 />
        <Component6 />

        <Titulo5 />
        <Component3 />

        <Titulo1 />
        <Component2 />

        <Titulo9 />
        <Component4 />

        <TestimonialsCarousel />
      </main>
      <Footer2 />
    </div>
  );
}
