import { Header } from "@/components/header";
import Footer2 from "@/components/footer";

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />
      <main className="flex-1 max-w-4xl mx-auto w-full px-4 md:px-6 py-32 text-left">
        <h1 className="text-4xl md:text-5xl font-bold text-[var(--primary-general)] mb-8 tracking-tight">
          Términos de Servicio
        </h1>
        <div className="space-y-6 text-lg text-[var(--primary-color-text)] leading-relaxed">
          <p>
            Última actualización: {new Date().toLocaleDateString('es-ES')}
          </p>
          <p>
            Bienvenido a <strong>[Nombre de tu Empresa]</strong>. Al acceder o utilizar nuestro sitio web y servicios asociados, aceptas estar legalmente sujeto a estos Términos de Servicio. Si no estás de acuerdo con alguna parte, no debes acceder al servicio.
          </p>

          <h2 className="text-2xl font-semibold text-[var(--primary-general)] mt-8 mb-4">1. Uso del Servicio</h2>
          <p>
            Nuestros servicios están diseñados para proporcionarse y utilizarse de acuerdo a las licencias establecidas. Accedes a hacer un uso adecuado de esta plantilla y a no emplearla con fines malintencionados o en violación de las leyes vigentes de tu jurisdicción.
          </p>

          <h2 className="text-2xl font-semibold text-[var(--primary-general)] mt-8 mb-4">2. Propiedad Intelectual</h2>
          <p>
            A menos que se indique lo contrario como un recurso de código abierto bajo licencia (MIT, Apache, etc.), el uso del contenido central asume las licencias dispuestas por los proveedores originales de los frameworks y componentes subyacentes. Eres libre de usar y modificar esta estructura para proyectos personales o comerciales acorde a dichas normativas.
          </p>

          <h2 className="text-2xl font-semibold text-[var(--primary-general)] mt-8 mb-4">3. Limitación de Responsabilidad</h2>
          <p>
            La plataforma y su código se proporcionan "tal cual", sin ningún tipo de garantía expresa o implícita. <strong>[Nombre de tu Empresa]</strong> (y los autores de la plantilla genérica) no se hacen responsables de ningún daño directo, indirecto, incidental o consecuente resultante del uso o la imposibilidad de uso del software o la plataforma.
          </p>

          <h2 className="text-2xl font-semibold text-[var(--primary-general)] mt-8 mb-4">4. Enlaces de Terceros</h2>
          <p>
            El sitio puede contener enlaces hacia sitios web de terceros que no controlamos. No asumimos responsabilidad por el contenido, políticas de privacidad o prácticas operativas ajenas a nuestra gestión directa.
          </p>

          <h2 className="text-2xl font-semibold text-[var(--primary-general)] mt-8 mb-4">5. Modificaciones de los Términos</h2>
          <p>
            Nos reservamos el derecho de actualizar o reemplazar estos Términos en cualquier momento. Revisar estas reglas periódicamente es responsabilidad del usuario; el uso continuo confirma tu aceptación ante los cambios generados.
          </p>
        </div>
      </main>
      <Footer2 />
    </div>
  );
}
