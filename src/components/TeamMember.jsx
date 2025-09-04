"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";
import { FaLinkedin, FaInstagram } from "react-icons/fa";

const TeamMember = ({ photo, name, position, linkedin, instagram }) => {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[17rem] h-auto rounded-xl p-5 border">
      <div className="flex justify-between items-center">
  <CardItem translateZ="50" className="text-lg font-bold text-neutral-600 dark:text-white">
    {name}
  </CardItem>
  {position && (
    <span className="relative overflow-hidden bg-gradient-to-b from-amber-300 to-amber-400 text-white text-xs font-semibold px-3 py-0.5 rounded-full shadow-md border border-amber-200 dark:border-amber-500"
      style={{
        boxShadow: "inset 0 2px 4px rgba(255,255,255,0.4), inset 0 -2px 4px rgba(0,0,0,0.2), 0 2px 4px rgba(0,0,0,0.15)"
      }}
    >
      <span className="relative z-10">{position}</span>
      {/* Gloss overlay */}
      <span className="absolute inset-0 bg-white/20 rounded-full top-0 left-0 h-1/2"></span>
    </span>
  )}
</div>





        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={photo}
            height="400"
            width="400"
            className="w-full h-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt={name}
          />
        </CardItem>

        <div className="flex justify-between items-center mt-6">
          <CardItem
            translateZ={20}
            as="span"
            className="text-xs font-normal dark:text-white"
          >
            Reach out →
          </CardItem>
          <div className="flex space-x-3">
            <CardItem
              translateZ={20}
              as={Link}
              href={linkedin}
              target="_blank"
              className="text-blue-600 dark:text-white hover:text-blue-800 dark:hover:text-gray-400"
            >
              <FaLinkedin size={24} />
            </CardItem>
            <CardItem
              translateZ={20}
              as={Link}
              href={instagram}
              target="_blank"
              className="text-pink-500 dark:text-white hover:text-pink-700 dark:hover:text-gray-400"
            >
              <FaInstagram size={24} />
            </CardItem>
          </div>
        </div>

      </CardBody>
    </CardContainer>
  );
};


export default TeamMember;
