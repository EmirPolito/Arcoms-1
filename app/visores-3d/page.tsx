"use client";

import { Header } from "@/components/header";
import Footer2 from "@/components/footer";
import { motion } from "framer-motion";

export default function Visores3DPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 md:px-6 py-32 flex items-center justify-center min-h-[70vh]">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl"
        >
          <div className="inline-block mb-6 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">🧊 Entornos Virtuales</div>
          <h1 className="text-5xl md:text-7xl font-bold text-primary-general mb-8 tracking-tight">
            Visores 3D Interactivos
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-12">
            La integración de modelos interactivos y optimizados en tiempo real dentro de tu navegador nunca había sido tan ágil. Incorporamos tecnologías WebGL mediante Spline.
          </p>
          <div className="aspect-video w-full rounded-2xl bg-muted border border-border flex items-center justify-center shadow-lg relative overflow-hidden">
             {/* Placeholder para un posible visor futuro */}
             <div className="absolute inset-0 flex flex-col items-center justify-center bg-card/60 backdrop-blur-sm z-10">
                <p className="font-semibold text-lg text-foreground mb-4">Módulo de visualización en desarrollo</p>
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
             </div>
          </div>
        </motion.div>
      </main>
      <Footer2 />
    </div>
  );
}
