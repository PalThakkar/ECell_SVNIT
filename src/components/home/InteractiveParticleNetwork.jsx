"use client";

import React, { useRef, useEffect, useCallback } from "react";

/**
 * InteractiveParticleNetwork
 *
 * A high-performance canvas-based particle network with:
 *  - Floating particle nodes (startup/network theme)
 *  - Connection lines between nearby nodes (networking metaphor)
 *  - Mouse cursor repulsion / attraction physics
 *  - Click-to-spawn burst of new particles
 *  - Yellow (#fbbd58) & slate color palette matching E-Cell brand
 *  - Smooth 60fps RAF animation loop
 *  - Responsive canvas resizing
 */

const PARTICLE_CONFIG = {
  count: 80,                // Number of nodes
  maxRadius: 4,             // Max particle dot radius
  minRadius: 1.5,           // Min particle dot radius
  speed: 0.35,              // Base movement speed
  connectionDistance: 130,  // Max distance for drawing a connection line
  mouseRepelRadius: 140,    // Distance at which mouse starts repelling
  mouseRepelStrength: 0.55, // How strongly the mouse repels
  mouseAttractRadius: 260,  // Outer radius for subtle attraction back to center
  clickBurst: 6,            // New particles spawned on click
  lineOpacityMax: 0.25,     // Max connection line opacity
  yellowColor: "#fbbd58",   // E-Cell brand yellow
  slateColor: "#64748b",    // Slate-500 for secondary nodes
  bgColor: "rgba(255,255,255,0)",  // Transparent (inherits section bg)
  yellowRatio: 0.28,        // Fraction of nodes that are yellow-tinted
};

function createParticle(width, height, opts = {}) {
  const yellow = Math.random() < PARTICLE_CONFIG.yellowRatio;
  const radius =
    PARTICLE_CONFIG.minRadius +
    Math.random() * (PARTICLE_CONFIG.maxRadius - PARTICLE_CONFIG.minRadius);

  return {
    x: opts.x ?? Math.random() * width,
    y: opts.y ?? Math.random() * height,
    vx: (Math.random() - 0.5) * PARTICLE_CONFIG.speed * 2,
    vy: (Math.random() - 0.5) * PARTICLE_CONFIG.speed * 2,
    radius,
    alpha: 0.35 + Math.random() * 0.55,
    yellow,
    // Pulsing radius
    pulsePhase: Math.random() * Math.PI * 2,
    pulseSpeed: 0.018 + Math.random() * 0.022,
    basePulse: radius,
  };
}

const InteractiveParticleNetwork = ({ className = "", children }) => {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const mouseRef = useRef({ x: -9999, y: -9999, inside: false });
  const animFrameRef = useRef(null);
  const resizeObserverRef = useRef(null);

  const initParticles = useCallback((width, height) => {
    const area = width * height;
    const dynamicCount = Math.min(350, Math.max(150, Math.floor(area / 20000)));
    particlesRef.current = Array.from({ length: dynamicCount }, () =>
      createParticle(width, height)
    );
  }, []);

  const drawFrame = useCallback((ctx, width, height, timestamp) => {
    ctx.clearRect(0, 0, width, height);

    const particles = particlesRef.current;
    const mouse = mouseRef.current;

    // ── Update particle physics ──────────────────────────────────────────────
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];

      // Pulse radius
      p.radius =
        p.basePulse +
        Math.sin(p.pulsePhase + timestamp * p.pulseSpeed) * 0.6;

      // Mouse repulsion / attraction
      const dx = p.x - mouse.x;
      const dy = p.y - mouse.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (mouse.inside && dist < PARTICLE_CONFIG.mouseRepelRadius && dist > 0) {
        // Repel away from cursor
        const force =
          ((PARTICLE_CONFIG.mouseRepelRadius - dist) /
            PARTICLE_CONFIG.mouseRepelRadius) *
          PARTICLE_CONFIG.mouseRepelStrength;
        p.vx += (dx / dist) * force;
        p.vy += (dy / dist) * force;
      } else if (
        mouse.inside &&
        dist > PARTICLE_CONFIG.mouseRepelRadius &&
        dist < PARTICLE_CONFIG.mouseAttractRadius
      ) {
        // Gentle drift toward cursor outer ring (attraction zone)
        const force = 0.012;
        p.vx -= (dx / dist) * force;
        p.vy -= (dy / dist) * force;
      }

      // Damping (keeps velocity from runaway growth)
      p.vx *= 0.985;
      p.vy *= 0.985;

      // Clamp speed
      const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
      const maxSpeed = PARTICLE_CONFIG.speed * 3.5;
      if (speed > maxSpeed) {
        p.vx = (p.vx / speed) * maxSpeed;
        p.vy = (p.vy / speed) * maxSpeed;
      }

      // Drift
      p.x += p.vx;
      p.y += p.vy;

      // Soft boundary wrap (particles drift in from other side)
      const margin = 20;
      if (p.x < -margin) p.x = width + margin;
      if (p.x > width + margin) p.x = -margin;
      if (p.y < -margin) p.y = height + margin;
      if (p.y > height + margin) p.y = -margin;
    }

    // ── Draw connection lines ────────────────────────────────────────────────
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const a = particles[i];
        const b = particles[j];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < PARTICLE_CONFIG.connectionDistance) {
          const opacity =
            ((PARTICLE_CONFIG.connectionDistance - dist) /
              PARTICLE_CONFIG.connectionDistance) *
            PARTICLE_CONFIG.lineOpacityMax;

          // Yellow line if both nodes are yellow, else slate
          const lineColor =
            a.yellow && b.yellow ? "#fbbd58" : "#94a3b8";

          ctx.beginPath();
          ctx.strokeStyle = lineColor;
          ctx.globalAlpha = opacity;
          ctx.lineWidth = a.yellow && b.yellow ? 1.2 : 0.8;
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }

    // ── Draw particle nodes ──────────────────────────────────────────────────
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];

      // Node glow (only yellow nodes)
      if (p.yellow) {
        const grd = ctx.createRadialGradient(
          p.x, p.y, 0,
          p.x, p.y, p.radius * 3.5
        );
        grd.addColorStop(0, "rgba(251,189,88,0.35)");
        grd.addColorStop(1, "rgba(251,189,88,0)");
        ctx.beginPath();
        ctx.fillStyle = grd;
        ctx.globalAlpha = p.alpha;
        ctx.arc(p.x, p.y, p.radius * 3.5, 0, Math.PI * 2);
        ctx.fill();
      }

      // Core dot
      ctx.beginPath();
      ctx.globalAlpha = p.alpha;
      ctx.fillStyle = p.yellow ? PARTICLE_CONFIG.yellowColor : PARTICLE_CONFIG.slateColor;
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fill();
    }

    // ── Draw cursor halo ─────────────────────────────────────────────────────
    if (mouse.inside) {
      const grd = ctx.createRadialGradient(
        mouse.x, mouse.y, 0,
        mouse.x, mouse.y, PARTICLE_CONFIG.mouseRepelRadius
      );
      grd.addColorStop(0, "rgba(251,189,88,0.10)");
      grd.addColorStop(0.5, "rgba(251,189,88,0.04)");
      grd.addColorStop(1, "rgba(251,189,88,0)");
      ctx.beginPath();
      ctx.fillStyle = grd;
      ctx.globalAlpha = 1;
      ctx.arc(mouse.x, mouse.y, PARTICLE_CONFIG.mouseRepelRadius, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.globalAlpha = 1;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const setSize = () => {
      const container = canvas.parentElement;
      canvas.width = container.offsetWidth;
      canvas.height = container.offsetHeight;
      initParticles(canvas.width, canvas.height);
    };

    setSize();

    // ResizeObserver for responsive canvas
    resizeObserverRef.current = new ResizeObserver(() => setSize());
    resizeObserverRef.current.observe(canvas.parentElement);

    // Animation loop
    let lastTime = 0;
    const loop = (timestamp) => {
      // Throttle to ~60fps
      if (timestamp - lastTime > 13) {
        drawFrame(ctx, canvas.width, canvas.height, timestamp);
        lastTime = timestamp;
      }
      animFrameRef.current = requestAnimationFrame(loop);
    };
    animFrameRef.current = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      resizeObserverRef.current?.disconnect();
    };
  }, [initParticles, drawFrame]);

  // Mouse event handlers
  const handleMouseMove = useCallback((e) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    mouseRef.current.x = e.clientX - rect.left;
    mouseRef.current.y = e.clientY - rect.top;
    mouseRef.current.inside = true;
  }, []);

  const handleMouseLeave = useCallback(() => {
    mouseRef.current.inside = false;
    mouseRef.current.x = -9999;
    mouseRef.current.y = -9999;
  }, []);

  // Click: spawn a burst of new particles at cursor position
  const handleClick = useCallback((e) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const cx = e.clientX - rect.left;
    const cy = e.clientY - rect.top;

    const burst = Array.from({ length: PARTICLE_CONFIG.clickBurst }, () => {
      const p = createParticle(canvas.width, canvas.height, { x: cx, y: cy });
      // Give them outward burst velocity
      const angle = Math.random() * Math.PI * 2;
      const speed = 1.2 + Math.random() * 1.8;
      p.vx = Math.cos(angle) * speed;
      p.vy = Math.sin(angle) * speed;
      p.alpha = 0.8;
      p.yellow = Math.random() < 0.6; // More yellow on click burst
      return p;
    });

    // Keep total particle count reasonable
    const particles = particlesRef.current;
    if (particles.length + burst.length > PARTICLE_CONFIG.count + 60) {
      particlesRef.current = [
        ...particles.slice(burst.length),
        ...burst,
      ];
    } else {
      particlesRef.current = [...particles, ...burst];
    }
  }, []);

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {/* Canvas lives at z-0, behind content */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
        style={{ display: "block" }}
        aria-hidden="true"
      />

      {/* Content renders above the canvas */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default InteractiveParticleNetwork;
