"use client";
import React from "react";
import SectionHeading from "./SectionHeading";
import { projectsData } from "@/lib/data";
import ProjectCard from "./ProjectCard";
import { useSectionInView } from "@/hooks/hooks";

const Projects = () => {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section className="mb-[12rem] scroll-mt-28" id="projects" ref={ref}>
      <SectionHeading>My Projects</SectionHeading>
      <div>
        {projectsData?.map((project, index) => (
          <React.Fragment key={index}>
            <ProjectCard {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Projects;
