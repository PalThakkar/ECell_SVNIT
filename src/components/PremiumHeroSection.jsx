"use client";
import React, { useState, useId, useRef, useEffect } from "react";
import { Lightbulb, Laptop, Award, Target, Rocket, ArrowRight } from "lucide-react";
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
      <div className="flex items-center justify-between">
        {!expanded && (
          <Link href={"/"} aria-label="Home">
            <Logo className="h-8 mb-16" fillOnHover />
          </Link>
        )}
        {expanded && <div className="flex-1" />}
        <div className="flex items-center gap-x-8">
          <Button href={"/contact"} className="px-6 py-3 text-base">
            Contact us
          </Button>
          <button
            ref={toggleRef}
            type="button"
            onClick={onToggle}
            aria-expanded={expanded.toString()}
            aria-controls={panelId}
            className={clsx(
              "group -m-2.5 rounded-full p-4 transition",
              invert ? "hover:bg-white/10" : "hover:bg-white/10"
            )}
            aria-label="Toggle navigation"
          >
            <Icon
              className={clsx(
                "h-8 w-8",
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
          className={`relative z-10 text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight w-full ${
            align === "left"
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
        <NavigationItem href="/team" align="center">Team</NavigationItem>
        <NavigationItem href="/about" align="center">About Us</NavigationItem>
        <NavigationItem href="/events" align="center">Events</NavigationItem>
        <NavigationItem href="/jobs" align="center">Jobs</NavigationItem>
        <NavigationItem href="/merch" align="center">Merch</NavigationItem>
        <NavigationItem href="/blog&podcast" align="center">Podcast and Blogs</NavigationItem>
      </div>
      <div className="hidden sm:grid sm:grid-cols-3">
        <NavigationItem href="/team" align="center">Team</NavigationItem>
        <NavigationItem href="/about" align="center">About Us</NavigationItem>
        <NavigationItem href="/events" align="center">Events</NavigationItem>
        <NavigationItem href="/jobs" align="center">Jobs</NavigationItem>
        <NavigationItem href="/merch" align="center">Merch</NavigationItem>
        <NavigationItem href="/blog&podcast" align="center">Podcast & Blogs</NavigationItem>
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
    if (shouldReduceMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: ((e.clientX - rect.left) / rect.width - 0.5) * 2,
      y: ((e.clientY - rect.top) / rect.height - 0.5) * 2,
    });
  };

  return (
    <MotionConfig transition={shouldReduceMotion ? { duration: 0 } : undefined}>
      {/* ================= HEADER (unchanged — already solid) ================= */}
      <header className="absolute top-0 left-0 right-0 z-50">
        <div className="absolute left-0 right-0 top-2 z-40" aria-hidden={expanded ? "true" : undefined}>
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
                  window.setTimeout(() => openRef.current?.focus({ preventScroll: true }));
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

      {/* ================= HERO BODY (redesigned) ================= */}
      <section
        className="relative min-h-screen overflow-hidden flex items-center px-6 sm:px-8 lg:px-12 py-28"
        onMouseMove={handleMouseMove}
      >
        {/* fully abstract animated background: gradient mesh + grid + particle network */}
        <AnimatedBackground />

        {/* soft yellow ambient glow, parallaxed with cursor */}
        <motion.div
          aria-hidden="true"
          className="absolute -z-10 w-[560px] h-[560px] rounded-full bg-yellow-400/10 blur-[100px]"
          animate={{ x: mousePos.x * 24, y: mousePos.y * 24 }}
          transition={{ type: "spring", stiffness: 40, damping: 20 }}
          style={{ top: "10%", right: "0%" }}
        />

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-14 lg:gap-8 items-center">

            {/* ---------- copy column ---------- */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-white/5 backdrop-blur-sm px-4 py-1.5 mb-6"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-yellow-400 shadow-[0_0_8px_2px_rgba(250,204,21,0.5)]" />
                <span className="text-xs sm:text-sm font-semibold tracking-wide text-yellow-300">
                  E-Cell &middot; SVNIT Surat
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.08 }}
                className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight text-white mb-6"
              >
                Ignite Innovation.
                <br />
                Inspire{" "}
                <span className="text-yellow-400">Entrepreneurship.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.16 }}
                className="text-base sm:text-lg leading-relaxed text-neutral-300 max-w-xl mb-8"
              >
                The heartbeat of entrepreneurial spirit on campus. We help students
                turn visionary ideas into successful ventures through the right mix
                of networking, mentorship, and resources.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.24 }}
                className="flex flex-wrap gap-4 mb-12"
              >
                <button className="group inline-flex items-center gap-2 bg-yellow-400 text-neutral-900 font-bold text-base px-7 py-3.5 rounded-full shadow-lg shadow-yellow-400/20 hover:shadow-xl hover:shadow-yellow-400/40 hover:-translate-y-0.5 transition-all duration-300">
                  Join Us
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
                <button className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm text-white font-semibold text-base px-7 py-3.5 rounded-full border border-white/15 hover:border-yellow-400/50 hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-300">
                  Learn More
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.32 }}
                className="flex flex-wrap gap-x-10 gap-y-4"
              >
                {stats.map((s) => (
                  <div key={s.label} className="border-l border-white/15 pl-4">
                    <div className="font-display text-2xl font-bold text-white">
                      {s.value}
                    </div>
                    <div className="text-xs sm:text-sm text-neutral-400 mt-0.5">
                      {s.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* ---------- orbit / badge column ---------- */}
            <div className="relative aspect-square w-full max-w-[520px] mx-auto lg:mx-0">
              {/* rotating rings */}
              <div className="absolute inset-[10%] rounded-full border border-white/10" />
              <motion.div
                className="absolute inset-[24%] rounded-full border border-yellow-400/20"
                animate={shouldReduceMotion ? {} : { rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              />

              {/* central mark */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-500 flex flex-col items-center justify-center shadow-2xl shadow-yellow-400/30"
              >
                <span className="text-2xl font-black text-neutral-900 font-display">
                  E-Cell
                </span>
                <span className="text-xs font-bold text-neutral-900/70 tracking-wide">
                  SVNIT
                </span>
              </motion.div>

              {/* orbit badges */}
              {orbitBadges.map((b, i) => (
                <motion.div
                  key={b.text}
                  custom={i}
                  variants={badgeVariants}
                  initial="hidden"
                  animate="show"
                  whileHover={shouldReduceMotion ? {} : { y: -4, scale: 1.04 }}
                  className={clsx(
                    "absolute w-32 sm:w-36 rounded-2xl bg-white/[0.06] backdrop-blur-xl border border-white/10 hover:border-yellow-400/40 px-4 py-4 flex flex-col items-center text-center gap-2 cursor-default transition-colors duration-300",
                    b.className
                  )}
                >
                  <b.icon className="w-6 h-6 text-yellow-400" strokeWidth={1.8} />
                  <span className="text-[11px] sm:text-xs font-semibold text-white leading-snug">
                    {b.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* scroll cue */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-neutral-500"
          animate={shouldReduceMotion ? {} : { y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
          <svg className="w-4 h-4 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </section>
    </MotionConfig>
  );
};

export default PremiumHeroSection;