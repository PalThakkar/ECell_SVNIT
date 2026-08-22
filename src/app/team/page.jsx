"use client";

import React, { useMemo, useRef, useState, useEffect } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
  AnimatePresence,
} from "framer-motion";
import { Rocket, Zap, Search, X, ArrowRight } from "lucide-react";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import TeamMember from "@/components/TeamMember";
import InteractiveParticleNetwork from "@/components/home/InteractiveParticleNetwork";
import Navbar from "@/components/home/Navbar";

/* ═══════════════════════════════════════════════════════════════════════
   TEAM PAGE — now matches the home page exactly:
   - Background: InteractiveParticleNetwork (animated canvas — floating
     nodes, connection lines, mouse repulsion/attraction, click bursts),
     the same component the home page uses for its animated sections.
   - Navbar: mounted directly in this component. (Earlier assumption that
     src/app/team/page.jsx already rendered it was wrong per the latest
     screenshots — no navbar/logo was showing at all. Mounting it here.)
   - Card sizing: fixed in TeamMember.jsx itself (aspect-[4/5] + next/image
     "fill" mode), so every card's photo is the same size regardless of the
     source image's own aspect ratio. Grid below uses a real CSS grid with
     justify-content: center so rows of any count (2, 3, or 4 cards) center
     as a block instead of hugging the left edge.
   ═══════════════════════════════════════════════════════════════════════ */

const team2025Data = {
  chiefExecutive: [
    { photo: "/atman.png", name: "Atman Shah", position: "Convener", linkedin: "https://www.linkedin.com/in/atman-shah-0510as/", instagram: "https://www.instagram.com/atmann_04/" },
    { photo: "/aman.png", name: "Aman Kapoor", position: "Co-Convener", linkedin: "https://www.linkedin.com/in/aman-kapoor-6a6122308/", instagram: "https://www.instagram.com/aman__kap33/" },
    { photo: "/asmi.png", name: "Asmi Wadhwa", position: "Secretary", linkedin: "https://www.linkedin.com/in/asmiwadhwa/", instagram: "https://www.instagram.com/asmiw.7" },
    { photo: "/soni.png", name: "Lakshya Soni", position: "Treasurer", linkedin: "https://www.linkedin.com/in/lakshya-soni-6b4099327/", instagram: "https://www.instagram.com/soni_lakshya_/" },
  ],
  finance: [
    { photo: "/adi.jpg", name: "Aditya Panchal", position: "Head", linkedin: "https://in.linkedin.com/in/panchal-aditya", instagram: "https://www.instagram.com/aditya._.127" },
    { photo: "/shabbir.png", name: "Shabbir Hussainy", position: "Head", linkedin: "https://www.linkedin.com/in/shabbir-svnit/", instagram: "https://www.instagram.com/shabbir.hussainy" },
  ],
  mediaAndDesign: [
    { photo: "/kasera.png", name: "Tanish Kasera", position: "Head", linkedin: "https://www.linkedin.com/in/tanish-kasera-301343285/", instagram: "https://www.instagram.com/tanish.xi" },
    { photo: "/altaf.jpg", name: "Altaf Shams", position: "Head", linkedin: "https://www.linkedin.com/in/shamsaltaf143/", instagram: "https://www.instagram.com/om_panchal_op7" },
  ],
  events: [
    { photo: "/priti.jpg", name: "Priti Sand", position: "Head", linkedin: "https://www.linkedin.com/in/priti-sand/", instagram: "https://www.instagram.com/priti_3110" },
    { photo: "/harsh.png", name: "Harsh Solanki", position: "Head", linkedin: "https://www.linkedin.com/in/harshhsolanki/", instagram: "https://www.instagram.com/harshsolanki_1206" },
  ],
  contentTeam: [
    { photo: "/tanisha.jpg", name: "Tanisha Mishra", position: "Head", linkedin: "https://www.linkedin.com/in/tanisha-mishra-b259722a3/", instagram: "https://www.instagram.com/tanisha.mishraaa" },
    { photo: "/jash.jpg", name: "Jash Vadani", position: "Head", linkedin: "https://www.linkedin.com/in/jash-vanidani/", instagram: "https://www.instagram.com/jashh_visuals" },
  ],
  publicRelations: [
    { photo: "/meet.png", name: "Meet Pandya", position: "Head", linkedin: "https://www.linkedin.com/in/meet-pandya-r1705/", instagram: "https://www.instagram.com/meet.pandya17" },
    { photo: "/devanshi.jpg", name: "Devanshi Rathwa", position: "Head", linkedin: "https://www.linkedin.com/in/devanshirathva/", instagram: "https://www.instagram.com/rdevanshi23" },
  ],
};

const team2024Data = {
  executiveBoard: [
    { name: "Mihir Gandhi", position: "President", photo: "/mihir.jpg", linkedin: "https://www.linkedin.com/in/mihir--gandhi", instagram: "https://www.instagram.com/mihir__gandhi/" },
    { name: "Darshan Upadhyay", position: "Vice President", photo: "/darshan.jpg", linkedin: "https://www.linkedin.com/in/thedarshanupadhyay/", instagram: "https://www.instagram.com/upadhyay__darshan/" },
    { name: "Burhanuddin Lokhandwala", position: "Secretary", photo: "/secraty.jpeg", linkedin: "https://www.linkedin.com/in/burhanuddinlokhandwala04/", instagram: "https://www.instagram.com/burhan____04/" },
  ],
  chiefExecutive: [
    { photo: "/jeet.jpg", name: "Jeet Ariwala", position: "Chief Executive", linkedin: "https://www.linkedin.com/in/jeet-ariwala-152243256", instagram: "https://www.instagram.com/jeet_ariwala21" },
    { photo: "/kartik.jpg", name: "Kartik Srivastava", position: "Chief Executive", linkedin: "https://www.linkedin.com/in/kartik-srivastava-b46b561b7", instagram: "https://www.instagram.com/__.the.prodigal.son.__" },
    { photo: "/kashish.jpg", name: "Kashish Sharma", position: "Chief Executive", linkedin: "https://www.linkedin.com/in/kashish-sharma-545774215", instagram: "https://www.instagram.com/kashishhh__11" },
    { photo: "/omraa.jpg", name: "Om Ramanuj", position: "Chief Executive", linkedin: "https://www.linkedin.com/in/om-ramanuj-511501266", instagram: "https://www.instagram.com/ramanuj_om" },
  ],
  technical: [
    { photo: "/srjay.jpg", name: "S R Jay Kikani", position: "Head", linkedin: "https://www.linkedin.com/in/srjaykikani", instagram: "https://www.instagram.com/_srjay" },
    { photo: "/shambhavi.jpg", name: "Shambhavi Shinde", position: "Co-head", linkedin: "https://www.linkedin.com/in/shambhavishinde", instagram: "https://www.instagram.com/shmbhvi" },
  ],
  mediaAndPublicity: [
    { photo: "/dangar.jpg", name: "Ronak Dangar", position: "Head", linkedin: "https://www.linkedin.com/in/ronak-dangar", instagram: "https://www.instagram.com/ronak_dangar_04" },
    { photo: "/om-p.jpg", name: "Om Panchal", position: "Co-Head", linkedin: "https://in.linkedin.com/in/om-panchal-136410257", instagram: "https://www.instagram.com/om_panchal_op7" },
  ],
  events: [
    { photo: "/tripathi.jpg", name: "Pritish Tripathi", position: "Head", linkedin: "https://www.linkedin.com/in/pritish-tripathi-362006271", instagram: "https://www.instagram.com/tripathipritish" },
    { photo: "/tanish.jpg", name: "Tanish Panchal", position: "Co-head", linkedin: "https://www.linkedin.com/in/tanish2311", instagram: "https://www.instagram.com/ttan_ishh" },
  ],
  startupTeam: [
    { photo: "/ridhayu.jpg", name: "Gosai Ridhayu", position: "Head", linkedin: "https://www.linkedin.com/in/ridhayu-gosai-4b063a280", instagram: "https://www.instagram.com/ridhayu_gosai_28" },
    { photo: "/sp.jpg", name: "Soumya Parida", position: "Co-head", linkedin: "https://www.linkedin.com/in/soumyashreeparida785", instagram: "https://www.instagram.com/pvtt_soumya" },
  ],
  publicRelations: [
    { photo: "/zala.jpg", name: "Nanviya Zala", position: "Head", linkedin: "https://www.linkedin.com/in/nanviya-zala-108324306", instagram: "https://www.instagram.com/notnanviazala" },
    { photo: "/parmar.jpg", name: "Krish Parmar", position: "Co-Head", linkedin: "https://www.linkedin.com/in/krish-parmar-a30211258", instagram: "https://www.instagram.com/krishh_.003" },
  ],
};

const TEAMS_CONFIG = {
  "2025-26": {
    label: "2025–26",
    data: team2025Data,
    sections: [
      { key: "chiefExecutive", title: "Chief Executives", tier: "HIGH VOLTAGE · MAIN BUS" },
      { key: "events", title: "Events Team", tier: "CIRCUIT LEAD" },
      { key: "contentTeam", title: "Podcast & Content", tier: "CIRCUIT LEAD" },
      { key: "finance", title: "Finance & Documentation", tier: "CIRCUIT LEAD" },
      { key: "publicRelations", title: "Public Relations", tier: "CIRCUIT LEAD" },
      { key: "mediaAndDesign", title: "Media & Design", tier: "CIRCUIT LEAD" },
    ],
  },
  "2024-25": {
    label: "2024–25",
    data: team2024Data,
    sections: [
      { key: "executiveBoard", title: "Executive Board", tier: "HIGH VOLTAGE · MAIN BUS" },
      { key: "chiefExecutive", title: "Chief Executives", tier: "HIGH VOLTAGE · MAIN BUS" },
      { key: "technical", title: "Technical Team", tier: "CIRCUIT LEAD" },
      { key: "mediaAndPublicity", title: "Media & Publicity", tier: "CIRCUIT LEAD" },
      { key: "events", title: "Events Team", tier: "CIRCUIT LEAD" },
      { key: "startupTeam", title: "Startup Team", tier: "CIRCUIT LEAD" },
      { key: "publicRelations", title: "Public Relations", tier: "CIRCUIT LEAD" },
    ],
  },
};

const EASE = [0.22, 1, 0.36, 1];

function CountUp({ value, duration = 1.1 }) {
  const [display, setDisplay] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) {
      setDisplay(value);
      return;
    }
    let raf;
    const start = performance.now();
    const tick = (now) => {
      const t = Math.min((now - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(Math.round(eased * value));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [value, duration, reduceMotion]);

  return <span>{display}</span>;
}

function WordReveal({ text, className, style, delay = 0 }) {
  const reduceMotion = useReducedMotion();
  const words = text.split(" ");
  return (
    <span className={className} style={{ ...style, display: "inline-block" }}>
      {words.map((word, i) => (
        <span key={i} style={{ display: "inline-block", overflow: "hidden", verticalAlign: "top" }}>
          <motion.span
            style={{ display: "inline-block" }}
            initial={{ y: reduceMotion ? 0 : "110%", opacity: reduceMotion ? 1 : 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: EASE, delay: delay + i * 0.07 }}
          >
            {word}
            {i < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

function MagneticCard({ children, delay = 0 }) {
  const reduceMotion = useReducedMotion();
  const ref = useRef(null);
  const mx = useMotionValue(50);
  const my = useMotionValue(50);
  const glow = useMotionValue(0);

  const handleMove = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set(((e.clientX - rect.left) / rect.width) * 100);
    my.set(((e.clientY - rect.top) / rect.height) * 100);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseEnter={() => glow.set(1)}
      onMouseLeave={() => glow.set(0)}
      initial={{ opacity: 0, y: reduceMotion ? 0 : 34, rotateX: reduceMotion ? 0 : -14 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.55, delay, ease: EASE }}
      className="relative flex justify-center"
      style={{ transformPerspective: 900 }}
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -inset-3 rounded-2xl -z-10"
        style={{
          opacity: glow,
          background: useTransform(
            [mx, my],
            ([x, y]) =>
              `radial-gradient(220px circle at ${x}% ${y}%, rgba(251,189,88,0.35), transparent 70%)`
          ),
          transition: "opacity 0.25s ease",
        }}
      />
      {children}
    </motion.div>
  );
}

function PowerSourceSelector({ selectedYear, onChange }) {
  return (
    <div
      role="tablist"
      aria-label="Select team year"
      className="inline-flex items-center gap-1.5 rounded-full p-1.5 mx-auto"
      style={{
        background: "rgba(255,255,255,0.9)",
        border: "1px solid #E8E4DC",
        boxShadow: "0 8px 28px rgba(17,15,10,0.08)",
      }}
    >
      {Object.entries(TEAMS_CONFIG).map(([year, config]) => {
        const active = selectedYear === year;
        return (
          <button
            key={year}
            role="tab"
            aria-selected={active}
            onClick={() => onChange(year)}
            className="relative px-5 sm:px-7 py-2.5 rounded-full text-sm sm:text-base font-black transition-colors duration-300"
            style={{ color: active ? "#111111" : "#7A756C" }}
          >
            {active && (
              <motion.span
                layoutId="power-source-pill"
                className="absolute inset-0 rounded-full -z-10"
                style={{
                  background: "linear-gradient(180deg, #FDCB75 0%, #FBBD58 45%, #F5AB35 100%)",
                  boxShadow:
                    "inset 0 2px 4px rgba(255,255,255,0.5), inset 0 -2px 4px rgba(0,0,0,0.15), 0 4px 14px rgba(251,189,88,0.35)",
                }}
                transition={{ type: "spring", stiffness: 420, damping: 34 }}
              />
            )}
            <span className="relative z-10 inline-flex items-center gap-1.5">
              <Zap
                size={13}
                className={active ? "opacity-100" : "opacity-0"}
                style={{ transition: "opacity 0.25s" }}
                aria-hidden
              />
              {config.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}

function NodeSearch({ query, setQuery }) {
  const [focused, setFocused] = useState(false);
  return (
    <div className="w-full max-w-md mx-auto relative">
      <motion.div
        aria-hidden
        className="absolute -inset-1 rounded-full -z-10"
        animate={{
          opacity: focused ? 1 : 0,
          boxShadow: focused
            ? "0 0 0 4px rgba(251,189,88,0.28)"
            : "0 0 0 0px rgba(251,189,88,0)",
        }}
        transition={{ duration: 0.3, ease: EASE }}
      />
      <div
        className="flex items-center gap-2.5 rounded-full px-5 py-3 transition-colors relative"
        style={{ background: "#FAF9F6", border: `1px solid ${focused ? "#F5AB35" : "#E8E4DC"}` }}
      >
        <Search size={16} style={{ color: "#7A756C" }} aria-hidden />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder="Find someone by name or role…"
          className="w-full bg-transparent text-sm outline-none"
          style={{ color: "#111111" }}
        />
        <AnimatePresence>
          {query && (
            <motion.button
              key="clear"
              onClick={() => setQuery("")}
              aria-label="Clear search"
              className="shrink-0 rounded-full p-1 hover:bg-black/5 transition-colors"
              initial={{ opacity: 0, rotate: -90, scale: 0.4 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 90, scale: 0.4 }}
              transition={{ duration: 0.25, ease: EASE }}
            >
              <X size={14} style={{ color: "#7A756C" }} />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function TierConnector() {
  const reduceMotion = useReducedMotion();
  return (
    <svg width="2" height="32" viewBox="0 0 2 32" aria-hidden>
      <motion.line
        x1="1" y1="0" x2="1" y2="32"
        stroke="#E8E4DC"
        strokeWidth="2"
        initial={{ pathLength: reduceMotion ? 1 : 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: EASE }}
      />
    </svg>
  );
}

function TierSection({ title, tier, members, index, query }) {
  const reduceMotion = useReducedMotion();

  const filtered = useMemo(() => {
    if (!query.trim()) return members;
    const q = query.toLowerCase();
    return members.filter(
      (m) => m.name.toLowerCase().includes(q) || m.position.toLowerCase().includes(q)
    );
  }, [members, query]);

  if (filtered.length === 0) return null;

  const isMainBus = tier.includes("MAIN BUS");

  return (
    <motion.section
      initial={{ opacity: 0, y: reduceMotion ? 0 : 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration: 0.6, ease: EASE }}
      className="relative w-full"
      style={{ marginTop: index === 0 ? 0 : "clamp(48px, 7vw, 88px)" }}
    >
      <div className="relative flex flex-col items-center">
        <TierConnector />

        <motion.span
          initial={{ scale: reduceMotion ? 1 : 0.6, opacity: reduceMotion ? 1 : 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 380, damping: 22, delay: 0.35 }}
          className="relative inline-flex items-center gap-1.5 overflow-hidden rounded-full px-3.5 py-1 text-[10px] sm:text-[11px] font-black tracking-[0.16em] shadow-md"
          style={{
            background: isMainBus
              ? "linear-gradient(180deg, #FDCB75 0%, #FBBD58 45%, #F5AB35 100%)"
              : "#FAF9F6",
            border: isMainBus ? "1px solid #F5AB35" : "1px solid #E8E4DC",
            color: isMainBus ? "#111111" : "#7A756C",
            boxShadow: isMainBus
              ? "inset 0 2px 4px rgba(255,255,255,0.4), inset 0 -2px 4px rgba(0,0,0,0.15), 0 2px 8px rgba(0,0,0,0.1)"
              : "none",
          }}
        >
          <motion.span
            animate={isMainBus && !reduceMotion ? { scale: [1, 1.25, 1], opacity: [1, 0.7, 1] } : {}}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <Zap size={11} aria-hidden />
          </motion.span>
          <span className="relative z-10">{tier}</span>
          {isMainBus && (
            <motion.span
              aria-hidden
              className="absolute inset-y-0 w-1/3 bg-white/40 skew-x-[-20deg]"
              initial={{ left: "-40%" }}
              animate={reduceMotion ? {} : { left: ["-40%", "140%"] }}
              transition={{ duration: 2.2, repeat: Infinity, repeatDelay: 1.4, ease: "easeInOut" }}
            />
          )}
        </motion.span>

        <h2
          className="mt-3 text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-center"
          style={{ color: "#111111", fontFamily: "var(--font-display)" }}
        >
          {title}
        </h2>

        <div className="relative mt-6 hidden w-full md:block" aria-hidden>
          <div
            className="absolute left-1/2 top-0 h-px w-[70%] -translate-x-1/2"
            style={{
              background:
                "linear-gradient(to right, transparent, #E8E4DC 15%, #E8E4DC 85%, transparent)",
            }}
          />
        </div>
      </div>

      {/* auto-fit grid: column count is derived from actual available width
          ÷ card width. Critical fix: grid needs justify-content: center
          (not a Tailwind utility — set inline) so that when fewer cards
          exist than columns fit, the used columns center within the
          track instead of hugging the left edge, which is what
          justify-items-center alone does NOT do (that only centers each
          card within its own column, not the columns as a block). */}
      <div
        className="mt-2 grid gap-x-8 gap-y-8 justify-items-center max-w-[1360px] mx-auto"
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(17rem, 17rem))",
          justifyContent: "center",
        }}
      >
        {filtered.map((member, i) => (
          <MagneticCard key={member.name} delay={reduceMotion ? 0 : Math.min(i * 0.07, 0.42)}>
            <TeamMember
              photo={member.photo}
              name={member.name}
              position={member.position}
              linkedin={member.linkedin}
              instagram={member.instagram}
            />
          </MagneticCard>
        ))}
      </div>
    </motion.section>
  );
}

function ScrollPowerRail({ targetRef }) {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start 15%", "end 85%"],
  });
  const smoothed = useSpring(scrollYProgress, { stiffness: 120, damping: 26, mass: 0.4 });
  const fillHeight = useTransform(smoothed, [0, 1], ["0%", "100%"]);
  const dotOpacity = useTransform(smoothed, [0, 0.04, 0.96, 1], [0, 1, 1, 0.5]);

  return (
    <div
      className="pointer-events-none absolute left-1/2 top-0 h-full w-px -translate-x-1/2 z-0 hidden md:block"
      style={{ background: "#E8E4DC" }}
      aria-hidden
    >
      <motion.div
        className="absolute left-0 top-0 w-full origin-top"
        style={{
          height: reduceMotion ? "100%" : fillHeight,
          background: "linear-gradient(to bottom, #FDCB75, #F5AB35)",
        }}
      />
      {!reduceMotion && (
        <motion.div
          className="absolute left-1/2 w-2.5 h-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            top: fillHeight,
            background: "#F5AB35",
            opacity: dotOpacity,
            boxShadow: "0 0 14px 5px rgba(245,171,53,0.55)",
          }}
        />
      )}
    </div>
  );
}

function MagneticButton({ href, children }) {
  const reduceMotion = useReducedMotion();
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 22 });
  const springY = useSpring(y, { stiffness: 300, damping: 22 });

  const handleMove = (e) => {
    if (reduceMotion) return;
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left - rect.width / 2) * 0.25);
    y.set((e.clientY - rect.top - rect.height / 2) * 0.25);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ x: springX, y: springY }}
      className="btn-yellow mt-7 group inline-flex items-center gap-1.5"
    >
      {children}
    </motion.a>
  );
}

function OutputNode() {
  return (
    <FadeIn>
      <div className="relative flex flex-col items-center text-center mt-20 sm:mt-28 pb-8">
        <div className="h-10 w-px" style={{ background: "linear-gradient(to bottom, #E8E4DC, #FBBD58)" }} aria-hidden />
        <motion.div
          className="flex h-14 w-14 items-center justify-center rounded-full"
          style={{
            background: "linear-gradient(180deg, #FDCB75 0%, #FBBD58 45%, #F5AB35 100%)",
            boxShadow: "0 8px 28px rgba(251,189,88,0.4)",
          }}
          animate={{ boxShadow: [
            "0 8px 28px rgba(251,189,88,0.4)",
            "0 8px 40px rgba(251,189,88,0.65)",
            "0 8px 28px rgba(251,189,88,0.4)",
          ] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          aria-hidden
        >
          <Zap size={22} className="text-[#111111]" />
        </motion.div>
        <h2 className="mt-5 text-3xl sm:text-4xl font-black tracking-tight" style={{ color: "#111111" }}>
          Want to power the next grid?
        </h2>
        <p className="mt-3 max-w-md text-base leading-relaxed" style={{ color: "#3D3A35" }}>
          Recruitment opens once a year. Every name above started as an application —
          yours could be next on the circuit.
        </p>
        <MagneticButton href="/contact">
          Apply to Join
          <ArrowRight size={17} className="transition-transform group-hover:translate-x-0.5" />
        </MagneticButton>
      </div>
    </FadeIn>
  );
}

function PowerCoreBadge() {
  const reduceMotion = useReducedMotion();
  return (
    <div className="relative w-6 h-6 shrink-0" aria-hidden>
      <motion.svg
        viewBox="0 0 40 40"
        className="absolute inset-0 w-full h-full"
        animate={reduceMotion ? {} : { rotate: 360 }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
      >
        <polygon
          points="20,3 34,11.5 34,28.5 20,37 6,28.5 6,11.5"
          fill="none"
          stroke="#F5AB35"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
      </motion.svg>
      <motion.svg
        viewBox="0 0 40 40"
        className="absolute inset-0 w-full h-full"
        animate={reduceMotion ? {} : { rotate: -360 }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      >
        <circle cx="20" cy="20" r="6" fill="#F5AB35" opacity="0.9" />
      </motion.svg>
    </div>
  );
}

function StatsTicker({ sections, data }) {
  const reduceMotion = useReducedMotion();
  const stats = useMemo(
    () =>
      sections
        .map(({ key, title }) => ({ title, count: data[key]?.length || 0 }))
        .filter((s) => s.count > 0),
    [sections, data]
  );
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduceMotion || stats.length < 2) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % stats.length), 2600);
    return () => clearInterval(id);
  }, [stats.length, reduceMotion]);

  if (stats.length === 0) return null;
  const current = stats[index % stats.length];

  return (
    <div className="flex items-center justify-center gap-2 text-xs font-bold tracking-wide" style={{ color: "#9A9488" }}>
      <span
        className="inline-block w-1.5 h-1.5 rounded-full"
        style={{ background: "#F5AB35", boxShadow: "0 0 6px rgba(245,171,53,0.8)" }}
      />
      <AnimatePresence mode="wait">
        <motion.span
          key={current.title}
          initial={{ opacity: 0, y: reduceMotion ? 0 : 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: reduceMotion ? 0 : -6 }}
          transition={{ duration: 0.35, ease: EASE }}
        >
          {current.count} {current.title}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}

function PowerCycleFlash({ triggerKey }) {
  const reduceMotion = useReducedMotion();
  if (reduceMotion) return null;
  return (
    <motion.div
      key={triggerKey}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-40"
      style={{ background: "linear-gradient(180deg, rgba(253,203,117,0.16), transparent 60%)" }}
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: EASE }}
    />
  );
}

const TeamPage = () => {
  const [selectedYear, setSelectedYear] = useState("2025-26");
  const [query, setQuery] = useState("");
  const gridRef = useRef(null);
  const currentTeamConfig = TEAMS_CONFIG[selectedYear];

  const totalNodes = useMemo(
    () =>
      currentTeamConfig.sections.reduce(
        (sum, { key }) => sum + (currentTeamConfig.data[key]?.length || 0),
        0
      ),
    [currentTeamConfig]
  );

  const anyResults = useMemo(() => {
    if (!query.trim()) return true;
    const q = query.toLowerCase();
    return currentTeamConfig.sections.some(({ key }) =>
      (currentTeamConfig.data[key] || []).some(
        (m) => m.name.toLowerCase().includes(q) || m.position.toLowerCase().includes(q)
      )
    );
  }, [currentTeamConfig, query]);

  return (
    <>
      <Navbar />
      <InteractiveParticleNetwork className="light-mode-wrapper bg-white text-neutral-900">
        <AnimatePresence>
          <PowerCycleFlash triggerKey={selectedYear} />
        </AnimatePresence>

        {/* Hero */}
        <Container className="mt-24 sm:mt-32 lg:mt-40 text-center">
          <FadeIn>
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-black mb-5"
              style={{ background: "#FEF3C7", border: "1px solid #F5AB35", color: "#111111" }}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: EASE }}
            >
              <PowerCoreBadge />
              <span>
                <CountUp value={totalNodes} /> Nodes Online
              </span>
            </motion.div>

            <h1
              className="mx-auto max-w-4xl font-display text-5xl sm:text-6xl md:text-7xl font-black tracking-tight [text-wrap:balance]"
              style={{ color: "#111111" }}
            >
              <WordReveal text="The Grid Behind" />
              <br />
              <WordReveal
                text="Every Ignition."
                className="text-gradient-yellow"
                delay={0.2}
              />
            </h1>

            <motion.p
              className="mt-6 max-w-2xl mx-auto text-lg text-neutral-600 flex items-center justify-center gap-2 flex-wrap"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55, ease: EASE }}
            >
              Faculty mentors ground it, the core team runs the main bus, circuit
              leads close the loop — meet the people who keep E-Cell SVNIT powered.
              <Rocket size={20} className="text-yellow-500 inline" aria-hidden="true" />
            </motion.p>

            <motion.div
              className="mt-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <StatsTicker sections={currentTeamConfig.sections} data={currentTeamConfig.data} />
            </motion.div>
          </FadeIn>
        </Container>

        {/* Controls */}
        <FadeIn>
          <div className="flex flex-col items-center gap-5 mt-10 mb-4 px-4">
            <PowerSourceSelector selectedYear={selectedYear} onChange={setSelectedYear} />
            <NodeSearch query={query} setQuery={setQuery} />
          </div>
        </FadeIn>

        {/* Grid */}
        <div ref={gridRef} className="relative px-4 md:px-6 lg:px-10 max-w-[1600px] mx-auto mt-6 sm:mt-10">
          <ScrollPowerRail targetRef={gridRef} />
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedYear}
              initial={{ opacity: 0, filter: "brightness(1.3)" }}
              animate={{ opacity: 1, filter: "brightness(1)" }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: EASE }}
            >
              {currentTeamConfig.sections.map(({ key, title, tier }, i) => {
                const members = currentTeamConfig.data[key];
                return members && members.length > 0 ? (
                  <TierSection
                    key={key}
                    title={title}
                    tier={tier}
                    members={members}
                    index={i}
                    query={query}
                  />
                ) : null;
              })}

              {!anyResults && (
                <motion.div
                  className="text-center py-20"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <p className="text-sm font-bold tracking-widest" style={{ color: "#7A756C" }}>
  NO NODES MATCHED &quot;{query}&quot;
</p>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        <Container>
          <OutputNode />
        </Container>
      </InteractiveParticleNetwork>
    </>
  );
};

export default TeamPage;