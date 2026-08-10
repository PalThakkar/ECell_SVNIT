"use client";
import React from "react";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="bg-zinc-900 text-white py-20 px-6 sm:px-8 lg:px-12 relative overflow-hidden border-t border-zinc-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Left Column: Typography & Content */}
        <div className="lg:col-span-7 space-y-6">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
            Ignite <br />
            <span className="text-yellow-400 underline decoration-yellow-400 decoration-4 underline-offset-8">
              Innovation
            </span>
            , <br />
            Inspire <br />
            <span className="text-yellow-400 underline decoration-yellow-400 decoration-4 underline-offset-8">
              Entrepreneurship
            </span>
          </h2>

          <p className="text-zinc-300 text-base sm:text-lg leading-relaxed max-w-2xl">
            E-cell is the{" "}
            <strong className="text-white font-semibold">
              heartbeat of Entrepreneurial Spirit
            </strong>{" "}
            on Campus. We are dedicated to empowering students to transform
            their visionary ideas into{" "}
            <span className="text-yellow-400 font-semibold">
              Successful Ventures
            </span>{" "}
            by offering the right mix of Networking, Mentorship, and Resources.
          </p>

          {/* Callout Quote */}
          <div className="border-l-4 border-yellow-400 pl-4 py-1 italic text-zinc-400 text-sm sm:text-base">
            From Concept to Reality, We Bridge the Gap with Entrepreneurial Flair.
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Link
              href="/join"
              className="px-8 py-3.5 bg-yellow-400 text-zinc-950 font-bold text-sm sm:text-base rounded-full hover:bg-yellow-300 transition-colors duration-300 shadow-lg shadow-yellow-400/10"
            >
              Get Started
            </Link>
            <Link
              href="/about"
              className="px-8 py-3.5 bg-transparent border-2 border-zinc-700 text-white font-bold text-sm sm:text-base rounded-full hover:border-yellow-400 hover:text-yellow-400 transition-colors duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Right Column: Static Network Node Visual */}
        <div className="lg:col-span-5 relative flex items-center justify-center min-h-[380px]">
          
          {/* Subtle Dark Glow Backdrop */}
          <div className="absolute w-72 h-72 bg-yellow-500/10 rounded-full blur-3xl -z-0" />

          <div className="relative w-full max-w-md h-[360px] z-10">
            
            {/* Connecting Line */}
            <div className="absolute top-[180px] right-6 w-32 h-[2px] bg-gradient-to-r from-yellow-400/60 to-transparent rotate-45 origin-left" />

            {/* Central Node: E-cell SVNIT Circle */}
            <div className="absolute top-[120px] left-[130px] w-32 h-32 rounded-full bg-yellow-400 text-zinc-950 flex flex-col items-center justify-center text-center shadow-[0_0_30px_rgba(250,204,21,0.25)] z-20">
              <span className="font-extrabold text-lg leading-tight">E-cell</span>
              <span className="text-xs font-semibold uppercase tracking-wider text-zinc-800">
                SVNIT
              </span>
            </div>

            {/* Top Card: Innovation */}
            <div className="absolute top-4 left-6 bg-zinc-800/90 border-l-4 border-yellow-400 border-y border-r border-zinc-700/80 rounded-xl p-4 w-44 shadow-xl">
              <h4 className="font-bold text-white text-sm sm:text-base">Innovation</h4>
              <p className="text-zinc-400 text-xs mt-0.5">Transform Ideas</p>
            </div>

            {/* Right Card: Network */}
            <div className="absolute top-20 right-2 bg-zinc-800/90 border-l-4 border-yellow-400 border-y border-r border-zinc-700/80 rounded-xl p-4 w-44 shadow-xl">
              <h4 className="font-bold text-white text-sm sm:text-base">Network</h4>
              <p className="text-zinc-400 text-xs mt-0.5">Connect & Grow</p>
            </div>

            {/* Bottom Card: Mentorship */}
            <div className="absolute bottom-6 left-2 bg-zinc-800/90 border-l-4 border-yellow-400 border-y border-r border-zinc-700/80 rounded-xl p-4 w-44 shadow-xl">
              <h4 className="font-bold text-white text-sm sm:text-base">Mentorship</h4>
              <p className="text-zinc-400 text-xs mt-0.5">Expert Guidance</p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}