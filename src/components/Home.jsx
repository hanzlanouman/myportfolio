// Home.js
import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Skills from './Skills';

const Home = () => {
  return (
    <div className='text-textLight'>
      <Navbar />
      <Hero />
      <Skills />
    </div>
  );
};

export default Home;
