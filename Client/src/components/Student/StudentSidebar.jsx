import { BarChart, BookOpen, ClipboardCheck, Code, LayoutDashboard, Video, X } from "lucide-react";
import { useContext } from "react";
import { PortalContext } from "../Context/PortalProvider";
import { NavLink } from "./SharedComponentStudent";


const StudentSidebar = () => {
    const usePortal = () => useContext(PortalContext);
  const { user, role, currentView, setView, isSidebarOpen, setIsSidebarOpen } = usePortal();

  const studentLinks = [
    { icon: LayoutDashboard, title: 'Dashboard', view: 'Dashboard' },
    { icon: BookOpen, title: 'Classroom & Lessons', view: 'Classroom' },
    { icon: Code, title: 'Cloud Coding Lab', view: 'CodingLab' },
    { icon: Video, title: 'Recordings', view: 'Recordings' },
  ];

  const parentLinks = [
    { icon: LayoutDashboard, title: 'Dashboard', view: 'Dashboard' },
    { icon: BarChart, title: 'Progress Tracking', view: 'ProgressTracking' },
    { icon: ClipboardCheck, title: 'Performance Reports', view: 'PerformanceReport' },
  ];

  const links = role === 'student' ? studentLinks : parentLinks;

  return (
    <div className={`
      fixed inset-y-0 left-0 z-50 transform 
      ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
      md:translate-x-0 transition-transform duration-300 ease-in-out
      w-64 bg-white p-6 shadow-2xl md:shadow-xl flex flex-col justify-between
    `}>
      {/* Header */}
      <div className="flex flex-col">
        <div className="flex items-center justify-between mb-8">
          <div className="text-3xl font-extrabold flex items-center">
            <span className='text-[#007FFF]'>think</span> <span className='text-[#FF8C00]'>skool</span>
          </div>
          <button
            className="md:hidden p-2 text-gray-500 hover:text-gray-700 rounded-full"
            onClick={() => setIsSidebarOpen(false)}
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* User Info */}
        <div className="mb-8 p-3 bg-gray-50 rounded-lg">
          <p className="text-sm font-bold text-gray-800 truncate">{user?.name}</p>
          <p className="text-xs text-gray-500 capitalize">{role} Portal</p>
        </div>

        {/* Navigation Links */}
        <nav className="space-y-2">
          {links.map((link) => (
            <NavLink
              key={link.view}
              {...link}
              currentView={currentView}
              setView={setView}
            />
          ))}
        </nav>
      </div>

      {/* Footer is now just padding, as logout is removed */}
      <div className="pt-6 border-t border-gray-100">
        <p className="text-xs text-gray-400">Version 1.0. Role-based access demo.</p>
      </div>
    </div>
  );
};

export default StudentSidebar;