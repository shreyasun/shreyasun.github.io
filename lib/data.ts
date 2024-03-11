import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { FaDna } from "react-icons/fa";
import { MdComputer } from "react-icons/md";
import { FaLightbulb } from "react-icons/fa";
import { HiOutlineBuildingOffice } from "react-icons/hi2";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
] as const;

export const experiences = [
  {
    title: "Student",
    company: "University of California, Santa Cruz",
    location: "Santa Cruz, CA",
    description:
      "Undergraduate at UCSC, majoring in Computer Science. Coursework: Python and C Programming, Data Structures, Algorithms, Machine Learning, Database Systems, Computer Systems Design, Web Applications, Artificial Intelligence, Software Engineering",
    icon: React.createElement(LuGraduationCap),
    date: "Sep 2021 - Aug 2024",
  },
  {
    title: "Web Developer",
    company: "Tech4Good Research Laboratory",
    location: "Santa Cruz, CA",
    description:
      "Contributed to development and design of several full stack applications",
    icon: React.createElement(MdComputer),
    date: "Mar 2022 - Sep 2023",
  },
  {
    title: "Software Developer Intern",
    company: "UC Santa Cruz Genomics Institute",
    location: "Santa Cruz, CA",
    description:
      "Contributed to the development of a genomic data visualization application",
    icon: React.createElement(FaDna),
    date: "Nov 2022 - present",
  },
  {
    title: "Co-President",
    company: "Creative Tech Design @ UCSC",
    location: "Santa Cruz, CA",
    description:
      "Led UCSC's premier UI/UX Design Organization",
    icon: React.createElement(FaLightbulb),
    date: "Sep 2022 - present",
  },
  /*{
    title: "Software Engineer Intern",
    company: "Realtor.com",
    location: "Austin, TX",
    description:
      "Allocation and Yield Team",
    icon: React.createElement(HiOutlineBuildingOffice),
    date: "June 2024 - present",
  },*/
] as const;

export const projects = [
  {
    title: "Schmidt-Samoa Cryptography",
    category: "C",
    description:
      "Large integers, which are difficult to factor, are used to generate a public-private key pair. The public key is used to encrypt a file, and the encrypted file can only be decrypted by using the respective private key.",
    tools: ["C", "Linux"],
    link: "https://github.com/shreyasun/lz-compression"
  },
  {
    title: "Lempel-Ziv Data Compression",
    category: "C",
    description:
      "Lossless data compression algorithm that stores recurring patterns of data in a dictionary, compressing the data input. Decompression reconstructs original data using these encoded dictionary references.",
    tools: ["C", "Linux"],
    link: "https://github.com/shreyasun/ss-cryptography"
  },
  {
    title: "Conway's Game of Life",
    category: "C",
    description:
      "In a 2D universe, cells interact with neighbors over a period of time. A live cell with 2 or 3 live neighbors survives, while a dead cell with exactly 3 live neighbors becomes alive. All other cells die, due to loneliness or overcrowding.",
    tools: ["C", "Linux"],
    link: "https://github.com/shreyasun/game-of-life"
  },
  {
    title: "Jeopardy Maker",
    category: "Full Stack",
    description:
      "Jeopardy! is one of the most popular American game shows. In this interactive Jeopardy Maker tool, users can create trivia cards to be rendered into an interactive Jeopardy Board. ",
    tools: ["React", "Node", "Express", "MongoDB", "Firebase"],
    link: "https://github.com/shreyasun/jeopardy-maker"
  },
  {
    title: "Bloom",
    category: "Product",
    description:
      "Minimally designed secondhand clothing website that simplifies the shopping experience, allowing user to easily find what they're looking for, get the information they require without being overwhelmed, and check out without too many steps.",
    tools: ["Figma", "Google Workspace", "Notion"],
    link: "https://shreyasundar.notion.site/Bloom-Case-Study-50ea5165023f4257b00af778a80e6752"
  },
  {
    title: "Mon Ami",
    category: "Product",
    description:
      "All-in-one mental wellness platform that provides users access to mental health content and the opportunity to build connections and interact with individuals and groups in a supportive community.",
    tools: ["Figma", "Google Workspace", "Notion"],
    link: "https://shreyasundar.notion.site/Mon-Ami-UX-Case-Study-33034bf8046048c796156365a7518fe5"
  },
] as const;

export const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Express",
  "MySQL",
  "Python",
  "PyTorch",
  "C",
  "C++",
  "Java",
  "SQL",
  "Docker",
  "Amazon Web Services",
  "Figma"
] as const;


export const categories = [
  "Full Stack",
  "C",
  "Data",
  "Machine Learning",
  "Product",
  "Other"
] as const;