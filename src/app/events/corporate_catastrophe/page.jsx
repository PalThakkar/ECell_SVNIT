import React, { useState } from "react";

const CorporateCatastrophePage = () => {
  const [isRegistrationActive, setIsRegistrationActive] = useState(false);

  const toggleRegistration = () => {
    setIsRegistrationActive(!isRegistrationActive);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-yellow-300/5"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-7xl font-black mb-6 text-gray-900">
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent">
                CORPORATE
              </span>
              <span className="block text-4xl md:text-5xl mt-2 font-bold text-gray-900">
                CATASTROPHE
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-700 font-medium max-w-4xl mx-auto">
              The Ultimate Problem-Solving Challenge
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-yellow-300 mx-auto mt-8 rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-yellow-200/50">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Test Your Limits
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Corporate Catastrophe challenges your critical thinking and
                  problem-solving skills through multiple interconnected rounds
                  of riddles, puzzles, and deduction challenges. Navigate
                  through a series of rooms, each presenting unique obstacles
                  that test your observation, analytical thinking, and
                  collaborative abilities under intense time pressure.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-yellow-400/20 to-yellow-300/10 rounded-xl p-6 border border-yellow-300/30">
                  <div className="text-3xl font-black text-yellow-600 mb-2">
                    5
                  </div>
                  <div className="text-gray-800 font-semibold">
                    Challenge Rounds
                  </div>
                </div>
                <div className="bg-gradient-to-br from-yellow-400/20 to-yellow-300/10 rounded-xl p-6 border border-yellow-300/30">
                  <div className="text-3xl font-black text-yellow-600 mb-2">
                    60
                  </div>
                  <div className="text-gray-800 font-semibold">
                    Minutes Per Round
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-yellow-200/50">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Challenge Structure
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-gray-900 font-bold text-sm">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Logic Labyrinth
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Navigate through complex logical puzzles and pattern
                        recognition challenges
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-gray-900 font-bold text-sm">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Business Crisis Chamber
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Solve real-world business problems under pressure
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-gray-900 font-bold text-sm">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Riddle Room
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Decode cryptic messages and hidden clues
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-gray-900 font-bold text-sm">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Strategy Simulation
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Make critical decisions in high-stakes scenarios
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-300 rounded-full flex items-center justify-center text-gray-900 font-bold text-sm">
                      5
                    </div>
                    <div>
                      <h4 className="font-semibold text-yellow-600">
                        Final Catastrophe
                      </h4>
                      <p className="text-gray-600 text-sm">
                        The ultimate team challenge combining all skills
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Tested Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Skills <span className="text-yellow-500">Under Test</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every round is designed to push your cognitive abilities to the
              limit
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group hover:transform hover:-translate-y-2 transition-all duration-300">
              <div className="bg-gradient-to-br from-yellow-50 to-white rounded-2xl p-8 shadow-lg border-2 border-yellow-200/50 group-hover:shadow-xl group-hover:border-yellow-300">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-300 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-2xl">🧠</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Critical Thinking
                </h3>
                <p className="text-gray-700">
                  Analyze complex problems and develop strategic solutions under
                  pressure
                </p>
              </div>
            </div>

            <div className="group hover:transform hover:-translate-y-2 transition-all duration-300">
              <div className="bg-gradient-to-br from-yellow-50 to-white rounded-2xl p-8 shadow-lg border-2 border-yellow-200/50 group-hover:shadow-xl group-hover:border-yellow-300">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-300 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-2xl">🔍</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Observation
                </h3>
                <p className="text-gray-700">
                  Spot hidden patterns, clues, and details that others might
                  miss
                </p>
              </div>
            </div>

            <div className="group hover:transform hover:-translate-y-2 transition-all duration-300">
              <div className="bg-gradient-to-br from-yellow-50 to-white rounded-2xl p-8 shadow-lg border-2 border-yellow-200/50 group-hover:shadow-xl group-hover:border-yellow-300">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-300 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-2xl">🧩</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Problem Solving
                </h3>
                <p className="text-gray-700">
                  Break down complex challenges into manageable components
                </p>
              </div>
            </div>

            <div className="group hover:transform hover:-translate-y-2 transition-all duration-300">
              <div className="bg-gradient-to-br from-yellow-50 to-white rounded-2xl p-8 shadow-lg border-2 border-yellow-200/50 group-hover:shadow-xl group-hover:border-yellow-300">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-300 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Quick Deduction
                </h3>
                <p className="text-gray-700">
                  Make rapid, accurate conclusions from limited information
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-gray-900 mb-4">
              Ready to Face the{" "}
              <span className="text-yellow-500">Catastrophe</span>?
            </h2>
            <p className="text-xl text-gray-600">
              Register your team and prepare for the ultimate challenge
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl border border-yellow-200/50 overflow-hidden">
            <div className="bg-gradient-to-r from-yellow-400 to-yellow-300 px-8 py-6">
              <h3 className="text-2xl font-bold text-gray-900 text-center">
                Corporate Catastrophe Registration
              </h3>
              <p className="text-center text-gray-800 mt-2">
                Dare to Enter the Challenge
              </p>
            </div>

            <div className="p-8">
              {isRegistrationActive ? (
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Team Name*
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-yellow-400 focus:outline-none transition-colors"
                        placeholder="Enter your team name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Team Size*
                      </label>
                      <select className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-yellow-400 focus:outline-none transition-colors">
                        <option value="">Select team size</option>
                        <option value="2">2 Members</option>
                        <option value="3">3 Members</option>
                        <option value="4">4 Members</option>
                        <option value="5">5 Members (Max)</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Team Captain Name*
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-yellow-400 focus:outline-none transition-colors"
                        placeholder="Captain full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Captain Phone*
                      </label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-yellow-400 focus:outline-none transition-colors"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Captain Email*
                      </label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-yellow-400 focus:outline-none transition-colors"
                        placeholder="captain@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Institution*
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-yellow-400 focus:outline-none transition-colors"
                        placeholder="Your college/university"
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-900">
                      Team Members (Add remaining members)
                    </h4>
                    {[1, 2, 3, 4].map((num) => (
                      <div
                        key={num}
                        className="grid md:grid-cols-3 gap-4 p-4 bg-gray-50 rounded-xl border border-gray-200"
                      >
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Member {num} Name
                          </label>
                          <input
                            type="text"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-yellow-400 focus:outline-none transition-colors"
                            placeholder={`Member ${num} name`}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Member {num} Email
                          </label>
                          <input
                            type="email"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-yellow-400 focus:outline-none transition-colors"
                            placeholder={`member${num}@example.com`}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Member {num} Phone
                          </label>
                          <input
                            type="tel"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-yellow-400 focus:outline-none transition-colors"
                            placeholder={`+91 XXXXX XXXXX`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Previous Experience with Puzzle/Escape Room Events
                    </label>
                    <textarea
                      rows="3"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-yellow-400 focus:outline-none transition-colors"
                      placeholder="Describe any relevant experience your team has (optional)"
                    ></textarea>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      What motivates your team to participate?*
                    </label>
                    <textarea
                      rows="3"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-yellow-400 focus:outline-none transition-colors"
                      placeholder="Tell us why you want to take on this challenge"
                    ></textarea>
                  </div>

                  <div className="pt-6">
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-yellow-400 to-yellow-300 text-gray-900 font-bold py-4 px-8 rounded-xl hover:from-yellow-500 hover:to-yellow-400 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
                    >
                      Enter the Catastrophe
                    </button>
                  </div>
                </form>
              ) : (
                <div className="text-center py-12">
                  <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-4xl">⚠️</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Challenge Currently Inactive
                  </h3>
                  <p className="text-gray-600 mb-8">
                    The Corporate Catastrophe registration will open soon.
                    Prepare yourselves!
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
              className="bg-gray-800 text-white px-6 py-2 rounded-lg text-sm hover:bg-gray-700 transition-colors"
            >
              {isRegistrationActive ? "Deactivate" : "Activate"} Registration
              (Admin)
            </button>
          </div>
        </div>
      </section>

      {/* Rules & Guidelines */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-4">
              Challenge <span className="text-yellow-500">Rules</span>
            </h2>
            <p className="text-xl text-gray-600">
              Essential guidelines for participants
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-yellow-50 to-white rounded-2xl p-8 border-2 border-yellow-200/50 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="text-yellow-500 mr-3 text-3xl">⚠️</span>
                Competition Rules
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-3 font-bold">•</span>
                  Teams must consist of 2-5 members
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-3 font-bold">•</span>
                  No electronic devices allowed during challenges
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-3 font-bold">•</span>
                  Each round has strict time limits
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-3 font-bold">•</span>
                  Teams must work together - no individual solutions
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-3 font-bold">•</span>
                  Hints are available but come with time penalties
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-white rounded-2xl p-8 border-2 border-yellow-200/50 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="text-yellow-500 mr-3 text-3xl">🏆</span>
                Winning Criteria
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-3 font-bold">•</span>
                  Speed of completion for each round
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-3 font-bold">•</span>
                  Accuracy of solutions provided
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-3 font-bold">•</span>
                  Creative problem-solving approaches
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-3 font-bold">•</span>
                  Team collaboration and communication
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-3 font-bold">•</span>
                  Overall performance across all rounds
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>
    </div>
  );
};

export default CorporateCatastrophePage;
