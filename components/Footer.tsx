"use client"
import React from 'react'
import { motion } from "framer-motion"
import { FaHeart } from "react-icons/fa";
import { FaCopyright } from "react-icons/fa";

function Footer() {
  return (
    <section className='mt-40'>
      <motion.div 
        className="flex flex-col items-center justify-center"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1
        }}
      >
        
        <div className='left-0 w-full py-4 text-center z--100'>
          Made with <FaHeart className="inline align-middle" /> by Shreya Sundar <FaCopyright className="inline align-middle"/> 2025 <br/>
          Built with TypeScript and Next.js
        </div>
      
      </motion.div>
    </section>
  )
}

export default Footer