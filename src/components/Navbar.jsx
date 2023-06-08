import { navLinks } from "../constants";
import ToggleSwitch from "./ToggleSwitch";

const Navbar = () => {
  return (
    <nav className="bg-white h-20 flex">
      <div className="flex justify-between items-center my-5 mx-10 w-full">
        <h1 className="font-semibold text-xl">rafyakbar</h1>
        <ul className="flex space-x-10">
          {navLinks.map((nav, index) => (
            <li key={nav.id}>
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
        <ToggleSwitch />
      </div>
    </nav>
  );
};

export default Navbar;
