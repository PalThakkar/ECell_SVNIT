import prisma from "@/lib/prisma";

export async function POST(request) {
  try {
    const body = await request.json();

    const contactType =
      body.type === "PROJECT" ? "PROJECT_INQUIRY" : "GENERAL_QUERY";

    const submission = await prisma.contactSubmission.create({
      data: {
        type: contactType,
        name: body.name,
        email: body.email,
        phone: body.phone || null,
        projectTitle: body.projectTitle || null,
        message: body.message,
      },
    });

    return Response.json({ success: true, submission });
  } catch (error) {
    console.error("Contact submission error:", error);
    return Response.json(
      { success: false, message: "Failed to save contact submission" },
      { status: 500 },
    );
  }
}
