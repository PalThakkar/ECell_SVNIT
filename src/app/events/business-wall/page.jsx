"use client";
import React, { useState } from "react";
import Image from "next/image";
import { PartyPopper, Clock, Sparkles, Lock, Calendar, MapPin, Lightbulb, Heart } from "lucide-react";

const BusinessWallPage = () => {
  // Registration status: 'coming-soon' | 'live' | 'closed'
  const [registrationStatus, setRegistrationStatus] = useState('closed');
  const googleFormLink = "https://forms.google.com/your-form-link"; // Update with actual Google Form link

  // Event photos
  const eventPhotos = [
    { src: "/event-photos/business-wall-pic1.jpeg", orientation: "vertical" },
    { src: "/event-photos/business-wall-pic1.png", orientation: "horizontal" },
    { src: "/event-photos/business-wall-pic2.jpeg", orientation: "horizontal" },
    { src: "/event-photos/business-wall-pic2.png", orientation: "horizontal" },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-white via-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-r from-yellow-400/10 to-orange-400/5"></div>

        {/* Floating Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-400/10 rounded-full animate-bounce-slow"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-orange-300/10 rounded-full animate-pulse-slow"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-pink-400/10 rounded-full animate-float"></div>
          <div
            className="absolute bottom-32 right-1/3 w-24 h-24 bg-yellow-300/10 rounded-full animate-bounce-slow"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="animate-slide-down">
              <h1 className="text-6xl md:text-8xl font-black mb-6 text-gray-900">
                <span className="text-yellow-500">
                  BUSINESS
                </span>
                <span
                  className="block text-4xl md:text-6xl mt-4 font-bold animate-fade-in-up"
                  style={{ animationDelay: "0.3s" }}
                >
                  WALL
                </span>
              </h1>
              <p
                className="text-2xl md:text-3xl text-gray-700 font-medium max-w-4xl mx-auto animate-fade-in-up"
                style={{ animationDelay: "0.6s" }}
              >
                Express Your Entrepreneurial Ideas
              </p>
              <div className="w-32 h-1 bg-linear-to-r from-yellow-400 to-orange-400 mx-auto mt-8 rounded-full animate-expand"></div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-slide-in-left">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-yellow-200/50 hover:shadow-3xl hover:scale-105 transition-all duration-500">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  A Wholesome Morning Event
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Business Wall was a creative and wholesome morning event where a board near the canteen became a vibrant tapestry of entrepreneurial dreams! Students used colorful sticky notes to share their startup ideas, motivational thoughts, and creative concepts related to entrepreneurship and growth. The board gradually filled with hundreds of notes, creating a beautiful mosaic of innovation and community spirit.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div
                  className="bg-linear-to-br from-yellow-400/20 to-orange-300/10 rounded-xl p-6 border border-yellow-300/30 hover:scale-105 transition-transform duration-300 animate-fade-in-up"
                  style={{ animationDelay: "0.2s" }}
                >
                  <div className="text-3xl font-black text-orange-600 mb-2">
                    📝
                  </div>
                  <div className="text-gray-800 font-semibold">
                    Creative Expression
                  </div>
                </div>
                <div
                  className="bg-linear-to-br from-yellow-400/20 to-yellow-300/10 rounded-xl p-6 border border-yellow-300/30 hover:scale-105 transition-transform duration-300 animate-fade-in-up"
                  style={{ animationDelay: "0.4s" }}
                >
                  <div className="text-3xl font-black text-yellow-600 mb-2">
                    💡
                  </div>
                  <div className="text-gray-800 font-semibold">
                    Idea Sharing
                  </div>
                </div>
              </div>
            </div>

            <div className="relative animate-slide-in-right">
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-yellow-200/50">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  What Made It Special
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4 hover:bg-yellow-50 p-3 rounded-lg transition-colors duration-300">
                    <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-white font-bold text-sm animate-pulse-gentle">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Open to Everyone
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Anyone passing by the canteen could participate and share their thoughts
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
                        Colorful & Creative
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Sticky notes of different colors created a beautiful visual display
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
                        Community Building
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Brought together students with shared entrepreneurial interests
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
                      <h4 className="font-semibold text-yellow-600">
                        Wholesome Experience
                      </h4>
                      <p className="text-gray-600 text-sm">
                        A feel-good event that inspired and connected the community
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Highlights Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 animate-fade-in-up">
              Event <span className="text-yellow-500">Highlights</span>
            </h2>
            <p
              className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              What made Business Wall so special
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div
              className="group hover:transform hover:-translate-y-3 transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="bg-linear-to-br from-yellow-50 to-white rounded-2xl p-8 shadow-lg border-2 border-yellow-200/50 group-hover:shadow-2xl group-hover:border-yellow-300 h-full">
                <div className="w-16 h-16 bg-linear-to-br from-yellow-400 to-orange-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">📝</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Simple & Fun
                </h3>
                <p className="text-gray-700 mb-4">
                  Just grab a sticky note, write your idea, and stick it on the board - that&apos;s it!
                </p>
              </div>
            </div>

            <div
              className="group hover:transform hover:-translate-y-3 transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="bg-linear-to-br from-yellow-50 to-white rounded-2xl p-8 shadow-lg border-2 border-yellow-200/50 group-hover:shadow-2xl group-hover:border-yellow-300 h-full">
                <div className="w-16 h-16 bg-linear-to-br from-yellow-400 to-yellow-300 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">🎨</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Colorful Display
                </h3>
                <p className="text-gray-700 mb-4">
                  Multiple colors of sticky notes created a vibrant, eye-catching wall
                </p>
              </div>
            </div>

            <div
              className="group hover:transform hover:-translate-y-3 transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="bg-linear-to-br from-yellow-50 to-white rounded-2xl p-8 shadow-lg border-2 border-yellow-200/50 group-hover:shadow-2xl group-hover:border-yellow-300 h-full">
                <div className="w-16 h-16 bg-linear-to-br from-yellow-400 to-yellow-300 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">💡</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Inspiring Ideas
                </h3>
                <p className="text-gray-700 mb-4">
                  From startup concepts to motivational quotes - creativity had no limits
                </p>
              </div>
            </div>

            <div
              className="group hover:transform hover:-translate-y-3 transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="bg-linear-to-br from-yellow-50 to-white rounded-2xl p-8 shadow-lg border-2 border-yellow-200/50 group-hover:shadow-2xl group-hover:border-yellow-300 h-full">
                <div className="w-16 h-16 bg-linear-to-br from-yellow-400 to-orange-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">❤️</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Community Spirit
                </h3>
                <p className="text-gray-700 mb-4">
                  Brought people together through shared creativity and entrepreneurial passion
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What People Shared Section */}
      <section className="py-20 bg-linear-to-br from-yellow-50 via-white to-yellow-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 animate-fade-in-up">
              What People <span className="text-yellow-500">Shared</span>
            </h2>
            <p
              className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              The kinds of ideas and thoughts people put on the wall
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div
              className="bg-white rounded-2xl p-8 shadow-xl border-2 border-yellow-200/50 hover:shadow-2xl transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="text-yellow-500 mr-3 text-3xl">💡</span>
                Startup Ideas
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-3 font-bold">•</span>
                  Innovative business concepts and solutions
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-3 font-bold">•</span>
                  Product ideas for everyday problems
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-3 font-bold">•</span>
                  Tech-based startup proposals
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-3 font-bold">•</span>
                  Social impact initiatives
                </li>
              </ul>
            </div>

            <div
              className="bg-white rounded-2xl p-8 shadow-xl border-2 border-yellow-200/50 hover:shadow-2xl transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="text-yellow-500 mr-3 text-3xl">✨</span>
                Motivational Words
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-3 font-bold">•</span>
                  Inspiring quotes about entrepreneurship
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-3 font-bold">•</span>
                  Words of encouragement for fellow students
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-3 font-bold">•</span>
                  Success mantras and life lessons
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-3 font-bold">•</span>
                  Dreams and aspirations
                </li>
              </ul>
            </div>

            <div
              className="bg-white rounded-2xl p-8 shadow-xl border-2 border-yellow-200/50 hover:shadow-2xl transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="text-yellow-500 mr-3 text-3xl">🚀</span>
                Growth Mindset
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-3 font-bold">•</span>
                  Personal development goals
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-3 font-bold">•</span>
                  Learning and skill-building ideas
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-3 font-bold">•</span>
                  Career aspirations and plans
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-3 font-bold">•</span>
                  Innovation and creativity thoughts
                </li>
              </ul>
            </div>

            <div
              className="bg-white rounded-2xl p-8 shadow-xl border-2 border-yellow-200/50 hover:shadow-2xl transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="text-yellow-500 mr-3 text-3xl">🌟</span>
                Creative Expressions
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-3 font-bold">•</span>
                  Artistic doodles and sketches
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-3 font-bold">•</span>
                  Clever wordplay and puns
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-3 font-bold">•</span>
                  Visual representations of ideas
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-3 font-bold">•</span>
                  Fun and wholesome messages
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
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
              Moments from the Business Wall event
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
                  <Image
                    src={photo.src}
                    alt={`Business Wall Event - Photo ${index + 1}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  {photo.orientation === "vertical" && (
                    <></>
                  )}

                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6">
                    <p className="text-white font-bold text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      Business Wall 2025
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

      {/* Event Participation Section */}
      <section className="py-20 bg-linear-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-gray-900 mb-4 animate-fade-in-up">
              A <span className="text-yellow-500">Wholesome</span> Experience
            </h2>
            <p
              className="text-xl text-gray-600 animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              Thank you to everyone who participated and made it special!
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl border border-orange-200/50 overflow-hidden hover:shadow-3xl transition-shadow duration-500">
            <div className="bg-linear-to-r from-yellow-400 via-yellow-300 to-yellow-400 px-8 py-6 animate-gradient">
              <h3 className="text-2xl font-bold text-white text-center">
                Business Wall Event
              </h3>
              <p className="text-center text-white mt-2">
                A Morning of Creativity & Community
              </p>
            </div>

            <div className="p-8 md:p-12">
              <div className="text-center py-12 animate-fade-in-up">
                <div className="w-24 h-24 bg-linear-to-br from-yellow-400 to-yellow-300 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse-gentle">
                  <Heart className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Event Concluded Successfully!
                </h3>
                <p className="text-gray-600 mb-6 text-lg max-w-2xl mx-auto">
                  The Business Wall was filled with hundreds of creative sticky notes, creating a beautiful mosaic of entrepreneurial ideas and dreams. Thank you to everyone who participated and made this morning event so special and wholesome!
                </p>
                <div className="bg-linear-to-r from-yellow-100 via-yellow-100 to-yellow-100 border-2 border-yellow-200 rounded-xl p-6 max-w-2xl mx-auto">
                  <p className="text-gray-800 font-semibold mb-2">
                    ✨ This was a non-competitive event
                  </p>
                  <p className="text-gray-600 text-sm">
                    No winners, just a community coming together to share ideas and inspiration!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Info */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-4 animate-fade-in-up">
              Event <span className="text-yellow-500">Details</span>
            </h2>
            <p
              className="text-xl text-gray-600 animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              Everything about the Business Wall event
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
              <p className="text-gray-600">Morning Event 2025</p>
              <p className="text-gray-600 text-sm">Morning Hours</p>
            </div>
            <div
              className="text-center animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Venue</h3>
              <p className="text-gray-600">Near Canteen</p>
              <p className="text-gray-600 text-sm">Canteen Cements, SVNIT</p>
            </div>
            <div
              className="text-center animate-fade-in-up"
              style={{ animationDelay: "0.5s" }}
            >
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Format</h3>
              <p className="text-gray-600">Open Participation</p>
              <p className="text-gray-600 text-sm">Sticky Note Board</p>
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

export default BusinessWallPage;
