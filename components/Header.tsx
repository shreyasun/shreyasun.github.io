"use client";

import React, { useState } from 'react';
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import clsx from "clsx";

interface HeaderProps {
  setActiveComponent: (component: string) => void;
}

export default function Header({ setActiveComponent }: HeaderProps) {
  const [activeSection, setActiveSection] = useState('Intro');

  const handleButtonClick = (sectionName: string) => {
    setActiveSection(sectionName);
    setActiveComponent(sectionName);
  };

  const isDarkMode = true;

  return (
    <header className='z-[999] relative'>
      <motion.div
        className={clsx(
          "fixed top-0 left-1/2 rounded-full border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] px-6 py-2 sm:top-6 sm:py-2",
          {
            "dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75": isDarkMode,
          }
        )}
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      >
        <nav className="flex items-center justify-center">
          <ul className="flex flex-nowrap items-center gap-5 text-[0.9rem] font-medium text-gray-500">
            {links.map((link) => (
              <motion.li
                className="flex items-center justify-center"
                key={link.hash}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
              >
                <button
                  className={clsx(
                    "px-3 py-2 hover:text-gray-950 transition",
                    {
                      "text-gray-950": activeSection === link.name,
                    }
                  )}
                  onClick={() => handleButtonClick(link.name)}
                >
                  {link.name}
                </button>
              </motion.li>
            ))}
          </ul>
        </nav>
      </motion.div>
    </header>
  );
  
}
