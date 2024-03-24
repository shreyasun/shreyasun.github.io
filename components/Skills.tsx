"use client"
import React from 'react'
import { motion } from "framer-motion"
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

interface Skill {
  skill: string;
  category: string;
}

interface GroupedSkills {
  [category: string]: string[];
}

function Skills() {
  const { ref } = useSectionInView("Skills");

  // Group skills by category
  const groupedSkills: GroupedSkills = skills.reduce((acc: GroupedSkills, curr: Skill) => {
    if (!acc[curr.category]) {
      acc[curr.category] = [];
    }
    acc[curr.category].push(curr.skill);
    return acc;
  }, {});

  return (
    <motion.section 
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      ref={ref}
      className="mb-2 max-w-[53rem] scroll-mt-28 text-center sm:mb-2"
    >
      <h1 className="text-xl font-bold">My Skills</h1>
      <div className='mb-4 max-w-[60rem] mx-auto text-center leading-8 sm:mb-4 scroll-mt-28 mt-5'>
        {Object.entries(groupedSkills).map(([category, categorySkills], index) => (
          <div key={index} className="mb-4">
            <h2 className="text-md font-semibold mb-2">{category}</h2>
            <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
              {categorySkills.map((skill, i) => (
                <motion.li 
                  className="bg-[#f0f4f8] inline-block dark:bg-gray-800 rounded-md px-3 py-1 text-sm text-gray-800 dark:text-gray-200 border border-transparent mb-2 mx-auto sm:mx-0 shadow-md p-6 dark:bg-blue4"
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
        ))}
      </div>
    </motion.section>
  )
}

export default Skills
