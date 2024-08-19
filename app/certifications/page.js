"use client"
import React, { useEffect } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import Link from 'next/link';

const Certification = () => {
  useEffect(() => {
    const certificates = document.querySelectorAll(".certificate-item");

    certificates.forEach((item) => {
      const image = document.querySelector(`#image-${item.dataset.id}`);

      item.addEventListener("mouseenter", () => {
        gsap.to(image, {
          autoAlpha: 1,
          scale: 1,
          duration: 0.5,
          ease: "power2.out",
        });
      });

      item.addEventListener("mouseleave", () => {
        gsap.to(image, {
          autoAlpha: 0,
          scale: 0.8,
          duration: 0.5,
          ease: "power2.out",
        });
      });
    });
  }, []);

  useEffect(() => {
    gsap.fromTo(
      ".certificates-section-heading",
      { scale: 1, opacity: 1 },
      {
        scale: 10,
        opacity: 0.5,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".certificates-section-heading",
          start: "top 50%",
          end: "top 40%",
          scrub: true,
        }
      }
    );

  }, []);

  const certificates = [
    {
      id: 1,
      title: "Generative AI for Information System (Thematic Academy)",
      description:
        "Completed a 7-hour training on Generative AI for Information Systems as part of the Digital Talent Scholarship 2024, organized by Puslitbang SDP3I and Thematic Academy Digital Talent Scholarship 2024 under KOMINFO.",
      Credential: "1948940850-77/TA/BLSDM.Kominfo/2024",
      image: "/images/DigitalentCertificate.png",
    },
    {
      id: 2,
      title: "TOEFL Certificate",
      description:
        "Achieved a TOEFL score of 660, with the following section scores: Listening Comprehension - 68, Structure and Written Expression - 67, Reading Comprehension - 63. Certificate issued by Brighten English Pare Kediri.",
      Credential: "https://www.e-ujian.com/cert/MSmpJv.166715",
      image: "/images/toefl.png",
    },
    {
      id: 3,
      title: "SQL (Intermediate) Certificate",
      description:
        "Successfully cleared the SQL (Intermediate) assessment on HackerRank, demonstrating intermediate-level skills in SQL.",
      Credential: "https://www.hackerrank.com/certificates/12e473cc9e65",
      image: "/images/hck2.png",
    },
    {
      id: 4,
      title: "SQL (Basic) Certificate",
      description:
        "Successfully cleared the SQL (Basic) assessment on HackerRank, demonstrating foundational skills in SQL.",
      Credential: "https://www.hackerrank.com/certificates/73672d66530c",
      image: "/images/hck1.png",
    },
    {
      id: 6,
      title: "Artificial Intelligence A-Z 2024: Build 7 AI + LLM & ChatGPT",
      description:
        "Completed a comprehensive course on Artificial Intelligence, covering the development of 7 AI projects, including working with Large Language Models (LLM) and ChatGPT. Course instructed by Hadelin de Ponteves, Kirill Eremenko, SuperDataScience Team, Luka Anicin, and the Ligency Team.",
      Credential:
        "https://www.udemy.com/certificate/UC-c60d468c-420f-4d9e-8e6a-a8c7e5cf9fb5/",
      image: "/images/ud1.png",
    },
    {
      id: 7,
      title: "The Complete 2024 Web Development Bootcamp",
      description:
        "Completed a web development training under the instruction of Dr. Angela Yu, covering full-stack web development as part of the 2024 Web Development Bootcamp on Udemy.",
      Credential:
        "https://www.udemy.com/certificate/UC-813a9c1c-9b61-4d14-9846-5d0488a71432/",
      image: "/images/ud2.png",
    },
  ];

  return (
    <div id="certification" className="bg-black text-white p-8 relative">
      <div className="flex flex-col justify-center items-center mb-8 overflow-hidden">
        <h1 className="lg:text-8xl certificates-section-heading">
          Certification
        </h1>
      </div>

      {certificates.map((certificate) => (
        <div
          key={certificate.id}
          className="certificate-item p-8 mx-auto max-w-4xl w-full lg:text-start text-justify cursor-pointer relative border-y-2"
          data-id={certificate.id}
        >
          <Image
            src={certificate.image}
            width={200}
            height={200}
            alt={certificate.title}
            id={`image-${certificate.id}`}
            className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full opacity-0 pointer-events-none z-10"
            style={{ scale: 0.8 }}
          />
          
          <Link href={certificate.Credential} rel="noopener norefferer" target="_blank"><h1 className="lg:text-5xl text-2xl font-bold mb-2 certi-title">{certificate.title}</h1></Link>
          <p className='lg:text-sm text-sm certi-desc'>{certificate.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Certification;
