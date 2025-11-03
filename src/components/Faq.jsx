"use client";

import React from "react";
import Link from "next/link";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import classNames from "classnames";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
  {
    question: "What is E-Cell SVNIT?",
    answer: (
      <>
        E-Cell SVNIT is a vibrant, student-led organization dedicated to
        promoting entrepreneurship, innovation, and leadership among students.
        We aim to create an environment where ideas can flourish and future
        entrepreneurs can thrive. <br />
        <Link href="/about" className="text-yellow-500 underline">
          Learn more on our About page.
        </Link>
      </>
    ),
  },
  {
    question: "How can I join E-Cell SVNIT?",
    answer:
      "You can become a part of E-Cell SVNIT by actively participating in our events, workshops, and programs. Stay connected with us through our social media channels to receive the latest updates and announcements on upcoming activities.",
  },
  {
    question: "What events does E-Cell SVNIT organize?",
    answer: (
      <>
        We host a wide range of events including workshops, seminars,
        hackathons, startup competitions, and networking sessions — all designed
        to enhance entrepreneurial skills and foster innovation. <br />
        <Link href="/events" className="text-yellow-500 underline">
          Have a look at our Events.
        </Link>
      </>
    ),
  },
  {
    question: "Who can participate in E-Cell SVNIT events?",
    answer:
      "Our events are open to all students who are passionate about entrepreneurship, innovation, and personal growth. Whether you're just starting or have experience, you're welcome to join and learn with us.",
  },
  {
    question: "Does E-Cell SVNIT provide mentorship for startups?",
    answer:
      "Yes! We provide comprehensive mentorship support for student startups. Our mentorship program connects aspiring entrepreneurs with experienced industry professionals, successful alumni, and business experts who guide you through ideation, validation, business planning, and scaling your venture.",
  },
  {
    question: "How can I stay updated with E-Cell SVNIT activities?",
    answer:
      "Stay connected with us through our social media platforms including Instagram, LinkedIn, and Facebook. You can also subscribe to our newsletter on this website to receive regular updates about upcoming events, workshops, competitions, and opportunities directly in your inbox.",
  },
];

const FAQ = () => {
  const [openItems, setOpenItems] = React.useState(["item-1"]);

  return (
    <section className="relative overflow-hidden py-20 faq-bg">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-center -ml-6 lg:-ml-12 lg:col-span-1 mb-10">
          <h2 className="text-4xl lg:text-5xl font-extrabold leading-tight text-gray-900 mb-6">
            Frequently Asked <span className="text-[#fbbd58]">Questions</span>
          </h2>
        </div>

        <Accordion.Root 
          type="multiple" 
          value={openItems}
          onValueChange={setOpenItems}
          collapsible
        >
          <div className="space-y-4">
            {faqData.map((faq, index) => {
              const itemValue = `item-${index + 1}`;
              const isOpen = openItems.includes(itemValue);

              return (
                <Accordion.Item
                  key={index}
                  value={itemValue}
                  className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden border-l-4 border-l-[#fbbd58]"
                >
                  <Accordion.Header>
                    <Accordion.Trigger
                      className={classNames(
                        "group w-full flex items-center justify-between px-6 py-4 text-left text-gray-900 font-semibold text-lg",
                        "rounded-xl border border-transparent transition-all duration-300",
                        "hover:bg-gray-50 hover:shadow-md hover:border-gray-100",
                        isOpen && "bg-gray-50"
                      )}
                    >
                      <span>{faq.question}</span>
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <ChevronDownIcon className="w-5 h-5 text-yellow-500" />
                      </motion.div>
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <Accordion.Content forceMount asChild>
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ 
                            height: "auto", 
                            opacity: 1,
                            transition: {
                              height: {
                                duration: 0.4,
                                ease: [0.4, 0.0, 0.2, 1]
                              },
                              opacity: {
                                duration: 0.3,
                                delay: 0.1,
                                ease: "easeOut"
                              }
                            }
                          }}
                          exit={{ 
                            height: 0, 
                            opacity: 0,
                            transition: {
                              height: {
                                duration: 0.3,
                                ease: [0.4, 0.0, 0.2, 1]
                              },
                              opacity: {
                                duration: 0.2,
                                ease: "easeIn"
                              }
                            }
                          }}
                          className="overflow-hidden"
                        >
                          <motion.div 
                            className="px-6 pb-6 pt-2 text-gray-700"
                            initial={{ y: -10 }}
                            animate={{ 
                              y: 0,
                              transition: {
                                duration: 0.3,
                                delay: 0.15,
                                ease: "easeOut"
                              }
                            }}
                            exit={{ y: -10 }}
                          >
                            <div className="prose prose-sm max-w-none">{faq.answer}</div>
                          </motion.div>
                        </motion.div>
                      </Accordion.Content>
                    )}
                  </AnimatePresence>
                </Accordion.Item>
              );
            })}
          </div>
        </Accordion.Root>
      </div>

      <style jsx>{`
        .faq-bg {
          background: linear-gradient(45deg, #ffffff 0%, #eee 100%);
        }
      `}</style>
    </section>
  );
};

export default FAQ;
