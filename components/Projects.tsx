"use client";

import React, { useState } from 'react';
import { motion } from "framer-motion";
import { MdOutlineOpenInNew } from "react-icons/md";
import { projects, categories } from "@/lib/data";
import { useSectionInView } from '@/lib/hooks';

function Projects() {
  const { ref } = useSectionInView("Projects");

  const [currCategory, setCurrCategory] = useState("Full Stack");

  const changeCategory = (category: React.SetStateAction<string>) => {
    setCurrCategory(category);
  };

  const filteredProjects = projects.filter(project => project.category === currCategory);

  return (
    <motion.section className='flex flex-col items-center justify-center gap-5' id="projects" ref={ref}>
      <h1 className="text-xl font-bold">My Projects</h1>
      <div className='flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium'>
        {categories.map((category) => (
          <div className={`cursor-pointer inline-block rounded-md px-3 py-1 text-sm border border-transparent hover:bg-[#CFE2F3] dark:hover:bg-gray-700 mb-2 mx-auto sm:mx-0 shadow-md p-6 ${currCategory === category ? 'bg-[#CFE2F3] dark:bg-gray-800 text-gray-800 dark:text-gray-200' : 'bg-[#e0f0e3] dark:bg-gray-800 text-gray-800 dark:text-gray-200'}`}
          key={category} onClick={() => changeCategory(category)}>
            {category}
          </div>
        ))}
      </div>
      <div className="flex">
        <ul>
          {filteredProjects.length === 0 ? (
            <div className='mb-4 max-w-md bg-white dark:bg-gray-800 rounded-lg shadow-md p-6'>
              <h2>Coming Soon!</h2>
            </div>
          ) : (
            filteredProjects.map((project, i) => (
              <div key={i} className='mb-4 max-w-md bg-white dark:bg-gray-800 rounded-lg shadow-md p-6'>
                <h2><b>{project.title}</b></h2>
                <p>{project.description}</p>
                <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
                  {project.tools.map((tool, i) => (
                    <li
                      className="bg-[#CFE2F3]/[0.7] px-3 py-1 text-[0.7rem] mt-2 tracking-wider rounded-full"
                      key={i}
                    >
                      {tool}
                    </li>
                  ))}
                </ul>
                <div className='cursor-pointer inline-block'>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <div className='bg-[#e0f0e3] dark:bg-gray-800 mt-4 rounded-md px-3 py-1 text-sm text-gray-800 dark:text-gray-200 border border-transparent hover:bg-[#CFE2F3] dark:hover:bg-gray-700 mb-2 mx-auto sm:mx-0 shadow-md flex items-center'>
                      View Project <MdOutlineOpenInNew className="ml-1" />
                    </div>
                  </a>
                </div>
              </div>
            ))
          )}
        </ul>
      </div>
    </motion.section>
  );
}

export default Projects;
