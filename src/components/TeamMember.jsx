"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";
import { FaLinkedin, FaInstagram } from "react-icons/fa";

const TeamMember = ({ photo, name, position, linkedin, instagram }) => {
  return (
    <CardContainer className="inter-var">
      <CardBody
        className="!bg-white relative group/card border-black/[0.1] w-auto sm:w-[17rem] h-auto rounded-xl p-5 border"
        style={{ backgroundColor: "#ffffff" }}
      >
        <div className="flex justify-between items-center gap-2">
          <CardItem
            translateZ="50"
            className="text-lg font-bold !text-neutral-900 truncate"
            style={{ color: "#171717" }}
          >
            {name}
          </CardItem>
          {position && (
            <span
              className="relative overflow-hidden bg-gradient-to-b from-amber-300 to-amber-400 text-white text-xs font-semibold px-3 py-0.5 rounded-full shadow-md border border-amber-200 dark:border-amber-500 shrink-0"
              style={{
                boxShadow:
                  "inset 0 2px 4px rgba(255,255,255,0.4), inset 0 -2px 4px rgba(0,0,0,0.2), 0 2px 4px rgba(0,0,0,0.15)",
              }}
            >
              <span className="relative z-10">{position}</span>
              {/* Gloss overlay */}
              <span className="absolute inset-0 bg-white/20 rounded-full top-0 left-0 h-1/2"></span>
            </span>
          )}
        </div>

        {/* Fixed aspect-ratio container so every photo (any source size/crop) renders consistently */}
        <CardItem translateZ="100" className="w-full mt-4">
          {/* Fixed-aspect wrapper: every card's photo renders at the same
              size regardless of the source image's own dimensions. A
              portrait ratio (4/5, taller than wide) matches headshot
              photos far better than a square crop — square was cropping
              heads/foreheads off portrait-oriented source photos.
              object-position "top" biases the crop toward the top of the
              frame so faces stay in view even on tightly-cropped portraits
              or ones where the subject sits high in the source photo. */}
          <div className="relative w-full aspect-[4/5] overflow-hidden rounded-xl group-hover/card:shadow-xl">
            <Image
              src={photo}
              fill
              sizes="(max-width: 640px) 100vw, 17rem"
              className="object-cover object-top"
              alt={name}
            />
          </div>
        </CardItem>

        <div className="flex justify-between items-center mt-6">
          <CardItem
            translateZ={20}
            as="span"
            className="text-xs font-normal !text-neutral-700"
            style={{ color: "#404040" }}
          >
            Reach out →
          </CardItem>
          <div className="flex space-x-3">
            {linkedin && (
              <CardItem
                translateZ={20}
                as={Link}
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${name}'s LinkedIn`}
                className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
              >
                <FaLinkedin size={24} />
              </CardItem>
            )}
            {instagram && (
              <CardItem
                translateZ={20}
                as={Link}
                href={instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${name}'s Instagram`}
                className="text-pink-500 dark:text-pink-400 hover:text-pink-700 dark:hover:text-pink-300"
              >
                <FaInstagram size={24} />
              </CardItem>
            )}
          </div>
        </div>
      </CardBody>
    </CardContainer>
  );
};

export default TeamMember;