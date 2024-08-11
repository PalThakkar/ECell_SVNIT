"use client";

import React from "react";
import FadeIn from "./FadeIn";
import Border from "./Border";
import { LinkPreview } from "@/components/ui/link-preview";

const JobDetails = () => {
  return (
    <FadeIn>
      <h2 className="font-display text-base font-semibold text-neutral-950">
        Job Openings at{" "}
        <LinkPreview
          url="https://www.instagram.com/arcreteindia?igsh=cGtyeDJ6bGk4dzc2"
          className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-blue-500 to-green-500"
          target="_blank"
          rel="noopener noreferrer"
        >
          Arcrete
        </LinkPreview>
      </h2>
      <div className="mt-10 grid grid-cols-1 gap-8 text-sm">
        <div>
          <dt className="font-semibold text-neutral-950">Available Positions:</dt>
          <dd className="mt-2">
            <ul className="list-disc pl-5 text-neutral-600">
              <li>Product Development—Concrete Specialist (2 openings)</li>
              <li>Marketing (1 opening)</li>
            </ul>
          </dd>
        </div>
        <div>
          <dt className="font-semibold text-neutral-950">Eligibility:</dt>
          <dd className="mt-2 text-neutral-600">
            Currently pursuing Civil Engineering at SVNIT<br />
            Open to B.Tech, M.Tech, and Ph.D. students
          </dd>
        </div>
        <div>
          <dt className="font-semibold text-neutral-950">Stipend:</dt>
          <dd className="mt-2 text-neutral-600">
            ₹8000 per month for all roles
          </dd>
        </div>
        <div>
          <dt className="font-semibold text-neutral-950">Working Hours:</dt>
          <dd className="mt-2 text-neutral-600">
            Flexible, open to discussion
          </dd>
        </div>
      </div>
      <Border className="mt-16 pt-16">
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Recruitment Rounds
        </h2>
        <dl className="mt-6 grid grid-cols-1 gap-8 text-sm">
          <div>
            <dt className="font-semibold text-neutral-950">Rounds:</dt>
            <dd className="mt-2 text-neutral-600">
              <ul className="list-disc pl-5">
                <li>Technical Test</li>
                <li>Interview</li>
              </ul>
            </dd>
          </div>
        </dl>
      </Border>
    </FadeIn>
  );
};

export default JobDetails;
