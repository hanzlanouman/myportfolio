import React from 'react';

const Hero = () => {
  return (
    <div className='relative text-white mb-4'>
      <div className='container mx-auto flex flex-col lg:flex-row items-center gap-8 px-0 py-12'>
        {/* Content */}
        <div className='flex flex-1 flex-col items-center lg:items-start text-center lg:text-left'>
          {/* <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-6'>
            WELCOME TO MY WORLD!
          </h1> */}
          <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-3'>
            Hey,
          </h2>
          <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-2 '>
            I'm <span className='text-purpleLighter'>Arfah Ali</span>,
            <span className=' mt-2'>
              {' '}
              your app developer and code storyteller.
            </span>
          </h2>
          <p className='mb-4 text-[1.3rem] text-gray-300'>
            Welcome to Arfah's app wonderland—where your ideas don't just come
            alive, they throw a little app party!
          </p>
          <p className='mb-2 text-[1.5rem]'>
            Who am I<span className='text-purpleLighter text-3xl'> ?</span>
          </p>
          <p className='mb-2 text-[1.2rem]'>
            I'm a software engineering student with a focus on app development.
            <span className='text-[1.2rem] text-gray-300'>
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
          <div className='flex flex-row justify-center lg:justify-start mt-6'>
            <button className='bg-purple hover:bg-purple font-black border-2 border-transparent text-white rounded-full px-10 py-3 text-xl transition duration-300 hover:border-gradient-r-purple-pink-red'>
              WORK WITH ME
            </button>
            <button className='ml-8 bg-transparent hover:bg-purple font-black border-2 border-purple text-gray-400 rounded-full px-10 py-3 text-xl transition duration-300 hover:border-gradient-r-purple-pink-red hover:text-white'>
              Download CV
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
