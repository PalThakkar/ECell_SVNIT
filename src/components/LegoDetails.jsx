"use client";

import React from "react";
import FadeIn from "./FadeIn";
import Border from "./Border";

const LegoDetails = () => {
  return (
    <FadeIn>
      <h2 className="font-display text-base font-semibold text-neutral-950">
        LEGO Startup: The Business Fair
      </h2>
      <div className="mt-10 grid grid-cols-1 gap-8 text-sm">
        <div>
          <dt className="font-semibold text-neutral-950">Overview:</dt>
          <dd className="mt-2 text-neutral-600">
            Transform your ideas into a successful business with our 4-week, step-by-step event designed like building LEGO blocks. Each week introduces new challenges and learning opportunities.
          </dd>
        </div>
        <div>
          <dt className="font-semibold text-neutral-950">Event Dates:</dt>
          <dd className="mt-2 text-neutral-600">
            Starting October 21st
          </dd>
        </div>
        <div>
          <dt className="font-semibold text-neutral-950">Participation:</dt>
          <dd className="mt-2 text-neutral-600">
            Open to all aspiring entrepreneurs. Register to convert your visionary ideas into reality.
          </dd>
        </div>
        <div>
          <dt className="font-semibold text-neutral-950">Week-by-Week Guide:</dt>
          <dd className="mt-2 text-neutral-600">
            <ul className="list-disc pl-5">
              <li>Week 1: Team formation and product ideation.</li>
              <li>Week 2: Focus on market research and branding.</li>
              <li>Week 3: Customer acquisition and operations management.</li>
              <li>Week 4: Final preparations for pitching to investors.</li>
            </ul>
          </dd>
        </div>
        <div>
          <dt className="font-semibold text-neutral-950">D-Day:</dt>
          <dd className="mt-2 text-neutral-600">
            Showcase your business model and potentially win recognition and awards.
          </dd>
        </div>
      </div>
      <Border className="mt-16 pt-16">
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Join the Journey
        </h2>
        <dl className="mt-6 grid grid-cols-1 gap-8 text-sm">
          <div>
            <dt className="font-semibold text-neutral-950">The Opportunity:</dt>
            <dd className="mt-2 text-neutral-600">
              Gain mentorship from business experts, engage in valuable networking, and acquire real-world business skills throughout the event.
            </dd>
          </div>
        </dl>
      </Border>
    </FadeIn>
  );
};

export default LegoDetails;
