import React from 'react';

const Hero = () => {
  return (
    <div className='relative text-white mb-4'>
      <div className='container mx-auto flex flex-col lg:flex-row items-center gap-8 px-4 py-16'>
        {/* Content */}
        <div className='flex flex-1 flex-col items-center lg:items-start text-center lg:text-left'>
          <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-6'>
            Elevate Your Platform with Cutting-edge{' '}
            <span className=''>Web Development</span>
          </h2>
          <p className='mb-4 text-[1.2rem] text-gray-300'>
            Innovative and efficient web solutions are pivotal for business
            growth. As a seasoned Web Developer, I craft immersive experiences
            that captivate and engage.
          </p>
          <p className='mb-4 text-[1.2rem]'>
            My approach integrates responsive design, optimized performance, and
            user-centric functionality to empower your brand's digital identity.
            Partner with me to create a web presence that not only looks
            exceptional but also drives success.
          </p>
          <p className='mb-6 text-[1.2rem] text-gray-300'>
            Let's collaborate to turn your vision into a compelling online
            reality.
          </p>
          <div className='flex justify-center lg:justify-start mt-6'>
            <button className='bg-black hover:bg-purple font-black border-2 border-transparent text-white rounded-full px-10 py-3 text-xl transition duration-300 hover:border-gradient-r-purple-pink-red'>
              WORK WITH ME
            </button>
          </div>
        </div>

        <div className='flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0 z-10'>
          <div className='w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[28rem] xl:h-[28rem] 2xl:w-[32rem] 2xl:h-[32rem] rounded-full overflow-hidden border-4 border-white'>
            <img
              className='object-cover object-center w-full h-full'
              src='/cuteket.jpg'
              alt='Social Media Expert'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
