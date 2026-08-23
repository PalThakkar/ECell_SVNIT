"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Target,
  Lightbulb,
  Users,
  Calendar,
  ArrowUpRight,
  Sparkles,
  Rocket,
  Building2,
  Blocks,
} from "lucide-react";
import Navbar from "@/components/home/Navbar";
import InteractiveParticleNetwork from "@/components/home/InteractiveParticleNetwork";
import StatsSection from "@/components/home/StatsSection";
import PartnersMarquee from "@/components/home/PartnersMarquee";
import GroupPhotoCarousel from "@/components/GroupPhotoCarousel";

const whatWeDo = [
  {
    icon: Calendar,
    title: "Events & Workshops",
    description:
      "Organising competitions, quiz events, and summits to foster entrepreneurial thinking and culture amongst students.",
  },
  {
    icon: Lightbulb,
    title: "Skill Development",
    description:
      "Sessions on business modelling, marketing, and finance that mirror real-world startup challenges.",
  },
  {
    icon: Users,
    title: "Community Building",
    description:
      "Connecting students with alumni, industry experts, and founders to build lasting collaborative networks.",
  },
];

const storeItems = [
  {
    icon: Rocket,
    title: "E-Summit & Beyond",
    description:
      "Our flagship celebration of innovation and entrepreneurship — competitions, workshops, and networking that help students turn ideas into ventures.",
    href: "/events/esummit-2026",
  },
  {
    icon: Blocks,
    title: "Lego Start-Up",
    description:
      "Odd-semester bootcamp with workshops, mentor sessions, a Business Fair, and an Investor Pitching finale for standout student ideas.",
    href: "/events/lego-startup-2.0",
  },
  {
    icon: Building2,
    title: "Corporate Catastrophe",
    description:
      "A multi-round puzzle challenge that tests observation, deduction, and problem-solving as teams progress room to room.",
    href: "/events/corporate-catastrophe-1.0",
  },
];

export default function AboutPage() {
  return (
    <div
      className="w-full min-h-screen relative"
      style={{
        backgroundColor: "#FEFEFE",
        color: "#111111",
        fontFamily: "var(--font-inter), system-ui, sans-serif",
      }}
    >
      {/* Fixed Background Image & Dot Grid — same as Home */}
      <div className="fixed inset-0 pointer-events-none -z-20">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.06]"
          style={{ backgroundImage: "url('/e-cell-fam.jpg')" }}
        />
        <div
          className="absolute inset-0 opacity-[0.45]"
          style={{
            backgroundImage:
              "radial-gradient(#94A3B8 1.25px, transparent 1.25px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(254,254,254,0.3) 0%, rgba(250,249,246,0.85) 100%)",
          }}
        />
      </div>

      <Navbar />

      <InteractiveParticleNetwork className="w-full">
        <main className="w-full">
          {/* Hero / Intro */}
          <section
            className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 overflow-hidden"
            style={{ backgroundColor: "rgba(254,254,254,0.50)" }}
          >
            <div
              className="absolute top-20 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] rounded-full pointer-events-none -z-10"
              style={{
                background:
                  "radial-gradient(circle, rgba(251,189,88,0.12) 0%, transparent 70%)",
              }}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="lg:col-span-6 space-y-5 sm:space-y-6"
                >
                  <div
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-[15px] font-extrabold"
                    style={{
                      background: "#FEF3C7",
                      border: "1px solid #F5AB35",
                      color: "#111111",
                    }}
                  >
                    <Sparkles
                      className="w-4 h-4 sm:w-5 sm:h-5"
                      style={{ color: "#D97706" }}
                    />
                    <span>Est. June 2024</span>
                  </div>

                  <h1
                    className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.12]"
                    style={{
                      color: "#111111",
                      fontFamily: "var(--font-jakarta), system-ui, sans-serif",
                    }}
                  >
                    Welcome to{" "}
                    <span
                      className="inline-block px-2 py-0.5 rounded-lg"
                      style={{ background: "#FBBD58", color: "#111111" }}
                    >
                      E-Cell
                    </span>
                  </h1>

                  <p
                    className="text-base sm:text-lg leading-relaxed font-medium"
                    style={{ color: "#3D3A35" }}
                  >
                    NIT-Surat&apos;s Entrepreneurship Cell aims to serve as a hub
                    for{" "}
                    <span
                      className="font-extrabold px-1.5 py-0.5 rounded"
                      style={{
                        color: "#111111",
                        background: "rgba(251,189,88,0.30)",
                      }}
                    >
                      innovation
                    </span>{" "}
                    — organizing events that foster an entrepreneurial mindset,
                    ambition, and real venture-building among students.
                  </p>

                  <p
                    className="text-sm sm:text-base leading-relaxed font-medium"
                    style={{ color: "#7A756C" }}
                  >
                    Guided by Chairperson{" "}
                    <span className="font-semibold" style={{ color: "#111111" }}>
                      Dr. Amit Singh
                    </span>{" "}
                    (Mechanical Engineering) and Co-Chairperson{" "}
                    <span className="font-semibold" style={{ color: "#111111" }}>
                      Dr. Vaishali Dhingra
                    </span>{" "}
                    (Mathematics & Humanities), we help students become job
                    creators — through workshops, competitions, and networking.
                  </p>

                  <div className="flex flex-wrap gap-3 pt-2">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-7 sm:py-3.5 rounded-xl sm:rounded-2xl font-black text-sm sm:text-base transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                      style={{
                        background: "#FBBD58",
                        color: "#111111",
                        border: "1px solid #F5AB35",
                        boxShadow: "0 6px 18px rgba(251,189,88,0.28)",
                      }}
                    >
                      Get Involved
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                    <Link
                      href="/events"
                      className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-7 sm:py-3.5 rounded-xl sm:rounded-2xl font-black text-sm sm:text-base transition-all duration-300 hover:scale-[1.02]"
                      style={{
                        background: "#FEFEFE",
                        color: "#111111",
                        border: "1px solid #D4CFC6",
                      }}
                    >
                      Explore Events
                    </Link>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className="lg:col-span-6"
                >
                  <div
                    className="relative rounded-2xl sm:rounded-3xl overflow-hidden h-[320px] sm:h-[420px] lg:h-[520px]"
                    style={{
                      border: "1px solid #E8E4DC",
                      boxShadow: "0 12px 36px rgba(17,15,10,0.10)",
                    }}
                  >
                    <GroupPhotoCarousel />
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* What We Do */}
          <section
            className="relative py-16 sm:py-24 overflow-hidden"
            style={{ backgroundColor: "rgba(250,249,246,0.50)" }}
          >
            <div
              className="absolute bottom-0 left-0 w-[28rem] h-[28rem] rounded-full pointer-events-none -z-10"
              style={{
                background:
                  "radial-gradient(circle, rgba(251,189,88,0.08) 0%, transparent 70%)",
              }}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="max-w-3xl mb-10 sm:mb-14"
              >
                <div
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-[15px] font-extrabold mb-3 sm:mb-4"
                  style={{
                    background: "#FEF3C7",
                    border: "1px solid #F5AB35",
                    color: "#111111",
                  }}
                >
                  <Target
                    className="w-4 h-4 sm:w-5 sm:h-5"
                    style={{ color: "#D97706" }}
                  />
                  <span>What We Do</span>
                </div>
                <h2
                  className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight"
                  style={{ color: "#111111" }}
                >
                  Building the campus{" "}
                  <span
                    className="inline-block px-2 py-0.5 rounded-lg"
                    style={{ background: "#FBBD58", color: "#111111" }}
                  >
                    startup
                  </span>{" "}
                  ecosystem
                </h2>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
                {whatWeDo.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.08 }}
                      className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl transition-all duration-300 hover:-translate-y-1"
                      style={{
                        background: "#FEFEFE",
                        border: "1px solid #E8E4DC",
                        boxShadow: "0 8px 28px rgba(17,15,10,0.07)",
                      }}
                    >
                      <div
                        className="inline-flex p-2.5 sm:p-3 rounded-xl mb-4"
                        style={{ background: "#FBBD58" }}
                      >
                        <Icon
                          className="w-5 h-5 sm:w-6 sm:h-6"
                          style={{ color: "#111111" }}
                        />
                      </div>
                      <h3
                        className="text-lg sm:text-xl font-black mb-2"
                        style={{ color: "#111111" }}
                      >
                        {item.title}
                      </h3>
                      <p
                        className="text-sm sm:text-base leading-relaxed font-medium"
                        style={{ color: "#3D3A35" }}
                      >
                        {item.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* What's in Store */}
          <section
            className="relative py-16 sm:py-24 overflow-hidden"
            style={{ backgroundColor: "rgba(254,254,254,0.50)" }}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 sm:mb-14"
              >
                <div className="max-w-2xl">
                  <div
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-[15px] font-extrabold mb-3 sm:mb-4"
                    style={{
                      background: "#FEF3C7",
                      border: "1px solid #F5AB35",
                      color: "#111111",
                    }}
                  >
                    <Rocket
                      className="w-4 h-4 sm:w-5 sm:h-5"
                      style={{ color: "#D97706" }}
                    />
                    <span>What&apos;s in Store</span>
                  </div>
                  <h2
                    className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight"
                    style={{ color: "#111111" }}
                  >
                    Flagship experiences that{" "}
                    <span
                      className="inline-block px-2 py-0.5 rounded-lg"
                      style={{ background: "#FBBD58", color: "#111111" }}
                    >
                      shape
                    </span>{" "}
                    founders
                  </h2>
                </div>
                <Link
                  href="/events"
                  className="inline-flex items-center gap-2 self-start sm:self-auto px-5 py-2.5 rounded-xl font-black text-sm transition-all hover:scale-[1.02]"
                  style={{
                    background: "#FEFEFE",
                    color: "#111111",
                    border: "1px solid #D4CFC6",
                  }}
                >
                  View All Events
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
                {storeItems.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.08 }}
                      className="group flex flex-col p-6 sm:p-8 rounded-2xl sm:rounded-3xl transition-all duration-300 hover:-translate-y-1"
                      style={{
                        background: "#FEFEFE",
                        border: "1px solid #E8E4DC",
                        boxShadow: "0 8px 28px rgba(17,15,10,0.07)",
                      }}
                    >
                      <div
                        className="inline-flex p-2.5 rounded-xl mb-4 w-fit"
                        style={{ background: "#FEF3C7", border: "1px solid #F5AB35" }}
                      >
                        <Icon
                          className="w-5 h-5"
                          style={{ color: "#D97706" }}
                        />
                      </div>
                      <h3
                        className="text-lg sm:text-xl font-black mb-2"
                        style={{ color: "#111111" }}
                      >
                        {item.title}
                      </h3>
                      <p
                        className="text-sm sm:text-base leading-relaxed font-medium flex-1 mb-5"
                        style={{ color: "#3D3A35" }}
                      >
                        {item.description}
                      </p>
                      <Link
                        href={item.href}
                        className="inline-flex items-center gap-1.5 text-sm font-extrabold transition-colors group-hover:gap-2.5"
                        style={{ color: "#D97706" }}
                      >
                        Learn more
                        <ArrowUpRight className="w-4 h-4" />
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Vision */}
          <section
            className="relative py-16 sm:py-24 overflow-hidden"
            style={{ backgroundColor: "rgba(250,249,246,0.50)" }}
          >
            <div
              className="absolute top-0 right-0 w-[38rem] h-[38rem] rounded-full pointer-events-none -z-10"
              style={{
                background:
                  "radial-gradient(circle, rgba(251,189,88,0.10) 0%, transparent 70%)",
              }}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
                <motion.div
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="lg:col-span-7 space-y-5"
                >
                  <div
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-[15px] font-extrabold"
                    style={{
                      background: "#FEF3C7",
                      border: "1px solid #F5AB35",
                      color: "#111111",
                    }}
                  >
                    <Target
                      className="w-4 h-4 sm:w-5 sm:h-5"
                      style={{ color: "#D97706" }}
                    />
                    <span>Our Vision</span>
                  </div>
                  <h2
                    className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight"
                    style={{ color: "#111111" }}
                  >
                    Fostering entrepreneurship, innovation, creativity &amp;{" "}
                    <span
                      className="inline-block px-2 py-0.5 rounded-lg"
                      style={{ background: "#FBBD58", color: "#111111" }}
                    >
                      student leadership
                    </span>
                  </h2>
                  <p
                    className="text-base sm:text-lg leading-relaxed font-medium"
                    style={{ color: "#3D3A35" }}
                  >
                    <span
                      className="font-extrabold px-1.5 py-0.5 rounded"
                      style={{
                        color: "#111111",
                        background: "rgba(251,189,88,0.30)",
                      }}
                    >
                      E-Cell SVNIT
                    </span>{" "}
                    envisions a campus where entrepreneurship thrives as the
                    driving force of innovation and impact — a movement that
                    turns ambitious ideas into reality.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="lg:col-span-5 p-6 sm:p-8 rounded-2xl sm:rounded-3xl flex flex-col justify-between gap-4"
                  style={{
                    background: "#FEFEFE",
                    border: "1px solid #E8E4DC",
                    boxShadow: "0 8px 28px rgba(17,15,10,0.07)",
                  }}
                >
                  <p
                    className="text-sm sm:text-base leading-relaxed font-medium"
                    style={{ color: "#3D3A35" }}
                  >
                    We provide resources, mentorship, and networking so students
                    can scale ventures — bridging academic theory and practical
                    business skills through workshops, competitions, and
                    corporate partnerships.
                  </p>
                  <p
                    className="text-sm sm:text-base leading-relaxed font-medium"
                    style={{ color: "#7A756C" }}
                  >
                    From early ideation to pitch readiness, E-Cell supports the
                    full entrepreneurial lifecycle at SVNIT.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 self-start px-5 py-2.5 rounded-xl font-black text-sm transition-all hover:scale-[1.02]"
                    style={{
                      background: "#FBBD58",
                      color: "#111111",
                      border: "1px solid #F5AB35",
                      boxShadow: "0 6px 18px rgba(251,189,88,0.28)",
                    }}
                  >
                    Get Involved
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              </div>
            </div>
          </section>

          <StatsSection />
          <PartnersMarquee />
        </main>
      </InteractiveParticleNetwork>
    </div>
  );
}
