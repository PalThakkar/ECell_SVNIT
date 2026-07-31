"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
  { question: "What is E-Cell SVNIT and who can join?",                           answer: "E-Cell SVNIT (Entrepreneurship Cell) is the official student organisation at SVNIT Surat dedicated to fostering startup culture, venture creation, and innovation. Membership and event participation are open to all SVNIT students across engineering, science, and postgraduate programs." },
  { question: "How can I pitch my startup idea for incubation or seed funding?",   answer: "You can submit your pitch deck during flagship events like E-Summit and Ignite Hackathon, or reach out via our ASHINE-SVNIT incubation portal. Selected ventures receive direct incubation, mentor pairing, prototype grants, and legal setup support." },
  { question: "What major events does E-Cell SVNIT organize annually?",            answer: "Our flagship annual events include E-Summit (national entrepreneurship convention), Ignite Hackathon (36-hour MVP build sprint), and LEGO Startup (interactive venture mechanics simulation), alongside technical & Web3 workshops." },
  { question: "How can industry mentors or alumni connect with student ventures?", answer: "Alumni and seasoned founders can join our active mentor network, conduct guest masterclasses, evaluate pitch competitions, or offer angel investment. Please get in touch via our Contact Us page." },
  { question: "Are workshops and hackathons open to non-SVNIT students?",          answer: "Yes! Flagship events such as E-Summit and Ignite Hackathon welcome participation from college students and young innovators across Gujarat and India." },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="relative pt-20 pb-32 sm:pt-28 sm:pb-40" style={{ backgroundColor: "#FEFEFE" }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-[15px] font-extrabold mb-4" style={{ background: "#FEF3C7", border: "1px solid #F5AB35", color: "#111111" }}>
            <HelpCircle className="w-5 h-5" style={{ color: "#D97706" }} />
            <span>Got Questions?</span>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight" style={{ color: "#111111" }}>
            Frequently Asked{" "}
            <span className="inline-block px-2 py-0.5 rounded-lg" style={{ background: "#FBBD58", color: "#111111" }}>Questions</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl mt-3 leading-relaxed font-medium" style={{ color: "#7A756C" }}>
            Everything you need to know about E-Cell SVNIT, events, incubation, and community involvement.
          </motion.p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqData.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div key={idx} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="rounded-3xl overflow-hidden transition-all duration-300"
                style={{
                  background: isOpen ? "#FEFEFE" : "#FAF9F6",
                  border: isOpen ? "1px solid #FBBD58" : "1px solid #E8E4DC",
                  boxShadow: isOpen ? "0 10px 32px rgba(251,189,88,0.14), 0 4px 8px rgba(17,15,10,0.05)" : "none",
                  borderLeft: isOpen ? "4px solid #FBBD58" : "1px solid #E8E4DC",
                }}
              >
                <button onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-6 sm:p-7 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-xl sm:text-2xl font-extrabold" style={{ color: "#111111" }}>{item.question}</span>
                  <div className="p-2.5 rounded-2xl shrink-0 transition-all duration-300"
                    style={isOpen ? { background: "#FBBD58", color: "#111111", transform: "rotate(180deg)" } : { background: "#FEF3C7", border: "1px solid #E8E4DC" }}>
                    <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: "#111111" }} />
                  </div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3 }}
                      className="px-6 pb-7 sm:px-7 text-lg sm:text-xl leading-relaxed pt-4 font-medium" style={{ borderTop: "1px solid #E8E4DC", color: "#3D3A35" }}>
                      {item.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom link */}
        <div className="mt-12 text-center">
          <p className="text-lg font-medium" style={{ color: "#7A756C" }}>
            Have more questions?{" "}
            <Link href="/about" className="font-black rounded px-1.5 py-0.5 transition-colors" style={{ color: "#111111", background: "rgba(251,189,88,0.28)" }}>
              Learn more on our About page
            </Link>{" "}
            or{" "}
            <Link href="/contact" className="font-black rounded px-1.5 py-0.5 transition-colors" style={{ color: "#111111", background: "rgba(251,189,88,0.28)" }}>
              Contact our team directly
            </Link>.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Faq;
