import React from "react";

const ProjectCard = ({ title, language, link }) => {
  return (
    <div className="bg-slate-300 p-11 text-center rounded-3xl">
      <h1 className="text-lg font-semibold mb-1">{title}</h1>
      <p className="text-sm md:text-base italic mb-1">{language}</p>
      <a className="text-sm text-sky-800" href={link} target="_blank">
        See Github {">"}
      </a>
    </div>
  );
};

export default ProjectCard;
