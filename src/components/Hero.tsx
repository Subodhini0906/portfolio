import { motion } from 'framer-motion';
import ScrollDownArrow from './ScrollDownArrow';
import { useEffect, useState } from 'react';
import * as math from 'mathjs';
const devQuotes=[
  {
    main:"CRAFTING DIGITAL",
    sub:"EXPERIENCES",
    tagline: "Where code meets creativity"
  },
  {
    main:"BUILDING THE",
    sub:"FUTURE",
    tagline:"One pixel at a time"
  },
  {
    main:"CODE IS",
    sub:"POETRY",
    tagline:"Written in logic, felt in experience"
  },
  {
    main:"TURNING IDEAS",
    sub:"INTO REALITY",
    tagline:"Through the power of code"
  },
  {
    main:"CREATING DIGITAL",
    sub:"MAGIC",
    tagline:"Where imagination becomes interaction"
  }
]
export default function HomePage() {
  const[currentQuote,setCurrentQuote]=useState(0);   //track which code displayed

  useEffect(()=>{
    const interval=setInterval(()=>{
      setCurrentQuote((prev)=>(prev+1)%devQuotes.length);  //quote rotation  
    },3000);
    return()=>clearInterval(interval);
  },[]);
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => {
          const angle = (i / 50) * 2 * math.pi;
          const radius = math.random() * 200 + 100;
          const centerX = typeof window !== 'undefined' ? window.innerWidth / 2 : 800;
          const centerY = typeof window !== 'undefined' ? window.innerHeight / 2 : 400;
          
          return (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white opacity-20"
              initial={{ 
                x: centerX + math.cos(angle) * radius,
                y: centerY + math.sin(angle) * radius
              }}
              animate={{ 
                x: centerX + math.cos(angle + math.pi/4) * (radius + math.sin(Date.now() * 0.001) * 50),
                y: centerY + math.sin(angle + math.pi/4) * (radius + math.cos(Date.now() * 0.001) * 50),
                opacity: [0.2, 0.8, 0.2]
              }}
              transition={{
                duration: math.abs(math.sin(i)) * 4 + 3,
                repeat: Infinity,
                delay: i * 0.1
              }}
            />
          );
        })}
      </div>
      {/* Navbar */}
      <div className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center backdrop-blur border-b border-white/10">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-lg tracking-widest font-light"
        >
         SUBODHINI
        </motion.div>

        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="hidden md:flex space-x-4 text-sm"
        >
          <button onClick={() => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      document.body.style.overflow = 'auto';
      
      aboutSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start' 
      });
    }
  }}  className="border border-white rounded-full px-4 py-1 hover:bg-white hover:text-black transition">ABOUT</button>
          <button className="border border-white rounded-full px-4 py-1 hover:bg-white hover:text-black transition">SKILLS</button>
          <button className="border border-white rounded-full px-4 py-1 hover:bg-white hover:text-black transition">PROJECTS</button>
          <button className="border border-white rounded-full px-4 py-1 hover:bg-white hover:text-black transition">CONTACT</button>
        </motion.div>
        <motion.button
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="hidden lg:block border border-white rounded-full px-4 py-1 text-sm hover:bg-white hover:text-black transition"
        >
          AVAILABLE FOR FREELANCE
        </motion.button>
      </div>
      <div className="flex flex-col justify-center items-center text-center h-screen mt-50 px-6 pt-[150px]">
        <h1 className="text-[7vw] leading-tight font-extrabold tracking-tight">

        </h1>
      </div>
      
      <ScrollDownArrow/>
    </div>
    
  );
}
