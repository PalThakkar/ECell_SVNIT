"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NewJobPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    title: "",
    company: "",
    eligibility: "",
    image: "/arcrete.png",
    shortDescription: "",
    tags: "Internship, Part-Time",
    applyLink: "",
    isActive: true,
    closesAt: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/jobs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          tags: form.tags
            .split(",")
            .map((tag) => tag.trim())
            .filter(Boolean),
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to create job");
      }

      router.push("/admin");
      router.refresh();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-zinc-950 p-6 text-white">
      <div className="mx-auto max-w-2xl rounded-2xl border border-zinc-800 bg-zinc-900 p-8">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-yellow-400">
              Admin
            </p>
            <h1 className="mt-2 text-2xl font-bold">Create New Job</h1>
          </div>
          <a href="/admin" className="text-sm text-zinc-300 hover:text-white">
            Back to dashboard
          </a>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <Field label="Title">
            <input
              required
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              className="w-full rounded-xl border border-zinc-700 bg-zinc-950 p-3 outline-none focus:border-yellow-400"
            />
          </Field>

          <Field label="Company">
            <input
              required
              value={form.company}
              onChange={(e) => setForm({ ...form, company: e.target.value })}
              className="w-full rounded-xl border border-zinc-700 bg-zinc-950 p-3 outline-none focus:border-yellow-400"
            />
          </Field>

          <Field label="Eligibility">
            <input
              required
              value={form.eligibility}
              onChange={(e) =>
                setForm({ ...form, eligibility: e.target.value })
              }
              className="w-full rounded-xl border border-zinc-700 bg-zinc-950 p-3 outline-none focus:border-yellow-400"
            />
          </Field>

          <Field label="Short Description">
            <textarea
              required
              value={form.shortDescription}
              onChange={(e) =>
                setForm({ ...form, shortDescription: e.target.value })
              }
              rows={3}
              className="w-full rounded-xl border border-zinc-700 bg-zinc-950 p-3 outline-none focus:border-yellow-400"
            />
          </Field>

          <Field label="Tags (comma separated)">
            <input
              value={form.tags}
              onChange={(e) => setForm({ ...form, tags: e.target.value })}
              className="w-full rounded-xl border border-zinc-700 bg-zinc-950 p-3 outline-none focus:border-yellow-400"
            />
          </Field>

          <Field label="Image URL">
            <input
              value={form.image}
              onChange={(e) => setForm({ ...form, image: e.target.value })}
              className="w-full rounded-xl border border-zinc-700 bg-zinc-950 p-3 outline-none focus:border-yellow-400"
            />
          </Field>

          <Field label="Apply Link">
            <input
              value={form.applyLink}
              onChange={(e) => setForm({ ...form, applyLink: e.target.value })}
              className="w-full rounded-xl border border-zinc-700 bg-zinc-950 p-3 outline-none focus:border-yellow-400"
            />
          </Field>

          <Field label="Closing Date">
            <input
              type="date"
              value={form.closesAt}
              onChange={(e) => setForm({ ...form, closesAt: e.target.value })}
              className="w-full rounded-xl border border-zinc-700 bg-zinc-950 p-3 outline-none focus:border-yellow-400"
            />
          </Field>

          <label className="flex items-center gap-3 rounded-xl border border-zinc-700 bg-zinc-950 p-3">
            <input
              type="checkbox"
              checked={form.isActive}
              onChange={(e) => setForm({ ...form, isActive: e.target.checked })}
              className="h-4 w-4 accent-yellow-400"
            />
            <span>Active job</span>
          </label>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-yellow-400 px-4 py-3 font-semibold text-zinc-950 transition hover:bg-yellow-300 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {loading ? "Creating..." : "Create Job"}
          </button>
        </form>
      </div>
    </main>
  );
}

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm text-zinc-300">{label}</span>
      {children}
    </label>
  );
}
