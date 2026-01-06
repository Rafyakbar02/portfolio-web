import { header_photo, resume } from "./assets";
import { experiences, projects } from "./constants";

function App() {
	return (
		<>
			<header className="max-w-7xl m-auto">
				{/* Navbar */}
				<nav className="flex justify-center items-center h-[10vh]">
					<h1 className="notable-regular text-3xl text-blue-800">Rafy Akbar</h1>
				</nav>

				{/* Jumbotron */}
				<div className="h-[90vh] flex justify-center items-center">
					<img src={header_photo} className="border-8 border-white rounded-xl rotate-12" alt="my photo" height={250} width={250} />
				</div>
			</header>

			{/* Quote */}
			<section className="max-w-md text-center py-16 mx-8 flex justify-center sm:mx-auto">
				<p className="text-center text-4xl font-medium">Dedicated to ongoing learning and embracing new challenges to grow both personally and professionally.</p>
			</section>

			{/* Experiences */}
			<section className="max-w-lg mx-8 flex flex-col items-center py-16 sm:mx-auto">
				<h2 className="font-serif text-lg border border-black px-6 py-3 rounded-3xl w-fit">Experience</h2>
				<div>
					{experiences.map((exp, i) => (
						<div key={i} className="py-6 border-b border-black">
							<h2 className="font-semibold text-lg">{exp.position}</h2>
							<p>{`${exp.company} | ${exp.date}`}</p>
						</div>
					))}
				</div>
			</section >

			{/* Projects */}
			<section className="max-w-2xl mx-8 py-16 flex flex-col items-center sm:mx-auto">
				<h2 className="font-serif text-lg border border-black px-6 py-2 rounded-3xl w-fit">Recent Projects</h2>
				<div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
					{projects.map((project, i) => (
						<a key={i} href={project.link} target="_blank">
							<img src={project.image} className="w-full rounded-2xl border-4 border-white" />
							<h2 className="font-serif text-xl mt-4 mb-2">{project.name}</h2>
							<p className="">{project.desc}</p>
						</a>
					))}
				</div>
			</section>

			<footer className="max-w-md m-auto flex flex-col items-center gap-8 py-8">
				{/* Socials */}
				<div className="flex flex-col items-center">
					<h4 className="text-sm text-gray-500 mb-2">Contact</h4>
					<ul className="text-lg flex gap-8 font-serif">
						<li><a href="https://github.com/Rafyakbar02" target="_blank">GitHub</a></li>
						<li><a href="https://www.linkedin.com/in/rafy-akbar/" target="_blank">LinkedIn</a></li>
						<li><a href={resume} target="_blank">Resume</a></li>
					</ul>
				</div>

				{/* Copyright */}
				<div className="flex flex-col items-center gap-1 text-xs">
					<h4>© 2024 Rafy Akbar. All Rights Reserved.</h4>
					<p className="text-gray-500">Made with React, Vite and TailwindCSS</p>
				</div>
			</footer>
		</>
	);
}

export default App;
