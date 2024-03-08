"use client"
import React from 'react'
import {motion} from "framer-motion"
import Link from 'next/link';
import { skills } from "@/lib/data"


function Skills() {
  return (
    <section id="skills" className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40">
      <h1>My Skills</h1>
      <motion.div className='mb-28 max-w-[60rem] mx-auto text-center leading-8 sm:mb-40 scroll-mt-28 mt-5'
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0,  opacity: 1 }}
      >
        <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
          {skills.map((skill, i) => (
            <motion.li 
              className="bg-[#CFE2F3] inline-block dark:bg-gray-800 rounded-md px-3 py-1 text-sm text-gray-800 dark:text-gray-200 border border-transparent mb-2 mx-auto sm:mx-0 shadow-md p-6"
              key={i}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={i}
            >
              {skill}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </section>
  )
}

export default Skills