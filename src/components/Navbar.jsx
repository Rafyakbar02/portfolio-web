import React from "react";
import { navLinks } from "../constants";
import { menu, close } from "../assets";

const Dropdown = ({ toggle, setToggle, darkMode, setDarkMode }) => {
  return (
    <ul
      className={`${
        toggle ? "block" : "hidden"
      } sm:flex sm:items-center justify-end my-4 sm:my-0`}
    >
      {navLinks.map((nav, index) => (
        <li
          key={nav.id}
          className="my-3 sm:my-0 mx-4 text-sm font-semibold hover:text-neutral-700 dark:hover:text-neutral-300"
        >
          <a
            className="align-middle"
            href={`#${nav.id}`}
            onClick={() => setToggle((prev) => !prev)}
          >
            {nav.title}
          </a>
        </li>
      ))}

      <button
        className={`md:hidden transition-all ease-in px-4 py-1.5 mx-4 rounded-lg bg-black hover:bg-gray-900 dark:bg-white dark:hover:bg-gray-200 text-white dark:text-black text-sm font-semibold`}
        onClick={() => setDarkMode((prev) => !prev)}
      >
        {darkMode ? "LIGHT MODE" : "DARK MODE"}
      </button>
    </ul>
  );
};

const Navbar = ({ toggle, setToggle, darkMode, setDarkMode }) => {
  return (
    <nav className="bg-white dark:bg-neutral-900 dark:text-white sticky top-4 mx-4 rounded-xl px-3 py-3 z-10 min-[800px]:max-w-[950px] min-[800px]:mx-auto shadow-sm dark:shadow-neutral-800">
      <div className="sm:mx-auto sm:flex sm:justify-between">
        <div className="flex justify-between items-center">
          <a
            className="text-2xl font-black tracking-tight dark:hover:text-neutral-300 hover:text-neutral-700 mx-4"
            href="#Home"
          >
            Rafy Akbar
          </a>
          <div className="sm:hidden flex flex-1 justify-end items-center">
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-[28px] h-[28px] object-contain dark:invert"
              onClick={() => setToggle((prev) => !prev)}
            />
          </div>
        </div>
        <Dropdown
          toggle={toggle}
          setToggle={setToggle}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
        <button
          className="bg-black dark:bg-white text-white dark:text-black hidden text-xs transition-all ease-in px-6 py-2 rounded-lg border hover:bg-gray-900 dark:hover:bg-gray-200 md:block font-semibold"
          onClick={() => setDarkMode((prev) => !prev)}
        >
          {darkMode ? "LIGHT MODE" : "DARK MODE"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
