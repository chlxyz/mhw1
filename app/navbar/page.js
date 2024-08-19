import React from 'react';
import { AiOutlineHome, AiOutlineUser, AiOutlineMail, AiOutlineInstagram } from 'react-icons/ai';

const BottomNavbar = () => {
  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-11/12 max-w-lg bg-white bg-opacity-20 text-white rounded-xl shadow-lg nav">
      <div className="flex justify-around items-center h-14">
        <a href="#main" className="flex flex-col items-center">
          <span className="lg:text-s text-xs">Home</span>
        </a>
        <a href="#about" className="flex flex-col items-center">
          <span className="lg:text-s text-xs">About Me</span>
        </a>
        <a href="#projects" className="flex flex-col items-center">
          <span className="lg:text-s text-xs">Projects</span>
        </a>
        <a href="#certification" className="flex flex-col items-center">
          <span className="lg:text-s text-xs">Certification</span>
        </a>
        <a href="#contact" className="flex flex-col items-center">
          <span className="lg:text-s text-xs">Contact</span>
        </a>
      </div>
    </div>
  );
};

export default BottomNavbar;
