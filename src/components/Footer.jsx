"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Sparkles, Send, ArrowUp } from "lucide-react";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import Logo from "@/components/Logo";
import FooterNavigation from "@/components/FooterNavigation";
const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative pt-16 pb-12 overflow-hidden" style={{ backgroundColor: "#FEFEFE", borderTop: "1px solid #E8E4DC" }}>
      
      {/* Signature Yellow Top Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-1.5" style={{ background: "linear-gradient(to right, #FBBD58, #F5AB35, #FBBD58)" }} />

      <Container>
        <FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-12" style={{ borderBottom: "1px solid #E8E4DC" }}>

            {/* Brand Column */}
            <div className="lg:col-span-5 space-y-5">
              <Logo href="/" className="block w-32 sm:w-40 h-auto origin-left" fillOnHover />
              <p className="text-lg leading-relaxed max-w-md font-medium" style={{ color: "#7A756C" }}>
                The Entrepreneurship Cell of SVNIT Surat empowers students to transform innovative ideas into viable, high-impact ventures through seed grants, incubation, and mentorship.
              </p>
              {/* Campus Hub Badge */}
              <div className="inline-flex items-center gap-3 p-3.5 rounded-2xl text-sm font-bold" style={{ background: "#FAF9F6", border: "1px solid #E8E4DC", color: "#3D3A35" }}>
                <div className="w-3 h-3 rounded-full animate-pulse" style={{ background: "#FBBD58", border: "1px solid #F5AB35" }} />
                <span>SVNIT Campus, Ichchhanath, Surat, Gujarat 395007</span>
              </div>
            </div>

            {/* Navigation Column */}
            <div className="lg:col-span-4">
              <h4 className="text-sm font-black uppercase tracking-widest mb-6" style={{ color: "#111111" }}>Navigation & Links</h4>
              <FooterNavigation />
            </div>

            {/* Newsletter Column */}
            <div className="lg:col-span-3">
              <div className="p-6 sm:p-7 rounded-3xl relative overflow-hidden" style={{ background: "#FAF9F6", border: "1px solid #E8E4DC" }}>
                <h4 className="text-xl font-black mb-2 flex items-center gap-2" style={{ color: "#111111" }}>
                  <Sparkles className="w-5 h-5" style={{ color: "#D97706" }} />
                  Stay Connected
                </h4>
                <p className="text-sm mb-5 leading-relaxed font-medium" style={{ color: "#7A756C" }}>
                  Subscribe for news on flagship summits, startup grants, and hackathon announcements.
                </p>
                <form onSubmit={e => e.preventDefault()} className="relative flex items-center p-1.5 rounded-2xl bg-white border border-[#D4CFC6] focus-within:border-[#FBBD58] focus-within:ring-2 focus-within:ring-[#FBBD58]/50 transition-all shadow-sm">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-3.5 py-2 text-sm font-medium bg-transparent border-none focus:outline-none text-[#111111] placeholder:text-[#9A9488]"
                    required
                  />
                  <button
                    type="submit"
                    className="shrink-0 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl font-black text-xs uppercase tracking-wider transition-all hover:scale-[1.02] active:scale-[0.98]"
                    style={{ background: "#FBBD58", color: "#111111", border: "1px solid #F5AB35", boxShadow: "0 2px 8px rgba(251,189,88,0.26)" }}
                  >
                    <span>Subscribe</span>
                    <Send className="w-3.5 h-3.5" style={{ color: "#111111" }} />
                  </button>
                </form>
              </div>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[15px] font-semibold" style={{ color: "#7A756C" }}>
            <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
              <p>© {new Date().getFullYear()} E-Cell SVNIT Surat. All rights reserved.</p>
              <span className="hidden sm:inline" style={{ color: "#D4CFC6" }}>•</span>
              <p className="text-xs font-extrabold px-2.5 py-1 rounded-full" style={{ background: "#FEF3C7", color: "#D97706", border: "1px solid #F5AB35" }}>
                Official Handle: @ecell.svnit
              </p>
            </div>
            <div className="flex items-center gap-4 flex-wrap justify-center">
              <Link href="/dev-team"
                className="inline-flex items-center gap-1.5 font-black rounded px-3 py-1.5 transition-colors text-sm"
                style={{ color: "#111111", background: "rgba(251,189,88,0.28)", border: "1px solid rgba(245,171,53,0.40)" }}>
                <span>Technical Team</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </FadeIn>
      </Container>
    </footer>
  );
}
export default Footer;