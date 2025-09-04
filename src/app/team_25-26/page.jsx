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
        url: "https://www.ecellsvnit.com/og-image.png",
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
    images: ["https://www.ecellsvnit.com/og-image.png"],
  },
};

const teamMembers = {
  chiefExecutive: [
    {
      photo: '/atman.png',
      name: 'Atman Shah',
      position: 'Convener',
      linkedin: 'https://www.linkedin.com/in/jeet-ariwala-152243256',
      instagram: 'https://www.instagram.com/jeet_ariwala21',
    },
    {
      photo: '/aman.png',
      name: 'Aman Kapoor',
      position: 'Co-Convener',
      linkedin: 'https://www.linkedin.com/in/kartik-srivastava-b46b561b7',
      instagram: 'https://www.instagram.com/__.the.prodigal.son.__',
    },
    {
      photo: '/asmi.png',
      name: 'Asmi Wadhwa',
      position: 'Secretary',
      linkedin: 'https://www.linkedin.com/in/kashish-sharma-545774215',
      instagram: 'https://www.instagram.com/kashishhh__11',
    },
    {
      photo: '/soni.png',
      name: 'Lakshya Soni',
      position: 'Treasurer',
      linkedin: 'https://www.linkedin.com/in/om-ramanuj-511501266',
      instagram: 'https://www.instagram.com/ramanuj_om',
    },
  ],
  finance: [
    {
      photo: '/adi.jpg',
      name: 'Aditya Panchal',
      position: 'Head',
      linkedin: 'https://www.linkedin.com/in/srjaykikani',
      instagram: 'https://www.instagram.com/_srjay',
    },
    {
      photo: '/shabbir.png',
      name: 'Shabbir Hussainy',
      position: 'Head',
      linkedin: 'https://www.linkedin.com/in/shambhavishinde',
      instagram: 'https://www.instagram.com/shmbhvi',
    },
  ],
  mediaAndDesign: [
    {
      photo: '/kasera.png',
      name: 'Tanish Kasera',
      position: 'Head',
      linkedin: 'https://www.linkedin.com/in/ronak-dangar',
      instagram: 'https://www.instagram.com/ronak_dangar_04',
    },
    {
      photo: '/altaf.jpg',
      name: 'Altaf Shams',
      position: 'Head',
      linkedin: 'https://in.linkedin.com/in/om-panchal-136410257',
      instagram: 'https://www.instagram.com/om_panchal_op7',
    },
  ],
  events: [
    {
      photo: '/priti.jpg',
      name: 'Priti Sand',
      position: 'Head',
      linkedin: 'https://www.linkedin.com/in/pritish-tripathi-362006271',
      instagram: 'https://www.instagram.com/tripathipritish',
    },
    {
      photo: '/harsh.png',
      name: 'Harsh Solanki',
      position: 'Head',
      linkedin: 'https://www.linkedin.com/in/tanish2311',
      instagram: 'https://www.instagram.com/ttan_ishh',
    },
  ],
  contentTeam: [
    {
      photo: '/tanisha.jpg',
      name: 'Tanisha Mishra',
      position: 'Head',
      linkedin: 'https://www.linkedin.com/in/ridhayu-gosai-4b063a280',
      instagram: 'https://www.instagram.com/ridhayu_gosai_28',
    },
    {
      photo: '/jash.jpg',
      name: 'Jash Vadani',
      position: 'Head',
      linkedin: 'https://www.linkedin.com/in/soumyashreeparida785',
      instagram: 'https://www.instagram.com/pvtt_soumya',
    },
  ],
  publicRelations: [
    {
      photo: '/meet.png',
      name: 'Meet Pandya',
      position: 'Head',
      linkedin: 'https://www.linkedin.com/in/nanviya-zala-108324306',
      instagram: 'https://www.instagram.com/notnanviazala',
    },
    {
      photo: '/devanshi.jpg',
      name: 'Devanshi Rathwa',
      position: 'Head',
      linkedin: 'https://www.linkedin.com/in/krish-parmar-a30211258',
      instagram: 'https://www.instagram.com/krishh_.003',
    },
  ],
};

const renderTeamSection = (sectionTitle, members) => (
  <section className="w-full">
    <h2 className="text-5xl font-extrabold text-center mt-16 text-neutral-900 tracking-tight">
      {sectionTitle}
    </h2>
    <div className="flex justify-center mt-10 gap-8 flex-wrap">
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

  </section>
);


const TeamPage = () => (
  <>
    <PageIntro eyebrow="Team" title="Meet Our Team" centered>
      <p className="text-lg sm:text-xl max-w-4xl mx-auto">
        Get to know the amazing team behind E-Cell SVNIT. Connect with us on LinkedIn and Instagram.
      </p>
    </PageIntro>

    <div className="mt-16 px-8 lg:px-12 w-full max-w-[1700px] mx-auto">
      {renderTeamSection('Chief Executives', teamMembers.chiefExecutive)}
      {renderTeamSection('Events Team', teamMembers.events)}
      {renderTeamSection('Podcast and Content Team', teamMembers.contentTeam)}
      {renderTeamSection('Finance and Documentation Team', teamMembers.finance)}
      {renderTeamSection('Public Relations Team', teamMembers.publicRelations)}
      {renderTeamSection('Media and Design Team', teamMembers.mediaAndDesign)}
    </div>
  </>
);


export default TeamPage;
