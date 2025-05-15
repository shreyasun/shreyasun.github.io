import React from "react";

export const links = [
  {
    name: "Intro",
    hash: "#intro",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
] as const;

export const experiences = [
  {
    title: "Associate Software Engineer",
    company: "Realtor.com",
    location: "Austin, TX",
    description: "Software engineer building real estate experiences",
    date: "Feb 2025 - Present",
    link: ""
  },
  {
    title: "Engineer Manager",
    company: "Develop for Good",
    location: "",
    description:
      "Leading development of a dashboard providing educational analytics, insights, and visualizations for a nonprofit",
    date: "Oct 2024 - Feb 2025",
    link: "https://docs.google.com/document/d/1zujWHhhBjqxu38RzUXUCmSxdULfytIgtmFEMp9KdjMM/edit?tab=t.0"
  },
  {
    title: "Software Engineer Intern",
    company: "Realtor.com",
    location: "Austin, TX",
    description:
      "Created a cost-saving storage solution for agent-consumer call recordings",
    date: "Jun 2024 - Aug 2024",
    link: "https://shreyasundar.notion.site/My-Experience-as-an-SWE-Intern-at-Realtor-com-Summer-2024-1e8b5827586f4897b079d68a61ff344f"
  },
  {
    title: "Tutor",
    company: "Baskin School of Engineering - UC Santa Cruz",
    location: "Santa Cruz, CA",
    description:
      "Tutor for CSE 101, Data Structures and Algorithms",
    date: "Sep 2023 - Apr 2024",
    link: "",
  },
  {
    title: "Software Developer Intern",
    company: "UC Santa Cruz Genomics Institute",
    location: "Santa Cruz, CA",
    description:
      "Contributed to the development of a genomic data visualization application",
    date: "Nov 2022 - May 2024",
    link: "https://shreyasundar.notion.site/My-Experience-as-an-SDE-Intern-at-UC-Santa-Cruz-Genomics-Institute-2022-2024-5e90e55b975940458d400eaae9a8c399?pvs=25"
  },
  {
    title: "Co-President",
    company: "Creative Tech Design @ UCSC",
    location: "Santa Cruz, CA",
    description:
      "Led UCSC's premier UI/UX Design Organization",
    date: "Sep 2022 - Mar 2024",
    link: ""
  },
  {
    title: "Web Developer",
    company: "Tech4Good Research Laboratory",
    location: "Santa Cruz, CA",
    description:
      "Contributed to development and design of several full stack applications",
    date: "Mar 2022 - Sep 2023",
    link: ""
  },
] as const;

export const projects = [
  {
    title: "Cache Eviction Policies Simulator",
    category: "featured",
    description:
      "Web tool to simulate various cache eviction policies (MRU, LRU, FIFO, Clock) in a linked-list implementation of a fully associative cache. ",
    tools: ["Java", "Spring Boot", "React.js", "Docker"],
    link: "https://cache-evictions-simulator.netlify.app/",
    tags: []
  },
  {
    title: "Jeopardy Maker",
    category: "featured",
    description:
      "Jeopardy! is one of the most popular American game shows. In this interactive Jeopardy Maker tool, users can create trivia cards to be rendered into an interactive Jeopardy Board. ",
    tools: ["React", "Node", "Express", "MongoDB", "Firebase"],
    link: "https://github.com/shreyasun/jeopardy-maker",
    tags: []
  },
  {
    title: "BookTessera",
    category: "",
    description:
      "A ticketing platform to improve ticket purchasing process for event-goers",
    tools: ["React.js", "Firestore", "Python", "Node", "Express"],
    link: "https://github.com/BookTessera/BookTessera",
    tags: ["Group Project", "CSE 115A UCSC"]
  },
  {
    title: "Bloom",
    category: "",
    description:
      "Minimally designed secondhand clothing website that simplifies the shopping experience, allowing user to easily find what they're looking for, get the information they require without being overwhelmed, and check out without too many steps.",
    tools: ["Figma", "Google Workspace", "Notion"],
    link: "https://shreyasundar.notion.site/Bloom-Case-Study-50ea5165023f4257b00af778a80e6752",
    tags: ["Group Project", "Creative Tech Design @ UCSC"]
  },
  {
    title: "Mon Ami",
    category: "",
    description:
      "All-in-one mental wellness platform that provides users access to mental health content and the opportunity to build connections and interact with individuals and groups in a supportive community.",
    tools: ["Figma", "Google Workspace", "Notion"],
    link: "https://shreyasundar.notion.site/Mon-Ami-UX-Case-Study-33034bf8046048c796156365a7518fe5",
    tags: ["Group Project", "Creative Tech Design @ UCSC"]
  },
  {
    title: "Schmidt-Samoa Cryptography",
    category: "",
    description:
      "Large integers, which are difficult to factor, are used to generate a public-private key pair. The public key is used to encrypt a file, and the encrypted file can only be decrypted by using the respective private key.",
    tools: ["C", "Linux"],
    link: "https://github.com/shreyasun/lz-compression",
    tags: ["CSE 13S UCSC"]
  },
  {
    title: "Lempel-Ziv Data Compression",
    category: "",
    description:
      "Lossless data compression algorithm that stores recurring patterns of data in a dictionary, compressing the data input. Decompression reconstructs original data using these encoded dictionary references.",
    tools: ["C", "Linux"],
    link: "https://github.com/shreyasun/ss-cryptography",
    tags: ["CSE 13S UCSC"]
  }  
] as const;
