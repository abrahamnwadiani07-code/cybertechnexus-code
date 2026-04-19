import { useEffect, useRef } from 'react';

// Animated particle network canvas
function ParticleNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let particles: { x: number; y: number; vx: number; vy: number; size: number; opacity: number }[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Create particles
    const count = Math.min(60, Math.floor(window.innerWidth / 25));
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.4 + 0.1,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(26, 107, 255, ${0.06 * (1 - dist / 150)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw particles
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(26, 107, 255, ${p.opacity})`;
        ctx.fill();

        // Move
        p.x += p.vx;
        p.y += p.vy;

        // Bounce
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
      });

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />;
}

export default function PremiumBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#020810] via-[#030b14] to-[#071525]" />

      {/* Layered cybersecurity images with heavy overlays */}
      <div className="absolute inset-0">
        {/* Top-left: Digital shield / security */}
        <div
          className="absolute -top-20 -left-20 w-[700px] h-[700px] bg-cover bg-center opacity-[0.04] rounded-full blur-sm"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=60)' }}
        />
        {/* Top-right: Server room */}
        <div
          className="absolute -top-10 -right-20 w-[600px] h-[500px] bg-cover bg-center opacity-[0.03] blur-sm"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=60)' }}
        />
        {/* Center: Code / matrix */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[800px] bg-cover bg-center opacity-[0.02] blur-[2px]"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1200&q=60)' }}
        />
        {/* Bottom-left: Network globe */}
        <div
          className="absolute -bottom-20 -left-10 w-[600px] h-[600px] bg-cover bg-center opacity-[0.03] rounded-full blur-sm"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=60)' }}
        />
        {/* Bottom-right: Compliance / business */}
        <div
          className="absolute -bottom-10 -right-20 w-[500px] h-[400px] bg-cover bg-center opacity-[0.03] blur-sm"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1563986768609-322da13575f2?w=800&q=60)' }}
        />
      </div>

      {/* Radial gradient orbs */}
      <div className="absolute top-[10%] left-[15%] w-[500px] h-[500px] rounded-full bg-ctn-blue/[0.03] blur-[100px]" />
      <div className="absolute top-[50%] right-[10%] w-[400px] h-[400px] rounded-full bg-[#1050cc]/[0.04] blur-[120px]" />
      <div className="absolute bottom-[10%] left-[30%] w-[600px] h-[600px] rounded-full bg-ctn-blue/[0.02] blur-[150px]" />
      <div className="absolute top-[30%] right-[30%] w-[300px] h-[300px] rounded-full bg-purple-900/[0.03] blur-[80px]" />

      {/* Animated scan line */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-ctn-blue/10 to-transparent animate-scanline"
          style={{ animation: 'scanline 8s linear infinite' }}
        />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-bg animate-grid-drift opacity-60" />

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#030b14_75%)]" />

      {/* Particle network */}
      <ParticleNetwork />
    </div>
  );
}
