"use client";
import React, { useState } from "react";
import { PartyPopper, Clock, Sparkles, Lock, Calendar, MapPin, BookOpen } from "lucide-react";

const BitcoinWorkshop2025Page = () => {
  // Registration status: 'coming-soon' | 'live' | 'closed'
  const [registrationStatus, setRegistrationStatus] = useState('closed');
  const googleFormLink = "https://forms.google.com/your-form-link"; // Update with actual Google Form link

  // Event photos - Update with actual image paths
  const eventPhotos = [
    { src: "/images/events/bitcoin-1.jpg", orientation: "horizontal" },
    { src: "/images/events/bitcoin-2.jpg", orientation: "vertical" },
    { src: "/images/events/bitcoin-3.jpg", orientation: "horizontal" },
    { src: "/images/events/bitcoin-4.jpg", orientation: "vertical" },
    { src: "/images/events/bitcoin-5.jpg", orientation: "horizontal" },
    { src: "/images/events/bitcoin-6.jpg", orientation: "horizontal" },
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
                  BITCOIN
                </span>
                <span
                  className="block text-4xl md:text-6xl mt-4 font-bold animate-fade-in-up"
                  style={{ animationDelay: "0.3s" }}
                >
                  WORKSHOP
                </span>
              </h1>
              <p
                className="text-2xl md:text-3xl text-gray-700 font-medium max-w-4xl mx-auto animate-fade-in-up"
                style={{ animationDelay: "0.6s" }}
              >
                Master Cryptocurrency & Blockchain
              </p>
              <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-yellow-300 mx-auto mt-8 rounded-full animate-expand"></div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-slide-in-left">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-yellow-200/50 hover:shadow-3xl hover:scale-105 transition-all duration-500">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Your Gateway to Crypto
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  The Bitcoin Workshop offers a practical introduction to cryptocurrencies and blockchain technology. Participants learn about Bitcoin fundamentals, wallets, transactions, security practices, and real-world use cases, making complex concepts accessible for beginners.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div
                  className="bg-gradient-to-br from-yellow-400/20 to-yellow-300/10 rounded-xl p-6 border border-yellow-300/30 hover:scale-105 transition-transform duration-300 animate-fade-in-up"
                  style={{ animationDelay: "0.2s" }}
                >
                  <div className="text-3xl font-black text-yellow-600 mb-2">
                    ₿
                  </div>
                  <div className="text-gray-800 font-semibold">
                    Hands-On Learning
                  </div>
                </div>
                <div
                  className="bg-gradient-to-br from-yellow-400/20 to-yellow-300/10 rounded-xl p-6 border border-yellow-300/30 hover:scale-105 transition-transform duration-300 animate-fade-in-up"
                  style={{ animationDelay: "0.4s" }}
                >
                  <div className="text-3xl font-black text-yellow-600 mb-2">
                    🔐
                  </div>
                  <div className="text-gray-800 font-semibold">
                    Security Focus
                  </div>
                </div>
              </div>
            </div>

            <div className="relative animate-slide-in-right">
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-yellow-200/50">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  What You&apos;ll Learn
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4 hover:bg-yellow-50 p-3 rounded-lg transition-colors duration-300">
                    <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-white font-bold text-sm animate-pulse-gentle">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Bitcoin Fundamentals
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Understanding cryptocurrency basics, blockchain technology, and decentralization
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
                        Wallets & Transactions
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Setting up wallets, making transactions, and understanding public/private keys
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
                        Security Best Practices
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Protecting your crypto assets and avoiding common security pitfalls
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
                        Real-World Applications
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Exploring practical use cases and future of cryptocurrency technology
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workshop Highlights Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 animate-fade-in-up">
              Workshop <span className="text-yellow-500">Highlights</span>
            </h2>
            <p
              className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              Comprehensive curriculum designed for beginners
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div
              className="group hover:transform hover:-translate-y-3 transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="bg-gradient-to-br from-yellow-50 to-white rounded-2xl p-8 shadow-lg border-2 border-yellow-200/50 group-hover:shadow-2xl group-hover:border-yellow-300 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-300 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">📚</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Beginner Friendly
                </h3>
                <p className="text-gray-700 mb-4">
                  No prior knowledge required - start from the basics and build your understanding
                </p>
              </div>
            </div>

            <div
              className="group hover:transform hover:-translate-y-3 transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="bg-gradient-to-br from-yellow-50 to-white rounded-2xl p-8 shadow-lg border-2 border-yellow-200/50 group-hover:shadow-2xl group-hover:border-yellow-300 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-300 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">💻</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Practical Sessions
                </h3>
                <p className="text-gray-700 mb-4">
                  Hands-on exercises with live demonstrations and real wallet setups
                </p>
              </div>
            </div>

            <div
              className="group hover:transform hover:-translate-y-3 transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="bg-gradient-to-br from-yellow-50 to-white rounded-2xl p-8 shadow-lg border-2 border-yellow-200/50 group-hover:shadow-2xl group-hover:border-yellow-300 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-300 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">🎓</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Expert Instructors
                </h3>
                <p className="text-gray-700 mb-4">
                  Learn from experienced professionals in the cryptocurrency field
                </p>
              </div>
            </div>

            <div
              className="group hover:transform hover:-translate-y-3 transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="bg-gradient-to-br from-yellow-50 to-white rounded-2xl p-8 shadow-lg border-2 border-yellow-200/50 group-hover:shadow-2xl group-hover:border-yellow-300 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-300 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">🔒</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Security Focused
                </h3>
                <p className="text-gray-700 mb-4">
                  Emphasis on safe practices and protecting your digital assets
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Topics Covered Section */}
      <section className="py-20 bg-gradient-to-br from-yellow-50 via-white to-yellow-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 animate-fade-in-up">
              Topics <span className="text-yellow-500">Covered</span>
            </h2>
            <p
              className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              Comprehensive curriculum for cryptocurrency beginners
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div
              className="bg-white rounded-2xl p-8 shadow-xl border-2 border-yellow-200/50 hover:shadow-2xl transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="text-yellow-500 mr-3 text-3xl">💡</span>
                Fundamentals
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-3 font-bold">•</span>
                  What is Bitcoin and how does it work?
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-3 font-bold">•</span>
                  Blockchain technology explained
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-3 font-bold">•</span>
                  Mining, nodes, and network consensus
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-3 font-bold">•</span>
                  Cryptocurrency vs traditional currency
                </li>
              </ul>
            </div>

            <div
              className="bg-white rounded-2xl p-8 shadow-xl border-2 border-yellow-200/50 hover:shadow-2xl transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="text-yellow-500 mr-3 text-3xl">🔐</span>
                Security & Safety
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-3 font-bold">•</span>
                  Wallet types and setup procedures
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-3 font-bold">•</span>
                  Private keys and seed phrases
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-3 font-bold">•</span>
                  Common scams and how to avoid them
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-3 font-bold">•</span>
                  Best practices for secure transactions
                </li>
              </ul>
            </div>

            <div
              className="bg-white rounded-2xl p-8 shadow-xl border-2 border-yellow-200/50 hover:shadow-2xl transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="text-yellow-500 mr-3 text-3xl">💸</span>
                Transactions
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-3 font-bold">•</span>
                  How to send and receive Bitcoin
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-3 font-bold">•</span>
                  Understanding transaction fees
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-3 font-bold">•</span>
                  Transaction confirmation and verification
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-3 font-bold">•</span>
                  Using blockchain explorers
                </li>
              </ul>
            </div>

            <div
              className="bg-white rounded-2xl p-8 shadow-xl border-2 border-yellow-200/50 hover:shadow-2xl transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="text-yellow-500 mr-3 text-3xl">🌐</span>
                Real-World Applications
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-3 font-bold">•</span>
                  Use cases in various industries
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-3 font-bold">•</span>
                  Future of cryptocurrency and blockchain
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-3 font-bold">•</span>
                  Regulatory landscape and compliance
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-3 font-bold">•</span>
                  Career opportunities in blockchain
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Carousel Section */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 animate-fade-in-up">
              Workshop <span className="text-yellow-500">Gallery</span>
            </h2>
            <p
              className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              Moments from the Bitcoin Workshop 2025
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
                      Bitcoin Workshop 2025
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
              Ready to <span className="text-yellow-500">Learn</span> Crypto?
            </h2>
            <p
              className="text-xl text-gray-600 animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              Join the Bitcoin Workshop and start your cryptocurrency journey
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl border border-yellow-200/50 overflow-hidden hover:shadow-3xl transition-shadow duration-500">
            <div className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 px-8 py-6 animate-gradient">
              <h3 className="text-2xl font-bold text-gray-900 text-center">
                Bitcoin Workshop Registration
              </h3>
              <p className="text-center text-gray-800 mt-2">
                Master Cryptocurrency Fundamentals
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
                    Stay tuned for the next Bitcoin Workshop!
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
                    Secure your spot in the Bitcoin Workshop. Register now!
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
                    Registration for Bitcoin Workshop has been closed. Thank you for your interest!
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
              Workshop <span className="text-yellow-500">Details</span>
            </h2>
            <p
              className="text-xl text-gray-600 animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              Everything you need to know about the workshop
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
              <h3 className="font-bold text-gray-900 mb-2">Workshop Date</h3>
              <p className="text-gray-600">November 12, 2025</p>
              <p className="text-gray-600 text-sm">6:00 PM - 8:00 PM</p>
            </div>
            <div
              className="text-center animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Venue</h3>
              <p className="text-gray-600">Seminar Hall</p>
              <p className="text-gray-600 text-sm">CSE Department, SVNIT</p>
            </div>
            <div
              className="text-center animate-fade-in-up"
              style={{ animationDelay: "0.5s" }}
            >
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Format</h3>
              <p className="text-gray-600">Hands-On Workshop</p>
              <p className="text-gray-600 text-sm">Interactive Sessions</p>
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

export default BitcoinWorkshop2025Page;
