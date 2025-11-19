import React, { useState, createContext, useContext } from 'react';
import {
  LogIn,
  LayoutDashboard,
  BookOpen,
  Code,
  Video,
  ListChecks,
  Users,
  BarChart,
  ClipboardCheck,
  Menu,
  X,
  User,
  LogOut,
  ChevronDown,
} from 'lucide-react';

// --- 1. CONTEXT FOR STATE MANAGEMENT (Simulates Global State) ---
const PortalContext = createContext();

const usePortal = () => useContext(PortalContext);

// --- 2. AUTHENTICATION & DATA SIMULATION ---

const MOCK_USERS = {
  // Default Credentials: 'student' role
  'student@school.com': { role: 'student', name: 'Alex Johnson', studentId: 'S1001' },
  // Default Credentials: 'parent' role
  'parent@school.com': { role: 'parent', name: 'Mr. David Johnson', studentName: 'Alex Johnson', studentId: 'S1001' },
};

// --- Initial User Setup ---


const MOCK_DATA = {
  lessons: [
    { id: 1, title: 'Introduction to Algorithms', status: 'Completed', link: '#', progress: 100 },
    { id: 2, title: 'React Hooks Deep Dive', status: 'In Progress', link: '#', progress: 65 },
    { id: 3, title: 'Database Normalization', status: 'Not Started', link: '#', progress: 0 },
  ],
  assignments: [
    { id: 101, title: 'Data Structures Quiz', dueDate: '2025-09-20', status: 'Graded (92%)' },
    { id: 102, title: 'Web Frameworks Project', dueDate: '2025-10-15', status: 'Pending Review' },
    { id: 103, title: 'Final Exam Preparation', dueDate: '2025-11-01', status: 'Drafting' },
  ],
  recordings: [
    { id: 201, title: 'Lecture 5: State Management', date: '2025-08-28', duration: '1:15:00' },
    { id: 202, title: 'Tutorial: Tailwind Styling', date: '2025-09-04', duration: '0:45:00' },
  ],
};

// --- 3. UI COMPONENTS ---


// --- Role Switcher Component ---
const RoleSwitcher = () => {
  const { role, switchRole } = usePortal();
  const targetRole = role === 'student' ? 'parent' : 'student';
  const targetIcon = role === 'student' ? Users : User;

  return (
    <button
      onClick={switchRole}
      className="flex items-center space-x-2 p-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150"
    >
      {React.createElement(targetIcon, { className: "w-4 h-4 text-blue-600" })}
      <span>Switch to **{targetRole.charAt(0).toUpperCase() + targetRole.slice(1)} View**</span>
    </button>
  );
};


// --- 4. NAVIGATION / LAYOUT COMPONENTS ---




const MainLayout = ({ children }) => {
  const { isSidebarOpen, setIsSidebarOpen, role } = usePortal();
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Backdrop for Mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black opacity-50 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* Main Content Area */}
      <div className="md:ml-64 transition-all duration-300">
        {/* Header/Navbar */}
        <header className="sticky top-0 z-30 bg-white shadow-sm border-b border-gray-100 p-4 md:p-6 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              className="md:hidden p-2 text-gray-700 rounded-full hover:bg-gray-100"
              onClick={() => setIsSidebarOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
            <h1 className="text-2xl font-bold text-gray-800">
              {usePortal().currentView.replace(/([A-Z])/g, ' $1').trim()}
            </h1>
          </div>

          <div className="flex items-center space-x-4">
            <RoleSwitcher /> {/* <-- Role Switcher Added Here */}
            <div className={`p-2 rounded-full ${role === 'student' ? 'bg-blue-100 text-blue-700' : 'bg-indigo-100 text-indigo-700'}`}>
                <User className="w-5 h-5" />
            </div>
            <span className="text-sm font-medium text-gray-700 hidden sm:inline">{usePortal().user?.name}</span>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-4 md:p-8">
          {children}
        </main>
      </div>
    </div>
  );
};


// --- 5. PAGE COMPONENTS (Student & Parent) ---

// ... (Page components remain the same for functionality)


const ClassroomPage = () => (
  <div className="space-y-8">
    <h2 className="text-3xl font-bold text-gray-800">My Classroom Resources</h2>

    {/* Lessons */}
    <Card title="Current Lessons">
      <div className="space-y-4">
        {MOCK_DATA.lessons.map(lesson => (
          <div key={lesson.id} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
            <div className="flex items-center space-x-3">
              <span className={`w-3 h-3 rounded-full ${lesson.status === 'Completed' ? 'bg-green-500' : lesson.status === 'In Progress' ? 'bg-yellow-500' : 'bg-red-500'}`}></span>
              <span className="font-medium text-gray-700">{lesson.title}</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-xs text-gray-500">{lesson.progress}%</span>
              <button className="text-sm text-blue-600 hover:underline">View</button>
            </div>
          </div>
        ))}
      </div>
    </Card>

    {/* Assignments */}
    <Card title="Assignments">
      <div className="space-y-4">
        {MOCK_DATA.assignments.map(assignment => (
          <div key={assignment.id} className="flex justify-between items-center p-3 border-b">
            <span className="font-medium text-gray-700">{assignment.title}</span>
            <span className={`text-sm font-semibold ${assignment.status.includes('Graded') ? 'text-green-600' : 'text-orange-500'}`}>{assignment.status}</span>
          </div>
        ))}
      </div>
    </Card>

    {/* Recordings - Duplicated for simplicity, will be in the dedicated view */}
    <Card title="Class Recordings (See dedicated view for full list)">
      <div className="space-y-4">
        {MOCK_DATA.recordings.slice(0, 1).map(rec => (
          <div key={rec.id} className="flex justify-between items-center p-3 bg-indigo-50 rounded-lg">
            <span className="font-medium text-indigo-800">{rec.title}</span>
            <span className="text-sm text-indigo-600">Play Recording</span>
          </div>
        ))}
      </div>
    </Card>
  </div>
);

const CodingLabPage = () => (
  <div className="space-y-6">
    <h2 className="text-3xl font-bold text-gray-800">Cloud-Based Coding Lab</h2>
    <div className="bg-green-50 p-6 rounded-xl border border-green-200">
      <p className="text-lg font-semibold text-green-800 flex items-center">
        <Code className="w-5 h-5 mr-2" /> Live Coding Environment
      </p>
      <p className="text-sm text-green-700 mt-2">
        This section represents a secure, cloud-based IDE for real-time coding and project work.
      </p>
    </div>
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 h-[60vh] flex items-center justify-center">
      <p className="text-gray-500 text-xl font-medium">
        [Simulated IDE Interface Here: Terminal, Editor, File Tree]
      </p>
    </div>
  </div>
);

const RecordingsPage = () => (
    <div className="space-y-6">
        <h2 className="text-3xl font-bold text-gray-800">Class Recordings Archive</h2>
        <p className="text-gray-600">Catch up on missed lectures and tutorials at your own pace.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MOCK_DATA.recordings.map((rec) => (
                <div key={rec.id} className="bg-white p-4 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition">
                    <div className="bg-gray-200 h-32 rounded-lg flex items-center justify-center mb-3">
                        <Video className="w-8 h-8 text-gray-500" />
                    </div>
                    <p className="font-semibold text-gray-800">{rec.title}</p>
                    <p className="text-sm text-gray-500">Date: {rec.date}</p>
                    <p className="text-xs text-gray-400">Duration: {rec.duration}</p>
                    <button className="mt-3 w-full p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                        Watch Now
                    </button>
                </div>
            ))}
        </div>
        <p className="text-center text-sm text-gray-500 mt-8">Recordings are available 24 hours after the live session.</p>
    </div>
);


// --- 5.2 Parent Pages ---

const ParentDashboard = () => {
  const { user } = usePortal();
  return (
    <div className="space-y-8">
      <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-200">
        <p className="text-sm font-semibold text-indigo-700">Hello, {user?.name}.</p>
        <h2 className="text-3xl font-extrabold text-indigo-900 mt-1">Tracking Progress for {user?.studentName}.</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card title="Recent Activity" className="col-span-2">
          <ul className="space-y-3 text-gray-700">
            <li className="flex justify-between items-center text-sm border-b pb-2">
              <span>Completed: "React Hooks Deep Dive" (65% to 100%)</span>
              <span className="text-xs text-green-600">2 hours ago</span>
            </li>
            <li className="flex justify-between items-center text-sm border-b pb-2">
              <span>Submitted: "Web Frameworks Project"</span>
              <span className="text-xs text-green-600">Yesterday</span>
            </li>
            <li className="flex justify-between items-center text-sm pb-2">
              <span>Scored 92% on Data Structures Quiz</span>
              <span className="text-xs text-green-600">3 days ago</span>
            </li>
          </ul>
        </Card>
        <Card title="Current Focus" className="col-span-1">
          <p className="text-lg font-semibold text-gray-800">Web Frameworks Project</p>
          <p className="text-sm text-gray-500 mt-1">Due: Oct 15 | Status: Pending Review</p>
          <button className="mt-4 text-sm text-indigo-600 hover:underline">View Full Report</button>
        </Card>
      </div>
    </div>
  );
};

const ProgressTrackingPage = () => (
  <div className="space-y-8">
    <h2 className="text-3xl font-bold text-gray-800">Student Progress Tracking</h2>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <Card title="Module Completion" className="flex flex-col items-center">
        <ProgressRing percentage={75} color="text-teal-500" />
        <p className="mt-3 text-sm text-gray-600">3 out of 4 modules fully started.</p>
      </Card>
      <Card title="Average Assignment Score" className="flex flex-col items-center">
        <span className="text-5xl font-extrabold text-blue-600">88%</span>
        <p className="mt-2 text-sm text-gray-600">Based on 5 graded assignments.</p>
      </Card>
      <Card title="Time Spent (Last Week)" className="flex flex-col items-center">
        <span className="text-5xl font-extrabold text-green-600">12 hrs</span>
        <p className="mt-2 text-sm text-gray-600">4 hours in coding lab.</p>
      </Card>
    </div>

    <Card title="Detailed Progress Overview">
      <p className="text-sm text-gray-600 mb-4">A simple chart representation of progress.</p>
      <div className="h-64 bg-gray-50 border rounded-lg flex items-center justify-center">
        <p className="text-gray-400">Placeholder for Recharts Bar/Line Graph </p>
      </div>
    </Card>
  </div>
);

const PerformanceReportPage = () => (
  <div className="space-y-8">
    <h2 className="text-3xl font-bold text-gray-800">Detailed Performance Reports</h2>
    <p className="text-gray-600">View in-depth analysis of scores, participation, and skill mastery.</p>

    <Card title="Skill Breakdown (Q3)">
      <ul className="space-y-3">
        {['Algorithms', 'Debugging', 'JavaScript', 'Database'].map((skill, index) => (
          <li key={skill} className="flex justify-between items-center">
            <span className="text-gray-700 font-medium">{skill}</span>
            <div className="w-1/2 bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-blue-600 h-2.5 rounded-full"
                style={{ width: `${95 - index * 10}%` }}
              ></div>
            </div>
            <span className="text-sm font-semibold text-blue-700">{95 - index * 10}%</span>
          </li>
        ))}
      </ul>
    </Card>

    <Card title="Historical Score Trends">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Assessment</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Score</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Average</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Comments</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Module 1 Quiz</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600 font-bold">95%</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">88%</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Excellent attention to detail.</td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Project Alpha</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-yellow-600 font-bold">82%</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">85%</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Needs improvement in documentation.</td>
          </tr>
        </tbody>
      </table>
    </Card>
  </div>
);


// --- 7. MAIN APP STRUCTURE AND LOGIC ---

// Helper function to render the correct page based on the current view state





const App = () => {
  return (
    <MainLayout>
      {renderPage(usePortal().currentView, usePortal().role)}
    </MainLayout>
  );
};

// Default export wrapper to include context provider

