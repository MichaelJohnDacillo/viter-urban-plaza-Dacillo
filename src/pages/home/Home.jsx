import React from 'react'
import Navigation from '../../partials/Navigation';
import Hero from './hero/Hero';
import Stores from './stores/Stores';
import Services from './services/Services';
import Contact from './contact/Contact';
import Footer from '../../partials/Footer';

const Home = () => {
  return (
    <>
      <div className="font-sans bg-gray-50">
        <Navigation/>
        <Hero/>
        <Stores/>
        <Services/>
        <Contact/>
        <Footer/>  
      </div>  
    </>
  );
};

export default Home;