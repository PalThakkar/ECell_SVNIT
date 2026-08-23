import { createItemHandlers } from "@/lib/crudHandlers";

export const { PATCH, DELETE } = createItemHandlers("blogPost", {
  transformUpdate: (body) => ({
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
