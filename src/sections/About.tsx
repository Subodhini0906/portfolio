"use client";
import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="scroll-mt-20 pt-70 w-full min-h-screen bg-black text-white flex flex-col items-center justify-center px-6"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">About Me</h2>
        <p className="text-lg max-w-3xl text-center leading-8 text-gray-300 mb-6">
          I&apos;m a passionate developer who blends smart design with seamless code.
          With a strong eye for detail and a love for clean UI, I build web
          experiences that are not only functional but also delightful to use.
          Whether it&apos;s frontend, backend, or a bit of both – I strive to create
          work that speaks for itself.
        </p>
        <p className="text-sm text-blue-300">
          Let&apos;s build something impactful together.
        </p>
      </div>
    </motion.section>
  );
}