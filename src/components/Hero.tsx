"use client"
import React from "react";
import {motion} from "framer-motion";

export default function Hero(){
    return (
    <motion.div
      initial={{ y: -200, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full h-screen bg-black text-white flex flex-col justify-between px-8 py-6 font-sans">
            <div className="flex justify-between items-center">
                <h1 className="text-xl font-light tracking-widest">SUBODHINI</h1>
                <div className="flex gap-8">
                    <motion.a href="#about" className="px-4 py-2 border border-white rounded-full hover:bg-white hover:text-black transition duration-300 text-sm" whileHover={{scale:1.05}}>
                        ABOUT
                    </motion.a>
                    <motion.a href="#skills" className="px-4 py-2 border border-white rounded-full hover:bg-white hover:text-black transition duration-300 text-sm" whileHover={{scale:1.05}}>
                        SKILLS
                    </motion.a>
                    <motion.a href="#projects" className="px-4 py-2 border border-white rounded-full hover:bg-white hover:text-black transition duration-300 text-sm" whileHover={{scale:1.05}}>
                        PROJECTS
                    </motion.a>
                    <motion.a href="#contact" className="px-4 py-2 border border-white rounded-full hover:bg-white hover:text-black transition duration-300 text-sm" whileHover={{scale:1.05}}>
                        CONTACT
                    </motion.a>
                </div>
                <motion.button className="px-4 py-2 border border-white rounded-full text-sm hover:bg-white hover:text-black transition duration-300" whileHover={{scale:1.05}}>
                    AVAILABLE FOR FREELANCE & JOBS
                </motion.button>
            </div>
            <div className="flex flex-1 flex-col items-center justify-center text-center px-4">
                <motion.h1 initial={{y:40,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:1}}
                className="text-white text-[6vw] md:text-[5vw] leading-[1.1] uppercase font-[700] tracking-tight text-left">
                    Smart design,
                    <br/>
                    seamless
                    <br/> 
                    code
                </motion.h1>
                </div>
    </motion.div>
    )
}