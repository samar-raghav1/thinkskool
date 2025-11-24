/* eslint-disable react-hooks/set-state-in-effect */

import { Download, DownloadCloudIcon, MenuIcon, XIcon } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Tooltip from './Tooltip';

const Navbar = () => {
  const navigate = useNavigate();

  const customOrange = '#FF8C00';

  const MD_BREAKPOINT_QUERY = '(min-width: 768px)';

  // 1. Determine Initial State based on Screen Size
  // If the window is wide when the component loads, the menu should be false initially.
  const isScreenWide = window.matchMedia(MD_BREAKPOINT_QUERY).matches;
  const [isMenuOpen, setIsMenuOpen] = useState(isScreenWide);

  // Note: We set it to true/false based on the *current* screen size for the initial render.
  // It's often simpler to just initialize it to false:
  // const [isMenuOpen, setIsMenuOpen] = useState(false); 
  // and let the logic below enforce the closing. Let's stick with the simpler initial false.

  // Let's reset the initial state to the simplest form and rely on useEffect to correct it.
  // const [isMenuOpen, setIsMenuOpen] = useState(false); // Simpler initial state

  const menuRef = useRef(null);

  // 2. useEffect for automatic closing on large screens (both mount and resize)
  useEffect(() => {
    const mediaQuery = window.matchMedia(MD_BREAKPOINT_QUERY);

    const handleMediaQueryChange = (e) => {
      // If the screen is wide (768px+) AND the menu is currently open, close it.
      if (e.matches && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    // A. Initial Check on Mount:
    // If the component loads and the screen is already wide, ensure the menu is closed.
    if (mediaQuery.matches) {
      setIsMenuOpen(false);
    }

    // B. Listen for Changes (Resize):
    mediaQuery.addEventListener('change', handleMediaQueryChange);

    // C. Cleanup: Remove the listener when the component unmounts.
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, [isMenuOpen]); // Dependency on isMenuOpen ensures the latest state is used in handleMediaQueryChange

  // 3. useEffect for Click Outside Logic (remains the same)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header className="flex justify-between items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      {/* Left Section: Logo and Navigation Links */}
      <div className="flex items-center space-x-8">
        {/* Logo and Language Dropdown */}
        <div className="text-xl font-bold text-gray-800 flex items-center">
          <span className='text-[#007FFF]'>think</span>
          <span className='text-[#FF8C00]'>skool</span>

        </div>


        <nav className="hidden lg:flex space-x-8 text-gray-600 font-medium pl-32">
          <a href="/" className="hover:text-gray-900 transition duration-150">Home</a>
          <a href="#programs" className="hover:text-gray-900 transition duration-150">Programs</a>
          <Link to="/course" className="hover:text-gray-900 transition duration-150">Courses</Link>
          <Link to="#" className="hover:text-gray-900 transition duration-150">Portal</Link>
          <a href="#about" className="hover:text-gray-900 transition duration-150">About</a>
          <Link to="/contact" className="hover:text-gray-900 transition duration-150">Contact</Link>
        </nav>
      </div>

      {/* Right Section: Auth Buttons */}
      <div className="flex items-center space-x-4" ref={menuRef}>

        {/* Hamburger Icon button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-gray-700 rounded-full hover:bg-gray-100 transition duration-150"
        >
          {isMenuOpen ? (
            <XIcon className="w-6 h-6" />
          ) : (
            <MenuIcon className="w-6 h-6" />
          )}
        </button>

        {/* Button Container */}
        <div
          className={`
          flex items-center space-x-4 w-full mt-4
          ${isMenuOpen ? 'flex' : 'hidden'} 
          md:flex 
          ${isMenuOpen ? 'absolute right-0 top-12 p-8 bg-white/80 shadow-xl flex-col space-x-0 space-y-2 rounded-lg z-20' : ''}
        `}
        >
          {/* Start your journey Button */}
          <button
            onClick={() => { navigate('/role'); setIsMenuOpen(false); }}
            className="px-4 py-2 font-medium rounded-full text-white transition duration-150 hover:opacity-90 cursor-pointer w-full md:w-auto"
            style={{ backgroundColor: customOrange }}
          >
            Start your journey
          </button>

          {/* Download Catalog Button */}
          <div className='flex justify-between items-center gap-2'>
            <a target="_blank"
              className="block md:hidden text-sm font-medium  text-[#007FFF] ">
              download Catalog
            </a>
            <Tooltip text="Download catalog">
              <button
                onClick={() => { navigate('/downloads'); setIsMenuOpen(false); }}
                className="px-3 flex py-2 font-medium rounded-full text-white transition duration-150 hover:opacity-90 cursor-pointer w-full md:w-auto"
                style={{ backgroundColor: customOrange }}
              >
                <DownloadCloudIcon className="w-5 h-5" />
              </button>
            </Tooltip>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;