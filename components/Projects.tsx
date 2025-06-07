"use client";

import React from "react";
import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import Image from "next/image";
import Link from "next/link";

function Projects() {
  const { ref } = useSectionInView("Projects");

  return (
    <motion.section
      className="max-w-[50rem] items-center flex flex-col justify-center gap-5 mx-auto"
      ref={ref}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
    >
      <h1 className="text-xl font-bold">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full justify-center">
        {projects.map((project, i) => (
          <Link href={{
            pathname: project.link,
            query: { image: project.image.src },
          }} key={i} className="block">
            <div className="h-[20rem] rounded-lg shadow-md p-4 flex flex-col items-start transition-all duration-200 hover:backdrop-blur-lg hover:bg-pink/40">
              <div className="relative w-full h-40 rounded-xl mb-4 overflow-hidden">
                <Image
                  src={project.image}
                  alt={`${project.title} image`}
                  fill
                  quality={100}
                  priority
                  className="object-contain rounded-xl shadow-lg"
                />
              </div>
              <h2 className="text-text font-semibold">{project.title}</h2>
              <p className="text-text text-sm">{project.description}</p>
              <ul className="mt-auto flex flex-wrap gap-1">
                {project.tools.map((tool, index) => (
                  <li
                    key={index}
                    className="bg-blue px-3 py-1 text-[0.7rem] mt-2 tracking-wider rounded-full"
                  >
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
          </Link>
        ))}
      </div>
    </motion.section>
  );
}

export default Projects;

