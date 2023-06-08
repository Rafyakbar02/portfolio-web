import React from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "../constants";

const ProjectList = () => {
  return (
    <div className="w-full py-16 px-36">
      <h2 className="text-4xl font-semibold text-center mb-16">Project</h2>
      <div className="flex gap-8 justify-center">
        {projects.map((project, index) => (
          <ProjectCard title={project.title} language={project.language} />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
