import React from 'react';
import { motion } from 'framer-motion';
// Using feather icons as defined in the original code
import { FiBookOpen, FiClock, FiUsers, FiAward, FiCode, FiCloud } from 'react-icons/fi'; 
import { useNavigate } from 'react-router-dom';

const DetailedProgram = () => {
    const navigate=useNavigate();
    // Program data remains the same
    const program = {
        title: "Innovate & Create: The Future-Ready STEM Program",
        tagline: "Empowering students with hands-on technology skills for tomorrow's world.",
        overview: "Our comprehensive STEM program integrates cutting-edge technology education directly into the school curriculum. Designed for students from elementary to high school, we focus on fostering critical thinking, problem-solving, and creativity through project-based learning. Each module is crafted to be engaging, relevant, and aligned with global technology trends.",
        features: [
            { icon: FiBookOpen, title: "School-Integrated Curriculum", description: "Seamlessly fits into academic timetables without extra pressure." },
            { icon: FiClock, title: "Flexible Learning Paths", description: "Adaptable modules that cater to different learning paces and interests." },
            { icon: FiUsers, title: "Expert Mentorship", description: "Guidance from experienced engineering professionals." },
            { icon: FiAward, title: "Certification & Recognition", description: "Validate skills with industry-relevant certifications." },
            { icon: FiCode, title: "Hands-on Projects", description: "Build real-world applications and gain practical experience." },
            { icon: FiCloud, title: "Cloud-Based Labs", description: "Access advanced tools and environments from anywhere." },
        ],
        curriculumHighlights: [
            "Introduction to Programming (Python/JavaScript)",
            "Robotics & Automation Basics",
            "Artificial Intelligence & Machine Learning Fundamentals",
            "Web Development & UI/UX Design",
            "Data Science & Analytics",
            "Cybersecurity Essentials",
        ],
        targetAudience: "Students (Grade 4-12), Schools, Parents",
        cta: "Ready to transform your child's future? Enroll today!",
        
    };

    // Framer Motion variants for section animations (remains the same)
    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 70,
                damping: 15,
                duration: 0.5,
            },
        },
    };

    // Framer Motion variants for item staggering (remains the same)
    const listContainerVariants = {
        visible: {
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const listItemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 },
    };

    return (
        <div className="min-h-screen bg-gray-50 text-gray-800">
            {/* Hero Section (Unchanged) */}
            <motion.div
                className="relative bg-gradient-to-r from-[#007FFF] to-[#080808] text-white py-20 px-4 overflow-hidden"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
               
                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <motion.h1
                        className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                    >
                        {program.title}
                    </motion.h1>
                    <motion.p
                        className="text-xl md:text-2xl font-light mb-8 max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                    >
                        {program.tagline}
                    </motion.p>
                    <motion.button onClick={()=>navigate('/role')}
                        className="bg-white text-blue-700 px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-blue-100 transition-all duration-300 transform hover:scale-105 cursor-pointer"
                        whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7, duration: 0.5 }}
                    >
                        Get Started Today
                    </motion.button>
                </div>
            </motion.div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
                
                {/* --- CARD 1: Program Overview --- */}
                <motion.section
                    className="bg-white p-8 md:p-12 rounded-2xl shadow-2xl border-t-8 border-blue-600 hover:shadow-3xl transition-shadow duration-500"
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <h2 className="text-4xl font-extrabold text-blue-700 mb-6 text-center">
                        <FiBookOpen className="inline-block text-5xl mr-3 align-middle" /> Program Overview
                    </h2>
                    <p className="text-xl leading-relaxed text-gray-700 text-center max-w-4xl mx-auto">
                        {program.overview}
                    </p>
                </motion.section>

                <motion.section
                    className="bg-white p-8 md:p-12 rounded-2xl shadow-2xl border-t-8 border-[#FF8C00] hover:shadow-3xl transition-shadow duration-500"
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <h2 className="text-4xl font-extrabold text-[#FF8C00] mb-8 text-center">
                        <FiCode className="inline-block text-5xl mr-3 align-middle" /> Curriculum Highlights
                    </h2>
                    <motion.ul
                        className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none p-0 max-w-4xl mx-auto"
                        variants={listContainerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        {program.curriculumHighlights.map((item, index) => (
                            <motion.li
                                key={index}
                                className="flex items-center space-x-3 bg-gray-50 p-4 rounded-lg shadow-sm border-l-4 border-[#FF8C00] hover:shadow-md transition-shadow duration-200"
                                variants={listItemVariants}
                            >
                                <FiAward className="text-[#FF8C00] text-2xl shrink-0" />
                                <span className="text-lg font-medium text-gray-700">{item}</span>
                            </motion.li>
                        ))}
                    </motion.ul>
                </motion.section>

                {/* Call to Action (Unchanged) */}
                <motion.section
                    className="text-center bg-gradient-to-r from-blue-500 to-blue-700 text-white p-12 rounded-xl shadow-xl"
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <h2 className="text-4xl font-bold mb-4">Join Our Program</h2>
                    <p className="text-xl mb-8 max-w-3xl mx-auto">{program.cta}</p>
                    <motion.button
                        className="bg-white text-blue-700 px-10 py-4 rounded-full text-xl font-bold shadow-lg hover:bg-blue-100 transition-all duration-300 transform hover:scale-105"
                        whileHover={{ scale: 1.05, boxShadow: "0 12px 24px rgba(0,0,0,0.3)" }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Enroll Now
                    </motion.button>
                </motion.section>

                {/* --- CARD 3: Key Features (What You'll Gain) --- */}
                <motion.section
                    className="bg-white p-8 md:p-12 rounded-2xl shadow-2xl border-t-8 border-purple-600 hover:shadow-3xl transition-shadow duration-500"
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <h2 className="text-4xl font-extrabold text-purple-700 mb-10 text-center">
                        <FiAward className="inline-block text-5xl mr-3 align-middle" /> What You'll Gain
                    </h2>
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        variants={listContainerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        {program.features.map((feature, index) => (
                            <motion.div
                                key={index}
                                className="bg-gray-50 p-6 rounded-xl shadow-md flex flex-col items-center space-y-3 border-b-4 border-blue-400 hover:shadow-lg transition-shadow duration-300 transform hover:scale-[1.03]"
                                variants={listItemVariants}
                                whileHover={{ scale: 1.02, backgroundColor: '#f0f4ff' }} // Subtle background change on hover
                            >
                                <feature.icon className="text-5xl text-blue-600" />
                                <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                                <p className="text-center text-gray-700">{feature.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.section>

                
                

            </div>
        </div>
    );
};

export default DetailedProgram;