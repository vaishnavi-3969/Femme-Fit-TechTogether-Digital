import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { motion } from 'framer-motion';
import { FiLogOut, FiSun, FiMoon, FiArrowRightCircle, FiHeart, FiBook, FiUsers, FiEdit, FiGlobe, FiInfo, FiCalendar, FiTool } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';

const Home = () => {
    const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();
    const [darkMode, setDarkMode] = useState(false);

    const features = [
        {
            title: 'Cycle Tracking & Reminders',
            description:
                'Log menstrual cycle details, predict future periods, fertile windows, and set reminders.',
            path: '/cycle-tracking',
            icon: FiCalendar,
        },
        {
            title: 'Health & Mood Insights',
            description:
                'Display personalized health dashboard, visualize mood patterns, and provide insights.',
            path: '/health-insights',
            icon: FiHeart,
        },
        {
            title: 'Symptom & Wellness Tracking',
            description:
                'Track physical and emotional symptoms, integrate stress, sleep, nutrition, and exercise tracking.',
            path: '/symptom-tracking',
            icon: FiEdit,
        },
        {
            title: 'Educational Resources',
            description:
                'Offer hormonal health education, provide informative articles and videos.',
            path: '/educational-resources',
            icon: FiBook,
        },
        {
            title: 'Community & Support',
            description:
                'Enable community interaction, allow users to ask health-related questions.',
            path: '/community-support',
            icon: FiUsers,
        },
        {
            title: 'Personal Journal',
            description:
                'Maintain a diary for emotions and thoughts.',
            path: '/personal-journal',
            icon: FiEdit,
        },
        {
            title: 'Repro Mart',
            description:
                'Buy sustainable products to take care of you and environment',
            path: '/repro-mart',
            icon: FiEdit,
        },
        {
            title: 'Menopause & Pregnancy Tools',
            description:
                'Offer tools for tracking menopause symptoms and pregnancy-related milestones.',
            path: '/menopause-pregnancy-tools',
            icon: FiTool,
        },
    ];

    const darkModeStyle = 'bg-gradient-to-br from-purple-900 to-pink-700 text-red-500';
    const lightModeStyle = 'bg-gradient-to-br from-orange-500 to-pink-300 text-gray-900';

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div className='p-10 bg-gray-800 min-h-screen py-10'>
            <div className='rounded-3xl overflow-hidden'>
                <div className={darkMode ? darkModeStyle : lightModeStyle + ' '}>
                    <div className="max-w-6xl mx-auto p-4">
                        <div className="flex justify-between items-center mb-4">
                            <div>
                                {isAuthenticated && (
                                    <button
                                        onClick={() => logout({ returnTo: window.location.origin })}
                                        className="text-white hover:text-gray-300 focus:outline-none mr-4"
                                    >
                                        <FiLogOut size={24} />
                                    </button>
                                )}
                            </div>
                            <div>
                                <button
                                    className="text-white hover:text-gray-300 focus:outline-none"
                                    onClick={toggleDarkMode}
                                >
                                    {darkMode ? <FiSun size={24} /> : <FiMoon size={24} />}
                                </button>
                            </div>
                        </div>
                        {isAuthenticated ? (
                            <div className="flex flex-wrap gap-4 md:gap-6">
                                <h2 className="text-xl font-semibold mb-4 w-full">Welcome, {user.name}!</h2>
                                {features.map((feature, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: -20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.2 }}
                                        className="w-full sm:w-1/2 md:w-1/3"
                                    >
                                        <Link to={feature.path}>
                                            <div className="bg-white rounded-lg shadow p-6 h-full hover:shadow-lg transition-shadow cursor-pointer">
                                                <div className="flex items-center mb-2">
                                                    <feature.icon size={24} className="mr-2 text-blue-500" />
                                                    <h3 className="text-lg font-semibold">{feature.title}</h3>
                                                </div>
                                                <p className="text-gray-600">{feature.description}</p>
                                            </div>
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>
                        ) : (
                            <div className="flex flex-col items-center">
                                <motion.h1
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    className="text-3xl font-semibold mb-4"
                                >
                                    Welcome to <span className="text-pink-500">FemmeFit</span>!
                                </motion.h1>
                                <div>
                                    <motion.div>
                                        <img
                                            src={Logo}
                                            alt='logo'
                                            width={350}
                                        />
                                    </motion.div>
                                </div>
                                <motion.p
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.4 }}
                                    className="text-gray-900 mb-6"
                                >
                                    Your personal wellness companion for a healthier lifestyle.
                                </motion.p>
                                <motion.button
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.6 }}
                                    onClick={() => loginWithRedirect()}
                                    className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 focus:outline-none"
                                >
                                    Log In / Sign Up
                                </motion.button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
