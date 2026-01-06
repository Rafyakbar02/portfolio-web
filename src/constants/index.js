import { catatan, budgetin, degreescraper, stockify, nba } from "../assets";

export const navLinks = [
	{
		id: "experience",
		title: "Experience",
	},
	{
		id: "project",
		title: "Projects",
	},
];

export const experiences = [
	{
		id: "experience-6",
		date: "2024 - Present",
		position: "Solution Engineering Analyst",
		company: "Deloitte",
		jobdesk: [
		]
	},
	{
		id: "experience-5",
		date: "2023 - 2024",
		position: "Capstone Project",
		company: "Google",
		jobdesk: [
			"Worked in a capstone project team to develop a native collaborative whiteboarding tool for Google ChromeOS notebooks",
			"Developed a native ChromeOS application using Typescript, Lit, and Firebase",
			"Implemented stroke smoothing for pen drawing and undo/redo functionality for reverting whiteboard changes",
			"Participated in and contributed to code reviews and testing to ensure the application integrity for each sprint development"
		]
	},
	{
		id: "experience-4",
		date: "2023",
		position: "Web Developer Intern",
		company: "Indonesian Infrastructure Guarantee Fund",
		jobdesk: [
			"Developed a full-stack web application using Nextjs, React, and MongoDB to display guaranteed infrastructure projects within government institutions for stakeholders",
			"Developed a responsive and mobile-friendly design for dynamic user experience across different screen sizes using utility-first CSS framework Tailwind CSS",
			"Collaborated with a colleague to translate user stories into project requirements, leading to improved project efficiency and completion within the project timeline",
		],
	},
	{
		id: "experience-3",
		date: "2022 - 2024",
		position: "Getting my Bachelor's",
		company: "Georgia Institute of Technology ",
		jobdesk: [
			"Received a Bachelor of Science (B.S.) in Computer Science",
			"Focused in Information Internetworks and Intelligence threads",
			"Graduated with Highest Honors",
			"Participated in the Indonesian Student Association"
		]
	},
	{
		id: "experience-2",
		date: "2021",
		position: "Python Developer Intern",
		company: "Lintasarta",
		jobdesk: [
			"Developed a full-stack web application using Python, Flask, and SQLite to centralize employees directories/links into a single page application (SPA)",
			"Utilized SQLite, an open source SQL engine with built-in Python support to store data in the back-end",
			"Collaborated with 2 interns and senior developer to brainstorm and implement ideas into the app’s development",
		],
	},
	{
		id: "experience-1",
		date: "2019 - 2021",
		position: "Getting my Associate's",
		company: "Edmonds College",
		jobdesk: [
			"Received an Associate of Science (A.S.) in Computer Science",
			"Obtained a High School Diploma while taking college courses",
			"Graduated with Academic Honors",
		],
	},
];

export const projects = [
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
