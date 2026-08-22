import prisma from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function AdminDashboardPage() {
  const [jobs, submissions] = await Promise.all([
    prisma.job.findMany({
      orderBy: { postedAt: "desc" },
    }),
    prisma.contactSubmission.findMany({
      orderBy: { createdAt: "desc" },
    }),
  ]);

  return (
    <main className="min-h-screen bg-zinc-950 p-6 text-white">
      <div className="mx-auto max-w-7xl space-y-8">
        <header className="flex items-center justify-between gap-4 rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-yellow-400">
              Admin
            </p>
            <h1 className="mt-2 text-3xl font-bold">E-Cell Dashboard</h1>
          </div>
          <a
            href="/admin/jobs/new"
            className="rounded-xl bg-yellow-400 px-4 py-2 font-semibold text-zinc-950 transition hover:bg-yellow-300"
          >
            + New Job
          </a>
        </header>

        <section className="grid gap-6 md:grid-cols-3">
          <StatCard label="Total Jobs" value={jobs.length} accent="yellow" />
          <StatCard
            label="Active Jobs"
            value={jobs.filter((job) => job.isActive).length}
            accent="emerald"
          />
          <StatCard
            label="Submissions"
            value={submissions.length}
            accent="sky"
          />
        </section>

        <section className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
            <h2 className="mb-4 text-xl font-semibold">Recent Jobs</h2>
            <div className="space-y-3">
              {jobs.slice(0, 5).map((job) => (
                <div
                  key={job.id}
                  className="rounded-xl border border-zinc-800 bg-zinc-950 p-4"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="font-semibold">{job.title}</p>
                      <p className="text-sm text-zinc-400">{job.company}</p>
                    </div>
                    <span
                      className={`rounded-full px-2 py-1 text-xs font-medium ${job.isActive ? "bg-emerald-500/20 text-emerald-300" : "bg-zinc-700 text-zinc-300"}`}
                    >
                      {job.isActive ? "Active" : "Inactive"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
            <h2 className="mb-4 text-xl font-semibold">Latest Submissions</h2>
            <div className="space-y-3">
              {submissions.slice(0, 5).map((submission) => (
                <div
                  key={submission.id}
                  className="rounded-xl border border-zinc-800 bg-zinc-950 p-4"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="font-semibold">{submission.name}</p>
                      <p className="text-sm text-zinc-400">
                        {submission.email}
                      </p>
                    </div>
                    <span
                      className={`rounded-full px-2 py-1 text-xs font-medium ${
                        submission.status === "NEW"
                          ? "bg-yellow-500/20 text-yellow-300"
                          : submission.status === "READ"
                            ? "bg-sky-500/20 text-sky-300"
                            : "bg-emerald-500/20 text-emerald-300"
                      }`}
                    >
                      {submission.status}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-zinc-300">
                    {submission.message.slice(0, 120)}
                    {submission.message.length > 120 ? "..." : ""}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

function StatCard({ label, value, accent }) {
  const accentStyles = {
    yellow: "border-yellow-500/30 bg-yellow-500/10 text-yellow-300",
    emerald: "border-emerald-500/30 bg-emerald-500/10 text-emerald-300",
    sky: "border-sky-500/30 bg-sky-500/10 text-sky-300",
  };

  return (
    <div className={`rounded-2xl border p-5 ${accentStyles[accent]}`}>
      <p className="text-sm text-zinc-300">{label}</p>
      <p className="mt-2 text-3xl font-bold">{value}</p>
    </div>
  );
}
