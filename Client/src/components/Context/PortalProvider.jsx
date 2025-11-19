import { createContext, useState } from "react";
import { MOCK_USERS } from "../../assets/mockData";

 export const PortalContext = createContext();
 
export const PortalProvider = ({ children }) => {
    const DEFAULT_STUDENT_USER = MOCK_USERS['student@school.com'];
const DEFAULT_PARENT_USER = MOCK_USERS['parent@school.com'];
  // Initialize with Student as default user
  const [user, setUser] = useState(DEFAULT_STUDENT_USER);
  const [role, setRole] = useState(DEFAULT_STUDENT_USER.role);
  const [currentView, setCurrentView] = useState('Dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);


  const switchRole = () => {
    const newRole = role === 'student' ? 'parent' : 'student';
    
    if (newRole === 'parent') {
        setUser(DEFAULT_PARENT_USER);
    } else {
        setUser(DEFAULT_STUDENT_USER);
    }
    
    setRole(newRole);
    setCurrentView('Dashboard'); // Reset view to Dashboard on role switch
    setIsSidebarOpen(false);
  };

  const setView = (view) => {
    setCurrentView(view);
    setIsSidebarOpen(false); // Close sidebar on mobile after navigation
  };

  const contextValue = {
    user,
    role,
    currentView,
    isSidebarOpen,
    switchRole, // Expose switchRole
    setView,
    setIsSidebarOpen,
  };

  return (
    <PortalContext.Provider value={contextValue}>
      {children}
    </PortalContext.Provider>
  );
};

