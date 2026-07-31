"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, MapPin, ArrowRight, Sparkles, Trophy, Rocket, Cpu } from "lucide-react";

const featuredEvents = [
  { title: "E-Summit 2026",    category: "Flagship Summit",      date: "Annual Flagship Event",  location: "SVNIT Campus, Surat",    description: "The premier entrepreneurial festival featuring keynote talks, pitch competitions, hackathons, and investor networking.", href: "/events/esummit-2026",    icon: Trophy,  image: "/ecell11.jpeg" },
  { title: "Ignite 2025",      category: "Idea Hackathon",        date: "Annual Hackathon",        location: "Online & On-Campus",     description: "A 36-hour intensive hackathon where student teams turn raw concepts into functional MVP prototypes with live mentor guidance.", href: "/events/ignite-2025",      icon: Rocket,  image: "/event-photos/ignite_pic1.jpg" },
  { title: "LEGO Startup 2.0", category: "Interactive Bootcamp",  date: "Flagship Workshop",       location: "ASHINE-SVNIT Hub",       description: "Hands-on gamified simulation teaching venture fundamentals, unit economics, product strategy, and pitch dynamics.", href: "/events/lego-startup-2.0", icon: Cpu,     image: "/group_photo1.jpg" },
];

const FeaturedEvents = () => {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden" style={{ backgroundColor: "#FAF9F6" }}>

      {/* Warm amber glow bottom left */}
      <div className="absolute bottom-0 left-0 w-[32rem] h-[32rem] rounded-full pointer-events-none -z-10" style={{ background: "radial-gradient(circle, rgba(251,189,88,0.09) 0%, transparent 70%)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="max-w-2xl">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-[15px] font-extrabold mb-4" style={{ background: "#FEF3C7", border: "1px solid #F5AB35", color: "#111111" }}>
              <Sparkles className="w-5 h-5" style={{ color: "#D97706" }} />
              <span>Flagship Initiatives</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight" style={{ color: "#111111" }}>
              Transformative{" "}
              <span className="inline-block px-2 py-0.5 rounded-lg" style={{ background: "#FBBD58", color: "#111111" }}>Events & Hackathons</span>
            </h2>
            <p className="text-lg sm:text-xl mt-3 leading-relaxed font-medium" style={{ color: "#7A756C" }}>
              National summits, pitch competitions, and intensive bootcamps organized by E-Cell SVNIT.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 14 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <Link href="/events"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl font-extrabold text-base sm:text-lg transition-all duration-300 group hover:scale-[1.02] active:scale-[0.98]"
              style={{ background: "#FEFEFE", border: "1px solid #D4CFC6", color: "#111111", boxShadow: "0 2px 8px rgba(17,15,10,0.06)" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "#FBBD58"; e.currentTarget.style.background = "#FBBD58"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "#D4CFC6"; e.currentTarget.style.background = "#FEFEFE"; }}
            >
              <span>View All Events</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {featuredEvents.map((event, idx) => {
            const IconComp = event.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className="group rounded-3xl overflow-hidden flex flex-col justify-between transition-all duration-300"
                style={{ background: "#FEFEFE", border: "1px solid #E8E4DC", boxShadow: "0 8px 28px rgba(17,15,10,0.07)" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "#FBBD58"; e.currentTarget.style.boxShadow = "0 16px 48px rgba(251,189,88,0.18), 0 8px 16px rgba(17,15,10,0.08)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "#E8E4DC"; e.currentTarget.style.boxShadow = "0 8px 28px rgba(17,15,10,0.07)"; }}
              >
                {/* Thumbnail */}
                <div className="relative h-56 w-full overflow-hidden" style={{ background: "#E8E4DC" }}>
                  <Image src={event.image} alt={event.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(17,15,10,0.55) 0%, transparent 60%)" }} />
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs sm:text-sm font-black backdrop-blur-md" style={{ background: "#FBBD58", color: "#111111", border: "1px solid #F5AB35" }}>
                      <IconComp className="w-4 h-4" style={{ color: "#111111" }} />
                      {event.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-7 sm:p-8">
                  <h3 className="text-2xl sm:text-3xl font-black mb-3" style={{ color: "#111111" }}>{event.title}</h3>
                  <div className="flex flex-wrap gap-4 text-sm sm:text-[15px] font-bold mb-4" style={{ color: "#7A756C" }}>
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" style={{ color: "#D97706" }} />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4" style={{ color: "#D97706" }} />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <p className="text-base sm:text-lg leading-relaxed mb-5 font-medium" style={{ color: "#7A756C" }}>{event.description}</p>
                  <Link href={event.href}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl font-black text-base transition-all duration-300"
                    style={{ background: "#FAF9F6", border: "1px solid #E8E4DC", color: "#3D3A35" }}
                    onMouseEnter={e => { e.currentTarget.style.background = "#FBBD58"; e.currentTarget.style.borderColor = "#F5AB35"; e.currentTarget.style.color = "#111111"; }}
                    onMouseLeave={e => { e.currentTarget.style.background = "#FAF9F6"; e.currentTarget.style.borderColor = "#E8E4DC"; e.currentTarget.style.color = "#3D3A35"; }}
                  >
                    <span>Explore Event</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FeaturedEvents;
