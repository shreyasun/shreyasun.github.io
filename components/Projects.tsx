"use client";

import React from 'react';
import { motion } from "framer-motion";
import { MdOutlineOpenInNew } from "react-icons/md";
import { projects } from "@/lib/data";
import { useSectionInView } from '@/lib/hooks';
import Image from "next/image"

function Projects() {
  const { ref } = useSectionInView("Projects");
  return (
    <motion.section 
      className='max-w-[50rem] items-center flex flex-col justify-center gap-5 mx-auto' 
      ref={ref}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
    >
      <h1 className="text-xl text-bold">Projects</h1>
      <div className="grid grid-cols-2 gap-2 w-full justify-center">
        {
          projects.map((project, i) => (
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <div 
                key={i} 
                className="max-w-[50rem] h-[20rem] mb-2 bg-white rounded-lg shadow-md p-2 flex flex-col items-start"
              >
              <div className="relative w-full h-40 bg-white rounded-xl mt-1 mb-3 overflow-hidden">
                <Image
                  src={project.image}
                  alt="Project image"
                  fill
                  quality={100}
                  priority
                  className="object-contain rounded-xl shadow-lg"
                />
              </div>
              <h2 className="mt-auto text-text font-semibold">{project.title}</h2>
              <p className="mt-auto text-text">{project.description}</p>
              <ul className="mt-auto flex flex-wrap gap-1">
                {project.tools.map((tool, i) => (
                  <li
                    className="bg-blue px-3 py-1 text-[0.7rem] mt-2 tracking-wider rounded-full"
                    key={i}
                  >
                    {tool}
                  </li>
                ))}
              </ul>

              </div>
              </a>
            ))
          }
      </div>
      <div></div>
      <div></div>
    </motion.section>
  );
}

export default Projects;
