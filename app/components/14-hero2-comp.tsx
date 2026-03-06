
import LaserFlow from '@/app/components/ui/14-hero2-ui';
import { useRef } from 'react';

// Componente de uso básico
function BasicUsage() {
  return (
    <div style={{ height: '500px', position: 'relative', overflow: 'hidden' }}>
      <LaserFlow />
    </div>
  );
}

// Ejemplo interactivo con imagen y LaserFlow
function ComponentHero14() {
  const revealImgRef = useRef<HTMLImageElement | null>(null);

  return (
    <div
      style={{
        height: '800px',
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#060010',
      }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const el = revealImgRef.current;
        if (el) {
          el.style.setProperty('--mx', `${x}px`);
          el.style.setProperty('--my', `${y + rect.height * 0.5}px`);
        }
      }}
      onMouseLeave={() => {
        const el = revealImgRef.current;
        if (el) {
          el.style.setProperty('--mx', '-9999px');
          el.style.setProperty('--my', '-9999px');
        }
      }}
    >
      <LaserFlow
        horizontalBeamOffset={0.1}
        verticalBeamOffset={0.0}
        color="#6122a0"
        horizontalSizing={1.79}
        verticalSizing={2.8}
        wispDensity={1.5}
        wispSpeed={13}
        wispIntensity={1.9}
        flowSpeed={0.57}
        flowStrength={0.63}
        fogIntensity={0.69}
        fogScale={0.34}
        fogFallSpeed={0.58}
        decay={0.94}
        falloffStart={1.47}
      />

      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '86%',
          height: '60%',
          backgroundColor: '#060010',
          borderRadius: '20px',
          border: '2px solid #FF79C6',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: '2rem',
          zIndex: 6,
        }}
      >
        {/* Tu contenido aquí */}
      </div>

      <img
        ref={revealImgRef}
        src="/img/hero.jp"
        alt="Reveal effect"
        style={{
          position: 'absolute',
          width: '100%',
          top: '-50%',
          zIndex: 5,
          mixBlendMode: 'lighten',
          opacity: 0.3,
          pointerEvents: 'none',
          // @ts-ignore
          '--mx': '-9999px',
          // @ts-ignore
          '--my': '-9999px',
          WebkitMaskImage:
            'radial-gradient(circle at var(--mx) var(--my), rgba(255,255,255,1) 0px, rgba(255,255,255,0.95) 60px, rgba(255,255,255,0.6) 120px, rgba(255,255,255,0.25) 180px, rgba(255,255,255,0) 240px)',
          maskImage:
            'radial-gradient(circle at var(--mx) var(--my), rgba(255,255,255,1) 0px, rgba(255,255,255,0.95) 60px, rgba(255,255,255,0.6) 120px, rgba(255,255,255,0.25) 180px, rgba(255,255,255,0) 240px)',
          WebkitMaskRepeat: 'no-repeat',
          maskRepeat: 'no-repeat',
        } as React.CSSProperties}
      />
    </div>
  );
}

// Exporta el componente que quieras mostrar por defecto
export default ComponentHero14;