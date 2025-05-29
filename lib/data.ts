import blocksImg from "@/public/blocks.png";
import cpImg from "@/public/cp_img.png";
import mazadImg from "@/public/mazadv1.png";
import pedgogImg from "@/public/pedgog.png";
import princeEnggImg from "@/public/princeengg.png";
import React from "react";
import { FaReact } from "react-icons/fa";

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
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Full-Stack Developer",
    location: "Mumbai, MH",
    description:
      "Worked as a Full-Stack Developer at NeoSoft, where I gained hands-on experience with React, Redux, TypeScript, Mongoose and MongoDB.",
    icon: React.createElement(FaReact),
    date: "Sept 2022 - Feb 2024",
  },
  {
    title: "Full-Stack Developer",
    location: "Mumbai, MH",
    description:
      "Worked as a Full-Stack Developer at Pyth 3D CAD, utilizing technologies like React, Redux, Next.js, TypeScript, Prisma, Tailwind and MySQL.",
    icon: React.createElement(FaReact),
    date: "Feb 2024 - Oct 2024",
  },
  {
    title: "Frontend Developer",
    location: "Mumbai, MH",
    description:
      "Currently working as a Frontend Developer at Softcell Technologies, focusing on React, Next.js, TypeScript, Tailwind, Jotai and Ant Design.",
    icon: React.createElement(FaReact),
    date: "Oct 2024 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "Cloud Protect",
    description:
      "A multicloud services management platform for industries that integrates AWS, Azure, and GCP on a single platform.",
    tags: ["React", "Next.js", "Node.js", "Express.js", "Cloud Services"],
    imageUrl: cpImg,
    liveUrl: "https://cloud-protect-app.com", // Replace with actual URL
  },
  {
    title: "Blocks 2D Panel Optimizer",
    description:
      "A web app that optimizes cutting patterns for sheet materials to minimize waste and enhance project planning.",
    tags: ["React", "Next.js", "TypeScript", "Node.js", "Express.js", "MySQL"],
    imageUrl: blocksImg,
    liveUrl: "https://cutnc.com/", // Replace with actual URL
  },
  {
    title: "Pedgog App Services",
    description:
      "A workflow analysis website for Delhi police and CSC roles with interactive UI, data visualization, and RESTful APIs.",
    tags: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST API",
      "MaterialUI",
    ],
    imageUrl: pedgogImg,
    liveUrl: "https://csc.pedgog.in/application",
  },
  {
    title: "Mazad Admin Bahrain",
    description:
      "Admin panel for an auction platform with enhanced management and data visualization functionalities.",
    tags: ["React", "TypeScript", "ChakraUI", "Tanstack Table", "CSS3"],
    imageUrl: mazadImg,
    liveUrl: "https://mazad.bh/", // Replace with actual URL
  },
  {
    title: "Billing System (Prince Engineers)",
    description:
      "MERN stack billing system that manages invoices, calculates GST, and generates downloadable PDFs.",
    tags: ["React", "Node.js", "Express.js", "MongoDB", "PDF Generation"],
    imageUrl: princeEnggImg,
    liveUrl: "https://prince-engineers-billing-system.onrender.com/", // Replace with actual URL
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Material UI",
  "MySQL",
  "MongoDB",
  "Redux",
  "Express",
] as const;
