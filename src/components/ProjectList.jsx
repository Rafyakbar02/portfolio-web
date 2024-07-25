import { projects } from "../constants";
import Card from "./util/Card";

const ProjectList = () => {
  return (
    <div
      className="p-8"
      id="project"
    >
      <h2 className="text-4xl sm:text-6xl font-bold text-center my-16">Recent Projects</h2>
      <div className="flex flex-col md:grid md:grid-cols-2 gap-8">
        {projects.map((project, i) => (
          <Card title={project.title} languages={project.language} preview={project.preview} link={project.link}/>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
