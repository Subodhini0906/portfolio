import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const ScrollDownArrow = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="fixed bottom-16 left-1/2 transform -translate-x-1/2 z-50 cursor-pointer"
         style={{ opacity: scrollPosition > 100 ? 0 : 1, transition: 'opacity 0.3s ease' }}
         onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}>
      <div className="relative h-20 w-20 flex items-center justify-center">
        
        {/* Inner Circle */}
        <motion.div 
          className="absolute h-16 w-16 rounded-full border border-white"
          animate={{ 
            scale: [1, 1.14, 1],
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.3 
          }}
        />
        {/* Down Arrow */}
        <motion.div 
          className="relative z-10"
          animate={{ 
            y: [0, 2, 0],
          }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 6L12 18M12 18L18 12M12 18L6 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.div>
      </div>
    </div>
  );
};

export default ScrollDownArrow;