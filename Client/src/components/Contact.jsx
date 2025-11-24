import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMail, FiPhone, FiCalendar, FiX } from 'react-icons/fi'; // Added FiX for close button
import api from '../api/axios';

// --- Modal Component ---
const BookingModal = ({ isOpen, onClose, onBook }) => {
    // State for form data
    const [name, setName] = useState('');
    const [date, setDate] = useState('');

    // Framer Motion variants for the modal backdrop and container
    const backdropVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };

    const modalVariants = {
        hidden: { y: "-100vh", opacity: 0 },
        visible: {
            y: "0",
            opacity: 1,
            transition: { delay: 0.1, type: "spring", stiffness: 100 }
        },
        exit: { y: "100vh", opacity: 0 }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Check if both fields are filled
        if (!name || !date) {
            alert("Please enter your name and select a date/time.");
            return;
        }
        // Send data to the parent component's booking handler
        onBook({ name, date });
        // Clear form and close modal
        setName('');
        setDate('');
        onClose();
    };

    if (!isOpen) return null;

    return (
        <motion.div
            className="fixed inset-0 z-50 bg-black bg-opacity-70 flex justify-center items-center p-4"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={onClose} // Close when clicking backdrop
        >
            <motion.div
                className="bg-gray-700 w-full max-w-md p-6 rounded-xl shadow-2xl relative"
                variants={modalVariants}
                onClick={e => e.stopPropagation()} // Prevent closing when clicking inside the modal
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-300 hover:text-white transition"
                    aria-label="Close modal"
                >
                    <FiX className="w-6 h-6" />
                </button>

                <h3 className="text-2xl font-bold text-white mb-4">Book Your Demo Call</h3>
                <p className="text-gray-300 mb-6">Enter your details and select a preferred date/time.</p>

                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Name Input */}
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Your Name</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter your name"
                            required
                        />
                    </div>

                    {/* Date/Time Input (Placeholder for Calendar) */}
                    <div>
                        <label htmlFor="date" className="block text-sm font-medium text-gray-300 mb-1">Preferred Date & Time</label>
                        {/* NOTE: In a real application, you would replace this with a powerful date/time picker library (e.g., react-datepicker) */}
                        <input
                            type="datetime-local"
                            id="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full inline-flex justify-center items-center space-x-2 px-6 py-3 mt-4 rounded-lg text-lg font-bold transition-all duration-300 transform shadow-md"
                        style={{ backgroundColor: '#FF8C00', color: '#1F2937' }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        Confirm Booking
                    </button>
                </form>
            </motion.div>
        </motion.div>
    );
};

// --- Contact Component ---
const Contact = () => {
    // State to control modal visibility
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Function to handle the actual booking submission
    const handleBooking = async ({ name, date }) => {
        try {
            await api.post('/contact/book-demo', { name, date });
            alert(`Thank you, ${name}! Your demo call is tentatively booked for ${new Date(date).toLocaleString()}. We will be in touch shortly.`);
        } catch (error) {
            console.error('Booking failed:', error);
            alert('Failed to book demo. Please try again.');
        }
    };

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
                    {/* Header/Text content... (omitted for brevity) */}
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

                    {/* Contact Details Grid... (omitted for brevity) */}
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

                    {/* Button: Book a Demo Call - Now opens the modal */}
                    <motion.button
                        onClick={() => setIsModalOpen(true)} // Toggle modal visibility
                        className="inline-flex items-center space-x-3 px-10 py-4 rounded-full text-xl font-bold transition-all duration-300 transform shadow-lg"
                        style={{ backgroundColor: '#FF8C00', color: '#1F2937' }} // Setting the required orange color
                        whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(255, 140, 0, 0.4)" }}
                        whileTap={{ scale: 0.95 }}
                        variants={itemVariants}
                    >
                        <FiCalendar className="text-2xl" />
                        <span>Book a Demo Call</span>
                    </motion.button>

                </motion.div>
            </div>

            {/* The Booking Modal */}
            <AnimatePresence>
                {isModalOpen && (
                    <BookingModal
                        isOpen={isModalOpen}
                        onClose={() => setIsModalOpen(false)}
                        onBook={handleBooking}
                    />
                )}
            </AnimatePresence>
        </section>
    );
};

export default Contact;