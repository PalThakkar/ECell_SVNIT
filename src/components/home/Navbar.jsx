"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt4 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
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
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={clsx(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-[#FEFEFE]/92 backdrop-blur-2xl border-b border-[#E8E4DC] shadow-[0_2px_16px_rgba(17,15,10,0.07)] py-3"
            : "bg-transparent py-5 sm:py-6"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Logo href="/" className="h-9 sm:h-11 w-auto relative z-10" fillOnHover aria-label="E-Cell SVNIT Home" />

          {/* Desktop Nav Links — warm dark pill */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#1A1813] border border-[#2D2A24] rounded-full px-4 py-2 shadow-md text-white">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={clsx(
                    "relative px-4 py-1.5 text-[15px] font-bold transition-colors duration-200 rounded-full",
                    isActive ? "text-[#111111] font-extrabold" : "text-[#D4CFC6] hover:text-[#FBBD58]"
                  )}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="navbar-active-pill"
                      className="absolute inset-0 bg-[#FBBD58] rounded-full -z-10"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA Button — yellow primary */}
          <div className="hidden sm:flex items-center gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-[15px] font-black text-[#111111] bg-[#FBBD58] hover:bg-[#F5AB35] border border-[#F5AB35] shadow-[0_4px_14px_rgba(251,189,88,0.30)] hover:shadow-[0_6px_20px_rgba(251,189,88,0.40)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
            >
              <Sparkles className="w-4 h-4" />
              <span>Contact Us</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-3 rounded-full bg-[#1A1813] border border-[#2D2A24] text-white hover:bg-[#2D2A24] transition-colors focus:outline-none"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen
              ? <IoMdClose className="w-6 h-6 text-[#FBBD58]" />
              : <HiMenuAlt4 className="w-6 h-6 text-[#FBBD58]" />
            }
          </button>
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
            className="fixed inset-0 z-40 bg-[#111111]/96 backdrop-blur-2xl pt-24 px-6 pb-8 flex flex-col justify-between lg:hidden border-b border-[#2D2A24]"
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
                          : "text-[#D4CFC6] hover:bg-[#1A1813] hover:text-[#FBBD58]"
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
