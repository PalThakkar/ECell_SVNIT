"use client";

import EntityForm from "@/components/admin/EntityForm";

const fields = [
  { name: "title", label: "Title", type: "text", required: true },
  {
    name: "slug",
    label: "Slug",
    type: "text",
    required: true,
    placeholder: "esummit-2026",
  },
  { name: "subtitle", label: "Subtitle", type: "text" },
  { name: "year", label: "Year", type: "number", required: true },
  {
    name: "status",
    label: "Status",
    type: "select",
    options: ["DRAFT", "OPEN", "CLOSED", "LIVE", "COMPLETED"],
  },
  { name: "venue", label: "Venue", type: "text" },
  { name: "startDate", label: "Start Date", type: "date" },
  { name: "endDate", label: "End Date", type: "date" },
  { name: "registrationLink", label: "Registration Link", type: "text" },
  { name: "heroLine1", label: "Hero Line 1", type: "text" },
  { name: "heroLine2", label: "Hero Line 2", type: "text" },
  { name: "description", label: "Description", type: "textarea", rows: 4 },
  { name: "featuredImage", label: "Featured Image", type: "image" },
  {
    name: "metrics",
    label: "Metrics (JSON, optional)",
    type: "json",
    placeholder: '{"attendees": 500, "speakers": 12}',
    rows: 3,
  },
  {
    name: "galleryPhotos",
    label: "Gallery Photos (JSON array, optional)",
    type: "json",
    placeholder: '["/event-photos/photo1.jpg"]',
    rows: 3,
  },
];

export default function NewEventPage() {
  return (
    <main className="min-h-screen bg-zinc-950 p-6 text-white">
      <div className="mx-auto max-w-2xl rounded-2xl border border-zinc-800 bg-zinc-900 p-8">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-yellow-400">
              Admin
            </p>
            <h1 className="mt-2 text-2xl font-bold">New Event</h1>
          </div>
          <a
            href="/admin/events"
            className="text-sm text-zinc-300 hover:text-white"
          >
            Back to events
          </a>
        </div>

        <EntityForm
          fields={fields}
          initialValues={{
            title: "",
            slug: "",
            subtitle: "",
            year: new Date().getFullYear(),
            status: "DRAFT",
            venue: "",
            startDate: "",
            endDate: "",
            registrationLink: "",
            heroLine1: "",
            heroLine2: "",
            description: "",
            featuredImage: "",
            metrics: "",
            galleryPhotos: "",
          }}
          apiPath="/api/events"
          method="POST"
          redirectTo="/admin/events"
          submitLabel="Create Event"
        />
      </div>
    </main>
  );
}
