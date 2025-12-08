"use client";
import React from "react";
import PremiumHeroSection from "./PremiumHeroSection";

const HeroSection = () => {
  return (
    <>
      <PremiumHeroSection />
      <section className="min-h-screen relative overflow-hidden flex items-center py-8">
        <div className="max-w-6xl mx-auto px-8 relative z-10">
          {/* Background Elements */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Large Yellow Circle */}
            <div className="absolute top-[10%] right-[15%] w-72 h-72 rounded-full bg-gradient-radial from-yellow-400/10 via-yellow-400/5 to-transparent animate-float"></div>

            {/* Small Yellow Circle */}
            {/* <div className="absolute bottom-[20%] left-[10%] w-36 h-36 rounded-full bg-gradient-radial from-yellow-400/8 to-transparent animate-float-reverse"></div> */}

            {/* Accent Line */}
            <div className="absolute top-1/2 right-0 w-48 h-0.5 bg-gradient-to-r from-transparent via-yellow-600 to-transparent transform -translate-y-1/2 rotate-45"></div>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
            {/* Text Content */}
            <div className="animate-slide-in-left">
              <h1 className="text-5xl lg:text-6xl font-black leading-tight mb-6 text-gray-900">
                <span className="block">
                  Ignite{" "}
                  <span className="relative">
                    <span className="bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent">
                      Innovation
                    </span>
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 to-yellow-300 opacity-30 rounded"></div>
                  </span>
                  ,
                </span>
                <span className="block">
                  Inspire{" "}
                  <span className="relative">
                    <span className="bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent">
                      Entrepreneurship
                    </span>
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 to-yellow-300 opacity-30 rounded"></div>
                  </span>
                </span>
              </h1>

              <p className="text-xl leading-relaxed text-gray-600 mb-8 max-w-[90%]">
                E-cell is the{" "}
                <span className="font-bold text-gray-800">
                  heartbeat of Entrepreneurial Spirit
                </span>{" "}
                on Campus. We are dedicated to empowering students to transform
                their visionary ideas into{" "}
                <span className="text-yellow-500 font-semibold">
                  Successful Ventures
                </span>{" "}
                by offering the right mix of Networking, Mentorship, and
                Resources.
              </p>

              <div className="mb-10 py-4 border-l-4 border-yellow-400 pl-4">
                <span className="italic text-lg text-gray-600 font-medium">
                  From Concept to Reality, We Bridge the Gap with
                  Entrepreneurial Flair.
                </span>
              </div>

              <div className="flex gap-4 flex-wrap">
                <button className="bg-gradient-to-r from-yellow-400 to-yellow-300 text-gray-900 font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-xl hover:shadow-yellow-400/40 shadow-lg shadow-yellow-400/30">
                  Get Started
                </button>
                <button className="bg-transparent text-gray-900 border-2 border-gray-900 font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:bg-gray-900 hover:text-white hover:transform hover:-translate-y-1">
                  Learn More
                </button>
              </div>
            </div>

            {/* Visual Elements */}
            <div className="relative h-96 lg:h-[500px] animate-slide-in-right">
              <div className="relative w-full h-full">
                {/* Floating Cards */}
                <div className="absolute top-[10%] left-[10%] bg-white rounded-2xl p-6 shadow-xl border border-gray-100 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl border-l-4 border-l-yellow-400 animate-float">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Innovation
                  </h3>
                  <p className="text-gray-600">Transform Ideas</p>
                </div>

                <div className="absolute top-[20%] right-[5%] bg-white rounded-2xl p-6 shadow-xl border border-gray-100 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl border-l-4 border-l-yellow-400 animate-float-reverse">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Network
                  </h3>
                  <p className="text-gray-600">Connect & Grow</p>
                </div>

                <div className="absolute bottom-[25%] left-[5%] bg-white rounded-2xl p-6 shadow-xl border border-gray-100 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl border-l-4 border-l-yellow-400 animate-float">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Mentorship
                  </h3>
                  <p className="text-gray-600">Expert Guidance</p>
                </div>

                {/* Central Element */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-yellow-400 to-yellow-300 rounded-full w-36 h-36 flex flex-col items-center justify-center shadow-2xl shadow-yellow-400/30 animate-pulse">
                  <div className="text-center text-gray-900">
                    <span className="text-2xl font-black block">E-cell</span>
                    <small className="text-sm font-semibold opacity-80">
                      SVNIT
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes float {
            0%,
            100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-20px);
            }
          }

          @keyframes float-reverse {
            0%,
            100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(20px);
            }
          }

          @keyframes slide-in-left {
            from {
              opacity: 0;
              transform: translateX(-50px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes slide-in-right {
            from {
              opacity: 0;
              transform: translateX(50px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          .animate-float {
            animation: float 4s ease-in-out infinite;
          }

          .animate-float-reverse {
            animation: float-reverse 5s ease-in-out infinite;
          }

          .animate-slide-in-left {
            animation: slide-in-left 1s ease-out;
          }

          .animate-slide-in-right {
            animation: slide-in-right 1s ease-out;
          }

          .bg-gradient-radial {
            background: radial-gradient(
              circle,
              currentColor 0%,
              transparent 70%
            );
          }
        `}</style>
      </section>
    </>
  );
};

export default HeroSection;
