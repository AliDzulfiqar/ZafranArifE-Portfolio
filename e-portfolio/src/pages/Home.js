import React from "react";
import Landing from "../components/Landing"
import About from "../components/About"
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollToAbout) {
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'auto' });
      }
    }
  }, [location.state]);
  return (
    <>
      <Landing/>
      <About/>
    </>
  );
};

export default Home;
