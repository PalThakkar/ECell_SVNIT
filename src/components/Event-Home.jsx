"use client";

import React, { useState, useMemo, useRef, useEffect } from "react";
import { EventCard } from "@/components/eventcard";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiChevronLeft,
  FiChevronRight,
  FiChevronDown,
  FiCheck,
} from "react-icons/fi";

const events = [
  // events details
  {
    id: 1,
    title: "LEGO Startup",
    subtitle: "The Business Fair",
    image: "/lego-bg.jpeg",
    description:
      "Transform your ideas into a successful business with our 4-week, step-by-step event designed like building LEGO blocks. Starting October 21st.",
    status: "Registration Closed",
    link: "/lego", // pages link
    year: 2024,
  },
  {
    id: 2,
    title: "MVP Workshop",
    subtitle: "Build Your Product",
    image: "/mvp blog.jpg",
    description:
      "Learn how to build and validate your Minimum Viable Product in this hands-on workshop. Join us for an intensive session.",
    status: "Coming Soon",
    link: "/events",
    year: 2025,
  },
  {
    id: 3,
    title: "E-Summit 2025",
    subtitle: "Annual Entrepreneurship Summit",
    image: "/entre.png",
    description:
      "Join us for the biggest entrepreneurship event of the year featuring keynotes, workshops, and networking opportunities.",
    status: "Opening Soon",
    link: "/events",
    year: 2025,
  },
  {
    id: 4,
    title: "Innovation Challenge",
    subtitle: "Pitch Your Ideas",
    image: "/lego-bg.jpeg",
    description:
      "Present your innovative solutions to industry experts and investors. Win funding and mentorship opportunities.",
    status: "Past Event",
    link: "/events",
    year: 2023,
  },
  {
    id: 5,
    title: "Startup Bootcamp",
    subtitle: "Accelerate Your Growth",
    image: "/entre.png",
    description:
      "Intensive 2-week program to accelerate your startup journey with expert mentorship and resources.",
    status: "Past Event",
    link: "/events",
    year: 2024,
  },
  {
    id: 6,
    title: "Tech Talk Series",
    subtitle: "Industry Insights",
    image: "/lego-bg.jpeg",
    description:
      "Monthly tech talks featuring industry leaders sharing their experiences and insights on emerging technologies.",
    status: "Past Event",
    link: "/events",
    year: 2024,
  },
  {
    id: 7,
    title: "Hackathon 2024",
    subtitle: "Code for Change",
    image: "/entre.png",
    description:
      "48-hour coding marathon to build innovative solutions for real-world problems. Win prizes and recognition.",
    status: "Past Event",
    link: "/events",
    year: 2024,
  },
];

const EVENTS_PER_PAGE = 3; // no. of cards per page

export default function EventsPageMain() {
  const [selectedYear, setSelectedYear] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // extract unique years and sort them
  const availableYears = useMemo(() => {
    const years = [...new Set(events.map((event) => event.year))].sort(
      (a, b) => b - a
    );
    return years;
  }, []);

  // filter events based on selected year
  const filteredEvents = useMemo(() => {
    if (selectedYear === "all") return events;
    return events.filter((event) => event.year === selectedYear);
  }, [selectedYear]);

  // reset to page 1 when year filter changes
  React.useEffect(() => {
    setCurrentPage(1);
  }, [selectedYear]);

  // calculate pagination
  const totalPages = Math.ceil(filteredEvents.length / EVENTS_PER_PAGE);
  const startIndex = (currentPage - 1) * EVENTS_PER_PAGE;
  const endIndex = startIndex + EVENTS_PER_PAGE;
  const currentEvents = filteredEvents.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleYearSelect = (year) => {
    setSelectedYear(year);
    setIsDropdownOpen(false);
  };

  const getDisplayText = () => {
    if (selectedYear === "all") return "All";
    return selectedYear;
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-4 pb-3 md:pt-6 md:pb-4">
        <div className="max-w-none w-[98%] mx-auto px-0 md:px-2 lg:px-4">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight font-extrabold font-sans mb-2">
                <span className="text-black">Events</span>
                {/* <span className="text-yellow-400 inline-block border-b-4 border-yellow-300/50 pb-1">
                  Workshops
                </span> */}
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm sm:text-base md:text-lg text-gray-700 max-w-3xl mx-auto mb-2"
            >
              Join us for exciting{" "}
              <span className="font-bold text-black">events and workshops</span>{" "}
              designed to inspire, educate, and empower the next generation of{" "}
              <span className="font-bold text-yellow-400">entrepreneurs</span>.
              From ideation to execution, we have got you covered.
            </motion.p>

            {/* Decorative Elements */}
            <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-200/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-32 h-32 bg-yellow-300/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </section>

      {/* Year Filter Section */}
      <section className="py-3 sticky top-0 z-40 border-b border-gray-200/50 backdrop-blur-sm bg-white/80">
        <div className="max-w-none w-[98%] mx-auto px-0 md:px-2 lg:px-4">
          <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="text-xs sm:text-sm font-semibold text-gray-700 uppercase tracking-wider">
                Year:
              </span>
            </div>

            {/* Custom Dropdown */}
            <div className="relative w-full sm:w-auto" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full sm:w-auto min-w-[140px] sm:min-w-[160px] appearance-none select-none bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-bold text-sm px-4 py-2 rounded-lg shadow-lg shadow-yellow-400/30 transition-all duration-300 hover:shadow-xl flex items-center justify-between gap-2 group relative"
                type="button"
              >
                <span>{getDisplayText()}</span>
                <motion.div
                  className="inline-flex items-center"
                  animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FiChevronDown className="w-4 h-4" aria-hidden="true" />
                </motion.div>
              </button>

              {/* Dropdown Menu */}
              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full mt-2 w-full bg-white rounded-lg shadow-2xl border border-gray-200 overflow-hidden z-50"
                  >
                    <div className="py-1">
                      {/* All Events Option */}
                      <button
                        onClick={() => handleYearSelect("all")}
                        className={`w-full px-4 py-2.5 text-left text-sm font-medium transition-all duration-200 flex items-center justify-between group ${
                          selectedYear === "all"
                            ? "bg-yellow-50 text-yellow-600"
                            : "text-gray-700 hover:bg-gray-50"
                        }`}
                      >
                        <span>All</span>
                        {selectedYear === "all" && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{
                              type: "spring",
                              stiffness: 500,
                              damping: 25,
                            }}
                          >
                            <FiCheck className="w-4 h-4 text-yellow-600" />
                          </motion.div>
                        )}
                      </button>

                      {/* Divider */}
                      <div className="h-px bg-gray-200 my-1"></div>

                      {/* Year Options */}
                      {availableYears.map((year) => (
                        <button
                          key={year}
                          onClick={() => handleYearSelect(year)}
                          className={`w-full px-4 py-2.5 text-left text-sm font-medium transition-all duration-200 flex items-center justify-between group ${
                            selectedYear === year
                              ? "bg-yellow-50 text-yellow-600"
                              : "text-gray-700 hover:bg-gray-50"
                          }`}
                        >
                          <span>{year}</span>
                          {selectedYear === year && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{
                                type: "spring",
                                stiffness: 500,
                                damping: 25,
                              }}
                            >
                              <FiCheck className="w-4 h-4 text-yellow-600" />
                            </motion.div>
                          )}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Events Grid Section */}
      <section className="py-4 md:py-5 min-h-[400px] ml-0 mr-0">
        <div className="max-w-none w-[100%] mx-auto px-0 md:px-2 lg:px-4 ">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${selectedYear}-${currentPage}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {filteredEvents.length > 0 ? (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
                    {currentEvents.map((event, index) => (
                      <motion.div
                        key={event.id}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex justify-center"
                      >
                        <EventCard event={event} />
                      </motion.div>
                    ))}
                  </div>

                  {/* Pagination */}
                  {totalPages > 1 && (
                    <div className="mt-4 flex items-center justify-center gap-1.5">
                      {/* Previous Button */}
                      <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className={`p-1.5 rounded-lg transition-all duration-300 ${
                          currentPage === 1
                            ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                            : "bg-gray-200 text-black hover:bg-yellow-400 hover:shadow-lg transform hover:scale-105"
                        }`}
                        aria-label="Previous page"
                      >
                        <FiChevronLeft size={16} />
                      </button>

                      {/* Page Numbers */}
                      <div className="flex gap-1.5">
                        {Array.from(
                          { length: totalPages },
                          (_, i) => i + 1
                        ).map((page) => (
                          <button
                            key={page}
                            onClick={() => handlePageChange(page)}
                            className={`min-w-[32px] h-8 rounded-lg font-semibold text-xs transition-all duration-300 transform hover:scale-105 ${
                              currentPage === page
                                ? "bg-gradient-to-r from-yellow-400 to-yellow-500 text-black shadow-lg shadow-yellow-400/30 scale-105"
                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                            }`}
                          >
                            {page}
                          </button>
                        ))}
                      </div>

                      {/* Next Button */}
                      <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className={`p-1.5 rounded-lg transition-all duration-300 ${
                          currentPage === totalPages
                            ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                            : "bg-gray-200 text-black hover:bg-yellow-400 hover:shadow-lg transform hover:scale-105"
                        }`}
                        aria-label="Next page"
                      >
                        <FiChevronRight size={16} />
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-8"
                >
                  <div className="inline-block p-4 bg-yellow-50 rounded-2xl">
                    <p className="text-base text-gray-600 mb-1">
                      No events found for this year
                    </p>
                    <p className="text-xs text-gray-500">
                      Try selecting a different year
                    </p>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {[
              { label: "Total Events", value: events.length.toString() },
              {
                label: "Years Active",
                value: availableYears.length.toString(),
              },
              { label: "Participants", value: "5000+" },
              { label: "Success Stories", value: "150+" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-yellow-400 mb-0.5">
                  {stat.value}
                </div>
                <div className="text-[10px] md:text-xs text-gray-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
