"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

export function EventCard({ event }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="w-full max-w-full mx-auto rounded-xl overflow-hidden shadow-xl hover:shadow-2xl bg-white border border-gray-100 transition-all duration-300 group"
    >
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={event.image}
          alt={event.title}
          layout="fill"
          objectFit="cover"
          className="transition-all duration-500 group-hover:scale-110"
          priority
        />
        {/* Year Badge */}
        {event.year && (
          <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-black/80 backdrop-blur-sm text-yellow-400 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full text-xs sm:text-sm font-bold">
            {event.year}
          </div>
        )}
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      <div className="p-4 sm:p-5 md:p-6 bg-white">
        <div className="mb-3 sm:mb-4">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-black mb-1 sm:mb-1.5 group-hover:text-yellow-500 transition-colors duration-300 line-clamp-1">
            {event.title}
          </h1>
          <span className="block text-sm sm:text-base md:text-lg text-gray-600 font-medium line-clamp-1">
            {event.subtitle}
          </span>
        </div>
        
        <p className="text-xs sm:text-sm md:text-base leading-relaxed text-gray-700 mb-4 sm:mb-5 line-clamp-2">
          {event.description}
        </p>
        
        <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-gray-100 gap-2 sm:gap-3">
          <span className={`font-semibold text-xs sm:text-sm px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full whitespace-nowrap ${
            event.status === "Registration Closed" || event.status === "Past Event"
              ? "bg-red-50 text-red-600"
              : event.status === "Coming Soon" || event.status === "Opening Soon"
              ? "bg-green-50 text-green-600"
              : "bg-blue-50 text-blue-600"
          }`}>
            {event.status}
          </span>

          <Link href={event.link} className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-amber-500 text-black text-xs sm:text-sm md:text-base font-bold py-2 sm:py-2.5 px-4 sm:px-5 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg shadow-yellow-400/30 flex items-center gap-1.5 sm:gap-2 whitespace-nowrap group/btn">
            <span className="hidden sm:inline">Explore</span>
            <span className="sm:hidden">View</span>
            <span className="transform group-hover/btn:translate-x-1 transition-transform duration-300">→</span>
          </Link>
        </div>
      </div>
    </motion.div>
  )
}