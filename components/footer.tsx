"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-footer-border py-12 px-4 md:px-6 z-50 bg-footer-bg text-footer-txt">
      <div className="relative max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-8 md:mb-0">
            <Link href="/" className="mr-4 flex items-center gap-2 lg:mr-6">
              <span className="font-bold lg:inline-block text-footer-ttl">
                Arcoms 1
              </span>
            </Link>

            <h1 className="text-footer-txt mt-2 text-sm">
              Desarrollado por{" "}
              <span className="text-[var(--primary-general)] font-medium gap-2">
                <Link
                  className="underline hover:opacity-80"
                  href="https://x.com/emirpolitog"
                >
                  @emirpolitog
                </Link>
              </span>
            </h1>

            <p className="text-sm text-footer-txt mt-2">
              © {new Date().getFullYear()} Arcoms 1. Todos los derechos
              reservados.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4 text-footer-ttl">Páginas</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/ayuda"
                    className="text-footer-txt hover:text-[var(--primary-general)] transition-colors font-normal"
                  >
                    Ayuda
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contacto"
                    className="text-footer-txt hover:text-[var(--primary-general)] transition-colors font-normal"
                  >
                    Contacto
                  </Link>
                </li>
                <li>
                  <Link
                    href="/acerca"
                    className="text-footer-txt hover:text-[var(--primary-general)] transition-colors font-normal"
                  >
                    Acerca De
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-footer-ttl">
                Redes Sociales
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="https://github.com/EmirPolito"
                    className="text-footer-txt hover:text-[var(--primary-general)] transition-colors font-normal"
                  >
                    GitHub
                  </Link>
                </li>

                <li>
                  <Link
                    href="https://www.linkedin.com/in/emir-polito-g/"
                    className="text-footer-txt hover:text-[var(--primary-general)] transition-colors font-normal"
                  >
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-footer-txt hover:text-[var(--primary-general)] transition-colors font-normal"
                  >
                    Instagram
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-footer-ttl">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/privacy-policy"
                    className="text-footer-txt hover:text-[var(--primary-general)] transition-colors font-normal"
                  >
                    Política de Privacidad
                  </Link>
                </li>
                <li>
                  <Link
                    href="/tos"
                    className="text-footer-txt hover:text-[var(--primary-general)] transition-colors font-normal"
                  >
                    Términos de Servicio
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full flex mt-15 items-center justify-center">
          <h1 className="text-center text-3xl md:text-5xl lg:text-[11rem] font-bold bg-clip-text text-transparent bg-gradient-to-b from-footer-ttl/20 to-footer-ttl/80 select-none">
            Arcoms 1
          </h1>
        </div>
      </div>
    </footer>
  );
}
