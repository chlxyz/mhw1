import React from 'react'
import Image from 'next/image';

const About = () => {
  return (
    <div id="about" className='flex justify-center items-center h-screen p-8 lg:p-20 text-white'>
        <div className='lg:max-w-[1500px] max-w-[400px]'>
          <p className='text-5xl lg:text-8xl mb-[10%] lg:mb-0 about-head'>I'm Mochamad Hertanto Wicaksono</p>
          <div className="lg:flex lg:flex-row lg:mt-6 lg:gap-10">
            <Image src="/images/tryna.jpeg" width={400} height={400} alt="chrncle" className='rounded-xl mb-[10%] lg:mb-0'/>
            <div className='lg:flex lg:flex-col lg:gap-10'>
                <p className='lg:text-3xl lg:text-start about-desc text-sm'>an Information Technology student at President University, deeply passionate about coding, particularly in Web Development and AI Development.</p>
                <p className='lg:text-3xl lg:text-end about-desc text-sm'>Committed to continuous learning, I'm dedicated to expanding my knowledge and skills in programming realm to stay at the forefront of innovation. Outside of tech, I express my creativity through 3D and 2D artistry, and as a music producer.</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default About;