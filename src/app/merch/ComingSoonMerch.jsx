"use client";
import React, { useRef, useState } from "react";

const ComingSoonMerch = ({
  title = "E‑Cell Tee Drop",
  subtitle = "Official E‑Cell SVNIT · Limited Edition",
  src = "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1600&auto=format&fit=crop",
}) => {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0, glowX: 50, glowY: 50 });

  function onMouseMove(e) {
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const midX = rect.width / 2;
    const midY = rect.height / 2;
    const ry = ((x - midX) / midX) * 10;
    const rx = -((y - midY) / midY) * 8;
    setTilt({
      rx,
      ry,
      glowX: (x / rect.width) * 100,
      glowY: (y / rect.height) * 100,
    });
  }
  function onMouseLeave() {
    setTilt({ rx: 0, ry: 0, glowX: 50, glowY: 50 });
  }

  return (
    <section className="relative min-h-screen overflow-hidden bg-white">
      {/* Animated grid background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,193,7,0.06),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(255,193,7,0.05),transparent_40%),radial-gradient(circle_at_30%_90%,rgba(255,193,7,0.06),transparent_35%)]" />
        <div className="absolute inset-0 opacity-[0.35] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]">
          <svg
            className="w-full h-full motion-safe:animate-slow-pan"
            viewBox="0 0 120 60"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="grid"
                width="10"
                height="10"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 10 0 L 0 0 0 10"
                  fill="none"
                  stroke="rgba(0,0,0,0.06)"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </div>

      {/* Top marquee ticker */}
      <div className="sticky top-0 z-10 bg-gradient-to-r from-yellow-100/60 via-white to-yellow-100/60 backdrop-blur border-b border-yellow-200">
        <div className="overflow-hidden">
          <div className="flex gap-6 py-2 whitespace-nowrap motion-safe:animate-marquee">
            {Array.from({ length: 12 }).map((_, i) => (
              <span
                key={i}
                className="text-xs font-semibold tracking-wider text-yellow-700"
              >
                ✦ E‑CELL SVNIT MERCH · COMING SOON ✦ LIMITED DROP ✦
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: Glass card with heading */}
        <div className="relative">
          {/* Glass panel */}
          <div className="relative rounded-3xl border border-yellow-200/60 bg-white/60 backdrop-blur-xl p-8 sm:p-10 shadow-[0_20px_80px_rgba(0,0,0,0.06)]">
            {/* Neon outline heading */}
            <h1 className="text-5xl md:text-6xl font-black leading-tight">
              <span className="relative">
                <span className="text-gray-900">E‑Cell</span>{" "}
                <span className="bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent">
                  Tee Drop
                </span>
                <span className="absolute inset-0 -z-10 text-transparent [text-shadow:0_0_24px_rgba(255,193,7,0.5)] select-none">
                  Tee Drop
                </span>
              </span>
            </h1>
            <p className="mt-3 text-lg text-gray-700">{subtitle}</p>

            {/* Feature pills */}
            <div className="mt-6 flex flex-wrap gap-2">
              {[
                "Premium Cotton",
                "Soft Touch Print",
                "Unisex Fit",
                "Pre‑shrunk",
              ].map((t, i) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-full border border-yellow-200 bg-yellow-50 text-yellow-700 text-xs font-semibold"
                  style={{
                    animation: "fade-in 0.5s ease-out",
                    animationDelay: `${0.07 * i}s`,
                  }}
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Progress line (concept→prototype→launch) */}
            <div className="mt-8">
              <div className="flex items-center gap-3">
                {[1, 2, 3].map((s, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="w-3 h-3 rounded-full bg-yellow-400 shadow-[0_0_0_6px_rgba(255,193,7,0.2)]" />
                    {i < 2 && (
                      <span className="w-14 h-[2px] bg-gradient-to-r from-yellow-300 to-yellow-400" />
                    )}
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-500 mt-2">
                Concept → Prototype → Launch
              </p>
            </div>
          </div>

          {/* Floating badge cards */}
          <div className="absolute -left-6 -bottom-6 hidden sm:block">
            <div className="px-4 py-2 rounded-xl bg-white border border-yellow-200 text-gray-900 font-semibold shadow-sm motion-safe:animate-float">
              Limited Edition
            </div>
          </div>
          <div className="absolute -right-8 -top-8 hidden sm:block">
            <div className="px-4 py-2 rounded-xl bg-yellow-400 text-gray-900 font-extrabold tracking-widest shadow motion-safe:animate-bounce-slow">
              SOON
            </div>
          </div>
        </div>

        {/* Right: Embossed tee frame with parallax tilt */}
        <div
          ref={cardRef}
          onMouseMove={onMouseMove}
          onMouseLeave={onMouseLeave}
          className="relative"
        >
          {/* Embossed frame */}
          <div
            className="relative aspect-[4/5] rounded-[2rem] overflow-hidden bg-white shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_20px_60px_rgba(0,0,0,0.08)] border border-yellow-200"
            style={{
              transform: `perspective(1000px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
              transition: "transform 150ms ease",
            }}
          >
            {/* Glow */}
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background: `radial-gradient(520px circle at ${tilt.glowX}% ${tilt.glowY}%, rgba(255,193,7,0.18), transparent 60%)`,
              }}
            />
            {/* Tee image */}
            <img
              src={src}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-[1.02]"
            />

            {/* Shine sweep */}
            <div className="absolute inset-0 translate-x-[-120%] hover:translate-x-[120%] transition-transform duration-[1400ms] ease-out bg-gradient-to-r from-transparent via-white/14 to-transparent" />
          </div>

          {/* Rotating stamp */}
          <div className="absolute -bottom-10 -left-10 select-none">
            <div className="relative w-40 h-40">
              <div className="absolute inset-0 rounded-full border-4 border-yellow-400/60 animate-spin-slow" />
              <div className="absolute inset-2 rounded-full border-2 border-yellow-300/40" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="px-3 py-1 rounded-full bg-yellow-400 text-gray-900 text-xs font-extrabold tracking-widest">
                  COMING SOON
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom marquee accent */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-yellow-100/60 via-white to-yellow-100/60 border-t border-yellow-200">
        <div className="overflow-hidden">
          <div className="flex gap-6 py-2 whitespace-nowrap motion-safe:animate-marquee-rev">
            {Array.from({ length: 12 }).map((_, i) => (
              <span
                key={i}
                className="text-xs font-semibold tracking-wider text-yellow-700"
              >
                ✦ E‑CELL · DESIGN FOR INNOVATORS ✦ ENTREPRENEURIAL SPIRIT ✦
              </span>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-6px);
          }
        }
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes marquee-rev {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        @keyframes slow-pan {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(-10px, -6px);
          }
        }
        .motion-safe\\:animate-marquee {
          animation: marquee 18s linear infinite;
        }
        .motion-safe\\:animate-marquee-rev {
          animation: marquee-rev 18s linear infinite;
        }
        .motion-safe\\:animate-slow-pan {
          animation: slow-pan 12s ease-in-out infinite alternate;
        }
        .motion-safe\\:animate-float {
          animation: float 5s ease-in-out infinite;
        }
        .motion-safe\\:animate-bounce-slow {
          animation: bounce-slow 3.5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default ComingSoonMerch;
