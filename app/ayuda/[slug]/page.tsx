import { Header } from "@/components/20-header-comp";

export default async function AyudaSubPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const formattedTitle = resolvedParams.slug.replace(/-/g, " ");

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />
      <main className="flex-1 max-w-4xl mx-auto w-full px-6 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-primary-general capitalize mb-6">
          {formattedTitle}
        </h1>
        <div className="p-10 rounded-2xl bg-card border border-border">
          <p className="text-primary-color-text text-lg">
            Esta es la página dedicada a la sección de <span className="font-semibold text-foreground capitalize">{formattedTitle}</span>.
          </p>
          <p className="text-sm text-primary-color-text mt-4">
            El contenido de soporte puede ser configurado aquí para reemplazar este mensaje genérico.
          </p>
        </div>
      </main>
    </div>
  );
}
