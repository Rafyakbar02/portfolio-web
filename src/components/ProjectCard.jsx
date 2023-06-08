import React from "react";

const ProjectCard = ({ title, language }) => {
  return (
    <div className="bg-slate-300 p-11 text-center rounded-3xl">
      <h1 className="text-xl font-semibold mb-1">{title}</h1>
      <p className="italic mb-1">{language}</p>
      <a className="text-sky-800" href="">
        See Github {">"}
      </a>
    </div>
  );
};

export default ProjectCard;
