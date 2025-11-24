/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import InteractiveFeatures from './InteractiveFeatures';
import { FaArrowDown } from 'react-icons/fa';
import { GlowingCard } from './ui/GlowingCard';

// --- Configuration ---
const PRIMARY_COLOR = '#FF8C00'; // Orange primary color for the text list
const SECONDARY_BLUE = '#2563EB'; // Blue color for the visual component icons

// --- FeaturePart Component Logic (Visual/Animated Half) ---
const FeaturePartVisual = () => {
  // Animation for the floating features
  const floatVariants = {
    initial: { y: 0 },
    animate: {
      y: [0, -8, 0], // Floats up by 8px and back
      transition: {
        duration: 4,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatType: 'reverse', // Go up then down
      },
    },
  };

  return (
    <div className="relative w-full h-[500px] lg:h-full flex items-center justify-center pt-8 pb-8 lg:pt-0 lg:pb-0">

      {/* Background Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-96 h-96 bg-blue-500/20 rounded-full blur-3xl opacity-30"></div>
      </div>

      {/* Main Feature Card */}
      <div className="relative z-10 w-full max-w-md">
        <GlowingCard>
          <div className="text-center flex flex-col items-center justify-center min-h-[300px]">
            <div
              className="mb-6 text-6xl"
              style={{ color: SECONDARY_BLUE }}
            >
              <i className="fas fa-laptop-code"></i>
            </div>
            <h3 className="text-xl font-bold text-white">
              Interactive Learning Dashboard
            </h3>
          </div>
        </GlowingCard>

        {/* --- Floating Feature Components --- */}
        {/* Note: Positions adjusted to fit within the two-column grid context */}

        {/* Video Lessons */}
        <motion.div
          className="floating-item absolute top-[10%] right-[-10%] bg-slate-900 rounded-full py-2 px-4 shadow-md flex items-center gap-2 border border-[#FF8C00] whitespace-nowrap text-sm"
          variants={floatVariants}
          initial="initial"
          animate="animate"
        >
          <i className="fas fa-play-circle" style={{ color: SECONDARY_BLUE }}></i>
          <span className="font-semibold text-white">Video Lessons</span>
        </motion.div>

        {/* Code Editor */}
        <motion.div
          className="floating-item absolute top-[40%] left-[-10%] bg-slate-900 rounded-full py-2 px-4 shadow-md flex items-center gap-2 border border-[#FF8C00] whitespace-nowrap text-sm"
          variants={floatVariants}
          initial="initial"
          animate="animate"
          style={{ animationDelay: '0.5s' }}
        >
          <i className="fas fa-code" style={{ color: SECONDARY_BLUE }}></i>
          <span className="font-semibold text-white">Code Editor</span>
        </motion.div>

        {/* Live Sessions */}
        <motion.div
          className="floating-item absolute bottom-[30%] right-[-10%] bg-slate-900 rounded-full py-2 px-4 shadow-md flex items-center gap-2 border border-[#FF8C00] whitespace-nowrap text-sm"
          variants={floatVariants}
          initial="initial"
          animate="animate"
          style={{ animationDelay: '1s' }}
        >
          <i className="fas fa-users" style={{ color: SECONDARY_BLUE }}></i>
          <span className="font-semibold text-white">Live Sessions</span>
        </motion.div>

        {/* Achievements */}
        <motion.div
          className="floating-item absolute bottom-[5%] left-[-10%] bg-slate-900 rounded-full py-2 px-4 shadow-md flex items-center gap-2 border border-[#FF8C00] whitespace-nowrap text-sm"
          variants={floatVariants}
          initial="initial"
          animate="animate"
          style={{ animationDelay: '1.5s' }}
        >
          <i className="fas fa-trophy" style={{ color: SECONDARY_BLUE }}></i>
          <span className="font-semibold text-white">Achievements</span>
        </motion.div>
      </div>
    </div>
  );
};


// --- Main Feature Component (Combining Text and Visual) ---
const Feature = () => {
  const [isFeaturesExpanded, setIsFeaturesExpanded] = useState(false);
  const handleToggle = () => {
    setIsFeaturesExpanded(!isFeaturesExpanded);
  };
  return (
    <section className="py-16 md:py-24 bg-slate-950 w-full" id="feature-section">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">

        {/* --- Heading --- */}
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-16 text-white"
        >
          <span className='text-[#007FFF] font-extrabold'>think</span><span className='text-[#FF8C00] font-extrabold'>skool</span> Unique Features
        </h2>

        {/* --- Feature Content Layout (Responsive Grid) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* --- Text Content Block (Left Half on Desktop) --- */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
              Experience the most <br className="hidden lg:inline" /> advanced online learning platform.
            </h3>

            <p className="text-lg text-slate-300 mb-8 max-w-xl lg:max-w-none mx-auto lg:mx-0">
              Let Figma AI assist in generating designs that perfectly align with your vision. Shape the output by:
            </p>

            <ul className="text-left space-y-3 mb-10 max-w-xl lg:max-w-none mx-auto lg:mx-0">
              <li className="flex items-start text-slate-200">
                {/* Custom primary color circle icon */}
                <span className="w-2 h-2 mr-3 mt-2 rounded-full shrink-0" style={{ backgroundColor: PRIMARY_COLOR }}></span>
                Setting the <strong className="text-white">design style</strong> and visual direction in Figma
              </li>
              <li className="flex items-start text-slate-200">
                <span className="w-2 h-2 mr-3 mt-2 rounded-full shrink-0" style={{ backgroundColor: PRIMARY_COLOR }}></span>
                Adjusting AI-generated visuals to match your <strong className="text-white">brand guidelines</strong>
              </li>
            </ul>

            <button onClick={handleToggle}
              className="px-8 py-3 text-lg font-semibold rounded-lg border-2 flex transition duration-300 shadow-md hover:bg-slate-800 cursor-pointer"
              style={{
                color: PRIMARY_COLOR,
                borderColor: PRIMARY_COLOR,
                backgroundColor: 'transparent',
              }}
            >
              Try it
            </button>
          </div>

          <div className="order-1 lg:order-2">
            <FeaturePartVisual />
          </div>

        </div>
      </div>
      <InteractiveFeatures isFeaturesExpanded={isFeaturesExpanded} />
    </section>
  );
};

export default Feature;