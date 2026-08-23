"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ShoppingBag, Sparkles, ArrowUpRight } from "lucide-react";
import HomeShell from "@/components/home/HomeShell";

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
    <HomeShell>
      <section
        className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 overflow-hidden"
        style={{ backgroundColor: "rgba(254,254,254,0.50)" }}
      >
        <div
          className="absolute top-16 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] rounded-full pointer-events-none -z-10"
          style={{
            background:
              "radial-gradient(circle, rgba(251,189,88,0.12) 0%, transparent 70%)",
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="space-y-5"
            >
              <div
                className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-[15px] font-extrabold"
                style={{
                  background: "#FEF3C7",
                  border: "1px solid #F5AB35",
                  color: "#111111",
                }}
              >
                <ShoppingBag
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  style={{ color: "#D97706" }}
                />
                <span>Official Merch · Coming Soon</span>
              </div>

              <h1
                className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.12]"
                style={{
                  color: "#111111",
                  fontFamily: "var(--font-jakarta), system-ui, sans-serif",
                }}
              >
                E‑Cell{" "}
                <span
                  className="inline-block px-2 py-0.5 rounded-lg"
                  style={{ background: "#FBBD58", color: "#111111" }}
                >
                  Tee Drop
                </span>
              </h1>

              <p
                className="text-base sm:text-xl leading-relaxed font-medium"
                style={{ color: "#7A756C" }}
              >
                {subtitle}
              </p>

              <div className="flex flex-wrap gap-2 pt-1">
                {[
                  "Premium Cotton",
                  "Soft Touch Print",
                  "Unisex Fit",
                  "Pre‑shrunk",
                ].map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1.5 rounded-full text-xs font-extrabold"
                    style={{
                      background: "#FEF3C7",
                      border: "1px solid #F5AB35",
                      color: "#111111",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div
                className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl"
                style={{
                  background: "#FAF9F6",
                  border: "1px solid #E8E4DC",
                }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-4 h-4" style={{ color: "#D97706" }} />
                  <p
                    className="text-sm font-extrabold"
                    style={{ color: "#111111" }}
                  >
                    Concept → Prototype → Launch
                  </p>
                </div>
                <div className="flex items-center gap-3 mt-3">
                  {[1, 2, 3].map((s, i) => (
                    <div key={s} className="flex items-center gap-3">
                      <span
                        className="w-3 h-3 rounded-full"
                        style={{
                          background: "#FBBD58",
                          boxShadow: "0 0 0 6px rgba(251,189,88,0.2)",
                        }}
                      />
                      {i < 2 && (
                        <span
                          className="w-12 sm:w-14 h-[2px]"
                          style={{
                            background:
                              "linear-gradient(to right, #FBBD58, #F5AB35)",
                          }}
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-7 sm:py-3.5 rounded-xl sm:rounded-2xl font-black text-sm sm:text-base transition-all hover:scale-[1.02]"
                style={{
                  background: "#FBBD58",
                  color: "#111111",
                  border: "1px solid #F5AB35",
                  boxShadow: "0 6px 18px rgba(251,189,88,0.28)",
                }}
              >
                Notify me
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              ref={cardRef}
              onMouseMove={onMouseMove}
              onMouseLeave={onMouseLeave}
              className="relative"
            >
              <div
                className="relative aspect-[4/5] rounded-2xl sm:rounded-3xl overflow-hidden"
                style={{
                  background: "#FEFEFE",
                  border: "1px solid #E8E4DC",
                  boxShadow: "0 12px 36px rgba(17,15,10,0.10)",
                  transform: `perspective(1000px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
                  transition: "transform 150ms ease",
                }}
              >
                <div
                  className="pointer-events-none absolute inset-0 z-10"
                  style={{
                    background: `radial-gradient(520px circle at ${tilt.glowX}% ${tilt.glowY}%, rgba(251,189,88,0.18), transparent 60%)`,
                  }}
                />
                <Image
                  src={src}
                  alt={title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out hover:scale-[1.02]"
                />
              </div>

              <div
                className="absolute -bottom-3 -left-2 sm:-bottom-4 sm:-left-4 px-4 py-2 rounded-xl font-extrabold text-xs tracking-widest"
                style={{
                  background: "#FBBD58",
                  color: "#111111",
                  border: "1px solid #F5AB35",
                  boxShadow: "0 6px 18px rgba(251,189,88,0.28)",
                }}
              >
                COMING SOON
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </HomeShell>
  );
};

export default ComingSoonMerch;
