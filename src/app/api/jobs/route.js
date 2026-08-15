import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const jobs = await prisma.job.findMany({
      orderBy: { postedAt: "desc" },
    });

    return Response.json({ jobs });
  } catch (error) {
    console.error("Jobs fetch error:", error);
    return Response.json({ jobs: [] }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const body = await request.json();

    const job = await prisma.job.create({
      data: {
        title: body.title,
        company: body.company,
        eligibility: body.eligibility,
        image: body.image || null,
        shortDescription: body.shortDescription,
        tags: body.tags || [],
        applyLink: body.applyLink || null,
        isActive: body.isActive ?? true,
        closesAt: body.closesAt ? new Date(body.closesAt) : null,
      },
    });

    return Response.json({ success: true, job });
  } catch (error) {
    console.error("Create job error:", error);
    return Response.json(
      { success: false, message: "Failed to create job" },
      { status: 500 },
    );
  }
}
