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
    <EventsPageMain />
  );
}
