import prisma from "@/lib/prisma";
import DataTable from "@/components/admin/DataTable";

export const dynamic = "force-dynamic";

export default async function AdminTeamPage() {
  let members = [];
  try {
    members = (
      await prisma.teamMember.findMany({
        orderBy: [{ year: "desc" }, { sortOrder: "asc" }],
      })
    ).map((m) => ({
      ...m,
      meta: `${m.position} · ${m.department} · ${m.year}`,
    }));
  } catch (error) {
    console.error("Admin team fetch error:", error);
    members = [];
  }

  return (
    <main className="min-h-screen bg-zinc-950 p-6 text-white">
      <div className="mx-auto max-w-5xl space-y-6">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-yellow-400">
              Admin
            </p>
            <h1 className="mt-2 text-2xl font-bold">Team Members</h1>
          </div>
          <a
            href="/admin/team/new"
            className="rounded-xl bg-yellow-400 px-4 py-2 font-semibold text-zinc-950 transition hover:bg-yellow-300"
          >
            + Add Member
          </a>
        </div>

        <DataTable
          items={members}
          apiPath="/api/team"
          editPathPrefix="/admin/team"
          emptyLabel="No team members yet."
          columns={[
            { key: "name", className: "font-semibold" },
            { key: "meta", className: "text-sm text-zinc-400" },
          ]}
        />
      </div>
    </main>
  );
}
