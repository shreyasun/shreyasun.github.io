import React from 'react'
import Image from "next/image";
import jeo from "@/lib/cover/jeo.png"
import { FaArrowCircleLeft } from "react-icons/fa";
import Link from "next/link";

const page = () => {
  return (
    <div className="-mt-28 sm:-mt-36 px-4 sm:px-6 lg:px-12">
        <div className="w-full mx-auto mt-4 mb-10 p-4 sm:p-6 md:p-8 bg-blue rounded-lg shadow-md flex flex-col sm:flex-row gap-6 transition-all duration-200 hover:backdrop-blur-lg">
            <Image
                src={jeo}
                alt="Jeo Cover"
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
                <h1 className="text-3xl sm:text-4xl font-bold mt-3">Jeopardy Maker</h1>
                <p className="mt-3">Personal Project</p>
                <p className="mt-3">Tool for users to create trivia cards that will be rendered into an interactive Jeopardy Board.</p>
            </div>
        </div>
        <div className="w-full m-10">
            <h1 className="text-2xl sm:text-3xl font-bold">Description</h1>
            <p>As someone who loves trivia and learning random facts, I wanted to create a project that encompasses that interest. I really enjoy watching Jeopardy!, one of the most popular American game shows, which inspired me to create a web application modeled after the Jeopardy question and answer format. I decided to create a Jeopardy Maker, where users can add trivia cards to be generated into an interactive Jeopardy Board. It includes a Firebase login, MongoDB Database, RESTful API calls using axios and a Node-Express Server, and a user interface developed by React.js.</p>
            <p>Tools and technologies: React.js, Node.js, Express.js, MongoDB, Firebase</p>
        </div>
      <div className="w-full m-10">
            <h1 className="text-2xl sm:text-3xl font-bold">Future Plans</h1>
            <p>This project has been an incredible experience for me to learn about the fundamentals of full stack development! However, this is just a taste and there is so much more to learn. This is my stopping point for now, although if I were to come back to this project in the future, there are several things I would like to change, edit, or do:
                <ol className="list-decimal pl-6">
                    <li>Deploy it online!</li>    
                    <li>Use a different database, or use MongoDB Atlas on MongoDB Cloud. This would definitely help during deployment.</li>
                    <li>Significantly change my UI structure.</li>
                    <li>In hindsight, I realize that I could have created a lot more individual components with props to make my code a lot more cleaner and less repetitive. However while coding I was pretty much putting my ideas down and going with what worked at the moment!</li>
                    <li>Continue to identify any more bugs... there`&apos;`s probably still some in there unfortunately</li>
                </ol>
                ... and more!
            </p>
        </div>
        <div className="w-full m-10">
            <a
            href="https://docs.google.com/document/d/1hjBvqoq0zneCcZTYWjvLQzewFjbkgU4WAn2RoOblrlA/edit?tab=t.0"
            target="_blank"
            rel="noopener noreferrer"
            >
            <h1 className="text-2xl sm:text-3xl font-bold text-blue underline mx-auto">
                Usage Guide
            </h1>
            </a>
      </div>
        <div className="w-full m-10">
            <a
            href="https://github.com/shreyasun/jeopardy-maker"
            target="_blank"
            rel="noopener noreferrer"
            >
            <h1 className="text-2xl sm:text-3xl font-bold text-blue underline mx-auto text-blue">
                Source Code
            </h1>
            </a>
      </div>
      <div className="w-full m-10">
        <h1 className="text-2xl sm:text-3xl font-bold">Project Demo Video</h1>
        <div className="aspect-w-16 aspect-h-9 w-full rounded-lg overflow-hidden">
          <iframe
            src="https://www.youtube.com/embed/h5tqkI4YimE"
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