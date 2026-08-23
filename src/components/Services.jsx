"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Rocket, Sprout, Globe, Lightbulb, Users, ArrowUpRight, Sparkles, CheckCircle2, Target } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const visionPoints = [
  { icon: Rocket,    title: "Lead the Way",                 description: "Position SVNIT as a premier hub for entrepreneurial excellence and student innovation.", expandedDescription: "We establish SVNIT as a recognized center for venture creation through cutting-edge bootcamps, hackathons, and collaborative projects.", tag: "Excellence" },
  { icon: Sprout,    title: "Grow a Startup Ecosystem",     description: "Cultivate a self-sustaining startup culture that incubates student ventures.",           expandedDescription: "Creating an ecosystem where ideas flourish. We connect students with seed funding, peer learning, and ASHINE-SVNIT co-working access.", tag: "Incubation" },
  { icon: Globe,     title: "Forge Strategic Partnerships", description: "Build meaningful collaborations with incubators, VCs, and academic networks.",           expandedDescription: "We partner with leading incubators, angel networks, alumni founders, and corporate sponsors for direct mentorship and pitch access.", tag: "Networking" },
  { icon: Lightbulb, title: "Solve High-Impact Problems",   description: "Champion ventures addressing critical real-world challenges in tech and sustainability.", expandedDescription: "We encourage ventures tackling urgent issues in clean tech, deep tech, healthcare, financial inclusion, and artificial intelligence.", tag: "Impact" },
  { icon: Users,     title: "Empower Future Leaders",       description: "Develop visionary founders and changemakers through structured mentorship.",             expandedDescription: "Empowering students with financial modeling, pitch decks, negotiation, team building, and growth strategies via alumni founders.", tag: "Leadership" },
];

const whyJoinReasons = [
  "Foster and strengthen the startup culture within SVNIT campus",
  "Organize & manage flagship events like E-Summit with high impact",
  "Gain hands-on experience with real startup projects & pitch sessions",
  "Participate in national-level competitions & networking meets",
  "Connect with like-minded innovators, co-founders & industry leaders",
];

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState(0);

  return (
    <section className="relative py-20 sm:py-28 overflow-hidden" style={{ backgroundColor: "rgba(254,254,254,0.50)" }}>
      {/* Warm yellow ambient radial */}
      <div className="absolute top-0 right-0 w-[38rem] h-[38rem] rounded-full pointer-events-none -z-10" style={{ background: "radial-gradient(circle, rgba(251,189,88,0.10) 0%, transparent 70%)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="max-w-4xl mb-10 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-[15px] font-extrabold mb-3 sm:mb-4" style={{ background: "#FEF3C7", border: "1px solid #F5AB35", color: "#111111" }}>
            <Target className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: "#D97706" }} />
            <span>Our Vision & Mission</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-6xl font-black tracking-tight leading-[1.15] sm:leading-[1.12] mb-3 sm:mb-5" style={{ color: "#111111" }}>
            Fostering Innovation, Entrepreneurship, & Leadership.
          </h2>
          
          {/* Mobile concise summary */}
          <p className="text-sm leading-relaxed font-medium block sm:hidden" style={{ color: "#3D3A35" }}>
            <span className="font-extrabold px-1.5 py-0.5 rounded" style={{ color: "#111111", background: "rgba(251,189,88,0.30)" }}>E-Cell SVNIT</span>{" "}
            empowers student innovation into viable ventures through mentorship, seed grants, and incubation access.
          </p>

          {/* Desktop full summary */}
          <p className="text-lg sm:text-xl leading-relaxed font-medium hidden sm:block" style={{ color: "#3D3A35" }}>
            <span className="font-extrabold px-1.5 py-0.5 rounded" style={{ color: "#111111", background: "rgba(251,189,88,0.30)" }}>E-Cell SVNIT</span>{" "}
            envisions a thriving campus ecosystem where student innovation drives real-world value — through the infrastructure, mentorship, and community that transforms ambitious ideas into viable companies.
          </p>
        </motion.div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-start">
          
          {/* Left Column */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="lg:col-span-6 space-y-4 sm:space-y-6">
            
            {/* Team Photo */}
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden group" style={{ border: "1px solid #E8E4DC", boxShadow: "0 12px 36px rgba(17,15,10,0.10)" }}>
              <Image src="/e-cell-fam.jpg" alt="E-Cell SVNIT Team" width={800} height={600} className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(17,15,10,0.82) 0%, rgba(17,15,10,0.18) 55%, transparent 100%)" }} />
              <div className="absolute bottom-3 sm:bottom-5 left-4 sm:left-6 right-4 sm:right-6 text-white">
                <span className="inline-block px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-black mb-1 sm:mb-2" style={{ background: "#FBBD58", color: "#111111" }}>E-Cell Community</span>
                <h4 className="text-lg sm:text-3xl font-extrabold">Driven by Passion & Synergy</h4>
              </div>
            </div>

            {/* Why Join — warm light card */}
            <div className="p-5 sm:p-9 rounded-2xl sm:rounded-3xl" style={{ background: "#FAF9F6", border: "1px solid #E8E4DC", boxShadow: "0 8px 28px rgba(17,15,10,0.07)" }}>
              <h4 className="text-xl sm:text-2xl font-black mb-3 sm:mb-5 flex items-center gap-2.5 sm:gap-3" style={{ color: "#111111" }}>
                <span className="p-2 sm:p-2.5 rounded-xl" style={{ background: "#FBBD58" }}>
                  <Sparkles className="w-4 h-4 sm:w-6 sm:h-6" style={{ color: "#111111" }} />
                </span>
                Why Join E-Cell SVNIT?
              </h4>
              <ul className="space-y-2.5 sm:space-y-3.5">
                {whyJoinReasons.map((reason, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm sm:text-lg font-medium" style={{ color: "#3D3A35" }}>
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 mt-0.5 sm:mt-1" style={{ color: "#D97706" }} />
                    <span>{reason}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Card — warm white */}
            <div className="p-5 sm:p-9 rounded-2xl sm:rounded-3xl" style={{ background: "#FEFEFE", border: "1px solid #E8E4DC", boxShadow: "0 8px 28px rgba(17,15,10,0.07)" }}>
              <h4 className="text-xl sm:text-3xl font-black mb-1.5 sm:mb-2" style={{ color: "#111111" }}>Ready to Launch Your Venture?</h4>
              <p className="text-xs sm:text-lg mb-4 sm:mb-5 font-medium" style={{ color: "#7A756C" }}>
                Get paired with incubator mentors, seed grant guidance, and technical co-founders.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-7 sm:py-3.5 rounded-xl sm:rounded-2xl font-black text-sm sm:text-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                style={{ background: "#FBBD58", color: "#111111", border: "1px solid #F5AB35", boxShadow: "0 6px 18px rgba(251,189,88,0.28)" }}>
                <span>Get Involved</span>
                <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
            </div>
          </motion.div>

          {/* Right Column — Strategic Pillars */}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="lg:col-span-6 space-y-3 sm:space-y-4">
            <div className="mb-4 sm:mb-6">
              <h3 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight" style={{ color: "#111111" }}>
                Our Strategic{" "}
                <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-lg" style={{ background: "#FBBD58", color: "#111111" }}>Pillars</span>
              </h3>
              <p className="text-xs sm:text-xl mt-1.5 sm:mt-3 font-medium" style={{ color: "#7A756C" }}>
                Explore our foundational initiatives.
              </p>
            </div>

            <div className="space-y-2.5 sm:space-y-3">
              {visionPoints.map((point, idx) => {
                const IconComponent = point.icon;
                const isSelected = hoveredIndex === idx;
                return (
                  <motion.div
                    key={idx}
                    onClick={() => setHoveredIndex(idx)}
                    onMouseEnter={() => setHoveredIndex(idx)}
                    whileHover={{ y: -4 }}
                    className="p-4 sm:p-7 rounded-2xl sm:rounded-3xl cursor-pointer transition-all duration-300 hover:shadow-xl"
                    style={{
                      background: isSelected ? "#FEFEFE" : "#FAF9F6",
                      border: isSelected ? "1px solid #FBBD58" : "1px solid #E8E4DC",
                      boxShadow: isSelected ? "0 12px 36px rgba(251,189,88,0.18), 0 4px 12px rgba(17,15,10,0.06)" : "0 4px 12px rgba(17,15,10,0.03)",
                    }}
                  >
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="p-2.5 sm:p-3 rounded-xl sm:rounded-2xl shrink-0 transition-colors duration-300"
                        style={{ background: isSelected ? "#FBBD58" : "#FEF3C7", border: isSelected ? "1px solid #F5AB35" : "1px solid #E8E4DC" }}>
                        <IconComponent className="w-5 h-5 sm:w-7 sm:h-7" style={{ color: "#111111" }} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between gap-2 mb-1 sm:mb-1.5">
                          <h4 className="text-base sm:text-2xl font-extrabold" style={{ color: "#111111" }}>{point.title}</h4>
                          <span className="text-[10px] sm:text-xs font-black px-2 py-0.5 sm:px-3 sm:py-1 rounded-full" style={isSelected ? { background: "#FBBD58", color: "#111111", border: "1px solid #F5AB35" } : { background: "#E8E4DC", color: "#7A756C" }}>
                            {point.tag}
                          </span>
                        </div>
                        <p className="text-xs sm:text-lg leading-relaxed font-medium" style={{ color: "#7A756C" }}>{point.description}</p>
                        <AnimatePresence>
                          {isSelected && (
                            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3 }}
                              className="hidden sm:block mt-3 pt-3 text-base leading-relaxed font-medium" style={{ borderTop: "1px solid #E8E4DC", color: "#3D3A35" }}>
                              {point.expandedDescription}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
export default Services;