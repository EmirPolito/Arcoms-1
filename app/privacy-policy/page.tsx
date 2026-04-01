import { Header } from "@/components/20-header-comp";
import Footer2 from "@/components/22-footer2-comp";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />
      <main className="flex-1 max-w-4xl mx-auto w-full px-4 md:px-6 py-32 text-left">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8 tracking-tight">
          Política de Privacidad
        </h1>
        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            Última actualización: {new Date().toLocaleDateString('es-ES')}
          </p>
          <p>
            En Arcoms 1 valoramos tu privacidad y nos comprometemos a resguardar tu información personal. Esta Política de Privacidad describe cómo recopilamos, usamos y protegemos la información cuando interactúas con nuestras aplicaciones digitales y web.
          </p>
          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Recopilación de Información</h2>
          <p>
            Recolectamos información esencial únicamente para mejorar tu experiencia interactiva, garantizando la anonimidad de las métricas de uso y limitando severamente el paso de tus accesos a terceros.
          </p>
          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Uso de Cookies</h2>
          <p>
            Empleamos cookies para retener referencias de los modos de visualización (claro y oscuro), aceleración de transiciones entre rutas y carga asíncrona de nuestros visores 3D.
          </p>
        </div>
      </main>
      <Footer2 />
    </div>
  );
}
