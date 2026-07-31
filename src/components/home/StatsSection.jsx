"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Users, Trophy, Rocket, Briefcase, TrendingUp } from "lucide-react";
import InteractiveParticleNetwork from "./InteractiveParticleNetwork";

const stats = [
  { id: 1, value: 2000, suffix: "+", label: "Students Reached",    description: "Engaged across SVNIT engineering departments and regional institutes.", icon: Users    },
  { id: 2, value: 5,    suffix: "+", label: "Flagship Initiatives", description: "Including E-Summit, Ignite Hackathon, and Lego Startup bootcamp.",      icon: Trophy   },
  { id: 3, value: 10,   suffix: "+", label: "Incubated Startups",   description: "Nurtured through ASHINE incubation & seed grant support.",               icon: Rocket   },
  { id: 4, value: 15,   suffix: "+", label: "Industry Mentors",     description: "Successful founders & leaders actively guiding student ventures.",        icon: Briefcase },
];

const AnimatedCounter = ({ target, suffix }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20px" });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const steps = 40;
    const stepTime = 1500 / steps;
    const increment = target / steps;
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, stepTime);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <div ref={ref} className="font-black text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl tracking-tight leading-none overflow-hidden my-2" style={{ color: "#111111" }}>
      <span>{count.toLocaleString()}</span>
      <span style={{ color: "#FBBD58" }}>{suffix}</span>
    </div>
  );
};

const StatsSection = () => {
  return (
    <InteractiveParticleNetwork
      className="py-20 sm:py-28 border-b"
      style={{ backgroundColor: "#FAF9F6", borderColor: "#E8E4DC" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-[15px] font-extrabold mb-4"
            style={{ background: "#FEF3C7", border: "1px solid #F5AB35", color: "#111111" }}
          >
            <TrendingUp className="w-5 h-5" style={{ color: "#D97706" }} />
            <span>Proven Impact</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight"
            style={{ color: "#111111" }}
          >
            Empowering the Next Generation of{" "}
            <span className="inline-block px-2 py-0.5 rounded-lg" style={{ background: "#FBBD58", color: "#111111" }}>
              Entrepreneurs
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl mt-3 leading-relaxed font-medium"
            style={{ color: "#7A756C" }}
          >
            Quantifiable growth, nationwide reach, and tangible impact created by E-Cell SVNIT.
          </motion.p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, idx) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className="rounded-3xl p-7 sm:p-8 transition-all duration-300 group cursor-default"
                style={{
                  background: "#FEFEFE",
                  border: "1px solid #E8E4DC",
                  boxShadow: "0 8px 28px rgba(17,15,10,0.07)",
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "#FBBD58"; e.currentTarget.style.boxShadow = "0 16px 40px rgba(251,189,88,0.18), 0 8px 16px rgba(17,15,10,0.08)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "#E8E4DC"; e.currentTarget.style.boxShadow = "0 8px 28px rgba(17,15,10,0.07)"; }}
              >
                <div className="mb-5">
                  <div
                    className="p-3.5 rounded-2xl w-fit group-hover:scale-105 transition-transform"
                    style={{ background: "#FBBD58", border: "1px solid #F5AB35" }}
                  >
                    <IconComponent className="w-7 h-7" style={{ color: "#111111" }} />
                  </div>
                </div>

                <AnimatedCounter target={stat.value} suffix={stat.suffix} />

                <h3 className="text-xl sm:text-2xl font-extrabold mb-2 mt-2" style={{ color: "#111111" }}>
                  {stat.label}
                </h3>
                <p className="text-base sm:text-lg leading-relaxed font-medium" style={{ color: "#7A756C" }}>
                  {stat.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </InteractiveParticleNetwork>
  );
};

export default StatsSection;
