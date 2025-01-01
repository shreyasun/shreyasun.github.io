"use client";

import React from 'react';
import { motion } from "framer-motion";
import { MdOutlineOpenInNew } from "react-icons/md";
import { projects } from "@/lib/data";
import { useSectionInView } from '@/lib/hooks';

function Projects() {
  const { ref } = useSectionInView("Projects");

  let featuredprojects = projects.filter(project => project.category === "featured")
  let otherprojects = projects.filter(project => project.category !== "featured")

  return (
    <motion.section 
      className='max-w-[40rem] items-center flex flex-col justify-center gap-5 mx-auto' 
      ref={ref}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
    >
      <h1 className="text-xl text-bold">My Projects</h1>

      <div className="grid grid-cols-1 gap-2 w-full justify-center">
        <h2 className="text-lg text-purp2 font-bold">Featured</h2>
        {
          featuredprojects.map((project, i) => (
            <div 
              key={i} 
              className='max-w-[50rem] mb-2 bg-background rounded-lg shadow-md p-2 flex flex-col items-start'
            >
              <h2 className="text-purp3 font-semibold">{project.title}</h2>
              <p className="text-purp2">{project.description}</p>
              <ul className="flex flex-wrap gap-1">
                {project.tools.map((tool, i) => (
                  <li
                    className="bg-purp2 px-3 py-1 text-[0.7rem] mt-2 tracking-wider rounded-full"
                    key={i}
                  >
                    {tool}
                  </li>
                ))}
              </ul>
              <div className="mt-1 block cursor-pointer">
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <div className="bg-purp3 rounded-md px-3 py-1 mt-2 text-sm text-purp1 border border-transparent hover:bg-purp4 shadow-md flex items-center inline-flex">
                    View Project <MdOutlineOpenInNew className="ml-1" />
                  </div>
                </a>
              </div>
            </div>
          ))
        }
      </div>

      <div className="grid grid-cols-1 gap-2 w-full justify-center">
        <h2 className="text-lg text-purp2 font-bold">Other</h2>
        {
          otherprojects.map((project, i) => (
            <div 
              key={i} 
              className='max-w-[50rem] mb-2 bg-background rounded-lg shadow-md p-2 flex flex-col items-start'
            >
              <h2 className="text-purp3 font-semibold">{project.title}</h2>
              <p className="text-purp2">{project.description}</p>
              <ul className="flex flex-wrap gap-1">
                {project.tools.map((tool, i) => (
                  <li
                    className="bg-purp2 px-3 py-1 text-[0.7rem] mt-2 tracking-wider rounded-full"
                    key={i}
                  >
                    {tool}
                  </li>
                ))}
              </ul>
              <div className="mt-1 block cursor-pointer">
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <div className="bg-purp3 rounded-md px-3 py-1 mt-2 text-sm text-purp1 border border-transparent hover:bg-purp4 shadow-md flex items-center inline-flex">
                    View Project <MdOutlineOpenInNew className="ml-1" />
                  </div>
                </a>
              </div>
            </div>
          ))
        }
        <div></div>
        <div></div>
      </div>
    </motion.section>
  );
}

export default Projects;
