import { projects } from "../constants";

const ProjectCard = ({ title, language, link, content, preview }) => {
  return (
    <div className="flex flex-col p-7 bg-white dark:bg-neutral-900 rounded-3xl border-gray-200 max-w-md justify-center transform transition-transform hover:scale-105 ease-out shadow-sm">
      <h1 className="text-xl font-semibold mb-2">{title}</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-2 text-xs">
        {language}
      </p>
      <p className="text-sm mb-3 text-neutral-700 dark:text-neutral-300">
        {content}
      </p>
      <div>
        {preview.length > 0 &&
          <a
            className="transition-all px-4 py-2 bg-black hover:bg-neutral-900 dark:bg-white hover:dark:bg-neutral-200 text-xs text-white dark:text-black rounded-lg  w-fit dark:hover:bg-slate-200 font-semibold mr-2"
            href={preview}
            target="_blank"
          >
            PREVIEW {">"}
          </a>
        }
        <a
          className="transition-all px-4 py-2 bg-black hover:bg-neutral-900 dark:bg-white hover:dark:bg-neutral-200 text-xs text-white dark:text-black rounded-lg  w-fit dark:hover:bg-slate-200 font-semibold"
          href={link}
          target="_blank"
        >
          VIEW GITHUB {">"}
        </a>
      </div>
    </div>
  );
};

const ProjectList = () => {
  return (
    <div
      className="px-5 py-12 scroll-mt-12 dark:text-white lg:w-[1024px] sm:mx-auto"
      id="project"
    >
      <h2 className="text-3xl font-black text-center mb-16">Projects</h2>
      <div className="flex flex-wrap gap-6 justify-center">
        {projects.map((project, index) => (
          <ProjectCard
            key={`${project.id}-${index}`}
            title={project.title}
            language={project.language}
            link={project.link}
            content={project.content}
            preview={project.preview}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
