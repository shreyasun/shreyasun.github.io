"use client";
import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiences } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { MdOutlineOpenInNew } from "react-icons/md";

function Experience() {
  const { ref } = useSectionInView("Experience", 0.5);

  return (
    <motion.section
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      className="max-w-[50rem] gap-5 text-center scroll-mt-5 mb-4 mx-auto sm:mb-4 flex flex-col items-center"
      ref={ref}
    >
      <h1 className="text-xl font-bold mb-6">My Experiences</h1>
      <div className="space-y-8 mx-auto max-w-full items-center">
        {experiences.map((experience, index) => (
          <div key={index} className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-3 h-3 bg-purp1 rounded-full mt-1"></div>
            <div className="flex flex-col text-left">
              <h3 className="font-semibold capitalize text-purp3">
                {experience.title} @ {experience.company}
              </h3>
              <p className="font-normal text-purp2">{experience.date}</p>
              {experience.description && (
                <p className="text-purp2">{experience.description}</p>
              )}
              {experience.link && (
                <div className="mt-1 block cursor-pointer">
                  <a href={experience.link} target="_blank" rel="noopener noreferrer">
                    <div className="bg-purp3 rounded-md px-3 py-1 text-sm text-purp1 border border-transparent hover:bg-purp4 shadow-md flex items-center inline-flex">
                      View Work <MdOutlineOpenInNew className="ml-1" />
                    </div>
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
        <div></div>
        <div></div>
      </div>
    </motion.section>
  );
}

export default Experience;
