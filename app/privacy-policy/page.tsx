import { Header } from "@/components/20-header-comp";
import Footer2 from "@/components/22-footer2-comp";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />
      <main className="flex-1 max-w-4xl mx-auto w-full px-4 md:px-6 py-32 text-left">
        <h1 className="text-4xl md:text-5xl font-bold text-[var(--primary-general)] mb-8 tracking-tight">
          Política de Privacidad
        </h1>
        <div className="space-y-6 text-lg text-[var(--primary-color-text)] leading-relaxed">
          <p>
            Última actualización: {new Date().toLocaleDateString('es-ES')}
          </p>
          <p>
            En <strong>[Nombre de tu Empresa]</strong>, sabemos que la privacidad es fundamental. Esta Política de Privacidad de plantilla describe de manera genérica cómo recopilamos, utilizamos y protegemos la información personal cuando los usuarios visitan o interactúan con nuestro sitio web o servicios.
          </p>
          <h2 className="text-2xl font-semibold text-[var(--primary-general)] mt-8 mb-4">1. Información que Recopilamos</h2>
          <p>
            Podemos recopilar dos tipos principales de información para optimizar nuestros productos y brindar un mejor soporte:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Datos Proporcionados por el Usuario:</strong> Información personal (como nombre y correo electrónico) cuando te registras, te suscribes a un boletín o nos contactas directamente.</li>
            <li><strong>Datos de Navegación:</strong> Dirección IP, tipo de navegador, tiempo de visita y páginas consultadas, recopilados de manera anónima a través de cookies y herramientas de análisis.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-[var(--primary-general)] mt-8 mb-4">2. Uso de tu Información</h2>
          <p>
            La información que recopilamos se utiliza principalmente para:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Proporcionar, operar y mantener nuestra plataforma de forma segura.</li>
            <li>Mejorar, personalizar y expandir nuestros servicios web y la interfaz de usuario.</li>
            <li>Enviarte correos electrónicos de soporte, actualizaciones o fines de marketing (siempre con la opción de cancelar la suscripción).</li>
          </ul>

          <h2 className="text-2xl font-semibold text-[var(--primary-general)] mt-8 mb-4">3. Compartir Información</h2>
          <p>
            No vendemos ni alquilamos información personal a terceros. Solo podríamos compartir información en los siguientes casos:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Con proveedores de servicios confiables que nos ayudan a operar el sitio web bajo acuerdos de confidencialidad.</li>
            <li>Si es requerido por la ley o para proteger nuestros derechos legales o la seguridad de nuestros usuarios.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-[var(--primary-general)] mt-8 mb-4">4. Seguridad y Retención</h2>
          <p>
            Implementamos medidas de seguridad estándar de la industria para proteger tus datos. Sin embargo, ninguna transmisión por internet es 100% segura. Conservaremos tus datos el tiempo necesario para cumplir con los propósitos descritos en esta política o según lo exija la ley.
          </p>
        </div>
      </main>
      <Footer2 />
    </div>
  );
}
