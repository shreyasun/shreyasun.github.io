"use client"

import Image from "next/image";
import monami from "./monami.png";
import monami2 from "./monami2.png";
import research from "./research.png";
import comp from "./comp.png";
import brainstorm from "./brainstorm.png";
import lofi1 from "./lofi1.png";
import style from "./style.png";
import hifi1 from "./hifi1.png";
import hifi2 from "./hifi2.png";
import hifi3 from "./hifi3.png";
import AB from "./AB.png";
import Combine1 from "./Combine1.png";
import Combine2 from "./Combine2.png";


import { FaArrowCircleLeft } from "react-icons/fa";
import Link from "next/link";

const page = () => {
  return (
    <div className="-mt-28 sm:-mt-36 px-4 sm:px-6 lg:px-12">
          <div className="w-full mx-auto mt-4 mb-10 p-4 sm:p-6 md:p-8 bg-pink rounded-lg shadow-md flex flex-col sm:flex-row gap-6 transition-all duration-200 hover:backdrop-blur-lg">
            <Image
              src={monami}
              alt="MonAmi Project visual"
              width={800}
              height={400}
              className="rounded-lg object-cover w-full sm:w-1/2 h-auto"
              priority
            />
            <div className="w-full">
              <Link
                href="/"
                className=" inline-flex items-center gap-2 text-sm font-medium text-pink-600 hover:underline"
              >
                <FaArrowCircleLeft size={16} />
                Back Home
              </Link>
              <h1 className="text-3xl sm:text-4xl font-bold mt-3">Mon Ami</h1>
              <p className="mt-3">Creative Tech Design @ UCSC</p>
              <p className="mt-3">All-in-one mental wellness platform that provides users mental health content and a supportive community.</p>
            </div>
          </div>
          <div className="w-full m-10">
            <p>Team: Shreya Sundar, Yael Gampel, Eliza Gonzales</p>
            <p>Role: UX Designer, UX Researcher</p>
            <p>Tools: Figma, Notion, Google Suite</p>
          </div>
          <div className="w-full m-10">
            <h1 className="text-2xl sm:text-3xl font-bold text-pink">Background</h1>
            <p>My team and I felt passionate about improving mental health for young adults and college students, especially seeing the effects of the Covid-19 pandemic on social interactions and overall well-being. We wanted to create a multidisciplinary wellness application with access to mental health content, along with socialization and community.</p>
          </div>
          <div className="w-full m-10">
            <h1 className="text-2xl sm:text-3xl font-bold">Problem </h1>
            <p>There are a wide variety of mental health care related applications out there. However, many of them have limited and exclusive features, which prevents users from getting a full optimal experience using that application.</p>
          </div>
          <div className="w-full m-10">
            <h1 className="text-2xl sm:text-3xl font-bold">Solution</h1>
            <p>Mon Ami is an all in one mental wellness application that encourages users to connect with themselves, engage in meditation, explore their interests, and connect with like-minded individuals.</p>
            <Image
              src={monami2}
              width={600}
              height={300}
              alt="SolutionImage"
              className="rounded-lg object-cover w-400 sm:w-300 h-auto mx-auto m-5"
              priority
            />
          </div>
          <div className="w-full m-10">
            <h1 className="text-2xl sm:text-3xl font-bold text-pink">Research</h1>
            <p>Our preliminary research process involved exploring existing mental health platforms and interviewing college students. This led us to a few insights on what young adults want out of a mental health related application.</p>
            <Image
              src={research}
              alt="Research"
              className="rounded-lg object-cover w-400 sm:w-300 h-auto mx-auto m-5"
              priority
            />
          </div>
          <div className="w-full m-10">
            <h1 className="text-2xl sm:text-3xl font-bold">Competitive Analysis</h1>
            <Image
              src={comp}
              alt="competitive analysis"
              width={600}
              height={300}
              className="rounded-lg object-cover w-400 sm:w-300 h-auto mx-auto m-5"
              priority
            />
            <p>Key Insights:</p>
            <ol className="list-decimal list-inside">
              <li>Meditation is among the most popular features in competitor platforms</li>
              <li>Users desired more content variety to engage with</li>
              <li>Users want a community feature where they can connect with others</li>
            </ol>
          </div>
          <div className="w-full m-10">
            <h1 className="text-2xl sm:text-3xl font-bold text-pink">Ideate</h1>
            <h1 className="text-2xl sm:text-3xl font-bold">Brainstorming</h1>
            <p>Based on survey insights, we brainstormed ideas for our design.</p>
            <Image
                src={brainstorm}
                alt="brainstorm"
                width={800}
                height={400}
                className="rounded-lg object-cover w-600 sm:w-300 h-auto mx-auto m-5"
                priority
              />
          </div>
          <div className="w-full m-10">
            <h1 className="text-2xl sm:text-3xl font-bold text-pink">Prototype</h1>
            <h1 className="text-2xl sm:text-3xl font-bold">Low Fidelity Designs</h1>
            <p>We put some of our ideas together into low-fidelity designs, especially focusing in on these specific sections: daily reflection and check-in, music and meditation, profile, and community.</p>
            <Image
                src={lofi1}
                alt="Lofi"
                width={1000}
                height={400}
                className="rounded-lg object-cover w-400 sm:w-300 h-auto mx-auto m-5"
                priority
              />
          </div>
          <div className="w-full m-10">
            <h1 className="text-2xl sm:text-3xl font-bold">Usability Testing</h1>
            <p>We prototyped these designs and conducted usability testing, to test how our initial designs will be navigated by users. We assessed:</p>
            <ol className="list-decimal list-inside m-5">
              <li>Does the user know how to complete the daily check-in?</li>
              <li>Can the user find the Music page on the Discover page and like a song?</li>
              <li>Can the user find and join a specific community?</li>
              <li>Can the user make a post in the community?</li>
              <li>Can the user navigate to profile and find components?</li>
            </ol>
            <p>Our findings:</p>
            <ul className="list-disc list-inside m-5">
              <li>Users were often confused about where to click to navigate or find specific sections</li>
              <li>Users thought that there were too many features and struggled to find features amongst others</li>
            </ul>
            <p>We proceeded to brainstorm solutions to address these problems in future designs.</p>
            <ul className="list-disc list-inside m-5">
              <li>Simplify the UI</li>
              <li>Make tasks less complicated, so that users don’t have to do so many steps to complete a task</li>
              <li>Make task completion more obvious (i.e., microanimation when the user completes a task)</li>
            </ul>
          </div>
          <div className="w-full m-10">
            <h1 className="text-2xl sm:text-3xl font-bold text-pink">Further Iterations</h1>
            <h1 className="text-2xl sm:text-3xl font-bold">High Fidelity Designs - Round 1</h1>
            <p>We finalized our style guide, selecting colors and fonts that we believed would exude peace and calm, a major intention of our self-care app.</p>
            <Image
                src={style}
                alt="Style guide"
                width={800}
                height={300}
                className="rounded-lg object-cover w-1000 sm:w-300 h-auto mx-auto m-5"
                priority
              />
            <p>We implemented these schemes as we pursued high-fidelity designs.</p>
            <Image
                src={hifi1}
                alt="Hifi 1"
                width={1000}
                height={500}
                className="rounded-lg object-cover w-1000 sm:w-300 h-auto mx-auto m-5"
                priority
              />
              <p>While designing, we struggled to come to a consensus of how we wanted to implement the discover page flow. Unable to decide between 2 versions, we decided to conduct another usability test, an A/B test, to identify which was more user-friendly amongst our study participants.</p>
              <Image
                  src={hifi2}
                  alt="Hifi 2"
                  width={1000}
                  height={500}
                  className="rounded-lg object-cover w-1000 sm:w-300 h-auto mx-auto m-5"
                  priority
                />
                  <Image
                  src={hifi3}
                  alt="Hifi 3"
                  width={1000}
                  height={500}
                  className="rounded-lg object-cover w-1000 sm:w-300 h-auto mx-auto m-5"
                  priority
                />
          </div>
          <div className="w-full m-10">
            <h1 className="text-2xl sm:text-3xl font-bold">A/B Testing</h1>
            <p>In version A, we observed that participants had difficulty seeing the main Discover categories, while in version B, participants found the filter button too complex, noting that they required too many clicks to get to where they wanted to go.</p>
          </div>
          <div className="w-full m-10">
            <Image
                src={AB}
                alt="AB testing"
                width={600}
                height={300}
                className="rounded-lg object-cover w-1000 sm:w-300 h-auto mx-auto m-5"
                priority
              />
          </div>
          <div className="w-full m-10">
            <p>Based on these insights, we decided to combine features of both Discover page prototype A and B. We combined the categories representation of Prototype B and genre categorization of Prototype A, realizing that this would make the navigation process of each task more simple and intuitive for the users.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Image
                  src={Combine1}
                  alt="Combine 1"
                  width={200}
                  height={300}
                  className="rounded-lg object-cover w-200 sm:w-30 h-auto m-5"
                  priority
                />
                <Image
                  src={Combine2}
                  alt="Combine 2"
                  width={200}
                  height={300}
                  className="rounded-lg object-cover w-200 sm:w-300 h-auto m-5"
                  priority
                />
              </div>
              <p>We applied a similar approach to other pages of our app.</p>
          </div>
          <div className="w-full m-10">
            <a
              href="https://www.figma.com/proto/daanvk2CNu534jyQnyEVzZ/Mon-Ami?node-id=1906-9307&scaling=scale-down&page-id=1870%3A27143&starting-point-node-id=1906%3A9307&show-proto-sidebar=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h1 className="text-2xl sm:text-3xl font-bold text-pink underline mx-auto">
                Click to view final design!
              </h1>
            </a>
          </div>
          <div className="w-full m-10">
            <h1 className="text-2xl sm:text-3xl font-bold">Conclusion</h1>
            <p>This project was overall an incredible learning experience. It being my first end-to-end UX Design project, not only did I learn the fundamentals of UI/UX Design in a hands-on way, I also learned what it takes to ideate and implement a product from scratch. This is incredibly relevant to future real-world projects that take an iterative approach consisting of various stages and iterations from start to end.</p>
            <br></br>
            <p>Our project changed in scope and timeline multiple times, which demonstrated to me that every project and product is unique and different situations can come up, which can change the overall implementation. However, it ultimately all works out for the better, and we ended up with a product that we are proud of.</p>
            <br></br>
            <p>I benefitted a lot from being able to have deep discussions with my team members and share my ideas and gain feedback from them. I especially learned how important communication is, and how important it is for everyone to stay on the same page for our ideas to evolve and for everyone to have the opportunity to contribute.</p>
          </div>
        </div>
  )
}

export default page