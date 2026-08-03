import React from 'react';

const HeroSectionAlt = () => {
  return (
    <section className="min-h-screen bg-[#111215] text-white flex items-center justify-center px-6 md:px-16 py-16 font-sans">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Content Column */}
        <div className="lg:col-span-7 space-y-8">
          
          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.1]">
            Ignite <br />
            <span className="text-gray-400 underline decoration-gray-500 underline-offset-8">
              Innovation,
            </span> <br />
            Inspire <br />
            <span className="text-gray-400 underline decoration-gray-500 underline-offset-8">
              Entrepreneurship
            </span>
          </h1>

          {/* Body Paragraph */}
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-xl">
            E-cell is the <strong className="text-white font-semibold">heartbeat of Entrepreneurial Spirit</strong> on Campus. 
            We are dedicated to empowering students to transform their visionary ideas into{' '}
            <span className="text-gray-400 font-medium">Successful Ventures</span> by offering 
            the right mix of Networking, Mentorship, and Resources.
          </p>

          {/* Subtext Quote Bar */}
          <div className="flex items-stretch gap-4">
            <div className="w-1.5 bg-gray-500 rounded-full"></div>
            <p className="italic text-gray-400 text-sm sm:text-base py-1">
              From Concept to Reality, We Bridge the Gap with Entrepreneurial Flair.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-2">
            <button className="bg-gray-500 hover:bg-gray-400 text-white font-medium px-8 py-3.5 rounded-full transition-colors duration-200 shadow-lg">
              Get Started
            </button>
            <button className="bg-transparent hover:bg-gray-800 text-white font-medium px-8 py-3.5 rounded-full border border-gray-600 transition-colors duration-200">
              Learn More
            </button>
          </div>

        </div>

        {/* Right Graphic Column */}
        <div className="lg:col-span-5 relative flex items-center justify-center min-h-[420px]">
          
          {/* Subtle Glow SVG line in the background */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 400">
            <line x1="280" y1="210" x2="340" y2="270" stroke="#4B5563" strokeWidth="2" strokeDasharray="4 4" opacity="0.5" />
          </svg>

          {/* Center E-cell Hub Node */}
          <div className="z-10 w-36 h-36 rounded-full bg-[#24272C] flex flex-col items-center justify-center text-center p-2 shadow-[0_0_40px_rgba(156,163,175,0.2)] border border-gray-600/40">
            <span className="font-bold text-gray-100 text-lg tracking-wide">E-cell</span>
            <span className="text-xs text-gray-400 tracking-wider">SVNIT</span>
          </div>

          {/* Node Card: Innovation */}
          <div className="absolute top-4 left-4 bg-[#1F2227]/90 border border-gray-700/80 backdrop-blur-md rounded-xl p-4 w-44 shadow-xl">
            <h3 className="text-sm font-semibold text-gray-100">Innovation</h3>
            <p className="text-xs text-gray-400 mt-0.5">Transform Ideas</p>
          </div>

          {/* Node Card: Network */}
          <div className="absolute top-20 right-0 bg-[#1F2227]/90 border border-gray-700/80 backdrop-blur-md rounded-xl p-4 w-44 shadow-xl">
            <h3 className="text-sm font-semibold text-gray-100">Network</h3>
            <p className="text-xs text-gray-400 mt-0.5">Connect & Grow</p>
          </div>

          {/* Node Card: Mentorship */}
          <div className="absolute bottom-6 left-2 bg-[#1F2227]/90 border border-gray-700/80 backdrop-blur-md rounded-xl p-4 w-44 shadow-xl">
            <h3 className="text-sm font-semibold text-gray-100">Mentorship</h3>
            <p className="text-xs text-gray-400 mt-0.5">Expert Guidance</p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default HeroSectionAlt;