import {  LogIn, LogOutIcon, User } from 'lucide-react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PRIMARY_COLOR = 'text-[#0066cc]';
const PRIMARY_BG = 'bg-[#0066cc]';
const LOGO_BLUE = '#007FFF'; // think color
const LOGO_ORANGE = '#FF8C00'; // skool color

const StudentLoginPage = () => {
    // Define the primary color (0066cc) for consistency in classes where hex is needed

  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [adminId, setAdminId] = useState('');

   const navigate=useNavigate();

   const handleExit = () => {
    navigate('/role');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!adminId || !password) return;

    setIsSubmitting(true);
    
    // Simulate API call delay
    setTimeout(() => {
      // In a real ChooseRole, verify credentials here
      if (adminId === 'student' && password === 'student') {
       navigate("/student")
      } else {
        // Use console.error or a custom toast/modal instead of alert()
        console.error('Login failed. Use "admin/admin" to test, or fill both fields.');
      }
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div 
        className="w-full max-w-lg p-6 md:p-10 bg-white rounded-2xl shadow-2xl shadow-gray-600 border-gray-900 border-2"
         
      >
        {/* --- Enhanced Header --- */}
        <header className="flex justify-between items-center mb-6 pb-4 border-b border-gray-200">
            {/* Logo */}
            <div className="text-2xl font-extrabold cursor-pointer" onClick={handleExit}>
                <span style={{ color: LOGO_BLUE }}>think</span>
                <span style={{ color: LOGO_ORANGE }}>skool</span>
            </div>
            
            {/* Exit Button */}
            <button
                onClick={handleExit}
                className="flex items-center gap-2 px-4 py-2 text-sm font-semibold cursor-pointer text-gray-600 bg-gray-100 rounded-full hover:bg-red-100 hover:text-red-600 transition duration-300"
                aria-label="Exit to Home Page"
            >
                <LogOutIcon/>
            </button>
        </header>
         <form 
      onSubmit={handleSubmit} 
      className="flex flex-col gap-4 p-6 bg-white rounded-xl shadow-lg transition-all duration-700 ease-in-out transform scale-100 opacity-100"
      style={{
           animation: 'form-slide-in 0.5s ease-out forwards'
      }}
    >
      {/* Inline CSS for component-specific animations (if not using Framer Motion) */}
        <style jsx="true">{`
             @keyframes form-slide-in {
                 from { opacity: 0; transform: translateY(20px); }
                 to { opacity: 1; transform: translateY(0); }
             }
        `}</style>
      <div className="flex items-center justify-center space-x-3 pb-2 border-b border-gray-100">
        <User className={`${PRIMARY_COLOR} w-6 h-6`} />
        <h3 className={`text-xl font-bold ${PRIMARY_COLOR}`}>Student Login</h3>
      </div>
      
      <input
        type="text"
        placeholder="Enter Id"
        value={adminId}
        onChange={(e) => setAdminId(e.target.value)}
        required
        className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] transition-all duration-300"
      />
      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] transition-all duration-300"
      />
      
      <button 
        type="submit" 
        disabled={!adminId || !password || isSubmitting}
        className={`flex items-center justify-center gap-2 p-3 font-semibold text-white rounded-lg transition-all duration-300 
          ${(!adminId || !password || isSubmitting) ? 'bg-gray-400 cursor-not-allowed' : `${PRIMARY_BG} hover:shadow-xl hover:scale-[1.02]`}
        `}
      >
        {isSubmitting ? (
          <>
            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Logging in...
          </>
        ) : (
          <><LogIn className="w-5 h-5" /> Log In as Student</>
        )}
      </button>
    </form>
  
      </div>
    </div>
  );
};

export default StudentLoginPage;