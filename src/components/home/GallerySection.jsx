"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, X, Maximize2 } from "lucide-react";

const galleryImages = [
  { id: 1, title: "Ignite Hackathon Pitch Sprint",   category: "Hackathons", src: "/event-photos/ignite_pic1.jpg",                caption: "Teams pitching functional prototypes to active investors at SVNIT." },
  { id: 2, title: "Web3 & Blockchain Workshop",       category: "Workshops",  src: "/event-photos/bitcoin-workshop-pic-1.jpeg",   caption: "Students diving deep into smart contract architecture and DeFi." },
  { id: 3, title: "E-Cell Team & Leadership",         category: "E-Summit",   src: "/e-cell-fam.jpg",                             caption: "The passionate core team powering entrepreneurial initiatives at SVNIT Surat." },
  { id: 4, title: "Corporate Catastrophe Simulation", category: "Workshops",  src: "/event-photos/corporate_catastrophe_pic1.jpg",caption: "Students tackling crisis management and strategic decision making." },
  { id: 5, title: "E-Summit Flagship Showcase",       category: "E-Summit",   src: "/ecell11.jpeg",                               caption: "Keynote talks and venture exposition attracting founders nationwide." },
  { id: 6, title: "Business Wall Ideation",           category: "Hackathons", src: "/event-photos/business-wall-pic1.jpeg",       caption: "Interactive wall mapping startup ideas and co-founder matchmaking." },
];

const categories = ["All", "E-Summit", "Hackathons", "Workshops"];

const GallerySection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeImage, setActiveImage] = useState(null);

  const filteredImages = selectedCategory === "All" ? galleryImages : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <section className="relative py-20 sm:py-28 overflow-hidden" style={{ backgroundColor: "rgba(254,254,254,0.50)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="max-w-2xl">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-[15px] font-extrabold mb-4" style={{ background: "#FEF3C7", border: "1px solid #F5AB35", color: "#111111" }}>
              <Camera className="w-5 h-5" style={{ color: "#D97706" }} />
              <span>Campus Moments</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight" style={{ color: "#111111" }}>
              Life Inside the{" "}
              <span className="inline-block px-2 py-0.5 rounded-lg" style={{ background: "#FBBD58", color: "#111111" }}>Ecosystem</span>
            </h2>
            <p className="text-lg sm:text-xl mt-3 leading-relaxed font-medium" style={{ color: "#7A756C" }}>
              Glimpses of flagship summits, pitch marathons, and hands-on bootcamps at SVNIT Surat.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-2 flex-wrap p-2 rounded-2xl" style={{ background: "#FAF9F6", border: "1px solid #E8E4DC" }}>
            {categories.map(cat => (
              <button key={cat} onClick={() => setSelectedCategory(cat)}
                className="px-5 py-2.5 rounded-xl text-sm sm:[15px] font-black transition-all duration-300"
                style={selectedCategory === cat
                  ? { background: "#FBBD58", color: "#111111", border: "1px solid #F5AB35" }
                  : { color: "#7A756C", background: "transparent" }}
                onMouseEnter={e => { if (selectedCategory !== cat) { e.currentTarget.style.color = "#111111"; e.currentTarget.style.background = "#E8E4DC"; } }}
                onMouseLeave={e => { if (selectedCategory !== cat) { e.currentTarget.style.color = "#7A756C"; e.currentTarget.style.background = "transparent"; } }}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Gallery Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence>
            {filteredImages.map(img => (
              <motion.div key={img.id} layout initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.3 }}
                whileHover={{ y: -6 }} onClick={() => setActiveImage(img)}
                className="group relative h-80 rounded-3xl overflow-hidden cursor-pointer transition-all duration-300"
                style={{ border: "1px solid #E8E4DC", boxShadow: "0 8px 28px rgba(17,15,10,0.07)" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "#FBBD58"; e.currentTarget.style.boxShadow = "0 16px 44px rgba(251,189,88,0.18), 0 8px 16px rgba(17,15,10,0.08)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "#E8E4DC"; e.currentTarget.style.boxShadow = "0 8px 28px rgba(17,15,10,0.07)"; }}
              >
                <Image src={img.src} alt={img.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(17,15,10,0.85) 0%, rgba(17,15,10,0.28) 50%, transparent 100%)" }} />
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3.5 py-1 rounded-full text-xs sm:text-sm font-black" style={{ background: "#FBBD58", color: "#111111", border: "1px solid #F5AB35" }}>{img.category}</span>
                </div>
                <div className="absolute top-4 right-4 z-10 p-2.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: "rgba(254,254,254,0.92)", backdropFilter: "blur(12px)" }}>
                  <Maximize2 className="w-5 h-5" style={{ color: "#111111" }} />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10 text-white">
                  <h3 className="text-2xl font-black mb-1" style={{ transition: "color 0.3s" }}
                    onMouseEnter={e => e.currentTarget.style.color = "#FBBD58"}
                    onMouseLeave={e => e.currentTarget.style.color = "#FEFEFE"}
                  >{img.title}</h3>
                  <p className="text-sm sm:text-[15px] line-clamp-2 leading-relaxed" style={{ color: "#B5B0A8" }}>{img.caption}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {activeImage && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
            style={{ background: "rgba(17,15,10,0.85)", backdropFilter: "blur(16px)" }}
            onClick={() => setActiveImage(null)}
          >
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
              onClick={e => e.stopPropagation()}
              className="relative max-w-4xl w-full rounded-3xl overflow-hidden"
              style={{ background: "#FEFEFE", border: "1px solid #FBBD58", boxShadow: "0 32px 80px rgba(17,15,10,0.30)" }}
            >
              <button onClick={() => setActiveImage(null)} className="absolute top-4 right-4 z-20 p-2.5 rounded-full transition-colors" style={{ background: "#FEFEFE", border: "1px solid #E8E4DC" }}>
                <X className="w-6 h-6" style={{ color: "#111111" }} />
              </button>
              <div className="relative h-[50vh] sm:h-[65vh] w-full">
                <Image src={activeImage.src} alt={activeImage.title} fill className="object-cover" />
              </div>
              <div className="p-6 sm:p-8" style={{ borderTop: "1px solid #E8E4DC" }}>
                <span className="text-xs font-black uppercase tracking-wider px-2.5 py-1 rounded-md inline-block mb-1" style={{ background: "#FBBD58", color: "#111111" }}>{activeImage.category}</span>
                <h3 className="text-2xl sm:text-3xl font-black mt-1" style={{ color: "#111111" }}>{activeImage.title}</h3>
                <p className="text-base sm:text-lg mt-1 leading-relaxed font-medium" style={{ color: "#7A756C" }}>{activeImage.caption}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
