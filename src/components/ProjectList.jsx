import React from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "../constants";

const ProjectList = () => {
  return (
    <div className="p-10 md:py-16 md:px-36 scroll-mt-12" id="project">
      <h2 className="text-3xl font-semibold text-center mb-16">Project</h2>
      <div className="flex flex-wrap gap-8 justify-center">
        {projects.map((project, index) => (
          <ProjectCard
            title={project.title}
            language={project.language}
            link={project.link}
            content={project.content}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
