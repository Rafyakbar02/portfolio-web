import { navLinks } from "../constants";
import ToggleSwitch from "./ToggleSwitch";

const Navbar = () => {
  return (
    <nav className="bg-white h-20 flex" id="home">
      <div className="flex justify-between items-center my-5 mx-10 w-full">
        <a
          className="font-semibold text-xl hover:text-neutral-700"
          href="#home"
        >
          rafyakbar
        </a>
        <ul className="flex space-x-10">
          {navLinks.map((nav, index) => (
            <li key={nav.id} className="hover:text-neutral-700">
              <a href={`#${nav.id}`} scroll={false}>
                {nav.title}
              </a>
            </li>
          ))}
        </ul>
        <ToggleSwitch />
      </div>
    </nav>
  );
};

export default Navbar;
