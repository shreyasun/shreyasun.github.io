"use client"
import React from 'react'
import { motion } from "framer-motion"
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { FaCopyright } from "react-icons/fa";

function Footer() {
  return (
    <section>
      <motion.div 
        className="flex flex-col items-center justify-center"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1
        }}
      >
        <div className="flex gap-4 mb-4">
          <a className="group bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover-bg-gray-950 active:scale-105 transition cursor-pointer" 
            href="https://www.linkedin.com/in/" target="_blank">
            <BsLinkedin />
          </a>

          <a className="group bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover-bg-gray-950 active:scale-105 transition cursor-pointer">
            <MdEmail />
          </a>

          <a className="group bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full outline-none focus:scale-110 hover:scale-110 hover-bg-gray-950 active:scale-105 transition cursor-pointer" 
            href="https://www.github.com/shreyasun" target="_blank">
            <FaGithubSquare />
          </a>
        </div>

        <div className='mb-1 max-w-[45rem] text-center leading-8 sm:mb-8 scroll-mt-17'>
          Made with <FaHeart className="inline align-middle" /> by Shreya Sundar <FaCopyright className="inline align-middle"/> 2024 <br/>
          Built with TypeScript and Next.js
        </div>
      
      </motion.div>
    </section>
  )
}

export default Footer