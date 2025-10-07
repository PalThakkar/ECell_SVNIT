import React, { useState } from "react";

const ESummitPage = () => {
  const [isRegistrationActive, setIsRegistrationActive] = useState(false);

  const toggleRegistration = () => {
    setIsRegistrationActive(!isRegistrationActive);
  };

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
                  2025
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
                  E-Summit 2025 is the flagship entrepreneurship event of E-Cell
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
                    ₹10L+
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
              Register now for E-Summit 2025 and be part of India's premier
              entrepreneurship event
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl border border-yellow-200/50 overflow-hidden hover:shadow-3xl transition-shadow duration-500">
            <div className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 px-8 py-6 animate-gradient">
              <h3 className="text-2xl font-bold text-gray-900 text-center">
                E-Summit 2025 Registration
              </h3>
              <p className="text-center text-gray-800 mt-2">
                Join the Entrepreneurial Revolution
              </p>
            </div>

            <div className="p-8">
              {isRegistrationActive ? (
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="animate-slide-in-left">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Participant Name*
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-yellow-400 focus:outline-none transition-all duration-300 focus:scale-105"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div className="animate-slide-in-right">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Event Category*
                      </label>
                      <select className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-yellow-400 focus:outline-none transition-all duration-300 focus:scale-105">
                        <option value="">Select Event Category</option>
                        <option value="economic-apex">The Economic Apex</option>
                        <option value="bplan">B-Plan Competition</option>
                        <option value="vegas-street">Vegas Street</option>
                        <option value="edify">Edify</option>
                        <option value="unicorn-talks">Unicorn Talks</option>
                        <option value="networking">Networking Sessions</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div
                      className="animate-fade-in-up"
                      style={{ animationDelay: "0.1s" }}
                    >
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address*
                      </label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-yellow-400 focus:outline-none transition-all duration-300 focus:scale-105"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div
                      className="animate-fade-in-up"
                      style={{ animationDelay: "0.2s" }}
                    >
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number*
                      </label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-yellow-400 focus:outline-none transition-all duration-300 focus:scale-105"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div
                      className="animate-fade-in-up"
                      style={{ animationDelay: "0.3s" }}
                    >
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Institution*
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-yellow-400 focus:outline-none transition-all duration-300 focus:scale-105"
                        placeholder="Your college/university"
                      />
                    </div>
                    <div
                      className="animate-fade-in-up"
                      style={{ animationDelay: "0.4s" }}
                    >
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Year of Study*
                      </label>
                      <select className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-yellow-400 focus:outline-none transition-all duration-300 focus:scale-105">
                        <option value="">Select Year</option>
                        <option value="1">1st Year</option>
                        <option value="2">2nd Year</option>
                        <option value="3">3rd Year</option>
                        <option value="4">4th Year</option>
                        <option value="pg">Post Graduate</option>
                        <option value="working">Working Professional</option>
                      </select>
                    </div>
                  </div>

                  <div
                    className="animate-fade-in-up"
                    style={{ animationDelay: "0.5s" }}
                  >
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Why do you want to attend E-Summit 2025?*
                    </label>
                    <textarea
                      rows="4"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-yellow-400 focus:outline-none transition-all duration-300 focus:scale-105"
                      placeholder="Tell us about your entrepreneurial interests and what you hope to gain from this summit"
                    ></textarea>
                  </div>

                  <div
                    className="animate-fade-in-up"
                    style={{ animationDelay: "0.6s" }}
                  >
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Any startup ideas or business experience?
                    </label>
                    <textarea
                      rows="3"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-yellow-400 focus:outline-none transition-all duration-300 focus:scale-105"
                      placeholder="Share your entrepreneurial background or startup ideas (optional)"
                    ></textarea>
                  </div>

                  <div
                    className="pt-6 animate-fade-in-up"
                    style={{ animationDelay: "0.7s" }}
                  >
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 text-gray-900 font-bold py-4 px-8 rounded-xl hover:from-yellow-500 hover:via-yellow-400 hover:to-yellow-500 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl animate-gradient"
                    >
                      Register for E-Summit 2025
                    </button>
                  </div>
                </form>
              ) : (
                <div className="text-center py-12 animate-fade-in-up">
                  <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse-gentle">
                    <span className="text-4xl">🔒</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Registration Opening Soon
                  </h3>
                  <p className="text-gray-600 mb-8">
                    E-Summit 2025 registration will open soon. Stay tuned for
                    updates!
                  </p>
                  <button className="bg-gray-400 text-white font-bold py-3 px-8 rounded-xl cursor-not-allowed">
                    Registration Closed
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Admin Toggle (for demonstration) */}
          <div className="mt-8 text-center">
            <button
              onClick={toggleRegistration}
              className="bg-gray-800 text-white px-6 py-2 rounded-lg text-sm hover:bg-gray-700 transition-colors hover:scale-105 transform duration-200"
            >
              {isRegistrationActive ? "Deactivate" : "Activate"} Registration
              (Admin)
            </button>
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
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl hover:scale-110 transition-transform duration-300">
                📅
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Event Dates</h3>
              <p className="text-gray-600">To be announced soon</p>
              <p className="text-gray-600 text-sm">Stay Tuned!</p>
            </div>
            <div
              className="text-center animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl hover:scale-110 transition-transform duration-300">
                📍
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Venue</h3>
              <p className="text-gray-600">SVNIT Campus</p>
              <p className="text-gray-600 text-sm">Surat, Gujarat</p>
            </div>
            <div
              className="text-center animate-fade-in-up"
              style={{ animationDelay: "0.5s" }}
            >
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl hover:scale-110 transition-transform duration-300">
                🎯
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
      `}</style>
    </div>
  );
};

export default ESummitPage;
