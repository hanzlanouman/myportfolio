import React, { useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import Logo from './Logo';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className='flex justify-between items-center px-4 sm:px-6 lg:px-8  relative'>
      <Logo font='font-logoArfah' text='Arfah' />
      <div className='md:hidden'>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className='outline-none focus:outline-none'
        >
          {isMenuOpen ? (
            <XIcon className='h-8 w-8 text-white transition duration-200 ease-in-out transform hover:rotate-180' />
          ) : (
            <MenuIcon className='h-8 w-8 text-white transition duration-200 ease-in-out transform hover:rotate-180' />
          )}
        </button>
      </div>
      <div
        className={`${
          isMenuOpen ? 'flex' : 'hidden'
        } flex-col md:flex-row md:flex items-center absolute md:relative  w-full md:w-auto transition-all duration-300 ease-in ${
          isMenuOpen ? 'top-16 opacity-100' : 'top-[-490px] opacity-0'
        } md:opacity-100 md:top-0`}
      >
        <a
          href='/academy'
          className='text-white px-5 py-2 text-[1.15em] hover:text-gray-300 hover:shadow-xs hover:-translate-y-[0.09em]'
        >
          Projects
        </a>
        <a
          href='/work-with-me'
          className='text-white px-5 py-2 text-[1.15em] hover:text-gray-300 hover:shadow-xs hover:-translate-y-[0.09em]'
        >
          Certifications
        </a>
        <a
          href='/blog'
          className='text-white px-5 py-2 text-[1.15em] pr-10 hover:text-gray-300 hover:shadow-xs hover:-translate-y-[0.09em]'
        >
          Blog
        </a>
        <button className='bg-purple text-white font-bold px-8 py-2 rounded-full transition duration-300 ease-in-out transform hover:bg-purpleLighter hover:text-gray-300 hover:shadow-xl hover:-translate-y-1'>
          Get In Touch
        </button>
        {/* Navigation Links */}
      </div>
    </nav>
  );
};

export default Navbar;
