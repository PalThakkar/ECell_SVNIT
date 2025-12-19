'use client';

import React, { useState } from 'react';
import PageIntro from '@/components/PageIntro';
import Container from '@/components/Container';
import TeamMember from '@/components/TeamMember';
import { Code2, Sparkles } from 'lucide-react';
import { Avatar } from "@heroui/avatar";

const devTeam2024Data = {
  lead: {
    photo: '/srjay.jpg',
    name: 'S R Jay Kikani',
    position: 'Technical Head',
    linkedin: 'https://www.linkedin.com/in/srjaykikani',
    instagram: 'https://www.instagram.com/_srjay',
  },
  coLead: {
    photo: '/shambhavi.jpg',
    name: 'Shambhavi Shinde',
    position: 'Technical Co-Head',
    linkedin: 'https://www.linkedin.com/in/shambhavishinde',
    instagram: 'https://www.instagram.com/shmbhvi',
  },
  contributors: [
    { name: 'Aryan Sawant', admissionNo: 'U23AI042' },
    { name: 'Aditya Panchal', admissionNo: 'U23CS048' },
  ],
};

const devTeam2025Data = {
  lead: {
    photo: '/adi.jpg',
    name: 'Aditya Panchal',
    position: 'Technical Head',
    linkedin: 'https://www.linkedin.com/in/srjaykikani',
    instagram: 'https://www.instagram.com/_srjay',
  },
  contributors: [
    { name: 'Ayushman Singh', admissionNo: 'U24CS103' },
    { name: 'Pal Thakkar', admissionNo: 'U24CS072' },
    { name: 'Priyansh T', admissionNo: 'U24AI048' },
    { name: 'Jeny Bhatt', admissionNo: 'U24EC084' },
  ],
};

const TEAMS_CONFIG = {
  '2025-26': {
    label: '2025-26 Team',
    data: devTeam2025Data,
  },
  '2024-25': {
    label: '2024-25 Team',
    data: devTeam2024Data,
  },
};

const getInitials = (name) => {
  const parts = name.split(' ');
  if (parts.length >= 2) {
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }
  return name.substring(0, 2).toUpperCase();
};

const getAvatarColor = (name) => {
  const colors = [
    'bg-gradient-to-br from-purple-500 to-pink-500',
    'bg-gradient-to-br from-blue-500 to-cyan-500',
    'bg-gradient-to-br from-green-500 to-emerald-500',
    'bg-gradient-to-br from-orange-500 to-yellow-500',
    'bg-gradient-to-br from-red-500 to-pink-500',
    'bg-gradient-to-br from-indigo-500 to-purple-500',
  ];
  const index = name.charCodeAt(0) % colors.length;
  return colors[index];
};

const DevTeamPage = () => {
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

  const currentTeamData = TEAMS_CONFIG[selectedYear].data;

  return (
    <div className="light-mode-wrapper bg-white text-neutral-900 min-h-screen">
      <PageIntro title="Startup Mindset. Developer Skillset." centered>
        <p className="text-base md:text-lg max-w-3xl mx-auto !text-neutral-600 flex items-center justify-center gap-4" style={{ color: '#525252' }}>
          Meet the talented developers and designers who crafted this digital experience
          <Code2 size={22} className="text-purple-500" aria-hidden="true" />
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

      {/* Dev Team Content */}
      <Container className="mt-12">
        <div 
          className={`transition-all duration-300 ${
            isAnimating ? 'opacity-0 transform scale-95' : 'opacity-100 transform scale-100'
          }`}
        >
          {/* Development Team Section */}
          <section className="mb-12">
            <div className="relative flex justify-center mb-12">
              <div className="relative inline-block">
                <h2 className="text-3xl md:text-4xl font-bold !text-neutral-900 tracking-tight relative z-10 flex items-center gap-3" style={{ color: '#171717' }}>
                  <Sparkles className="text-purple-500" size={32} />
                  Development Team
                </h2>
                <div className="absolute -bottom-1 left-0 w-full h-3 bg-gradient-to-r from-purple-400/30 via-blue-400/30 to-cyan-400/30 -z-0 transform -skew-y-1"></div>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-16 lg:gap-30 items-center justify-center">
              {/* Left side - Profile Cards */}
              <div className="flex gap-6 flex-wrap justify-center">
                <TeamMember
                  photo={currentTeamData.lead.photo}
                  name={currentTeamData.lead.name}
                  position={currentTeamData.lead.position}
                  linkedin={currentTeamData.lead.linkedin}
                  instagram={currentTeamData.lead.instagram}
                />
                {currentTeamData.coLead && (
                  <TeamMember
                    photo={currentTeamData.coLead.photo}
                    name={currentTeamData.coLead.name}
                    position={currentTeamData.coLead.position}
                    linkedin={currentTeamData.coLead.linkedin}
                    instagram={currentTeamData.coLead.instagram}
                  />
                )}
              </div>

              {/* Right side - Contributors (Minimal Bullet Points) */}
              <div className="flex flex-col items-center lg:items-start lg:pl-8">
                <h3 className="text-lg font-bold !text-neutral-900 mb-4 flex items-center gap-2" style={{ color: '#171717' }}>
                  <Code2 className="text-purple-500" size={20} />
                  Contributors
                </h3>
                <ul className="space-y-3">
                  {currentTeamData.contributors.map((contributor, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <Avatar 
                        name={contributor.name}
                        className="flex-shrink-0"
                        size="sm"
                        color="secondary"
                      />
                      <div>
                        <p className="text-sm font-semibold !text-neutral-900" style={{ color: '#171717' }}>
                          {contributor.name}
                        </p>
                        <p className="text-xs !text-neutral-500 font-mono" style={{ color: '#737373' }}>
                          {contributor.admissionNo}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </div>
      </Container>

      {/* Decorative Elements */}
      <div className="fixed top-20 right-10 w-72 h-72 bg-purple-300/10 rounded-full blur-3xl pointer-events-none -z-10" />
      {/* <div className="fixed bottom-20 left-10 w-96 h-96 bg-cyan-300/10 rounded-full blur-3xl pointer-events-none -z-10" /> */}
    </div>
  );
};

export default DevTeamPage;
