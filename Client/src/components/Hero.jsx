import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LampContainer } from './ui/lamp';
import { motion } from 'framer-motion';

const Hero = () => {
  const navigate = useNavigate();
  const customOrange = '#FF8C00';

  return (
    <LampContainer className="pt-32 md:pt-48">
      <motion.div
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="flex flex-col items-center justify-center text-center px-4 mt-52"
      >
        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold max-w-5xl leading-tight mb-6 text-white drop-shadow-2xl">
          Transform Education with <br className="hidden md:block" />
          <span className="text-[#007FFF] drop-shadow-[0_0_15px_rgba(0,127,255,0.5)]">think</span>
           <span className='inline-block w-2'></span>
          <span className="text-[#FF8C00] drop-shadow-[0_0_15px_rgba(255,140,0,0.5)]">skool</span>
        </h1>

        {/* Sub-headline */}
        <p className="text-base sm:text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed">
          ThinkSkool brings future-ready STEM education directly into school hours through
          hands-on learning, cloud labs, and industry-designed programs. Students explore AI,
          cybersecurity, robotics, and development with real projects and expert guidance.
        </p>

        {/* Primary Action Button */}
        <div className='flex flex-col md:flex-row gap-6'>
          <button
            onClick={() => navigate('/role')}
            className="hidden md:block px-8 py-4 text-xl font-bold text-white rounded-full 
            shadow-[0_0_20px_rgba(255,140,0,0.3)] mb-4 transform transition duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,140,0,0.6)] border border-[#FF8C00]/30"
            style={{
              backgroundColor: customOrange,
            }}
          >
            Start your journey
          </button>
          <button onClick={() => navigate('/contact')}
            className="px-10 py-4 text-xl font-semibold mb-4 text-white rounded-full shadow-[0_0_20px_rgba(255,140,0,0.3)] transform transition duration-300 hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(255,140,0,0.6)] border border-[#FF8C00]/30"
            style={{
              backgroundColor: customOrange,
            }}
          >
            Book a Demo Call
          </button>
        </div>
      </motion.div>
    </LampContainer>
  );
};

export default Hero;