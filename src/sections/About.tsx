/* eslint-disable @next/next/no-img-element */
import React from 'react';
const About=()=>{
    return(
<section id="about" className=" bg-black text-white flex items-center justify-center px-6 py-15">
<div className="max-w-6xl w-full flex flex-col md:flex-row items-center md:items-start gap-10">

  <div className="flex-1 text-left">
  <h2 className="text-4xl font-bold mb-8 text-center mx-auto border-b-4 border-purple-500 pb-2 w-fit">
  About Me
</h2>
    <p className="text-lg md:text-xl mb-6 text-gray-300 leading-relaxed">
      Hi! I&apos;m Subodhini, a Frontend Developer passionate about crafting clean, accessible, and high-performance web interfaces. I have worked on a range of projects from personal portfolios to production-grade applications.
    </p>
    
    <p className="text-lg md:text-xl leading-relaxed text-gray-300">
      I believe in <strong className="text-white">continuous learning</strong>, purposeful design, and the power of simplicity. I love turning complex ideas into elegant user experiences that work across all devices and platforms.
    </p>

    <a
      href="/Subodhini-Resume.pdf"
      download
      className="inline-block mt-8 px-6 py-3 bg-purple-500 text-white font-medium hover:bg-purple-700 transition duration-300"
    >
      Download CV
    </a>
  </div>

  <div className="flex-1 flex justify-center md:justify-end">
    <div className="relative">
      <img
        src="/img.jpeg"
        alt="Subodhini"
        className="w-70 h-70 object-cover grayscale"
      />
    </div>
  </div>

</div>
</section>
    )
}

export default About;