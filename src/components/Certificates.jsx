import React from 'react';
import { useInView } from 'react-intersection-observer';

const certifications = [
  {
    title: 'Certified React Developer',
    organization: 'Meta',
    image: '/react.png',
    link: 'https://coursera.org/verify/VB6Z6WUQEYYU',
  },
  {
    title: 'Certified React Native Developer',
    organization: 'Meta',
    image: '/react-native.png',
    link: 'https://coursera.org/verify/DLWM5VUFDFET',
  },
  {
    title: 'Certified UI/UX Designer',
    organization: 'Google',
    image: 'UI.png',
    link: 'https://coursera.org/verify/MAZWVPPMXEEA',
  },
];

const Certifications = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <div className='bg-bgDark text-white py-10 mb-20 mt-20'>
      <div className='container mx-auto px-4'>
        <div ref={ref}>
          <h2 className='text-4xl font-bold text-center mb-6'>
            Certifications
            <div
              className={`h-1 bg-white transition-all duration-700 ${
                inView ? 'w-[10em] md:w-[8em]' : 'w-0'
              } mx-auto mt-2 mb-16`}
              style={{ transitionDelay: '300ms' }}
            />
          </h2>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
          {certifications.map((cert, index) => (
            <a
              href={cert.link}
              target='_blank'
              rel='noopener noreferrer'
              className='text-purple-500 hover:text-purple-300 transition-colors duration-300'
            >
              <div
                key={index}
                className='bg-[#1e1e1e] rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform transition duration-500 hover:scale-105'
              >
                <img
                  src={cert.image}
                  alt={cert.title}
                  className='w-full h-64 object-contain bg-white'
                />
                <div className='p-4'>
                  <h3 className='text-2xl font-semibold mb-2'>{cert.title}</h3>
                  <p className='mb-5'>{cert.organization}</p>
                  <a
                    href={cert.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='hover:bg-purpleLighter bg-purple transition-colors duration-300 rounded-full text-white p-3'
                  >
                    View Certificate
                  </a>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications;
