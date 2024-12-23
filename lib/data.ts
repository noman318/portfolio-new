import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

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
      "Worked as a Full-Stack Developer at NeoSoft, where I gained hands-on experience with React, TypeScript, Mongoose, and MongoDB.",
    icon: React.createElement(FaReact),
    date: "Sept 2022 - Feb 2024",
  },
  {
    title: "Full-Stack Developer",
    location: "Mumbai, MH",
    description:
      "Worked as a Full-Stack Developer at Pyth 3D CAD, utilizing technologies like React, Next.js, TypeScript, Prisma, Tailwind, and MySQL.",
    icon: React.createElement(FaReact),
    date: "Feb 2024 - Oct 2024",
  },
  {
    title: "Frontend Developer",
    location: "Mumbai, MH",
    description:
      "Currently working as a Frontend Developer at Softcell Technologies, focusing on React, Next.js, TypeScript, Tailwind, and Ant Design.",
    icon: React.createElement(FaReact),
    date: "Oct 2024 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
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
  "MongoDB",
  "Redux",
  "Express",
] as const;
