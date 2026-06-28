import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const titles = {
  '/': 'AS-SWUFFAH Islamic Academy',
  '/about': 'About Us | AS-SWUFFAH Islamic Academy',
  '/programs': 'Programs | AS-SWUFFAH Islamic Academy',
  '/campus': 'Campus Facilities | AS-SWUFFAH Islamic Academy',
  '/vision': 'Vision & Roadmap | AS-SWUFFAH Islamic Academy',
  '/admissions': 'Admissions | AS-SWUFFAH Islamic Academy',
  '/faculty': 'Faculty & Scholars | AS-SWUFFAH Islamic Academy',
  '/gallery': 'Gallery | AS-SWUFFAH Islamic Academy',
  '/events': 'Events & News | AS-SWUFFAH Islamic Academy',
  '/faqs': 'FAQs | AS-SWUFFAH Islamic Academy',
  '/contact': 'Contact Us | AS-SWUFFAH Islamic Academy',
};

const PageTitle = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const base = titles[pathname];
    if (base) {
      document.title = base;
    }
  }, [pathname]);

  return null;
};

export default PageTitle;