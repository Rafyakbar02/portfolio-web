import React from "react";
import { github, linkedin } from "../assets";

const Contact = () => {
  return (
    <div className="w-full py-16 px-36" id="contact">
      <h2 className="text-2xl font-semibold text-center mb-8">Find me on</h2>
      <div className="flex justify-center">
        <a
          className="flex items-center mr-8 hover:text-neutral-700"
          href="https://github.com/Rafyakbar02"
          target="_blank"
        >
          <img className="mr-2" src={github} alt="" width="25" height="25" />
          <h3 className="text-lg">github.com/Rafyakbar02</h3>
        </a>
        <a
          className="flex items-center mr-8 hover:text-neutral-700"
          href="https://www.linkedin.com/in/rafy-akbar/"
          target="_blank"
        >
          <img className="mr-2" src={linkedin} alt="" width="25" height="25" />
          <h3 className="text-lg">in/rafy-akbar</h3>
        </a>
      </div>
    </div>
  );
};

export default Contact;
