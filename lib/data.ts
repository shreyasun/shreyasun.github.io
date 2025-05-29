import rdc from "@/lib/rdc_logo.png"
import dfg from "@/lib/dfg_logo.png"
import bsoe from "@/lib/bsoe_logo.png"
import t4g from "@/lib/t4g_logo.jpg"
import gi from "@/lib/ucsc-gi_logo.jpg"
import ctd from "@/lib/ctd_logo.jpg"
//
import monami from "@/lib/mon_ami_cover.png"
import dfg_proj from "@/lib/dfg_proj.png"
import bloom from "@/lib/bloom_cover.png"
import rdc_sum from "@/lib/rdc_sum.png"


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
    description: "Software engineer building real estate experiences",
    date: "Feb 2025 - Present",
    link: "",
    image: rdc,
  },
  {
    title: "Engineering Manager",
    company: "Develop for Good",
    description:
      "Data pipeline powering an analytics dashboard that delivers educational insights and visualizations for a nonprofit",
    date: "Oct 2024 - Feb 2025",
    link: "https://docs.google.com/document/d/1zujWHhhBjqxu38RzUXUCmSxdULfytIgtmFEMp9KdjMM/edit?tab=t.0",
    image: dfg,
  },
  {
    title: "Software Engineer Intern",
    company: "Realtor.com",
    description:
      "Created a cost-saving storage solution for agent-consumer call recordings",
    date: "Jun 2024 - Aug 2024",
    link: "https://shreyasundar.notion.site/My-Experience-as-an-SWE-Intern-at-Realtor-com-Summer-2024-1e8b5827586f4897b079d68a61ff344f",
    image: rdc,
  },
  {
    title: "Tutor",
    company: "Baskin School of Engineering - UC Santa Cruz",
    description:
      "Tutor for CSE 101, Data Structures and Algorithms",
    date: "Sep 2023 - Apr 2024",
    image: bsoe,
  },
  {
    title: "Software Developer Intern",
    company: "UC Santa Cruz Genomics Institute",
    description:
      "Contributed to the development of a genomic data visualization application",
    date: "Nov 2022 - May 2024",
    link: "https://shreyasundar.notion.site/My-Experience-as-an-SDE-Intern-at-UC-Santa-Cruz-Genomics-Institute-2022-2024-5e90e55b975940458d400eaae9a8c399?pvs=25",
    image: gi,
  },
  {
    title: "Co-President",
    company: "Creative Tech Design @ UCSC",
    description:
      "Led UCSC's premier UI/UX Design Organization",
    date: "Sep 2022 - Mar 2024",
    link: "",
    image: ctd,
  },
  {
    title: "Web Developer",
    company: "Tech4Good Research Laboratory",
    description:
      "Contributed to development and design of several full stack applications",
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
    tools: ["Amazon Web Services", "IAM", "S3", "Terraform", "Python", "PostgreSQL"],
    link: "https://docs.google.com/presentation/d/1mvN4W-jtCX7kPPjWaKbAsp4zlKWXUNED872lftbwbss/edit?slide=id.g13bbb6e15e6_0_0#slide=id.g13bbb6e15e6_0_0",
    image: rdc_sum
  },
  {
    title: "Develop for Good Project",
    description:
      "Data pipeline powering an analytics dashboard that delivers educational insights and visualizations for a nonprofit.",
    tools: ["Google Cloud Platform", "BigQuery", "Cloud Run", "Looker Studio", "Python", "SQL"],
    link: "",
    image: dfg_proj
  },
  {
    title: "Jeopardy Maker",
    description:
      "Tool for users to create trivia cards that will be rendered into an interactive Jeopardy Board.",
    tools: ["React", "Node", "Express", "MongoDB", "Firebase"],
    link: "https://github.com/shreyasun/jeopardy-maker",
    image: ""
  },
  {
    title: "BookTessera",
    description:
      "A ticketing platform to improve ticket purchasing process for event-goers.",
    tools: ["React.js", "Firestore", "Python", "Node", "Express"],
    link: "https://github.com/BookTessera/BookTessera",
    image: ""
  },
  {
    title: "Bloom",
    description:
      "Minimally designed secondhand clothing website that simplifies the online shopping experience.",
    tools: ["Figma", "Google Workspace", "Notion"],
    link: "https://shreyasundar.notion.site/Bloom-Case-Study-50ea5165023f4257b00af778a80e6752",
    image: bloom
  },
  {
    title: "Mon Ami",
    description:
      "All-in-one mental wellness platform that provides users mental health content and a supportive community.",
    tools: ["Figma", "Google Workspace", "Notion"],
    link: "https://shreyasundar.notion.site/Mon-Ami-UX-Case-Study-33034bf8046048c796156365a7518fe5",
    image: monami
  },
] as const;
