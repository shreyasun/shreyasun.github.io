import React from 'react'
import Image from "next/image";
import rdc_sum from "@/lib/cover/rdc_sum.png"
import { FaArrowCircleLeft } from "react-icons/fa";
import Link from "next/link";


function RDC_Internship() {
  return (
    <div className="-mt-28 sm:-mt-36 px-4 sm:px-6 lg:px-12">
      <div className="w-full mx-auto mt-4 mb-10 p-4 sm:p-6 md:p-8 bg-blue rounded-lg shadow-md flex flex-col sm:flex-row gap-6 transition-all duration-200 hover:backdrop-blur-lg">
        <Image
          src={rdc_sum}
          alt="RDC Cover"
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
          <h1 className="text-3xl sm:text-4xl font-bold mt-3">Realtor.com Internship</h1>
          <p className="mt-3">Summer 2024</p>
          <p className="mt-3">Created a cost-saving storage solution for agent-consumer call recordings.</p>
        </div>
      </div>
      <div className="w-full m-10">
        <h1 className="text-2xl sm:text-3xl font-bold">Intro</h1>
        <p>From June 3 to August 16, 2024, I interned as a software engineer at Realtor.com, working in the Customer Experiences department on FocusFire, the development app behind ReadyConnect Concierge, a real estate referral platform. In this internship, I developed a more cost effective storage solution for call recordings using AWS S3.</p>
        <p>Tools and technologies: Python, Amazon Web Services (IAM, S3), SQL (PostgreSQL), Terraform, Twilio</p>
      </div>
      <div className="w-full m-10">
        <h1 className="text-2xl sm:text-3xl font-bold">Project Presentation</h1>
        <div className="w-full flex justify-center my-8">
          <iframe
            src="https://docs.google.com/presentation/d/1mvN4W-jtCX7kPPjWaKbAsp4zlKWXUNED872lftbwbss/embed?edit#slide=id.g13bbb6e15e6_0_0"
            width="800"
            height="480"
            allowFullScreen
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  )
}

export default RDC_Internship