import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiCalendar } from 'react-icons/fi'; // Icons for contact info

const Contact = () => {
    // Framer Motion variants for section animation
    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 60,
                damping: 10,
                delay: 0.1,
            },
        },
    };

    // Framer Motion variants for staggered details
    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 },
    };

    return (
        <section className="py-16 md:py-24 bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="bg-gray-800 p-8 md:p-16 rounded-2xl shadow-2xl text-center"
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.4 }}
                >
                    {/* Header */}
                    <motion.h2
                        className="text-sm uppercase tracking-widest font-semibold text-blue-400 mb-2"
                        variants={itemVariants}
                    >
                        CONTACT
                    </motion.h2>
                    <motion.h1
                        className="text-4xl md:text-5xl font-extrabold mb-6"
                        variants={itemVariants}
                    >
                        Contact Us 👋
                    </motion.h1>
                    <motion.p
                        className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto"
                        variants={itemVariants}
                    >
                        Whether you’re a school looking to integrate STEM education or a student eager to learn, our team is ready to help.
                    </motion.p>

                    {/* Contact Details Grid */}
                    <motion.div
                        className="flex justify-center flex-wrap gap-8 mb-12"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ staggerChildren: 0.2 }}
                    >
                        {/* Email */}
                        <motion.div 
                            className="flex items-center space-x-3"
                            variants={itemVariants}
                        >
                            <FiMail className="text-2xl text-blue-400" />
                            <a 
                                href="mailto:info@thinkskool.in" 
                                className="text-lg font-medium text-white hover:text-blue-300 transition"
                            >
                                info@thinkskool.in
                            </a>
                        </motion.div>

                        {/* Phone */}
                        <motion.div 
                            className="flex items-center space-x-3"
                            variants={itemVariants}
                        >
                            <FiPhone className="text-2xl text-blue-400" />
                            <a 
                                href="tel:+918527740849" 
                                className="text-lg font-medium text-white hover:text-blue-300 transition"
                            >
                                +91-8527740849
                            </a>
                        </motion.div>
                    </motion.div>

                    {/* Button: Book a Demo Call with #FF8C00 color */}
                    <motion.a
                        href="#" // Replace with your actual booking link (e.g., Calendly)
                        className="inline-flex items-center space-x-3 px-10 py-4 rounded-full text-xl font-bold transition-all duration-300 transform shadow-lg"
                        style={{ backgroundColor: '#FF8C00', color: '#1F2937' }} // Setting the required orange color
                        whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(255, 140, 0, 0.4)" }}
                        whileTap={{ scale: 0.95 }}
                        variants={itemVariants}
                    >
                        <FiCalendar className="text-2xl" />
                        <span>Book a Demo Call</span>
                    </motion.a>

                </motion.div>
            </div>
        </section>
    );
};

export default Contact;