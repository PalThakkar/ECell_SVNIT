"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Lightbulb, Rocket, Award,
  ArrowRight, Users, Sparkles
} from "lucide-react";
import { motion } from "framer-motion";
import clsx from "clsx";
import InteractiveParticleNetwork from "./home/InteractiveParticleNetwork";

/* ── Simple fade-up utility ────────────────────────────────── */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

/* ── Floating badge card ───────────────────────────────────── */
const FloatBadge = ({ icon: Icon, title, desc, pos, delay }) => (
  <motion.div
    {...fadeUp(delay)}
    className={clsx("absolute hidden xl:block z-20", pos)}
  >
    <motion.div
      animate={{ y: [0, -7, 0] }}
      transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
    >
      <div
        className="flex items-center gap-3 px-4 py-3 rounded-2xl group cursor-default transition-all duration-300 hover:-translate-y-1"
        style={{
          background: "rgba(254,254,254,0.92)",
          backdropFilter: "blur(18px)",
          border: "1px solid #E8E4DC",
          boxShadow: "0 6px 24px rgba(17,15,10,0.09)",
          fontFamily: "var(--font-body)",
        }}
        onMouseEnter={e => {
          e.currentTarget.style.borderColor = "#FBBD58";
          e.currentTarget.style.boxShadow = "0 10px 32px rgba(251,189,88,0.20)";
        }}
        onMouseLeave={e => {
          e.currentTarget.style.borderColor = "#E8E4DC";
          e.currentTarget.style.boxShadow = "0 6px 24px rgba(17,15,10,0.09)";
        }}
      >
        <div
          className="p-2.5 rounded-xl shrink-0 group-hover:scale-110 transition-transform duration-300"
          style={{ background: "#FBBD58" }}
        >
          <Icon className="w-4 h-4" style={{ color: "#111111" }} />
        </div>
        <div>
          <p
            className="text-sm font-bold leading-tight"
            style={{ fontFamily: "var(--font-display)", color: "#111111" }}
          >
            {title}
          </p>
          <p className="text-xs mt-0.5" style={{ color: "#7A756C" }}>{desc}</p>
        </div>
      </div>
    </motion.div>
  </motion.div>
);

const PremiumHeroSection = () => {

  return (
  <InteractiveParticleNetwork
    className="relative min-h-[94vh] flex flex-col justify-between pt-32 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden"
    style={{ backgroundColor: "#FEFEFE" }}
  >
    {/* ── Subtle campus backdrop ── */}
    <div className="absolute inset-0 pointer-events-none -z-10">
      {/* Warm ambient glows */}
      <div
        className="absolute top-0 left-1/3 w-[30rem] h-[30rem] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(251,189,88,0.12) 0%, transparent 70%)" }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-[36rem] h-[36rem] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(251,189,88,0.08) 0%, transparent 70%)" }}
      />
    </div>

    {/* ── Floating side badges ── */}
    <FloatBadge icon={Lightbulb} title="Innovation Hub"  desc="Ideate & Incubate" pos="top-[28%] left-[3.5rem]"  delay={0.7} />
    <FloatBadge icon={Users}     title="Active Network"  desc="Alumni & Mentors"  pos="top-[58%] left-[3.5rem]"  delay={0.9} />
    <FloatBadge icon={Rocket}    title="Startup Culture" desc="Build & Launch"    pos="top-[28%] right-[5rem]" delay={0.8} />
    <FloatBadge icon={Award}     title="National Reach"  desc="Flagship E-Summit" pos="top-[58%] right-[5rem]" delay={1.0} />

    {/* ── Main center block ── */}
    <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center max-w-5xl mx-auto w-full gap-7">

      {/* Eyebrow pill */}
      <motion.div {...fadeUp(0.1)}>
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full"
          style={{
            background: "#1A1813",
            border: "1px solid #2D2A24",
            fontFamily: "var(--font-body)",
          }}
        >
          <span
            className="w-2 h-2 rounded-full flex-shrink-0"
            style={{ background: "#FBBD58", boxShadow: "0 0 0 3px rgba(251,189,88,0.20)" }}
          />
          <span
            className="text-xs font-semibold uppercase tracking-widest"
            style={{ color: "#B5B0A8", letterSpacing: "0.13em" }}
          >
            Entrepreneurship Cell · SVNIT Surat
          </span>
        </div>
      </motion.div>

      {/* ── Headline — Plus Jakarta Sans 800, proportionate scale ── */}
      <motion.h1
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="text-[2.8rem] sm:text-[4.2rem] md:text-[5.2rem] lg:text-[5.8rem] font-extrabold leading-[1.08] tracking-[-0.025em] px-2"
        style={{ fontFamily: "var(--font-display)", color: "#111111" }}
      >
        Ignite{" "}
        <span
          className="inline-block px-3 py-1 rounded-2xl"
          style={{ background: "#FBBD58", color: "#111111" }}
        >
          Innovation.
        </span>
        <br className="hidden sm:block" />
        Inspire Entrepreneurship.
      </motion.h1>

      {/* Sub-headline */}
      <motion.p
        {...fadeUp(0.38)}
        className="text-base sm:text-lg lg:text-xl max-w-2xl leading-relaxed font-medium"
        style={{ fontFamily: "var(--font-body)", color: "#3D3A35", letterSpacing: "0.005em" }}
      >
        The heartbeat of the entrepreneurial spirit on campus. We empower students to transform their visionary ideas into successful ventures through networking, mentorship, and resources.
      </motion.p>

      {/* CTAs */}
      <motion.div
        {...fadeUp(0.52)}
        className="flex flex-col sm:flex-row items-center gap-3 w-full justify-center px-4"
      >
        <Link href="/about" className="btn-yellow group text-[17px]">
          <span>Explore E-Cell</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
        <Link href="/events" className="btn-dark text-[17px]">
          <Sparkles className="w-4 h-4" />
          <span>View Events</span>
        </Link>
      </motion.div>

    </div>

  </InteractiveParticleNetwork>
  );
};

export default PremiumHeroSection;
