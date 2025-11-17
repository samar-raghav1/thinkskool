import React, { useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom'; // Import useLocation

// Layout Components (Always visible or shared)
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Static Marketing Page Components (Should only be visible on the Home route)
import Hero from './components/Hero';
import About from './components/About';
import Marque from './components/Marque';
import Feature from './components/Feature'; 

// Page Components
import StuDashboard from './pages/Student/StuDashboard.jsx';
import MentorDashboard from './pages/Mentor/MentorDashboard.jsx';
import SchoolAdminPage from './pages/School/SchoolAdminPage.jsx';
import ChooseRole from './components/ChooseRole.jsx';
import StuDoubtSupport from './components/Student/StuDoubtSupport.jsx';
import StuAssignmentView from './components/Student/StuAssignmentView.jsx';
import DetailedProgram from './components/DetailedProgram.jsx';
import Contact from './components/Contact.jsx';
import Course from './components/Course.jsx';
import AdminLoginPage from './pages/School/AdminLoginPage.jsx';
import StudentLoginPage from './pages/Student/StudentLoginPage.jsx';
import MentorLoginPage from './pages/Mentor/MentorLoginPage.jsx';


// --- Home Page Component ---
const HomePage = () => (
    <>
      <div className='-mt-14'>
        <Hero />
      </div>
      <About />
      <Marque />
      <Feature />
      <DetailedProgram/>
    </>
);

const App = () => {
    // 1. Get the current path
    const location = useLocation();

    const ChangeTheme=()=>{
        
    }
    
    // 2. Define the paths where Navbar/Footer should be hidden
    const hideLayoutOnPaths = [
        '/role', 
        '/student', 
        '/mentor', 
        '/school-admin',
        // You might want to hide the layout on sub-pages within the dashboard too:
        '/student-doubt', 
        '/student-assignment',
        '/admin/login',
        '/student/login',
        '/mentor/login'
    ];
    
    // 3. Check if the current path is in the hidden list
    // This returns true if the current path matches any path in the hideLayoutOnPaths array
    const shouldHideLayout = hideLayoutOnPaths.includes(location.pathname);


    return (
        <div>
            {/* Conditional Navbar Rendering */}
            {!shouldHideLayout && <Navbar />}

            {/* Main Routes */}
            <Routes>
                {/* Marketing Pages */}
                <Route path='/' element={<HomePage />} /> 
                <Route path='/programs' element={<DetailedProgram />} />
                <Route path='/contact' element={<Contact/>}/> 
                <Route path='/course' element={<Course/>}/> 
                <Route path='/feature' element={<Feature/>}/>

                {/* Authentication & Dashboard Routes (Hidden Layout) */}
                <Route path='/role' element={<ChooseRole />} />
                <Route path='/student' element={<StuDashboard />} />
                <Route path='/mentor' element={<MentorDashboard />} />
                <Route path='/school-admin' element={<SchoolAdminPage />} />
                
                {/* Student Dashboard Sub-routes (Hidden Layout) */}
                <Route path='/student-doubt' element={<StuDoubtSupport />} />
                <Route path='/student-assignment' element={<StuAssignmentView />} />


                {/*Login*/}
                <Route path='/admin/login' element={<AdminLoginPage/>}/>
                <Route path='/student/login' element={<StudentLoginPage/>}/>
                <Route path='/mentor/login' element={<MentorLoginPage/>}/>
            </Routes>
            
            {/* Conditional Footer Rendering */}
            {!shouldHideLayout && <Footer />}
        </div>
    );
};

// IMPORTANT: useLocation must be used inside a component wrapped by <BrowserRouter>
// Since App.jsx is usually wrapped in <BrowserRouter> in index.js, this is fine.
export default App;