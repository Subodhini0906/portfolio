import { motion } from 'framer-motion';
import ScrollDownArrow from './ScrollDownArrow';
import { useEffect, useState } from 'react';
import * as math from 'mathjs';

const devQuotes = [
  {
    main: "CRAFTING DIGITAL",
    sub: "EXPERIENCES",
    tagline: "Where code meets creativity"
  },
  {
    main: "BUILDING THE",
    sub: "FUTURE",
    tagline: "One pixel at a time"
  },
  {
    main: "CODE IS",
    sub: "POETRY",
    tagline: "Written in logic, felt in experience"
  },
  {
    main: "TURNING IDEAS",
    sub: "INTO REALITY",
    tagline: "Through the power of code"
  },
  {
    main: "CREATING DIGITAL",
    sub: "MAGIC",
    tagline: "Where imagination becomes interaction"
  }
];

export default function HomePage() {
  const [currentQuote, setCurrentQuote] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % devQuotes.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 pointer-events-none pt-30 mt-10">
        {[...Array(40)].map((_, i) => {
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
          }} className="border border-white rounded-full px-4 py-1 hover:bg-white hover:text-black transition">ABOUT</button>
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
        <div className='fixed inset-0 flex items-center justify-center'>
          <div className="flex flex-col items-center justify-center text-center">
            <motion.h1
              key={`title-${currentQuote}`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-xl md:text-3xl lg:text-4xl xl:text-5xl leading-[0.9] font-extrabold tracking-tight text-center text-white mb-6"
            >
              {devQuotes[currentQuote].main}
              <br/>
              <span className='bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent'>
                {devQuotes[currentQuote].sub}
              </span>
            </motion.h1>
            
            <motion.p
              key={`tagline-${currentQuote}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base md:text-2xl text-gray-300 tracking-wide font-light max-w-2xl mx-auto mb-8"
            >
              {devQuotes[currentQuote].tagline}
            </motion.p>
          </div>
        </div>
      </div>

      {/* Quote Indicators - Fixed position outside content area, always visible */}
      <div className="fixed bottom-32 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-3 mb-16">
          {devQuotes.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentQuote(index)}
              className={`w-2 h-2 rounded-full transition-all duration-500 hover:scale-125`}
              whileHover={{ scale: 1.25 }}
              whileTap={{ scale: 0.9 }}
              animate={{
                backgroundColor: index === currentQuote ? '#ffffff' : '#4b5563',
                boxShadow: index === currentQuote ? '0 0 20px rgba(255, 255, 255, 0.3)' : '0 0 0px rgba(255, 255, 255, 0)'
              }}
              transition={{ duration: 0.5 }}
              aria-label={`Go to quote ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <ScrollDownArrow/>
    </div>
  );
}