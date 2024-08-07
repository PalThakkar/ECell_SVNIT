"use client";

import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const faqData = [
  {
    question: 'What is E-Cell SVNIT?',
    answer: 'E-Cell SVNIT is a student-run organization that fosters entrepreneurship and innovation among students.',
  },
  {
    question: 'How can I join E-Cell SVNIT?',
    answer: 'You can join E-Cell SVNIT by attending our events and participating in our programs. Follow our social media for updates.',
  },
  {
    question: 'What events does E-Cell SVNIT organize?',
    answer: 'We organize various events including workshops, seminars, hackathons, and startup competitions.',
  },
  {
    question: 'Who can participate in E-Cell SVNIT events?',
    answer: 'Our events are open to all students who are interested in entrepreneurship and innovation.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mt-24 sm:mt-32">
      <h2 className="text-4xl font-bold text-center text-neutral-950" style={{ fontFamily: 'Mona Sans, sans-serif' }}>
        Frequently Asked Questions
      </h2>
      <div className="max-w-screen-xl mx-auto my-4 p-6 md:p-10 bg-black rounded-4xl shadow-lg" style={{ height: 'calc(100vh - 5.32cm)', overflowY: 'auto' }}>
        <div className="space-y-6">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className={`relative p-6 rounded-3xl transition-all duration-300 ease-in-out cursor-pointer ${
                openIndex === index ? 'shadow-lg' : 'shadow-md'
              } hover:bg-gray-800 hover:border-gray-400 hover:shadow-xl`}
              style={{
                background: 'rgba(255, 255, 255, 0.1)', // Semi-transparent white
                backdropFilter: 'blur(10px)', // Matte glass effect
                WebkitBackdropFilter: 'blur(10px)', // Safari support
                border: '1px solid rgba(255, 255, 255, 0.2)', // Light border for glass effect
              }}
              onClick={() => toggleFAQ(index)}
            >
              <div className="relative flex justify-between items-center">
                <h3 className={`text-xl font-semibold text-white transition-transform duration-300 ease-in-out ${openIndex === index ? 'translate-x-3' : ''}`}>
                  {faq.question}
                </h3>
                <div className="ml-2 text-white">
                  {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                </div>
              </div>
              {openIndex === index && <p className="mt-2 text-neutral-300">{faq.answer}</p>}
              {/* Dark overlay on hover */}
              <div
                className="absolute inset-0 bg-gray-300 opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-10"
                style={{
                  borderRadius: 'inherit', // Ensure the overlay follows the rounded corners
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
