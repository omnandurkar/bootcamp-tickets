'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import EmailForm from "@/components/EmailForm/EmailForm";
import data from "@/lib/data";
import { Download } from "lucide-react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";

const LandingPage = () => {
  const [passLink, setPassLink] = useState(null);
  const [error, setError] = useState("");
  const [showEmailForm, setShowEmailForm] = useState(true);
  const [showMessage, setShowMessage] = useState(false);
  const [userName, setUserName] = useState(""); // State for the user's first name

  const handleDownload = (email) => {
    const student = data.find((entry) => entry.email === email);
    if (student) {
      setPassLink(student.pass);
      setError("");
      setUserName(student.name.split(" ")[0]); // Get the first name
      setShowEmailForm(false); // Hide the email form
      setShowMessage(true); // Show the message
    } else {
      setError("Email not registered. Please check and try again.");
      setPassLink(null);
    }
  };

  const words = [
    { text: "MLSA" },
    { text: "ICOER" },
    { text: "Presents" },
    { text: "UI/UX" },
    { text: "Bootcamp.", className: "text-blue-500 dark:text-blue-500" },
  ];

  return (
    <div className="md:min-h-screen max-lg:h-screen overflow-hidden">
      <BackgroundBeamsWithCollision className='max-lg:flex-col'>
        <TypewriterEffectSmooth words={words} />
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-lg shadow-2xl p-8 max-w-md w-full relative overflow-hidden z-10"
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
            Bootcamp Pass
          </h1>

          {showEmailForm && <EmailForm onDownload={handleDownload} />}
          {error && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-red-500 mt-4"
            >
              {error}
            </motion.p>
          )}
          {showMessage && userName && (
            <motion.div
              className="mt-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-lg">Hi <span className="font-bold">{userName},</span> meet you on Microsoft Teams at 10 AM today!</p>
              <a
                href="https://teams.microsoft.com/dl/launcher/launcher.html?url=%2F_%23%2Fl%2Fmeetup-join%2F19%3Ameeting_MWE1MjQ4YzYtMmM1My00MzVjLWI1MDQtZGZiNGRhYTE3Njg1%40thread.v2%2F0%3Fcontext%3D%257b%2522Tid%2522%253a%252284c31ca0-ac3b-4eae-ad11-519d80233e6f%2522%252c%2522Oid%2522%253a%252221d07486-04e1-4e93-8c64-528a4dde8a47%2522%257d%26anon%3Dtrue&type=meetup-join&deeplinkId=7244d69d-50f7-4a00-a95a-5b3e1bc1e98d&directDl=true&msLaunch=true&enableMobilePage=true&suppressPrompt=true" // 
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-200"
              >
                Join Meeting
              </a>
            </motion.div>
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
            style={{ zIndex: -1 }}
          >
            <path
              fill="currentColor"
              d="M42.7,-73.2C55.9,-65.7,67.7,-55.1,75.7,-41.9C83.7,-28.7,87.9,-14.3,88.1,0.1C88.3,14.6,84.5,29.1,76.7,41.6C68.9,54.1,57.1,64.6,43.4,72.5C29.7,80.4,14.9,85.8,0.1,85.6C-14.7,85.5,-29.3,79.9,-42.3,71.7C-55.3,63.5,-66.7,52.7,-74.6,39.7C-82.5,26.7,-86.9,13.3,-86.5,0.2C-86.2,-12.9,-81,-25.8,-73.3,-37.2C-65.6,-48.6,-55.3,-58.5,-43.1,-66.5C-30.9,-74.5,-15.4,-80.7,-0.2,-80.4C15.1,-80.1,30.2,-73.4,42.7,-73.2Z"
              transform="translate(100 100)"
            />
          </motion.svg>
        </motion.div>
      </BackgroundBeamsWithCollision>
      <TextHoverEffect text="MLSA" />
    </div>
  );
};

export default LandingPage;
