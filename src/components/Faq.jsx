"use client";

import React from "react";
import Link from "next/link";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import classNames from "classnames";

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
      "Our events are open to all students who are passionate about entrepreneurship, innovation, and personal growth. Whether you’re just starting or have experience, you’re welcome to join and learn with us.",
  },
];

const FAQ = () => (
  <section className="relative overflow-hidden py-20 faq-bg">
    <div className="max-w-6xl mx-auto px-6">
      <div className="flex justify-center -ml-6 lg:-ml-12 lg:col-span-1 mb-10">
        <h2 className="text-4xl lg:text-5xl font-extrabold leading-tight text-gray-900 mb-6">
          Frequently Asked <span className="text-[#fbbd58]">Questions</span>
        </h2>
      </div>

      <Accordion.Root type="multiple" defaultValue={["item-1"]} collapsible>
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <Accordion.Item
              key={index}
              value={`item-${index + 1}`}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden border-l-4 border-l-[#fbbd58]"
            >
              <Accordion.Header>
                <Accordion.Trigger
                  className={classNames(
                    "w-full flex items-center justify-between px-6 py-4 text-left text-gray-900 font-semibold text-lg",
                    "rounded-xl border border-transparent transition transform",
                    "hover:bg-gray-50 hover:shadow-md hover:border-gray-100",
                  )}
                >
                  <span>{faq.question}</span>
                  <ChevronDownIcon className="w-5 h-5 text-yellow-500" />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="px-6 pb-6 pt-2 text-gray-700">
                <div className="prose prose-sm max-w-none">{faq.answer}</div>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </div>
      </Accordion.Root>
    </div>

    <style jsx>{`
      .faq-bg {
        background: linear-gradient(45deg, #ffffff 0%, #eee 100%);
      }

      /* subtle open animation for accordion content (Radix controls max-height internally) */
      .AccordionContent-enter {
        animation: fadeIn 220ms ease-out;
      }

      @keyframes fadeIn {
        from {
          opacity: 0;
          transform: translateY(-6px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    `}</style>
  </section>
);

export default FAQ;
