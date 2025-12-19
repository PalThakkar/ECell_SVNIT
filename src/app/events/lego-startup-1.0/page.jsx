"use client";
import React, { useState } from "react";
import { Trophy, Medal, PartyPopper, Clock, Sparkles, Lock, Calendar, MapPin, Users } from "lucide-react";

const LegoStartup10Page = () => {
  // Registration status: 'coming-soon' | 'live' | 'closed'
  const [registrationStatus, setRegistrationStatus] = useState('closed');
  const googleFormLink = "https://forms.google.com/your-form-link"; // Update with actual Google Form link

  // Winners data
  const winners = [
    { position: 1, teamName: "Plant Pal", icon: Trophy },
    { position: 2, teamName: "Nex.Collab", icon: Medal },
    { position: 3, teamName: "KYA-Know Your Ambition", icon: Medal },
  ];

  // Event photos - Update with actual image paths
  const eventPhotos = [
    { src: "/images/events/lego-1-1.jpg", orientation: "horizontal" },
    { src: "/images/events/lego-1-2.jpg", orientation: "vertical" },
    { src: "/images/events/lego-1-3.jpg", orientation: "horizontal" },
    { src: "/images/events/lego-1-4.jpg", orientation: "vertical" },
    { src: "/images/events/lego-1-5.jpg", orientation: "horizontal" },
    { src: "/images/events/lego-1-6.jpg", orientation: "horizontal" },
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
                  LEGO STARTUP
                </span>
                <span
                  className="block text-4xl md:text-6xl mt-4 font-bold animate-fade-in-up"
                  style={{ animationDelay: "0.3s" }}
                >
                  1.0
                </span>
              </h1>
              <p
                className="text-2xl md:text-3xl text-gray-700 font-medium max-w-4xl mx-auto animate-fade-in-up"
                style={{ animationDelay: "0.6s" }}
              >
                Build Your Startup from Scratch
              </p>
              <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-yellow-300 mx-auto mt-8 rounded-full animate-expand"></div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-slide-in-left">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-yellow-200/50 hover:shadow-3xl hover:scale-105 transition-all duration-500">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  A Structured Startup Journey
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  The Lego Startup is a structured, four-week startup-building journey where teams develop a startup idea from scratch. Each week focuses on a dedicated phase of startup development. After continuous evaluations, selected teams advance to the final D-Day, where they present their product and pitch their ideas to mentors, judges, and external visitors.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div
                  className="bg-gradient-to-br from-yellow-400/20 to-yellow-300/10 rounded-xl p-6 border border-yellow-300/30 hover:scale-105 transition-transform duration-300 animate-fade-in-up"
                  style={{ animationDelay: "0.2s" }}
                >
                  <div className="text-3xl font-black text-yellow-600 mb-2">
                    4
                  </div>
                  <div className="text-gray-800 font-semibold">
                    Week Journey
                  </div>
                </div>
                <div
                  className="bg-gradient-to-br from-yellow-400/20 to-yellow-300/10 rounded-xl p-6 border border-yellow-300/30 hover:scale-105 transition-transform duration-300 animate-fade-in-up"
                  style={{ animationDelay: "0.4s" }}
                >
                  <div className="text-3xl font-black text-yellow-600 mb-2">
                    50+
                  </div>
                  <div className="text-gray-800 font-semibold">
                    Teams Participated
                  </div>
                </div>
              </div>
            </div>

            <div className="relative animate-slide-in-right">
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-yellow-200/50">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  4-Week Development Phases
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4 hover:bg-yellow-50 p-3 rounded-lg transition-colors duration-300">
                    <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-white font-bold text-sm animate-pulse-gentle">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Ideation & Validation
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Develop your startup idea and validate it with potential customers
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
                        Business Model & Strategy
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Design your business model and go-to-market strategy
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
                        MVP Development
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Build your Minimum Viable Product and test with users
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 hover:bg-yellow-50 p-3 rounded-lg transition-colors duration-300">
                    <div
                      className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-300 rounded-full flex items-center justify-center text-white font-bold text-sm animate-pulse-gentle"
                      style={{ animationDelay: "1.5s" }}
                    >
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold text-yellow-600">
                        Final Pitch - D-Day
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Present your product and pitch to judges, mentors, and visitors
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Learnings Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 animate-fade-in-up">
              What You <span className="text-yellow-500">Learn</span>
            </h2>
            <p
              className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              Comprehensive skills for building a successful startup
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div
              className="group hover:transform hover:-translate-y-3 transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="bg-gradient-to-br from-yellow-50 to-white rounded-2xl p-8 shadow-lg border-2 border-yellow-200/50 group-hover:shadow-2xl group-hover:border-yellow-300 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-300 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">💡</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Idea Validation
                </h3>
                <p className="text-gray-700 mb-4">
                  Learn how to validate your startup idea with real customers and market research
                </p>
              </div>
            </div>

            <div
              className="group hover:transform hover:-translate-y-3 transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="bg-gradient-to-br from-yellow-50 to-white rounded-2xl p-8 shadow-lg border-2 border-yellow-200/50 group-hover:shadow-2xl group-hover:border-yellow-300 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-300 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Business Modeling
                </h3>
                <p className="text-gray-700 mb-4">
                  Design sustainable business models and revenue strategies for your startup
                </p>
              </div>
            </div>

            <div
              className="group hover:transform hover:-translate-y-3 transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="bg-gradient-to-br from-yellow-50 to-white rounded-2xl p-8 shadow-lg border-2 border-yellow-200/50 group-hover:shadow-2xl group-hover:border-yellow-300 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-300 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">🛠️</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Product Development
                </h3>
                <p className="text-gray-700 mb-4">
                  Build and iterate on your MVP with user feedback and agile methodologies
                </p>
              </div>
            </div>

            <div
              className="group hover:transform hover:-translate-y-3 transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="bg-gradient-to-br from-yellow-50 to-white rounded-2xl p-8 shadow-lg border-2 border-yellow-200/50 group-hover:shadow-2xl group-hover:border-yellow-300 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-300 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">🎤</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Pitching Skills
                </h3>
                <p className="text-gray-700 mb-4">
                  Master the art of pitching your startup to investors, judges, and stakeholders
                </p>
              </div>
            </div>
          </div>
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
              Celebrating our champions who built extraordinary startups
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
              Relive the moments from Lego Startup 1.0
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="flex gap-6 px-6 overflow-x-auto scrollbar-hide hover-pause" style={{ scrollBehavior: 'smooth' }}>
            {eventPhotos.map((photo, index) => (
              <div
                key={index}
                className={`flex-shrink-0 group relative ${
                  photo.orientation === "horizontal" ? "w-[600px] h-[400px]" : "w-[300px] h-[450px]"
                } animate-slide-in-right`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-500">
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

                  {photo.orientation === "vertical" && (
                    <>
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

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6">
                    <p className="text-white font-bold text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      Lego Startup 1.0
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

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
              Join the <span className="text-yellow-500">Startup</span> Revolution
            </h2>
            <p
              className="text-xl text-gray-600 animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              Be part of the next Lego Startup journey
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl border border-yellow-200/50 overflow-hidden hover:shadow-3xl transition-shadow duration-500">
            <div className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 px-8 py-6 animate-gradient">
              <h3 className="text-2xl font-bold text-gray-900 text-center">
                Lego Startup 1.0 Registration
              </h3>
              <p className="text-center text-gray-800 mt-2">
                Build Your Dream Startup
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
                    Stay tuned for the next edition of Lego Startup!
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
                    Secure your spot in Lego Startup. Fill out the registration form and join us!
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
                    Registration for Lego Startup 1.0 has been closed. Thank you for your interest!
                  </p>
                  <div className="inline-block bg-red-100 text-red-600 font-bold py-3 px-8 rounded-xl cursor-not-allowed">
                    Registration Closed
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Event Info */}
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
              Everything you need to know about Lego Startup 1.0
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
              <h3 className="font-bold text-gray-900 mb-2">Event Date</h3>
              <p className="text-gray-600">November 17, 2024</p>
              <p className="text-gray-600 text-sm">10:00 AM - 6:00 PM</p>
            </div>
            <div
              className="text-center animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Venue</h3>
              <p className="text-gray-600">Canteen Cements</p>
              <p className="text-gray-600 text-sm">SVNIT Campus, Surat</p>
            </div>
            <div
              className="text-center animate-fade-in-up"
              style={{ animationDelay: "0.5s" }}
            >
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Team Size</h3>
              <p className="text-gray-600">3-5 Members</p>
              <p className="text-gray-600 text-sm">Per Team</p>
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

        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default LegoStartup10Page;
