import prisma from "@/lib/prisma";
import DataTable from "@/components/admin/DataTable";

export const dynamic = "force-dynamic";

export default async function AdminJobsPage() {
  let jobs = [];
  try {
    jobs = (await prisma.job.findMany({ orderBy: { postedAt: "desc" } })).map(
      (j) => ({
        ...j,
        meta: `${j.company} · ${j.isActive ? "Active" : "Inactive"}`,
      }),
    );
  } catch (error) {
    console.error("Admin jobs fetch error:", error);
    jobs = [];
  }

  return (
    <main className="min-h-screen bg-zinc-950 p-6 text-white">
      <div className="mx-auto max-w-5xl space-y-6">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-yellow-400">
              Admin
            </p>
            <h1 className="mt-2 text-2xl font-bold">Jobs</h1>
          </div>
          <a
            href="/admin/jobs/new"
            className="rounded-xl bg-yellow-400 px-4 py-2 font-semibold text-zinc-950 transition hover:bg-yellow-300"
          >
            + New Job
          </a>
        </div>

        <DataTable
          items={jobs}
          apiPath="/api/jobs"
          editPathPrefix="/admin/jobs"
          emptyLabel="No jobs posted yet."
          columns={[
            { key: "title", className: "font-semibold" },
            { key: "meta", className: "text-sm text-zinc-400" },
          ]}
        />
      </div>
    </main>
  );
}
