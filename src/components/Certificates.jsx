import React from 'react';
import { FaCertificate, FaExternalLinkAlt, FaMedal } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

const certifications = [
  {
    title: 'Certified React Native Developer',
    organization: 'Meta',
    image: '/react-native.png',
    link: 'https://coursera.org/verify/DLWM5VUFDFET',
  },
  {
    title: 'Meta Front-End Developer Certificate',
    organization: 'Meta',
    image: '/meta-front.png',
    link: 'https://coursera.org/verify/VB6Z6WUQEYYU',
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
        {/* ... Title Section ... */}
        <div ref={ref} className='text-center'>
          <h2 className='text-4xl font-bold mb-6'>
            Certifications
            <div
              className={`h-1 bg-white transition-all duration-700 ${
                inView ? 'w-[10em] md:w-[8em]' : 'w-0'
              } mx-auto mt-2 mb-16`}
              style={{ transitionDelay: '300ms' }}
            />
          </h2>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {certifications.map((cert, index) => (
            <div
              key={index}
              className='bg-[#1e1e1e] rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform transition duration-900 hover:scale-[1.06] h-[490px] flex flex-col cursor-pointer'
              // onClick={() => window.open(cert.link, '_blank')}
            >
              <img
                src={cert.image}
                alt={cert.title}
                className='h-64 object-contain bg-[#EFEFEF] w-full'
              />
              <div className='p-4 flex flex-col justify-between flex-grow'>
                <h3 className='text-2xl font-semibold mb-2'>{cert.title}</h3>
                <p>{cert.organization}</p>
                <div className='flex flex-col sm:flex-row  items-center mt-2'>
                  <a
                    href={cert.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-flex items-center justify-center hover:bg-purpleLighter bg-purple transition-colors duration-300 rounded-full text-white py-2 px-4 mb-2 sm:mb-0 sm:mr-2 text-lg sm:text-sm'
                  >
                    View Certificate{'   '}{' '}
                    <FaExternalLinkAlt className='ml-2' />
                  </a>
                  {/* Replace href with actual Credly link if available */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications;
