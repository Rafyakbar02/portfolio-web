import React from "react";

const ProjectCard = ({ title, language, link, content }) => {
  return (
    <div className="flex flex-col bg-white dark:bg-slate-950 p-7 sm:p-11 rounded-3xl shadow place-content-center max-w-md dark:shadow-slate-800">
      <p className="text-gray-600 dark:text-gray-400 mb-2 text-xs">
        {language}
      </p>
      <h1 className="text-xl font-semibold mb-2">{title}</h1>
      <p className="text-sm mb-4 text-neutral-700 dark:text-neutral-300">
        {content}
      </p>
      <a
        className="transition-all px-4 py-2 bg-slate-900 dark:bg-white text-sm text-white dark:text-slate-900 rounded-lg hover:rounded-2xl hover:bg-slate-800 w-fit dark:hover:bg-slate-200"
        href={link}
        target="_blank"
      >
        See Github {">"}
      </a>
    </div>
  );
};

export default ProjectCard;
