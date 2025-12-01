"use client";

import React, { useMemo, useState, useEffect } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import HorizontalEventCard from "@/components/HorizontalEventCard";

// Sample event data - replace with actual data from your API/database
const eventsData = [
  {
    id: 1,
    title: "Startup Bootcamp",
    tagline: "From Idea to MVP in 48 Hours",
    description: "An intensive weekend workshop where participants will learn the fundamentals of building a startup, from ideation to creating a minimum viable product.",
    year: 2025,
    status: "upcoming",
    images: [
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    ],
    date: "March 15-16, 2025",
    time: "10:00 AM - 6:00 PM",
    location: "Tech Hub, S.V. National Institute of Technology",
    slug: "startup-bootcamp"
  },
  {
    id: 2,
    title: "E-Summit 2025",
    tagline: "Where Ideas Meet Opportunity",
    description: "Annual entrepreneurship summit featuring keynote speakers, panel discussions, and networking opportunities with industry leaders and investors.",
    year: 2025,
    status: "live",
    images: [
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    ],
    date: "February 20-22, 2025",
    time: "9:00 AM - 8:00 PM",
    location: "Main Auditorium, S.V. National Institute of Technology",
    slug: "esummit-2025"
  },
  {
    id: 3,
    title: "Hack the Future",
    tagline: "24-Hour Hackathon",
    description: "A 24-hour coding competition where participants will solve real-world problems using technology and innovation.",
    year: 2024,
    status: "past",
    images: [
      "https://images.unsplash.com/photo-1551033406-611cf9a28f67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      "https://images.unsplash.com/photo-1581092921461-39b2f2f99d9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    ],
    date: "October 10-11, 2024",
    time: "12:00 PM - 12:00 PM",
    location: "Computer Center, S.V. National Institute of Technology",
    slug: "hack-the-future-2024"
  },
  // Add more events as needed
];

export default function EventsLanding() {
  const [selectedYear, setSelectedYear] = useState("all");
  const [isMounted, setIsMounted] = useState(false);
  const currentYear = new Date().getFullYear();

  // Get unique years for filter
  const years = useMemo(() => {
    const yearSet = new Set(eventsData.map(event => event.year));
    return ['all', ...Array.from(yearSet)].sort((a, b) => b - a);
  }, []);

  // Filter events based on selected year
  const filteredEvents = useMemo(() => {
    let filtered = [...eventsData];
    
    if (selectedYear !== 'all') {
      filtered = filtered.filter(event => event.year === parseInt(selectedYear));
    }

    // Sort events: upcoming > live > past, then by date
    filtered.sort((a, b) => {
      const statusOrder = { 'upcoming': 0, 'live': 1, 'past': 2 };
      return statusOrder[a.status] - statusOrder[b.status] || new Date(b.date) - new Date(a.date);
    });

    return filtered;
  }, [selectedYear]);

  // Set mounted state to prevent hydration issues
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // Or a loading spinner
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-[87%] mx-auto">
        <AnimatePresence mode="wait">
          {/* Header */}
          <motion.header 
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h1 
              className="text-4xl font-black tracking-tight text-gray-900 sm:text-5xl md:text-6xl mb-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Events
            </motion.h1>
            <motion.div 
              className="h-1 w-20 bg-[#fbbd58] rounded-full mx-auto mb-6"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            />
            <motion.p 
              className="max-w-3xl mx-auto text-lg md:text-xl text-gray-700"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Join us for exciting events and workshops designed to inspire, educate, and empower the next generation of entrepreneurs. 
              From ideation to execution, we've got you covered.
            </motion.p>
          </motion.header>

          {/* Year Filter */}
          <motion.div 
            className="flex justify-end mb-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="relative w-48">
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="block w-full px-4 py-2.5 pr-8 text-gray-800 bg-white border-2 border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#fbbd58] focus:border-[#fbbd58] transition-colors cursor-pointer font-medium"
              >
                <option value="all">All Years</option>
                {years.map(year => (
                  year !== 'all' && (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  )
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </motion.div>

          {/* Events Grid - Vertical Stack */}
          <motion.div 
            className="space-y-8 w-[100%] mx-auto "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {filteredEvents.length > 0 ? (
              <AnimatePresence>
                {filteredEvents.map((event, index) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="w-full"
                  >
                    <HorizontalEventCard event={event} />
                  </motion.div>
                ))}
              </AnimatePresence>
            ) : (
              <motion.div 
                className="text-center py-16 bg-white rounded-2xl shadow-lg"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-semibold text-gray-800">No events found</h3>
                <p className="mt-2 text-gray-600">There are no events scheduled for the selected year.</p>
                <button 
                  onClick={() => setSelectedYear('all')}
                  className="mt-4 px-5 py-2.5 text-sm font-medium text-[#fbbd58] hover:text-[#e6a12b] transition-colors cursor-pointer"
                >
                  View all events
                </button>
              </motion.div>
            )}
          </motion.div>
          
        </AnimatePresence>
      </div>
    </div>
  );
}
