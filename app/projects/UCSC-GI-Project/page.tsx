import React from 'react'
import Image from "next/image";
import gi_cover from "@/lib/cover/gi_cover.png"
import { FaArrowCircleLeft } from "react-icons/fa";
import Link from "next/link";

const page = () => {
  return (
    <div className="-mt-28 sm:-mt-36 px-4 sm:px-6 lg:px-12">
          <div className="w-full mx-auto mt-4 mb-10 p-4 sm:p-6 md:p-8 bg-blue rounded-lg shadow-md flex flex-col sm:flex-row gap-6 transition-all duration-200 hover:backdrop-blur-lg">
            <Image
              src={gi_cover}
              alt="GI Cover"
              width={800}
              height={400}
              className="rounded-lg object-cover w-full sm:w-1/2 h-auto"
              priority
            />
            <div className="w-full">
              <Link
                href="/"
                className=" inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:underline"
              >
                <FaArrowCircleLeft size={16} />
                Back Home
              </Link>
              <h1 className="text-3xl sm:text-4xl font-bold mt-3">UCSC Genomics Institute Internship</h1>
              <p className="mt-3">2022-2024</p>
              <p className="mt-3">Contributed to the development of a genomic data visualization application.</p>
            </div>
          </div>
          <div className="w-full m-10">
            <h1 className="text-2xl sm:text-3xl font-bold">Intro</h1>
            <p>During college, I joined the UC Santa Cruz Genomics Institute as a software developer intern to work on the sequenceTubeMap, an open source genomic data visualization application.</p>
            <br></br>
            <p>Tools and technologies: React.js, JavaScript, D3.js</p>
          </div>
          <div className="w-full m-10">
            <h1 className="text-2xl sm:text-3xl font-bold">My Contributions</h1>
            <p>During my internship, I worked on a variety of tasks that contributed to the development and improvement of key features in the project. Overall, I worked on: UI/UX Enhancements, writing robust documentation, bug fixes, data computation, and server configuration.</p>
            <br></br>
            <p>I implemented and improved various user interface components, such as dropdowns and buttons, making the application more intuitive and visually appealing while also providing users more options to carry out various tasks. I also wrote and enhanced help features and documentation, ensuring that users had clear guidance and instructions to properly interact with the application.</p>
            <br></br>
            <p>On the backend, I made a variety of changes and fixes to handling data formats, processing node coverage, and addressing issues related to navigation and URL handling. I also worked on visual distinctions within the application, adding color-coding and highlighting to make data interpretation easier and more accurate. In addition, I wrote functions to compute various data and statistics which were also presented to the user while they interacted with the app.</p>
          </div>
          <div className="w-full m-10">
            <a
            href="https://github.com/vgteam/sequenceTubeMap"
            target="_blank"
            rel="noopener noreferrer"
            >
            <h1 className="text-2xl sm:text-3xl font-bold text-blue underline mx-auto text-blue">
                Source Code
            </h1>
            </a>
          </div>
          <div className="w-full m-10">
            <a
            href="https://www.biorxiv.org/content/10.1101/2025.02.18.638852v2.full"
            target="_blank"
            rel="noopener noreferrer"
            >
            <h1 className="text-2xl sm:text-3xl font-bold text-blue underline mx-auto text-blue">
                Here&apos;s a paper on this project!
            </h1>
            </a>
          </div>
        </div>
  )
}

export default page