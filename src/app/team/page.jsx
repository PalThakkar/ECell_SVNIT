import React from 'react';
import PageIntro from '@/components/PageIntro';
import Container from '@/components/Container';
import TeamMember from '@/components/TeamMember';

const teamMembers = {
  chiefExecutive: [
    {
      photo: '/jeet.jpg',
      name: 'Jeet Ariwala',
      position: 'Chief Executive',
      linkedin: 'https://www.linkedin.com/in/jeet-ariwala-152243256',
      instagram: 'https://www.instagram.com/jeet_ariwala21',
    },
    {
      photo: '/kartik.jpg',
      name: 'Kartik Srivastava',
      position: 'Chief Executive',
      linkedin: 'https://www.linkedin.com/in/kartik-srivastava-b46b561b7',
      instagram: 'https://www.instagram.com/__.the.prodigal.son.__',
    },
    {
      photo: '/kashish.jpg',
      name: 'Kashish Sharma',
      position: 'Chief Executive',
      linkedin: 'https://www.linkedin.com/in/kashish-sharma-545774215',
      instagram: 'https://www.instagram.com/kashishhh__11',
    },
    {
      photo: '/omraa.jpg',
      name: 'Om Ramanuj',
      position: 'Chief Executive',
      linkedin: 'https://www.linkedin.com/in/om-ramanuj-511501266',
      instagram: 'https://www.instagram.com/ramanuj_om',
    },
  ],
  technical: [
    {
      photo: '/srjay.jpg',
      name: 'S R Jay Kikani',
      position: 'Head',
      linkedin: 'https://www.linkedin.com/in/srjaykikani',
      instagram: 'https://www.instagram.com/_srjay',
    },
    {
      photo: '/shambhavi.jpg',
      name: 'Shambhavi Shinde',
      position: 'Co-head',
      linkedin: 'https://www.linkedin.com/in/shambhavishinde',
      instagram: 'https://www.instagram.com/shmbhvi',
    },
  ],
  mediaAndPublicity: [
    {
      photo: '/dangar.jpg',
      name: 'Ronak Dangar',
      position: 'Head',
      linkedin: 'https://www.linkedin.com/in/ronak-dangar',
      instagram: 'https://www.instagram.com/ronak_dangar_04',
    },
    {
      photo: '/om-p.jpg',
      name: 'Om Panchal',
      position: 'Co-Head',
      linkedin: 'https://in.linkedin.com/in/om-panchal-136410257',
      instagram: 'https://www.instagram.com/om_panchal_op7',
    },
  ],
  events: [
    {
      photo: '/tripathi.jpg',
      name: 'Pritish Tripathi',
      position: 'Head',
      linkedin: 'https://www.linkedin.com/in/pritish-tripathi-362006271',
      instagram: 'https://www.instagram.com/tripathipritish',
    },
    {
      photo: '/tanish.jpg',
      name: 'Tanish Panchal',
      position: 'Co-head',
      linkedin: 'https://www.linkedin.com/in/tanish2311',
      instagram: 'https://www.instagram.com/ttan_ishh',
    },
  ],
  startupTeam: [
    {
      photo: '/ridhayu.jpg',
      name: 'Gosai Ridhayu',
      position: 'Head',
      linkedin: 'https://www.linkedin.com/in/ridhayu-gosai-4b063a280',
      instagram: 'https://www.instagram.com/ridhayu_gosai_28',
    },
    {
      photo: '/sp.jpg',
      name: 'Soumyashree Parida',
      position: 'Co-head',
      linkedin: 'https://www.linkedin.com/in/soumyashreeparida785',
      instagram: 'https://www.instagram.com/pvtt_soumya',
    },
  ],
  publicRelations: [
    {
      photo: '/zala.jpg',
      name: 'Nanviya Zala',
      position: 'Head',
      linkedin: 'https://www.linkedin.com/in/nanviya-zala-108324306',
      instagram: 'https://www.instagram.com/notnanviazala',
    },
    {
      photo: '/parmar.jpg',
      name: 'Krish Parmar',
      position: 'Co-Head',
      linkedin: 'https://www.linkedin.com/in/krish-parmar-a30211258',
      instagram: 'https://www.instagram.com/krishh_.003',
    },
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
