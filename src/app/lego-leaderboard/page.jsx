import prisma from "@/lib/prisma";
import LegoLeaderboardClient from "./LegoLeaderboardClient";

export const metadata = {
  title: "Leaderboard | E-Cell SVNIT",
  description: "Live standings for the Lego Startup.",
};

export const dynamic = "force-dynamic";

export default async function LegoLeaderboardPage() {
  const entries = await prisma.leaderboardEntry.findMany({
    where: { event: "lego-2025" },
    orderBy: { points: "desc" },
  });

  const leaderboardData = entries.map((entry, index) => ({
    rank: index + 1,
    teamName: entry.teamName,
    points: entry.points,
  }));

  return <LegoLeaderboardClient leaderboardData={leaderboardData} />;
}
