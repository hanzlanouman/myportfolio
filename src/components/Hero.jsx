import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import GlowingButton from '../buttons/GlowButton';
import GlowingButtonOutlined from '../buttons/GlowButtonOutlined';
const Hero = () => {
  // check device type
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 768);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  React.useEffect(() => {
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='relative text-white mb-4 '>
      <div className='container mx-auto flex flex-col lg:flex-row items-center gap-8 px-0 py-12'>
        {/* Content */}
        <div className='flex flex-1 flex-col items-center lg:items-start text-center lg:text-left'>
          {/* <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-6'>
            WELCOME TO MY WORLD!
          </h1> */}
          <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-3'>
            Hey,
          </h2>
          <h2 className='text-3xl md:text-4xl lg:text-6xl font-bold mb-2 '>
            I'm <span className='text-purpleLighter'>Hanzla Nouman</span>,
          </h2>

          <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-2 '>
            A{' '}
            <TypeAnimation
              sequence={[
                'Software Engineer',
                1000,
                'Full Stack Developer',
                1000,
                'Mobile App Developer',
                1000,
                'Web Developer',
                1000,
              ]}
              wrapper='span'
              speed={40} // Adjust the speed to 55 for smoother typing
              deletionSpeed={68}
              className='text-3xl md:text-4xl lg:text-5xl font-bold mb-2 inline text-white'
              repeat={Infinity}
            />
          </h2>
          {isMobile ? (
            <div className='flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0 z-10 mt-10'>
              <div className='w-96 h-96 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[25rem] xl:h-[25rem] 2xl:w-[32rem] 2xl:h-[32rem]  overflow-hidden rounded-full'>
                <img
                  className='object-cover object-center w-full h-full'
                  src='/hanzla.jpg'
                  alt='Social Media Expert'
                />
              </div>
            </div>
          ) : null}
          <p className='mb-4 text-[1.1rem] text-gray-300 mt-3'>
            Welcome to Hanzla's app wonderland—where your ideas don't just come
            alive, they throw a little app party!
          </p>
          <p className='mb-2 text-[1.5rem]'>
            Who am I<span className='text-purpleLighter text-3xl'> ?</span>
          </p>
          <p className='mb-2 text-[1.2rem]'>
            I'm a software engineering student with a focus on app development.
            <span className='text-[1.19rem] text-gray-300'>
              {' '}
              My skills in this domain have empowered me to support numerous
              clients in enhancing their sales and growing their businesses
              through captivating mobile applications. As mobile usage continues
              to rise, having a top-notch app is crucial to connect with your
              target audience. That's why selecting an expert in the field
              matters. I'm committed to delivering outstanding work on time and
              within your budget. If you have any questions or want to discuss a
              project, feel free to reach out. I'm here to assist you and wish
              you an amazing day.
            </span>
          </p>
          {/* <p className='mb-6 text-[1.2rem] text-gray-300'>
            Let's collaborate to turn your vision into a compelling online
            reality.
          </p> */}
          <div className='flex flex-col sm:flex-row md:flex-row lg:flex-row justify-center lg:justify-start mt-6 space-y-4 sm:space-y-0 md:space-y-0 lg:space-y-0 sm:space-x-4 md:space-x-4 lg:space-x-4'>
            <GlowingButton text={'Work With me'} />
            <GlowingButtonOutlined text={'Download CV'} />
          </div>
        </div>

        {!isMobile ? (
          <div className='flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0 z-10'>
            <div className='w-96 h-96 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[25rem] xl:h-[25rem] 2xl:w-[32rem] 2xl:h-[32rem]  overflow-hidden rounded-full'>
              <img
                className='object-cover object-center w-full h-full'
                src='/hanzla.jpg'
                alt='Social Media Expert'
              />
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Hero;
