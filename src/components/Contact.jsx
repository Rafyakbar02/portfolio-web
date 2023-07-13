import React from "react";
import { github, linkedin } from "../assets";

const Contact = () => {
  return (
    <div className="p-10 dark:bg-slate-900 dark:text-white">
      <h2 className="text-xl font-semibold text-center mb-8">Find me on</h2>
      <div className="flex flex-wrap justify-center gap-8 mb-16">
        <a
          className="flex items-center mr-8 hover:text-neutral-700 dark:hover:text-neutral-300"
          href="https://github.com/Rafyakbar02"
          target="_blank"
        >
          <img
            className="mr-2 dark:invert"
            src={github}
            alt=""
            width="25"
            height="25"
          />
          <h3 className="text-sm">github.com/Rafyakbar02</h3>
        </a>
        <a
          className="flex items-center mr-8 hover:text-neutral-700 dark:hover:text-neutral-300"
          href="https://www.linkedin.com/in/rafy-akbar/"
          target="_blank"
        >
          <img
            className="mr-2 dark:invert"
            src={linkedin}
            alt=""
            width="25"
            height="25"
          />
          <h3 className="text-sm">in/rafy-akbar</h3>
        </a>
      </div>
    </div>
  );
};

export default Contact;
