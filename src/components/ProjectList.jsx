import { catatan, degreescraper, nba, stockify, budgetin } from "../assets";

const projects = [
	{
		name: "Budgetin",
		link: "https://github.com/Rafyakbar02/budget-app",
		image: budgetin,
		desc: "A simple and intuitive budgeting mobile app"
	},
	{
		name: "Catatan",
		link: "https://catatan-web.netlify.app/",
		image: catatan,
		desc: "A simple note taking web application"
	},
	{
		name: "GT Degree Scraper",
		link: "https://github.com/Rafyakbar02/gt-degree-scraper",
		image: degreescraper,
		desc: "A Georgia Tech degree web scraper"
	},
	{
		name: "Stockify",
		link: "https://github.com/SubugFcz/Hacklytics23",
		image: stockify,
		desc: "A stock analysis and prediction tool"
	},
	{
		name: "NBA MVP Predictor",
		link: "https://github.com/Rafyakbar02/ml-group-project",
		image: nba,
		desc: "A prediction model for NBA Season MVP"
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
					<a href={project.link} className="border p-6 rounded-3xl" target="_blank">
						<img src={project.image} className="w-full rounded-2xl" />
						<h2 className="font-merriweather text-xl mt-4 mb-2 underline decoration-yellow-500">{project.name}</h2>
						<p className="text-gray-500 text-base">{project.desc}</p>
					</a>
				))}
			</div>
		</div>
	);
};

export default ProjectList;
