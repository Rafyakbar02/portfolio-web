import { Hero, Timeline, ProjectList, Contact, Footer } from "./components";
import React, { useState } from "react";
import { navLinks } from "./constants";
import { menu, close } from "./assets";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [toggle, setToggle] = useState(false);

  return (
    <div className={`${darkMode ? "dark" : ""} font-mono`}>
      <nav
        className={` bg-white dark:bg-slate-900 dark:text-white sm:flex sm:justify-between sticky top-0 drop-shadow w-full p-3`}
      >
        <div className="flex justify-between items-center">
          <a
            className="font-semibold text-xl tracking-widest  dark:hover:text-neutral-300 hover:text-neutral-700 mx-4"
            href="#Home"
          >
            rafyakbar
          </a>
          <div className="sm:hidden flex flex-1 justify-end items-center">
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-[28px] h-[28px] object-contain"
              onClick={() => setToggle((prev) => !prev)}
            />
          </div>
        </div>
        <ul
          className={`${
            toggle ? "block" : "hidden"
          } sm:flex sm:items-center justify-end mt-2 sm:mt-0`}
        >
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className="my-3 sm:my-0 mx-4 text-sm font-thin hover:text-neutral-700 dark:hover:text-neutral-300"
            >
              <a
                className="align-middle"
                href={`#${nav.id}`}
                scroll={false}
                onClick={() => setToggle((prev) => !prev)}
              >
                {nav.title}
              </a>
            </li>
          ))}

          <button
            className="text-sm transition-all ease-in px-4 py-1.5 mx-4 rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 hover:rounded-3xl"
            onClick={() => setDarkMode((prev) => !prev)}
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </ul>
      </nav>
      <Hero />
      <Timeline heading={"Work Experience"} />
      <Timeline heading={"Education"} />
      <ProjectList />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
