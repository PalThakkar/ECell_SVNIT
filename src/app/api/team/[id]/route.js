import { createItemHandlers } from "@/lib/crudHandlers";

export const { PATCH, DELETE } = createItemHandlers("teamMember", {
  transformUpdate: (body) => ({
    name: body.name,
    position: body.position,
    department: body.department,
    photoUrl: body.photoUrl,
    linkedin: body.linkedin || null,
    instagram: body.instagram || null,
    year: Number(body.year),
    sortOrder: Number(body.sortOrder) || 0,
  }),
});
