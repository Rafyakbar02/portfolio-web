import { projects } from "../constants";

const ProjectCard = ({ title, language, link, content }) => {
  return (
    <div className="flex flex-col p-7 rounded-3xl shadow  border border-gray-200 max-w-md dark:shadow-slate-800 dark:border-slate-800 justify-center">
      <h1 className="text-xl font-semibold mb-2">{title}</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-2 text-xs">
        {language}
      </p>
      <p className="text-sm mb-3 text-neutral-700 dark:text-neutral-300">
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

const ProjectList = () => {
  return (
    <div
      className="px-5 py-12 scroll-mt-12 dark:text-white sm:w-[750px] lg:w-[1024px] sm:mx-auto"
      id="project"
    >
      <h2 className="text-3xl font-semibold text-center mb-16">
        Latest Projects
      </h2>
      <div className="flex flex-wrap gap-8 justify-center">
        {projects.map((project, index) => (
          <ProjectCard
            key={`${project.id}-${index}`}
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
