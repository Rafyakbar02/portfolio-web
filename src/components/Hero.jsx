import { my_photo, resume } from "../assets";

const Hero = () => {
	return (
		<div
			className="h-full flex p-8 justify-center items-center"
			id="Home"
		>
			{/* Header */}
			<div className="flex flex-col lg:flex-row items-center gap-10">
				<img src={my_photo} className="rounded-3xl sm:max-w-md" alt="" srcSet="" />
				<div className="items-center sm:items-start flex flex-col">
					<h1 className="text-6xl md:text-7xl lg:text-8xl text-center lg:text-left font-extralight mb-4">
						Hello! I'm <span className="font-merriweather font-bold underline decoration-yellow-500 mb-6">Rafy Akbar</span>
					</h1>
					<ul className="text-xl sm:text-3xl flex gap-5 underline decoration-yellow-500">
						<li><a href="https://github.com/Rafyakbar02" target="_blank">GitHub</a></li>
						<li><a href="https://www.linkedin.com/in/rafy-akbar/" target="_blank">LinkedIn</a></li>
						<li><a href={resume} target="_blank">Resume</a></li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Hero;
