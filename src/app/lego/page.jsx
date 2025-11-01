import React, { useState } from "react";
import FormDataLego from "../../components/FormDatalego";
import LegoDetails from "../../components/LegoDetails";

const LegoFormPage = () => {
  const [isRegistrationActive, setIsRegistrationActive] = useState(false);

  const toggleRegistration = () =>
    setIsRegistrationActive(!isRegistrationActive);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100">
      {/* HERO */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-yellow-300/5" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-7xl font-black mb-6 text-gray-900">
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent">
                LEGO
              </span>
              <span className="block text-4xl md:text-5xl mt-2 font-bold text-gray-900">
                STARTUP
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 font-medium max-w-4xl mx-auto">
              Join the Business Fair and turn playful ideas into sustainable
              ventures
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-yellow-300 mx-auto mt-8 rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-yellow-200/50">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Build. Pitch. Grow.
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  The LEGO Startup event helps founders prototype ideas fast and
                  present them to mentors and peers. Over several weeks, teams
                  iterate their concepts and craft a pitch that communicates
                  value and traction.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-yellow-400/20 to-yellow-300/10 rounded-xl p-6 border border-yellow-300/30">
                  <div className="text-3xl font-black text-yellow-600 mb-2">
                    4
                  </div>
                  <div className="text-gray-800 font-semibold">
                    Weeks of Workshops
                  </div>
                </div>
                <div className="bg-gradient-to-br from-yellow-400/20 to-yellow-300/10 rounded-xl p-6 border border-yellow-300/30">
                  <div className="text-3xl font-black text-yellow-600 mb-2">
                    ₹10,000
                  </div>
                  <div className="text-gray-800 font-semibold">
                    Winner Prize
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-yellow-200/50">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  What to Expect
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-gray-900 font-bold text-sm">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Ideation & Mentoring
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Validate ideas with mentors and refine value
                        propositions.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-gray-900 font-bold text-sm">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Prototype Week
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Build quick mockups and test user flows.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-gray-900 font-bold text-sm">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Pitch Practice
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Polish your pitch and receive feedback from judges.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-300 rounded-full flex items-center justify-center text-gray-900 font-bold text-sm">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold text-yellow-600">
                        Final Demo Day
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Present to mentors and a panel to win prizes and
                        support.
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
                  <span className="text-2xl">🧩</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Innovation
                </h3>
                <p className="text-gray-700">
                  Think outside the box to design unique and functional
                  Lego-based startup ideas that stand out
                </p>
              </div>
            </div>

            <div className="group hover:transform hover:-translate-y-2 transition-all duration-300">
              <div className="bg-gradient-to-br from-yellow-50 to-white rounded-2xl p-8 shadow-lg border-2 border-yellow-200/50 group-hover:shadow-xl group-hover:border-yellow-300">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-300 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Team Collaboration
                </h3>
                <p className="text-gray-700">
                  Coordinate effectively with your teammates to turn innovative
                  ideas into structured Lego prototypes
                </p>
              </div>
            </div>

            <div className="group hover:transform hover:-translate-y-2 transition-all duration-300">
              <div className="bg-gradient-to-br from-yellow-50 to-white rounded-2xl p-8 shadow-lg border-2 border-yellow-200/50 group-hover:shadow-xl group-hover:border-yellow-300">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-300 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-2xl">💡</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Strategic Planning
                </h3>
                <p className="text-gray-700">
                  Plan your resources, time, and structure efficiently to meet
                  goals just like a real startup would
                </p>
              </div>
            </div>

            <div className="group hover:transform hover:-translate-y-2 transition-all duration-300">
              <div className="bg-gradient-to-br from-yellow-50 to-white rounded-2xl p-8 shadow-lg border-2 border-yellow-200/50 group-hover:shadow-xl group-hover:border-yellow-300">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-300 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-2xl">📈</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Pitching
                </h3>
                <p className="text-gray-700">
                  Communicate your idea clearly and confidently, showcasing your
                  startup vision and Lego creation
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* REGISTRATION */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-3xl shadow-2xl border border-yellow-200/50 overflow-hidden">
            <div className="bg-gradient-to-r from-yellow-400 to-yellow-300 px-8 py-6">
              <h3 className="text-2xl font-bold text-gray-900 text-center">
                LEGO Startup Registration
              </h3>
              <p className="text-center text-gray-800 mt-2">
                Dare to Enter the Challenge
              </p>
            </div>

            <div className="p-8 mb-10">
              {isRegistrationActive ? (
                <FormDataLego />
              ) : (
                <div className="text-center py-12">
                  <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-4xl">⚠️</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Registration Currently Inactive
                  </h3>
                  <p className="text-gray-600 mb-8">
                    The LEGO Startup registration will open soon. Prepare
                    yourselves!
                  </p>
                  <button className="bg-gray-400 text-white font-bold py-3 px-8 rounded-xl cursor-not-allowed">
                    Registration Closed
                  </button>
                </div>
              )}
            </div>
          </div>
          <div className="mt-8 mb-12 text-center">
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

      {/* GUIDELINES */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-4">
              Guide<span className="text-yellow-500">lines</span>
            </h2>
            <p className="text-xl text-gray-600">
              Important information for participants
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-yellow-50 to-white rounded-2xl p-8 border-2 border-yellow-200/50 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                <span className="text-yellow-500 mr-3 text-3xl">⚠️</span>
                Participation Rules
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li>
                  <span className="text-yellow-500 mr-3 font-bold">•</span>Teams
                  must consist of 2-5 members
                </li>
                <li>
                  <span className="text-yellow-500 mr-3 font-bold">•</span>One
                  submission per team
                </li>
                <li>
                  <span className="text-yellow-500 mr-3 font-bold">•</span>
                  Follow event timelines and workshop schedules
                </li>
                <li>
                  <span className="text-yellow-500 mr-3 font-bold">•</span>Be
                  prepared to demo a prototype during Demo Day
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-white rounded-2xl p-8 border-2 border-yellow-200/50 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                <span className="text-yellow-500 mr-3 text-3xl">🏆</span>
                Winning Criteria
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li>
                  <span className="text-yellow-500 mr-3 font-bold">•</span>
                  Problem-solution fit and clarity of idea
                </li>
                <li>
                  <span className="text-yellow-500 mr-3 font-bold">•</span>
                  Execution plan and feasibility
                </li>
                <li>
                  <span className="text-yellow-500 mr-3 font-bold">•</span>
                  Market potential and user value
                </li>
                <li>
                  <span className="text-yellow-500 mr-3 font-bold">•</span>
                  Presentation and demo quality
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LegoFormPage;
