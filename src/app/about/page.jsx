"use client";
import ContactSection from "@/components/ContactSection";
import Cultures from "@/components/Cultures";
import PageIntro from "@/components/PageIntro";
import React from "react";
import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <div className="bg-white min-h-screen scroll-smooth m-5 ml-5 mt-20 mb-5">
      {/* Intro Section */}
      <motion.div
        className="mt-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
      >
        <span
          className="text-[#FBBD58] text-left block font-bold text-3xl md:text-4xl relative pb-2 mt-2 ml-10"
          style={{ textShadow: "2px 2px 6px #000, 0 1px 0 #000" }}
        >
          About <span className="text-black">Us</span>
          <span
            className="absolute left-0 bottom-0 w-full h-[3px] bg-[#FBBD58] rounded"
            style={{ opacity: 0.5 }}
          ></span>
        </span>
        <div className="flex flex-col md:flex-row md:items-center md:gap-8 w-full mt-4">
          {/* Left: Heading */}
          <div className="md:w-1/3 w-full mb-4 md:mb-0 ml-10 mr-10 mt-0">
            <div className="text-center flex items-end flex-wrap gap-1">
              <span className="text-black font-normal text-2xl md:text-3xl leading-tight">
                Welcome to
              </span>
              <span className="relative inline-block align-bottom">
                <span
                  className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-3/4 bg-[#FBBD58] z-0 rounded"
                  style={{ height: "70%", minWidth: "100%", top: "60%" }}
                ></span>
                <span
                  className="relative text-black font-extrabold text-5xl md:text-6xl leading-none px-2"
                  style={{ zIndex: 1 }}
                >
                  E-Cell
                </span>
              </span>
            </div>
          </div>
          {/* Right: Intro Text */}
          <div className="md:w-2/3 w-full">
            <p className="text-black mt-4 md:mt-0 text-xl md:text-2xl">
              NIT-Surat’s Entrepreneurship Cell (E-Cell) was established in June
              2024, aims to serve as a hub for innovation by organizing multiple
              events to foster entrepreneurial mindset, innovation and ambition
              among students.
            </p>
            <p className="text-black mt-4 md:mt-0 text-xl md:text-2xl">
              Guided by our{" "}
              <span className="font-bold text-[#FBBD58]">
                Chairperson, Dr. Amit Singh
              </span>{" "}
              from the Department of Mechanical Engineering and{" "}
              <span className="font-bold text-[#FBBD58]">
                Co-Chairperson, Dr. Vaishali Dhingra
              </span>
              from the Department of Mathematics and Humanities, we aspire to
              transform student ideas into viable business ventures and
              fostering a culture of job creators not just job seekers.
            </p>
            <p className="text-black mt-4 md:mt-0 text-xl md:text-2xl">
              This cell is a dynamic mini-ecosystem designed to cultivate an
              entrepreneurial mindset and equip students with the practical
              skills needed to launch their own startups and serving as a
              platform for students to test their ideas through a variety of
              competitive events. They achieve this through educational
              workshops, high impact competitions and extensive networking
              opportunities.
            </p>
          </div>
        </div>
      </motion.div>

      {/* What We Do Section */}
      <motion.section
        className="bg-[#f9f9f9] py-6 mt-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        <div className="w-full m-0 flex flex-col md:flex-row md:items-start md:gap-1">
          <div className="md:w-1/3 w-full mb-1 md:mb-0 flex-shrink-0 flex items-center justify-center">
            <h2 className="text-3xl font-extrabold text-black uppercase tracking-wide mb-0">
              What We Do
              <span
                className="block border-b-2 border-[#FBBD58] w-10 mt-1"
                style={{ opacity: 0.7 }}
              ></span>
            </h2>
          </div>
          <div className="md:w-2/3 w-full mr-10 grid md:grid-cols-3 gap-4">
            {/* Card 1 */}
            <div className="rounded-2xl border-l-4 border-[#FBBD58] bg-white shadow p-6">
              <h3 className="text-xl font-bold text-black mb-2 flex items-center gap-2">
                <span className="inline-flex items-center justify-center w-8 h-8 bg-[#FBBD58] text-white font-bold rounded-sm mr-2">
                  1
                </span>
                Events & Workshops
              </h3>
              <p className="text-[#222]">
                Organising competitions, Quiz Events and summits to foster
                entrepreneurial thinking and culture amongst students.
              </p>
            </div>
            {/* Card 2 */}
            <div className="rounded-2xl border-l-4 border-[#FBBD58] bg-white shadow p-6">
              <h3 className="text-xl font-bold text-black mb-2 flex items-center gap-2">
                <span className="inline-flex items-center justify-center w-8 h-8 bg-[#FBBD58] text-white font-bold rounded-sm mr-2">
                  2
                </span>
                Skill Development:
              </h3>
              <p className="text-[#222]">
                Conducts sessions and events on business modelling, marketing
                and finance to mimic real-world startups.
              </p>
            </div>
            {/* Card 3 */}
            <div className="rounded-2xl border-l-4 border-[#FBBD58] bg-white shadow p-6">
              <h3 className="text-xl font-bold text-black mb-2 flex items-center gap-2">
                <span className="inline-flex items-center justify-center w-8 h-8 bg-[#FBBD58] text-white font-bold rounded-sm mr-2">
                  3
                </span>
                Community Building
              </h3>
              <p className="text-[#222]">
                Connects students with alumni, industry experts, fellow students
                and other founders to create an interactive environment to
                foster connections.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* What's in Store Section */}
      <motion.section
        className="py-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <div className="w-full m-0 flex flex-col md:flex-row md:items-start md:gap-1">
          <div className="md:w-2/3 w-full ml-10 grid md:grid-cols-2 gap-4 order-2 md:order-1">
            <div className="bg-[#f9f9f9] rounded-2xl border-l-4 border-[#FBBD58] shadow p-8">
              <h3 className="text-xl font-bold text-black mb-2">
                <span className="font-bold text-[#FBBD58]">E-Summit</span> &
                Beyond
              </h3>
              <p className="text-[#222]">
                The{" "}
                <span className="font-bold text-[#FBBD58]">
                  flagship event of E-Cell NIT-Surat
                </span>
                , celebrates innovation and entrepreneurship by featuring
                competitions, workshops, and networking with experts and alumni.
                It empowers students to transform their ideas into impactful
                ventures.
              </p>
            </div>
            <div className="bg-[#f9f9f9] rounded-2xl border-l-4 border-[#FBBD58] shadow p-8">
              <h3 className="text-xl font-bold text-black mb-2">
                <span className="font-bold text-[#FBBD58]">Lego </span>Start-Up
              </h3>
              <p className="text-[#222]">
                Held every odd semester, it is designed to ignite the
                entrepreneurial spirit among students and build a strong startup
                culture amongst students. The event features interactive
                workshops, mentor-led sessions, and the lively Business Fair,
                where students showcase their models and get valuable feedback.
                The grand finale is the{" "}
                <span className="font-bold text-[#FBBD58]">
                  Investor Pitching round
                </span>
                , where the remarkable ideas take the stage and get the
                recognition they deserve.
              </p>
            </div>
            <div className="bg-[#f9f9f9] rounded-2xl border-l-[5px] border-[#FBBD58] shadow p-6 md:col-span-2">
              <h3 className="text-xl font-bold text-black mb-2">
                <span className="font-bold text-[#FBBD58]">Corporate </span>{" "}
                Catastrophe
              </h3>
              <p className="text-[#222]">
                This event aims to challenge critical thinking and test
                problem-solving skills of the participants. Consisting of
                multiple rounds incorporating riddles and puzzles, the entire
                event was a series of interconnected challenges that tested
                player’s observation, problem-solving, and deduction skills to
                progress from one room to the next.
              </p>
            </div>
          </div>
          <div className="md:w-1/3 w-full mb-4 md:mb-0 flex-shrink-0 flex items-start order-1 md:order-2">
            <h2 className="text-3xl font-extrabold text-black uppercase tracking-wide mb-1 ml-auto text-center w-full">
              What's in Store
              <span
                className="block border-b-2 border-[#FBBD58] w-16 ml-24 mt-1"
                style={{ opacity: 0.7 }}
              ></span>
            </h2>
          </div>
        </div>
      </motion.section>

      {/* Cultures & Contact Section */}
      <motion.div
        className="mt-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        <Cultures />
        <ContactSection />
      </motion.div>
    </div>
  );
};

export default AboutPage;
