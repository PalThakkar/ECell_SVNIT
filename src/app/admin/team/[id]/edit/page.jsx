import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";
import EntityForm from "@/components/admin/EntityForm";

const fields = [
  { name: "name", label: "Name", type: "text", required: true },
  { name: "position", label: "Position", type: "text", required: true },
  { name: "department", label: "Department", type: "text", required: true },
  { name: "year", label: "Year", type: "number", required: true },
  { name: "photoUrl", label: "Photo", type: "image" },
  { name: "linkedin", label: "LinkedIn URL", type: "text" },
  { name: "instagram", label: "Instagram URL", type: "text" },
  { name: "sortOrder", label: "Sort Order", type: "number" },
];

export const dynamic = "force-dynamic";

export default async function EditTeamMemberPage({ params }) {
  const { id } = await params;
  let member = null;
  try {
    member = await prisma.teamMember.findUnique({ where: { id } });
  } catch (error) {
    console.error("Failed to load team member:", error);
  }

  if (!member) notFound();

  return (
    <main className="min-h-screen bg-zinc-950 p-6 text-white">
      <div className="mx-auto max-w-2xl rounded-2xl border border-zinc-800 bg-zinc-900 p-8">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-yellow-400">
              Admin
            </p>
            <h1 className="mt-2 text-2xl font-bold">Edit Team Member</h1>
          </div>
          <a
            href="/admin/team"
            className="text-sm text-zinc-300 hover:text-white"
          >
            Back to team
          </a>
        </div>

        <EntityForm
          fields={fields}
          initialValues={{
            name: member.name,
            position: member.position,
            department: member.department,
            year: member.year,
            photoUrl: member.photoUrl,
            linkedin: member.linkedin || "",
            instagram: member.instagram || "",
            sortOrder: member.sortOrder,
          }}
          apiPath={`/api/team/${member.id}`}
          method="PATCH"
          redirectTo="/admin/team"
          submitLabel="Save Changes"
        />
      </div>
    </main>
  );
}
