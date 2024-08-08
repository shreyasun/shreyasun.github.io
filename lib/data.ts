import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import { FaDna } from "react-icons/fa";
import { MdComputer } from "react-icons/md";
import { FaLightbulb } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
import { HiOutlineOfficeBuilding } from "react-icons/hi";

export const links = [
  {
    name: "Intro",
    hash: "#intro",
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
    title: "Software Engineer Intern",
    company: "Realtor.com",
    location: "Austin, TX",
    description:
      "SWE Intern under Customer Experiences Department",
    icon: React.createElement(HiOutlineOfficeBuilding),
    date: "Jun 2024 - present",
    link: "https://shreyasundar.notion.site/My-Experience-as-an-SWE-Intern-at-Realtor-com-Summer-2024-1e8b5827586f4897b079d68a61ff344f"
  },
  {
    title: "Tutor",
    company: "Baskin School of Engineering",
    location: "Santa Cruz, CA",
    description:
      "Tutor for CSE 101, Data Structures and Algorithms",
    icon: React.createElement(FaPencilAlt),
    date: "Sep 2023 - Apr 2024",
    link: null,
  },
  {
    title: "Software Developer Intern",
    company: "UC Santa Cruz Genomics Institute",
    location: "Santa Cruz, CA",
    description:
      "Contributed to the development of a genomic data visualization application",
    icon: React.createElement(FaDna),
    date: "Nov 2022 - May 2024",
    link: "https://shreyasundar.notion.site/My-Experience-as-an-SDE-Intern-at-UC-Santa-Cruz-Genomics-Institute-2022-2024-5e90e55b975940458d400eaae9a8c399?pvs=25"
  },
  {
    title: "Co-President",
    company: "Creative Tech Design @ UCSC",
    location: "Santa Cruz, CA",
    description:
      "Led UCSC's premier UI/UX Design Organization",
    icon: React.createElement(FaLightbulb),
    date: "Sep 2022 - Mar 2024",
    link: null
  },
  {
    title: "Web Developer",
    company: "Tech4Good Research Laboratory",
    location: "Santa Cruz, CA",
    description:
      "Contributed to development and design of several full stack applications",
    icon: React.createElement(MdComputer),
    date: "Mar 2022 - Sep 2023",
    link: null
  },
  {
    title: "Student",
    company: "University of California, Santa Cruz",
    location: "Santa Cruz, CA",
    description:
      "Recent grad from UCSC, majoring in Computer Science. Coursework: Python and C Programming, Data Structures, Algorithms, Machine Learning, Database Systems, Computer Systems Design, Web Applications, Artificial Intelligence, Software Engineering",
    icon: React.createElement(LuGraduationCap),
    date: "Sep 2021 - Jul 2024",
    link: null
  }
] as const;

export const projects = [
  {
    title: "Life Expectancy Data Exploration",
    category: "Data",
    description:
      "Data exploration of life expectancy and communicable disease mortality rates, from World Bank datasets",
    tools: ["SQL", "MySQL", "Tableau"],
    link: "https://github.com/shreyasun/leb-cd-analysis",
    tags: []
  },
  {
    title: "Schmidt-Samoa Cryptography",
    category: "C/C++",
    description:
      "Large integers, which are difficult to factor, are used to generate a public-private key pair. The public key is used to encrypt a file, and the encrypted file can only be decrypted by using the respective private key.",
    tools: ["C", "Linux"],
    link: "https://github.com/shreyasun/lz-compression",
    tags: ["CSE 13S UCSC"]
  },
  {
    title: "Lempel-Ziv Data Compression",
    category: "C/C++",
    description:
      "Lossless data compression algorithm that stores recurring patterns of data in a dictionary, compressing the data input. Decompression reconstructs original data using these encoded dictionary references.",
    tools: ["C", "Linux"],
    link: "https://github.com/shreyasun/ss-cryptography",
    tags: ["CSE 13S UCSC"]
  },
  {
    title: "Conway's Game of Life",
    category: "C/C++",
    description:
      "In a 2D universe, cells interact with neighbors over a period of time. A live cell with 2 or 3 live neighbors survives, while a dead cell with exactly 3 live neighbors becomes alive. All other cells die, due to loneliness or overcrowding.",
    tools: ["C", "Linux"],
    link: "https://github.com/shreyasun/game-of-life",
    tags: ["CSE 13S UCSC"]
  },
  {
    title: "Banana Slug Emulator",
    category: "C/C++",
    description:
      "Implemented an emulator for the fictional video game console, the Banana, from ROM binary file input. Utilized high speed and low level C++ design for CPU, Memory, GPU, and Operating System.",
    tools: ["C++", "Linux"],
    link: "https://shreyasundar.notion.site/Banana-Emulator-CSE-111-Final-Project-Spring-2024-71c427531701448e9616b251e2c81845",
    tags: ["Group Project", "CSE 111 UCSC"]
  },
  {
    title: "Jeopardy Maker",
    category: "Web",
    description:
      "Jeopardy! is one of the most popular American game shows. In this interactive Jeopardy Maker tool, users can create trivia cards to be rendered into an interactive Jeopardy Board. ",
    tools: ["React", "Node", "Express", "MongoDB", "Firebase"],
    link: "https://github.com/shreyasun/jeopardy-maker",
    tags: []
  },
  {
    title: "Bloom",
    category: "Product",
    description:
      "Minimally designed secondhand clothing website that simplifies the shopping experience, allowing user to easily find what they're looking for, get the information they require without being overwhelmed, and check out without too many steps.",
    tools: ["Figma", "Google Workspace", "Notion"],
    link: "https://shreyasundar.notion.site/Bloom-Case-Study-50ea5165023f4257b00af778a80e6752",
    tags: ["Group Project", "Creative Tech Design @ UCSC"]
  },
  {
    title: "Mon Ami",
    category: "Product",
    description:
      "All-in-one mental wellness platform that provides users access to mental health content and the opportunity to build connections and interact with individuals and groups in a supportive community.",
    tools: ["Figma", "Google Workspace", "Notion"],
    link: "https://shreyasundar.notion.site/Mon-Ami-UX-Case-Study-33034bf8046048c796156365a7518fe5",
    tags: ["Group Project", "Creative Tech Design @ UCSC"]
  },
  {
    title: "My Portfolio",
    category: "Web",
    description:
      "My personal portfolio website (you're looking at it now!)",
    tools: ["Next.js", "React.js", "TypeScript"],
    link: "https://github.com/shreyasun/shreya-sundar-portfolio",
    tags: []
  },
  {
    title: "BookTessera",
    category: "Web",
    description:
      "A ticketing platform to improve ticket purchasing process for event-goers",
    tools: ["React.js", "Firestore", "Python", "Node", "Express"],
    link: "https://github.com/BookTessera/BookTessera",
    tags: ["Group Project", "CSE 115A UCSC"]
  },
] as const;

export const skills = [
  {
    skill: "JavaScript",
    category: "Programming Languages",
  },
  {
    skill: "Python",
    category: "Programming Languages",
  },
  {
    skill: "C",
    category: "Programming Languages",
  },
  {
    skill: "C++",
    category: "Programming Languages",
  },
  {
    skill: "Java",
    category: "Programming Languages",
  },
  {
    skill: "SQL",
    category: "Programming Languages",
  },
  {
    skill: "React.js",
    category: "Frameworks and Libraries",
  },
  {
    skill: "HTML",
    category: "Programming Languages",
  },
  {
    skill: "CSS",
    category: "Programming Languages",
  },
  {
    skill: "Next.js",
    category: "Frameworks and Libraries",
  },
  {
    skill: "Node.js",
    category: "Frameworks and Libraries",
  },
  {
    skill: "Pandas",
    category: "Frameworks and Libraries",
  },
  {
    skill: "NumPy",
    category: "Frameworks and Libraries",
  },
  {
    skill: "Scikit-Learn",
    category: "Frameworks and Libraries",
  },
  {
    skill: "Git",
    category: "Developer Tools",
  },
  {
    skill: "MongoDB",
    category: "Developer Tools",
  },
  {
    skill: "MySQL",
    category: "Developer Tools",
  },
  {
    skill: "Google Workspace",
    category: "Developer Tools",
  },
  {
    skill: "Microsoft Office",
    category: "Developer Tools",
  },
  {
    skill: "Jupyter",
    category: "Developer Tools",
  },
  {
    skill: "Figma",
    category: "Developer Tools",
  },
  {
    skill: "Amazon Web Services",
    category: "Developer Tools",
  },
] as const;


export const categories = [
  "Web",
  "C/C++",
  "Data",
  "Product",
  "Other"
] as const;