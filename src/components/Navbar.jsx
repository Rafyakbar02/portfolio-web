import { useState } from "react";
import { navLinks } from "../constants";
import { menu, close } from "../assets";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="bg-white sm:flex sm:justify-between sticky top-0 drop-shadow w-full p-3">
      <div className="flex justify-between items-center">
        <a
          className="font-semibold text-base hover:text-neutral-700 hover:scale-105 transition ease-in mx-4"
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
            className="my-3 sm:my-0 mx-4 text-sm hover:text-neutral-700"
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
      </ul>
    </nav>
  );
};

export default Navbar;
