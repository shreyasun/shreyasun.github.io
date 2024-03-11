"use client"

import React from 'react'
import Image from 'next/image'
import { motion } from "framer-motion"
import Link from 'next/link';
import { RiFilePaper2Line } from "react-icons/ri";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import shreyaa from "@/lib/shreyaa.jpg";
import { useSectionInView } from '@/lib/hooks';


export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  
  return (
    <section 
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
      ref={ref}
      id="home"
    >
      <div className='flex items-center justify-center'>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "tween",
            duration: 0.2,
          }}
        >
          <Image
            src={shreyaa}
            alt="Ricardo portrait"
            width="192"
            height="192"
            quality="95"
            priority={true}
            className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
          />
        </motion.div>
      </div>
      <motion.p className="mb-10 mt-4 px-4 text-1l font-medium !leading-[1.5] sm:text-2xl"
        initial={{opacity: 0, y: 100}}
        animate={{opacity: 1, y: 0}}
      >
        <span className="font-bold">Hello, I'm Shreya Sundar.</span> I'm a{" "}
        <span className="font-bold">Software Engineer</span> who enjoys{" "}
        <span className="font-bold">developing and designing</span> innovative digital solutions.{" "}
        My areas of interest include 
        <span className="italic"> databases, full stack development, machine learning,</span> and more.{" "}
      </motion.p>

      <motion.div 
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1
        }}
      >
        <a href="https://github.com/shreyasun/shreya_sundar_resume/blob/main/ShreyaSundarResume.pdf" target="_blank"
          className="group bg-white text-black px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover-bg-gray-950 active:scale-105 transition">
          Resume <RiFilePaper2Line className='opacity-70 group-hover:translate-x-1 transition'/>
        </a>

        <a className="group bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover-bg-gray-950 active:scale-105 transition cursor-pointer"
          href="https://www.linkedin.com/in/shreyasundar" target="_blank">
          <BsLinkedin />
        </a>

        <a className="group bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover-bg-gray-950 active:scale-105 transition cursor-pointer">
          <MdEmail />
        </a>

        <a className="group bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full outline-none focus:scale-110 hover:scale-110 hover-bg-gray-950 active:scale-105 transition cursor-pointer"
          href="https://www.github.com/shreyasun" target="_blank">
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
    )
  }