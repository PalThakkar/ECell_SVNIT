import { createItemHandlers } from "@/lib/crudHandlers";

export const { PATCH, DELETE } = createItemHandlers("event", {
  transformUpdate: (body) => ({
    slug: body.slug,
    title: body.title,
    subtitle: body.subtitle || null,
    year: Number(body.year),
    status: body.status || "DRAFT",
    venue: body.venue || null,
    startDate: body.startDate ? new Date(body.startDate) : null,
    endDate: body.endDate ? new Date(body.endDate) : null,
    registrationLink: body.registrationLink || null,
    heroLine1: body.heroLine1 || null,
    heroLine2: body.heroLine2 || null,
    description: body.description || null,
    featuredImage: body.featuredImage || null,
    metrics: body.metrics ?? null,
    galleryPhotos: body.galleryPhotos ?? null,
  }),
});
