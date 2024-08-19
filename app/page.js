"use client"
import React from 'react'
import About from './about/page';
import Main from './main/page';
import Projects from './projects/page';
import Contact from './contact/page';
import Certification from './certifications/page';
import Lenis from 'lenis';
import { useEffect, useRef } from 'react';

const Home = () => {
  useEffect(() => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }, []);

  return (
    <div>
      <Main />
      <About/>
      <Projects />
      <Certification />
      <Contact />
    </div>
  )
}

export default Home;