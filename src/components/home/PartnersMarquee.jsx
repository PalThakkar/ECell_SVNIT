"use client";

import React from "react";
import { motion } from "framer-motion";
import { Building2, Sparkles } from "lucide-react";

const partners = [
  { name: "ASHINE SVNIT",            role: "TBI Incubator Partner",       category: "Incubation" },
  { name: "Startup Gujarat",          role: "Government Partner",           category: "Grants"     },
  { name: "iHub Gujarat",             role: "Student Innovation Partner",   category: "Ecosystem"  },
  { name: "TiE Surat",               role: "Angel Mentor Network",         category: "Mentorship" },
  { name: "SVNIT Alumni Association", role: "Alumni & Angel Network",       category: "Funding"    },
  { name: "SSIP Gujarat",             role: "Patent & Prototype Fund",      category: "Funding"    },
];

const PartnersMarquee = () => {
  return (
    <section className="relative py-16 sm:py-20 overflow-hidden border-b" style={{ backgroundColor: "#FAF9F6", borderColor: "#E8E4DC" }}>

      {/* Section Tag & Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10">
        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[15px] font-extrabold mb-3" style={{ background: "#FEF3C7", border: "1px solid #F5AB35", color: "#111111" }}>
          <Sparkles className="w-4 h-4" style={{ color: "#D97706" }} />
          <span>Ecosystem Network</span>
        </motion.div>
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black" style={{ color: "#111111" }}>
          Backed by Leading Incubators & Innovation Networks
        </h3>
      </div>

      {/* Marquee */}
      <div className="flex overflow-hidden select-none gap-6 relative">
        {/* Edge fades — warm-tinted, not cold white */}
        <div className="absolute left-0 top-0 bottom-0 w-28 pointer-events-none z-20" style={{ background: "linear-gradient(to right, #FAF9F6 0%, transparent 100%)" }} />
        <div className="absolute right-0 top-0 bottom-0 w-28 pointer-events-none z-20" style={{ background: "linear-gradient(to left, #FAF9F6 0%, transparent 100%)" }} />

        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 28, ease: "linear" }}
          className="flex shrink-0 gap-6 items-center"
        >
          {[...partners, ...partners, ...partners].map((partner, idx) => (
            <div key={idx}
              className="flex items-center gap-3.5 px-6 py-4 rounded-2xl shrink-0 cursor-default transition-all duration-300 group"
              style={{ background: "#FEFEFE", border: "1px solid #E8E4DC", boxShadow: "0 2px 8px rgba(17,15,10,0.05)" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "#FBBD58"; e.currentTarget.style.boxShadow = "0 6px 20px rgba(251,189,88,0.16)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "#E8E4DC"; e.currentTarget.style.boxShadow = "0 2px 8px rgba(17,15,10,0.05)"; }}
            >
              <div className="p-2.5 rounded-xl group-hover:scale-105 transition-transform" style={{ background: "#FBBD58", border: "1px solid #F5AB35" }}>
                <Building2 className="w-6 h-6" style={{ color: "#111111" }} />
              </div>
              <div className="text-left">
                <h4 className="text-base sm:text-lg font-extrabold" style={{ color: "#111111" }}>{partner.name}</h4>
                <p className="text-xs sm:text-sm font-semibold" style={{ color: "#7A756C" }}>{partner.role}</p>
              </div>
              <span className="ml-2 px-3 py-1 rounded-full text-xs font-black" style={{ background: "#FEF3C7", color: "#111111", border: "1px solid #F5AB35" }}>
                {partner.category}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersMarquee;
