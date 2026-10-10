import prisma from "@/lib/prisma";
import DevTeamClient from "./DevTeamClient";

export const metadata = {
  title: "Development Team | E-Cell SVNIT",
};

export const dynamic = "force-dynamic";

export default async function DevTeamPage() {
  const members = await prisma.teamMember.findMany({
    where: {
      department: {
        contains: "technical",
        mode: "insensitive",
      },
    },
    orderBy: [{ year: "desc" }, { sortOrder: "asc" }],
  });

  return (
    <DevTeamClient
      members={members.map((member) => ({
        id: member.id,
        name: member.name,
        position: member.position,
        photo: member.photoUrl,
        linkedin: member.linkedin,
        instagram: member.instagram,
        year: member.year,
      }))}
    />
  );
}
