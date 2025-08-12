import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../src/pages/Home'
import NotFound from './pages/NotFound';
import AboutUs from './pages/AboutUs';
import Courses from './pages/Courses';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import CourseDetails from './pages/CourseDetails';

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <BrowserRouter>
        <Header />
        <main className="flex-1 container mx-auto px-4 py-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/course" element={<Courses />} />
            <Route path="/course/:id" element={<CourseDetails />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/priceing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}