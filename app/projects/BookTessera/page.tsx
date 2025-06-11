import React from 'react'
import Image from "next/image";
import booktessera from "@/lib/cover/booktessera.png"
import { FaArrowCircleLeft } from "react-icons/fa";
import Link from "next/link";

const page = () => {
  return (
    <div className="-mt-28 sm:-mt-36 px-4 sm:px-6 lg:px-12">
        <div className="w-full mx-auto mt-4 mb-10 p-4 sm:p-6 md:p-8 bg-pink rounded-lg shadow-md flex flex-col sm:flex-row gap-6 transition-all duration-200 hover:backdrop-blur-lg">
            <Image
                src={booktessera}
                alt="booktessera Cover"
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
                <h1 className="text-3xl sm:text-4xl font-bold mt-3">BookTessera</h1>
                <p className="mt-3">UCSC CSE 115a - Introduction to Software Engineering - Group Project</p>
                <p className="mt-3"> </p>
            </div>
        </div>
        <div className="w-full m-10">
          <p>Team: Shreya Sundar, Sophie Hernandez, Pakhi Sinha, Alex Furlong, Naimisha Daripineni</p>
          <p>Tools: React, Node, Firebase, Python, Google Suite</p>
        </div>
        <div className="w-full m-10">
            <h1 className="text-2xl sm:text-3xl font-bold">Description</h1>
            <p>BookTessera is a web application that redefines the ticket purchasing experience by offering a platform that is transparent, user-friendly & scalper-resistant.</p>
        </div>
        <div className="w-full m-10">
            <h1 className="text-2xl sm:text-3xl font-bold">Features</h1>
            <ul className="list-disc list-inside m-5">
              <li>Login/Sign Up</li>
              <li>View a list of different events</li>
              <li>View more information about an event</li>
              <li>See purchase history</li>
              <li>Add/remove/edit payment method</li>
              <li>Be able to enter a queue and be assigned a randomized seat</li>
              <li>Purchase a ticket</li>
            </ul>
        </div>
      <div className="w-full m-10">
        <h1 className="text-2xl sm:text-3xl font-bold">Project Demo Video</h1>
        <div className="aspect-w-50 aspect-h-50 w-full rounded-lg overflow-hidden">
          <iframe
            src="https://youtube.com/embed/F9l4ycH7cao"
            title="Project video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="mt-5"
          ></iframe>
        </div>
    </div>
      
    </div>
  )
}

export default page