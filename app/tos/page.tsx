import { Header } from "@/components/20-header-comp";
import Footer2 from "@/components/22-footer2-comp";

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />
      <main className="flex-1 max-w-4xl mx-auto w-full px-4 md:px-6 py-32 text-left">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8 tracking-tight">
          Términos de Servicio
        </h1>
        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            Última actualización: {new Date().toLocaleDateString('es-ES')}
          </p>
          <p>
            Al acceder, interactuar o desplegar operaciones dentro de los servicios virtuales que Arcoms 1 te presta, certificas y estás conforme en regirte por estos términos.
          </p>
          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Uso de Modelos y Diseños</h2>
          <p>
            Queda prohibido la retransmisión no certificada del código fuente que soporta las interfaces de usuario construidas en Framer Motion, con excepción del código cedido libremente hacia las colecciones autorizadas.
          </p>
          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Descargo de Responsabilidad</h2>
          <p>
            Nuestros laboratorios y entornos experimentales en 3D están diseñados bajo la premisa "As Is" (Como está). No garantizamos el soporte retro-compatible para sistemas operativos o navegadores sin aceleración de hardware activa.
          </p>
        </div>
      </main>
      <Footer2 />
    </div>
  );
}
