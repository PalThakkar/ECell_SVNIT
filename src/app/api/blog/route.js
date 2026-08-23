import { createCollectionHandlers } from "@/lib/crudHandlers";

export const { GET, POST } = createCollectionHandlers("blogPost", {
  orderBy: { createdAt: "desc" },
  transformCreate: (body) => ({
    title: body.title,
    slug: body.slug,
    excerpt: body.excerpt || null,
    content: body.content,
    coverImage: body.coverImage || null,
    author: body.author || null,
    published: !!body.published,
    publishedAt: body.published ? new Date() : null,
  }),
});
