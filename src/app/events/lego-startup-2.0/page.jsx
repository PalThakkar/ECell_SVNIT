"use client";
import React, { useState } from "react";import Link from "next/link";import { Trophy, Medal, PartyPopper, Clock, Sparkles, Lock, Calendar, MapPin, Users } from "lucide-react";

const LegoStartup20Page = () => {
  // Registration status: 'coming-soon' | 'live' | 'closed'
  const [registrationStatus, setRegistrationStatus] = useState('closed');
  const googleFormLink = "https://linktr.ee/ecellsvnit";

  // Event photos
  const eventPhotos = [
    { src: "/event-photos/lego_pic1.jpg", orientation: "horizontal" },
    { src: "/event-photos/lego_pic2.png", orientation: "vertical" },
    { src: "/event-photos/lego_pic3.png", orientation: "horizontal" },
    { src: "/event-photos/lego_pic4.png", orientation: "vertical" },
    { src: "/event-photos/lego_pic5.png", orientation: "horizontal" },
    { src: "/event-photos/lego_pic6.png", orientation: "horizontal" },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-white via-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-r from-yellow-400/10 to-yellow-300/5"></div>

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
                <span className="bg-linear-to-r from-yellow-400 via-yellow-300 to-yellow-400 bg-clip-text text-transparent animate-gradient">
                  LEGO STARTUP
                </span>
                <span
                  className="block text-4xl md:text-6xl mt-4 font-bold animate-fade-in-up"
                  style={{ animationDelay: "0.3s" }}
                >
                  A BUSINESS FAIR
                </span>
              </h1>
              <p
                className="text-2xl md:text-3xl text-gray-700 font-medium max-w-4xl mx-auto animate-fade-in-up"
                style={{ animationDelay: "0.6s" }}
              >
                The Enhanced Startup Building Experience
              </p>
              <div className="w-32 h-1 bg-linear-to-r from-yellow-400 to-yellow-300 mx-auto mt-8 rounded-full animate-expand"></div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-slide-in-left">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-yellow-200/50 hover:shadow-3xl hover:scale-105 transition-all duration-500">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  More Competitive, More Refined
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  LEGO Startup 2.0 builds upon the success of its first edition with a sharper, more competitive startup-building journey. Over four focused weeks, participating teams move through clearly defined milestones — transforming raw ideas into validated business models and working products. The journey culminates at a high-energy Grand D-Day, where top teams showcase their startups and pitch to mentors, judges, and an external audience.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div
                  className="bg-linear-to-br from-yellow-400/20 to-yellow-300/10 rounded-xl p-6 border border-yellow-300/30 hover:scale-105 transition-transform duration-300 animate-fade-in-up flex flex-col items-center justify-center"
                  style={{ animationDelay: "0.2s" }}
                >
                  <div className="text-3xl font-black text-yellow-600 mb-2">
                    4
                  </div>
                  <div className="text-gray-800 font-semibold text-center">
                    Week Program
                  </div>
                </div>
                <div
                  className="bg-linear-to-br from-yellow-400/20 to-yellow-300/10 rounded-xl p-6 border border-yellow-300/30 hover:scale-105 transition-transform duration-300 animate-fade-in-up flex flex-col items-center justify-center"
                  style={{ animationDelay: "0.4s" }}
                >
                  <div className="text-3xl font-black text-yellow-600 mb-2">
                    2.0
                  </div>
                  <div className="text-gray-800 font-semibold text-center">
                    Enhanced Edition
                  </div>
                </div>
                <Link
                  href="/lego-leaderboard"
                  className="bg-linear-to-br from-yellow-400/30 to-yellow-300/20 rounded-xl p-6 border border-yellow-400/40 hover:scale-105 hover:shadow-xl hover:border-yellow-400/60 transition-all duration-300 animate-fade-in-up flex flex-col items-center justify-center gap-2 group cursor-pointer"
                  style={{ animationDelay: "0.6s" }}
                >
                  <Trophy className="w-7 h-7 text-yellow-600 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-yellow-700 font-bold text-center text-sm">
                    View Live Leaderboard
                  </div>
                </Link>
              </div>
            </div>

            <div className="relative animate-slide-in-right">
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-yellow-200/50">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Enhanced Journey Phases
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
                        Identify real-world problems, validate ideas through market research, and define a clear value proposition.
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
                        Business Strategy & Planning
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Build a strong business model with competitive analysis, revenue planning, and structured execution strategy.
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
                        Branding & Market Testing
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Create your brand identity, test market demand, and validate customer response through outreach and surveys.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 hover:bg-yellow-50 p-3 rounded-lg transition-colors duration-300">
                    <div
                      className="w-8 h-8 bg-linear-to-br from-yellow-400 to-yellow-300 rounded-full flex items-center justify-center text-white font-bold text-sm animate-pulse-gentle"
                      style={{ animationDelay: "1.5s" }}
                    >
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold text-yellow-600">
                        Prototype & D-Day Preparation
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Develop a working prototype and prepare for the final pitch leading to the Grand D-Day showcase.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's New Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 animate-fade-in-up">
              What&apos;s New in <span className="text-yellow-500">2.0</span>
            </h2>
            <p
              className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              Enhanced features and improvements from the first edition
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div
              className="group hover:transform hover:-translate-y-3 transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="bg-linear-to-br from-yellow-50 to-white rounded-2xl p-8 shadow-lg border-2 border-yellow-200/50 group-hover:shadow-2xl group-hover:border-yellow-300 h-full">
                <div className="w-16 h-16 bg-linear-to-br from-yellow-400 to-yellow-300 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Defined Milestones
                </h3>
                <p className="text-gray-700 mb-4">
                  Clear weekly milestones with structured deliverables and progress tracking
                </p>
              </div>
            </div>

            <div
              className="group hover:transform hover:-translate-y-3 transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="bg-linear-to-br from-yellow-50 to-white rounded-2xl p-8 shadow-lg border-2 border-yellow-200/50 group-hover:shadow-2xl group-hover:border-yellow-300 h-full">
                <div className="w-16 h-16 bg-linear-to-br from-yellow-400 to-yellow-300 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">👥</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Expert Mentorship
                </h3>
                <p className="text-gray-700 mb-4">
                  Dedicated mentors and industry experts guiding teams throughout the journey
                </p>
              </div>
            </div>

            <div
              className="group hover:transform hover:-translate-y-3 transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="bg-linear-to-br from-yellow-50 to-white rounded-2xl p-8 shadow-lg border-2 border-yellow-200/50 group-hover:shadow-2xl group-hover:border-yellow-300 h-full">
                <div className="w-16 h-16 bg-linear-to-br from-yellow-400 to-yellow-300 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  More Competitive
                </h3>
                <p className="text-gray-700 mb-4">
                  Enhanced evaluation criteria and rigorous selection process for top teams
                </p>
              </div>
            </div>

            <div
              className="group hover:transform hover:-translate-y-3 transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="bg-linear-to-br from-yellow-50 to-white rounded-2xl p-8 shadow-lg border-2 border-yellow-200/50 group-hover:shadow-2xl group-hover:border-yellow-300 h-full">
                <div className="w-16 h-16 bg-linear-to-br from-yellow-400 to-yellow-300 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  External Audience
                </h3>
                <p className="text-gray-700 mb-4">
                  Present to external visitors, investors, and industry professionals
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hall of Fame Placeholder */}
      {/* <section className="py-20 bg-linear-to-br from-yellow-50 via-white to-yellow-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 animate-fade-in-up">
              Hall of <span className="text-yellow-500">Fame</span>
            </h2>
            <p
              className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              The winners will be announced after the event concludes
            </p>
          </div>

          <div className="text-center py-20 animate-fade-in-up">
            <div className="w-32 h-32 bg-linear-to-br from-yellow-400 to-yellow-300 rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse-gentle">
              <PartyPopper className="w-16 h-16 text-white" />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Will Announce Soon!
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The best teams will be crowned after the final D-Day presentations. Stay tuned!
            </p>
          </div>
        </div>
      </section> */}

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
              Glimpses from Lego Startup 2.0
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="flex gap-6 px-6 overflow-x-auto scrollbar-hide hover-pause" style={{ scrollBehavior: 'smooth' }}>
            {eventPhotos.map((photo, index) => (
              <div
                key={index}
                className={`shrink-0 group relative ${
                  photo.orientation === "horizontal" ? "w-[600px] h-[400px]" : "w-[300px] h-[450px]"
                } animate-slide-in-right`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                  <div
                    className={`w-full h-full bg-linear-to-br ${
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
                          className={`w-full h-full bg-linear-to-br transform scale-x-[-1] ${
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
                          className={`w-full h-full bg-linear-to-br transform scale-x-[-1] ${
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

                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6">
                    <p className="text-white font-bold text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      Lego Startup
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
      <section className="py-20 bg-linear-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-gray-900 mb-4 animate-fade-in-up">
              Ready for the <span className="text-yellow-500">Challenge</span>?
            </h2>
            <p
              className="text-xl text-gray-600 animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              Join Lego Startup 2.0 and build your dream venture
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl border border-yellow-200/50 overflow-hidden hover:shadow-3xl transition-shadow duration-500">
            <div className="bg-linear-to-r from-yellow-400 via-yellow-300 to-yellow-400 px-8 py-6 animate-gradient">
              <h3 className="text-2xl font-bold text-gray-900 text-center">
                Lego Startup 2.0 Registration
              </h3>
              <p className="text-center text-gray-800 mt-2">
                Build Tomorrow, Today
              </p>
            </div>

            <div className="p-8 md:p-12">
              {registrationStatus === 'coming-soon' && (
                <div className="text-center py-12 animate-fade-in-up">
                  <div className="w-24 h-24 bg-linear-to-br from-yellow-400 to-yellow-300 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse-gentle">
                    <Clock className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    Registration Opening Soon
                  </h3>
                  <p className="text-gray-600 mb-8 text-lg">
                    Lego Startup 2.0 registration will open soon. Prepare your team!
                  </p>
                  <div className="inline-block bg-gray-100 text-gray-500 font-bold py-3 px-8 rounded-xl cursor-not-allowed">
                    Coming Soon
                  </div>
                </div>
              )}

              {registrationStatus === 'live' && (
                <div className="text-center py-12 animate-fade-in-up">
                  <div className="w-24 h-24 bg-linear-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse-gentle shadow-lg">
                    <Sparkles className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    Registration is Now Live!
                  </h3>
                  <p className="text-gray-600 mb-8 text-lg">
                    Secure your spot in Lego Startup 2.0. Fill out the registration form!
                  </p>
                  <a
                    href={googleFormLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-linear-to-r from-yellow-400 via-yellow-300 to-yellow-400 text-gray-900 font-bold py-4 px-10 rounded-xl hover:from-yellow-500 hover:via-yellow-400 hover:to-yellow-500 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl animate-gradient"
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
                    Registration for Lego Startup 2.0 has been closed. Thank you!
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
              Key details about Lego Startup 2.0
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
              <h3 className="font-bold text-gray-900 mb-2">Start Date</h3>
              <p className="text-gray-600">Starts from January 1, 2026</p>
              <p className="text-gray-600 text-sm">Time: Will announce soon</p>
            </div>
            <div
              className="text-center animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Venue for D-Day</h3>
              <p className="text-gray-600">Will announce soon</p>
              <p className="text-gray-600 text-sm">SVNIT Campus, Surat</p>
            </div>
            <div
              className="text-center animate-fade-in-up"
              style={{ animationDelay: "0.5s" }}
            >
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Duration</h3>
              <p className="text-gray-600">4 Weeks</p>
              <p className="text-gray-600 text-sm">+ Final D-Day</p>
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

export default LegoStartup20Page;
