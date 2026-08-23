import prisma from "@/lib/prisma";
import DataTable from "@/components/admin/DataTable";

export const dynamic = "force-dynamic";

export default async function AdminEventsPage() {
  const events = (
    await prisma.event.findMany({
      orderBy: [{ year: "desc" }, { createdAt: "desc" }],
    })
  ).map((e) => ({
    ...e,
    meta: `/${e.slug} · ${e.year} · ${e.status}`,
  }));

  return (
    <main className="min-h-screen bg-zinc-950 p-6 text-white">
      <div className="mx-auto max-w-5xl space-y-6">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-yellow-400">
              Admin
            </p>
            <h1 className="mt-2 text-2xl font-bold">Events</h1>
          </div>
          <a
            href="/admin/events/new"
            className="rounded-xl bg-yellow-400 px-4 py-2 font-semibold text-zinc-950 transition hover:bg-yellow-300"
          >
            + New Event
          </a>
        </div>

        <DataTable
          items={events}
          apiPath="/api/events"
          editPathPrefix="/admin/events"
          emptyLabel="No events yet."
          columns={[
            { key: "title", className: "font-semibold" },
            { key: "meta", className: "text-sm text-zinc-400" },
          ]}
        />
      </div>
    </main>
  );
}
