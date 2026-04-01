# 🌌 Arcoms-1 de (Arcoms Collection)

![1372c9fe-40a3-47a2-82de-867309d24449](https://github.com/user-attachments/assets/176ce5b7-0e10-4fc0-93db-204600b658d5)

Bienvenido al repositorio oficial de **Arcoms-1**, parte integral de **Arcoms Collection**. Este es un sitio web informativo, inmersivo y **futurista** que forma parte de mi una colección de sitios web. Está diseñado para atrapar y cautivar al usuario desde el primer segundo mediante un diseño sumamente moderno, animaciones fluidas y experiencias visuales inmersivas.

## ✨ Características Principales

- **Diseño Ultra Moderno y Futurista**: Interfaces diseñadas con cuidado meticuloso usando fondos oscuros, contrastes visuales vibrantes (estilo neón), _glassmorphism_ (efectos de cristal) y componentes de alto impacto.
- **Arquitectura CSS Basada en Componentes**: Las utilidades de Tailwind se abstraen en tokens semánticos sólidos como `--hero-bg` y `--feat-card` creando un `globals.css` modular, ultra personalizable y de alta mantenibilidad.
- **Sistema Multitema Inclusivo**: Soporte avanzado y granular para modos **Claro**, **Oscuro**, y **Daltónico**. Además, posee personalización de acentos de color vibrantes interactivos (Naranja, Azul, Verde, Violeta, Rosa y Amarillo).
- **Experiencia Inmersiva (Motion, 3D & Carruseles)**: Elevamos la barrera de lo estático utilizando **Framer Motion** para transiciones espectaculares, simulaciones asombrosas con **Three.js** y **Spline**, así como visualizadores ágiles impulsados por **Embla Carousel**.
- **Partículas y Mundos Virtuales**: Implementación de fondos dinámicos y sistemas complejos de partículas con **tsParticles**, creando una estética "cyberpunk" y espacial inigualable.
- **Internacionalización (i18n)**: Arquitectura completamente multilenguaje utilizando excelentes herramientas como `next-intl` y `i18next`.
- **Velocidad y Performance Extrema**: Desarrollado con las herramientas de vanguardia más eficientes como **Next.js 16** (Turbopack) y **React 19**, garantizando un rendimiento, SEO y First-Contentful-Paint estelares.

## 🛠️ Stack Tecnológico

El núcleo de este proyecto fusiona el mejor ecosistema de la web moderna para dotar al sistema de robustez y belleza gráfica:

| Tecnología                  | Descripción                                                                                      |
| :-------------------------- | :----------------------------------------------------------------------------------------------- |
| **Next.js 16**              | Framework React líder para generación estática e híbrida y Server-Side Rendering (SSR).          |
| **React 19**                | Última versión de React que aporta el mejor manejo de interacciones asíncronas de la industria.  |
| **Tailwind CSS v4**         | Motor utilitario revolucionario para crear y mantener interfaces espectaculares a velocidad luz. |
| **Framer Motion**           | La librería predilecta para dar vida y orquestar animaciones complejas en la interfaz.           |
| **Three.js & Spline**       | Todo el poder gráfico para renderizado de elementos 3D dinámicos directamente en el navegador.   |
| **Radix UI & Tabler Icons** | Componentes primitivos súper accesibles y miles de maravillosas representaciones vectoriales.    |
| **Embla Carousel**          | Motor robusto y liviano de sliders y carruseles fluidos usado en el ecosistema actual.           |
| **tsParticles**             | Configuración avanzada de dinámicas para generar lluvias visuales y un entorno vivo.             |

## 🚀 Inicio Rápido Local

Si deseas probar o compilar esta aplicación de forma local, sigue estas rápidas instrucciones:

### 1. Clonar el repositorio

```bash
git clone https://github.com/EmirPolito/Arcoms-1.git
cd Arcoms-1
```

### 2. Instalar dependencias

Asegúrate de contar con Node.js previamente instalado y un gestor de paquetes como npm.

```bash
npm install
```

### 3. Levantar Servidor de Desarrollo

Para disfrutar del código en vivo y hacer cambios en tiempo real usando Turbopack:

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador preferido. ¡Interactúa, explora y siéntete atrapado por su gran ecosistema!

## 🎨 Sistema de Temas, Colores y Accesibilidad

Este proyecto cuenta con un sistema dinámico de modos visuales de próxima generación para asegurar que la interfaz se adapte perfectamente:

- **Propiedades Centralizadas:** El color y diseño estructural está definido rígidamente en `app/globals.css` separando los componentes por áreas semánticas (`--header`, `--hero`, `--feat`, `--price`).
- **Diversidad de Modos:** Intercambia entre `[data-theme="light"]`, `[data-theme="dark"]` y `[data-theme="colorblind"]` garantizando que los usuarios con deficiencia visual siempre tengan un contraste nítido y óptimo.
- **Clases Semánticas Exclusivas:** No usamos clases "hardcodeadas" estáticas (`bg-white` o `text-black`). Todo responde a los tokens reactivos de Tailwind como `bg-background`, `text-foreground`, garantizando la pureza del diseño.
- **Colores de Acento:** El usuario tiene total control para re-pintar de vida la web pasando un modificador en las variables en tiempo real en tonalidades Naranja, Azul, Verde, Violeta, Rosa o Amarillo.

## 📂 Organización Esencial

```text
Arcoms Collection/
│
├── app/               # Motor de App Router de Next.js. Contiene todas las rutas, traducciones y globals.css.
├── components/        # Todo el catálogo de componentes reactivos UI y estéticos en la raíz.
├── public/            # Archivos estáticos que no pasan por build process.
│   └── img/           # Banco de recursos gráficos espectaculares del portal.
├── tailwind.config.ts # Core de diseño donde se declara la paleta de color semántica e identidad.
└── package.json       # Manifiesto vital de dependencias y scripts constructivos.
```

## 🧠 Filosofía y Emoción Visual

**Arcoms Collection** no está pensado solo como un agrupador de código y texto estéril; es una declaración de un concepto visual digital vivo. Un concepto diseñado mediante:

- **Curaduría Cromática**: El uso de paletas temáticas espaciales o técnicas que juegan con el claroscuro.
- **Geometría Absoluta**: Componentes inmersivos diseñados sobre un contenedor ancho fluido (`max-w-7xl`) balanceando elegantemente blancos y negros.
- **Vida UI/UX**: Inyectando respuestas animadas, micro-interacciones sutiles y transiciones sedosas para que el portal aplauda la mera acción de moverse.

---

## Desarrollado por

**Emir Polito**

- GitHub: https://github.com/EmirPolito
- LinkedIn: https://www.linkedin.com/in/emir-polito-g/
