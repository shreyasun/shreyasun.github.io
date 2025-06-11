import rdc from "@/lib/logos/rdc_logo.png"
import dfg from "@/lib/logos/dfg_logo.png"
import bsoe from "@/lib/logos/bsoe_logo.png"
import t4g from "@/lib/logos/t4g_logo.jpg"
import gi from "@/lib/logos/ucsc-gi_logo.jpg"
import ctd from "@/lib/logos/ctd_logo.jpg"
//
import monami from "@/lib/cover/mon_ami_cover.png"
import dfg_proj from "@/lib/cover/dfg_proj.png"
import bloom from "@/lib/cover/bloom_cover.png"
import rdc_sum from "@/lib/cover/rdc_sum.png"
import jeo from "@/lib/cover/jeo.png"
import booktessera from "@/lib/cover/booktessera.png"
import gi_cover from "@/lib/cover/gi_cover.png"


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
    description: "Software engineer building real estate experiences.",
    date: "Feb 2025 - Present",
    link: "",
    image: rdc,
  },
  {
    title: "Engineering Manager",
    company: "Develop for Good",
    description:
      "Data pipeline powering an analytics dashboard that delivers educational insights and visualizations for a nonprofit.",
    date: "Oct 2024 - Feb 2025",
    link: "/projects/Develop-For-Good",
    image: dfg,
  },
  {
    title: "Software Engineer Intern",
    company: "Realtor.com",
    description:
      "Created a cost-saving storage solution for agent-consumer call recordings.",
    date: "Jun 2024 - Aug 2024",
    link: "https://shreyasundar.notion.site/My-Experience-as-an-SWE-Intern-at-Realtor-com-Summer-2024-1e8b5827586f4897b079d68a61ff344f",
    image: rdc,
  },
  {
    title: "Tutor",
    company: "Baskin School of Engineering - UC Santa Cruz",
    description:
      "Tutor for CSE 101, Data Structures and Algorithms.",
    date: "Sep 2023 - Apr 2024",
    image: bsoe,
  },
  {
    title: "Software Developer Intern",
    company: "UC Santa Cruz Genomics Institute",
    description:
      "Contributed to the development of a genomic data visualization application.",
    date: "Nov 2022 - May 2024",
    link: "https://shreyasundar.notion.site/My-Experience-as-an-SDE-Intern-at-UC-Santa-Cruz-Genomics-Institute-2022-2024-5e90e55b975940458d400eaae9a8c399?pvs=25",
    image: gi,
  },
  {
    title: "Co-President",
    company: "Creative Tech Design @ UCSC",
    description:
      "Led UCSC's premier UI/UX Design Organization.",
    date: "Sep 2022 - Mar 2024",
    link: "",
    image: ctd,
  },
  {
    title: "Web Developer",
    company: "Tech4Good Research Laboratory",
    description:
      "Contributed to development and design of several full stack applications.",
    date: "Mar 2022 - Sep 2023",
    link: "",
    image: t4g,
  },
] as const;

export const projects = [
  {
    title: "Realtor.com Internship",
    description:
      "A cost-saving storage solution for agent-consumer call recordings.",
    tools: ["Software Development"],
    link: "/projects/RDC-Internship",
    image: rdc_sum
  },
  {
    title: "Develop for Good Project",
    description:
      "Data pipeline powering an analytics dashboard that delivers educational insights and visualizations for a nonprofit.",
    tools: ["Software Development", "Project Management"],
    link: "/projects/Develop-For-Good",
    image: dfg_proj
  },
  {
    title: "UCSC Genomics Institute Internship Project",
    description:
      "Contributed to the development of a genomic data visualization application.",
    tools: ["Software Development"],
    link: "/projects/UCSC-GI-Project",
    image: gi_cover
  },
  {
    title: "Jeopardy Maker",
    description:
      "Tool for users to create trivia cards that will be rendered into an interactive Jeopardy Board.",
    tools: ["Software Development"],
    link: "/projects/Jeopardy-Maker",
    image: jeo
  },
  {
    title: "BookTessera",
    description:
      "A ticketing platform to improve ticket purchasing process for event-goers.",
    tools: ["Software Development"],
    link: "/projects/BookTessera",
    image: booktessera
  },
  {
    title: "Bloom",
    description:
      "Minimally designed secondhand clothing website that simplifies the online shopping experience.",
    tools: ["Product Design"],
    link: "/projects/Bloom-UX",
    image: bloom
  },
  {
    title: "Mon Ami",
    description:
      "All-in-one mental wellness platform that provides users mental health content and a supportive community.",
    tools: ["Product Design"],
    link: "/projects/Mon-Ami",
    image: monami
  },
] as const;
