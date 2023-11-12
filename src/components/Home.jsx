import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Skills from './Skills';
import Footer from './Footer';
import Socials from './Socials';
import Projects from './Projects';
import Certifications from './Certificates';
import Testimonials from './Testimonials';
import Services from './Services';

const Home = () => {
  return (
    <div className='text-textLight px-10'>
      <Navbar />
      <Hero />
      <Skills />
      {/* <Services /> */}
      <Projects />
      <Testimonials />
      <Certifications />
      <Socials />
      <Footer />
    </div>
  );
};

export default Home;
