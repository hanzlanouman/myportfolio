import React from 'react';
import { useInView } from 'react-intersection-observer';
import {
  FaHtml5,
  FaJsSquare,
  FaReact,
  FaNode,
  FaJava,
  FaAndroid,
} from 'react-icons/fa';
import { SiMongodb, SiMysql } from 'react-icons/si';

const Skills = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const techIcons = [
    { icon: FaHtml5, label: 'HTML/CSS', color: '#e34c26' },
    { icon: FaJsSquare, label: 'JavaScript', color: '#f7df1e' },
    { icon: FaReact, label: 'React', color: '#61dafb' },
    { icon: FaNode, label: 'Node.js', color: '#68a063' },
    { icon: SiMongodb, label: 'MongoDB', color: '#47A248' },
    { icon: FaJava, label: 'Java', color: '#007396' },
    { icon: SiMysql, label: 'MySQL', color: '#4479A1' },
    { icon: FaAndroid, label: 'Android', color: '#3ddc84' },
  ];

  return (
    <div className='text-white py-10'>
      <div className='container mx-auto text-center'>
        {/* ... */}
        <div className='flex flex-wrap justify-center gap-10 mt-16'>
          {techIcons.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div
                key={index}
                className={`flex flex-col items-center w-36 h-36 md:w-24 md:h-24 lg:w-28 lg:h-28 cursor-pointer transition-opacity duration-700 ${
                  inView ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ transitionDelay: `${index * 75}ms` }}
              >
                <span style={{ color: tech.color }}>
                  <Icon className='text-5xl md:text-6xl lg:text-7xl hover:brightness-125 duration-500 hover:scale-110' />
                </span>
                <span className='mt-2 text-sm md:text-base'>{tech.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
