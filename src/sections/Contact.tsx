import React from 'react';
import {FaGithub,FaLinkedin} from 'react-icons/fa';
import { IoMail } from 'react-icons/io5';
const Contact=()=>{
    return(
        <section id='contact' className='bg-black text-white py-24 px-6 text-center'>
            <div className='max-w-2xl mx-auto'>
                <h2 className='text-4xl font-bold mb-4 border-b-4 border-purple-500 inline-block pb-2'>
                    Contact
                </h2>
                <p className='text-gray-300 text-lg mt-6'>
                I&apos;m looking for new opportunities to contribute to the industry and grow as a developer.
          If you have a project you want me to participate in or if you have any questions,
          let me know! I&apos;ll do my best to answer you.
                </p>
                <p className='text-gray-500 mt-6 text-md'>
                    subodhiniaggarwal@gmail.com
                </p>
                <a
          href="mailto:subodhiniaggarwal@gmail.com"
          className="mt-8 inline-block bg-purple-600 hover:bg-purple-700 transition text-white px-8 py-3 rounded-md text-lg font-medium"
        >
          Say hello
        </a>
        <div className='flex justify-center gap-8 mt-12 text-2xl text-gray-400'>
            <a href='https://github.com/Subodhini0906' target='_blank' rel='noopener noreferrer'>
            <FaGithub className='hover:text-white transition'/>
            </a>
            <a href="https://linkedin.com/in/subodhini-aggarwal-622a1b251" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="hover:text-white transition" />
            </a>
            <a href="mailto:subodhiniaggarwal@gmail.com">
            <IoMail className="hover:text-white transition" />
            </a>
        </div>
        </div>
        </section>
    );
};

export default Contact;