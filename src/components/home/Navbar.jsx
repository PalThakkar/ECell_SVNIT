"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt4 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { BsLinkedin, BsInstagram } from "react-icons/bs";
import { Sparkles, ArrowUpRight } from "lucide-react";
import Logo from "../Logo";
import clsx from "clsx";

const navLinks = [
  { href: "/team",        label: "Team" },
  { href: "/about",       label: "About Us" },
  { href: "/events",      label: "Events" },
  { href: "/jobs",        label: "Jobs" },
  { href: "/merch",       label: "Merch" },
  { href: "/blog&podcast",label: "Podcast & Blogs" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3 sm:py-6 px-3 sm:px-8 bg-transparent">
        <div className="w-full mx-auto flex items-center justify-between max-w-[1400px]">
          {/* Logo — High-Clarity Frosted Glass View */}
          <div className="bg-white/40 backdrop-blur-xl border border-white/50 rounded-full px-4 sm:px-6 py-2 shadow-[0_8px_32px_rgba(17,15,10,0.1)] flex items-center justify-center -ml-1 sm:-ml-4 shrink-0">
            <Logo href="/" className="h-11 sm:h-16 w-auto transition-transform duration-300 hover:scale-105" aria-label="E-Cell SVNIT Home" />
          </div>

          {/* Desktop Nav Links — Frosted Glassmorphism View */}
          <nav className="hidden lg:flex lg:mx-auto xl:absolute xl:left-1/2 xl:-translate-x-1/2 items-center gap-1 sm:gap-1.5 xl:gap-2 bg-white/40 backdrop-blur-xl rounded-full px-3.5 lg:px-4 xl:px-6 py-2 sm:py-2.5 xl:py-3 shadow-[0_12px_36px_rgba(17,15,10,0.1)] border border-white/50 text-[#111111] overflow-hidden whitespace-nowrap z-50">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={clsx(
                    "relative px-3 lg:px-3 xl:px-4 py-1.5 sm:py-2 text-[14px] sm:text-[15px] xl:text-[16px] font-extrabold tracking-tight transition-all duration-200 rounded-full z-10 whitespace-nowrap shrink-0",
                    isActive ? "text-[#111111]" : "text-[#3D3A35] hover:text-[#111111] hover:bg-white/60"
                  )}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="navbar-active-pill"
                      className="absolute inset-0 bg-[#FBBD58] rounded-full -z-10 shadow-[0_3px_12px_rgba(251,189,88,0.35)]"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA & Social Icons — High-Pop Vibrant Brand View */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <Link
              href="https://www.linkedin.com/company/e-cell-nit-surat/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 sm:p-2.5 rounded-full text-white bg-[#0A66C2] border border-[#0855A3] shadow-[0_4px_16px_rgba(10,102,194,0.40)] hover:scale-110 active:scale-95 transition-all duration-300 shrink-0 flex items-center justify-center"
            >
              <BsLinkedin className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </Link>

            <Link
              href="https://www.instagram.com/ecell.svnit/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="p-2 sm:p-2.5 rounded-full text-white bg-gradient-to-tr from-[#F09433] via-[#DC2743] to-[#BC1888] border border-white/30 shadow-[0_4px_16px_rgba(220,39,67,0.40)] hover:scale-110 active:scale-95 transition-all duration-300 shrink-0 flex items-center justify-center"
            >
              <BsInstagram className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </Link>

            <Link
              href="/contact"
              className="hidden sm:inline-flex group items-center gap-2 px-5 xl:px-6 py-2.5 rounded-full text-sm sm:text-[15px] font-black text-[#111111] bg-white/40 backdrop-blur-xl border border-white/50 shadow-[0_8px_32px_rgba(17,15,10,0.1)] hover:bg-[#FBBD58] hover:border-[#F5AB35] hover:scale-105 active:scale-95 transition-all duration-300 whitespace-nowrap"
            >
              <Sparkles className="w-4 h-4 text-[#D97706] group-hover:text-[#111111] transition-colors shrink-0" />
              <span>Contact Us</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
            </Link>

            {/* Mobile Hamburger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 sm:p-3 rounded-full bg-white/40 supports-[not(backdrop-filter:blur(0px))]:bg-white/50 backdrop-blur-xl border border-white/50 text-[#111111] hover:bg-white/60 transition-colors focus:outline-none shadow-[0_4px_16px_rgba(17,15,10,0.1)]"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen
                ? <IoMdClose className="w-5 h-5 sm:w-6 sm:h-6 text-[#111111]" />
                : <HiMenuAlt4 className="w-5 h-5 sm:w-6 sm:h-6 text-[#111111]" />
              }
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.28 }}
            className="fixed inset-0 z-40 bg-[#FEFEFE]/96 backdrop-blur-2xl pt-24 px-6 pb-8 flex flex-col justify-between lg:hidden border-b border-[#E8E4DC]"
          >
            <div className="space-y-2">
              <p className="text-xs font-black uppercase tracking-widest text-[#FBBD58] mb-4">
                Navigation
              </p>
              {navLinks.map((link, idx) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={clsx(
                        "block px-5 py-3.5 rounded-2xl text-xl font-bold transition-all",
                        isActive
                          ? "bg-[#FBBD58] text-[#111111] font-black"
                          : "text-[#3D3A35] hover:bg-[#FAF9F6] hover:text-[#111111]"
                      )}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
            </div>
            <div className="pt-6 border-t border-[#2D2A24]">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl text-lg font-black text-[#111111] bg-[#FBBD58] shadow-[0_4px_14px_rgba(251,189,88,0.30)]"
              >
                <span>Contact Us</span>
                <ArrowUpRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
