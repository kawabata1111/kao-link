import React, { useEffect, useRef } from 'react';

export const ParticlesBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: Particle[] = [];
    let animationFrameId: number;
    let w = canvas.width = window.innerWidth;
    let h = canvas.height = window.innerHeight;

    const config = {
      particleColor: 'rgba(230, 126, 34, 0.4)',
      lineColor: 'rgba(230, 126, 34, 0.1)',
      particleAmount: Math.min(Math.floor(window.innerWidth * window.innerHeight / 15000), 100), // Density based on screen size
      defaultSpeed: 0.5,
      variantSpeed: 1,
      linkRadius: 150,
    };

    class Particle {
      x: number;
      y: number;
      speedX: number;
      speedY: number;
      size: number;

      constructor() {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.speedX = Math.random() * config.variantSpeed - config.defaultSpeed;
        this.speedY = Math.random() * config.variantSpeed - config.defaultSpeed;
        this.size = Math.random() * 2 + 1;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > w) this.x = 0;
        else if (this.x < 0) this.x = w;

        if (this.y > h) this.y = 0;
        else if (this.y < 0) this.y = h;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = config.particleColor;
        ctx.fill();
      }
    }

    const init = () => {
      particles = [];
      for (let i = 0; i < config.particleAmount; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, w, h);

      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();

        // Draw connections
        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < config.linkRadius) {
            ctx.beginPath();
            ctx.strokeStyle = config.lineColor;
            ctx.lineWidth = 1;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      init();
    };

    init();
    animate();
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 z-0 pointer-events-none opacity-50"
    />
  );
};