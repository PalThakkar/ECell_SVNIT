import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";
import EntityForm from "@/components/admin/EntityForm";

const fields = [
  { name: "title", label: "Title", type: "text", required: true },
  { name: "company", label: "Company", type: "text", required: true },
  { name: "eligibility", label: "Eligibility", type: "text", required: true },
  {
    name: "shortDescription",
    label: "Short Description",
    type: "textarea",
    required: true,
  },
  { name: "tags", label: "Tags (comma separated)", type: "tags" },
  { name: "image", label: "Image", type: "image" },
  { name: "applyLink", label: "Apply Link", type: "text" },
  { name: "closesAt", label: "Closing Date", type: "date" },
  {
    name: "isActive",
    label: "Status",
    type: "checkbox",
    checkboxLabel: "Active job",
  },
];

const toDateInput = (date) => (date ? date.toISOString().slice(0, 10) : "");

export const dynamic = "force-dynamic";

export default async function EditJobPage({ params }) {
  const { id } = await params;
  let job = null;
  try {
    job = await prisma.job.findUnique({ where: { id } });
  } catch (error) {
    console.error("Failed to load job:", error);
  }

  if (!job) notFound();

  return (
    <main className="min-h-screen bg-zinc-950 p-6 text-white">
      <div className="mx-auto max-w-2xl rounded-2xl border border-zinc-800 bg-zinc-900 p-8">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-yellow-400">
              Admin
            </p>
            <h1 className="mt-2 text-2xl font-bold">Edit Job</h1>
          </div>
          <a
            href="/admin/jobs"
            className="text-sm text-zinc-300 hover:text-white"
          >
            Back to jobs
          </a>
        </div>

        <EntityForm
          fields={fields}
          initialValues={{
            title: job.title,
            company: job.company,
            eligibility: job.eligibility,
            shortDescription: job.shortDescription,
            tags: job.tags.join(", "),
            image: job.image || "",
            applyLink: job.applyLink || "",
            closesAt: toDateInput(job.closesAt),
            isActive: job.isActive,
          }}
          apiPath={`/api/jobs/${job.id}`}
          method="PATCH"
          redirectTo="/admin/jobs"
          submitLabel="Save Changes"
        />
      </div>
    </main>
  );
}
