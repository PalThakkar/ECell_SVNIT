"use client";

import EntityForm from "@/components/admin/EntityForm";

const fields = [
  {
    name: "event",
    label: "Event Key",
    type: "text",
    required: true,
    placeholder: "lego-2025",
  },
  { name: "teamName", label: "Team Name", type: "text", required: true },
  { name: "points", label: "Points", type: "number", required: true },
];

export default function NewLeaderboardEntryPage() {
  return (
    <main className="min-h-screen bg-zinc-950 p-6 text-white">
      <div className="mx-auto max-w-2xl rounded-2xl border border-zinc-800 bg-zinc-900 p-8">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-yellow-400">
              Admin
            </p>
            <h1 className="mt-2 text-2xl font-bold">Add Leaderboard Entry</h1>
          </div>
          <a
            href="/admin/leaderboard"
            className="text-sm text-zinc-300 hover:text-white"
          >
            Back to leaderboard
          </a>
        </div>

        <EntityForm
          fields={fields}
          initialValues={{ event: "lego-2025", teamName: "", points: 0 }}
          apiPath="/api/leaderboard"
          method="POST"
          redirectTo="/admin/leaderboard"
          submitLabel="Add Entry"
        />
      </div>
    </main>
  );
}
