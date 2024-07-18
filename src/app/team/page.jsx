import React from 'react';
import PageIntro from '@/components/PageIntro';
import Container from '@/components/Container';
import TeamMember from '@/components/TeamMember';

const teamMembers = {
  chiefExecutive: [
    {
      photo: '/dummy.jpg',
      name: 'Jeet Ariwala',
      position: 'Chief Executive',
      linkedin: 'https://www.linkedin.com/in/jeet-ariwala-152243256',
      instagram: 'https://www.instagram.com/jeet_ariwala21',
      phone: '9925733440',
    },
    {
      photo: '/dummy.jpg',
      name: 'Kartik Srivastava',
      position: 'Chief Executive',
      linkedin: 'https://www.linkedin.com/in/kartik-srivastava-b46b561b7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      instagram: 'https://www.instagram.com/__.the.prodigal.son.__',
      phone: '9099075036',
    },
    {
      photo: '/dummy.jpg',
      name: 'Kashish Sharma',
      position: 'Chief Executive',
      linkedin: 'https://www.linkedin.com/in/kashish-sharma-545774215?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
      instagram: 'https://www.instagram.com/kashishhh__11',
      phone: '9624833331',
    },
    {
      photo: '/dummy.jpg',
      name: 'Om Ramanuj',
      position: 'Chief Executive',
      linkedin: 'https://www.linkedin.com/in/om-ramanuj-511501266',
      instagram: 'https://www.instagram.com/ramanuj_om',
      phone: '8866677277',
    },
  ],
  technical: [
    {
      photo: '/dummy.jpg',
      name: 'S R Jay Kikani',
      position: 'Head',
      linkedin: 'https://www.linkedin.com/in/srjaykikani',
      instagram: 'https://www.instagram.com/_srjay',
      phone: '8140059722',
    },
    {
      photo: '/dummy.jpg',
      name: 'Shambhavi Shinde',
      position: 'Co-head',
      linkedin: 'https://www.linkedin.com/in/shambhavishinde?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      instagram: 'https://www.instagram.com/shmbhvi',
      phone: '7875352787',
    },
  ],
  mediaAndPublicity: [
    {
      photo: '/dummy.jpg',
      name: 'Ronak Dangar',
      position: 'Head',
      linkedin: 'https://www.linkedin.com/in/ronak-dangar?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      instagram: 'https://www.instagram.com/ronak_dangar_04',
      phone: '9328833720',
    },
    {
      photo: '/dummy.jpg',
      name: 'Om Panchal',
      position: 'Co-Head',
      linkedin: 'https://in.linkedin.com/in/om-panchal-136410257',
      instagram: 'https://www.instagram.com/om_panchal_op7',
      phone: '8401988112',
    },
  ],
  events: [
    {
      photo: '/dummy.jpg',
      name: 'Pritish Tripathi',
      position: 'Head',
      linkedin: 'https://www.linkedin.com/in/pritish-tripathi-362006271',
      instagram: 'https://www.instagram.com/tripathipritish',
      phone: '6387445405',
    },
    {
      photo: '/dummy.jpg',
      name: 'Tanish Panchal',
      position: 'Co-head',
      linkedin: 'https://www.linkedin.com/in/tanish2311',
      instagram: 'https://www.instagram.com/ttan_ishh',
      phone: '8866182303',
    },
  ],
  startupTeam: [
    {
      photo: '/dummy.jpg',
      name: 'Gosai Ridhayu',
      position: 'Head',
      linkedin: 'https://www.linkedin.com/in/ridhayu-gosai-4b063a280?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      instagram: 'https://www.instagram.com/ridhayu_gosai_28?igsh=ZWttdnQ1NGxhdHNh',
      phone: '9974188122',
    },
    {
      photo: '/dummy.jpg',
      name: 'Soumyashree Parida',
      position: 'Co-head',
      linkedin: 'https://www.linkedin.com/in/soumyashreeparida785',
      instagram: 'https://www.instagram.com/pvtt_soumya',
      phone: '7738479970',
    },
  ],
  publicRelations: [
    {
      photo: '/dummy.jpg',
      name: 'Nanviya Zala',
      position: 'Head',
      linkedin: 'https://www.linkedin.com/in/nanviya-zala-108324306?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      instagram: 'https://www.instagram.com/notnanviazala',
      phone: '7041817917',
    },
    {
      photo: '/dummy.jpg',
      name: 'Krish Prakashchandra Parmar',
      position: 'Co-Head',
      linkedin: 'https://www.linkedin.com/in/krish-parmar-a30211258?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      instagram: 'https://www.instagram.com/krishh_.003',
      phone: '9725721073',
    },
  ],
};

const renderTeamSection = (sectionTitle, members) => (
  <>
    <h2 className="text-3xl font-bold text-center mt-10 text-neutral-950">{sectionTitle}</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {members.map((member, index) => (
        <TeamMember
          key={index}
          photo={member.photo}
          name={member.name}
          position={member.position}
          linkedin={member.linkedin}
          instagram={member.instagram}
          phone={member.phone}
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
      <Container className="mt-12">
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
