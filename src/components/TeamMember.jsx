import React from 'react';
import Image from 'next/image';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';

const TeamMember = ({ photo, name, position, linkedin, instagram }) => {
  return (
    <div className="flex justify-center items-center">
      <div className="relative w-56 h-56 bg-black p-3 rounded-full shadow-lg transition-all duration-400 transform group hover:rounded-xl hover:h-60 hover:shadow-2xl">
        <div className="relative w-full h-full transition-transform duration-400 group-hover:-translate-y-10">
          <Image src={photo} alt={name} layout="fill" className="object-cover transition-transform duration-400 rounded-full group-hover:rounded-lg" />
        </div>
        <div className="absolute bottom-0 left-0 w-full p-4 flex flex-col items-center justify-center bg-black text-center text-neutral-950 transition-opacity duration-200 opacity-0 group-hover:opacity-100 group-hover:duration-500 rounded-b-xl">
          <h3 className="text-xl font-semibold text-white">{name}</h3>
          <p className="text-sm font-light text-white">{position}</p>
          <div className="flex mt-2 space-x-3">
            <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
              <FaLinkedin size={24} />
            </a>
            <a href={instagram} target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-white-700">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
