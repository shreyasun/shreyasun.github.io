"use client";
import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiences } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { MdOutlineOpenInNew } from "react-icons/md";
import Image from "next/image"


function Experience() {
  const { ref } = useSectionInView("Experience", 0.5);

  return (
    <motion.section
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      className="max-w-[50rem] gap-5 text-center scroll-mt-5 mb-4 mx-auto sm:mb-4 flex flex-col items-center"
      ref={ref}
    >
      <h1 className="text-xl text-bold">Experiences</h1>
      <div className="space-y-8 mx-auto max-w-full items-center">
        {experiences.map((experience, index) => (
          <div key={index} className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-20 h-20 bg-white rounded-xl mt-1">
              <Image
                src={experience.image}
                alt="portrait"
                width="185"
                height="185"
                quality="150"
                priority={true}
                className="h-20 w-20 rounded-xl object-cover shadow-xl"
              />
            </div>
            <div className="flex flex-col text-left">
              <h2 className="font-semibold text-text text-transform-none">
                {experience.company}
              </h2>
              <h3 className="font-normal text-text text-transform-none">
                {experience.title}
              </h3>
              <br />
              <p className="font-normal text-text">{experience.date}</p>
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
