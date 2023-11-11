// Home.js
import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Skills from './Skills';
import Footer from './Footer';

const Home = () => {
  return (
    <div className='text-textLight'>
      <Navbar />
      <Hero />
      <Skills />
      <Footer />
    </div>
  );
};

export default Home;
