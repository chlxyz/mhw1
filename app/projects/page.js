import React, { useEffect } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  useEffect(() => {
    gsap.fromTo(
      ".web-dev .proj-title",
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: "power2.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: ".web-dev",
          start: "top 100%",
          end: "bottom top",
          scrub: true,
        }
      }
    );

    gsap.fromTo(
      ".ai-dev .proj-title",
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: "power2.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: ".ai-dev",
          start: "top 100%",
          end: "bottom top",
          scrub: true,
        }
      }
    );

    gsap.fromTo(
      ".projects-section-heading",
      { scale: 1, opacity: 1 },
      {
        scale: 10,
        opacity: 0.5,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".projects-section-heading",
          start: "top 50%",
          end: "top 40%",
          scrub: true,
        }
      }
    );

  }, []);

  const webDevProjects = [
    {id: 1, title: "MYSkill", description: "MYSkill is an online exam creation and participation. It uses an AI for predicting user performance based on the time spent to answer each question in an exam.", image: "/images/myskilla.png"},
    {id: 2, title: "STO2", description: "STO2 is a CRUD website built using Laravel framework, STO2 is a user-friendly platform crafted to transform users shopping escapades.", image: "/images/sto2.png"},
    {id: 3, title: "CHRNCLE", description: "CHRNCLE is a personal art gallery, built using Next.js framework, showcasing various artworks in a 3D realm.", image: "/images/chrnclea.png"},
  ];

  const aiDevProjects = [
    {id: 1, title: "Self-Advice Medical Analysis", description: "Self-Advice Medical Analysis is a website, providing personalized health advice using a Machine Learning model, a Deep Learning model, and an LLM.", image: "/images/medicc.png"},
    {id: 2, title: "Mental Health Chatbot", description: "Mental Health Chatbot is an NLP project where 2 models were trained using RNN & RNN + LSTM. The chatbot aimed to help the user with several mental health advice", image: "/images/chahaha.png"},
    {id: 3, title: "Handwritten Recognition", description: "Handwritten Recognition is a deep learning models ,trained and developed based on CNN architecture. Each model able to recognize handwritten user input, starting from digit to lowercase and uppercase characters accurately.", image: "/images/darudasan.png"},
  ];

  return (
    <div id="projects" className="flex flex-col gap-5 p-8 lg:p-32 overflow-hidden">
      <div className='flex flex-col justify-center items-center h-20'>
        <h1 className='lg:text-8xl projects-section-heading text-white'>Projects</h1>
      </div>
      <div className='proj-sec web-dev flex flex-col gap-10'>
        <h1 className='lg:text-6xl text-4xl sticky top-0 text-white z-10 project-section-title p-4'>
          Web Development
        </h1>
        {webDevProjects.map((project) => (
          <div key={project.id} className='proj-title lg:flex lg:flex-row lg:gap-10 flex flex-col items-center lg:bg-[#9e9e9e] lg:text-white text-white rounded-xl'>
            <Image src={project.image} width={200} height={200} alt={project.title} className='rounded-xl lg:mb-0'/>
            <div className='lg:flex lg:flex-col lg:gap-10 lg:items-start flex flex-row gap-5 items-center text-justify p-4'>
              <h1 className='lg:text-5xl text-bold project-title'>{project.title}</h1>
              <p className='lg:text-xl text-sm'>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className='proj-sec ai-dev flex flex-col gap-10'>
        <h1 className='lg:text-6xl text-4xl sticky top-0 text-white z-10 project-section-title p-4'>
          AI Development
        </h1>
        {aiDevProjects.map((project) => (
          <div key={project.id} className='proj-title lg:flex lg:flex-row lg:gap-10 flex flex-col items-center lg:bg-[#9e9e9e] lg:text-white text-white rounded-xl'>
            <Image src={project.image} width={200} height={200} alt={project.title} className='rounded-xl lg:mb-0'/>
            <div className='lg:flex lg:flex-col lg:gap-10 lg:items-start flex flex-row gap-5 items-center text-justify p-4'>
              <h1 className='lg:text-5xl text-bold project-title'>{project.title}</h1>
              <p className='lg:text-xl text-sm'>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
