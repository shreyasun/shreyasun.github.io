"use client"

import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { RiFilePaper2Line } from "react-icons/ri";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare, FaGoodreads  } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import shreyaa from "@/lib/shreyaa.jpg";
import { useSectionInView } from "@/lib/hooks";
import Footer from '@/components/Footer'

export default function Intro() {
  const { ref } = useSectionInView("Intro", 0.5);
  
  return (
    <section 
      className="mb-25 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
      ref={ref}
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
            alt="portrait"
            width="185"
            height="185"
            quality="150"
            priority={true}
            className="h-32 w-32 rounded-full object-cover border-[0.35rem] border-blue shadow-xl"
          />
        </motion.div>
      </div>
      <motion.p className="mb-4 mt-4 px-4 text-1l font-medium !leading-[1.5] sm:text-2xl"
        initial={{opacity: 0, y: 100}}
        animate={{opacity: 1, y: 0}}
      >
        <span className="font-bold">Hello, I&apos;m Shreya. 👩🏽‍💻</span> <br/>I&apos;m a{" "}
        Software Engineer passionate about crafting innovative solutions that drive social good.
      </motion.p>
      <motion.p className="mb-4 mt-4 px-4 text-1l font-medium !leading-[1.5] sm:text-xl"
        initial={{opacity: 0, y: 100}}
        animate={{opacity: 1, y: 0}}
      >
        I bring a versatile blend of design, development, and product management skills to build impactful, user-centered technology.
      </motion.p>

      <br />

      <motion.div 
        className="flex flex-wrap items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1
        }}
      >

        <a className="group bg-blue p-4 text-background flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover-bg-pink-950 active:scale-105 transition cursor-pointer"
          href="https://www.linkedin.com/in/shreyasundar" target="_blank">
          <BsLinkedin />
        </a>

        <a className="group bg-pink p-4 text-background flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover-bg-pink-950 active:scale-105 transition cursor-pointer"
          href="mailto:shreyasundar27@gmail.com">
          <MdEmail />
        </a>

        <a className="group bg-blue p-4 text-background flex items-center gap-2 text-[1.35rem] rounded-full outline-none focus:scale-110 hover:scale-110 hover-bg-pink-950 active:scale-105 transition cursor-pointer"
          href="https://www.github.com/shreyasun" target="_blank">
          <FaGithubSquare />
        </a>

        <a className="group bg-pink p-4 text-background flex items-center gap-2 text-[1.35rem] rounded-full outline-none focus:scale-110 hover:scale-110 hover-bg-pink-950 active:scale-105 transition cursor-pointer"
          href="https://www.goodreads.com/user/show/153897581-shreya" target="_blank">
          <FaGoodreads />
        </a>
      </motion.div>
      <Footer />
    </section>
    )
  }