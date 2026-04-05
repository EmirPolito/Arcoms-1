# Arcoms-1 — Arcoms Collection

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8?logo=tailwindcss)](https://tailwindcss.com/)

**Demo en vivo:** [arcoms-1.vercel.app](https://arcoms-1.vercel.app/)

![9256019b-e669-4a83-a367-29cd49e4f2dd](https://github.com/user-attachments/assets/e3907327-70fa-45c6-9bb9-6e7b2b4dade0)
![1e652d5d-10e2-4d96-87ea-081189ab4776](https://github.com/user-attachments/assets/91adc200-d930-47a8-9037-31f35d61c73b)

**Arcoms-1** es una landing page inmersiva y de alto impacto visual, parte de **Arcoms Collection**. Diseñada para cautivar al usuario desde el primer segundo mediante animaciones fluidas, modelos 3D interactivos y un sistema de temas completamente personalizable.

---

## ✨ Características

- **Sistema Multitema** — Modos **Claro**, **Oscuro** y **Daltónico** con acentos de color intercambiables en tiempo real (Naranja, Azul, Verde, Violeta, Rosa, Amarillo).
- **Tokens CSS Semánticos** — Arquitectura basada en variables como `--hero-bg`, `--feat-card`, `--price-ttl` que garantizan consistencia visual en todos los modos.
- **Modelos 3D Interactivos** — Integración de escenas Spline renderizadas en tiempo real dentro del navegador.
- **Animaciones GPU-Optimizadas** — Transiciones de entrada con Motion (Framer Motion) usando solamente propiedades compositadas (`opacity`, `transform`) para 0 jank.
- **Globo Interactivo** — Visualización global con la librería COBE y mapas wireframe con D3.js + TopoJSON.
- **Componentes Animados** — Tarjetas 3D con perspectiva, carruseles de logos, testimonios con auto-play, y secciones bento con cards flotantes.
- **Performance Extrema** — Next.js 16 con Turbopack, React 19, zero código muerto, transiciones específicas por propiedad.

---

## 🛠️ Stack Tecnológico

| Tecnología                 | Uso                                                           |
| :------------------------- | :------------------------------------------------------------ |
| **Next.js 16**             | App Router, SSR, optimización de imágenes, Turbopack          |
| **React 19**               | Renderizado, hooks, interactividad                            |
| **Tailwind CSS v4**        | Sistema de diseño con `@theme`, `@custom-variant`, `@utility` |
| **Motion (Framer Motion)** | Animaciones de entrada, transiciones, carruseles              |
| **Spline**                 | Modelos 3D interactivos embebidos                             |
| **COBE**                   | Globo 3D animado con WebGL                                    |
| **D3.js + TopoJSON**       | Globo wireframe SVG interactivo                               |
| **Embla Carousel**         | Motor de carruseles ligero                                    |
| **Radix UI**               | Primitivos accesibles (Select, Avatar, Separator)             |
| **Lucide React**           | Iconografía SVG consistente                                   |

---

## 🚀 Inicio Rápido

### 1. Clonar el repositorio

```bash
git clone https://github.com/EmirPolito/Arcoms-1.git
cd Arcoms-1
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Servidor de desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### 4. Build de producción

```bash
npm run build
npm start
```

---

## 🎨 Sistema de Temas y Colores

El proyecto utiliza un sistema de temas basado en atributos `data-theme` y `data-color` en el elemento `<html>`:

```
data-theme="light" | "dark" | "colorblind"
data-color="neutro" | "orange" | "blue" | "green" | "violet" | "rose" | "yellow"
```

- **Tokens centralizados** en `app/globals.css`, organizados por componente semántico (`--header-*`, `--hero-*`, `--feat-*`, `--price-*`, `--footer-*`).
- **Sin clases hardcodeadas** — todo responde a variables CSS reactivas.
- **Modo daltónico** con paleta de alto contraste (azul + amarillo) para máxima accesibilidad.

---

## 📂 Estructura del Proyecto

```
Arcoms-1/
├── app/                    # Rutas (App Router) y globals.css
│   ├── page.tsx            # Página principal
│   ├── globals.css         # Sistema de temas y tokens
│   ├── layout.tsx          # Layout raíz con carga de temas
│   ├── acerca/             # Página "Acerca De"
│   ├── contacto/           # Página de contacto con globo
│   ├── ayuda/              # Centro de ayuda
│   ├── explore/            # Galería de proyectos
│   └── work/               # Resumen con galería flotante
├── components/             # Componentes de la aplicación
│   ├── hero.tsx            # Hero con escena Spline 3D
│   ├── pricing.tsx         # Sección de precios interactiva
│   ├── header.tsx          # Header con selector de temas
│   ├── footer.tsx          # Footer con gradiente tipográfico
│   ├── estado-agentes.tsx  # Grid de 4 cuadrantes animado
│   ├── bento-caracteristicas.tsx  # Bento grid con globo COBE
│   └── ui/                 # Primitivos UI reutilizables
├── public/
│   ├── img/                # Imágenes del proyecto
│   └── icons/              # Logos SVG para el carrusel
└── package.json
```

---

## 📄 Licencia

Este proyecto está bajo la licencia **MIT**. Consulta el archivo [LICENSE](LICENSE) para más detalles.

---

## Desarrollado por

**Emir Polito**

- GitHub: [EmirPolito](https://github.com/EmirPolito)
- LinkedIn: [emir-polito-g](https://www.linkedin.com/in/emir-polito-g/)
- X: [@emirpolitog](https://x.com/emirpolitog)
