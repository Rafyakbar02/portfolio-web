import React from "react";

const ProjectCard = ({ title, language, link, content }) => {
  return (
    <div className="bg-white p-7 sm:p-11 rounded-3xl shadow border-gray-200 content-center max-w-md">
      <p className="text-gray-600 mb-2 text-xs">{language}</p>
      <h1 className="text-xl font-semibold mb-2">{title}</h1>
      <p className="text-sm mb-4">{content}</p>
      <a
        className="px-3 py-2 bg-slate-900 text-sm text-white rounded-lg"
        href={link}
        target="_blank"
      >
        See Github {">"}
      </a>
    </div>
  );
};

export default ProjectCard;
