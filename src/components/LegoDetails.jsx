"use client";

import React from "react";
import FadeIn from "./FadeIn";
import Border from "./Border";

// Updated UI to match the LEGO page styling: card-like panels, subtle gradients and a timeline.
const LegoDetails = () => {
  return (
    <FadeIn>
      <div className="space-y-8">
        <div className="grid gap-6 lg:grid-cols-2 items-start">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-md border border-yellow-200/40">
            <h3 className="text-lg font-semibold text-gray-900">Overview</h3>
            <p className="mt-3 text-sm text-gray-700 leading-relaxed">
              Transform your ideas into a sustainable venture in our LEGO
              Startup Business Fair — a 4-week hands-on program where teams
              prototype, validate, and pitch.
            </p>

            {/* <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-xl p-4 bg-gradient-to-br from-yellow-50 to-white border border-yellow-200/40">
                <div className="text-2xl font-black text-yellow-600">4</div>
                <div className="text-xs font-semibold text-gray-800">Weeks</div>
              </div>
              <div className="rounded-xl p-4 bg-gradient-to-br from-yellow-50 to-white border border-yellow-200/40">
                <div className="text-2xl font-black text-yellow-600">
                  ₹10,000
                </div>
                <div className="text-xs font-semibold text-gray-800">
                  Winner Prize
                </div>
              </div>
            </div> */}
          </div>

          {/*<div className="bg-white rounded-2xl p-6 shadow-md border border-yellow-200/30">
            <h3 className="text-lg font-semibold text-gray-900">
              What to Expect
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-gray-700">
              <li className="flex gap-3">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-yellow-400 text-sm font-bold text-gray-900">
                  1
                </span>
                <div>
                  <div className="font-medium text-gray-900">
                    Ideation & Mentoring
                  </div>
                  <div className="text-xs text-gray-600">
                    Validate ideas and refine value propositions with mentors.
                  </div>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-yellow-400 text-sm font-bold text-gray-900">
                  2
                </span>
                <div>
                  <div className="font-medium text-gray-900">
                    Prototype Week
                  </div>
                  <div className="text-xs text-gray-600">
                    Build mockups and test user flows quickly.
                  </div>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-yellow-400 text-sm font-bold text-gray-900">
                  3
                </span>
                <div>
                  <div className="font-medium text-gray-900">
                    Pitch Practice
                  </div>
                  <div className="text-xs text-gray-600">
                    Polish your pitch and receive judge feedback.
                  </div>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-300 text-sm font-bold text-gray-900">
                  4
                </span>
                <div>
                  <div className="font-medium text-yellow-600">
                    Final Demo Day
                  </div>
                  <div className="text-xs text-gray-600">
                    Present to mentors and a panel to win prizes and support.
                  </div>
                </div>
              </li>
            </ul>
          </div>*/}
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
            <h4 className="text-sm font-semibold text-gray-900">Event Dates</h4>
            <p className="mt-2 text-sm text-gray-700">
              Starting October 21st — exact schedules will be shared with
              registered teams.
            </p>

            <h4 className="mt-6 text-sm font-semibold text-gray-900">
              Participation
            </h4>
            <p className="mt-2 text-sm text-gray-700">
              Open to all aspiring entrepreneurs. Teams of 2–5 members
              recommended.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
            <h4 className="text-sm font-semibold text-gray-900">
              D-Day & Judging
            </h4>
            <p className="mt-2 text-sm text-gray-700">
              Showcase your business model on Demo Day. Judging favors
              problem-solution fit, execution, market potential and demo
              quality.
            </p>

            <div className="mt-6">
              <h5 className="text-xs font-semibold text-gray-900">
                The Opportunity
              </h5>
              <p className="mt-2 text-xs text-gray-600">
                Gain mentorship, networking, and practical entrepreneurship
                experience across workshops and mentor hours.
              </p>
            </div>
          </div>
        </div>

        <Border className="mt-8">
          {/* <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h4 className="text-sm font-semibold text-gray-900">
                Ready to Build?
              </h4>
              <p className="mt-1 text-sm text-gray-600">
                Register your team and submit your startup idea via the
                submission form.
              </p>
            </div>
            <div className="flex-shrink-0">
              <a
                href="#"
                className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-300 text-sm font-semibold text-gray-900 shadow"
              >
                Register Now
              </a>
            </div>
          </div> */}
        </Border>
      </div>
    </FadeIn>
  );
};

export default LegoDetails;
