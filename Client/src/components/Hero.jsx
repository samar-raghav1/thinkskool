import React from 'react';
import { useNavigate } from 'react-router-dom';

// Mock data for the user profile images and rating


const Hero = () => {
  const navigate=useNavigate();
  // Define the new custom orange color
  const customOrange = '#FF8C00';

  return (
    <main className="flex flex-col items-center justify-center text-center mt-20 sm:mt-32 lg:mt-40 px-4">
      
      {/* Headline */}
      <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold max-w-4xl leading-tight mb-6">
         Transform Education with <span className="text-[#007FFF]">think</span><span className='text-[#FF8C00]'>skool</span>
       
      </h1>

      {/* Sub-headline */}
      <p className="text-xs sm:text-xl text-gray-600 mb-10 max-w-xl">
        Empowering the next generation with cutting-edge technology skills, real-world projects, and industry mentorship. Join 10,000+ students who are building tomorrow's innovations today.
      </p>

      {/* Primary Action Button */}
      <button  onClick={()=>navigate('/role')}
        className="px-10 py-4 text-xl font-semibold text-white rounded-full shadow-lg transform transition duration-300 hover:scale-[1.03]"
        style={{ 
          backgroundColor: customOrange, // Main button color set to customOrange
          boxShadow: `0 4px 14px 0 rgba(255, 140, 0, 0.4)` // Optional shadow effect
        }}
      >
        Start your journey
      </button>

    

      {/* Social Proof/Rating */}
      <div className="mt-16 flex flex-col items-center">
        
        {/* User Images Stack */}
       
        
        {/* Star Rating */}
      </div>
    </main>
  );
};

export default Hero;