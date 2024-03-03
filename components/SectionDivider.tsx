"use client"

import React from 'react'
import { PiFlowerLotusBold } from "react-icons/pi";
import { motion } from "framer-motion"

function SectionDivider() {
  return (
    <motion.div
      className="my-24 h-16 w-1 rounded-full hiden sm:block"
      initial={{opacity: 0, y: 100}}
      animate={{opacity: 1, y: 0}}
      transition={{delay: 0.125}}
     >
      <PiFlowerLotusBold />
    </motion.div>
  )
}

export default SectionDivider