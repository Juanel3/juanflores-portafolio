'use client';

import { useEffect, useState } from 'react';

const HERO_BG = "url('/images/Hero Gradient - 34.jpg')";

/** En escritorio: background-attachment fixed (parallax nativo). En móvil: fixed falla en iOS; simulamos con transform al scroll. */
export default function HeroBackground() {
  const [isMobile, setIsMobile] = useState(false);
  const [parallaxY, setParallaxY] = useState(0);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 1023px)');
    const sync = () => setIsMobile(mq.matches);
    sync();
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, []);

  useEffect(() => {
    if (!isMobile) {
      setParallaxY(0);
      return;
    }
    const onScroll = () => {
      const y = window.scrollY;
      const vh = window.innerHeight;
      // Misma sensación que background-attachment: fixed: el fondo se “queda” mientras el bloque sube
      const t = Math.min(y, vh * 1.25) * 0.92;
      setParallaxY(t);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [isMobile]);

  return (
    <div
      className="absolute inset-0 z-0 hero-bg-inicio"
      style={{
        backgroundImage: HERO_BG,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: isMobile ? 'scroll' : 'fixed',
        transform: isMobile ? `translate3d(0, ${parallaxY}px, 0)` : undefined,
        willChange: isMobile ? 'transform' : undefined,
      }}
    />
  );
}
