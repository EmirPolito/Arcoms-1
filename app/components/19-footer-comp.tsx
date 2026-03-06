"use client";

import Link from "next/link";

export function Footer19() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container py-30 space-y-12">
        {/* TOP */}
        <div className="grid gap-12 md:grid-cols-[2fr_3fr]">
          {/* IZQUIERDA: LOGO */}
          <div className="space-y-2 max-w-md">
            <h3 className="text-primary-general text-lg font-semibold">
              Arcoms 1
            </h3>
            <p className="text-primary-color-text text-sm text-muted-foreground leading-relaxed">
              © copyright Startup 2024. All rights reserved.
            </p>
          </div>

          {/* DERECHA: LINKS */}
          <div className="grid grid-cols-4 gap-31 md:justify-self-end">
            {/* PRODUCTO */}
            <div className="space-y-5">
              <h4 className="text-primary-general text-sm font-medium tracking-wide">
                Producto
              </h4>
              <ul className="space-y-3.5 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-primary-general transition">
                    Precios
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary-general transition">
                    Acerca de
                  </Link>
                </li>
                <li>
                  <Link href="/caracteristicas" className="hover:text-primary-general transition">
                    Características
                  </Link>
                </li>
              </ul>
            </div>

            {/* COMUNIDAD */}
            <div className="space-y-5">
              <h4 className="text-primary-general text-sm font-medium tracking-wide">
                Comunidad
              </h4>
              <ul className="space-y-3.5 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-primary-general transition">
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary-general transition">
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary-general transition">
                    Instagram
                  </Link>
                </li>
              </ul>
            </div>

            {/* LEGAL */}
            <div className="space-y-5">
              <h4 className="text-primary-general text-sm font-medium tracking-wide">
                Legal
              </h4>
              <ul className="space-y-3.5 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-primary-general transition">
                    Cookies
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary-general transition">
                    Términos
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary-general transition">
                    Privacidad
                  </Link>
                </li>
              </ul>
            </div>

            {/* SOPORTE */}
            <div className="space-y-5">
              <h4 className="text-primary-general text-sm font-medium tracking-wide">
                Soporte
              </h4>
              <ul className="space-y-3.5 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-primary-general transition">
                    Ayuda
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary-general transition">
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
