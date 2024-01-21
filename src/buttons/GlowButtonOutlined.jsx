import React from 'react';
import './GlowButtonOutlined.css'; // Importing the custom CSS

const GlowingButtonOutlined = (props) => {
  const { text } = props;
  return (
    //on click download resume from public folder cuteket.jpg

    <a
      href='/cv.pdf'
      className='relative z-10 px-12 py-3 text-xl text-white  rounded-full hover:opacity-100 focus:bg-transparent glowingout-btn'
    >
      {text}
      {/* Download svg with arrow down on disk */}
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-6 w-6 inline ml-2 '
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          d='M9 5l7 7-7 7'
        />
      </svg>
    </a>
  );
};

export default GlowingButtonOutlined;
