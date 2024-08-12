"use client";

import React from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import classNames from 'classnames';
import './styles.css';

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

const FAQ = () => (
  <div className="faq-container">
    <h2 className="faq-title">Frequently Asked Questions</h2>
    <Accordion.Root className="AccordionRoot" type="single" defaultValue="item-1" collapsible>
      {faqData.map((faq, index) => (
        <Accordion.Item className="AccordionItem" value={`item-${index + 1}`} key={index}>
          <AccordionTrigger>{faq.question}</AccordionTrigger>
          <AccordionContent>{faq.answer}</AccordionContent>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  </div>
);

const AccordionTrigger = React.forwardRef(({ children, className, ...props }, forwardedRef) => (
  <Accordion.Header className="AccordionHeader">
    <Accordion.Trigger
      className={classNames('AccordionTrigger', className)}
      {...props}
      ref={forwardedRef}
    >
      {children}
      <ChevronDownIcon className="AccordionChevron" aria-hidden />
    </Accordion.Trigger>
  </Accordion.Header>
));

AccordionTrigger.displayName = "AccordionTrigger";

const AccordionContent = React.forwardRef(({ children, className, ...props }, forwardedRef) => (
  <Accordion.Content
    className={classNames('AccordionContent', className)}
    {...props}
    ref={forwardedRef}
  >
    <div className="AccordionContentText">{children}</div>
  </Accordion.Content>
));

AccordionContent.displayName = "AccordionContent";

export default FAQ;
