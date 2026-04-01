"use client";

import { Header } from "@/components/header";
import Footer2 from "@/components/footer";
import { motion } from "framer-motion";

export default function RealidadAumentadaPage() {
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
          <div className="inline-block mb-6 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">✨ Futuro en Pantalla</div>
          <h1 className="text-5xl md:text-7xl font-bold text-primary-general mb-8 tracking-tight">
            Realidad Aumentada
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-12">
            Desarrollamos e implementamos experiencias donde el límite entre el universo digital y el físico desaparece, conectando productos con entornos reales a través de cámaras móviles.
          </p>
          <button className="px-8 py-3 rounded-lg text-primary-foreground font-medium bg-primary shadow-lg hover:shadow-xl transition-all scale-100 hover:scale-105 active:scale-95">
             Probar Experimento (Próximamente)
          </button>
        </motion.div>
      </main>
      <Footer2 />
    </div>
  );
}
