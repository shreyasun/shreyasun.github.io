"use client";
import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiences } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { useTheme } from "@/context/theme-context";

function Experience() {
  const { ref } = useSectionInView("Experience", 0.5);
  const { theme } = useTheme();
  const bgColor = theme === 'dark' ? '#204275' : '#e0f0e3';
  const iconColor = theme === 'dark' ? '#000000' : '#ffffff';

  return (
    <motion.section 
      //id="experience" 
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      ref={ref} 
      className="max-w-[50rem] gap-5 text-center scroll-mt-28 mb-4 sm:mb-4"
    >
      <h1 className="text-xl font-bold">Experience</h1>
      <VerticalTimeline lineColor="#CFE2F3">
        {experiences.map((experience, i) => (
          <React.Fragment key={i}>
            <motion.div 
              key={i} 
              ref={ref} 
              className="vertical-timeline-element"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "tween",
                duration: 0.2,
              }}  
            >
              <VerticalTimelineElement
                key={i}
                visible={true}
                contentStyle={{
                  background: `${bgColor}`,
                  boxShadow: "none",
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  textAlign: "left",
                  padding: "0.8rem 1.5rem",
                }}
                contentArrowStyle={{
                  borderRight: "0.4rem solid #e0f0e3",
                }}
                date={experience.date}
                icon={experience.icon}
                iconStyle={{
                  background: `${iconColor}`,
                  fontSize: "0.7rem",
                }}
              >
                <h3 className="font-semibold capitalize">{experience.title}</h3>
                <p className="font-normal !mt-0">{experience.company}</p>
                <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                  {experience.description}
                </p>
              </VerticalTimelineElement>
            </motion.div>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </motion.section>
  );
}

export default Experience;
