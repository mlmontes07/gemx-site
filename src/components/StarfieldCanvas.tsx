import { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

interface Star {
  x: number;
  y: number;
  radius: number;
  baseAlpha: number;
  phase: number;
  speed: number;
  hue: string;
}

export function StarfieldCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let animationId = 0;
    let stars: Star[] = [];

    const isDark = resolvedTheme === 'dark';
    // Night: luminous golden & white starlight; Day: subtle warm gold & deep-navy solar motes
    const hues = isDark
      ? ['#ffffff', '#fef08a', '#fbbf24', '#dbeafe']
      : ['#d97706', '#f59e0b', '#1e3a8a', '#94a3b8'];

    const initStars = (width: number, height: number) => {
      const density = isDark ? 16000 : 24000;
      const maxCount = isDark ? 95 : 55;
      const count = Math.min(maxCount, Math.floor((width * height) / density));
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: isDark ? Math.random() * 1.2 + 0.35 : Math.random() * 1.05 + 0.35,
        baseAlpha: isDark ? Math.random() * 0.46 + 0.14 : Math.random() * 0.14 + 0.06,
        phase: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.008 + 0.002,
        hue: hues[Math.floor(Math.random() * hues.length)],
      }));
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = window.innerWidth;
      const height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      initStars(width, height);
    };

    const drawFrame = (time: number) => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      ctx.clearRect(0, 0, width, height);

      const maxAlpha = isDark ? 0.78 : 0.22;
      const minAlpha = isDark ? 0.06 : 0.04;

      for (const s of stars) {
        const twinkle = prefersReducedMotion
          ? s.baseAlpha
          : s.baseAlpha * (0.72 + 0.28 * Math.sin(time * 0.0014 + s.phase));
        ctx.globalAlpha = Math.max(minAlpha, Math.min(maxAlpha, twinkle));
        ctx.fillStyle = s.hue;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
        ctx.fill();

        if (!prefersReducedMotion) {
          s.y -= s.speed * 3;
          if (s.y < -2) {
            s.y = height + 2;
            s.x = Math.random() * width;
          }
        }
      }
      ctx.globalAlpha = 1;

      if (!prefersReducedMotion) {
        animationId = window.requestAnimationFrame(drawFrame);
      }
    };

    resize();
    drawFrame(0);

    window.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('resize', resize);
      if (animationId) window.cancelAnimationFrame(animationId);
    };
  }, [resolvedTheme]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: -1,
        pointerEvents: 'none',
      }}
    />
  );
}
