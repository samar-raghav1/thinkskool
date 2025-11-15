/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { LogIn, User, BookOpen, Shield, ChevronLeft, CheckCircle, LogOut, X, LogOutIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for the exit button

// --- Brand and Primary Colors ---
// Define the primary color (0066cc) for consistency in classes where hex is needed
const PRIMARY_COLOR = 'text-[#0066cc]';
const PRIMARY_BG = 'bg-[#0066cc]';
const LOGO_BLUE = '#007FFF'; // think color
const LOGO_ORANGE = '#FF8C00'; // skool color

// --- Animated Form Components ---

const RoleForm = ({ role, icon: Icon, onLogin, fields, title }) => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userId || !password) return;

    setIsSubmitting(true);
    
    // Simulate API call delay
    setTimeout(() => {
      // In a real ChooseRole, verify credentials here
      if (userId === 'admin' && password === 'admin') {
        onLogin(role);
      } else {
        // Use console.error or a custom toast/modal instead of alert()
        console.error('Login failed. Use "admin/admin" to test, or fill both fields.');
      }
      setIsSubmitting(false);
    }, 1000);
  };

  return (
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
        <Icon className={`${PRIMARY_COLOR} w-6 h-6`} />
        <h3 className={`text-xl font-bold ${PRIMARY_COLOR}`}>{title} Login</h3>
      </div>
      
      <input
        type="text"
        placeholder={fields[0]}
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        required
        className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] transition-all duration-300"
      />
      <input
        type="password"
        placeholder={fields[1]}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] transition-all duration-300"
      />
      
      <button 
        type="submit" 
        disabled={!userId || !password || isSubmitting}
        className={`flex items-center justify-center gap-2 p-3 font-semibold text-white rounded-lg transition-all duration-300 
          ${(!userId || !password || isSubmitting) ? 'bg-gray-400 cursor-not-allowed' : `${PRIMARY_BG} hover:shadow-xl hover:scale-[1.02]`}
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
          <><LogIn className="w-5 h-5" /> Log In as {role}</>
        )}
      </button>
    </form>
  );
};

// --- Dashboard Component ---

const Dashboard = ({ role, onLogout }) => {
  return (
    <div 
      className="flex flex-col items-center justify-center p-8 bg-white text-center rounded-xl shadow-2xl w-full max-w-md mx-auto transition-all duration-700 ease-out"
      style={{
           animation: 'dashboard-fade-in 0.6s ease-out forwards'
      }}
    >
        <style jsx="true">{`
             @keyframes dashboard-fade-in {
                 from { opacity: 0; transform: translateY(-20px); }
                 to { opacity: 1; transform: translateY(0); }
             }
        `}</style>
      <CheckCircle className="w-16 h-16 text-green-500 mb-4 animate-bounce-slow" />
      <h1 className="text-3xl font-extrabold text-gray-800 mb-2">Success!</h1>
      <p className="text-xl text-gray-600 mb-6">Welcome to the <span className={`font-bold ${PRIMARY_COLOR}`}>{role}</span> Dashboard.</p>
      
      <button 
        onClick={onLogout}
        className="flex items-center gap-2 px-6 py-3 bg-red-500 text-white font-semibold rounded-full shadow-lg hover:bg-red-600 transition duration-300 hover:scale-[1.05]"
      >
        <LogOut className="w-5 h-5" /> Logout
      </button>
    </div>
  );
};

// --- Main ChooseRole Component ---

const rolesConfig = {
  Student: { icon: User, fields: ['Student ID', 'Password'] },
  Mentor: { icon: BookOpen, fields: ['Mentor ID', 'Password'] },
  SchoolAdmin: { icon: Shield, fields: ['Admin ID', 'Password'] },
};

const ChooseRole = () => {
  const navigate = useNavigate(); // Initialize navigate hook
  const [selectedRole, setSelectedRole] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState(null);
  const [animationKey, setAnimationKey] = useState(0);

  const handleLoginSuccess = (role) => {
    setUserRole(role);
    setIsLoggedIn(true);
    setAnimationKey(prev => prev + 1);
  };
  
  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserRole(null);
    setSelectedRole(null);
    setAnimationKey(prev => prev + 1);
  };

  const handleRoleSelect = (role) => {
      setSelectedRole(role);
      setAnimationKey(prev => prev + 1);
  }
  
  // New function to handle exit navigation
  const handleExit = () => {
    navigate('/');
  };

  // --- Render Logic ---
  
  if (isLoggedIn) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center p-4">
        <Dashboard role={userRole} onLogout={handleLogout} key={animationKey} />
      </div>
    );
  }
  
  let content;
  
  if (selectedRole) {
    const config = rolesConfig[selectedRole];
    content = (
      <>
        <div className="mb-4">
            <button
                onClick={() => handleRoleSelect(null)}
                className={`flex items-center gap-2 text-gray-600 hover:${PRIMARY_COLOR} transition duration-300 text-sm mb-4`}
            >
              <ChevronLeft className="w-4 h-4" /> Change Role
            </button>
        </div>
        <RoleForm 
          role={selectedRole}
          icon={config.icon}
          onLogin={handleLoginSuccess}
          fields={config.fields}
          title={selectedRole === 'SchoolAdmin' ? 'Admin' : selectedRole}
        />
      </>
    );
  } else {
    // Role selection grid
    content = (
      <div 
        className="flex flex-col items-center transition-all duration-700 ease-in-out"
        style={{ animation: 'card-fade-in 0.5s ease-out forwards' }}
      >
        <style jsx="true">{`
             @keyframes card-fade-in {
                 from { opacity: 0; transform: translateY(10px); }
                 to { opacity: 1; transform: translateY(0); }
             }
        `}</style>
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">Identify yourself as...</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {Object.keys(rolesConfig).map(role => {
            const config = rolesConfig[role];
            return (
              <button
                key={role}
                onClick={() => handleRoleSelect(role)}
                className={`
                  flex flex-col items-center justify-center p-6 space-y-3 rounded-xl border-2 border-gray-100 bg-white
                  shadow-md hover:shadow-xl hover:border-[#0066cc]
                  transition-all duration-300 ease-in-out transform hover:scale-[1.03]
                  group
                `}
              >
                <config.icon className={`w-8 h-8 text-gray-500 group-hover:${PRIMARY_COLOR} transition-colors duration-300`} />
                <span className={`text-lg font-medium text-gray-800 group-hover:${PRIMARY_COLOR} transition-colors duration-300`}>{role}</span>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div 
        className="w-full max-w-lg p-6 md:p-10 bg-white rounded-2xl shadow-2xl shadow-gray-600 border-gray-900 border-2"
        key={animationKey} 
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
                className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-gray-600 bg-gray-100 rounded-full hover:bg-red-100 hover:text-red-600 transition duration-300"
                aria-label="Exit to Home Page"
            >
                <LogOutIcon/>
            </button>
        </header>
        
        {content}
      </div>
    </div>
  );
};

export default ChooseRole;