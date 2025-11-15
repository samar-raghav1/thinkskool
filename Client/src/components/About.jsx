/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
// Import icons from react-icons
import { MdOutlinePublic, MdOutlineLightbulb, MdOutlineVerified } from 'react-icons/md';
import { FaUsers } from 'react-icons/fa'; 

const About = () => {
  const ACCENT_BLUE = '#2563EB';

  // Framer Motion variants for the right-side animation
  const rightSideVariants = {
    // Hidden state: off-screen to the right and opaque
    hidden: { opacity: 0.2, x: 100 }, 
    // Visible state: in final position, fully opaque
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 15,
        delay: 0.1
      }
    },
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* --- Left Side: Text Content and Stats (Static) --- */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              About Think Skool
            </h1>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed max-w-xl lg:max-w-none mx-auto lg:mx-0">
              Think Skool is a premier educational technology platform dedicated to
              bridging the gap between traditional education and the demands of the
              modern workforce. Founded in 2020, we've empowered over
              <strong className="text-blue-600"> 10,000 students worldwide</strong> with cutting-edge skills in emerging
              technologies.
            </p>
            
            <p className="text-lg text-gray-700 mb-12 leading-relaxed max-w-xl lg:max-w-none mx-auto lg:mx-0">
              Our mission is to democratize access to quality tech education,
              ensuring that every student, regardless of their background, has the
              opportunity to build a successful career in technology.
            </p>

            {/* Stats Section */}
            <div className="grid grid-cols-3 gap-6 text-center lg:text-left">
              <div className="stat-item">
                <h2 className="text-4xl md:text-5xl font-extrabold text-[#FF8C00] mb-2">4+</h2>
                <p className="text-md md:text-lg text-gray-600 font-medium">Years of Excellence</p>
              </div>
              <div className="stat-item">
                <h2 className="text-4xl md:text-5xl font-extrabold text-[#FF8C00] mb-2">50+</h2>
                <p className="text-md md:text-lg text-gray-600 font-medium">Expert Instructors</p>
              </div>
              <div className="stat-item">
                <h2 className="text-4xl md:text-5xl font-extrabold text-[#FF8C00] mb-2">25+</h2>
                <p className="text-md md:text-lg text-gray-600 font-medium">Countries Served</p>
              </div>
            </div>
          </div>
          
          {/* --- Right Side: Animated Visual & Feature List --- */}
          <motion.div 
            className="relative p-6 bg-gray-50 rounded-2xl shadow-xl border border-gray-100 min-h-[400px] flex flex-col justify-between"
            variants={rightSideVariants}
            initial="hidden"
            // Triggers the slide-in animation when scrolled into view
            whileInView="visible" 
            // The key change: once: false ensures the animation reverses when the element leaves the viewport
            viewport={{ once: false, amount: 0.5 }} 
          >
            {/* Large central icon */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 text-blue-200/50 text-[10rem] md:text-[12rem] z-0">
                <FaUsers /> 
            </div>

            {/* Feature List */}
            <ul className="relative z-10 space-y-8 mt-16 md:mt-24">
              <li className="flex items-center gap-4">
                <MdOutlineVerified className="text-3xl" style={{ color: ACCENT_BLUE }} />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Industry Recognized</h3>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <MdOutlinePublic className="text-3xl" style={{ color: ACCENT_BLUE }} />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Global Reach</h3>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <MdOutlineLightbulb className="text-3xl" style={{ color: ACCENT_BLUE }} />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Innovative Learning</h3>
                </div>
              </li>
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;