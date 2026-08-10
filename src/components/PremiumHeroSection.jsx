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

/* ---------- badge data: same messages you already use, restyled as an orbit ---------- */
const orbitBadges = [
  { text: "Have an idea?", icon: Lightbulb, className: "top-[4%] left-[2%] lg:left-[8%]" },
  { text: "Create real-world solutions", icon: Laptop, className: "top-[46%] left-[-2%] lg:left-[0%]" },
  { text: "SVNIT's Startup Ecosystem", icon: Award, className: "top-[8%] right-[2%] lg:right-[10%]" },
  { text: "Solopreneurship vs Entrepreneurship", icon: Target, className: "top-[50%] right-[-2%] lg:right-[2%] hidden sm:flex" },
  { text: "Build. Learn. Launch.", icon: Rocket, className: "bottom-[2%] left-[24%]" },
];

const stats = [
  { value: "2000+", label: "Students engaged" },
  { value: "5+", label: "Flagship events" },
  { value: "10+", label: "Industry partners" },
];

const badgeVariants = {
  hidden: { opacity: 0, y: 16, scale: 0.9 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: 0.5 + i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

/* ---------- animated background: gradient mesh + particle network on canvas ---------- */
const AnimatedBackground = () => {
  const canvasRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationId;
    let width, height, dpr;
    let particles = [];

    const PARTICLE_COUNT_BASE = 70;
    const LINK_DIST = 130;
    const MOUSE_LINK_DIST = 180;

    const mouse = { x: -9999, y: -9999 };

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.min(
        PARTICLE_COUNT_BASE,
        Math.floor((width * height) / 16000)
      );
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 1.6 + 0.6,
      }));
    };

    const onMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const onMouseLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    const step = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < LINK_DIST) {
            ctx.strokeStyle = `rgba(250, 204, 21, ${0.14 * (1 - dist / LINK_DIST)})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
          }
        }

        const mdx = p.x - mouse.x;
        const mdy = p.y - mouse.y;
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mdist < MOUSE_LINK_DIST) {
          ctx.strokeStyle = `rgba(250, 204, 21, ${0.35 * (1 - mdist / MOUSE_LINK_DIST)})`;
          ctx.lineWidth = 0.8;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }

        ctx.fillStyle = "rgba(250, 204, 21, 0.55)";
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      animationId = requestAnimationFrame(step);
    };

    resize();
    step();
    window.addEventListener("resize", resize);
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mouseleave", onMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", onMouseMove);
      canvas.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [shouldReduceMotion]);

  return (
    <div className="absolute inset-0 -z-20 bg-neutral-950 overflow-hidden">
      {/* base color */}
      <div className="absolute inset-0 bg-neutral-950" />

      {/* drifting gradient mesh blobs */}
      <motion.div
        aria-hidden="true"
        className="absolute w-[600px] h-[600px] rounded-full bg-yellow-400/15 blur-[120px]"
        style={{ top: "-10%", left: "-5%" }}
        animate={
          shouldReduceMotion
            ? {}
            : { x: [0, 60, -20, 0], y: [0, 40, 80, 0] }
        }
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute w-[500px] h-[500px] rounded-full bg-yellow-300/10 blur-[110px]"
        style={{ bottom: "-15%", right: "-5%" }}
        animate={
          shouldReduceMotion
            ? {}
            : { x: [0, -50, 30, 0], y: [0, -30, -70, 0] }
        }
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute w-[420px] h-[420px] rounded-full bg-amber-500/10 blur-[100px]"
        style={{ top: "30%", left: "45%" }}
        animate={
          shouldReduceMotion
            ? {}
            : { x: [0, 40, -40, 0], y: [0, -50, 20, 0] }
        }
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* animated grid, slowly panning */}
      <motion.div
        aria-hidden="true"
        className="absolute inset-[-10%] opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse 65% 55% at 50% 40%, black 20%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 65% 55% at 50% 40%, black 20%, transparent 80%)",
        }}
        animate={shouldReduceMotion ? {} : { backgroundPosition: ["0px 0px", "56px 56px"] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      />

      {/* particle network canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* vignette so text stays readable at every edge */}
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-neutral-950/50" />
      <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/40 via-transparent to-neutral-950/40" />
    </div>
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