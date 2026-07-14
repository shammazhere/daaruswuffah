import React from 'react';
import { BookOpen, Users, Star, TrendingUp, Heart, GraduationCap, Compass } from 'lucide-react';
const programNurture = new URL('../assets/nurture.webp', import.meta.url).href;
const programHifz = new URL('../assets/hifzul-quran.webp', import.meta.url).href;
const programBloom = new URL('../assets/bloom.webp', import.meta.url).href;
const programSparkle = new URL('../assets/sparkle.webp', import.meta.url).href;
const programThrive = new URL('../assets/thrive.webp', import.meta.url).href;
const programNavigate = new URL('../assets/navigate.webp', import.meta.url).href;
const programEmpowher = new URL('../assets/empower.webp', import.meta.url).href;
const programValuePlus = new URL('../assets/value+.webp', import.meta.url).href;

export const programsData = [
    {
        id: 'nurture',
        name: 'NURTURE',
        category: 'Kids',
        tagline: 'Standards 1 to 8 Flagship Program',
        description: 'A comprehensive foundational program designed for children in standards 1 through 8. We focus on holistic development, combining academic excellence with moral and spiritual growth.',
        features: ['Personalized Attention', 'Islamic Values Integration', 'Activity-Based Learning', 'Character Building'],
        targetAudience: 'Children (Std 1-8)',
        iconName: 'Heart',
        image: programNurture
    },
    {
        id: 'hifzul-quran',
        name: 'HIFZUL QURAN',
        category: 'Kids',
        tagline: 'Quran Memorization for Young Hearts',
        description: 'A structured and supportive program for children to memorize the Holy Quran with correct Tajweed rules, fostering a deep, lifelong connection to the word of Allah.',
        features: ['Tajweed Rules Mastery', 'Progressive Memorization Tracker', 'One-on-One Guided Recitation', 'Spiritual and Moral Insights'],
        targetAudience: 'Children (Age 7-15)',
        iconName: 'BookOpen',
        image: programHifz
    },
    {
        id: 'bloom',
        name: 'BLOOM',
        category: 'Ladies',
        tagline: 'Teenage Girls Diploma Course',
        description: 'An empowering diploma course tailored for teenage girls, focusing on self-discovery, religious understanding, and life skills to navigate the modern world with confidence and faith.',
        features: ['Fiqh for Women', 'Personal Development', 'Creative Skills', 'Mentorship'],
        targetAudience: 'Teenage Girls',
        iconName: 'TrendingUp',
        image: programBloom
    },
    {
        id: 'sparkle',
        name: 'SPARKLE',
        category: 'Ladies',
        tagline: 'Women\'s Research Diploma',
        description: 'An advanced research-oriented diploma for women who wish to deepen their understanding of Islamic sciences and contemporary issues.',
        features: ['Research Methodology', 'Advanced Islamic Studies', 'Community Leadership', 'Thesis Project'],
        targetAudience: 'Women',
        iconName: 'Star',
        image: programSparkle
    },
    {
        id: 'thrive',
        name: 'THRIVE',
        category: 'Gents',
        tagline: 'Teenage Boys Specialized Diploma',
        description: 'A dynamic program for teenage boys designed to channel their energy into productive avenues, instilling discipline, leadership, and diverse knowledge.',
        features: ['Leadership Training', 'Physical Fitness', 'Islamic Jurisprudence', 'Career Guidance'],
        targetAudience: 'Teenage Boys',
        iconName: 'Users',
        image: programThrive
    },
    {
        id: 'empowher',
        name: 'EMPOWHER',
        category: 'Ladies',
        tagline: 'Women\'s Foundational Course',
        description: 'Key foundational course giving women the essential tools to manage family, society, and self-growth through an Islamic perspective.',
        features: ['Family Counselling', 'Spiritual Wellness', 'Basic Fiqh', 'Social Skills'],
        targetAudience: 'Women',
        iconName: 'GraduationCap',
        image: programEmpowher
    },
    {
        id: 'value-plus',
        name: 'VALUE+',
        category: 'Ladies',
        tagline: 'Integrated PUC with Sharee\'ath',
        description: 'A dual-education model offering Pre-University Course (PUC) alongside in-depth Sharee\'ath studies, preparing students for both professional and religious success.',
        features: ['State Syllabus PUC', 'Classical Islamic Texts', 'Language Mastery', 'Holistic Evaluation'],
        targetAudience: 'Post-SSLC Female Students',
        iconName: 'BookOpen',
        image: programValuePlus
    },
    {
        id: 'navigate',
        name: 'NAVIGATE',
        category: 'Gents',
        tagline: 'Daily Youth Reflection Platform',
        description: 'A daily engagement platform for youth to reflect, discuss, and find guidance on contemporary challenges through the lens of Islam.',
        features: ['Daily Discussions', 'Q&A Sessions', 'Mentorship', 'Community Projects'],
        targetAudience: 'Youth - Any Age',
        iconName: 'Compass',
        image: programNavigate
    },
];

export const getIcon = (iconName) => {
    switch (iconName) {
        case 'Heart': return <Heart size={32} />;
        case 'TrendingUp': return <TrendingUp size={32} />;
        case 'Star': return <Star size={32} />;
        case 'Users': return <Users size={32} />;
        case 'GraduationCap': return <GraduationCap size={32} />;
        case 'BookOpen': return <BookOpen size={32} />;
        case 'Compass': return <Compass size={32} />;
        default: return <BookOpen size={32} />;
    }
};
