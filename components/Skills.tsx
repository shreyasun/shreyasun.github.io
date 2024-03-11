"use client"
import React, {useEffect} from 'react'
import {motion} from "framer-motion"
import { skills } from "@/lib/data"
import { useSectionInView } from '@/lib/hooks';

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section 
      ref={ref}
      id="skills" 
      className="mb-4 max-w-[53rem] scroll-mt-28 text-center sm:mb-4"
    >
      <h1 className="text-xl font-bold">My Skills</h1>
      <div className='mb-10 max-w-[60rem] mx-auto text-center leading-8 sm:mb-10 scroll-mt-28 mt-5'>
        <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
          {skills.map((skill, i) => (
            <motion.li 
              className="bg-[#CFE2F3] inline-block dark:bg-gray-800 rounded-md px-3 py-1 text-sm text-gray-800 dark:text-gray-200 border border-transparent mb-2 mx-auto sm:mx-0 shadow-md p-6"
              key={i}
              initial="initial"
              variants={fadeInAnimationVariants}
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
      </div>
    </section>
  )
}

export default Skills