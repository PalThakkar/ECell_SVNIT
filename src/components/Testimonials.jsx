"use client";

import React, { useState, useEffect } from "react";
import { Quote, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const testimonialsData = [
  { id: 1, quote: "The team at E-Cell SVNIT went above and beyond, providing unparalleled support, mentorship, and resources to help transform student ideas into reality.", author: "SVNIT Incubated Founder",     role: "Alumni Entrepreneur"       },
  { id: 2, quote: "E-Summit provided our team with direct access to angel investors, industry mentors, and national pitch exposure. It completely accelerated our venture roadmap.", author: "Ignite Hackathon Winner",      role: "DeepTech Startup Lead"     },
  { id: 3, quote: "E-Cell SVNIT seamlessly bridges academia and real-world startup incubation, fostering a culture of innovation and leadership across Gujarat.",               author: "ASHINE Innovation Partner", role: "Incubation & Seed Mentor"  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrentIndex(prev => (prev + 1) % testimonialsData.length), 6000);
    return () => clearInterval(timer);
  }, []);

  const current = testimonialsData[currentIndex];

  return (
    <section className="relative py-12 sm:py-28 overflow-hidden" style={{ background: "linear-gradient(to bottom, rgba(250,249,246,0.50) 0%, rgba(254,254,254,0.50) 50%, rgba(255,251,240,0.50) 100%)" }}>
      
      {/* Warm yellow glow center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] rounded-full pointer-events-none -z-10" style={{ background: "radial-gradient(circle, rgba(251,189,88,0.10) 0%, transparent 70%)" }} />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-[15px] font-extrabold mb-3 sm:mb-4" style={{ background: "#FEF3C7", border: "1px solid #F5AB35", color: "#111111" }}>
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: "#D97706" }} />
            <span>Community Voice</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-6xl font-black tracking-tight leading-[1.15] sm:leading-tight" style={{ color: "#111111" }}>
            What Founders & Mentors{" "}
            <span className="inline-block px-2 py-0.5 rounded-lg" style={{ background: "#FBBD58", color: "#111111" }}>Say</span>
          </h2>
        </div>

        {/* Quote Card */}
        <div className="relative p-5 sm:p-14 pt-12 sm:pt-20 rounded-2xl sm:rounded-3xl min-h-[260px] sm:min-h-[300px] flex flex-col justify-between" style={{ background: "#FEFEFE", border: "1px solid #E8E4DC", boxShadow: "0 24px 60px rgba(17,15,10,0.10)" }}>
          
          {/* Quote Badge */}
          <div className="absolute top-6 left-8 sm:left-10 p-3.5 rounded-2xl" style={{ background: "#FBBD58", border: "1px solid #F5AB35", boxShadow: "0 6px 18px rgba(251,189,88,0.32)" }}>
            <Quote className="w-7 h-7 fill-current" style={{ color: "#111111" }} />
          </div>

          <AnimatePresence mode="wait">
            <motion.figure key={current.id} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.4 }} className="pt-6">
              <blockquote className="font-display text-2xl sm:text-4xl font-medium tracking-tight leading-relaxed" style={{ color: "#111111" }}>
                &ldquo;{current.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-8 pt-6 flex items-center justify-between flex-wrap gap-4" style={{ borderTop: "1px solid #E8E4DC" }}>
                <div>
                  <h4 className="text-lg sm:text-xl font-black" style={{ color: "#111111" }}>{current.author}</h4>
                  <p className="text-[15px] font-semibold" style={{ color: "#7A756C" }}>{current.role}</p>
                </div>
                <span className="text-sm font-extrabold uppercase tracking-widest" style={{ color: "#B5B0A8" }}>
                  {currentIndex + 1} / {testimonialsData.length}
                </span>
              </figcaption>
            </motion.figure>
          </AnimatePresence>

          {/* Carousel Controls */}
          <div className="flex items-center justify-between mt-8 pt-4" style={{ borderTop: "1px solid #FAF9F6" }}>
            <div className="flex gap-2.5">
              {testimonialsData.map((_, idx) => (
                <button key={idx} onClick={() => setCurrentIndex(idx)}
                  className="h-2.5 rounded-full transition-all duration-300"
                  style={{ width: currentIndex === idx ? "2.25rem" : "0.625rem", background: currentIndex === idx ? "#FBBD58" : "#E8E4DC" }}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
            <div className="flex items-center gap-3">
              {[{ fn: () => setCurrentIndex(prev => (prev - 1 + testimonialsData.length) % testimonialsData.length), Icon: ChevronLeft, label: "Previous" },
                { fn: () => setCurrentIndex(prev => (prev + 1) % testimonialsData.length), Icon: ChevronRight, label: "Next" }
              ].map(({ fn, Icon, label }) => (
                <button key={label} onClick={fn} aria-label={label}
                  className="p-3.5 rounded-full transition-colors duration-300"
                  style={{ background: "#FAF9F6", border: "1px solid #E8E4DC" }}
                  onMouseEnter={e => { e.currentTarget.style.background = "#FBBD58"; e.currentTarget.style.borderColor = "#F5AB35"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "#FAF9F6"; e.currentTarget.style.borderColor = "#E8E4DC"; }}
                >
                  <Icon className="w-6 h-6" style={{ color: "#111111" }} />
                </button>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;
