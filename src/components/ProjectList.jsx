import { catatan, degreescraper, nba, stockify } from "../assets";

const projects = [
  {
    link: "https://catatan-web.netlify.app/",
    image: catatan, 
  },
  {
    link: "https://github.com/Rafyakbar02/gt-degree-scraper",
    image: degreescraper, 
  },
  {
    link: "https://github.com/SubugFcz/Hacklytics23",
    image: stockify, 
  },
  {
    link: "https://github.com/Rafyakbar02/ml-group-project",
    image: nba, 
  },
]

const ProjectList = () => {
  return (
    <div
      className="p-8"
      id="project"
    >
      <h2 className="font-merriweather text-lg text-gray-600 border px-6 py-2 rounded-3xl my-8 w-fit">Recent Projects</h2>
      <div className="flex flex-col sm:grid sm:grid-cols-2 sm:grid-rows-2 gap-8">
        {projects.map((project, i) => (
          <a href={project.link} target="_blank">
            <img src={project.image} className="w-full rounded-2xl hover:scale-[0.97] hover:brightness-110 transition" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
