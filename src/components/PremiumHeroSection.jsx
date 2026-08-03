"use client";
import React, { useState, useId, useRef, useEffect } from "react";
import { Lightbulb, Laptop, Rocket, Users, ChevronDown, Info } from "lucide-react";
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
    <div className={clsx("max-w-7xl mx-auto px-6 lg:px-8", className)}>
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
      <div className="flex items-center justify-between py-6">
        {!expanded && (
          <Link href={"/"} aria-label="Home" className="flex items-center">
            <Logo className="h-9 w-auto" fillOnHover />
          </Link>
        )}
        {expanded && <div className="flex-1" />}

        {/* Top Navbar Links */}
        {!expanded && (
          <nav className="hidden md:flex items-center gap-x-8 text-sm font-medium text-zinc-300">
            <Link href="/" className="text-yellow-400 border-b-2 border-yellow-400 pb-1">
              Home
            </Link>
            <Link href="/about" className="hover:text-white transition">
              About Us
            </Link>
            <Link href="/initiatives" className="hover:text-white transition">
              Initiatives
            </Link>
            <Link href="/events" className="hover:text-white transition">
              Events
            </Link>
            <Link href="/resources" className="hover:text-white transition">
              Resources
            </Link>
            <Link href="/team" className="hover:text-white transition">
              Team
            </Link>
          </nav>
        )}

        <div className="flex items-center gap-x-6">
          <Button href={"/contact"} className="px-5 py-2.5 text-sm font-semibold bg-yellow-400 text-black hover:bg-yellow-300 rounded-lg">
            Contact Us
          </Button>
          <button
            ref={toggleRef}
            type="button"
            onClick={onToggle}
            aria-expanded={expanded.toString()}
            aria-controls={panelId}
            className={clsx(
              "group -m-2.5 rounded-full p-2.5 transition md:hidden",
              invert ? "hover:bg-white/10" : "hover:bg-white/10"
            )}
            aria-label="Toggle navigation"
          >
            <Icon className="h-7 w-7 fill-white text-white" />
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
      className="group relative bg-zinc-900 border-b border-zinc-800 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0 block"
    >
      <div className="relative overflow-hidden px-8 py-10 sm:px-12 sm:py-14 flex items-center justify-center min-h-[120px]">
        <div
          className={`relative z-10 text-2xl font-medium tracking-tight w-full ${
            align === "left"
              ? "text-left"
              : align === "right"
              ? "text-right"
              : "text-center"
          }`}
        >
          {children}
        </div>
        <div className="absolute inset-0 bg-zinc-800 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100" />
      </div>
    </Link>
  );
};

const Navigation = () => {
  return (
    <nav className="font-display text-white bg-zinc-900">
      <div className="grid grid-cols-1 sm:grid-cols-3">
        <NavigationItem href="/team">Team</NavigationItem>
        <NavigationItem href="/about">About Us</NavigationItem>
        <NavigationItem href="/events">Events</NavigationItem>
        <NavigationItem href="/initiatives">Initiatives</NavigationItem>
        <NavigationItem href="/resources">Resources</NavigationItem>
        <NavigationItem href="/contact">Contact Us</NavigationItem>
      </div>
    </nav>
  );
};

const PremiumHeroSection = () => {
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
    return () => window.removeEventListener("click", onClick);
  }, []);

  const cards = [
    { title: "Have an Idea?", icon: Lightbulb },
    { title: "Startup Ecosystem", icon: Users },
    { title: "Create Solutions", icon: Laptop },
    { title: "Build • Learn • Launch", icon: Rocket },
  ];

  return (
    <MotionConfig transition={shouldReduceMotion ? { duration: 0 } : undefined}>
      {/* Background updated to lighter pure gray: bg-zinc-800 */}
      <div className="relative bg-zinc-800 text-white min-h-screen flex flex-col justify-between overflow-hidden">
        
        {/* Ambient Top-Left Light Glow */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-yellow-500/20 rounded-full blur-[128px] pointer-events-none" />

        {/* Header Navigation */}
        <header className="relative w-full z-50">
          <TransparentHeader
            panelId={panelId}
            icon={HiMenuAlt4}
            toggleRef={openRef}
            expanded={expanded}
            onToggle={() => {
              setExpanded((prev) => !prev);
              window.setTimeout(() => closeRef.current?.focus({ preventScroll: true }));
            }}
          />

          {/* Drawer Navigation */}
          <motion.div
            layout
            id={panelId}
            style={{ height: expanded ? "auto" : "0" }}
            className="relative z-50 overflow-hidden bg-zinc-900"
            aria-hidden={expanded ? undefined : "true"}
          >
            <motion.div layout className="bg-zinc-800">
              <div className="bg-zinc-900 pb-8 pt-6">
                <TransparentHeader
                  invert
                  panelId={panelId}
                  icon={IoMdClose}
                  toggleRef={closeRef}
                  expanded={expanded}
                  onToggle={() => {
                    setExpanded((prev) => !prev);
                    window.setTimeout(() => openRef.current?.focus({ preventScroll: true }));
                  }}
                />
              </div>
              <Navigation />
              <div className="relative bg-zinc-900 border-t border-zinc-800">
                <Container>
                  <div className="grid grid-cols-1 gap-y-8 py-12 sm:grid-cols-2">
                    <div>
                      <h2 className="text-xl font-semibold text-white mb-2">Our Address</h2>
                      <Offices invert className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2" />
                    </div>
                    <div className="sm:border-l sm:border-zinc-800 sm:pl-12">
                      <h2 className="text-xl font-semibold text-white mb-2">Follow us</h2>
                      <SocialMedia className="mt-4" invert />
                    </div>
                  </div>
                </Container>
              </div>
            </motion.div>
          </motion.div>
        </header>

        {/* Hero Body Content */}
        <main className="max-w-7xl mx-auto px-6 lg:px-8 py-12 flex-1 flex items-center w-full z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full">
            
            {/* Left Column: Heading & CTAs */}
            <div className="lg:col-span-7 space-y-8">
              <h1 className="text-4xl sm:text-6xl lg:text-6xl font-extrabold tracking-tight leading-none uppercase">
                <span className="text-white block">Empowering</span>
                <span className="text-white block">Entrepreneurs.</span>
                <span className="text-yellow-400 block mt-1">Building</span>
                <span className="text-yellow-400 block">Tomorrow.</span>
              </h1>

              <p className="text-zinc-300 text-base sm:text-lg max-w-xl leading-relaxed">
                E-Cell SVNIT is the entrepreneurial arm of SVNIT, fostering innovation, leadership and enterprise among students.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/join"
                  className="px-7 py-3.5 bg-yellow-400 text-zinc-950 font-bold text-sm rounded-xl hover:bg-yellow-300 transition-all flex items-center gap-2 shadow-lg shadow-yellow-400/10"
                >
                  <Users className="w-4 h-4 fill-current" />
                  Join Us
                </Link>

                <Link
                  href="/learn"
                  className="px-7 py-3.5 bg-zinc-700 border border-zinc-600 text-yellow-400 font-bold text-sm rounded-xl hover:bg-zinc-600 transition-all flex items-center gap-2"
                >
                  <Laptop className="w-4 h-4" />
                  Learn More
                </Link>

                <Link
                  href="/about"
                  className="px-7 py-3.5 bg-zinc-700 border border-zinc-600 text-zinc-200 font-bold text-sm rounded-xl hover:bg-zinc-600 hover:text-white transition-all flex items-center gap-2"
                >
                  <Info className="w-4 h-4" />
                  About
                </Link>
              </div>
            </div>

            {/* Right Column: 2x2 Glowing Action Grid */}
            <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
              <div className="grid grid-cols-2 gap-6 sm:gap-8">
                {cards.map((card, idx) => {
                  const IconComponent = card.icon;
                  return (
                    <div
                      key={idx}
                      className="group relative w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-zinc-700/80 border border-zinc-600 hover:border-yellow-400 flex flex-col items-center justify-center p-4 text-center cursor-pointer transition-all duration-300 hover:scale-105 shadow-[0_0_25px_rgba(250,204,21,0.15)] hover:shadow-[0_0_35px_rgba(250,204,21,0.35)]"
                    >
                      <IconComponent className="w-8 h-8 sm:w-10 sm:h-10 text-yellow-400 mb-2 group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-xs sm:text-sm font-semibold text-white leading-tight px-2">
                        {card.title}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Scroll Down Indicator */}
              <div className="absolute -bottom-10 right-1/2 transform translate-x-1/2 lg:translate-x-0 lg:right-4 p-3 rounded-full bg-zinc-700/90 border border-zinc-600 text-white hover:border-yellow-400 transition cursor-pointer">
                <ChevronDown className="w-5 h-5 animate-bounce" />
              </div>
            </div>

          </div>
        </main>

      </div>
    </MotionConfig>
  );
};

export default PremiumHeroSection;