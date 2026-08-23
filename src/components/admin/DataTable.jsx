"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

/**
 * Generic list view with an edit link and a delete button per row, used by
 * all admin content-type list pages.
 *
 * columns: [{ key, className? }] — values must already be serializable on the item
 * (no render functions; server pages cannot pass functions to client components).
 */
export default function DataTable({
  items,
  columns,
  apiPath,
  editPathPrefix,
  emptyLabel = "Nothing here yet.",
}) {
  const router = useRouter();
  const [deletingId, setDeletingId] = useState(null);

  const handleDelete = async (id) => {
    if (!confirm("Delete this item? This can't be undone.")) return;

    setDeletingId(id);

    try {
      const response = await fetch(`${apiPath}/${id}`, { method: "DELETE" });
      if (!response.ok) throw new Error("Failed to delete");
      router.refresh();
    } catch (error) {
      console.error(error);
      alert("Failed to delete item");
    } finally {
      setDeletingId(null);
    }
  };

  if (!items.length) {
    return <p className="text-sm text-zinc-400">{emptyLabel}</p>;
  }

  return (
    <div className="space-y-3">
      {items.map((item) => (
        <div
          key={item.id}
          className="flex flex-col gap-3 rounded-xl border border-zinc-800 bg-zinc-950 p-4 md:flex-row md:items-center md:justify-between"
        >
          <div className="space-y-1">
            {columns.map((col) => (
              <p
                key={col.key}
                className={col.className || "text-sm text-zinc-300"}
              >
                {item[col.key]}
              </p>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <a
              href={`${editPathPrefix}/${item.id}/edit`}
              className="rounded-lg border border-zinc-700 px-3 py-1.5 text-sm text-zinc-200 hover:border-yellow-400 hover:text-yellow-300"
            >
              Edit
            </a>
            <button
              type="button"
              onClick={() => handleDelete(item.id)}
              disabled={deletingId === item.id}
              className="rounded-lg border border-red-500/40 px-3 py-1.5 text-sm text-red-300 hover:bg-red-500/10 disabled:opacity-50"
            >
              {deletingId === item.id ? "Deleting..." : "Delete"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
