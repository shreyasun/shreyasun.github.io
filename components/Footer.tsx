"use client"
import React from 'react'
import { motion } from "framer-motion"
import Link from 'next/link';
import { RiFilePaper2Line } from "react-icons/ri";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Footer() {
  return (
    <section>
      ssundar6@ucsc.edu 
      Built with TypeScript and Next.js
      <motion.div 
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1
        }}
      >

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

export default Footer