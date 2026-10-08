import prisma from "@/lib/prisma";
import TeamClient from "./TeamClient";

export const metadata = {
  title: "Team | E-Cell SVNIT",
};

export default async function TeamPage() {
  // Fetch team members from the database
  const allMembers = await prisma.teamMember.findMany({
    orderBy: { sortOrder: 'asc' }
  });

  // Reconstruct the data shape expected by the client component
  const team2025Data = {};
  const team2024Data = {};
  
  for (const member of allMembers) {
    const dataObj = member.year === 2025 ? team2025Data : team2024Data;
    
    if (!dataObj[member.department]) {
      dataObj[member.department] = [];
    }
    
    dataObj[member.department].push({
      name: member.name,
      position: member.position,
      photo: member.photoUrl,
      linkedin: member.linkedin,
      instagram: member.instagram,
    });
  }

  return (
    <TeamClient 
      team2025Data={team2025Data} 
      team2024Data={team2024Data} 
    />
  );
}