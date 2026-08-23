"use client";

import React from "react";
import Link from "next/link";
import TeamMember from "./TeamMember";
import Container from "./Container";
import FadeIn from "./FadeIn";

// Same 4 members as Chief Executives in team/page.jsx
const featuredMembers = [
  {
    photo: "/atman.png",
    name: "Atman Shah",
    position: "Convener",
    linkedin: "https://www.linkedin.com/in/atman-shah-0510as/",
    instagram: "https://www.instagram.com/atmann_04/",
  },
  {
    photo: "/aman.png",
    name: "Aman Kapoor",
    position: "Co-Convener",
    linkedin: "https://www.linkedin.com/in/aman-kapoor-6a6122308/",
    instagram: "https://www.instagram.com/aman__kap33/",
  },
  {
    photo: "/asmi.png",
    name: "Asmi Wadhwa",
    position: "Secretary",
    linkedin: "https://www.linkedin.com/in/asmiwadhwa/",
    instagram: "https://www.instagram.com/asmiw.7",
  },
  {
    photo: "/soni.png",
    name: "Lakshya Soni",
    position: "Treasurer",
    linkedin: "https://www.linkedin.com/in/lakshya-soni-6b4099327/",
    instagram: "https://www.instagram.com/soni_lakshya_/",
  },
];

const TeamPreview = ({ className }) => {
  return (
    <div className={className}>
      <Container>
        <FadeIn>
          <div className="text-center">
            <div className="relative inline-block">
              <h2
                className="text-3xl md:text-4xl font-bold !text-neutral-900 tracking-tight relative z-10"
                style={{ color: "#171717" }}
              >
                Meet the Team
              </h2>
              <div className="absolute -bottom-1 left-0 w-full h-3 bg-gradient-to-r from-yellow-300/40 via-yellow-400/40 to-yellow-300/40 -z-0 transform -skew-y-1" />
            </div>
            <p className="mt-4 text-base md:text-lg text-neutral-600 max-w-2xl mx-auto">
              The core team driving innovation and entrepreneurship at E-Cell SVNIT.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 justify-items-center">
            {featuredMembers.map((member) => (
              <TeamMember
                key={member.name}
                photo={member.photo}
                name={member.name}
                position={member.position}
                linkedin={member.linkedin}
                instagram={member.instagram}
              />
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <Link
              href="/team"
              className="inline-flex items-center gap-2 rounded-full bg-neutral-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800"
            >
              View Full Team →
            </Link>
          </div>
        </FadeIn>
      </Container>
    </div>
  );
};

export default TeamPreview;