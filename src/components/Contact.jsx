import React from "react";
import { github, linkedin } from "../assets";

const Contact = () => {
  return (
    <div className="w-full py-16 px-36">
      <h2 className="text-2xl font-semibold text-center mb-8">Find me on</h2>
      <div className="flex justify-center">
        <div className="flex items-center mr-8">
          <img className="mr-2" src={github} alt="" width="25" height="25" />
          <h3 className="text-lg">github.com/Rafyakbar02</h3>
        </div>
        <div className="flex items-center">
          <img className="mr-2" src={linkedin} alt="" width="25" height="25" />
          <h3 className="text-lg">in/rafy-akbar</h3>
        </div>
      </div>
    </div>
  );
};

export default Contact;
