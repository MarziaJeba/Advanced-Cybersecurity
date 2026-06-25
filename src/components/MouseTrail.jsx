import { useEffect, useRef } from 'react';

export default function MouseTrail() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    let mouseX = -100;
    let mouseY = -100;
    let particles = [];
    let animId;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Spawn a burst of particles on each move
      for (let i = 0; i < 3; i++) {
        particles.push({
          x: mouseX + (Math.random() - 0.5) * 4,
          y: mouseY + (Math.random() - 0.5) * 4,
          // Slight random drift
          vx: (Math.random() - 0.5) * 1.2,
          vy: (Math.random() - 0.5) * 1.2 - 0.5, // drift upward slightly
          life: 1.0,        // 1.0 → 0.0
          decay: 0.012 + Math.random() * 0.016,
          size: 2 + Math.random() * 3,
          maxSize: 20 + Math.random() * 30,
        });
      }
    };

    const draw = () => {
      // Clear with a slight fade for extra trail feel
      ctx.clearRect(0, 0, width, height);

      // Update and draw particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.life -= p.decay;
        if (p.life <= 0) {
          particles.splice(i, 1);
          continue;
        }

        p.x += p.vx;
        p.y += p.vy;
        // Slow down drift over time
        p.vx *= 0.98;
        p.vy *= 0.98;

        // Size grows as life decreases
        const progress = 1 - p.life;
        const currentSize = p.size + (p.maxSize - p.size) * progress;
        const alpha = p.life * p.life; // quadratic fade for smoother falloff

        // Draw glowing smoke circle
        const gradient = ctx.createRadialGradient(
          p.x, p.y, 0,
          p.x, p.y, currentSize
        );
        gradient.addColorStop(0, `rgba(255, 255, 255, ${alpha * 0.6})`);
        gradient.addColorStop(0.4, `rgba(220, 220, 240, ${alpha * 0.25})`);
        gradient.addColorStop(1, `rgba(200, 200, 220, 0)`);

        ctx.beginPath();
        ctx.arc(p.x, p.y, currentSize, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      }

      // Draw the small green cursor dot
      if (mouseX > 0 && mouseY > 0) {
        // Outer glow
        const glow = ctx.createRadialGradient(
          mouseX, mouseY, 0,
          mouseX, mouseY, 12
        );
        glow.addColorStop(0, 'rgba(0, 255, 100, 0.6)');
        glow.addColorStop(0.5, 'rgba(0, 255, 100, 0.15)');
        glow.addColorStop(1, 'rgba(0, 255, 100, 0)');
        ctx.beginPath();
        ctx.arc(mouseX, mouseY, 12, 0, Math.PI * 2);
        ctx.fillStyle = glow;
        ctx.fill();

        // Bright center dot
        ctx.beginPath();
        ctx.arc(mouseX, mouseY, 3, 0, Math.PI * 2);
        ctx.fillStyle = '#00ff64';
        ctx.fill();
      }

      animId = requestAnimationFrame(draw);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('resize', resize);
    animId = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="hidden md:block"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 9999,
      }}
    />
  );
}
