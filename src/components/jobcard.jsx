"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FollowerPointerCard } from "@/components/ui/following-pointer";

export function JobCard({ job }) {
  const router = useRouter();

  const handleApplyClick = () => {
    const companyNameSlug = job.company.toLowerCase().replace(/\s+/g, '');
    router.push(`/${companyNameSlug}`);
  };

  return (
    <div className="w-full mx-auto">
      <FollowerPointerCard
        title={
          <div className="flex space-x-2 items-center">
            <Image
              src={job.image}
              height={25}
              width={25}
              alt="company logo"
              className="rounded-full border-2 border-white"
            />
            <p>{job.company}</p>
          </div>
        }
      >
        <div className="relative overflow-hidden h-full rounded-2xl transition duration-200 group bg-white hover:shadow-xl border border-zinc-100">
          <div className="w-full h-56 relative bg-gray-100 rounded-tr-lg rounded-tl-lg overflow-hidden">
            <Image
              src={job.image}
              alt="Job thumbnail"
              layout="fill"
              objectFit="cover"
              className="group-hover:scale-105 group-hover:rounded-2xl transform transition duration-200"
            />
          </div>
          <div className="p-4">
            <h2 className="font-bold text-xl text-zinc-700">{job.company}</h2>
            <h3 className="font-semibold my-2 text-lg text-zinc-600">{job.title}</h3>
            <p className="font-normal text-sm text-zinc-500 mb-6">
              Eligible Students: {job.eligibility}
            </p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">Last Date to Apply: {job.date}</span>
              <div className="flex items-center space-x-2">
                {job.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
                <button
                  onClick={handleApplyClick}
                  className="relative z-10 px-6 py-2 bg-black text-white font-bold rounded-xl text-xs"
                >
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </FollowerPointerCard>
    </div>
  );
}
