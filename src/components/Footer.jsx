import React from "react";
import { navLinks } from "../constants";
import { resume } from "../assets";

const Footer = () => {
	return (
		<div className="px-8 pt-8 pb-32 sm:py-24 border-t flex flex-col gap-16 sm:gap-0 sm:grid sm:grid-cols-2">
			{/* Copyright */}
			<div className="order-last sm:order-first flex flex-col justify-center gap-1">
				<h4 className="sm:text-lg">© 2024 Rafy Akbar. All Rights Reserved.</h4>
				<p className="text-xs sm:text-sm text-gray-500">Made with React, Vite and TailwindCSS</p>
			</div>

			{/* Links */}
			<div className="order-first sm:order-last grid grid-cols-2">
				{/* Nav Links */}
				<div>
					<h4 className="text-sm text-gray-500 mb-2">Main</h4>
					<ul className="underline decoration-yellow-500">
						{navLinks.map((link, i) => (
							<li><a className="text-lg" href={`#${link.id}`}>{link.title}</a></li>
						))}
					</ul>
				</div>

				{/* Socials */}
				<div>
					<h4 className="text-sm text-gray-500 mb-2">Contact</h4>
					<ul className="text-lg underline decoration-yellow-500">
						<li><a href="https://github.com/Rafyakbar02" target="_blank">GitHub</a></li>
						<li><a href="https://www.linkedin.com/in/rafy-akbar/" target="_blank">LinkedIn</a></li>
						<li><a href={resume} target="_blank">Resume</a></li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Footer;
