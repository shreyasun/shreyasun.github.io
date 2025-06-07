"use client"
import React from 'react'

import Image from "next/image";
import bloom from "@/lib/cover/bloom_cover.png";
import SolutionImage from "./SolutionImage.png";
import LikesDislikes from "./LikesDislikes.png";
import UP1 from "./UP1.png";
import UP2 from "./UP2.png";
import lofi1 from "./lofi1.png";
import lofi2 from "./lofi2.png";
import lofi3 from "./lofi3.png";
import lofi4 from "./lofi4.png";
import lofisum from "./lofisum.png";
import hifi1 from "./hifi1.png";
import hifi2 from "./hifi2.png";
import comp_analysis from "./comp-analysis.png";
import brainstorm from "./brainstorm.png";
import SurveyQs from "./SurveyQs.png";
import { FaArrowCircleLeft } from "react-icons/fa";
import Link from "next/link";

export default function BloomUX() {
  return (
    <div className="-mt-28 sm:-mt-36 px-4 sm:px-6 lg:px-12">
      <div className="w-full mx-auto mt-4 mb-10 p-4 sm:p-6 md:p-8 bg-blue rounded-lg shadow-md flex flex-col sm:flex-row gap-6 transition-all duration-200 hover:backdrop-blur-lg">
        <Image
          src={bloom}
          alt="Bloom Project visual"
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
          <h1 className="text-3xl sm:text-4xl font-bold mt-3">Bloom</h1>
          <p className="mt-3">Creative Tech Design @ UCSC</p>
          <p className="mt-3">Minimally designed secondhand clothing website that simplifies the online shopping experience.</p>
        </div>
      </div>
      <div className="w-full m-10">
        <p>Team: Shreya Sundar, Allison Chu, Jessica Yoon, Crystal Huang</p>
        <p>Role: UX Designer, Project Manager</p>
        <p>Tools: Figma, Google Suite</p>
      </div>
      <div className="w-full m-10">
        <h1 className="text-2xl sm:text-3xl font-bold text-blue">Background</h1>
        <p>Bloom is an online secondhand clothing store that seeks to modernize the thrifting experience to revolutionize and promote sustainable shopping. On Bloom, anyone can sell gently used clothes or find good-as-new, fashionable, affordable pieces to add to their wardrobe.</p>
      </div>
      <div className="w-full m-10">
        <h1 className="text-2xl sm:text-3xl font-bold">Problem </h1>
        <p>Today, nearly every product and service is just a few clicks away from being purchased online. E-commerce businesses are continually growing, and more and more individuals opt to shop online. The fashion sector especially dominates e-commerce, and with the rise in popularity of thrifting and secondhand clothing shopping, such stores are also being found online.</p>
        <p>Despite the high regard for online clothing shopping, the experience of online shopping can get quite complicated. From the difficulty of finding desired products, to multistep processes of making a purchase, there are plenty of opportunities to simplify the online shopping experience and make it easier, quicker, and simpler. How can we accomplish this?</p>
      </div>
      <div className="w-full m-10">
        <h1 className="text-2xl sm:text-3xl font-bold">Solution</h1>
        <p>Bloom, a minimally designed secondhand clothing website that simplifies the shopping experience. Bloom makes it simple to find what a user is looking for, to get the information they require without being overwhelmed, and check out without too many steps.</p>
        <Image
          src={SolutionImage}
          alt="SolutionImage"
          className="rounded-lg object-cover w-400 sm:w-300 h-auto mx-auto m-5"
          priority
        />
      </div>
      <div className="w-full m-10">
        <h1 className="text-2xl sm:text-3xl font-bold text-blue">Research</h1>
        <h1 className="text-2xl sm:text-3xl font-bold">Surveys</h1>
        <p>We conducted a survey with 12 individuals to gain insight about their shopping preferences. We aimed to get information about individuals`&apos;` preferred mode of shopping, their online shopping process, and what they like or dislike about the shopping experience.</p>
        <Image
          src={SurveyQs}
          alt="Survey"
          width={600}
          height={300}
          className="rounded-lg object-cover w-400 sm:w-300 h-auto mx-auto m-5"
          priority
        />
        <p>Survey responses showed that our users get frustrated when a site`&apos;`s user interface is too cluttered, when checking out is complicated, and when there isn`&apos;`t enough information about a product.</p>
        <Image
          src={LikesDislikes}
          alt="Survey"
          width={600}
          height={300}
          className="rounded-lg object-cover w-400 sm:w-300 h-auto mx-auto m-5"
          priority
        />
      </div>
      <div className="w-full m-10">
        <h1 className="text-2xl sm:text-3xl font-bold">User Personas</h1>
        <p>Time to bring our users to life based on our survey findings! After combing through the survey responses, we created 2 user personas to best represent the demographic of our survey responses. One of them was a young college student who tends to shop a lot and the other was a working adult who tends to shop less.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Image
            src={UP1}
            alt="UP 1"
            width={400}
            height={300}
            className="rounded-lg object-cover w-400 sm:w-30 h-auto m-5"
            priority
          />
          <Image
            src={UP2}
            alt="UP 2"
            width={400}
            height={300}
            className="rounded-lg object-cover w-400 sm:w-300 h-auto m-5"
            priority
          />
        </div>
      </div>
      <div className="w-full m-10">
        <h1 className="text-2xl sm:text-3xl font-bold">Competitive Analysis</h1>
        <p>After getting a better picture of our users, we wanted to see what was already out there and how we can adapt existing products to our users`&apos;` wants and needs. We looked at the advantages and disdvantages of the secondhand store competitors ThredUp, Poshmark, and Depop. We also added in H&M for analysis because we thought it’d be good to have variety and have an opportunity to take a look at a clothing store that appeals to a broad amount of people. After looking at the following websites, we observed that most websites had filter options to optimize product search, the amount of clothing on the site felt overwhelming a lot of the time.</p>
        <Image
            src={comp_analysis}
            alt="Competitive Analysis"
            width={600}
            height={300}
            className="rounded-lg object-cover w-600 sm:w-300 h-auto mx-auto m-5"
            priority
          />
      </div>
      <div className="w-full m-10">
        <h1 className="text-2xl sm:text-3xl font-bold text-blue">Ideate</h1>
        <h1 className="text-2xl sm:text-3xl font-bold">Brainstorming</h1>
        <p>From our research with the survey, competitive analysis, and user personas, we compiled them into a list of things users like about shopping online then turned them into features. We then prioritized which features to design by voting and discussing.</p>
        <p>We ended up with a list of 10 main features that we needed to include in the design for a good user experience, which included sorting ability, different clothing sections, add to cart feature, a recommended for you feature, etc.</p>
        <Image
            src={brainstorm}
            alt="Brainstorming"
            width={400}
            height={300}
            className="rounded-lg object-cover w-400 sm:w-300 h-auto mx-auto m-5"
            priority
          />
      </div>
      <div className="w-full m-10">
        <h1 className="text-2xl sm:text-3xl font-bold">Low Fidelity Designs</h1>
        <p>After our research and planning, we were ready to begin designing! My team and I went through multiple stages of low-fidelity designs and regularly discussed and iterated upon each others designs.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Image
            src={lofi1}
            alt="lofi1"
            width={400}
            height={300}
            className="rounded-lg object-cover w-400 sm:w-30 h-auto m-5"
            priority
          />
          <Image
            src={lofi2}
            alt="lofi2"
            width={400}
            height={300}
            className="rounded-lg object-cover w-400 sm:w-300 h-auto m-5"
            priority
          />
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          <Image
            src={lofi3}
            alt="lofi3"
            width={400}
            height={300}
            className="rounded-lg object-cover w-400 sm:w-30 h-auto m-5"
            priority
          />
          <Image
            src={lofi4}
            alt="lofi4"
            width={400}
            height={300}
            className="rounded-lg object-cover w-400 sm:w-300 h-auto m-5"
            priority
          />
        </div>
      </div>
      <div className="w-full m-10">
        <h1 className="text-2xl sm:text-3xl font-bold">Lo-Fi Iterations</h1>
        <Image
            src={lofisum}
            alt="Lofi summary"
            width={1000}
            height={500}
            className="rounded-lg object-cover w-1000 sm:w-300 h-auto mx-auto m-5"
            priority
          />
      </div>
      <div className="w-full m-10">
        <h1 className="text-2xl sm:text-3xl font-bold text-blue">High Fidelity Iterations and Final Design</h1>
        <p>We continued to develop our final designs by continually iterating upon our low-fidelity designs. We collaboratively brainstormed additional features, decided on a color scheme, and compared and refined each others`&apos;` designs.</p>
      </div>
      <div className="w-full m-10">
        <h1 className="text-2xl sm:text-3xl font-bold">Round 1 Iterations</h1>
        <Image
            src={hifi1}
            alt="Hifi 1"
            width={1000}
            height={500}
            className="rounded-lg object-cover w-1000 sm:w-300 h-auto mx-auto m-5"
            priority
          />
      </div>
      <div className="w-full m-10">
        <h1 className="text-2xl sm:text-3xl font-bold">Round 2 Iterations</h1>
        <Image
            src={hifi2}
            alt="Hifi 2"
            width={1000}
            height={500}
            className="rounded-lg object-cover w-1000 sm:w-300 h-auto mx-auto m-5"
            priority
          />
      </div>
      <div className="w-full m-10">
        <a
          href="https://www.figma.com/proto/reHHm6IeUMKWLo90E4Nofb/Fashion-Website!?page-id=125%3A2007&node-id=275-2617&viewport=-1291%2C239%2C0.08&scaling=scale-down&starting-point-node-id=275%3A2617"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h1 className="text-2xl sm:text-3xl font-bold text-blue underline mx-auto">
            Click to view final design!
          </h1>
        </a>
      </div>
      <div className="w-full m-10">
        <h1 className="text-2xl sm:text-3xl font-bold text-blue">Conclusion</h1>
        <p>This project was an incredible experience where I improved my UX Design skills but also got valuable experience working in a collaborative setting and leading a project. I benefitted a lot from being able to have deep discussions with my team members and share my ideas and gain feedback from them. I especially learned how important communication is, and how important it is for everyone to stay on the same page for our ideas to evolve and for everyone to have the opportunity to contribute.</p>
      </div>
    </div>
  );
}

