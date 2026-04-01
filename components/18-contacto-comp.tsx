"use client";

import { motion, type Variants } from "framer-motion";
import { useState } from "react";

export default function ContactSection() {
  const [loading, setLoading] = useState(false);

  const fade: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.12,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section className="relative min-h-screen overflow-hidden px-6 py-32">
      {/* Fondo estilo Aceternity */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,var(--primary-4),transparent_40%)] opacity-40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,var(--primary-6),transparent_40%)] opacity-30" />
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20"
      >
        {/* TEXTO */}
        <motion.div variants={fade} custom={0}>
          <h1 className="text-5xl md:text-6xl font-semibold mb-6">
            Hablemos.
          </h1>
          <p className="text-lg text-muted-foreground max-w-md">
            Escríbenos y te responderemos lo antes posible.
          </p>
        </motion.div>

        {/* FORM */}
        <motion.form
          variants={fade}
          custom={1}
          className="
            rounded-2xl bg-[var(--card)] border border-border
            p-8 space-y-6 shadow-[0_20px_80px_-20px_rgba(0,0,0,0.25)]
          "
          onSubmit={(e) => {
            e.preventDefault();
            setLoading(true);
            setTimeout(() => setLoading(false), 2000);
          }}
        >
          <Input label="Nombre" placeholder="Tu nombre" />
          <Input label="Email" placeholder="tu@email.com" />
          <Input label="Mensaje" textarea placeholder="Cuéntanos más..." />

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="
              w-full py-4 rounded-xl font-medium
              bg-[var(--primary)]
              text-[var(--primary-foreground)]
            "
          >
            {loading ? "Enviando..." : "Enviar mensaje"}
          </motion.button>
        </motion.form>
      </motion.div>
    </section>
  );
}

function Input({
  label,
  placeholder,
  textarea,
}: {
  label: string;
  placeholder: string;
  textarea?: boolean;
}) {
  const Component = textarea ? "textarea" : "input";

  return (
    <div className="space-y-2">
      <label className="text-sm text-muted-foreground">{label}</label>
      <Component
        placeholder={placeholder}
        className="
          w-full rounded-xl border border-border bg-transparent
          px-4 py-3 outline-none transition
          focus:border-[var(--primary)]
        "
        rows={textarea ? 4 : undefined}
      />
    </div>
  );
}
