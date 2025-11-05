"use client";
import React, { useRef, useState } from "react";

const MerchTShirt = ({
  title = "E‑Cell Classic Tee",
  price = "₹499",
  color = "Matte Black with Yellow print",
  fabric = "100% Premium Cotton · 180 GSM · Unisex Fit",
  desc = "Breathable, pre‑shrunk cotton with soft‑touch E‑Cell chest mark and back motto. Designed for everyday campus wear.",
  images = [
    "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1600&q=80", // Front
    "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1600&auto=format&fit=crop", // Flat lay
    "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=1600&auto=format&fit=crop", // Hanger
    "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=1600&q=80", // Detail
  ],
}) => {
  const [active, setActive] = useState(0);
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
    <section className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-white px-6 py-16 relative overflow-hidden">
      {/* Subtle art */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-yellow-300/10 blur-3xl" />
        <div className="absolute top-1/2 -right-16 w-72 h-72 rounded-full bg-yellow-400/10 blur-2xl" />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900">
            E‑Cell{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent">
              Merch
            </span>
          </h2>
          <div className="hidden sm:flex items-center gap-2">
            <span className="px-3 py-1 text-xs font-semibold rounded-full bg-yellow-50 border border-yellow-200 text-yellow-700">
              Showcase
            </span>
            <span className="px-3 py-1 text-xs font-semibold rounded-full bg-yellow-50 border border-yellow-200 text-yellow-700">
              No Purchase
            </span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Image stage with parallax */}
          <div
            ref={cardRef}
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
            className="relative group"
          >
            <div
              className="relative aspect-[4/5] rounded-[2rem] overflow-hidden border-2 border-yellow-200 shadow-2xl bg-white"
              style={{
                transform: `perspective(1000px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
                transition: "transform 150ms ease",
              }}
            >
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background: `radial-gradient(520px circle at ${tilt.glowX}% ${tilt.glowY}%, rgba(255,193,7,0.18), transparent 60%)`,
                }}
              />
              <img
                key={active}
                src={images[active]}
                alt={`${title} view ${active + 1}`}
                className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-[1.02]"
              />
              {/* Shine sweep */}
              <div className="absolute inset-0 translate-x-[-120%] group-hover:translate-x-[120%] transition-transform duration-[1400ms] ease-out bg-gradient-to-r from-transparent via-white/14 to-transparent" />
            </div>

            {/* 4 thumbnails */}
            <div className="mt-4 grid grid-cols-4 gap-3">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`relative aspect-square rounded-xl overflow-hidden border-2 transition-all ${
                    active === i
                      ? "border-yellow-400 shadow-lg"
                      : "border-gray-200 hover:border-yellow-200"
                  }`}
                  aria-label={`Switch to view ${i + 1}`}
                >
                  <img
                    src={img}
                    alt={`thumb ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Details (display-only) */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-50 border border-yellow-200 text-yellow-700 text-xs font-semibold">
              Official E‑Cell SVNIT
            </div>
            <h3 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight">
              {title}
            </h3>
            <p className="text-lg text-gray-700">{desc}</p>

            <div className="grid sm:grid-cols-2 gap-3">
              <div className="p-4 rounded-xl border border-yellow-200 bg-yellow-50">
                <p className="text-xs font-semibold text-yellow-700">Color</p>
                <p className="text-gray-900 font-bold">{color}</p>
              </div>
              <div className="p-4 rounded-xl border border-yellow-200 bg-yellow-50">
                <p className="text-xs font-semibold text-yellow-700">Fabric</p>
                <p className="text-gray-900 font-bold">{fabric}</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-3xl font-extrabold text-gray-900">
                {price}
              </div>
              <div className="px-3 py-1 rounded-full bg-yellow-50 border border-yellow-200 text-yellow-700 text-xs font-semibold">
                Showcase Only
              </div>
            </div>

            {/* Sizes (visual chips only) */}
            <div>
              <p className="text-sm font-semibold text-gray-800 mb-2">
                Available Sizes
              </p>
              <div className="flex flex-wrap gap-2">
                {["S", "M", "L", "XL", "XXL"].map((s, i) => (
                  <span
                    key={s}
                    className="px-4 py-2 rounded-lg border-2 border-gray-200 text-gray-900 font-semibold bg-white"
                    style={{
                      animation: "fade-in 0.4s ease-out",
                      animationDelay: `${i * 0.05}s`,
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Perks */}
            <div className="grid sm:grid-cols-3 gap-3 pt-2">
              {[
                { t: "Premium Cotton", i: "🧵" },
                { t: "Soft Touch Print", i: "✨" },
                { t: "Pre‑shrunk", i: "🧼" },
              ].map((x, i) => (
                <div
                  key={x.t}
                  className="flex items-center gap-2 p-3 rounded-xl border border-yellow-200 bg-yellow-50 text-gray-800"
                  style={{
                    animation: "fade-in 0.5s ease-out",
                    animationDelay: `${0.1 * i}s`,
                  }}
                >
                  <span className="text-lg">{x.i}</span>
                  <span className="text-sm font-semibold">{x.t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
};

export default MerchTShirt;
