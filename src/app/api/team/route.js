import { createCollectionHandlers } from "@/lib/crudHandlers";

export const { GET, POST } = createCollectionHandlers("teamMember", {
  orderBy: [{ year: "desc" }, { sortOrder: "asc" }],
  transformCreate: (body) => ({
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
