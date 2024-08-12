"use client";
import React from "react";
import { BackgroundBoxesDemo } from "@/components/ui/background-boxes";
import { JobCard } from "@/components/jobcard";

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
