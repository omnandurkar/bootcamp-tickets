'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import EmailForm from "@/components/EmailForm/EmailForm";
import data from "@/lib/data";
import { Download } from "lucide-react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

const LandingPage = () => {
  const [passLink, setPassLink] = useState(null);
  const [error, setError] = useState("");

  const handleDownload = (email) => {
    const student = data.find((entry) => entry.email === email);
    if (student) {
      setPassLink(student.pass);
      setError("");
    } else {
      setError("Email not registered. Please check and try again.");
      setPassLink(null);
    }
  };

  return (
    <div className="min-h-screen ">
      <BackgroundBeamsWithCollision>
        {/* <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 flex items-center justify-center p-4"> */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-lg shadow-2xl p-8 max-w-md w-full relative overflow-hidden z-10" // Set z-10 here
        >
          <motion.div
            className="absolute top-0 right-0 w-40 h-40 bg-yellow-300 rounded-full -mr-20 -mt-20"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
          <h1 className="text-3xl font-bold mb-6 text-gray-800 relative z-10">
            UI/UX Bootcamp Pass
          </h1>
          <EmailForm onDownload={handleDownload} />
          {error && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-red-500 mt-4"
            >
              {error}
            </motion.p>
          )}
          {passLink && (
            <div className="flex justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6"
              >
                <a
                  href={passLink}
                  download
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200"
                >
                  <Download className="mr-2" size={20} />
                  <span>Download your pass</span>
                </a>
              </motion.div>
            </div>
          )}
          <motion.svg
            className="absolute -bottom-10 -left-10 w-32 h-32 text-gray-200"
            viewBox="0 0 200 200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            style={{ zIndex: -1 }} // Set zIndex to -1 here
          >
            <path
              fill="currentColor"
              d="M42.7,-73.2C55.9,-65.7,67.7,-55.1,75.7,-41.9C83.7,-28.7,87.9,-14.3,88.1,0.1C88.3,14.6,84.5,29.1,76.7,41.6C68.9,54.1,57.1,64.6,43.4,72.5C29.7,80.4,14.9,85.8,0.1,85.6C-14.7,85.5,-29.3,79.9,-42.3,71.7C-55.3,63.5,-66.7,52.7,-74.6,39.7C-82.5,26.7,-86.9,13.3,-86.5,0.2C-86.2,-12.9,-81,-25.8,-73.3,-37.2C-65.6,-48.6,-55.3,-58.5,-43.1,-66.5C-30.9,-74.5,-15.4,-80.7,-0.2,-80.4C15.1,-80.1,30.2,-73.4,42.7,-73.2Z"
              transform="translate(100 100)"
            />
          </motion.svg>
        </motion.div>
      </BackgroundBeamsWithCollision>
    </div>
    // </div >
  );
};

export default LandingPage;
