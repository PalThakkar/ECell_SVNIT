"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import ImageUploadField from "./ImageUploadField";

/**
 * Generic create/edit form driven by a field-config array. Used across all
 * admin content types (team, blog, events, leaderboard, jobs) so each
 * entity's "new"/"edit" page only has to declare its fields, not rebuild
 * the form plumbing.
 *
 * field: { name, label, type, required?, placeholder?, rows?, options?, checkboxLabel? }
 * type: "text" | "textarea" | "number" | "date" | "checkbox" | "select" | "image" | "tags" | "json"
 */
export default function EntityForm({
  fields,
  initialValues,
  apiPath,
  method = "POST",
  redirectTo,
  submitLabel = "Save",
}) {
  const router = useRouter();
  const [form, setForm] = useState(initialValues);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const setField = (name, value) =>
    setForm((prev) => ({ ...prev, [name]: value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const payload = {};

      for (const field of fields) {
        const value = form[field.name];

        if (field.type === "tags") {
          payload[field.name] = String(value || "")
            .split(",")
            .map((tag) => tag.trim())
            .filter(Boolean);
        } else if (field.type === "number") {
          payload[field.name] = value === "" ? null : Number(value);
        } else if (field.type === "json") {
          if (!value) {
            payload[field.name] = null;
          } else {
            try {
              payload[field.name] = JSON.parse(value);
            } catch {
              throw new Error(`"${field.label}" isn't valid JSON`);
            }
          }
        } else {
          payload[field.name] = value;
        }
      }

      const response = await fetch(apiPath, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(data.message || "Request failed");
      }

      router.push(redirectTo);
      router.refresh();
    } catch (err) {
      console.error(err);
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {error && (
        <p className="rounded-xl border border-red-500/40 bg-red-500/10 p-3 text-sm text-red-300">
          {error}
        </p>
      )}

      {fields.map((field) => (
        <Field key={field.name} label={field.label}>
          {field.type === "textarea" || field.type === "json" ? (
            <textarea
              required={field.required}
              rows={field.rows || 4}
              placeholder={field.placeholder}
              value={form[field.name] ?? ""}
              onChange={(e) => setField(field.name, e.target.value)}
              className="w-full rounded-xl border border-zinc-700 bg-zinc-950 p-3 font-mono text-sm outline-none focus:border-yellow-400"
            />
          ) : field.type === "checkbox" ? (
            <label className="flex items-center gap-3 rounded-xl border border-zinc-700 bg-zinc-950 p-3">
              <input
                type="checkbox"
                checked={!!form[field.name]}
                onChange={(e) => setField(field.name, e.target.checked)}
                className="h-4 w-4 accent-yellow-400"
              />
              <span>{field.checkboxLabel || "Enabled"}</span>
            </label>
          ) : field.type === "select" ? (
            <select
              required={field.required}
              value={form[field.name] ?? ""}
              onChange={(e) => setField(field.name, e.target.value)}
              className="w-full rounded-xl border border-zinc-700 bg-zinc-950 p-3 outline-none focus:border-yellow-400"
            >
              {field.options.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          ) : field.type === "image" ? (
            <ImageUploadField
              value={form[field.name] ?? ""}
              onChange={(url) => setField(field.name, url)}
            />
          ) : (
            <input
              type={
                field.type === "number"
                  ? "number"
                  : field.type === "date"
                    ? "date"
                    : "text"
              }
              required={field.required}
              placeholder={field.placeholder}
              value={form[field.name] ?? ""}
              onChange={(e) => setField(field.name, e.target.value)}
              className="w-full rounded-xl border border-zinc-700 bg-zinc-950 p-3 outline-none focus:border-yellow-400"
            />
          )}
        </Field>
      ))}

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-xl bg-yellow-400 px-4 py-3 font-semibold text-zinc-950 transition hover:bg-yellow-300 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {loading ? "Saving..." : submitLabel}
      </button>
    </form>
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
