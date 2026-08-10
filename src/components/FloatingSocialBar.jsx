"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  BsLinkedin,
  BsInstagram,
} from "react-icons/bs";

const socialLinks = [
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/company/e-cell-nit-surat/",
    icon: BsLinkedin,
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com/ecell.svnit/",
    icon: BsInstagram,
  },
];

const FloatingSocialBar = () => {
  const [hideNearFooter, setHideNearFooter] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const threshold = document.documentElement.scrollHeight - 450;
      setHideNearFooter(scrollPosition > threshold);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (hideNearFooter) return null;

  return (
    <motion.aside
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: 0.2 }}
      className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-center py-5 px-3 bg-[#1A1813]/95 backdrop-blur-2xl rounded-l-2xl border-l border-t border-b border-[#2D2A24] shadow-[0_12px_36px_rgba(17,15,10,0.25)] gap-y-4"
      aria-label="Social Media Links"
    >
      {socialLinks.map((item) => {
        const Icon = item.icon;
        return (
          <Link
            key={item.title}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.title}
            className="group relative flex items-center justify-center p-2 sm:p-2.5 rounded-xl text-[#FBBD58] hover:text-white hover:bg-[#FBBD58]/20 transition-all duration-300 transform hover:scale-110"
          >
            <Icon className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300" />
            
            {/* Tooltip on left hover */}
            <span className="absolute right-full mr-3 px-3 py-1.5 rounded-lg text-xs font-black text-[#111111] bg-[#FBBD58] shadow-[0_4px_14px_rgba(251,189,88,0.40)] opacity-0 pointer-events-none group-hover:opacity-100 transition-all duration-200 whitespace-nowrap z-50">
              {item.title}
            </span>
          </Link>
        );
      })}
    </motion.aside>
  );
};

export default FloatingSocialBar;
