import prisma from "@/lib/prisma";
import DataTable from "@/components/admin/DataTable";

export const dynamic = "force-dynamic";

export default async function AdminLeaderboardPage() {
  const entries = (
    await prisma.leaderboardEntry.findMany({
      orderBy: [{ event: "asc" }, { points: "desc" }],
    })
  ).map((e) => ({
    ...e,
    meta: `${e.event} · ${e.points} pts`,
  }));

  return (
    <main className="min-h-screen bg-zinc-950 p-6 text-white">
      <div className="mx-auto max-w-5xl space-y-6">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-yellow-400">
              Admin
            </p>
            <h1 className="mt-2 text-2xl font-bold">Leaderboard</h1>
          </div>
          <a
            href="/admin/leaderboard/new"
            className="rounded-xl bg-yellow-400 px-4 py-2 font-semibold text-zinc-950 transition hover:bg-yellow-300"
          >
            + Add Entry
          </a>
        </div>

        <DataTable
          items={entries}
          apiPath="/api/leaderboard"
          editPathPrefix="/admin/leaderboard"
          emptyLabel="No leaderboard entries yet."
          columns={[
            { key: "teamName", className: "font-semibold" },
            { key: "meta", className: "text-sm text-zinc-400" },
          ]}
        />
      </div>
    </main>
  );
}
