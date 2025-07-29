import './App.css';
import React, { useEffect, useState } from 'react';
import Home from './components/Home';
import { motion } from 'framer-motion';

const heading = "NovaPixels: AI-Powered Image Enhancer";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const letter = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
};

function App() {
  const fullText = 'From dull to dazzling - effortlessly!';
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  const [enhancedImage, setEnhancedImage] = useState(null);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(fullText.slice(0, index + 1));
        setIndex(index + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      setTimeout(() => {
        setDisplayedText('');
        setIndex(0);
      }, 2000);
    }
  }, [index, fullText]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center py-8 px-4">
        <div className='text-center mb-8'>
          <motion.h1
            className="text-5xl font-bold text-gray-800 mb-2 flex flex-wrap justify-center"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {heading.split("").map((char, index) => (
              <motion.span key={index} variants={letter} className="inline-block">
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h1>

          <p className='text-lg text-gray-600 font-medium'>
            {displayedText}
            <span className="animate-pulse"></span>
          </p>
        </div>

        <Home setEnhancedImage={setEnhancedImage} />

        {enhancedImage && (
          <a
            href={enhancedImage}
            download="enhanced-image.png"
            className="mt-6 px-6 py-2.5 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full shadow-md hover:shadow-lg transition-all duration-200"
          >
            Download Enhanced Image
          </a>
        )}
      </main>

      {/* Footer */}
      <footer className="text-center border-t border-gray-300 py-4 text-xs sm:text-sm">
        <div className="text-sm text-gray-600">
          Thanks for visiting – Keep creating, the world needs your vision.
          <p className="text-xs mt-1">
            Powered by <span className="font-semibold">@Purva Jadhav</span> &copy; 2025 NovaPixels. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
