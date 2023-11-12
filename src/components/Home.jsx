import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Skills from './Skills';
import Footer from './Footer';
import Socials from './Socials';
import Projects from './Projects';
import Certifications from './Certificates';

const Home = () => {
  return (
    <div className='text-textLight px-10'>
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Certifications />
      <Socials />
      <Footer />
    </div>
  );
};

export default Home;
