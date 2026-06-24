import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import LoadingSpinner from './components/LoadingSpinner';

const Home = lazy(() => import('./pages/Home'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ProgramsPage = lazy(() => import('./pages/ProgramsPage'));
const CampusPage = lazy(() => import('./pages/CampusPage'));
const VisionPage = lazy(() => import('./pages/VisionPage'));
const AdmissionsPage = lazy(() => import('./pages/AdmissionsPage'));
const FacultyPage = lazy(() => import('./pages/FacultyPage'));
const GalleryPage = lazy(() => import('./pages/GalleryPage'));
const EventsPage = lazy(() => import('./pages/EventsPage'));
const FAQsPage = lazy(() => import('./pages/FAQsPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const ProgramDetail = lazy(() => import('./components/ProgramDetail'));
const NotFound = lazy(() => import('./components/NotFound'));

function App() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="programs" element={<ProgramsPage />} />
          <Route path="campus" element={<CampusPage />} />
          <Route path="vision" element={<VisionPage />} />
          <Route path="admissions" element={<AdmissionsPage />} />
          <Route path="faculty" element={<FacultyPage />} />
          <Route path="gallery" element={<GalleryPage />} />
          <Route path="events" element={<EventsPage />} />
          <Route path="faqs" element={<FAQsPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="program/:id" element={<ProgramDetail />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
