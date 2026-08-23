import { createItemHandlers } from "@/lib/crudHandlers";

export const { PATCH, DELETE } = createItemHandlers("leaderboardEntry", {
  transformUpdate: (body) => ({
    event: body.event || "lego-2025",
    teamName: body.teamName,
    points: Number(body.points) || 0,
  }),
});
