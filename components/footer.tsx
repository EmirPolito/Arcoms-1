"use client";
import Link from "next/link";
import { motion } from "motion/react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { VIEWPORT_CONFIG, FADE_UP, FADE_UP_REDUCED, EASE_PREMIUM_CSS } from "@/lib/motion-config";

export default function Footer() {
  const prefersReduced = useReducedMotion();
  const fadeUpVariant = prefersReduced ? FADE_UP_REDUCED : FADE_UP;

  return (
    <footer className="border-t border-footer-border py-10 md:py-20 px-5 md:px-6 z-50 bg-footer-bg text-footer-txt">
      <div className="relative max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row justify-between gap-5.5 md:gap-0">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="mr-4 flex items-center gap-2 lg:mr-6">
              <span className="font-bold lg:inline-block text-[var(--primary-general)] ">
                Arcoms <span className="font-light">One</span>
              </span>
            </Link>

            <h1 className="text-footer-txt mt-0 md:mt-1 font-normal text-sm sm:text-base">
              Desarrollado por{" "}
              <span className="text-[var(--primary-general)] font-normal gap-2">
                <Link
                  className="underline hover:opacity-80"
                  href="https://x.com/emirpolitog"
                  style={{
                    transition: prefersReduced ? "none" : `opacity 0.3s ${EASE_PREMIUM_CSS}`,
                  }}
                >
                  @emirpolitog
                </Link>
              </span>
            </h1>

            <p className="font-normal text-footer-txt mt-1 text-sm sm:text-base">
              © {new Date().getFullYear()} Arcoms One. Todos los derechos
              reservados.
            </p>
          </div>
          <div className="grid grid-cols-4 sm:grid-cols-3 md:grid-cols-4 gap-4.5 sm:gap-8">
            <div>
              <h3 className="font-semibold mb-2 sm:mb-4 text-footer-ttl text-sm sm:text-base">
                Páginas
              </h3>
              <ul className="space-y-1.5">
                <li>
                  <Link
                    href="/ayuda"
                    className="text-footer-txt hover:text-[var(--primary-general)] font-normal text-sm"
                    style={{
                      transition: prefersReduced ? "none" : `color 0.3s ${EASE_PREMIUM_CSS}`,
                    }}
                  >
                    Ayuda
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contacto"
                    className="text-footer-txt hover:text-[var(--primary-general)] font-normal text-sm"
                    style={{
                      transition: prefersReduced ? "none" : `color 0.3s ${EASE_PREMIUM_CSS}`,
                    }}
                  >
                    Contacto
                  </Link>
                </li>
                <li>
                  <Link
                    href="/acerca"
                    className="text-footer-txt hover:text-[var(--primary-general)] font-normal text-sm"
                    style={{
                      transition: prefersReduced ? "none" : `color 0.3s ${EASE_PREMIUM_CSS}`,
                    }}
                  >
                    Nosotros
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2 sm:mb-4 text-footer-ttl text-sm sm:text-base">
                Redes
              </h3>
              <ul className="space-y-1.5">
                <li>
                  <Link
                    href="https://github.com/EmirPolito"
                    className="text-footer-txt hover:text-[var(--primary-general)] font-normal text-sm"
                    style={{
                      transition: prefersReduced ? "none" : `color 0.3s ${EASE_PREMIUM_CSS}`,
                    }}
                  >
                    GitHub
                  </Link>
                </li>

                <li>
                  <Link
                    href="https://www.linkedin.com/in/emir-polito-g/"
                    className="text-footer-txt hover:text-[var(--primary-general)] font-normal text-sm"
                    style={{
                      transition: prefersReduced ? "none" : `color 0.3s ${EASE_PREMIUM_CSS}`,
                    }}
                  >
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-footer-txt hover:text-[var(--primary-general)] font-normal text-sm"
                    style={{
                      transition: prefersReduced ? "none" : `color 0.3s ${EASE_PREMIUM_CSS}`,
                    }}
                  >
                    Instagram
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <h3 className="font-semibold mb-2 sm:mb-4 text-footer-ttl text-sm sm:text-base">
                Legal
              </h3>
              <ul className="space-y-1.5">
                <li>
                  <Link
                    href="/privacy-policy"
                    className="text-footer-txt hover:text-[var(--primary-general)] font-normal text-sm"
                    style={{
                      transition: prefersReduced ? "none" : `color 0.3s ${EASE_PREMIUM_CSS}`,
                    }}
                  >
                    Política de privacidad
                  </Link>
                </li>
                <li>
                  <Link
                    href="/tos"
                    className="text-footer-txt hover:text-[var(--primary-general)] font-normal text-sm"
                    style={{
                      transition: prefersReduced ? "none" : `color 0.3s ${EASE_PREMIUM_CSS}`,
                    }}
                  >
                    Términos de servicio
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full flex mt-10 md:mt-15 items-center justify-center">
          <motion.h1 
            className="text-center text-4xl sm:text-5xl md:text-7xl lg:text-[11rem] font-bold bg-clip-text text-transparent bg-gradient-to-b from-footer-ttl/100 to-footer-ttl/110 select-none transform-gpu"
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_CONFIG}
            style={{ willChange: "transform, opacity" }}
          >
            Arcoms <span className="font-light">One</span>
          </motion.h1>
        </div>
      </div>
    </footer>
  );
}
