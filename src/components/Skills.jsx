// Skills.jsx
import React from 'react';
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaFigma,
} from 'react-icons/fa';
import { SiExpress, SiMongodb } from 'react-icons/si';

const Skills = () => {
  const techIcons = [
    { icon: FaHtml5, color: '#e34f26' },
    { icon: FaCss3Alt, color: '#1572b6' },
    { icon: FaJsSquare, color: '#f7df1e' },
    { icon: FaReact, color: '#61dbfb' },
    { icon: FaNodeJs, color: '#68a063' },
    { icon: SiExpress, color: 'white' }, // Express.js logo is usually represented in black
    { icon: SiMongodb, color: '#4faa41' },
    { icon: FaFigma, color: '#f24e1e' },
  ];

  return (
    <div className='text-white py-10 '>
      <div className='container mx-auto text-center'>
        <h2 className='text-4xl font-bold mb-20'>Skills</h2>
        <div className='flex flex-wrap justify-center gap-10'>
          {techIcons.map((tech, index) => (
            <div
              key={index}
              className='flex flex-col items-center w-36 h-36 md:w-24 md:h-24 lg:w-28 lg:h-28 cursor-pointer'
            >
              <tech.icon
                className='text-5xl md:text-6xl lg:text-7xl transition-colors duration-300 ease-in-out'
                style={{ color: 'rgba(255, 255, 255, 0.8)' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = tech.color)}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)')
                }
              />
              <span className='mt-2 text-sm md:text-base'>{tech.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
