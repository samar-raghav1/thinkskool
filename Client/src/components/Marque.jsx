/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';

const panelWidth = 450; // The width of a single content panel in pixels
const gapWidth = 20;    // mx-4 (margin horizontal) = 16px on left + 16px on right. Use 2*16 = 32px for total margin.
const numPanels = 3;
const totalTranslationDistance = -((panelWidth + 32) * numPanels);

// --- Component Definition ---
const Marque = () => {
  // Define the animation properties
  const marqueeVariants = {
    animate: {
      x: ['0%', totalTranslationDistance], 
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop', 
          duration: 10, 
          ease: 'linear', 
        },
      },
    },
  };

  // Define the content panels to be scrolled.
  // We duplicate the array to ensure a seamless infinite loop.
  const panels = [
    { id: 1, color: 'bg-gray-900', title: 'Dashboard UI (Dark)' },
    { id: 2, color: 'bg-gray-100', title: 'Educational Portal UI (Light)' },
    { id: 3, color: 'bg-indigo-100', title: 'Course Platform UI (Purple)' },
  ];

  const contentToRepeat = [...panels, ...panels,...panels];

  return (
    <div className="relative w-full overflow-hidden py-12 bg-white">
     
      <motion.div
        className="flex min-w-max" // Ensures the container is wide enough for all panels
        variants={marqueeVariants}
        animate="animate"
      >
        {contentToRepeat.map((panel, index) => (
          <div
            key={index}
            className={`w-[450px] h-96 mx-4 p-6 rounded-xl shadow-2xl shrink-0 
                        ${panel.color} border border-gray-200 transform transition-all 
                        duration-300 hover:scale-[1.01] hover:shadow-3xl`}
          >
            <h3 className={`text-lg font-bold ${panel.color.includes('dark') ? 'text-white' : 'text-gray-800'} mb-4`}>
              {panel.title}
            </h3>
            {/* Placeholder content to represent the complex UI panels */}
            <div className="flex flex-col space-y-2 h-full">
                <div className="h-1/5 bg-opacity-10 bg-current rounded-lg"></div>
                <div className="h-2/5 bg-opacity-10 bg-current rounded-lg"></div>
                <div className="h-1/5 bg-opacity-10 bg-current rounded-lg"></div>
            </div>
          </div>
        ))}
      </motion.div>

   
    </div>
  );
};

export default Marque;