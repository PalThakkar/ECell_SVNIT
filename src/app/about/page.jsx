"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import GroupPhotoCarousel from "@/components/GroupPhotoCarousel";

const AboutPage = () => {
  return (
    <main className="min-h-screen text-black">
      <div className="max-w-none w-[90%] mx-auto px-2 md:px-4 pt-24 pb-16">
        {/* Intro Section */}
        <motion.div
          className="mt-2 bg-white rounded-2xl py-12 px-[2%] border-2 border-[#fbbd58]/25 shadow-2xl transform transition-transform duration-300 hover:-translate-y-1"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-black tracking-tight text-left">
                About Us
              </h1>
              <span className="block h-1 w-20 mt-2 bg-[#fbbd58] rounded"></span>
            </div>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-10 items-center">
            <div className="text-left">
              <div className="mt-3 flex items-end gap-2">
                <span className="text-3xl md:text-4xl leading-tight text-gray-800 font-semibold">
                  Welcome to
                </span>
                <span className="relative inline-block align-bottom">
                  <span className="relative text-5xl md:text-6xl font-black leading-none px-1 text-[#fbbd58]">
                    E-Cell
                  </span>
                </span>
              </div>

              <div className="mt-6 max-w-[700px]">
                <p className="text-lg md:text-xl leading-8 text-gray-700">
                  NIT-Surat’s Entrepreneurship Cell (E-Cell) was established in
                  June 2024, aims to serve as a hub for{" "}
                  <span className="font-semibold text-[#fbbd58]">
                    innovation
                  </span>{" "}
                  by organizing multiple events to foster{" "}
                  <span className="font-semibold text-[#fbbd58]">
                    entrepreneurial
                  </span>{" "}
                  mindset, innovation and ambition among{" "}
                  <span className="font-semibold text-[#fbbd58]">students</span>
                  .
                </p>
                <p className="text-lg md:text-xl leading-8 text-gray-700 mt-5">
                  Guided by our{" "}
                  <span className="font-semibold text-black">
                    Chairperson, Dr. Amit Singh
                  </span>{" "}
                  from the Department of Mechanical Engineering and{" "}
                  <span className="font-semibold text-black">
                    Co-Chairperson, Dr. Vaishali Dhingra
                  </span>{" "}
                  from the Department of Mathematics and Humanities, we aspire
                  to transform student ideas into viable business ventures and
                  fostering a culture of job creators not just job seekers.
                </p>
                <p className="text-lg md:text-xl leading-8 text-gray-700 mt-5">
                  This cell is a dynamic mini-ecosystem designed to cultivate an
                  entrepreneurial mindset and equip students with the practical
                  skills needed to launch their own startups and serving as a
                  platform for students to test their ideas through a variety of
                  competitive events. They achieve this through educational
                  workshops, high impact competitions and extensive{" "}
                  <span className="font-semibold text-[#fbbd58]">
                    networking
                  </span>{" "}
                  opportunities.
                </p>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-white/70 border border-[#fbbd58] text-black shadow-sm mt-5 sm:hidden">
                  Est. June 2024
                </span>
              </div>
            </div>

            <div className="w-full h-full min-h-[400px] md:min-h-[500px] lg:min-h-[600px] rounded-2xl overflow-hidden border-2 border-[#fbbd58]/50 shadow-lg">
              <GroupPhotoCarousel />
            </div>
          </div>
        </motion.div>

        {/* What We Do Section */}
        <motion.section
          className="bg-white rounded-2xl py-12 px-[2%] mt-24 border border-gray-200"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <div className="flex flex-col gap-8">
            <div className="w-full text-left">
              <h2 className="text-2xl md:text-3xl font-black tracking-wide">
                What We Do
                <span className="block h-1 w-12 mt-2 bg-[#fbbd58] rounded"></span>
              </h2>
            </div>
            <div className="w-full grid grid-flow-col auto-cols-[80%] sm:auto-cols-[60%] md:auto-cols-auto md:grid-flow-row md:grid-cols-3 gap-6 md:gap-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory px-1">
              {/* Card 1 */}
              <motion.div
                className="relative rounded-2xl border border-gray-200 shadow p-6 bg-white border-l-4 border-l-[#fbbd58] transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl snap-start min-w-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full mr-2 bg-[#fbbd58] text-black font-bold shadow">
                    1
                  </span>
                  Events & Workshops
                </h3>
                <p className="text-gray-600 leading-7">
                  Organising competitions, Quiz Events and summits to foster{" "}
                  <span className="font-semibold text-[#fbbd58]">
                    entrepreneurial
                  </span>{" "}
                  thinking and culture amongst{" "}
                  <span className="font-semibold text-[#fbbd58]">students</span>
                  .
                </p>
              </motion.div>
              {/* Card 2 */}
              <motion.div
                className="relative rounded-2xl border border-gray-200 shadow p-6 bg-white border-l-4 border-l-[#fbbd58] transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl snap-start min-w-0"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55 }}
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full mr-2 bg-[#fbbd58] text-black font-bold shadow">
                    2
                  </span>
                  Skill Development:
                </h3>
                <p className="text-gray-600 leading-7">
                  Conducts sessions and events on business modelling, marketing
                  and finance to mimic real-world startups.
                </p>
              </motion.div>
              {/* Card 3 */}
              <motion.div
                className="relative rounded-2xl border border-gray-200 shadow p-6 bg-white border-l-4 border-l-[#fbbd58] transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl snap-start min-w-0"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full mr-2 bg-[#fbbd58] text-black font-bold shadow">
                    3
                  </span>
                  Community Building
                </h3>
                <p className="text-gray-600 leading-7">
                  Connects students with alumni, industry experts, fellow
                  students and other founders to create an interactive
                  environment to foster connections.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* What's in Store Section */}
        <motion.section
          className="mt-24 bg-white rounded-2xl py-12 px-[2%] border border-gray-200"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="flex flex-col gap-8">
            <div className="w-full text-left">
              <h2 className="text-2xl md:text-3xl font-black tracking-wide">
                What&apos;s in Store
                <span className="block h-1 w-16 mt-2 bg-[#fbbd58] rounded"></span>
              </h2>
            </div>
            <div className="w-full grid md:grid-cols-2 gap-8">
              <motion.div
                className="relative bg-white rounded-2xl border border-gray-200 shadow p-8 border-l-4 border-l-[#fbbd58] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-[#fbbd58] group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  <span className="font-semibold text-black">E-Summit</span> &
                  Beyond
                </h3>
                <p className="text-gray-600 leading-7">
                  The{" "}
                  <span className="font-semibold text-black">
                    flagship event of E-Cell NIT-Surat
                  </span>
                  , celebrates{" "}
                  <span className="font-semibold text-[#fbbd58]">
                    innovation
                  </span>{" "}
                  and{" "}
                  <span className="font-semibold text-[#fbbd58]">
                    entrepreneurship
                  </span>{" "}
                  by featuring competitions, workshops, and{" "}
                  <span className="font-semibold text-[#fbbd58]">
                    networking
                  </span>{" "}
                  with experts and alumni. It empowers{" "}
                  <span className="font-semibold text-[#fbbd58]">students</span>{" "}
                  to transform their ideas into impactful ventures.
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5 text-[#fbbd58]"
                  >
                    <path d="M12 2l3 7h7l-5.5 4.1L18 20l-6-4-6 4 1.5-6.9L2 9h7z" />
                  </svg>
                  <Link
                    href="/events/esummit"
                    className="text-sm font-semibold px-4 py-2 rounded-full border border-black text-black hover:bg-black hover:text-white transition-colors"
                  >
                    Learn more
                  </Link>
                </div>
              </motion.div>
              <motion.div
                className="relative bg-white rounded-2xl border border-gray-200 shadow p-8 border-l-4 border-l-[#fbbd58] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-[#fbbd58] group"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55 }}
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  <span className="font-semibold text-black">Lego </span>
                  Start-Up
                </h3>
                <p className="text-gray-600 leading-7">
                  Held every odd semester, it is designed to ignite the{" "}
                  <span className="font-semibold text-[#fbbd58]">
                    entrepreneurial
                  </span>{" "}
                  spirit among{" "}
                  <span className="font-semibold text-[#fbbd58]">students</span>{" "}
                  and build a strong startup culture. The event features
                  interactive workshops, mentor-led sessions, and the lively
                  Business Fair, where students showcase their models and get
                  valuable feedback. The grand finale is the{" "}
                  <span className="font-semibold text-black">
                    Investor Pitching round
                  </span>
                  , where the remarkable ideas take the stage and get the
                  recognition they deserve.
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5 text-[#fbbd58]"
                  >
                    <path d="M4 10h16v2H4zm0 4h10v2H4zm0-8h16v2H4z" />
                  </svg>
                  <Link
                    href="/lego"
                    className="text-sm font-semibold px-4 py-2 rounded-full border border-black text-black hover:bg-black hover:text-white transition-colors"
                  >
                    Learn more
                  </Link>
                </div>
              </motion.div>
              <motion.div
                className="relative bg-white rounded-2xl border border-gray-200 shadow p-6 md:col-span-2 border-l-4 border-l-[#fbbd58] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-[#fbbd58] group"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  <span className="font-semibold text-black">Corporate </span>{" "}
                  Catastrophe
                </h3>
                <p className="text-gray-600 leading-7">
                  This event aims to challenge critical thinking and test
                  problem-solving skills of the participants. Consisting of
                  multiple rounds incorporating riddles and puzzles, the entire
                  event was a series of interconnected challenges that tested
                  player’s observation, problem-solving, and deduction skills to
                  progress from one room to the next.
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5 text-[#fbbd58]"
                  >
                    <path d="M3 6h18v2H3zm0 5h18v2H3zm0 5h18v2H3z" />
                  </svg>
                  <Link
                    href="/events/corporate_catastrophe"
                    className="text-sm font-semibold px-4 py-2 rounded-full border border-black text-black hover:bg-black hover:text-white transition-colors"
                  >
                    Learn more
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Our Vision & Impact Section (Replaced Services / Testimonials) */}
        <motion.section
          className="mt-24 bg-white rounded-2xl py-12 px-[4%] border border-gray-200 shadow-xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          {/* Main Grid: Vision + Right Text Card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            
            {/* Left Column */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-6 text-left">
              <div>
                <h2 className="text-3xl md:text-4xl font-black text-[#fbbd58] tracking-tight">
                  Our Vision
                </h2>
                <span className="block h-1 w-16 mt-2 bg-[#fbbd58] rounded"></span>
              </div>

              <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
                Fostering entrepreneurship, innovation, creativity, collaboration, and student leadership
              </h3>

              <div className="space-y-4 text-gray-700 text-base md:text-lg leading-relaxed">
                <p>
                  <span className="font-bold text-[#fbbd58]">E-Cell</span> at SVNIT envisions a vibrant campus where entrepreneurship thrives as the driving force of innovation and impact.
                </p>
                <p>
                  We are building more than just a club we are creating a{" "}
                  <span className="font-semibold text-[#fbbd58]">movement</span> that transforms ambitious ideas into reality, nurtures creativity, and develops the next generation of industry leaders and change-makers.
                </p>
              </div>
            </div>

            {/* Right Column: Text Card */}
            <div className="lg:col-span-5 bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-8 flex flex-col justify-between shadow-sm space-y-4 border-l-4 border-l-[#fbbd58]">
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                Empowering young entrepreneurs. We provide resources, mentorship, and networking opportunities to help students scale their ventures. Our programs foster critical thinking, problem-solving, and a global perspective. Through workshops, competitions, and corporate partnerships, we bridge the gap between academic theory and practical business skills.
              </p>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed pt-2">
                From pre-seed funding to series A preparation, E-Cell SVNIT supports your entire entrepreneurial lifecycle, providing the foundation for sustainable success.
              </p>
            </div>

          </div>

          {/* Numbers / Impact Subsection */}
          <div className="mt-16 text-center border-t border-gray-100 pt-12">
            <h3 className="text-2xl md:text-3xl font-black text-gray-900">
              Our Impact in <span className="text-[#fbbd58]">Numbers</span>
            </h3>
            <p className="text-gray-500 mt-2 text-sm md:text-base">
              From ideation to execution, we have been the catalyst for entrepreneurial journeys at SVNIT
            </p>

            {/* Grid Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-8">
              <div className="bg-white border-2 border-[#fbbd58]/40 rounded-xl py-6 px-4 shadow-sm hover:shadow-md hover:border-[#fbbd58] transition-all">
                <span className="text-3xl md:text-4xl font-extrabold text-[#fbbd58]">2000+</span>
              </div>

              <div className="bg-white border-2 border-[#fbbd58]/40 rounded-xl py-6 px-4 shadow-sm hover:shadow-md hover:border-[#fbbd58] transition-all">
                <span className="text-3xl md:text-4xl font-extrabold text-[#fbbd58]">5+</span>
              </div>

              <div className="bg-white border-2 border-[#fbbd58]/40 rounded-xl py-6 px-4 shadow-sm hover:shadow-md hover:border-[#fbbd58] transition-all">
                <span className="text-3xl md:text-4xl font-extrabold text-[#fbbd58]">5+</span>
              </div>

              <div className="bg-white border-2 border-[#fbbd58]/40 rounded-xl py-6 px-4 shadow-sm hover:shadow-md hover:border-[#fbbd58] transition-all">
                <span className="text-3xl md:text-4xl font-extrabold text-[#fbbd58]">10+</span>
              </div>
            </div>
          </div>
        </motion.section>

      </div>
    </main>
  );
};

export default AboutPage;