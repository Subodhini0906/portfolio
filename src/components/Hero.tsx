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
      <div className="absolute inset-0 pointer-events-none">     
        {[...Array(30)].map((_, i) => {                                //animated bg particles 
          const angle = (i / 30) * 2 * math.pi;
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          const radius = 150 + (i % 3) * 100;
          
          return (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${50 + math.cos(angle) * 20}%`,
                top: `${50 + math.sin(angle) * 15}%`,
              }}
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: [0.1, 0.4, 0.1],
                scale: [1, 1.5, 1]
              }}
              transition={{
                duration: 3 + (i % 3),
                repeat: Infinity,
                delay: i * 0.2
              }}
            />
          );
        })}
      </div>
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
      <div className="relative z-10 flex flex-col justify-center items-center text-center px-6">
  <motion.div 
    key={currentQuote} 
    initial={{opacity:0,y:50}} 
    animate={{opacity:1,y:0}} 
    exit={{opacity:0,y:-50}} 
    transition={{duration:0.8}} 
    className='fixed inset-0 flex items-center justify-center'
  >
    <div className="flex flex-col items-center justify-center text-center">
      <motion.h1
        className="text-xl md:text-3xl lg:text-4xl xl:text-5xl leading-[0.9] font-extrabold tracking-tight text-center text-white mb-6"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {devQuotes[currentQuote].main}
        <br/>
        <span className='bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent'>
          {devQuotes[currentQuote].sub}
        </span>
      </motion.h1>
      
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="text-5px md:text-2xl text-gray-300 tracking-wide font-light max-w-2xl mx-auto"
      >
        {devQuotes[currentQuote].tagline}
      </motion.p>
    </div>    
  </motion.div>
</div>
<ScrollDownArrow/>
</div>
    
  );
}
