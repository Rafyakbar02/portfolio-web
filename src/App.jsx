import {
	Navbar,
	Hero,
	Experience,
	ProjectList,
	Footer,
} from "./components";
import React, { useEffect, useState } from "react";

function App() {
	const [showElement, setShowElement] = useState(false)
	const scrollDistance = 950

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > scrollDistance) {
				setShowElement(true)
			} else {
				setShowElement(false)
			}
		}

		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	})

	return (
		<div className="max-w-7xl m-auto">
			<div className="flex flex-col">
				<Navbar />
				<Hero />
			</div>

			<Experience />
			<ProjectList />
			<Footer />

			{showElement && <a href="#Home" className="font-merriweather bg-white fixed bottom-0 right-0 m-8 text-gray-600 border px-6 py-2 rounded-3xl my-8 w-fit">Back to Top</a>}
		</div>
	);
}

export default App;
