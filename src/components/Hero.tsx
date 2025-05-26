import { motion } from 'framer-motion';
import ScrollDownArrow from './ScrollDownArrow';

export default function HomePage() {

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
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
          <button className="border border-white rounded-full px-4 py-1 hover:bg-white hover:text-black transition">ABOUT</button>
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
        <h1 className="text-[7vw] leading-tight font-extrabold tracking-tight"></h1>
      </div>
      
      <ScrollDownArrow/>
    </div>
    
  );
}
