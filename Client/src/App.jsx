import React from 'react';
import { Route, Routes } from 'react-router-dom';

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

// --- Home Page Component ---
// This component groups all your static marketing content.
const HomePage = () => (
  <>
   <Navbar />
    <div className='-mt-14'>
      <Hero />
    </div>
    <About />
    <Marque />
    <Feature />
  </>
);

const App = () => {
  return (
    <div>
   
     

      <Routes>
        
        <Route path='/' element={<HomePage />} /> 

       
        <Route path='/role' element={<ChooseRole />} />
        <Route path='/student' element={<StuDashboard />} />
        <Route path='/mentor' element={<MentorDashboard />} />
        <Route path='/school-admin' element={<SchoolAdminPage />} />
        
       
        <Route path='/student-doubt' element={<StuDoubtSupport />} />
        <Route path='/student-assignment' element={<StuAssignmentView />} />
        
      </Routes>

     
      <Footer />
    </div>
  );
};

export default App;