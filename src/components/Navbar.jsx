import React, { useState } from "react";
import { navLinks } from "../constants";
import { menu, close } from "../assets";
import { resume } from "../assets";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // Toggle function
  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  // Menu Animation Props
  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }
    }
  }

  // Navlinks Animation Props
  const linkVars = {
    initial: {
      y: "30vh",
      transition: {
        duration: 0.5,
        ease: [0.37, 0, 0.63, 1],
      }
    },
    open: {
      y: 0,
      transition: {
        ease: [0, 0.55, 0.45, 1],
        duration: 0.7,
      }
    },
  }

  // Links Container Animation Props
  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      }
    }
  }

  return (
    <header>
      {/* Default Static Menu */}
      <nav className="mx-auto flex justify-between bg-white py-4 px-8 fixed top-0 left-0 right-0 z-10">
        
        {/* Web Header */}
        <a href="#Home" className="text-xl font-bold underline decoration-yellow-500">Rafy Akbar</a>

        {/* Navlinks */}
        <ul className="hidden text-lg sm:flex gap-10 items-center">
          {navLinks.map((nav, index) => (
            <li><a className="underline decoration-yellow-500" href={`#${nav.id}`}>{nav.title}</a></li>
          ))}
        </ul>

        {/* Dropdown Toggle */}
        <img src={menu} onClick={toggleMenu} className="sm:hidden h-[28px] w-[28px] cursor-pointer"></img>
      </nav>

      {/* Animated Dropdown Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="origin-top z-10 fixed left-0 top-0 w-full h-screen py-4 bg-white px-8 flex flex-col"
          >
            {/* Dropdown Close Toggle */}
            <div className="flex justify-end">
              <img
                src={close}
                onClick={toggleMenu}
                className="h-[28px] w-[28px] cursor-pointer"
              ></img>
            </div>

            {/* Navlinks */}
            <motion.div
              variants={containerVars}
              initial="initial"
              animate="open"
              exit="initial"
              className="flex flex-1 flex-col justify-center items-center gap-4 text-2xl"
            >
              {navLinks.map((nav, index) => (
                <div className="overflow-hidden">
                  <motion.div variants={linkVars}>
                    <a className="underline decoration-yellow-500" href={`#${nav.id}`} onClick={toggleMenu}>{nav.title}</a>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
