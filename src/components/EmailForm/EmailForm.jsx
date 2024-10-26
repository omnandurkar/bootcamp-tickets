"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send } from "lucide-react";

const EmailForm = ({ onDownload }) => {
    const [email, setEmail] = useState("");
    const [animating, setAnimating] = useState(false);
    const [currentPlaceholder, setCurrentPlaceholder] = useState(0);
    const placeholders = [
        "Excited?@mail.com",
        "For@mail.com",
        "MLSA@mail.com",
        "UI/UX@mail.com",
        "BOOTCAMP@mail.com",
    ];
    const intervalRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        setAnimating(true);
        if (email) {
            onDownload(email);
            setEmail(""); // Clear input after submission
            setAnimating(false);
        }
    };

    const startAnimation = () => {
        intervalRef.current = setInterval(() => {
            setCurrentPlaceholder((prev) => (prev + 1) % placeholders.length);
        }, 3000);
    };

    useEffect(() => {
        startAnimation();
        return () => clearInterval(intervalRef.current);
    }, []);

    return (
        <form onSubmit={handleSubmit} className="space-y-4 z-20">
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Enter your registered email
                </label>
                <div className="relative">
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => {
                            if (!animating) {
                                setEmail(e.target.value);
                            }
                        }}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder=""
                    />
                    <AnimatePresence>
                        {!email && (
                            <motion.p
                                key={placeholders[currentPlaceholder]}
                                initial={{ opacity: 0, y: 5 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -5 }}
                                transition={{ duration: 0.3 }}
                                className="absolute left-3 top-2 text-gray-500"
                            >
                                {placeholders[currentPlaceholder]}
                            </motion.p>
                        )}
                    </AnimatePresence>
                </div>
            </div>
            <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-2 px-4 rounded-md hover:from-blue-600 hover:to-purple-700 transition-all duration-200 flex items-center justify-center"
            >
                <Send className="mr-2" size={20} />
                <span>Get Your Pass</span>
            </motion.button>
        </form>
    );
};

export default EmailForm;
