"use client";

import React from "react";
import Container from "./Container";
import FadeIn from "./FadeIn";
import FooterNavigation from "./FooterNavigation";
import Logo from "./Logo";
import Link from "next/link";
import { ArrowUpRight, Sparkles, Send, ArrowUp } from "lucide-react";

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
                <form onSubmit={e => e.preventDefault()} className="space-y-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 rounded-xl text-sm font-medium focus:outline-none transition-colors"
                    style={{ background: "#FEFEFE", border: "1px solid #D4CFC6", color: "#111111" }}
                    onFocus={e => e.currentTarget.style.borderColor = "#FBBD58"}
                    onBlur={e => e.currentTarget.style.borderColor = "#D4CFC6"}
                    required
                  />
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-black text-sm transition-all hover:scale-[1.02] active:scale-[0.98]"
                    style={{ background: "#FBBD58", color: "#111111", border: "1px solid #F5AB35", boxShadow: "0 4px 12px rgba(251,189,88,0.26)" }}
                    onMouseEnter={e => e.currentTarget.style.background = "#F5AB35"}
                    onMouseLeave={e => e.currentTarget.style.background = "#FBBD58"}
                  >
                    <span>Subscribe</span>
                    <Send className="w-4 h-4" style={{ color: "#111111" }} />
                  </button>
                </form>
              </div>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[15px] font-semibold" style={{ color: "#7A756C" }}>
            <p>© {new Date().getFullYear()} E-Cell SVNIT. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link href="/dev-team"
                className="inline-flex items-center gap-1.5 font-black rounded px-2.5 py-1 transition-colors"
                style={{ color: "#111111", background: "rgba(251,189,88,0.28)" }}>
                <span>Technical Team 2026</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <button onClick={scrollToTop}
                className="p-3 rounded-full transition-colors"
                style={{ background: "#FAF9F6", border: "1px solid #E8E4DC" }}
                aria-label="Scroll back to top"
                onMouseEnter={e => { e.currentTarget.style.background = "#FBBD58"; e.currentTarget.style.borderColor = "#F5AB35"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "#FAF9F6"; e.currentTarget.style.borderColor = "#E8E4DC"; }}
              >
                <ArrowUp className="w-5 h-5" style={{ color: "#111111" }} />
              </button>
            </div>
          </div>
        </FadeIn>
      </Container>
    </footer>
  );
};

export default Footer;
