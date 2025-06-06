/* eslint-disable @next/next/no-img-element */
import { motion } from 'framer-motion';
import ScrollDownArrow from './ScrollDownArrow';
import { useEffect, useState } from 'react';
import * as math from 'mathjs';
import Projects from '@/sections/Projects';
import Contact from '@/sections/Contact';
import About from '@/sections/About';

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
    <main className="bg-black text-white overflow-hidden">

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
          <a href="#about" className="border border-white rounded-full px-4 py-1 hover:bg-white hover:text-black transition">ABOUT</a>
          <a href="#skills" className="border border-white rounded-full px-4 py-1 hover:bg-white hover:text-black transition">SKILLS</a>
          <a href="#projects" className="border border-white rounded-full px-4 py-1 hover:bg-white hover:text-black transition">PROJECTS</a>
          <a href="#contact" className="border border-white rounded-full px-4 py-1 hover:bg-white hover:text-black transition">CONTACT</a>
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

      <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 pt-24">

        <div className="absolute inset-0 pointer-events-none">
          {[...Array(40)].map((_, i) => {
            const angle = (i / 30) * 2 * math.pi;
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

        <div className="z-10 flex flex-col items-center justify-center">
          <motion.h1
            key={`title-${currentQuote}`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-xl md:text-3xl lg:text-4xl xl:text-5xl leading-[0.9] font-extrabold tracking-tight text-white mb-6"
          >
            {devQuotes[currentQuote].main}
            <br />
            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
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

        <div className="z-10 mt-10">
          <div className="flex space-x-3">
            {devQuotes.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentQuote(index)}
                className="w-2 h-2 rounded-full"
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

        <ScrollDownArrow />
      </section>
      <About/>

      <section id="skills" className=" bg-black text-white flex items-center justify-center px-6 py-15">
      <div className="max-w-6xl w-full text-center">
     <h2 className="text-4xl font-bold mb-12 border-b-4 inline-block border-purple-500 pb-2">Skills</h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-8">
      <div className="bg-zinc-900 p-6 rounded-xl shadow hover:scale-105 transition-transform duration-300">
        <div className="text-purple-400 text-3xl mb-4">💻</div>
        <h3 className="text-xl font-semibold mb-4">Languages</h3>
        <div className="flex flex-wrap justify-center gap-3 text-sm">
          <span className="bg-zinc-800 px-4 py-1 rounded-full">HTML</span>
          <span className="bg-zinc-800 px-4 py-1 rounded-full">CSS</span>
          <span className="bg-zinc-800 px-4 py-1 rounded-full">Java</span>
          <span className="bg-zinc-800 px-4 py-1 rounded-full">JavaScript</span>
          <span className="bg-zinc-800 px-4 py-1 rounded-full">TypeScript</span>
        </div>
      </div>

      <div className="bg-zinc-900 p-6 rounded-xl shadow hover:scale-105 transition-transform duration-300">
        <div className="text-purple-400 text-3xl mb-4">📦</div>
        <h3 className="text-xl font-semibold mb-4">Libraries & Frameworks</h3>
        <div className="flex flex-wrap justify-center gap-3 text-sm">
          <span className="bg-zinc-800 px-4 py-1 rounded-full">React</span>
          <span className="bg-zinc-800 px-4 py-1 rounded-full">Next</span>
          <span className="bg-zinc-800 px-4 py-1 rounded-full">Redux</span>
          <span className="bg-zinc-800 px-4 py-1 rounded-full">Tailwind CSS</span>
        </div>
      </div>

      <div className="bg-zinc-900 p-6 rounded-xl shadow hover:scale-105 transition-transform duration-300">
        <div className="text-purple-400 text-3xl mb-4">🛠️</div>
        <h3 className="text-xl font-semibold mb-4">Tools & Platforms</h3>
        <div className="flex flex-wrap justify-center gap-3 text-sm">
          <span className="bg-zinc-800 px-4 py-1 rounded-full">Git</span>
          <span className="bg-zinc-800 px-4 py-1 rounded-full">GitHub</span>
          <span className="bg-zinc-800 px-4 py-1 rounded-full">Firebase</span>
          <span className="bg-zinc-800 px-4 py-1 rounded-full">Figma</span>
        </div>
      </div>
    </div>
  </div>
      </section>
      <Projects/>
      <Contact/>
    </main>
  );
}
