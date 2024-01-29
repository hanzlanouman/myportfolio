import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

const projects = [
  {
    title: 'Societalize - A Social Media App',
    description:
      'A Social Media App made with React Native & Firebase. It has features like posting, commenting, liking, following, etc.',
    image: '/Societalize.png',
    githubLink: 'https://github.com/hanzlanouman/societalize',
    // liveLink: 'https://project-one-live-link.com',
    tech: [
      'React Native',
      'ContextAPI',
      'Firebase',
      'React Navigation',
      'Expo',
    ],
  },
  {
    title: 'E-Commerce Web App',
    description: ' A fully functional E-Commerce Web App made with MERN Stack.',
    image: '/ecomm.png',
    githubLink: 'https://github.com/hanzlanouman/kidzwear',
    // liveLink: 'https://project-three-live-link.com',
    tech: ['React', 'Tailwind', 'MongoDB', 'Express', 'Node'],
  },
  {
    title: 'CampuShop - The Campus Marketplace',
    description: 'A Campus marketplace made with React Native & Firebase.',
    image: '/campushop.png',
    githubLink: 'https://github.com/hanzlanouman/campushop',

    tech: ['React Native', 'Firebase', 'React Navigation', 'Expo'],
  },
];

const Projects = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <div className='bg-bgDark text-white py-16'>
      <div className='container mx-auto px-6'>
        <div ref={ref}>
          <h2 className='text-4xl font-bold text-center mb-16'>
            Projects
            <div
              className={`h-1 bg-white transition-all duration-700 ${
                inView ? 'w-[rem] md:w-[5em]' : 'w-0'
              } mx-auto mt-2`}
              style={{ transitionDelay: '300ms' }}
            />
          </h2>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6'>
          {projects.map((project, index) => (
            <div
              key={index}
              className='bg-[#1a1a1b] rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform transition duration-900 hover:scale-[1.06] h-[530px] flex flex-col
                
              '
            >
              <img
                src={project.image}
                alt={project.title}
                className='h-64 object-contain bg-[#eff9f9] w-full'
              />
              <div className='p-4 flex flex-col flex-grow'>
                <h3 className='text-2xl font-semibold mb-4'>{project.title}</h3>
                <p className='flex-grow'>
                  {project.description.length > 120
                    ? `${project.description.substring(0, 117)}...`
                    : project.description}
                </p>
              </div>
              <div className='p-4'>
                <div className='flex flex-wrap gap-2 mb-4'>
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className='bg-purple px-3 py-1 rounded-full text-sm'
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className='flex justify-between'>
                  <a
                    href={project.githubLink}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex items-center text-purple-500 hover:text-purple-300 transition-colors duration-300  px-4 py-1 hover:bg-gray-500 rounded-full'
                  >
                    <FaGithub className='mr-2' />
                    GitHub
                  </a>
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='flex items-center text-purple-500 hover:text-purple-300 transition-colors duration-300 px-4 py-1 hover:bg-gray-500 rounded-full'
                    >
                      <FaExternalLinkAlt className='mr-2' />
                      Live
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
