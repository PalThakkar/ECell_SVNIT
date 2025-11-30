"use client";

import { useState, useEffect } from "react";
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Calendar, Clock, MapPin } from 'lucide-react';
import Link from 'next/link';

// Sample event data - replace with actual data from your API/database
const eventsData = [
  {
    id: 1,
    title: 'Startup Bootcamp',
    tagline: 'From Idea to MVP in 48 Hours',
    description: 'An intensive weekend workshop where participants will learn the fundamentals of building a startup, from ideation to creating a minimum viable product.',
    year: 2025,
    status: 'upcoming',
    images: [
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80',
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    ],
    date: 'March 15-16, 2025',
    time: '10:00 AM - 6:00 PM',
    location: 'Tech Hub, S.V. National Institute of Technology',
    slug: 'startup-bootcamp'
  },
  {
    id: 2,
    title: 'E-Summit 2025',
    tagline: 'Where Ideas Meet Opportunity',
    description: 'Annual entrepreneurship summit featuring keynote speakers, panel discussions, and networking opportunities with industry leaders and investors.',
    year: 2025,
    status: 'live',
    images: [
      'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80',
      'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    ],
    date: 'February 20-22, 2025',
    time: '9:00 AM - 8:00 PM',
    location: 'Main Auditorium, S.V. National Institute of Technology',
    slug: 'esummit-2025'
  },
  {
    id: 3,
    title: 'Hack the Future',
    tagline: '24-Hour Hackathon',
    description: 'A 24-hour coding competition where participants will solve real-world problems using technology and innovation.',
    year: 2024,
    status: 'past',
    images: [
      'https://images.unsplash.com/photo-1551033406-611cf9a28f67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      'https://images.unsplash.com/photo-1581092921461-39b2f2f99d9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    ],
    date: 'October 10-11, 2024',
    time: '12:00 PM - 12:00 PM',
    location: 'Computer Center, S.V. National Institute of Technology',
    slug: 'hack-the-future-2024'
  },
  // Add more events as needed
];

const EventsPage = () => {
  const [selectedYear, setSelectedYear] = useState('all');
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [activeImageIndex, setActiveImageIndex] = useState({});

  // Get unique years for filter
  const years = ['all', ...new Set(eventsData.map(event => event.year))].sort((a, b) => b - a);

  // Filter events based on selected year
  useEffect(() => {
    let filtered = [...eventsData];
    
    if (selectedYear !== 'all') {
      filtered = filtered.filter(event => event.year === parseInt(selectedYear));
    }

    // Sort events: upcoming > live > past, then by date
    filtered.sort((a, b) => {
      const statusOrder = { 'upcoming': 0, 'live': 1, 'past': 2 };
      return statusOrder[a.status] - statusOrder[b.status] || new Date(a.date) - new Date(b.date);
    });

    setFilteredEvents(filtered);
    
    // Initialize active image index for each event
    const initialIndices = {};
    filtered.forEach(event => {
      initialIndices[event.id] = 0;
    });
    setActiveImageIndex(initialIndices);
  }, [selectedYear]);

  const nextImage = (eventId) => {
    setActiveImageIndex(prev => ({
      ...prev,
      [eventId]: (prev[eventId] + 1) % eventsData.find(e => e.id === eventId).images.length
    }));
  };

  const prevImage = (eventId) => {
    setActiveImageIndex(prev => ({
      ...prev,
      [eventId]: (prev[eventId] - 1 + eventsData.find(e => e.id === eventId).images.length) % 
                eventsData.find(e => e.id === eventId).images.length
    }));
  };

  const getStatusBadge = (status = '') => {
    const statusClasses = {
      upcoming: 'bg-[#fff3cd] text-[#856404]',
      live: 'bg-[#d4edda] text-[#155724]',
      past: 'bg-gray-100 text-gray-800'
    };

    const statusText = {
      upcoming: 'Coming Soon',
      live: 'Live Now',
      past: 'Past Event'
    };
    
    // Default to past if status is not recognized
    const badgeStatus = status in statusClasses ? status : 'past';

    return (
      <span className={`px-3 py-1 text-xs font-semibold rounded-full ${statusClasses[badgeStatus]} uppercase`}>
        {statusText[badgeStatus]}
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-[95%] mx-auto">
        <AnimatePresence mode="wait">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h1 
            className="text-4xl font-black tracking-tight text-black sm:text-5xl md:text-6xl mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
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
        </div>

        {/* Year Filter */}
        <div className="flex justify-end mb-8">
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
        </div>

        {/* Events Grid */}
        <div className="space-y-1">
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event) => (
              <motion.article 
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.3 }
                }}
                exit={{ opacity: 0, y: -20 }}
                className={`bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border-2 border-[#fbbd58]/25 hover:border-[#fbbd58]/50 ${
                  event.status === 'live' ? 'ring-2 ring-green-500' : ''
                }`}
              >
                <div className="md:flex h-full">
                  {/* Image Carousel */}
                  <div className="md:w-1/2 relative h-80 md:h-auto overflow-hidden">
                    <div className="relative w-full h-full">
                      <Image
                        src={event.images[activeImageIndex[event.id] || 0]}
                        alt={`${event.title} - ${activeImageIndex[event.id] + 1}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority
                      />
                      {/* Navigation Arrows */}
                      <button 
                        onClick={() => prevImage(event.id)}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
                        aria-label="Previous image"
                      >
                        <ChevronLeft size={24} />
                      </button>
                      <button 
                        onClick={() => nextImage(event.id)}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
                        aria-label="Next image"
                      >
                        <ChevronRight size={24} />
                      </button>
                      {/* Image Indicators */}
                      {event.images.length > 1 && (
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                          {event.images.map((_, index) => (
                            <button
                              key={index}
                              onClick={(e) => {
                                e.stopPropagation();
                                setActiveImageIndex(prev => ({ ...prev, [event.id]: index }));
                              }}
                              className={`w-2.5 h-2.5 rounded-full transition-all ${
                                activeImageIndex[event.id] === index 
                                  ? 'bg-white w-6 scale-110' 
                                  : 'bg-white bg-opacity-50 hover:bg-opacity-75'
                              }`}
                              aria-label={`View image ${index + 1}`}
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {/* Event Content */}
                  <div className="p-6 md:p-8 md:w-1/2 flex flex-col h-full">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-sm font-medium text-blue-600">{event.year}</span>
                      {getStatusBadge(event.status)}
                    </div>
                    
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">{event.title}</h2>
                    <p className="text-lg text-[#e6a12b] font-semibold mb-4">{event.tagline}</p>
                    
                    <p className="text-gray-700 mb-6 flex-grow leading-relaxed">{event.description}</p>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center text-gray-700">
                        <Calendar className="w-5 h-5 mr-2 text-[#fbbd58]" />
                        <span className="font-medium">{event.date}</span>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <Clock className="w-5 h-5 mr-2 text-[#fbbd58]" />
                        <span className="font-medium">{event.time}</span>
                      </div>
                      <div className="flex items-start text-gray-700">
                        <MapPin className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0 text-[#fbbd58]" />
                        <span className="font-medium">{event.location}</span>
                      </div>
                    </div>
                    
                    <div className="mt-auto">
                      <Link
                        href={`/events/${event.slug}`}
                        className="inline-flex items-center px-6 py-3 border-2 border-transparent text-base font-semibold rounded-lg text-white bg-[#fbbd58] hover:bg-[#e6a12b] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#fbbd58] transition-all duration-200 transform hover:-translate-y-0.5 shadow-md hover:shadow-lg"
                      >
                        Explore More
                        <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))
          ) : (
            <motion.div 
              className="text-center py-16 bg-gray-50 rounded-2xl"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-semibold text-gray-800">No events found</h3>
              <p className="mt-2 text-gray-600">There are no events scheduled for the selected year.</p>
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedYear('all');
                }}
                className="mt-4 px-5 py-2.5 text-sm font-medium text-[#fbbd58] hover:text-[#e6a12b] transition-colors cursor-pointer"
              >
                View all events
              </button>
            </motion.div>
          )}
        </div>
      </AnimatePresence>
      </div>
    </div>
  );
};

export default EventsPage;
