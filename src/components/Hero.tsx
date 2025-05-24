"use client"
import React from "react";
import {motion} from "framer-motion";
import ScrollDownArrow from "./ScrollDownArrow";

export default function Hero() {
    const scrollToAbout = () => {
        document.getElementById('about')?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    };

    return (
        <div className="bg-black text-white relative">
            {/* Header - Fixed at top with high z-index */}
            <div className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
                <div className="w-full flex justify-between items-center px-8 py-4">
                    <motion.h1 
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-xl font-light tracking-widest text-white"
                    >
                        SUBODHINI
                    </motion.h1>
                    
                    {/* Desktop Navigation */}
                    <motion.div 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="hidden md:flex gap-4"
                    >
                        <button 
                            onClick={scrollToAbout}
                            className="px-4 py-2 border border-white rounded-full hover:bg-white hover:text-black transition duration-300 text-sm" 
                        >
                            ABOUT
                        </button>
                        <a href="#skills" className="px-4 py-2 border border-white rounded-full hover:bg-white hover:text-black transition duration-300 text-sm">
                            SKILLS
                        </a>
                        <a href="#projects" className="px-4 py-2 border border-white rounded-full hover:bg-white hover:text-black transition duration-300 text-sm">
                            PROJECTS
                        </a>
                        <a href="#contact" className="px-4 py-2 border border-white rounded-full hover:bg-white hover:text-black transition duration-300 text-sm">
                            CONTACT
                        </a>
                    </motion.div>

                    <motion.button 
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="hidden lg:block px-4 py-2 border border-white rounded-full text-xs hover:bg-white hover:text-black transition duration-300"
                    >
                        AVAILABLE FOR FREELANCE
                    </motion.button>

                </div>
            </div>

            <div className="h-screen flex flex-col items-center justify-center text-center px-4 pt-150 relative">
                <motion.h1 
                    initial={{y: 40, opacity: 0}} 
                    animate={{y: 0, opacity: 1}} 
                    transition={{duration: 1, delay: 0.6}}
                    className="text-white text-[6vw] md:text-[5vw] lg:text-[4vw] leading-[1.1] uppercase font-bold tracking-tight z-50"
                >
                    Smart design,
                    <br/>
                    seamless
                    <br/> 
                    code
                </motion.h1>
                
            <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    className="absolute bottom-40"
                >
                    <ScrollDownArrow/>
                </motion.div>
            </div>
        </div>
    )
}