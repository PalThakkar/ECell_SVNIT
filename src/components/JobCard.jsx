"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Calendar, ArrowRight } from "lucide-react";
import { FollowerPointerCard } from "@/components/ui/following-pointer";

export function JobCard({ job }) {
  const router = useRouter();

  const handleApplyClick = () => {
    if (job.applyLink) {
      window.open(job.applyLink, "_blank", "noopener,noreferrer");
      return;
    }
    const companyNameSlug = job.company.toLowerCase().replace(/\s+/g, "");
    router.push(`/${companyNameSlug}`);
  };

  return (
    <div className="w-full mx-auto h-full">
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
        <div
          className="relative overflow-hidden h-full rounded-2xl sm:rounded-3xl transition-all duration-300 group"
          style={{
            background: "#FEFEFE",
            border: "1px solid #E8E4DC",
            boxShadow: "0 8px 28px rgba(17,15,10,0.07)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "#FBBD58";
            e.currentTarget.style.boxShadow =
              "0 20px 48px rgba(251,189,88,0.18), 0 8px 16px rgba(17,15,10,0.08)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "#E8E4DC";
            e.currentTarget.style.boxShadow =
              "0 8px 28px rgba(17,15,10,0.07)";
          }}
        >
          <div
            className="w-full aspect-[16/10] relative overflow-hidden"
            style={{ background: "#E8E4DC" }}
          >
            <Image
              src={job.image}
              alt="Job thumbnail"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover group-hover:scale-105 transform transition duration-700"
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to top, rgba(17,15,10,0.4) 0%, transparent 55%)",
              }}
            />
          </div>

          <div className="p-5 sm:p-6">
            <p
              className="text-xs font-extrabold uppercase tracking-wide mb-1"
              style={{ color: "#D97706" }}
            >
              {job.company}
            </p>
            <h3
              className="font-black text-xl sm:text-2xl mb-2 tracking-tight"
              style={{ color: "#111111" }}
            >
              {job.title}
            </h3>
            <p
              className="text-sm font-medium mb-4 leading-relaxed"
              style={{ color: "#3D3A35" }}
            >
              Eligible: {job.eligibility}
            </p>

            {job.tags?.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-5">
                {job.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-xs px-2.5 py-1 rounded-full font-extrabold"
                    style={{
                      background: "#FEF3C7",
                      border: "1px solid #F5AB35",
                      color: "#111111",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <div className="flex flex-wrap items-center justify-between gap-3 pt-4"
              style={{ borderTop: "1px solid #E8E4DC" }}
            >
              <span
                className="inline-flex items-center gap-1.5 text-sm font-semibold"
                style={{ color: "#7A756C" }}
              >
                <Calendar className="w-4 h-4" style={{ color: "#D97706" }} />
                Apply by {job.date}
              </span>
              <button
                type="button"
                onClick={handleApplyClick}
                className="relative z-10 inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-sm font-black transition-all hover:scale-[1.02]"
                style={{
                  background: "#FBBD58",
                  color: "#111111",
                  border: "1px solid #F5AB35",
                  boxShadow: "0 4px 14px rgba(251,189,88,0.28)",
                }}
              >
                Apply Now
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </FollowerPointerCard>
    </div>
  );
}
