import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ProgramsPage from './pages/ProgramsPage';
import CampusPage from './pages/CampusPage';
import VisionPage from './pages/VisionPage';
import ContactPage from './pages/ContactPage';
import ProgramDetail from './components/ProgramDetail';
import NotFound from './components/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="programs" element={<ProgramsPage />} />
        <Route path="campus" element={<CampusPage />} />
        <Route path="vision" element={<VisionPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="program/:id" element={<ProgramDetail />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
