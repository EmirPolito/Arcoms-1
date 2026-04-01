"use client";

import { Header } from "@/components/header";
import Footer2 from "@/components/footer";
import { motion } from "framer-motion";

export default function LaboratoriosPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 md:px-6 py-32 flex items-center justify-center min-h-[70vh]">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.5 }}
          className="text-center max-w-4xl w-full"
        >
          <div className="inline-block mb-6 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">🔬 Investigación y Desarrollo</div>
          <h1 className="text-5xl md:text-7xl font-bold text-primary-general mb-8 tracking-tight">
            Laboratorios Arcoms
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-12">
            El espacio definitivo donde convergen la experimentación de código, prototipos experimentales y la fusión de interfaces con algoritmos de vanguardia.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
             <div className="p-6 border border-border bg-card rounded-2xl hover:shadow-xl transition-shadow">
                <h3 className="text-lg font-bold mb-2">Proyecto Alpha</h3>
                <p className="text-sm text-muted-foreground">Flujos asíncronos y simuladores físicos.</p>
             </div>
             <div className="p-6 border border-border bg-card rounded-2xl hover:shadow-xl transition-shadow">
                <h3 className="text-lg font-bold mb-2">Motor WebGL</h3>
                <p className="text-sm text-muted-foreground">Experimentación de texturas 3D interactivas.</p>
             </div>
             <div className="p-6 border border-border bg-card rounded-2xl hover:shadow-xl transition-shadow">
                <h3 className="text-lg font-bold mb-2">Micro-Animaciones</h3>
                <p className="text-sm text-muted-foreground">Componentes reactivos basados en Framer Motion.</p>
             </div>
          </div>
        </motion.div>
      </main>
      <Footer2 />
    </div>
  );
}
