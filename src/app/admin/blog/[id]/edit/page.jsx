import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";
import EntityForm from "@/components/admin/EntityForm";

const fields = [
  { name: "title", label: "Title", type: "text", required: true },
  {
    name: "slug",
    label: "Slug",
    type: "text",
    required: true,
    placeholder: "my-post-slug",
  },
  { name: "excerpt", label: "Excerpt", type: "textarea", rows: 2 },
  {
    name: "content",
    label: "Content",
    type: "textarea",
    rows: 10,
    required: true,
  },
  { name: "coverImage", label: "Cover Image", type: "image" },
  { name: "author", label: "Author", type: "text" },
  {
    name: "published",
    label: "Publish",
    type: "checkbox",
    checkboxLabel: "Published (visible on site)",
  },
];

export const dynamic = "force-dynamic";

export default async function EditBlogPostPage({ params }) {
  const { id } = await params;
  const post = await prisma.blogPost.findUnique({ where: { id } });

  if (!post) notFound();

  return (
    <main className="min-h-screen bg-zinc-950 p-6 text-white">
      <div className="mx-auto max-w-2xl rounded-2xl border border-zinc-800 bg-zinc-900 p-8">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-yellow-400">
              Admin
            </p>
            <h1 className="mt-2 text-2xl font-bold">Edit Blog Post</h1>
          </div>
          <a
            href="/admin/blog"
            className="text-sm text-zinc-300 hover:text-white"
          >
            Back to blog
          </a>
        </div>

        <EntityForm
          fields={fields}
          initialValues={{
            title: post.title,
            slug: post.slug,
            excerpt: post.excerpt || "",
            content: post.content,
            coverImage: post.coverImage || "",
            author: post.author || "",
            published: post.published,
          }}
          apiPath={`/api/blog/${post.id}`}
          method="PATCH"
          redirectTo="/admin/blog"
          submitLabel="Save Changes"
        />
      </div>
    </main>
  );
}
