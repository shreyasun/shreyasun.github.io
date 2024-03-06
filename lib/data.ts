import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

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
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Resume",
    hash: "github.com",
  },
] as const;

export const experiences = [
  {
    title: "Student",
    company: "University of California, Santa Cruz",
    location: "Santa Cruz, CA",
    description:
      "Undergraduate at UCSC, majoring in Computer Science.",
    icon: React.createElement(LuGraduationCap),
    date: "2021-2024",
  },
  {
    title: "Web Developer",
    company: "Tech4Good Research Laboratory",
    location: "Santa Cruz, CA",
    description:
      "",
    icon: React.createElement(CgWorkAlt),
    date: "Mar 2022 - Sep 2023",
  },
  {
    title: "Software Engineer Intern",
    company: "UC Santa Cruz Genomics Institute",
    location: "Santa Cruz, CA",
    description:
      "",
    icon: React.createElement(FaReact),
    date: "Nov 2022 - present",
  },
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
    link: ""
  },
  {
    title: "Mon Ami",
    category: "Product",
    description:
      "All-in-one mental wellness platform that provides users access to mental health content and the opportunity to build connections and interact with individuals and groups in a supportive community.",
    tools: ["Figma", "Google Workspace", "Notion"],
    link: ""
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