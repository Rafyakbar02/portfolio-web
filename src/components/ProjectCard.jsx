import React from "react";

const ProjectCard = ({ title, language, link, content }) => {
  return (
    <div className="bg-white dark:bg-slate-800 p-7 sm:p-11 rounded-3xl shadow content-center max-w-md dark:shadow-slate-800">
      <p className="text-gray-600 dark:text-gray-400 mb-2 text-xs">
        {language}
      </p>
      <h1 className="text-xl font-semibold mb-2">{title}</h1>
      <p className="text-sm mb-4">{content}</p>
      <a
        className="transition-all px-3 py-2 bg-slate-900 dark:bg-white text-sm text-white dark:text-slate-900 rounded-lg hover:rounded-3xl"
        href={link}
        target="_blank"
      >
        See Github {">"}
      </a>
    </div>
  );
};

export default ProjectCard;
