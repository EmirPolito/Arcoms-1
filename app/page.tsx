"use client";

import "./i18n";
import { useTranslation } from "react-i18next";


//Header
import { Header } from "./components/20-header-comp";

import { Component23 } from "@/app/components/23-robot-comp";
import LogoCloud  from "@/app/components/29-comp-logos";

import { Titulo8 } from "@/app/components/8-comp";
import Component6 from "@/app/components/6-comp";

import Component25 from "@/app/components/25-info-comp";

import { Titulo1 } from "@/app/components/1-comp";
import { Component2 } from "@/app/components/2-comp";

import Component26 from "@/app/components/26-content-comp";

import { Titulo5 } from "@/app/components/5-comp";
import { Component3 } from "@/app/components/3-comp";

import { Component27 } from "@/app/components/27-info-comp";

import { Titulo9 } from "@/app/components/9-comp";
import Component4 from "@/app/components/4-comp";

import { Component12 } from "@/app/components/12-testimonios-comp";

import Footer2 from "./components/22-footer2-comp";
//Footer



export default function Home() {
  const { t, i18n } = useTranslation();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="py-10">
        <Component23 />
        {/* <LogoCloud /> */}

        <Titulo8 />
        <Component6 />

        <Component25 />

        <Titulo1 />
        <Component2 />

        <Component26 />

        <Titulo5 />
        <Component3 />

        <Component27 />

        <Titulo9 />
        <Component4 />

        <Component12 />
      </main>
      <Footer2 />
    </div>
  );
}

// Terminal 11
// import { Component11 } from "@/app/components/11-comp";
// <Component11 />;

//Hero con efecto de inclinación 13
// import { ComponentHero13 } from "@/app/components/13-hero1-comp";
// <ComponentHero13 />

//Hero2 14
// import  ComponentHero14  from "@/app/components/14-hero2-comp";
// <ComponentHero14 />

//Component 10
// import { Component10 } from "@/app/components/10-comp";
//    <Component10 />

// Component 24
// import ComponentLogos24 from "@/app/components/24-logos-comp";
//<ComponentLogos24 />

// Footer 19
// import { Footer19 } from "./components/19-footer-comp";
// <Footer19 />
