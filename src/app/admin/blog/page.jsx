import prisma from "@/lib/prisma";
import DataTable from "@/components/admin/DataTable";

export const dynamic = "force-dynamic";

export default async function AdminBlogPage() {
  const posts = (
    await prisma.blogPost.findMany({
      orderBy: { createdAt: "desc" },
    })
  ).map((p) => ({
    ...p,
    meta: `/${p.slug} · ${p.published ? "Published" : "Draft"}`,
  }));

  return (
    <main className="min-h-screen bg-zinc-950 p-6 text-white">
      <div className="mx-auto max-w-5xl space-y-6">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-yellow-400">
              Admin
            </p>
            <h1 className="mt-2 text-2xl font-bold">Blog Posts</h1>
          </div>
          <a
            href="/admin/blog/new"
            className="rounded-xl bg-yellow-400 px-4 py-2 font-semibold text-zinc-950 transition hover:bg-yellow-300"
          >
            + New Post
          </a>
        </div>

        <DataTable
          items={posts}
          apiPath="/api/blog"
          editPathPrefix="/admin/blog"
          emptyLabel="No blog posts yet."
          columns={[
            { key: "title", className: "font-semibold" },
            { key: "meta", className: "text-sm text-zinc-400" },
          ]}
        />
      </div>
    </main>
  );
}
