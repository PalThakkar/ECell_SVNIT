"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  Clock,
  MapPin,
  Sparkles,
  ChevronDown,
} from "lucide-react";

const eventsData = [
  {
    id: 1,
    title: "The Lego Startup",
    tagline: "Build a Startup from Scratch",
    description:
      "A structured four-week startup-building journey where teams develop an idea from scratch and present their product at the final D-Day.",
    year: 2024,
    status: "past",
    images: [
      "/lego-pics/pic6.png",
      "/lego-pics/pic7.png",
      "/lego-pics/pic4.png",
    ],
    date: "November 17, 2024",
    time: "10:00 AM - 6:00 PM",
    location: "Canteen Cements, SVNIT",
    slug: "lego-startup-1.0",
  },

  {
    id: 2,
    title: "E-Summit 2026",
    tagline: "Where Ideas Meet Opportunity",
    description:
      "The flagship annual entrepreneurship event of E-Cell SVNIT, bringing together founders, investors, industry leaders, and students.",
    year: 2026,
    status: "upcoming",
    images: ["/event-photos/bitcoin-workshop-pic-1.jpeg"],
    date: "Will announce soon",
    time: "Will announce soon",
    location: "SVNIT Campus, Surat",
    slug: "esummit-2026",
  },

  {
    id: 3,
    title: "Corporate Catastrophe",
    tagline: "An Escape Room Event",
    description:
      "A high-energy challenge where teams navigate business crises, ethical dilemmas and strategic puzzles under pressure.",
    year: 2025,
    status: "past",
    images: [
      "/event-photos/corporate_catastrophe_pic1.jpg",
      "/event-photos/corporate_catastrophe_pic2.jpg",
      "/event-photos/corporate_catastrophe_pic3.jpg",
    ],
    date: "March 20, 2025",
    time: "10:00 AM - 1:00 PM",
    location: "Old CRC, SVNIT",
    slug: "corporate-catastrophe-1.0",
  },

  {
    id: 4,
    title: "Ignite 2025",
    tagline: "Fuel Your Entrepreneurial Spark",
    description:
      "An entrepreneurial skill-based treasure hunt designed to challenge creativity, strategy, teamwork and decision-making.",
    year: 2025,
    status: "past",
    images: [
      "/event-photos/ignite_pic6.jpg",
      "/event-photos/ignite_pic3.jpeg",
      "/event-photos/ignite_pic1.jpg",
    ],
    date: "October 12, 2025",
    time: "9:00 AM - 12:00 PM",
    location: "Library Basement, SVNIT",
    slug: "ignite-2025",
  },

  {
    id: 5,
    title: "Bitcoin Workshop 2025",
    tagline: "Understanding Crypto & Blockchain",
    description:
      "A practical introduction to cryptocurrencies and blockchain technology, covering Bitcoin fundamentals, wallets, transactions and security.",
    year: 2025,
    status: "past",
    images: [
      "/event-photos/bitcoin-workshop-pic-3.jpeg",
      "/event-photos/bitcoin-workshop-pic-5.jpeg",
      "/event-photos/bitcoin-workshop-pic-1.jpeg",
    ],
    date: "November 12, 2025",
    time: "6:00 PM - 8:00 PM",
    location: "COED 402, CSE Dept, SVNIT",
    slug: "bitcoin-workshop-2025",
  },

  {
    id: 6,
    title: "Business Wall",
    tagline: "Express Your Entrepreneurial Ideas",
    description:
      "A creative campus initiative where students turned a simple board near the canteen into a vibrant display of ideas and inspiration.",
    year: 2024,
    status: "past",
    images: [
      "/event-photos/business-wall-pic1.jpeg",
      "/event-photos/business-wall-pic1.png",
      "/event-photos/business-wall-pic2.png",
    ],
    date: "September 12, 2024",
    time: "Morning Hours",
    location: "Near Canteen, SVNIT",
    slug: "business-wall",
  },

  {
    id: 7,
    title: "The Lego Startup 2.0",
    tagline: "Build a Startup from Scratch",
    description:
      "An enhanced startup-building journey with structured milestones, expert mentorship and a final D-Day showcase.",
    year: 2026,
    status: "live",
    images: ["/lego-pics/pic5.png"],
    date: "Starts from January 1, 2026",
    time: "Will announce soon",
    location: "SVNIT Campus",
    slug: "lego-startup-2.0",
  },
];

const statusConfig = {
  upcoming: {
    label: "Coming Soon",
    className: "bg-[#FEF3C7] border-[#F5AB35] text-[#92400E]",
  },
  live: {
    label: "Live Now",
    className: "bg-[#DCFCE7] border-[#86EFAC] text-[#166534]",
  },
  past: {
    label: "Past Event",
    className: "bg-[#F5F5F4] border-[#D6D3D1] text-[#57534E]",
  },
};

function EventCard({ event, index }) {
  const [currentImage, setCurrentImage] = useState(0);

  const image = event.images?.[currentImage] || event.images?.[0];

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      whileHover={{
  y: -7,
  filter: "drop-shadow(0 20px 35px rgba(251,189,88,0.14))",
}}
      transition={{
        duration: 0.55,
        delay: index * 0.07,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
  group relative h-[520px] w-full
  transition-[filter] duration-500
"
      style={{ perspective: "1200px" }}
    >
      {/* 3D card wrapper */}
      <div
        className="
          relative h-full w-full
          transition-transform duration-700
          [transform-style:preserve-3d]
          group-hover:[transform:rotateY(180deg)]
        "
      >
        {/* ===================================================== */}
        {/* FRONT — IMAGE + EVENT NAME */}
        {/* ===================================================== */}

        <div
          className="
            absolute inset-0 h-full w-full
            overflow-hidden rounded-[28px]
            border border-[#E8E4DC]
            bg-[#FEFEFE]
            shadow-[0_8px_28px_rgba(17,15,10,0.06)]
            [backface-visibility:hidden]
          "
        >
          {/* Image */}
          <div className="relative h-full w-full overflow-hidden bg-[#E8E4DC]">
            <Image
              src={image}
              alt={event.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="
                object-cover
                transition-transform duration-700 ease-out
                group-hover:scale-[1.045]
              "
            />

            {/* Dark gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

            {/* Year */}
            <div className="absolute left-4 top-4">
              <span className="rounded-full border border-white/30 bg-black/75 px-3 py-1 text-xs font-extrabold text-white backdrop-blur-md">
                {event.year}
              </span>
            </div>

            {/* Status */}
            <div className="absolute right-4 top-4">
              <span
                className={`rounded-full border px-3 py-1 text-xs font-extrabold backdrop-blur-md ${
                  statusConfig[event.status]?.className
                }`}
              >
                {statusConfig[event.status]?.label}
              </span>
            </div>

            {/* Event title */}
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7">
              <span className="text-xs font-extrabold uppercase tracking-[0.12em] text-[#FBBD58]">
                E-Cell Initiative
              </span>

              <h3 className="mt-2 text-3xl font-black tracking-tight text-white sm:text-4xl">
                {event.title}
              </h3>

              <p className="mt-1 text-base font-bold text-white/85">
                {event.tagline}
              </p>

              {/* Hover hint */}
              <div className="mt-5 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white/70">
                <span>Hover to explore</span>
                <ArrowRight className="h-4 w-4" />
              </div>
            </div>

            {/* Carousel dots */}
            {event.images.length > 1 && (
              <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-1.5">
                {event.images.map((_, i) => (
                  <button
                    key={i}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImage(i);
                    }}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === currentImage
                        ? "w-6 bg-white"
                        : "w-1.5 bg-white/50"
                    }`}
                    aria-label={`Show image ${i + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>

        {/* ===================================================== */}
        {/* BACK — EVENT DETAILS */}
        {/* ===================================================== */}

        <div
          className="
            absolute inset-0 h-full w-full
            overflow-hidden rounded-[28px]
            border border-[#E8E4DC]
            bg-[#FEFEFE]
            shadow-[0_20px_50px_rgba(251,189,88,0.16)]
            [backface-visibility:hidden]
            [transform:rotateY(180deg)]
          "
        >
          <div className="flex h-full flex-col p-6 sm:p-7">

            {/* Top label */}
            <div className="mb-3">
              <span className="text-xs font-extrabold uppercase tracking-[0.12em] text-[#D97706]">
                E-Cell Initiative
              </span>
            </div>

            {/* Title */}
            <h3 className="text-2xl font-black tracking-tight text-[#111111] sm:text-3xl">
              {event.title}
            </h3>

            {/* Tagline */}
            <p className="mt-1 text-base font-bold text-[#D97706]">
              {event.tagline}
            </p>

            {/* Details */}
            <div className="mt-5 space-y-3 text-sm font-semibold text-[#7A756C]">

              <div className="flex items-start gap-2">
                <Calendar className="mt-0.5 h-4 w-4 shrink-0 text-[#D97706]" />
                <span>{event.date}</span>
              </div>

              {event.location && (
                <div className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#D97706]" />
                  <span>{event.location}</span>
                </div>
              )}

              {event.time && (
                <div className="flex items-start gap-2">
                  <span className="w-4 shrink-0 text-center text-[#D97706]">
                    ⏱
                  </span>
                  <span>{event.time}</span>
                </div>
              )}

            </div>

            {/* Divider */}
            <div className="my-5 h-px bg-[#E8E4DC]" />

            {/* Description */}
            <div className="flex-1 overflow-hidden">
              <p className="text-sm leading-relaxed text-[#7A756C]">
                {event.description}
              </p>
            </div>

            {/* Bottom CTA */}
            <div className="mt-5 border-t border-[#E8E4DC] pt-5">
              <Link
                href={`/events/${event.slug}`}
                className="
                  group/button
                  flex w-full items-center justify-center gap-2
                  rounded-2xl
                  border border-[#E8E4DC]
                  bg-[#FAF9F6]
                  px-5 py-3.5
                  text-sm font-black text-[#3D3A35]
                  transition-all duration-300
                  hover:border-[#F5AB35]
                  hover:bg-[#FBBD58]
                  hover:text-[#111111]
                "
              >
                Explore Event

                <ArrowRight
                  className="
                    h-4 w-4
                    transition-transform duration-300
                    group-hover/button:translate-x-1
                  "
                />
              </Link>
            </div>

          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function EventsLanding() {
  const [selectedYear, setSelectedYear] = useState("all");

  const years = useMemo(() => {
    return [
      "all",
      ...Array.from(new Set(eventsData.map((event) => event.year))).sort(
        (a, b) => b - a
      ),
    ];
  }, []);

  const filteredEvents = useMemo(() => {
    if (selectedYear === "all") return eventsData;

    return eventsData.filter(
      (event) => event.year === Number(selectedYear)
    );
  }, [selectedYear]);

  const featuredEvent = eventsData.find(
    (event) => event.status === "live"
  ) || eventsData.find((event) => event.status === "upcoming");

  const archiveEvents = filteredEvents.filter(
    (event) => event.id !== featuredEvent?.id
  );

  return (
    <main className="min-h-screen overflow-hidden bg-[#FAF9F6] text-[#111111]">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative overflow-hidden px-5 pb-20 pt-28 sm:px-8 sm:pb-28 sm:pt-36">

        {/* Decorative background */}
        <div className="pointer-events-none absolute inset-0">
          
          <div className="absolute right-[14%] top-[25%] h-2 w-2 rounded-full bg-[#9CA3AF] opacity-60" />
          <div className="absolute left-[20%] top-[55%] h-1.5 w-1.5 rounded-full bg-[#9CA3AF] opacity-50" />
          <div className="absolute right-[25%] top-[65%] h-2 w-2 rounded-full bg-[#FBBD58] opacity-50" />

          <div className="absolute left-[5%] top-[30%] h-32 w-32 rounded-full bg-[#FBBD58]/10 blur-3xl" />
          <div className="absolute right-[8%] top-[15%] h-40 w-40 rounded-full bg-[#E5E7EB]/40 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-5xl text-center">

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#F5AB35] bg-[#FEF3C7] px-4 py-2 text-xs font-extrabold text-[#111111]"
          >
            <Sparkles className="h-4 w-4 text-[#D97706]" />
            E-CELL SVNIT · ENTREPRENEURIAL INITIATIVES
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl font-black leading-[0.98] tracking-[-0.045em] sm:text-7xl lg:text-[88px]"
          >
            Ideas that{" "}
            <span className="inline-block rounded-[18px] bg-[#FBBD58] px-3 py-1">
              come alive.
            </span>
            <br />
            Experiences that inspire.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-7 max-w-2xl text-base font-medium leading-relaxed text-[#7A756C] sm:text-lg"
          >
            Explore the events, workshops, competitions and initiatives
            organized by E-Cell SVNIT — built to help students learn,
            connect and turn ideas into action.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-8 h-1 w-20 origin-center rounded-full bg-[#FBBD58]"
          />
        </div>
      </section>

      {/* =====================================================
          FEATURED EVENT
      ===================================================== */}
      {featuredEvent && selectedYear === "all" && (
        <section className="px-5 pb-20 sm:px-8 sm:pb-28">
          <div className="mx-auto max-w-7xl">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8 flex items-end justify-between gap-5"
            >
              <div>
                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#F5AB35] bg-[#FEF3C7] px-3.5 py-1.5 text-xs font-extrabold">
                  <Sparkles className="h-3.5 w-3.5 text-[#D97706]" />
                  Happening Now
                </div>

                <h2 className="text-3xl font-black tracking-tight sm:text-5xl">
                  Featured{" "}
                  <span className="rounded-lg bg-[#FBBD58] px-2">
                    Event
                  </span>
                </h2>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid overflow-hidden rounded-[32px] border border-[#E8E4DC] bg-white shadow-[0_12px_40px_rgba(17,15,10,0.07)] lg:grid-cols-[1.1fr_0.9fr]"
            >
              {/* Image */}
              <div className="relative min-h-[300px] overflow-hidden lg:min-h-[500px]">
                <Image
                  src={featuredEvent.images[0]}
                  alt={featuredEvent.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover transition-transform duration-1000 hover:scale-[1.03]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6">
                  <span className="rounded-full border border-white/30 bg-black/70 px-4 py-2 text-xs font-black text-white backdrop-blur-md">
                    {statusConfig[featuredEvent.status]?.label}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">
                <span className="text-xs font-black uppercase tracking-[0.15em] text-[#D97706]">
                  Featured Initiative
                </span>

                <h3 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
                  {featuredEvent.title}
                </h3>

                <p className="mt-2 text-lg font-bold text-[#D97706]">
                  {featuredEvent.tagline}
                </p>

                <p className="mt-6 leading-relaxed text-[#7A756C]">
                  {featuredEvent.description}
                </p>

                <div className="mt-7 space-y-3 text-sm font-semibold text-[#5F5B55]">
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-[#D97706]" />
                    {featuredEvent.date}
                  </div>

                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-[#D97706]" />
                    {featuredEvent.time}
                  </div>

                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-[#D97706]" />
                    {featuredEvent.location}
                  </div>
                </div>

                <Link
                  href={`/events/${featuredEvent.slug}`}
                  className="mt-9 inline-flex w-fit items-center gap-2 rounded-2xl bg-[#FBBD58] px-6 py-3.5 font-black transition-all duration-300 hover:-translate-y-1 hover:bg-[#F5AB35] hover:shadow-lg"
                >
                  Explore Event
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* =====================================================
          ALL EVENTS
      ===================================================== */}
      <section className="border-t border-[#EEEAE3] bg-[#FEFEFE] px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-7xl">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-between gap-7 md:flex-row md:items-end"
          >
            <div className="max-w-2xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#F5AB35] bg-[#FEF3C7] px-4 py-2 text-xs font-extrabold">
                <Sparkles className="h-4 w-4 text-[#D97706]" />
                Our Experiences
              </div>

              <h2 className="text-4xl font-black leading-tight tracking-tight sm:text-6xl">
                Explore Our{" "}
                <span className="rounded-xl bg-[#FBBD58] px-2">
                  Events
                </span>
              </h2>

              <p className="mt-4 max-w-xl text-base leading-relaxed text-[#7A756C] sm:text-lg">
                From flagship summits to hands-on workshops, discover the
                experiences that bring the E-Cell community together.
              </p>
            </div>

            {/* Year filter */}
            <div className="relative">
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="cursor-pointer appearance-none rounded-2xl border border-[#D4CFC6] bg-white px-5 py-3.5 pr-11 text-sm font-extrabold text-[#3D3A35] shadow-sm outline-none transition-all hover:border-[#FBBD58] focus:border-[#FBBD58] focus:ring-2 focus:ring-[#FBBD58]/20"
              >
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year === "all" ? "All Years" : year}
                  </option>
                ))}
              </select>

              <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#7A756C]" />
            </div>
          </motion.div>

          {/* Events */}
          <AnimatePresence mode="popLayout">
            <motion.div
              layout
              className="mt-12 grid grid-cols-1 gap-7 md:grid-cols-2"
            >
              {archiveEvents.map((event, index) => (
                <EventCard
                  key={event.id}
                  event={event}
                  index={index}
                />
              ))}
            </motion.div>
          </AnimatePresence>

          {archiveEvents.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-20 text-center"
            >
              <h3 className="text-2xl font-black">
                No events found
              </h3>

              <button
                onClick={() => setSelectedYear("all")}
                className="mt-4 font-bold text-[#D97706] hover:underline"
              >
                View all events →
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* =====================================================
          BOTTOM CTA
      ===================================================== */}
      <section className="px-5 py-20 sm:px-8 sm:py-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto max-w-5xl overflow-hidden rounded-[32px] border border-[#E8E4DC] bg-[#111111] px-7 py-14 text-center shadow-[0_20px_60px_rgba(17,15,10,0.12)] sm:px-12"
        >
          <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full bg-[#FBBD58] px-4 py-2 text-xs font-black text-[#111111]">
            <Sparkles className="h-4 w-4" />
            STAY CONNECTED
          </div>

          <h2 className="text-4xl font-black tracking-tight text-white sm:text-6xl">
            Something exciting is{" "}
            <span className="text-[#FBBD58]">coming.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-relaxed text-[#B8B5AF]">
            Keep an eye on our upcoming initiatives and be the first to
            experience what E-Cell SVNIT has in store.
          </p>

          <Link
            href="/"
            className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-[#FBBD58] px-6 py-3.5 font-black text-[#111111] transition-all duration-300 hover:-translate-y-1 hover:bg-[#F5AB35]"
          >
            Back to E-Cell
            <ArrowRight className="h-4 w-4 transition-transform duration-300
    group-hover/button:translate-x-1" />
          </Link>
        </motion.div>
      </section>
    </main>
  );
}