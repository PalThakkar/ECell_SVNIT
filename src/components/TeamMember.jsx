import React from 'react';
import Image from 'next/image';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';

const TeamMember = ({ photo, name, position, linkedin, instagram }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 transition-transform transform hover:scale-105">
      <div className="relative w-full h-48">
        <Image src={photo} alt={name} layout="fill" className="object-cover image-border rounded-t-lg" />
      </div>
      <div className="p-4">
        <h3 className="mt-4 text-xl font-semibold text-center text-neutral-950">{name}</h3>
        <p className="text-center text-gray-500">{position}</p>
        <div className="mt-4 flex justify-center space-x-4">
          <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
            <FaLinkedin size={24} />
          </a>
          <a href={instagram} target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-700">
            <FaInstagram size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
