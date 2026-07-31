"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const InteractiveGridBackground = ({ className = "", children }) => {
  const containerRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: -1000, y: -1000 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setMousePosition({ x: -1000, y: -1000 });
      }}
      className={`relative overflow-hidden ${className}`}
    >
      {/* Interactive Cursor Spotlight Glow */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 -z-10"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(251, 189, 88, 0.18), transparent 80%)`,
        }}
      />

      {/* SVG Grid Line Texture */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-20">
        <svg className="h-full w-full stroke-slate-400/40" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="interactive-grid-pattern"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path d="M 40 0 L 0 0 0 40" fill="none" strokeWidth="1" />
              <circle cx="40" cy="40" r="1.5" className="fill-slate-500/40" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#interactive-grid-pattern)" />
        </svg>
      </div>

      {children}
    </div>
  );
};

export default InteractiveGridBackground;
