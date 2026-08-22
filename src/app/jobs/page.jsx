import React from "react";
import { BackgroundBoxesDemo } from "@/components/ui/background-boxes";
import { JobCard } from "@/components/JobCard";
import prisma from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function JobsPage() {
  const jobs = await prisma.job.findMany({
    where: { isActive: true },
    orderBy: { postedAt: "desc" },
  });

  const formattedJobs = jobs.map((job) => ({
    ...job,
    date: job.closesAt
      ? new Date(job.closesAt).toLocaleDateString("en-IN", {
          day: "numeric",
          month: "short",
          year: "numeric",
        })
      : "Open",
    image: job.image || "/arcrete.png",
    shortDescription: job.shortDescription || "Open opportunity.",
    tags: Array.isArray(job.tags) ? job.tags : [],
  }));

  return (
    <div className="container mx-auto pt-25 py-40">
      <div className="mb-12">
        <BackgroundBoxesDemo />
      </div>

      {formattedJobs.length === 0 ? (
        <div className="text-center text-zinc-600">
          No active jobs right now.
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {formattedJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      )}
    </div>
  );
}
