import { createItemHandlers } from "@/lib/crudHandlers";

export const { PATCH, DELETE } = createItemHandlers("job", {
  transformUpdate: (body) => ({
    title: body.title,
    company: body.company,
    eligibility: body.eligibility,
    image: body.image || null,
    shortDescription: body.shortDescription,
    tags: body.tags || [],
    applyLink: body.applyLink || null,
    isActive: body.isActive ?? true,
    closesAt: body.closesAt ? new Date(body.closesAt) : null,
  }),
});
