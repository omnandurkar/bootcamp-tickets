'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

const EmailForm = ({ onDownload }) => {
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onDownload(email);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 z-20">
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Enter your registered email
                </label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="you@example.com"
                />
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
