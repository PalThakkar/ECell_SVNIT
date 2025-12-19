'use client';

import React, { useState } from 'react';
import PageIntro from '@/components/PageIntro';
import Container from '@/components/Container';
import TeamMember from '@/components/TeamMember';
import {Rocket} from "lucide-react";

const team2025Data = {
  chiefExecutive: [
    {
      photo: '/atman.png',
      name: 'Atman Shah',
      position: 'Convener',
      linkedin: 'https://www.linkedin.com/in/atman-shah-0510as/',
      instagram: 'https://www.instagram.com/atmann_04/',
    },
    {
      photo: '/aman.png',
      name: 'Aman Kapoor',
      position: 'Co-Convener',
      linkedin: 'https://www.linkedin.com/in/aman-kapoor-6a6122308/',
      instagram: 'https://www.instagram.com/aman__kap33/',
    },
    {
      photo: '/asmi.png',
      name: 'Asmi Wadhwa',
      position: 'Secretary',
      linkedin: 'https://www.linkedin.com/in/asmiwadhwa/',
      instagram: 'https://www.instagram.com/asmiw.7',
    },
    {
      photo: '/soni.png',
      name: 'Lakshya Soni',
      position: 'Treasurer',
      linkedin: 'https://www.linkedin.com/in/lakshya-soni-6b4099327/',
      instagram: 'https://www.instagram.com/soni_lakshya_/',
    },
  ],
  finance: [
    {
      photo: '/adi.jpg',
      name: 'Aditya Panchal',
      position: 'Head',
      linkedin: 'https://in.linkedin.com/in/panchal-aditya',
      instagram: 'https://www.instagram.com/aditya._.127',
    },
    {
      photo: '/shabbir.png',
      name: 'Shabbir Hussainy',
      position: 'Head',
      linkedin: 'https://www.linkedin.com/in/shabbir-svnit/',
      instagram: 'https://www.instagram.com/shabbir.hussainy',
    },
  ],
  mediaAndDesign: [
    {
      photo: '/kasera.png',
      name: 'Tanish Kasera',
      position: 'Head',
      linkedin: 'https://www.linkedin.com/in/tanish-kasera-301343285/',
      instagram: 'https://www.instagram.com/tanish.xi',
    },
    {
      photo: '/altaf.jpg',
      name: 'Altaf Shams',
      position: 'Head',
      linkedin: 'https://www.linkedin.com/in/shamsaltaf143/',
      instagram: 'https://www.instagram.com/om_panchal_op7',
    },
  ],
  events: [
    {
      photo: '/priti.jpg',
      name: 'Priti Sand',
      position: 'Head',
      linkedin: 'https://www.linkedin.com/in/priti-sand/',
      instagram: 'https://www.instagram.com/priti_3110',
    },
    {
      photo: '/harsh.png',
      name: 'Harsh Solanki',
      position: 'Head',
      linkedin: 'https://www.linkedin.com/in/harshhsolanki/',
      instagram: 'https://www.instagram.com/harshsolanki_1206',
    },
  ],
  contentTeam: [
    {
      photo: '/tanisha.jpg',
      name: 'Tanisha Mishra',
      position: 'Head',
      linkedin: 'https://www.linkedin.com/in/tanisha-mishra-b259722a3/',
      instagram: 'https://www.instagram.com/tanisha.mishraaa',
    },
    {
      photo: '/jash.jpg',
      name: 'Jash Vadani',
      position: 'Head',
      linkedin: 'https://www.linkedin.com/in/jash-vanidani/',
      instagram: 'https://www.instagram.com/jashh_visuals',
    },
  ],
  publicRelations: [
    {
      photo: '/meet.png',
      name: 'Meet Pandya',
      position: 'Head',
      linkedin: 'https://www.linkedin.com/in/meet-pandya-r1705/',
      instagram: 'https://www.instagram.com/meet.pandya17',
    },
    {
      photo: '/devanshi.jpg',
      name: 'Devanshi Rathwa',
      position: 'Head',
      linkedin: 'https://www.linkedin.com/in/devanshirathva/',
      instagram: 'https://www.instagram.com/rdevanshi23',
    },
  ],
};

const team2024Data = {
  executiveBoard: [
    {
      name: "Mihir Gandhi",
      position: "President",
      photo: "/mihir.jpg",
      linkedin: "https://www.linkedin.com/in/mihir--gandhi",
      instagram: 'https://www.instagram.com/mihir__gandhi/',
    },
    {
      name: "Darshan Upadhyay",
      position: "Vice President",
      photo: "/darshan.jpg",
      linkedin: "https://www.linkedin.com/in/thedarshanupadhyay/",
      instagram: 'https://www.instagram.com/upadhyay__darshan/',
    },
    {
      name: "Burhanuddin Lokhandwala",
      position: "Secretary",
      photo: "/secraty.jpeg",
      linkedin: "https://www.linkedin.com/in/burhanuddinlokhandwala04/",
      instagram: 'https://www.instagram.com/burhan____04/',
    }
  ],
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
      name: 'Soumya Parida',
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

const TEAMS_CONFIG = {
  '2025-26': {
    label: '2025-26 Team',
    data: team2025Data,
    sections: [
      { key: 'chiefExecutive', title: 'Chief Executives' },
      { key: 'events', title: 'Events Team' },
      { key: 'contentTeam', title: 'Podcast & Content' },
      { key: 'finance', title: 'Finance & Documentation' },
      { key: 'publicRelations', title: 'Public Relations' },
      { key: 'mediaAndDesign', title: 'Media & Design' },
    ]
  },
  '2024-25': {
    label: '2024-25 Team',
    data: team2024Data,
    sections: [
      { key: 'executiveBoard', title: 'Executive Board' },
      { key: 'chiefExecutive', title: 'Chief Executives' },
      { key: 'technical', title: 'Technical Team' },
      { key: 'mediaAndPublicity', title: 'Media & Publicity' },
      { key: 'events', title: 'Events Team' },
      { key: 'startupTeam', title: 'Startup Team' },
      { key: 'publicRelations', title: 'Public Relations' },
    ]
  }
};

const renderTeamSection = (sectionTitle, members) => (
  <section className="w-full mb-8">
    <div className="relative flex justify-center mb-6">
      <div className="relative inline-block">
        <h2 className="text-3xl md:text-4xl font-bold !text-neutral-900 tracking-tight relative z-10" style={{ color: '#171717' }}>
          {sectionTitle}
        </h2>
        <div className="absolute -bottom-1 left-0 w-full h-3 bg-gradient-to-r from-purple-400/30 via-pink-400/30 to-orange-400/30 -z-0 transform -skew-y-1"></div>
      </div>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5">
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


const TeamPage = () => {
  const [selectedYear, setSelectedYear] = useState('2025-26');
  const [isAnimating, setIsAnimating] = useState(false);

  const handleYearChange = (year) => {
    if (year !== selectedYear) {
      setIsAnimating(true);
      setTimeout(() => {
        setSelectedYear(year);
        setIsAnimating(false);
      }, 300);
    }
  };

  const currentTeamConfig = TEAMS_CONFIG[selectedYear];

  return (
    <div className="light-mode-wrapper bg-white text-neutral-900">
      <PageIntro title="Meet Our Amazing Squad" centered>
        <p className="text-base md:text-lg max-w-3xl mx-auto text-neutral-600 flex items-center justify-center gap-2">
          The passionate minds driving innovation and entrepreneurship at E-Cell SVNIT
          <Rocket size={22} className="text-yellow-500" aria-hidden="true" />
        </p>
    </PageIntro>


      {/* Modern Year Selector */}
      <div className="flex justify-center items-center mt-8 mb-10 px-4 gap-4">
        {Object.entries(TEAMS_CONFIG).map(([year, config]) => (
          <button
            key={year}
            onClick={() => handleYearChange(year)}
            className={`relative px-6 md:px-8 py-2.5 md:py-3 rounded-xl font-bold text-sm md:text-base transition-all duration-300 overflow-hidden group ${
              selectedYear === year
                ? 'bg-white !text-neutral-900 shadow-lg scale-105'
                : 'bg-white/60 !text-neutral-600 hover:bg-white hover:shadow-md hover:scale-102'
            }`}
            style={{
              color: selectedYear === year ? '#171717' : '#525252',
              boxShadow: selectedYear === year 
                ? 'inset 0 2px 4px rgba(255,255,255,0.8), inset 0 -2px 4px rgba(0,0,0,0.1), 0 4px 12px rgba(0,0,0,0.15)'
                : 'inset 0 1px 2px rgba(255,255,255,0.6), inset 0 -1px 2px rgba(0,0,0,0.05), 0 2px 6px rgba(0,0,0,0.1)'
            }}
          >
            {/* Gloss overlay */}
            <span className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent rounded-xl top-0 left-0 h-1/2 pointer-events-none"></span>
            {/* Hover shine effect */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none"></span>
            <span className="relative z-10">{config.label}</span>
          </button>
        ))}
      </div>

      {/* Team Sections with Animation */}
      <div 
        className={`px-4 md:px-6 lg:px-10 max-w-400 mx-auto transition-all duration-300 ${
          isAnimating ? 'opacity-0 transform scale-95' : 'opacity-100 transform scale-100'
        }`}
      >
        {currentTeamConfig.sections.map(({ key, title }) => {
          const members = currentTeamConfig.data[key];
          return members && members.length > 0 ? (
            <div key={key}>
              {renderTeamSection(title, members)}
            </div>
          ) : null;
        })}
      </div>
      {/* Decorative Elements */}
        {/* <div className="fixed top-20 right-10 w-72 h-72 bg-purple-300/20 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="fixed bottom-20 left-10 w-96 h-96 bg-pink-300/20 rounded-full blur-3xl pointer-events-none -z-10" /> */}
    </div>
  );
};


export default TeamPage;
