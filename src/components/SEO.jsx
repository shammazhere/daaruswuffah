import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const siteUrl = 'https://www.as-swuffah.com';

const defaultSEO = {
  title: 'AS-SWUFFAH Islamic Academy',
  description:
    'Join a community dedicated to academic excellence and spiritual enrichment in the heart of Mangalore. Premier Islamic education since 2012.',
};

const seoMap = {
  '/': {
    title: 'AS-SWUFFAH Islamic Academy',
    description:
      'Join a community dedicated to academic excellence and spiritual enrichment in the heart of Mangalore. Premier Islamic education since 2012.',
  },
  '/about': {
    title: 'About Us | AS-SWUFFAH Islamic Academy',
    description:
      'Learn about AS-SWUFFAH Islamic Academy. Our mission, vision, and commitment to imparting knowledge and illuminating hearts in Mangalore.',
  },
  '/programs': {
    title: 'Programs | AS-SWUFFAH Islamic Academy',
    description:
      'Explore our diverse programs including Quran studies, Islamic sciences, and modern academic courses tailored for all ages.',
  },
  '/campus': {
    title: 'Campus Facilities | AS-SWUFFAH Islamic Academy',
    description:
      'Discover our state-of-the-art campus facilities designed to foster academic and spiritual growth.',
  },
  '/vision': {
    title: 'Vision & Roadmap | AS-SWUFFAH Islamic Academy',
    description:
      'Our vision for the future and the roadmap to achieving excellence in Islamic education.',
  },
  '/admissions': {
    title: 'Admissions | AS-SWUFFAH Islamic Academy',
    description:
      'Admission information for joining AS-SWUFFAH Islamic Academy. Apply now and start your journey.',
  },
  '/events': {
    title: 'Events & News | AS-SWUFFAH Islamic Academy',
    description:
      'Stay updated with the latest events, news, and happenings at AS-SWUFFAH.',
  },
  '/faqs': {
    title: 'FAQs | AS-SWUFFAH Islamic Academy',
    description:
      'Find answers to frequently asked questions about programs, admissions, and more.',
  },
  '/contact': {
    title: 'Contact Us | AS-SWUFFAH Islamic Academy',
    description:
      "We're here to answer authentically respond to inquiries and guide prospective students through their journey with AS-SWUFFAH.",
  },
};

const setOrCreateMeta = (selector, attribute, value, metaAttribute = 'property') => {
  let meta = document.querySelector(selector);
  if (!meta) {
    meta = document.createElement('meta');
    const attr = metaAttribute === 'name' ? 'name' : 'property';
    meta.setAttribute(attr, attribute);
    document.head.appendChild(meta);
  }
  meta.setAttribute(metaAttribute === 'name' ? 'name' : 'property', attribute);
  meta.setAttribute('content', value);
};

const setOrCreateLink = (rel, href) => {
  let link = document.querySelector(`link[rel="${rel}"]`);
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', rel);
    document.head.appendChild(link);
  }
  link.setAttribute('href', href);
};

const SEO = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const page = seoMap[pathname] || defaultSEO;

    // Title
    document.title = page.title;

    // Canonical
    setOrCreateLink('canonical', `${siteUrl}${pathname}`);

    // Meta description
    setOrCreateMeta(`meta[name="description"]`, 'description', page.description, 'name');

    // Open Graph
    setOrCreateMeta(`meta[property="og:title"]`, 'og:title', page.title);
    setOrCreateMeta(`meta[property="og:description"]`, 'og:description', page.description);
    setOrCreateMeta(`meta[property="og:url"]`, 'og:url', `${siteUrl}${pathname}`);
    setOrCreateMeta(`meta[property="og:type"]`, 'og:type', 'website');
    setOrCreateMeta(`meta[property="og:site_name"]`, 'og:site_name', 'AS-SWUFFAH Islamic Academy');
    setOrCreateMeta(`meta[property="og:image"]`, 'og:image', `${siteUrl}/favicon.png`);
    setOrCreateMeta(`meta[property="og:image:alt"]`, 'og:image:alt', 'AS-SWUFFAH Islamic Academy');

    // Twitter
    setOrCreateMeta(`meta[name="twitter:title"]`, 'twitter:title', page.title, 'name');
    setOrCreateMeta(`meta[name="twitter:description"]`, 'twitter:description', page.description, 'name');
    setOrCreateMeta(`meta[name="twitter:card"]`, 'twitter:card', 'summary_large_image', 'name');
    setOrCreateMeta(`meta[name="twitter:image"]`, 'twitter:image', `${siteUrl}/favicon.png`, 'name');

    // JSON-LD Structured Data
    let script = document.getElementById('json-ld-schema');
    if (!script) {
      script = document.createElement('script');
      script.id = 'json-ld-schema';
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'EducationalOrganization',
      name: 'AS-SWUFFAH Islamic Academy',
      url: siteUrl,
      logo: `${siteUrl}/favicon.svg`,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Mangalore',
        addressRegion: 'Karnataka',
        addressCountry: 'IN',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+91-8970402313',
        contactType: 'Admissions',
        email: 'info@as-swuffah.com',
      },
    });
  }, [pathname]);

  return null;
};

export default SEO;
