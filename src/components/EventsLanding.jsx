"use client";

import React, { useMemo, useState, useEffect } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import HorizontalEventCard from "@/components/HorizontalEventCard";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@heroui/dropdown";
import { Button } from "@heroui/button";
import { ChevronDown } from "lucide-react";

// Sample event data - replace with actual data from your API/database
const eventsData = [
{
id: 1,
title: "The Lego Startup",
tagline: "Build a Startup from Scratch",
description:
"The Lego Startup is a structured, four-week startup-building journey where teams develop a startup idea from scratch. Each week focuses on a dedicated phase of startup development. After continuous evaluations, selected teams advance to the final D-Day, where they present their product and pitch their ideas to mentors, judges, and external visitors.",
year: 2025,
status: "past",
images: [
"https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1470&q=80",
"https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1471&q=80",
"https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1470&q=80"
],
date: "Feb 17, 2025",
time: "10:00 AM - 6:00 PM",
location: "Canteen Cements, S.V. National Institute of Technology",
slug: "lego-startup-1.0"
},

{
id: 2,
title: "E-Summit 2026",
tagline: "Where Ideas Meet Opportunity",
description:
"E-Summit is the flagship annual entrepreneurship event of E-Cell SVNIT, bringing together founders, investors, industry leaders, and students. The summit features keynote sessions, panel discussions, startup showcases, and networking opportunities aimed at inspiring innovation and collaboration.",
year: 2026,
status: "upcoming",
images: [
"https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1470&q=80",
"https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1471&q=80",
"https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1470&q=80"
],
date: "Will announce soon",
time: "Will announce soon",
location: "Will announce soon",
slug: "esummit-2026"
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
"https://images.unsplash.com/photo-1551033406-611cf9a28f67?auto=format&fit=crop&w=687&q=80",
"https://images.unsplash.com/photo-1581092921461-39b2f2f99d9a?auto=format&fit=crop&w=1470&q=80",
"https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1470&q=80"
],
date: "March 20, 2025",
time: "10:00 AM - 1:00 PM",
location: "Old CRC, S.V. National Institute of Technology",
slug: "corporate-catastrophe-1.0"
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
"https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1470&q=80",
"https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1470&q=80",
"https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1470&q=80"
],
date: "Oct 12, 2025",
time: "9:00 AM - 12:00 PM",
location: "Library Basement, SVNIT",
slug: "ignite-2025"
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
"https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&w=1470&q=80",
"https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1470&q=80",
"https://images.unsplash.com/photo-1624996752380-8ec242e0f85d?auto=format&fit=crop&w=1470&q=80"
],
date: "November 12, 2025",
time: "6:00 PM - 8:00 PM",
location: "COED 402, Seminar Hall, CSE Dept, S.V. National Institute of Technology",
slug: "bitcoin-workshop-2025"
},

{
id: 6,
title: "The Lego Startup 2.0",
tagline: "Build a Startup from Scratch",
description:
"The Lego Startup 2.0 builds upon the first edition with a more competitive and refined startup development journey. Across four focused weeks, teams complete defined milestones before a final D-Day, where top teams present their products and pitch to mentors, judges, and an external audience.",
year: 2026,
status: "upcoming",
images: [
"https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1470&q=80",
"https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1471&q=80",
"https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1470&q=80"
],
date: "Will announce soon",
time: "Will announce soon",
location: "Will announce soon",
slug: "lego-startup-2.0"
}
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
            From ideation to execution, we have got you covered.
          </motion.p>
        </motion.header>

        {/* Year Filter */}
        <motion.div 
          className="flex justify-end mb-8"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Dropdown>
            <DropdownTrigger>
              <Button
                variant="bordered"
                className="px-6 py-6 text-gray-800 bg-white border-2 border-gray-200 rounded-lg shadow-sm hover:border-[#fbbd58] hover:bg-gray-50 transition-all duration-200 font-semibold text-base"
                endContent={<ChevronDown className="w-5 h-5 text-gray-600" />}
              >
                {selectedYear === 'all' ? 'All Years' : selectedYear}
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              aria-label="Year filter"
              selectionMode="single"
              selectedKeys={new Set([selectedYear.toString()])}
              onSelectionChange={(keys) => {
                const selected = Array.from(keys)[0];
                setSelectedYear(selected);
              }}
              className="min-w-[200px] bg-white rounded-xl shadow-xl border border-gray-100"
            >
              {years.map(year => (
                <DropdownItem 
                  key={year} 
                  className="text-gray-800 hover:bg-[#fbbd58]/10 hover:text-[#fbbd58] font-medium py-3 px-4 rounded-lg transition-all"
                >
                  {year === 'all' ? 'All Years' : year}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
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
      </div>
    </div>
  );
}
