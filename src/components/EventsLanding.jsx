"use client";

import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, ChevronDown, Sparkles } from "lucide-react";
import Navbar from "@/components/home/Navbar";
import InteractiveParticleNetwork from "@/components/home/InteractiveParticleNetwork";
import HorizontalEventCard from "@/components/HorizontalEventCard";

export const eventsData = [
  {
    id: 1,
    title: "The Lego Startup",
    tagline: "Build a Startup from Scratch",
    description:
      "The Lego Startup is a structured, four-week startup-building journey where teams develop a startup idea from scratch. Each week focuses on a dedicated phase of startup development. After continuous evaluations, selected teams advance to the final D-Day, where they present their product and pitch their ideas to mentors, judges, and external visitors.",
    year: 2024,
    status: "past",
    images: ["/lego-pics/pic6.png", "/lego-pics/pic7.png", "/lego-pics/pic4.png"],
    date: "November 17, 2024",
    time: "10:00 AM - 6:00 PM",
    location: "Canteen Cements, S.V. National Institute of Technology",
    slug: "lego-startup-1.0",
  },
  {
    id: 2,
    title: "E-Summit 2026",
    tagline: "Where Ideas Meet Opportunity",
    description:
      "E-Summit is the flagship annual entrepreneurship event of E-Cell SVNIT, bringing together founders, investors, industry leaders, and students. The summit features keynote sessions, panel discussions, startup showcases, and networking opportunities aimed at inspiring innovation and collaboration.",
    year: 2026,
    status: "upcoming",
    images: ["/event-photos/bitcoin-workshop-pic-1.jpeg"],
    date: "Will announce soon",
    time: "Will announce soon",
    location: "Will announce soon",
    slug: "esummit-2026",
  },
  {
    id: 3,
    title: "Corporate Catastrophe",
    tagline: "An Escape Room Event",
    description:
      "Corporate Catastrophe is a high-energy escape room–style challenge where teams navigate through business crises, ethical dilemmas, and strategic puzzles. Participants must think critically, communicate effectively, and make quick decisions to ‘escape’ the corporate chaos within the given time.",
    year: 2025,
    status: "past",
    images: [
      "/event-photos/corporate_catastrophe_pic1.jpg",
      "/event-photos/corporate_catastrophe_pic2.jpg",
      "/event-photos/corporate_catastrophe_pic3.jpg",
    ],
    date: "March 20, 2025",
    time: "10:00 AM - 1:00 PM",
    location: "Old CRC, S.V. National Institute of Technology",
    slug: "corporate-catastrophe-1.0",
  },
  {
    id: 4,
    title: "Ignite 2025",
    tagline: "Fuel Your Entrepreneurial Spark",
    description:
      "Ignite 2025 is an entrepreneurial skill–based treasure hunt designed to spark business acumen through interactive challenges and problem-solving rounds. Teams move across campus, solving clues that test creativity, strategy, teamwork, and decision-making, leading them to the final destination.",
    year: 2025,
    status: "past",
    images: [
      "/event-photos/ignite_pic6.jpg",
      "/event-photos/ignite_pic3.jpeg",
      "/event-photos/ignite_pic1.jpg",
    ],
    date: "Oct 12, 2025",
    time: "9:00 AM - 12:00 PM",
    location: "Library Basement, SVNIT",
    slug: "ignite-2025",
  },
  {
    id: 5,
    title: "Bitcoin Workshop 2025",
    tagline: "Understanding Crypto & Blockchain",
    description:
      "The Bitcoin Workshop offers a practical introduction to cryptocurrencies and blockchain technology. Participants learn about Bitcoin fundamentals, wallets, transactions, security practices, and real-world use cases, making complex concepts accessible for beginners.",
    year: 2025,
    status: "past",
    images: [
      "/event-photos/bitcoin-workshop-pic-3.jpeg",
      "/event-photos/bitcoin-workshop-pic-5.jpeg",
      "/event-photos/bitcoin-workshop-pic-1.jpeg",
    ],
    date: "November 12, 2025",
    time: "6:00 PM - 8:00 PM",
    location:
      "COED 402, Seminar Hall, CSE Dept, S.V. National Institute of Technology",
    slug: "bitcoin-workshop-2025",
  },
  {
    id: 6,
    title: "Business Wall",
    tagline: "Express Your Entrepreneurial Ideas",
    description:
      "Business Wall was a vibrant morning initiative where students turned a simple board near the canteen into a colorful display of entrepreneurial ideas, motivation, and creativity—forming a collective mosaic of innovation and community spirit.",
    year: 2024,
    status: "past",
    images: [
      "/event-photos/business-wall-pic1.jpeg",
      "/event-photos/business-wall-pic1.png",
      "/event-photos/business-wall-pic2.png",
    ],
    date: "September 12, 2024",
    time: "Morning Hours",
    location: "Near Canteen, S.V. National Institute of Technology",
    slug: "business-wall",
  },
  {
    id: 7,
    title: "The Lego Startup 2.0",
    tagline: "Build a Startup from Scratch",
    description:
      "The Lego Startup 2.0 builds upon the first edition with a more competitive and refined startup development journey. Across four focused weeks, teams complete defined milestones before a final D-Day, where top teams present their products and pitch to mentors, judges, and an external audience.",
    year: 2026,
    status: "live",
    images: ["/lego-pics/pic5.png"],
    date: "Starts from January 1, 2026",
    time: "Will announce soon",
    location: "Will announce soon",
    slug: "lego-startup-2.0",
  },
];

export default function EventsLanding() {
  const [selectedYear, setSelectedYear] = useState("all");
  const [yearMenuOpen, setYearMenuOpen] = useState(false);

  const years = useMemo(() => {
    const yearSet = new Set(eventsData.map((event) => event.year));
    return ["all", ...Array.from(yearSet)].sort((a, b) => {
      if (a === "all") return -1;
      if (b === "all") return 1;
      return b - a;
    });
  }, []);

  const filteredEvents = useMemo(() => {
    let filtered = [...eventsData];

    if (selectedYear !== "all") {
      filtered = filtered.filter(
        (event) => event.year === parseInt(selectedYear, 10),
      );
    }

    filtered.sort((a, b) => {
      const statusOrder = { upcoming: 0, live: 1, past: 2 };
      return (
        statusOrder[a.status] - statusOrder[b.status] ||
        new Date(b.date) - new Date(a.date)
      );
    });

    return filtered;
  }, [selectedYear]);

  return (
    <div
      className="w-full min-h-screen relative"
      style={{
        backgroundColor: "#FEFEFE",
        color: "#111111",
        fontFamily: "var(--font-inter), system-ui, sans-serif",
      }}
    >
      <div className="fixed inset-0 pointer-events-none -z-20">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.06]"
          style={{ backgroundImage: "url('/e-cell-fam.jpg')" }}
        />
        <div
          className="absolute inset-0 opacity-[0.45]"
          style={{
            backgroundImage:
              "radial-gradient(#94A3B8 1.25px, transparent 1.25px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(254,254,254,0.3) 0%, rgba(250,249,246,0.85) 100%)",
          }}
        />
      </div>

      <Navbar />

      <InteractiveParticleNetwork className="w-full">
        <main className="w-full">
          {/* Hero */}
          <section
            className="relative pt-28 sm:pt-36 pb-10 sm:pb-14 overflow-hidden"
            style={{ backgroundColor: "rgba(254,254,254,0.50)" }}
          >
            <div
              className="absolute top-16 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] rounded-full pointer-events-none -z-10"
              style={{
                background:
                  "radial-gradient(circle, rgba(251,189,88,0.12) 0%, transparent 70%)",
              }}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55 }}
                className="max-w-3xl"
              >
                <div
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-[15px] font-extrabold mb-3 sm:mb-4"
                  style={{
                    background: "#FEF3C7",
                    border: "1px solid #F5AB35",
                    color: "#111111",
                  }}
                >
                  <Calendar
                    className="w-4 h-4 sm:w-5 sm:h-5"
                    style={{ color: "#D97706" }}
                  />
                  <span>Workshops · Summits · Hackathons</span>
                </div>

                <h1
                  className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.12] mb-3 sm:mb-4"
                  style={{
                    color: "#111111",
                    fontFamily: "var(--font-jakarta), system-ui, sans-serif",
                  }}
                >
                  Transformative{" "}
                  <span
                    className="inline-block px-2 py-0.5 rounded-lg"
                    style={{ background: "#FBBD58", color: "#111111" }}
                  >
                    Events
                  </span>
                </h1>

                <p
                  className="text-base sm:text-xl leading-relaxed font-medium"
                  style={{ color: "#7A756C" }}
                >
                  Join workshops, competitions, and flagship summits designed to
                  inspire, educate, and empower the next generation of founders
                  at SVNIT.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Filter + list */}
          <section
            className="relative pb-20 sm:pb-28 overflow-hidden"
            style={{ backgroundColor: "rgba(250,249,246,0.50)" }}
          >
            <div
              className="absolute bottom-0 right-0 w-[28rem] h-[28rem] rounded-full pointer-events-none -z-10"
              style={{
                background:
                  "radial-gradient(circle, rgba(251,189,88,0.08) 0%, transparent 70%)",
              }}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8 sm:mb-10">
                <div
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-extrabold w-fit"
                  style={{
                    background: "#FEF3C7",
                    border: "1px solid #F5AB35",
                    color: "#111111",
                  }}
                >
                  <Sparkles
                    className="w-4 h-4"
                    style={{ color: "#D97706" }}
                  />
                  <span>
                    {filteredEvents.length} event
                    {filteredEvents.length === 1 ? "" : "s"}
                  </span>
                </div>

                <div className="relative self-start sm:self-auto">
                  <button
                    type="button"
                    onClick={() => setYearMenuOpen((open) => !open)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-extrabold text-sm transition-all"
                    style={{
                      background: "#FEFEFE",
                      border: "1px solid #D4CFC6",
                      color: "#111111",
                      boxShadow: "0 2px 8px rgba(17,15,10,0.06)",
                    }}
                  >
                    {selectedYear === "all" ? "All Years" : selectedYear}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${yearMenuOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  <AnimatePresence>
                    {yearMenuOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.15 }}
                        className="absolute right-0 z-20 mt-2 min-w-[160px] overflow-hidden rounded-xl"
                        style={{
                          background: "#FEFEFE",
                          border: "1px solid #E8E4DC",
                          boxShadow: "0 12px 32px rgba(17,15,10,0.12)",
                        }}
                      >
                        {years.map((year) => (
                          <button
                            key={year}
                            type="button"
                            onClick={() => {
                              setSelectedYear(year);
                              setYearMenuOpen(false);
                            }}
                            className="block w-full px-4 py-2.5 text-left text-sm font-semibold transition-colors"
                            style={{
                              color:
                                selectedYear === year ? "#111111" : "#3D3A35",
                              background:
                                selectedYear === year
                                  ? "rgba(251,189,88,0.25)"
                                  : "transparent",
                            }}
                          >
                            {year === "all" ? "All Years" : year}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              <div className="space-y-6 sm:space-y-8">
                {filteredEvents.length > 0 ? (
                  <AnimatePresence mode="popLayout">
                    {filteredEvents.map((event, index) => (
                      <motion.div
                        key={event.id}
                        layout
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        transition={{ duration: 0.35, delay: index * 0.04 }}
                      >
                        <HorizontalEventCard event={event} />
                      </motion.div>
                    ))}
                  </AnimatePresence>
                ) : (
                  <div
                    className="text-center py-16 rounded-2xl sm:rounded-3xl"
                    style={{
                      background: "#FEFEFE",
                      border: "1px solid #E8E4DC",
                      boxShadow: "0 8px 28px rgba(17,15,10,0.07)",
                    }}
                  >
                    <h3
                      className="text-xl font-black"
                      style={{ color: "#111111" }}
                    >
                      No events found
                    </h3>
                    <p
                      className="mt-2 font-medium"
                      style={{ color: "#7A756C" }}
                    >
                      There are no events for the selected year.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSelectedYear("all")}
                      className="mt-5 inline-flex items-center px-5 py-2.5 rounded-xl font-black text-sm"
                      style={{
                        background: "#FBBD58",
                        color: "#111111",
                        border: "1px solid #F5AB35",
                      }}
                    >
                      View all events
                    </button>
                  </div>
                )}
              </div>
            </div>
          </section>
        </main>
      </InteractiveParticleNetwork>
    </div>
  );
}
