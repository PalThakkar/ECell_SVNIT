"use client";
import React, { useState, useId, useRef, useEffect } from "react";
import Image from "next/image";
import { Lightbulb, Laptop, Rocket, Target, Award } from "lucide-react";
import { motion, MotionConfig, useReducedMotion } from "framer-motion";
import Link from "next/link";
import Logo from "./Logo";
import Button from "./Button";
import { HiMenuAlt4 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import Container from "./Container";
import Offices from "./Offices";
import SocialMedia from "./SocialMedia";
import clsx from "clsx";

const TransparentContainer = ({ className, children }) => {
  return (
    <div className={clsx("w-full px-4 sm:px-6 lg:px-10", className)}>
      {children}
    </div>
  );
};

const TransparentHeader = ({
  panelId,
  invert = false,
  icon: Icon,
  expanded,
  onToggle,
  toggleRef,
}) => {
  return (
    <TransparentContainer>
      <div className="flex items-center justify-between py-2 min-h-[5rem]">
        {!expanded && (
          <Link href={"/"} aria-label="Home" className="flex items-center shrink-0">
            <Logo fillOnHover />
          </Link>
        )}
        {expanded && <div className="flex-1" />}
        {/* Right corner group */}
        <div className="flex items-center gap-x-2 sm:gap-x-4 shrink-0">
          <Button 
            href={"/contact"} 
            className="px-3 py-1.5 sm:px-6 sm:py-2.5 text-xs sm:text-base font-semibold whitespace-nowrap"
          >
            Contact us
          </Button>
          <button
            ref={toggleRef}
            type="button"
            onClick={onToggle}
            aria-expanded={expanded.toString()}
            aria-controls={panelId}
            className={clsx(
              "group -m-1 rounded-full p-2 transition shrink-0",
              invert ? "hover:bg-white/10" : "hover:bg-white/10"
            )}
            aria-label="Toggle navigation"
          >
            <Icon
              className={clsx(
                "h-6 w-6 sm:h-8 sm:w-8",
                invert
                  ? "fill-white group-hover:fill-neutral-200"
                  : "fill-white group-hover:fill-neutral-200"
              )}
            />
          </button>
        </div>
      </div>
    </TransparentContainer>
  );
};

const NavigationItem = ({ href, children, align = "center" }) => {
  return (
    <Link
      href={href}
      className="group relative bg-neutral-950 border-b border-neutral-800 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0 block"
    >
      <div className="relative overflow-hidden px-8 py-10 sm:px-12 sm:py-14 md:px-16 md:py-16 lg:px-20 lg:py-20 flex items-center justify-center min-h-[120px] sm:min-h-[180px]">
        <div
          className={`relative z-10 text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight w-full ${align === "left"
              ? "text-left"
              : align === "right"
                ? "text-right"
                : "text-center"
            }`}
        >
          {children}
        </div>
        <div className="absolute inset-0 bg-neutral-800 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100" />
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-700 via-neutral-800 to-neutral-900 opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-60" />
        <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
    </Link>
  );
};

const Navigation = () => {
  return (
    <nav className="font-display text-white bg-neutral-950">
      <div className="sm:hidden">
        <NavigationItem href="/team" align="center">
          Team
        </NavigationItem>
        <NavigationItem href="/about" align="center">
          About Us
        </NavigationItem>
        <NavigationItem href="/events" align="center">
          Events
        </NavigationItem>
        <NavigationItem href="/jobs" align="center">
          Jobs
        </NavigationItem>
        <NavigationItem href="/merch" align="center">
          Merch
        </NavigationItem>
        <NavigationItem href="/blog&podcast" align="center">
          Podcast and Blogs
        </NavigationItem>
      </div>
      <div className="hidden sm:grid sm:grid-cols-3">
        <NavigationItem href="/team" align="center">
          Team
        </NavigationItem>
        <NavigationItem href="/about" align="center">
          About Us
        </NavigationItem>
        <NavigationItem href="/events" align="center">
          Events
        </NavigationItem>
        <NavigationItem href="/jobs" align="center">
          Jobs
        </NavigationItem>
        <NavigationItem href="/merch" align="center">
          Merch
        </NavigationItem>
        <NavigationItem href="/blog&podcast" align="center">
          Podcast & Blogs
        </NavigationItem>
      </div>
    </nav>
  );
};

const PremiumHeroSection = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const panelId = useId();
  const [expanded, setExpanded] = useState(false);
  const openRef = useRef();
  const closeRef = useRef();
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    function onClick(event) {
      if (event.target.closest("a")?.href === window.location.href) {
        setExpanded(false);
      }
    }
    window.addEventListener("click", onClick);
    return () => {
      window.removeEventListener("click", onClick);
    };
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: ((e.clientX - rect.left) / rect.width - 0.5) * 2,
      y: ((e.clientY - rect.top) / rect.height - 0.5) * 2,
    });
  };

  const patchBlocks = [
    { text: "Have an idea?", icon: Lightbulb, delay: "0s" },
    { text: "Create real-world Solutions", icon: Laptop, delay: "0.15s" },
    { text: "SVNIT's Startup Ecosystem!", icon: Award, delay: "0.05s" },
    { text: "Solopreneurship vs Entrepreneurship", icon: Target, delay: "0.1s" },
    { text: "Build. Learn. Launch.", icon: Rocket, delay: "0.15s" },
  ];

  return (
    <MotionConfig transition={shouldReduceMotion ? { duration: 0 } : undefined}>
      {/* Transparent Header */}
      <header className="absolute top-0 left-0 right-0 z-50">
        <div className="absolute left-0 right-0 top-3 z-40" aria-hidden={expanded ? "true" : undefined}>
          <TransparentHeader
            panelId={panelId}
            icon={HiMenuAlt4}
            toggleRef={openRef}
            expanded={expanded}
            onToggle={() => {
              setExpanded((expanded) => !expanded);
              window.setTimeout(() => closeRef.current?.focus({ preventScroll: true }));
            }}
          />
        </div>

        <motion.div
          layout
          id={panelId}
          style={{ height: expanded ? "auto" : "0" }}
          className="relative z-50 overflow-hidden bg-neutral-950"
          aria-hidden={expanded ? undefined : "true"}
        >
          <motion.div layout className="bg-neutral-800">
            <div className="bg-neutral-950 pb-16 pt-14">
              <TransparentHeader
                invert
                panelId={panelId}
                icon={IoMdClose}
                toggleRef={closeRef}
                expanded={expanded}
                onToggle={() => {
                  setExpanded((expanded) => !expanded);
                  window.setTimeout(() => closeRef.current?.focus({ preventScroll: true }));
                }}
              />
            </div>
            <Navigation />
            <div className="relative bg-neutral-950 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-neutral-800">
              <Container>
                <div className="grid grid-cols-1 gap-y-12 pb-20 pt-12 sm:grid-cols-2 sm:gap-y-16 sm:pb-24 sm:pt-20">
                  <div>
                    <h2 className="font-display text-2xl font-semibold text-white mb-2">
                      Our Address
                    </h2>
                    <Offices invert className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2" />
                  </div>
                  <div className="sm:border-l sm:border-transparent sm:pl-16">
                    <h2 className="font-display text-xl font-semibold text-white mb-2">
                      Follow us
                    </h2>
                    <SocialMedia className="mt-8" invert />
                  </div>
                </div>
              </Container>
            </div>
          </motion.div>
        </motion.div>
      </header>

      <section
        className="relative min-h-screen overflow-hidden flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
        onMouseMove={handleMouseMove}
      >
        {/* Blurred event background */}
        <div className="absolute inset-0 -z-20">
          <Image
            src="/ecell11.jpeg"
            alt="E-Cell Event"
            fill
            className="object-cover blur-[2px] brightness-[0.8] saturate-80 "
            priority
          />
        </div>

        {/* Gradient overlays */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-gray-900/70 via-gray-800/60 to-gray-900/70" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-950/40 via-transparent to-transparent" />

        <div className="max-w-7xl mx-auto relative z-10 w-full h-screen pt-12 sm:pt-0">
          {/* Block 1: Top Left */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.1 }}
            className="absolute top-[16%] left-[5%] sm:top-[15%] sm:left-[6%] group"
          >
            <div className="relative w-24 h-24 sm:w-36 sm:h-36 lg:w-44 lg:h-44 rounded-full bg-white/10 backdrop-blur-xl border-2 border-yellow-400/30 hover:border-yellow-400/50 transition-all duration-300 hover:bg-white/15 cursor-pointer flex flex-col items-center justify-center gap-1 sm:gap-3 group-hover:scale-105 animate-fast-float">
              {React.createElement(patchBlocks[0].icon, { className: "w-6 h-6 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-yellow-400 group-hover:text-yellow-300 transition-all duration-300", strokeWidth: 2 })}
              <span className="text-[10px] sm:text-xs lg:text-base font-bold text-white text-center px-2 sm:px-6 group-hover:text-yellow-300 transition-colors duration-300 leading-tight">
                {patchBlocks[0].text}
              </span>
            </div>
          </motion.div>

          {/* Block 2: Middle Left (Hidden on mobile/tablet) */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
            className="absolute top-[52%] left-[6%] group hidden md:block"
          >
            <div className="relative w-36 h-36 sm:w-40 sm:h-40 lg:w-44 lg:h-44 rounded-full bg-white/10 backdrop-blur-xl border-2 border-yellow-400/30 hover:border-yellow-400/50 transition-all duration-300 hover:bg-white/15 cursor-pointer flex flex-col items-center justify-center gap-3 group-hover:scale-105 animate-fast-float" style={{ animationDelay: "0.5s" }}>
              {React.createElement(patchBlocks[1].icon, { className: "w-10 h-10 sm:w-12 sm:h-12 text-yellow-400 group-hover:text-yellow-300 transition-all duration-300", strokeWidth: 2 })}
              <span className="text-xs sm:text-sm lg:text-base font-bold text-white text-center px-6 group-hover:text-yellow-300 transition-colors duration-300">
                {patchBlocks[1].text}
              </span>
            </div>
          </motion.div>

          {/* Block 3: Center (always horizontally centered) */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.05 }}
            className="absolute top-[40%] left-1/2 -translate-x-1/2 sm:top-[27%] group"
          >
            <div className="relative w-28 h-28 sm:w-36 sm:h-36 lg:w-44 lg:h-44 rounded-full bg-white/10 backdrop-blur-xl border-2 border-yellow-400/30 hover:border-yellow-400/50 transition-all duration-300 hover:bg-white/15 cursor-pointer flex flex-col items-center justify-center gap-1 sm:gap-3 group-hover:scale-105 animate-fast-float" style={{ animationDelay: "0.2s" }}>
              {React.createElement(patchBlocks[2].icon, { className: "w-7 h-7 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-yellow-400 group-hover:text-yellow-300 transition-all duration-300", strokeWidth: 2 })}
              <span className="text-[10px] sm:text-xs lg:text-base font-bold text-white text-center px-3 sm:px-6 group-hover:text-yellow-300 transition-colors duration-300 leading-tight">
                {patchBlocks[2].text}
              </span>
            </div>
          </motion.div>

          {/* Block 4: Top Right (mirrors Block 1, hidden on mobile/tablet) */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.25 }}
            className="absolute top-[15%] right-[6%] group hidden md:block"
          >
            <div className="relative w-36 h-36 sm:w-40 sm:h-40 lg:w-44 lg:h-44 rounded-full bg-white/10 backdrop-blur-xl border-2 border-yellow-400/30 hover:border-yellow-400/50 transition-all duration-300 hover:bg-white/15 cursor-pointer flex flex-col items-center justify-center gap-3 group-hover:scale-105 animate-fast-float" style={{ animationDelay: "0.8s" }}>
              {React.createElement(patchBlocks[3].icon, { className: "w-10 h-10 sm:w-12 sm:h-12 text-yellow-400 group-hover:text-yellow-300 transition-all duration-300", strokeWidth: 2 })}
              <span className="text-[10px] sm:text-xs lg:text-sm font-bold text-white text-center px-4 group-hover:text-yellow-300 transition-colors duration-300">
                {patchBlocks[3].text}
              </span>
            </div>
          </motion.div>

          {/* Block 5: Bottom Right (mirrors Block 2 on desktop, mirrors Block 1 on mobile) */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.15 }}
            className="absolute top-[16%] right-[5%] sm:top-[52%] sm:right-[6%] group"
          >
            <div className="relative w-24 h-24 sm:w-36 sm:h-36 lg:w-44 lg:h-44 rounded-full bg-white/10 backdrop-blur-xl border-2 border-yellow-400/30 hover:border-yellow-400/50 transition-all duration-300 hover:bg-white/15 cursor-pointer flex flex-col items-center justify-center gap-1 sm:gap-3 group-hover:scale-105 animate-fast-float" style={{ animationDelay: "0.4s" }}>
              {React.createElement(patchBlocks[4].icon, { className: "w-6 h-6 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-yellow-400 group-hover:text-yellow-300 transition-all duration-300", strokeWidth: 2 })}
              <span className="text-[10px] sm:text-xs lg:text-base font-bold text-white text-center px-2 sm:px-6 group-hover:text-yellow-300 transition-colors duration-300 leading-tight">
                {patchBlocks[4].text}
              </span>
            </div>
          </motion.div>

          {/* CTA buttons - Bottom Center */}
          <div
            className="absolute bottom-12 sm:bottom-20 left-1/2 transform -translate-x-1/2 z-30 flex flex-row gap-3 sm:gap-4 w-full max-w-xs sm:max-w-none px-4 justify-center animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <button className="flex-1 sm:flex-none px-5 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-950 font-bold text-sm sm:text-lg rounded-xl sm:rounded-2xl shadow-lg shadow-yellow-400/30 hover:shadow-xl hover:shadow-yellow-400/50 hover:-translate-y-1 transition-all duration-300">
              Join Us
            </button>
            <button className="flex-1 sm:flex-none px-5 py-3 sm:px-8 sm:py-4 bg-black/40 backdrop-blur-md text-yellow-300 font-bold text-sm sm:text-lg rounded-xl sm:rounded-2xl border border-yellow-400/30 hover:bg-black/60 hover:border-yellow-400/60 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300">
              Learn More
            </button>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400/80"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>

        <style jsx>{`
          @keyframes fast-float {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-8px);
            }
          }

          .animate-fast-float {
            animation: fast-float 2.2s ease-in-out infinite;
          }
        `}</style>
      </section>
    </MotionConfig>
  );
};

export default PremiumHeroSection;