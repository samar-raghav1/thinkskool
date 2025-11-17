
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate=useNavigate();
  // Define the custom orange color
  const customOrange = '#FF8C00';

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
          <Link to="/" className="hover:text-gray-900 transition duration-150">Home</Link>
          <Link to="/programs" className="hover:text-gray-900 transition duration-150">Programs</Link>
          <Link to="/feature" className="hover:text-gray-900 transition duration-150">Features</Link>
          <Link to="/course" className="hover:text-gray-900 transition duration-150">Courses</Link>
          <Link to="#" className="hover:text-gray-900 transition duration-150">Portal</Link>
          <Link to="/contact" className="hover:text-gray-900 transition duration-150">Contact</Link>
        </nav>
      </div>

      {/* Right Section: Auth Buttons */}
      <div className="flex items-center space-x-4">
       
        {/* Start for Free Button (Orange) */}
        <button onClick={()=>navigate('/role')}
          className="px-4 py-2 font-medium rounded-full text-white transition duration-150 hover:opacity-90 cursor-pointer"
          style={{ backgroundColor: customOrange }}
        >
          Start your journey
        </button>
      </div>
    </header>
  );
};

export default Navbar;