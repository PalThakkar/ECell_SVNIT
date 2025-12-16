"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Lightbulb,Laptop, Hammer, Rocket, Target, Award } from "lucide-react";

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
    { text: "Have an idea?", icon: Lightbulb, delay: "0s" },
    { text: "Create real-world Solutions", icon: Laptop, delay: "0.4s" },
    { text: "SVNIT's Startup Ecosystem!", icon: Award, delay: "0.2s" },
    { text: "Solopreneurship vs Entrepreneurship", icon: Target, delay: "0.3s" },
    { text: "Build. Learn. Launch.", icon: Rocket, delay: "0.4s" },
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

      

      <div className="max-w-7xl mx-auto relative z-10 w-full h-screen">
        {/* Circular floating blocks positioned across the screen */}
        
        {/* Block 1: Top Left */}
        <div
          style={{
            animation: `slide-up 0.6s ease-out ${patchBlocks[0].delay}, float-bounce 3s ease-in-out infinite`,
            animationFillMode: "both",
            animationDelay: `${patchBlocks[0].delay}, 0.6s`,
          }}
          className="absolute top-[12%] left-[5%] group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-yellow-300/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          <div className="relative w-36 h-36 sm:w-40 sm:h-40 lg:w-44 lg:h-44 rounded-full bg-white/10 backdrop-blur-xl border-2 border-yellow-400/30 hover:border-yellow-400/50 transition-all duration-300 hover:bg-white/15 cursor-pointer flex flex-col items-center justify-center gap-3 group-hover:scale-105">
            {React.createElement(patchBlocks[0].icon, { className: "w-10 h-10 sm:w-12 sm:h-12 text-yellow-400 group-hover:text-yellow-300 transition-all duration-300", strokeWidth: 2 })}
            <span className="text-xs sm:text-sm lg:text-base font-bold text-white text-center px-6 group-hover:text-yellow-300 transition-colors duration-300">
              {patchBlocks[0].text}
            </span>
          </div>
        </div>

        {/* Block 2: Middle Left */}
        <div
          style={{
            animation: `slide-up 0.6s ease-out ${patchBlocks[1].delay}, float-bounce 3.5s ease-in-out infinite`,
            animationFillMode: "both",
            animationDelay: `${patchBlocks[1].delay}, 0.8s`,
          }}
          className="absolute top-[51%] left-[3%] group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-yellow-300/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          <div className="relative w-36 h-36 sm:w-40 sm:h-40 lg:w-44 lg:h-44 rounded-full bg-white/10 backdrop-blur-xl border-2 border-yellow-400/30 hover:border-yellow-400/50 transition-all duration-300 hover:bg-white/15 cursor-pointer flex flex-col items-center justify-center gap-3 group-hover:scale-105">
            {React.createElement(patchBlocks[1].icon, { className: "w-10 h-10 sm:w-12 sm:h-12 text-yellow-400 group-hover:text-yellow-300 transition-all duration-300", strokeWidth: 2 })}
            <span className="text-xs sm:text-sm lg:text-base font-bold text-white text-center px-6 group-hover:text-yellow-300 transition-colors duration-300">
              {patchBlocks[1].text}
            </span>
          </div>
        </div>

        {/* Block 3: Center (slightly left) */}
        <div
          style={{
            animation: `slide-up 0.6s ease-out ${patchBlocks[2].delay}, float-bounce 3.2s ease-in-out infinite`,
            animationFillMode: "both",
            animationDelay: `${patchBlocks[2].delay}, 1s`,
          }}
          className="absolute top-[24%] left-[38%] group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-yellow-300/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          <div className="relative w-36 h-36 sm:w-40 sm:h-40 lg:w-44 lg:h-44 rounded-full bg-white/10 backdrop-blur-xl border-2 border-yellow-400/30 hover:border-yellow-400/50 transition-all duration-300 hover:bg-white/15 cursor-pointer flex flex-col items-center justify-center gap-3 group-hover:scale-105">
            {React.createElement(patchBlocks[2].icon, { className: "w-10 h-10 sm:w-12 sm:h-12 text-yellow-400 group-hover:text-yellow-300 transition-all duration-300", strokeWidth: 2 })}
            <span className="text-xs sm:text-sm lg:text-base font-bold text-white text-center px-6 group-hover:text-yellow-300 transition-colors duration-300">
              {patchBlocks[2].text}
            </span>
          </div>
        </div>

        {/* Block 4: Top Right */}
        <div
          style={{
            animation: `slide-up 0.6s ease-out ${patchBlocks[3].delay}, float-bounce 3.8s ease-in-out infinite`,
            animationFillMode: "both",
            animationDelay: `${patchBlocks[3].delay}, 1.2s`,
          }}
          className="absolute top-[15%] right-[5%] group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-yellow-300/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          <div className="relative w-36 h-36 sm:w-40 sm:h-40 lg:w-44 lg:h-44 rounded-full bg-white/10 backdrop-blur-xl border-2 border-yellow-400/30 hover:border-yellow-400/50 transition-all duration-300 hover:bg-white/15 cursor-pointer flex flex-col items-center justify-center gap-3 group-hover:scale-105">
            {React.createElement(patchBlocks[3].icon, { className: "w-10 h-10 sm:w-12 sm:h-12 text-yellow-400 group-hover:text-yellow-300 transition-all duration-300", strokeWidth: 2 })}
            <span className="text-[10px] sm:text-xs lg:text-sm font-bold text-white text-center px-4 group-hover:text-yellow-300 transition-colors duration-300">
              {patchBlocks[3].text}
            </span>
          </div>
        </div>

        {/* Block 5: Bottom Right */}
        <div
          style={{
            animation: `slide-up 0.6s ease-out ${patchBlocks[4].delay}, float-bounce 3.3s ease-in-out infinite`,
            animationFillMode: "both",
            animationDelay: `${patchBlocks[4].delay}, 1.4s`,
          }}
          className="absolute top-[55%] right-[6%] group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-yellow-300/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          <div className="relative w-36 h-36 sm:w-40 sm:h-40 lg:w-44 lg:h-44 rounded-full bg-white/10 backdrop-blur-xl border-2 border-yellow-400/30 hover:border-yellow-400/50 transition-all duration-300 hover:bg-white/15 cursor-pointer flex flex-col items-center justify-center gap-3 group-hover:scale-105">
            {React.createElement(patchBlocks[4].icon, { className: "w-10 h-10 sm:w-12 sm:h-12 text-yellow-400 group-hover:text-yellow-300 transition-all duration-300", strokeWidth: 2 })}
            <span className="text-xs sm:text-sm lg:text-base font-bold text-white text-center px-6 group-hover:text-yellow-300 transition-colors duration-300">
              {patchBlocks[4].text}
            </span>
          </div>
        </div>

        {/* CTA buttons - Bottom Center */}
        <div
          className="absolute bottom-24 left-1/2 transform -translate-x-1/2 flex flex-col sm:flex-row gap-4 animate-fade-in"
          style={{ animationDelay: "0.5s" }}
        >
          <button className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 font-bold text-lg rounded-2xl shadow-lg shadow-yellow-400/30 hover:shadow-xl hover:shadow-yellow-400/50 hover:-translate-y-1 transition-all duration-300">
            Join Us
          </button>
          <button className="px-8 py-4 bg-white/10 backdrop-blur-md text-yellow-300 font-bold text-lg rounded-2xl border border-yellow-400/40 hover:bg-white/20 hover:border-yellow-400/60 hover:-translate-y-1 transition-all duration-300">
            Learn More
          </button>
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

        @keyframes float-bounce {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
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
