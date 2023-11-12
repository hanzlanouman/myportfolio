import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

const projects = [
  {
    title: 'Dev Portfolio',
    description:
      'A Developer Portfolio website made in React. Fully customizable and dynamic.',
    image: 'https://source.unsplash.com/random/900x900?tech',
    githubLink: 'https://github.com/yourusername/project-one',
    liveLink: 'https://project-one-live-link.com',
    tech: ['React', 'TailwindCSS', 'Firebase'],
  },
  {
    title: 'Caring - Cab Share App',
    description: 'A Cab Sharing web app made using Django for VT Students.',
    image: 'https://source.unsplash.com/random/900x900?tech',
    githubLink: 'https://github.com/yourusername/project-two',
    liveLink: 'https://project-two-live-link.com',
    tech: ['Django', 'Bootstrap', 'PostgreSQL'],
  },
  {
    title: 'Quiet Hours App',
    description:
      'An Android app that automatically silences your phone during class hours.',
    image: 'https://source.unsplash.com/random/900x900?tech',
    githubLink: 'https://github.com/yourusername/project-three',
    liveLink: 'https://project-three-live-link.com',
    tech: ['Java', 'Android SDK', 'SQLite'],
  },
];

const Projects = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className='bg-[#121212] text-white py-12'>
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
            <a
              href={project.githubLink}
              target='_blank'
              rel='noopener noreferrer'
            >
              <div
                key={index}
                className='bg-[#1a1a1b] rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform transition duration-500 hover:scale-105'
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className='w-full h-64 object-cover'
                />
                <div className='p-4'>
                  <h3 className='text-2xl font-semibold mb-4'>
                    {project.title}
                  </h3>

                  <p className='mb-8'>{project.description}</p>
                  <p className='text-gray-300 py-3'>Tech Used</p>

                  <div className='flex flex-wrap gap-2 mb-4'>
                    {project.tech.map((tech, index) => (
                      <span
                        key={index}
                        className='bg-purple px-3 py-1 rounded-full text-sm '
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
                    <a
                      href={project.liveLink}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='flex items-center text-purple-500 hover:text-purple-300 transition-colors duration-300 px-2 hover:bg-gray-500 rounded'
                    >
                      <FaExternalLinkAlt className='mr-2' />
                      Live
                    </a>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
