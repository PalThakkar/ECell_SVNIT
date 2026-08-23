import { createCollectionHandlers } from "@/lib/crudHandlers";

export const { GET, POST } = createCollectionHandlers("leaderboardEntry", {
  orderBy: [{ event: "asc" }, { points: "desc" }],
  transformCreate: (body) => ({
    event: body.event || "lego-2025",
    teamName: body.teamName,
    points: Number(body.points) || 0,
  }),
});
