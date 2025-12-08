"use client";
import React, { useState } from "react";
import Image from "next/image";

const PremiumHeroSection = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: ((e.clientX - rect.left) / rect.width - 0.5) * 2,
      y: ((e.clientY - rect.top) / rect.height - 0.5) * 2,
    });
  };

  const patchBlocks = [
    { text: "Have an idea?", icon: "💡", delay: "0s" },
    { text: "Build real-world solutions", icon: "🔨", delay: "0.1s" },
    { text: "Startup?", icon: "🚀", delay: "0.2s" },
    { text: "Solopreneurship vs Entrepreneurship", icon: "🎯", delay: "0.3s" },
    { text: "We are the platform for you!", icon: "🌟", delay: "0.4s" },
  ];

  return (
    <section
      className="relative min-h-screen overflow-hidden flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
      onMouseMove={handleMouseMove}
    >
      {/* Blurred event background */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/ecell11.jpeg"
          alt="E-Cell Event"
          fill
          className="object-cover blur-[2px] brightness-[0.8] saturate-80 "
          priority
        />
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-gray-900/70 via-gray-800/60 to-gray-900/70" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-950/40 via-transparent to-transparent" />

      

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Patch-style blocks cover component */}
          <div className="animate-fade-in-left">
            

            <div className="grid gap-3 mb-10">
              {patchBlocks.map((block, idx) => (
                <div
                  key={idx}
                  style={{
                    animation: `slide-up 0.6s ease-out ${block.delay}`,
                    animationFillMode: "both",
                  }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-yellow-300/5 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative px-5 sm:px-6 py-4 rounded-2xl bg-white/8 backdrop-blur-xl border border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-300 hover:bg-white/12 cursor-pointer group">
                    {/* Patch accent line */}
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-yellow-400 to-yellow-600 rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="flex items-center gap-3 sm:gap-4">
                      <span className="text-2xl sm:text-3xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        {block.icon}
                      </span>
                      <span className="text-base sm:text-lg lg:text-xl font-bold text-white group-hover:text-yellow-300 transition-colors duration-300">
                        {block.text}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA buttons */}
            <div
              className="flex flex-col sm:flex-row gap-4 animate-fade-in"
              style={{ animationDelay: "0.5s" }}
            >
              <button className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 font-bold text-lg rounded-2xl shadow-lg shadow-yellow-400/30 hover:shadow-xl hover:shadow-yellow-400/50 hover:-translate-y-1 transition-all duration-300">
                Join Us
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-md text-yellow-300 font-bold text-lg rounded-2xl border border-yellow-400/40 hover:bg-white/20 hover:border-yellow-400/60 hover:-translate-y-1 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>

          
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-yellow-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>

      <style jsx>{`
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-left {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fade-in-right {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes float-stat {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-12px);
          }
        }

        .animate-fade-in-left {
          animation: fade-in-left 0.8s ease-out;
        }

        .animate-fade-in-right {
          animation: fade-in-right 0.8s ease-out;
        }

        .animate-fade-in {
          animation: fade-in-left 0.8s ease-out;
        }

        .perspective {
          perspective: 1200px;
        }
      `}</style>
    </section>
  );
};

export default PremiumHeroSection;
