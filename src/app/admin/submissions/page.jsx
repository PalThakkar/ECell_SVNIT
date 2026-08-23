import prisma from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function AdminSubmissionsPage() {
  const submissions = await prisma.contactSubmission.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <main className="min-h-screen bg-zinc-950 p-6 text-white">
      <div className="mx-auto max-w-6xl rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
        <div className="mb-6 flex items-center justify-between gap-3">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-yellow-400">
              Admin
            </p>
            <h1 className="mt-2 text-2xl font-bold">Contact Submissions</h1>
          </div>
          <a href="/admin" className="text-sm text-zinc-300 hover:text-white">
            Back to dashboard
          </a>
        </div>

        <div className="space-y-4">
          {submissions.map((submission) => (
            <article
              key={submission.id}
              className="rounded-xl border border-zinc-800 bg-zinc-950 p-5"
            >
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="font-semibold">{submission.name}</p>
                  <p className="text-sm text-zinc-400">{submission.email}</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-zinc-800 px-2 py-1 text-xs text-zinc-300">
                    {submission.type}
                  </span>
                  <span className="rounded-full bg-yellow-500/20 px-2 py-1 text-xs text-yellow-300">
                    {submission.status}
                  </span>
                </div>
              </div>

              {submission.projectTitle && (
                <p className="mt-3 text-sm text-zinc-300">
                  Project: {submission.projectTitle}
                </p>
              )}

              {submission.phone && (
                <p className="mt-1 text-sm text-zinc-300">
                  Phone: {submission.phone}
                </p>
              )}

              <p className="mt-4 text-zinc-200">{submission.message}</p>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
