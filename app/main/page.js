"use client";
import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Main = () => {
  const [time, setTime] = useState('');
  const mhwRef = useRef(null); 

  useEffect(() => {
    const updateTime = () => {
      setTime(new Date().toLocaleTimeString());
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    gsap.fromTo(mhwRef.current, 
      { opacity: 0, scale: 0.5, y: -50 },
      { opacity: 1, scale: 1, y: 0, duration: 2, ease: "power3.out" }
    );
  }, []);

  return (
    <div id="main" className="flex justify-center items-center h-screen px-20 py-20 ">
      <div 
        ref={mhwRef} // Attach the ref to the MHW text
        className="text-8xl lg:text-[25rem] title-hero bg-[url('/images/wavey.gif')] rounded-3xl text-white p-8"
      >
        MHW
      </div>
      <div className='absolute bottom-[100px] lg:bottom-[20px] right-[20px] text-white'>
          {time}
      </div>
    </div>
  );
}

export default Main;
