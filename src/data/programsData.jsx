import React from 'react';
import { BookOpen, Users, Star, TrendingUp, Heart, GraduationCap, Compass } from 'lucide-react';
import programNurture from '../assets/program_nurture_1769973836325.png';
import programBloom from '../assets/program_bloom_1769973856803.png';
import programSparkle from '../assets/program_sparkle_1769973875382.png';
import programThrive from '../assets/program_thrive_1769973893522.png';
import programEmpowher from '../assets/program_empowher_1769973930527.png';
import programValuePlus from '../assets/program_valueplus_1769973948913.png';

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
        id: 'bloom',
        name: 'BLOOM',
        category: 'Youth',
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
        category: 'Youth',
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
        category: 'Youth',
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
        image: programValuePlus
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
