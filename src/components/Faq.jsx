"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqData = [
  {
    question: "What is E-Cell SVNIT?",
    answer:
      "E-Cell SVNIT is a vibrant, student-led organization dedicated to promoting entrepreneurship, innovation, and leadership among students. We aim to create an environment where ideas can flourish and future entrepreneurs can thrive.",
  },
  {
    question: "How can I join E-Cell SVNIT?",
    answer:
      "You can join by participating in our annual recruitment drives, workshops, and flagship events. Follow our social channels for updates!",
  },
  {
    question: "What events does E-Cell SVNIT organize?",
    answer:
      "We host entrepreneurship summits, hackathons, pitch competitions, guest speaker sessions, and startup mentoring workshops throughout the year.",
  },
  {
    question: "Who can participate in E-Cell SVNIT events?",
    answer:
      "Most of our events and workshops are open to all college students, aspiring founders, and technology enthusiasts.",
  },
  {
    question: "Does E-Cell SVNIT provide mentorship for startups?",
    answer:
      "Yes, we connect promising student startups with experienced mentors, industry experts, and incubation resources.",
  },
  {
    question: "How can I stay updated with E-Cell SVNIT activities?",
    answer:
      "Keep an eye on our official website, Instagram, LinkedIn, and community announcements for real-time updates.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-zinc-800 text-white py-20 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-12 tracking-tight">
          <span className="text-white">Frequently Asked </span>
          <span className="text-yellow-400">Questions</span>
        </h2>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqData.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-zinc-700/80 border border-zinc-600 rounded-2xl overflow-hidden transition-all duration-200 border-l-4 border-l-yellow-400"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <span className="text-lg font-semibold text-white">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-yellow-400 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-zinc-300 text-base leading-relaxed border-t border-zinc-600/60 pt-4">
                    <p>{item.answer}</p>
                    {idx === 0 && (
                      <a
                        href="/about"
                        className="inline-block mt-3 text-yellow-400 font-medium underline underline-offset-4 hover:text-yellow-300 transition"
                      >
                        Learn more on our About page.
                      </a>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}