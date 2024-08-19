import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const headlineRef = useRef(null);
  const descRefs = useRef([]);

  useEffect(() => {
    // Animation for the headline
    gsap.fromTo(
      headlineRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: headlineRef.current,
          start: 'top 50%', // start the animation when the top of the headline is 80% from the top of the viewport
        },
      }
    );

    // Staggered animation for the descriptions
    gsap.fromTo(
      descRefs.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power4.out',
        stagger: 0.3,
        scrollTrigger: {
          trigger: headlineRef.current,
          start: 'top 50%', // start the animation at the same time as the headline
        },
      }
    );
  }, []);

  return (
    <div id="about" className="flex justify-center items-center h-screen p-8 lg:p-20 text-white">
      <div className="lg:max-w-[1500px] max-w-[400px]">
        <p
          ref={headlineRef}
          className="text-5xl lg:text-8xl mb-[10%] lg:mb-0 about-head"
        >
          I'm Mochamad Hertanto Wicaksono
        </p>
        <div className="lg:flex lg:flex-row lg:mt-6 lg:gap-10">
          <Image
            src="/images/tryna.jpeg"
            width={400}
            height={400}
            alt="chrncle"
            className="rounded-xl mb-[10%] lg:mb-0"
          />
          <div className="lg:flex lg:flex-col lg:gap-10">
            <p
              ref={(el) => (descRefs.current[0] = el)}
              className="lg:text-xl lg:text-start about-desc text-sm"
            >
              an Information Technology student at President University, deeply passionate about coding, particularly in Web Development and AI Development.
            </p>
            <p
              ref={(el) => (descRefs.current[1] = el)}
              className="lg:text-xl lg:text-end about-desc text-sm"
            >
              Committed to continuous learning, I'm dedicated to expanding my knowledge and skills in programming realm to stay at the forefront of innovation. Outside of tech, I express my creativity through 3D and 2D artistry, and as a music producer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
