/* eslint-disable no-unused-vars */
import React, { useMemo, useState} from 'react';
import { Book, Folder, CheckCircle, TrendingUp, Users, Settings, LogOut, ArrowRight, X, Menu, Sidebar } from 'lucide-react';
import AssignmentManagement from '../../components/Mentor/AssignmentManagement';
import Evaluation from '../../components/Mentor/Evaluation';
import StudentProgress from '../../components/Mentor/StudentProgress';
import MentorSidebar from '../../components/Mentor/MentorSidebar';
import ClassContent from '../../components/Mentor/ClassContent';
import {motion, AnimatePresence } from 'framer-motion';

import MentorNavbar from '../../components/Mentor/MentorNavbar';




const MentorDashboard=()=> {
  const [activeFeature, setActiveFeature] = useState('content');
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
   const navItems = useMemo(() => [
    { id: 'content', name: 'Content', icon: Book, component: ClassContent  },
    { id: 'assignment', name: 'Assignments', icon: Folder, component: AssignmentManagement },
    { id: 'evaluation', name: 'Evaluation', icon: CheckCircle, component: Evaluation },
    { id: 'progress', name: 'Student Progress', icon: TrendingUp, component:StudentProgress }
  ], []);
 const ActiveComponent = navItems.find(item => item.id === activeFeature)?.component;

  return (
  <div>
    <MentorNavbar setIsSidebarOpen={setIsSidebarOpen} isSidebarOpen={isSidebarOpen} />
      <div className="flex h-screen bg-white  font-sans">
      
      
      {/* Sidebar */}
      <MentorSidebar
        isOpen={isSidebarOpen} 
        setOpen={setIsSidebarOpen}
        navItems={navItems}
        activeFeature={activeFeature}
        setActiveFeature={setActiveFeature}
      />
      
      {/* Main Content Area */}
       <main className="flex-1 p-6 sm:p-8 overflow-y-auto">
       
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFeature}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="max-w-7xl mx-auto "
            >
              {ActiveComponent && <ActiveComponent />}
            </motion.div>
          </AnimatePresence>
        </main>
    </div>
  </div>
  );
}

export default MentorDashboard;