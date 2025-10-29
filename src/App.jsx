import React from 'react';
import Hero from './components/Hero';
import Form from './components/Form';
import Highlights from './components/Highlights';
import FAQ from './components/FAQ';
import Courses from './components/Courses';
import PlacementPartners from './components/Placementpartners';
import Footer from './components/Footer';
import StudentLife from './components/Studentslife';
import AlumniPlacements from './components/AllumniPlacements';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Hero/>
        <Form/>
        <Highlights />
        <Courses/>
        <AlumniPlacements/>
        <PlacementPartners/>
        <StudentLife/>
        <FAQ />
        <Footer/>
    
    </div>
  )
}

export default App;
