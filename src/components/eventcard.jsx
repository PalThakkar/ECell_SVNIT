"use client"

import React from "react"
import { BackgroundGradient } from "@/components/ui/background-gradient"
import Link from "next/link"
import Image from "next/image"

export function EventCard() {
  return (
    <BackgroundGradient className="max-w-md mx-auto rounded-2xl overflow-hidden">
      <div className="relative aspect-video">
        <Image
          src="/lego-bg.jpeg"
          alt="LEGO bricks background"
          layout="fill"
          objectFit="cover"
          className="transition-all duration-300 hover:scale-105"
        />
      </div>
      <div className="p-8 bg-black/95 backdrop-blur-sm">
        <h1 className="text-3xl font-light tracking-tight text-white mb-4">
          LEGO Startup
          <span className="block text-lg text-gray-400 mt-1">The Business Fair</span>
        </h1>
        <p className="text-sm leading-relaxed text-gray-300 font-light mb-6">
          Transform your ideas into a successful business with our 4-week,
          step-by-step event designed like building LEGO blocks. Starting October 21st.
        </p>
        <div className="flex items-center justify-between">
          <span className="text-red-400/90 font-medium text-sm">
            Registration Closed
          </span>
          <Link href="/lego" passHref>
            <button className="bg-white/10 hover:bg-white/20 text-white text-sm font-medium py-2.5 px-5 rounded-lg transition-all duration-300 backdrop-blur-sm">
              Learn More →
            </button>
          </Link>
        </div>
      </div>
    </BackgroundGradient>
  )
}