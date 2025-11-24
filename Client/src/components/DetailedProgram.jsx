import React from 'react';
import { motion } from 'framer-motion';
// Using feather icons as defined in the original code
import { FiBookOpen, FiClock, FiUsers, FiAward, FiCode, FiCloud } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { GlowingCard } from './ui/GlowingCard';
import { FocusCards } from './ui/focus-cards';
import { Button } from './ui/moving-border';

const DetailedProgram = () => {
    const navigate = useNavigate();
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
        <div className="min-h-screen bg-slate-950 text-white" id="programs">


            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">



                <motion.div
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <GlowingCard>
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
                                    className="flex items-center space-x-3 bg-slate-900 p-4 rounded-lg shadow-sm border-l-4 border-[#FF8C00] hover:bg-slate-800 transition-colors duration-200"
                                    variants={listItemVariants}
                                >
                                    <FiAward className="text-[#FF8C00] text-2xl shrink-0" />
                                    <span className="text-lg font-medium text-slate-200">{item}</span>
                                </motion.li>
                            ))}
                        </motion.ul>
                    </GlowingCard>
                </motion.div>

                {/* Call to Action */}
                <motion.section
                    className="text-center bg-slate-900 border border-slate-800 text-white p-12 rounded-xl shadow-xl"
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <h2 className="text-4xl font-bold mb-4">Join Our Program</h2>
                    <p className="text-xl mb-8 max-w-3xl mx-auto text-slate-200">{program.cta}</p>
                    <div className="flex justify-center">
                        <Button
                            borderRadius="1.75rem"
                            className="bg-slate-900 text-white border-neutral-200 dark:border-slate-800 text-xl font-bold"
                            duration={3000}
                        >
                            Enroll Now
                        </Button>
                    </div>
                </motion.section>

                {/* --- CARD 3: Key Features (What You'll Gain) --- */}
                <motion.div
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <GlowingCard>
                        <h2 className="text-4xl font-extrabold text-purple-400 mb-10 text-center">
                            <FiAward className="inline-block text-5xl mr-3 align-middle" /> What You'll Gain
                        </h2>
                        <FocusCards cards={[
                            {
                                title: "School-Integrated Curriculum",
                                src: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=3273&auto=format&fit=crop"
                            },
                            {
                                title: "Flexible Learning Paths",
                                src: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=3474&auto=format&fit=crop"
                            },
                            {
                                title: "Expert Mentorship",
                                src: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=3540&auto=format&fit=crop"
                            },
                            {
                                title: "Certification & Recognition",
                                src: "https://images.unsplash.com/photo-1570616969692-54d6a5d08565?q=80&w=3540&auto=format&fit=crop"
                            },
                            {
                                title: "Hands-on Projects",
                                src: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=3540&auto=format&fit=crop"
                            },
                            {
                                title: "Cloud-Based Labs",
                                src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=3544&auto=format&fit=crop"
                            }
                        ]} />
                    </GlowingCard>
                </motion.div>




            </div>
        </div>
    );
};

export default DetailedProgram;