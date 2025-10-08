"use client";

import React from "react";
import Link from "next/link";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import classNames from "classnames";
import "./styles.css";

const faqData = [
  {
    question: "What is E-Cell SVNIT?",
    answer: (
      <>
        E-Cell SVNIT is a vibrant, student-led organization dedicated to
        promoting entrepreneurship, innovation, and leadership among students.
        We aim to create an environment where ideas can flourish and future
        entrepreneurs can thrive. <br />
        <Link
          href="/about"
          className="text-[#fbbd58] underline hover:text-white transition-colors"
        >
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
        <Link
          href="/events"
          className="text-[#fbbd58] underline hover:text-white transition-colors"
        >
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
  <div className="faq-container">
    <h2 className="faq-title">Frequently Asked Questions</h2>
    <Accordion.Root
      className="AccordionRoot"
      type="multiple"
      defaultValue={["item-1"]}
      collapsible
    >
      {faqData.map((faq, index) => (
        <Accordion.Item
          className="AccordionItem"
          value={`item-${index + 1}`}
          key={index}
        >
          <AccordionTrigger>{faq.question}</AccordionTrigger>
          <AccordionContent>{faq.answer}</AccordionContent>
        </Accordion.Item>
      ))}
    </Accordion.Root>
    <style jsx>{`
      .faq-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
        padding: 2rem 0.5rem;
        background: #f7f7f7;
      }
      .faq-title {
        font-size: 3rem;
        font-weight: 900;
        color: #fbbd58;
        text-align: center;
        margin-bottom: 2.5rem;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        text-shadow: 0 2px 16px #fbbd5840, 0 1px 0 #fff4da;
        position: relative;
      }
      .faq-title::after {
        content: "";
        display: block;
        margin: 0.7rem auto 0 auto;
        width: 4rem;
        height: 5px;
        border-radius: 3px;
        background: linear-gradient(90deg, #fbbd58 60%, #fff4da 100%);
        opacity: 0.85;
      }
      .AccordionRoot {
        width: 100%;
        max-width: 700px;
        background: #fff;
        padding: 2.5rem 1.5rem;
        border-radius: 18px;
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
        border: 2px solid #fbbd58;
        margin-bottom: 2rem;
      }
      .AccordionItem {
        overflow: hidden;
        margin-top: 18px;
        border-radius: 14px;
        background-color: #f9f9f9;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);
        border: 1.5px solid #ececec;
        transition: box-shadow 0.3s, border 0.3s, transform 0.3s;
      }
      .AccordionItem:first-child {
        margin-top: 0;
      }
      .AccordionHeader {
        display: flex;
      }
      .AccordionTrigger {
        font-family: inherit;
        padding: 1.1rem 1.5rem;
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 1.35rem;
        font-weight: 700;
        color: #ffe6b0;
        cursor: pointer;
        border-radius: 12px;
        background: transparent;
        border: none;
        outline: none;
        transition: background 0.2s, color 0.2s, box-shadow 0.2s, transform 0.2s;
        box-shadow: none;
      }
      .AccordionTrigger:hover,
      .AccordionTrigger:focus {
        background: #232323;
        color: #fbbd58;
        outline: none;
        box-shadow: 0 0 0 2px #fbbd5844;
        text-decoration: underline;
        text-underline-offset: 4px;
        text-decoration-thickness: 2px;
      }
      .AccordionTrigger[data-state="open"] {
        color: #fff;
        background: #fbbd58;
        font-weight: 700;
        box-shadow: 0 2px 8px #fbbd5833;
      }
      .AccordionContent {
        padding: 1.1rem 1.5rem 1.5rem 1.5rem;
        font-size: 1.08rem;
        color: #fff;
        background: transparent;
        border-left: 3px solid #fbbd58;
        border-radius: 0 0 12px 12px;
        margin-top: -2px;
        animation: fadeInAccordion 0.3s;
        opacity: 1;
        transition: opacity 0.35s cubic-bezier(0.87, 0, 0.13, 1),
          max-height 0.35s cubic-bezier(0.87, 0, 0.13, 1);
      }
      @keyframes fadeInAccordion {
        from {
          opacity: 0;
          transform: translateY(-10px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      .AccordionContentText {
        font-size: 1.08rem;
        color: #fff;
        line-height: 1.7;
        letter-spacing: 0.01em;
        transition: color 0.2s;
      }
      .AccordionChevron {
        color: #fbbd58;
        margin-left: 1rem;
        font-size: 1.5rem;
        transition: transform 300ms cubic-bezier(0.87, 0, 0.13, 1), color 0.2s;
      }
      .AccordionTrigger[data-state="open"] > .AccordionChevron {
        transform: rotate(180deg) scale(1.2);
        color: #fbbd58;
      }
    `}</style>
  </div>
);

const AccordionTrigger = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Header className="AccordionHeader">
      <Accordion.Trigger
        className={classNames("AccordionTrigger", className)}
        {...props}
        ref={forwardedRef}
      >
        {children}
        <ChevronDownIcon className="AccordionChevron" aria-hidden />
      </Accordion.Trigger>
    </Accordion.Header>
  )
);

AccordionTrigger.displayName = "AccordionTrigger";

const AccordionContent = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Content
      className={classNames("AccordionContent", className)}
      {...props}
      ref={forwardedRef}
    >
      <div className="AccordionContentText">{children}</div>
    </Accordion.Content>
  )
);

AccordionContent.displayName = "AccordionContent";

export default FAQ;
