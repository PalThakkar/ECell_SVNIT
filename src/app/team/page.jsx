import React from 'react';
import PageIntro from '@/components/PageIntro';
import Container from '@/components/Container';
import TeamMember from '@/components/TeamMember';

export const metadata = {
  title: "Meet Our Team | E-Cell SVNIT",
  description:
    "Meet the dedicated team behind E-Cell SVNIT. Connect with our executives and leaders on LinkedIn and Instagram.",
  openGraph: {
    title: "Meet Our Team | E-Cell SVNIT",
    description:
      "Get to know the team that drives E-Cell SVNIT forward. Connect with our leaders and team members on LinkedIn and Instagram.",
    url: "https://www.ecellsvnit.com/team",
    siteName: "E-Cell SVNIT",
    images: [
      {
        url: "https://www.ecellsvnit.com/images/team-og-image.png",
        width: 1200,
        height: 630,
        alt: "E-Cell SVNIT Team",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Meet Our Team | E-Cell SVNIT",
    description:
      "Meet the amazing team behind E-Cell SVNIT. Connect with our leaders on LinkedIn and Instagram.",
    images: ["https://www.ecellsvnit.com/images/team-og-image.png"],
  },
};

const teamMembers = {
  chiefExecutive: [
    // ... (team members data)
  ],
  technical: [
    // ... (team members data)
  ],
  mediaAndPublicity: [
    // ... (team members data)
  ],
  events: [
    // ... (team members data)
  ],
  startupTeam: [
    // ... (team members data)
  ],
  publicRelations: [
    // ... (team members data)
  ],
};

const renderTeamSection = (sectionTitle, members) => (
  <>
    <h2 className="text-3xl font-bold text-center mt-10 text-neutral-950">{sectionTitle}</h2>
    <div className="flex flex-wrap justify-center items-center gap-6 mt-6">
      {members.map((member, index) => (
        <TeamMember
          key={index}
          photo={member.photo}
          name={member.name}
          position={member.position}
          linkedin={member.linkedin}
          instagram={member.instagram}
        />
      ))}
    </div>
  </>
);

const TeamPage = () => {
  return (
    <>
      <PageIntro eyebrow="Team" title="Meet Our Team" centered>
        <p>
          Get to know the amazing team behind E-Cell SVNIT. Connect with us on LinkedIn and Instagram.
        </p>
      </PageIntro>
      <Container className="mt-12 flex flex-col items-center">
        {renderTeamSection('Chief Executives', teamMembers.chiefExecutive)}
        {renderTeamSection('Technical', teamMembers.technical)}
        {renderTeamSection('Media and Publicity', teamMembers.mediaAndPublicity)}
        {renderTeamSection('Events', teamMembers.events)}
        {renderTeamSection('Startup Team', teamMembers.startupTeam)}
        {renderTeamSection('Public Relations', teamMembers.publicRelations)}
      </Container>
    </>
  );
};

export default TeamPage;
