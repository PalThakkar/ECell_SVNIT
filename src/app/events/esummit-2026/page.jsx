"use client";
import React, { useState } from "react";
import { Trophy, Medal, PartyPopper, Clock, Sparkles, Lock, Calendar, MapPin, Target } from "lucide-react";

const ESummitPage = () => {
  // Registration status: 'coming-soon' | 'live' | 'closed'
  const [registrationStatus, setRegistrationStatus] = useState('live');
  const googleFormLink = "https://forms.google.com/your-form-link"; // Update with actual Google Form link

  // Winners data - can be easily updated
  const winners = [
    { position: 1, teamName: "InnovateTech Solutions", icon: Trophy },
    { position: 2, teamName: "NextGen Ventures", icon: Medal },
    { position: 3, teamName: "StartUp Mavericks", icon: Medal },
  ];

  // Event photos - Update with actual image paths
  const eventPhotos = [
    { src: "/images/events/esummit-1.jpg", orientation: "horizontal" },
    { src: "/images/events/esummit-2.jpg", orientation: "vertical" },
    { src: "/images/events/esummit-3.jpg", orientation: "horizontal" },
    { src: "/images/events/esummit-4.jpg", orientation: "vertical" },
    { src: "/images/events/esummit-5.jpg", orientation: "horizontal" },
    { src: "/images/events/esummit-6.jpg", orientation: "horizontal" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-yellow-300/5"></div>

        {/* Floating Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-400/10 rounded-full animate-bounce-slow"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-yellow-300/10 rounded-full animate-pulse-slow"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-yellow-400/10 rounded-full animate-float"></div>
          <div
            className="absolute bottom-32 right-1/3 w-24 h-24 bg-yellow-300/10 rounded-full animate-bounce-slow"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="animate-slide-down">
              <h1 className="text-6xl md:text-8xl font-black mb-6 text-gray-900">
                <span className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 bg-clip-text text-transparent animate-gradient">
                  E-SUMMIT
                </span>
                <span
                  className="block text-4xl md:text-6xl mt-4 font-bold animate-fade-in-up"
                  style={{ animationDelay: "0.3s" }}
                >
                  2026
                </span>
              </h1>
              <p
                className="text-2xl md:text-3xl text-gray-700 font-medium max-w-4xl mx-auto animate-fade-in-up"
                style={{ animationDelay: "0.6s" }}
              >
                Entrepreneurship Summit - E-Cell SVNIT
              </p>
              <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-yellow-300 mx-auto mt-8 rounded-full animate-expand"></div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-slide-in-left">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-yellow-200/50 hover:shadow-3xl hover:scale-105 transition-all duration-500">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Ignite Your Entrepreneurial Journey
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  E-Summit 2026 is the flagship entrepreneurship event of E-Cell
                  SVNIT, bringing together aspiring entrepreneurs, industry
                  leaders, investors, and mentors. Experience cutting-edge
                  competitions, transformative workshops, and invaluable
                  networking opportunities that will shape your entrepreneurial
                  future.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div
                  className="bg-gradient-to-br from-yellow-400/20 to-yellow-300/10 rounded-xl p-6 border border-yellow-300/30 hover:scale-105 transition-transform duration-300 animate-fade-in-up"
                  style={{ animationDelay: "0.2s" }}
                >
                  <div className="text-3xl font-black text-yellow-600 mb-2">
                    1000+
                  </div>
                  <div className="text-gray-800 font-semibold">
                    Expected Participants
                  </div>
                </div>
                <div
                  className="bg-gradient-to-br from-yellow-400/20 to-yellow-300/10 rounded-xl p-6 border border-yellow-300/30 hover:scale-105 transition-transform duration-300 animate-fade-in-up"
                  style={{ animationDelay: "0.4s" }}
                >
                  <div className="text-3xl font-black text-yellow-600 mb-2">
                    ₹10k+
                  </div>
                  <div className="text-gray-800 font-semibold">
                    Total Prize Pool
                  </div>
                </div>
              </div>
            </div>

            <div className="relative animate-slide-in-right">
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-yellow-200/50">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Benefits at a Glance
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4 hover:bg-yellow-50 p-3 rounded-lg transition-colors duration-300">
                    <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-white font-bold text-sm animate-pulse-gentle">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Networking
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Connect with entrepreneurs, investors, mentors, and
                        industry experts
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 hover:bg-yellow-50 p-3 rounded-lg transition-colors duration-300">
                    <div
                      className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-white font-bold text-sm animate-pulse-gentle"
                      style={{ animationDelay: "0.5s" }}
                    >
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Market Awareness
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Gain insights into current market landscape and
                        opportunities
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 hover:bg-yellow-50 p-3 rounded-lg transition-colors duration-300">
                    <div
                      className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-white font-bold text-sm animate-pulse-gentle"
                      style={{ animationDelay: "1s" }}
                    >
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Investment Opportunities
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Access potential investors and pitch your business ideas
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 hover:bg-yellow-50 p-3 rounded-lg transition-colors duration-300">
                    <div
                      className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-white font-bold text-sm animate-pulse-gentle"
                      style={{ animationDelay: "1.5s" }}
                    >
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Skill Development
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Hands-on workshops in marketing, finance, and leadership
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 animate-fade-in-up">
              Events at a <span className="text-yellow-500">Glance</span>
            </h2>
            <p
              className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              Dive into our comprehensive lineup of competitions, talks, and
              networking opportunities
            </p>
          </div>

          {/* Coming Soon Message - Remove this section when ready to show events */}
          <div className="text-center py-20 animate-fade-in-up">
            <div className="w-32 h-32 bg-gradient-to-br from-yellow-400 to-yellow-300 rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse-gentle">
              <PartyPopper className="w-16 h-16 text-white" />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Will Announce Soon, Stay Tuned!
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Exciting events are being planned. Check back soon for more details!
            </p>
          </div>

          {/* Event Cards - Uncomment this section when ready to showcase events
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
              className="group hover:transform hover:-translate-y-3 transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="bg-gradient-to-br from-yellow-50 to-white rounded-2xl p-8 shadow-lg border-2 border-yellow-200/50 group-hover:shadow-2xl group-hover:border-yellow-300 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-300 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">🏛️</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  The Economic Apex
                </h3>
                <p className="text-gray-700 mb-4">
                  Policy, Power & Allocation - An intense simulation where
                  participants step into roles of industry leaders and
                  policymakers to negotiate and draft a mock Union Budget.
                </p>
                <div className="text-yellow-600 font-bold">
                  Venue: To be announced soon
                </div>
              </div>
            </div>

            <div
              className="group hover:transform hover:-translate-y-3 transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="bg-gradient-to-br from-yellow-50 to-white rounded-2xl p-8 shadow-lg border-2 border-yellow-200/50 group-hover:shadow-2xl group-hover:border-yellow-300 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-300 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">📋</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  B-Plan Competition
                </h3>
                <p className="text-gray-700 mb-4">
                  Present comprehensive business plans to a panel of expert
                  judges. Showcase your innovative ideas, market research, and
                  strategic vision for building successful ventures.
                </p>
                <div className="text-yellow-600 font-bold">
                  Venue: To be announced soon
                </div>
              </div>
            </div>

            <div
              className="group hover:transform hover:-translate-y-3 transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="bg-gradient-to-br from-yellow-50 to-white rounded-2xl p-8 shadow-lg border-2 border-yellow-200/50 group-hover:shadow-2xl group-hover:border-yellow-300 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-300 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">🎰</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Vegas Street
                </h3>
                <p className="text-gray-700 mb-4">
                  Experience the thrill of business strategy through gamified
                  competitions and interactive challenges that test your
                  entrepreneurial instincts and decision-making skills.
                </p>
                <div className="text-yellow-600 font-bold">
                  Venue: To be announced soon
                </div>
              </div>
            </div>

            <div
              className="group hover:transform hover:-translate-y-3 transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="bg-gradient-to-br from-yellow-50 to-white rounded-2xl p-8 shadow-lg border-2 border-yellow-200/50 group-hover:shadow-2xl group-hover:border-yellow-300 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-300 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Networking Lunch/Dinner
                </h3>
                <p className="text-gray-700 mb-4">
                  Professional networking opportunities for students with
                  industry leaders, successful alumni, and established
                  entrepreneurs in an informal setting.
                </p>
                <div className="text-yellow-600 font-bold">
                  Venue: To be announced soon
                </div>
              </div>
            </div>

            <div
              className="group hover:transform hover:-translate-y-3 transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: "0.5s" }}
            >
              <div className="bg-gradient-to-br from-yellow-50 to-white rounded-2xl p-8 shadow-lg border-2 border-yellow-200/50 group-hover:shadow-2xl group-hover:border-yellow-300 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-300 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">🎓</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Edify</h3>
                <p className="text-gray-700 mb-4">
                  Educational workshops and masterclasses designed to enhance
                  your knowledge in key areas of entrepreneurship, innovation,
                  and business development.
                </p>
                <div className="text-yellow-600 font-bold">
                  Venue: To be announced soon
                </div>
              </div>
            </div>

            <div
              className="group hover:transform hover:-translate-y-3 transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: "0.6s" }}
            >
              <div className="bg-gradient-to-br from-yellow-50 to-white rounded-2xl p-8 shadow-lg border-2 border-yellow-200/50 group-hover:shadow-2xl group-hover:border-yellow-300 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-300 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">🦄</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Unicorn Talks
                </h3>
                <p className="text-gray-700 mb-4">
                  Inspiring keynote sessions featuring successful entrepreneurs,
                  unicorn founders, and industry visionaries sharing their
                  journeys, insights, and lessons learned.
                </p>
                <div className="text-yellow-600 font-bold">
                  Venue: To be announced soon
                </div>
              </div>
            </div>
          </div>
          */}
        </div>
      </section>

      {/* Winners / Hall of Fame Section */}
      <section className="py-20 bg-gradient-to-br from-yellow-50 via-white to-yellow-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 animate-fade-in-up">
              Hall of <span className="text-yellow-500">Fame</span>
            </h2>
            <p
              className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              Celebrating our champions and their entrepreneurial excellence
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {winners.map((winner, index) => (
              <div
                key={winner.position}
                className="group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div
                  className={`relative bg-white rounded-3xl p-8 shadow-xl border-2 transition-all duration-500 h-full flex flex-col items-center justify-center ${
                    winner.position === 1
                      ? "border-yellow-400 transform md:-translate-y-4 hover:scale-110 hover:shadow-2xl"
                      : winner.position === 2
                      ? "border-gray-300 hover:scale-105 hover:shadow-2xl"
                      : "border-yellow-600/50 hover:scale-105 hover:shadow-2xl"
                  }`}
                >
                
                  <div
                    className={`absolute -top-6 left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full flex items-center justify-center shadow-lg group-hover:scale-125 transition-transform duration-300 ${
                      winner.position === 1
                        ? "bg-gradient-to-br from-yellow-400 to-yellow-500"
                        : winner.position === 2
                        ? "bg-gradient-to-br from-gray-300 to-gray-400"
                        : "bg-gradient-to-br from-yellow-600 to-yellow-700"
                    }`}
                  >
                    <winner.icon className="w-8 h-8 text-white" />
                  </div>

                  
                  <div className="mt-8 mb-4">
                    <span
                      className={`text-6xl font-black ${
                        winner.position === 1
                          ? "text-yellow-500"
                          : winner.position === 2
                          ? "text-gray-400"
                          : "text-yellow-700"
                      }`}
                    >
                      {winner.position}
                    </span>
                    <span className="text-2xl text-gray-400 align-super">
                      {winner.position === 1 ? "st" : winner.position === 2 ? "nd" : "rd"}
                    </span>
                  </div>

                  
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 text-center mb-2">
                    {winner.teamName}
                  </h3>

                  
                  <div
                    className={`mt-4 px-4 py-2 rounded-full text-sm font-bold ${
                      winner.position === 1
                        ? "bg-yellow-100 text-yellow-700"
                        : winner.position === 2
                        ? "bg-gray-100 text-gray-700"
                        : "bg-yellow-50 text-yellow-600"
                    }`}
                  >
                    {winner.position === 1 ? "Champion" : winner.position === 2 ? "Runner-up" : "2nd Runner-up"}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Carousel Section */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 animate-fade-in-up">
              Event <span className="text-yellow-500">Gallery</span>
            </h2>
            <p
              className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              Relive the moments from E-Summit 2025
            </p>
          </div>
        </div>

        <div className="relative">
          {/* Horizontal Scrolling Container */}
          <div className="flex gap-6 px-6 overflow-x-auto scrollbar-hide hover-pause" style={{ scrollBehavior: 'smooth' }}>
            {eventPhotos.map((photo, index) => (
              <div
                key={index}
                className={`flex-shrink-0 group relative ${
                  photo.orientation === "horizontal" ? "w-[600px] h-[400px]" : "w-[300px] h-[450px]"
                } animate-slide-in-right`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Main Image Container */}
                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                  {/* Demo Image - Replace with actual images */}
                  <div
                    className={`w-full h-full bg-gradient-to-br ${
                      index % 3 === 0
                        ? "from-yellow-400 to-yellow-600"
                        : index % 3 === 1
                        ? "from-gray-700 to-gray-900"
                        : "from-yellow-500 to-yellow-700"
                    } flex items-center justify-center text-white font-bold text-2xl group-hover:scale-110 transition-transform duration-700`}
                  >
                    <span className="opacity-50">Photo {index + 1}</span>
                  </div>
                  {/* Uncomment when using actual images */}
                  {/* <img
                    src={photo.src}
                    alt={`E-Summit Event ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  /> */}

                  {/* Mirror Effect for Vertical Images */}
                  {photo.orientation === "vertical" && (
                    <>
                      {/* Left Mirror */}
                      <div className="absolute top-0 left-0 w-20 h-full opacity-30 blur-sm overflow-hidden">
                        <div
                          className={`w-full h-full bg-gradient-to-br transform scale-x-[-1] ${
                            index % 3 === 0
                              ? "from-yellow-400 to-yellow-600"
                              : index % 3 === 1
                              ? "from-gray-700 to-gray-900"
                              : "from-yellow-500 to-yellow-700"
                          }`}
                        ></div>
                      </div>
                      {/* Right Mirror */}
                      <div className="absolute top-0 right-0 w-20 h-full opacity-30 blur-sm overflow-hidden">
                        <div
                          className={`w-full h-full bg-gradient-to-br transform scale-x-[-1] ${
                            index % 3 === 0
                              ? "from-yellow-400 to-yellow-600"
                              : index % 3 === 1
                              ? "from-gray-700 to-gray-900"
                              : "from-yellow-500 to-yellow-700"
                          }`}
                        ></div>
                      </div>
                    </>
                  )}

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6">
                    <p className="text-white font-bold text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      E-Summit 2025
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Scroll Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {eventPhotos.map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 rounded-full bg-yellow-400/30 hover:bg-yellow-400 transition-colors duration-300"
              ></div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-gray-900 mb-4 animate-fade-in-up">
              Ready to <span className="text-yellow-500">Transform</span> Your
              Future?
            </h2>
            <p
              className="text-xl text-gray-600 animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              Register now for E-Summit 2026 and be part of premier
              entrepreneurship events!
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl border border-yellow-200/50 overflow-hidden hover:shadow-3xl transition-shadow duration-500">
            <div className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 px-8 py-6 animate-gradient">
              <h3 className="text-2xl font-bold text-gray-900 text-center">
                E-Summit 2026 Registration
              </h3>
              <p className="text-center text-gray-800 mt-2">
                Join the Entrepreneurial Revolution
              </p>
            </div>

            <div className="p-8 md:p-12">
              {registrationStatus === 'coming-soon' && (
                <div className="text-center py-12 animate-fade-in-up">
                  <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-yellow-300 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse-gentle">
                    <Clock className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    Registration Opening Soon
                  </h3>
                  <p className="text-gray-600 mb-8 text-lg">
                    E-Summit 2026 registration will open soon. Stay tuned for
                    updates!
                  </p>
                  <div className="inline-block bg-gray-100 text-gray-500 font-bold py-3 px-8 rounded-xl cursor-not-allowed">
                    Coming Soon
                  </div>
                </div>
              )}

              {registrationStatus === 'live' && (
                <div className="text-center py-12 animate-fade-in-up">
                  <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse-gentle shadow-lg">
                    <Sparkles className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    Registration is Now Live!
                  </h3>
                  <p className="text-gray-600 mb-8 text-lg">
                    Secure your spot at E-Summit 2026. Fill out the registration
                    form and join us!
                  </p>
                  <a
                    href={googleFormLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 text-gray-900 font-bold py-4 px-10 rounded-xl hover:from-yellow-500 hover:via-yellow-400 hover:to-yellow-500 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl animate-gradient"
                  >
                    Register Now →
                  </a>
                  <p className="text-sm text-gray-500 mt-4">
                    You will be redirected to Google Forms
                  </p>
                </div>
              )}

              {registrationStatus === 'closed' && (
                <div className="text-center py-12 animate-fade-in-up">
                  <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse-gentle">
                    <Lock className="w-12 h-12 text-gray-600" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    Registration Closed
                  </h3>
                  <p className="text-gray-600 mb-8 text-lg">
                    Registration for E-Summit 2026 has been closed. Thank you for
                    your interest!
                  </p>
                  <div className="inline-block bg-red-100 text-red-600 font-bold py-3 px-8 rounded-xl cursor-not-allowed">
                    Registration Closed
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Status Change Instructions (for developers) */}
          <div className="mt-6 text-center text-sm text-gray-500">
            <p>To change registration status, update the <code className="bg-gray-100 px-2 py-1 rounded">registrationStatus</code> state:</p>
            <p className="mt-2">&apos;coming-soon&apos; | &apos;live&apos; | &apos;closed&apos;</p>
          </div>
        </div>
      </section>

      {/* Contact & Venue */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-4 animate-fade-in-up">
              Event <span className="text-yellow-500">Information</span>
            </h2>
            <p
              className="text-xl text-gray-600 animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              Get ready for an unforgettable entrepreneurial experience
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div
              className="text-center animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Event Dates</h3>
              <p className="text-gray-600">To be announced soon</p>
              <p className="text-gray-600 text-sm">Stay Tuned!</p>
            </div>
            <div
              className="text-center animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Venue</h3>
              <p className="text-gray-600">SVNIT Campus</p>
              <p className="text-gray-600 text-sm">Surat, Gujarat</p>
            </div>
            <div
              className="text-center animate-fade-in-up"
              style={{ animationDelay: "0.5s" }}
            >
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Expected Impact</h3>
              <p className="text-gray-600">1000+ Participants</p>
              <p className="text-gray-600 text-sm">Pan-India Reach</p>
            </div>
          </div>
        </div>
      </section>

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

        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.8;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.05);
          }
        }

        @keyframes pulse-gentle {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
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

        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes expand {
          from {
            width: 0;
          }
          to {
            width: 8rem;
          }
        }

        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }

        .animate-pulse-gentle {
          animation: pulse-gentle 2s ease-in-out infinite;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }

        .animate-slide-in-left {
          animation: slide-in-left 1s ease-out;
        }

        .animate-slide-in-right {
          animation: slide-in-right 1s ease-out;
        }

        .animate-slide-down {
          animation: slide-down 1s ease-out;
        }

        .animate-expand {
          animation: expand 1.5s ease-out;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        /* Hide scrollbar for photo carousel */
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        /* Auto scroll animation */
        @keyframes auto-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .hover-pause:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default ESummitPage;
