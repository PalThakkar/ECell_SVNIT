import prisma from "@/lib/prisma";
import JobsLanding from "@/components/JobsLanding";

export const dynamic = "force-dynamic";

export default async function JobsPage() {
  const jobs = await prisma.job.findMany({
    where: { isActive: true },
    orderBy: { postedAt: "desc" },
  });

  const formattedJobs = jobs.map((job) => ({
    id: job.id,
    title: job.title,
    company: job.company,
    eligibility: job.eligibility,
    shortDescription: job.shortDescription || "Open opportunity.",
    tags: Array.isArray(job.tags) ? job.tags : [],
    applyLink: job.applyLink,
    date: job.closesAt
      ? new Date(job.closesAt).toLocaleDateString("en-IN", {
          day: "numeric",
          month: "short",
          year: "numeric",
        })
      : "Open",
    image: job.image || "/arcrete.png",
  }));

  return <JobsLanding jobs={formattedJobs} />;
}
