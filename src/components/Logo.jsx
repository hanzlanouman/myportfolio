import React from 'react';

const Logo = ({ font, text }) => {
  return (
    <a
      href='/'
      className={`text-[2.8em] text-white font-extrabold tracking-wider ${font}`}
    >
      <span className=''></span>
      {text}
      <span className='text-purple font-sans text-[4rem]'>.</span>
    </a>
  );
};

export default Logo;
