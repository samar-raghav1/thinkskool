/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { LogIn, User, BookOpen, Shield,X, LogOutIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for the exit button
import {motion} from "framer-motion";

// --- Brand and Primary Colors ---
// Define the primary color (0066cc) for consistency in classes where hex is needed
const PRIMARY_COLOR = 'text-[#0066cc]';
const PRIMARY_BG = 'bg-[#0066cc]';
const LOGO_BLUE = '#007FFF'; // think color
const LOGO_ORANGE = '#FF8C00'; // skool color

const RoleCard = ({ icon: Icon, title, path }) => {
  const navigate = useNavigate();

  const handleRoleClick = () => {
    navigate(path);
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center p-6  bg-white border border-gray-200 rounded-xl shadow-lg cursor-pointer transition-all duration-300 hover:shadow-2xl hover:border-[#FF8C00] min-w-[140px]"
      // Framer Motion props for animation
      whileHover={{ scale: 1.05, translateY: -5 }} // Slight lift and scale on hover
      whileTap={{ scale: 0.95 }} // Shrink on click
      onClick={handleRoleClick}
    >
      <div className="p-4 bg-gray-50 rounded-full mb-4 text-[#007FFF]">
        <Icon className="w-8 h-8" />
      </div>
      <p className="text-lg font-semibold text-teal-900">{title}</p>
    </motion.div>
  );
};
const ChooseRole = () => {
  const navigate = useNavigate(); // Initialize navigate hook

   const roles = [
    { title: 'Student', icon: User, path: '/student/login' },
    { title: 'Mentor', icon: BookOpen, path: '/mentor/login' },
    { title: 'SchoolAdmin', icon: Shield, path: '/admin/login' },
  ];

  // New function to handle exit navigation
  const handleExit = () => {
    navigate('/');
  };

  // --- Render Logic ---

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div 
        className="w-full max-w-lg p-6 md:p-10 bg-white rounded-2xl shadow-2xl shadow-gray-600 border-gray-900 border-2"
        
      >
        {/* --- Enhanced Header --- */}
        <header className="flex justify-between items-center mb-6 pb-4 border-b border-gray-200">
            {/* Logo */}
            <div className="text-2xl font-extrabold cursor-text">
                <span style={{ color: LOGO_BLUE }}>think</span>
                <span style={{ color: LOGO_ORANGE }}>skool</span>
            </div>
            
            {/* Exit Button */}
            <button
                onClick={handleExit}
                className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-gray-600 bg-gray-100 rounded-full hover:bg-red-100 hover:text-red-600 transition duration-300 cursor-pointer"
                aria-label="Exit to Home Page"
            >
                <LogOutIcon/>
            </button>
        </header>
        
        <div 
        className="flex flex-col justify-center items-center transition-all duration-700 ease-in-out"
        style={{ animation: 'card-fade-in 0.5s ease-out forwards' }}
      >
        <style jsx="true">{`
             @keyframes card-fade-in {
                 from { opacity: 0; transform: translateY(10px); }
                 to { opacity: 1; transform: translateY(0); }
             }
        `}</style>
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">Identify yourself as...</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10  w-full">
           {roles.map((role) => (
            <RoleCard
              key={role.title}
              icon={role.icon}
              title={role.title}
              path={role.path}
            />
          ))}
        </div>
      </div>
      </div>
    </div>
  );
};

export default ChooseRole;