"use client"
import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-1 max-w-[45rem] leading-8 sm:mb-4 scroll-mt-4"
      initial={{ opacity: 0, y: 1 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <h1 className="text-xl font-bold text-center">About me</h1>
      <div>
        <p className="mb-3">
          Hello! My name is Shreya. I am a <span className="font-medium">multipassionate individual and tech enthusiast</span>, captivated by the endless opportunities of
          technology for social good. 
        </p>

        <p className="mb-3">
          👩🏽‍💻 {/*I am an <span className="font-medium">Associate Software Engineer</span> at Realtor.com.*/} Previously, I was a Software Engineer intern at Realtor.com and 
          the UC Santa Cruz Genomics Institute.
        </p>

        <p className="mb-3">
          🎓 I recently earned a <span className="font-medium">Bachelor of Science in Computer Science</span> from UC Santa Cruz. 
        </p>

        <p className="mb-3">
          💻 I am proficient in several programming languages, including <span className="font-medium">Python, JavaScript, and C</span>, and am comfortable working 
          with databases and software development tools. 
        </p>

        <p className="mb-3">
          🏢 I thrive in <span className="font-medium">collaborative environments</span> and enjoy working with others to solve complex problems. 
        </p>

        <p className="mb-3">
          When I&apos;m not coding, I enjoy:
        </p>

        <p className="mb-3">
          📚 <a className="underline cursor-pointer" href="https://www.goodreads.com/user/show/153897581-shreya" target="_blank">
          Reading
          </a>
        </p>

        <p className="mb-3">🚶🏽 Taking long walks</p>

        <p className="mb-3">✈️ Planning my next trip</p>

        <p className="mb-3">⭐ Learning random facts about geography, history, and astronomy</p>

        <p className="mb-3">🗺️ Learning languages (Currently: Spanish!)</p>
      </div>
    </motion.section>
  )
}

export default About