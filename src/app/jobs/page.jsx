"use client";
import React from "react";
import { BackgroundBoxesDemo } from "@/components/ui/background-boxes";
import { JobCard } from "@/components/jobcard";

// Define the metadata for the Jobs page
export const metadata = {
  title: "Job Opportunities | E-Cell SVNIT",
  description:
    "Explore job opportunities at E-Cell SVNIT, including internships and part-time roles. Find the right opportunity to advance your career.",
  openGraph: {
    title: "Job Opportunities | E-Cell SVNIT",
    description:
      "Explore job opportunities at E-Cell SVNIT, including internships and part-time roles. Find the right opportunity to advance your career.",
    url: "https://www.ecellsvnit.com/jobs",
    siteName: "E-Cell SVNIT",
    images: [
      {
        url: "https://www.ecellsvnit.com/images/jobs-og-image.png",
        width: 1200,
        height: 630,
        alt: "Job Opportunities at E-Cell SVNIT",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Job Opportunities | E-Cell SVNIT",
    description:
      "Explore job opportunities at E-Cell SVNIT, including internships and part-time roles.",
    images: ["https://www.ecellsvnit.com/images/jobs-og-image.png"],
  },
};

const job1 = {
  title: "Concrete Specialist",
  company: "Arcrete",
  eligibility: "Civil Engg at SVNIT (Btech, Mtech, PhD)",
  date: "July 20, 2024",
  image: "/arcrete.png",
  shortDescription: "2 openings in Product Development.",
  tags: ["Internship", "Part-Time"],
};

export default function JobsPage() {
  return (
    <div className="container mx-auto pt-25 py-40">
      <div className="mb-12">
        <BackgroundBoxesDemo />
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <JobCard job={job1} />
      </div>
    </div>
  );
}
