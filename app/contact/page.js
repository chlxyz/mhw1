import React, { useEffect, useState } from 'react';
import BottomNavbar from '../navbar/page';

const Contact = () => {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const updateYear = () => {
      setYear(new Date().getFullYear());
    };

    updateYear();
    const interval = setInterval(updateYear, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="contact" className="flex lg:h-screen p-8 lg:p-8 flex-col justify-between bg-[url('/images/wavey.gif')] bg-no-repeat bg-cover">
      <BottomNavbar />
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-start space-y-4 lg:space-y-0">
        <h1 className="text-white text-2xl lg:text-8xl contact-title">CONTACT</h1>
        <div className="flex flex-col items-start lg:items-end space-y-2">
          <a href="https://www.linkedin.com/in/mochamad-hertanto-wicaksono/" rel="noopener noreferrer" target="__blank" className="text-white text-xl lg:text-2xl mb-2">LinkedIn</a>
          <a href="mailto:mochamadhertanto76@gmail.com" className="text-white text-xl lg:text-2xl">mochamadhertanto76@gmail.com</a>
        </div>
      </div>

      <div className="flex flex-row mb-[20%] lg:mb-0 lg:flex-row justify-between items-center lg:items-end space-y-4 lg:space-y-0">
        <h1 className="text-white text-5xl lg:text-8xl copyrite">&copy; {year}</h1>
        <div className="flex flex-col lg:flex-row items-center space-y-2 lg:space-y-0 lg:space-x-4">
          <a href="https://twitter.com/chrnclee" rel="noopener noreferrer" target="__blank" className="text-white text-xl lg:text-2xl">Twitter</a>
          <a href="https://www.instagram.com/chrncl.e" rel="noopener noreferrer" target="__blank" className="text-white text-xl lg:text-2xl">Instagram</a>
          <a href="https://github.com/chlxyz" rel="noopener noreferrer" target="__blank" className="text-white text-xl lg:text-2xl">GitHub</a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
