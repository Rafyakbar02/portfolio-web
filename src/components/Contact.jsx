import React from "react";
import { github, linkedin } from "../assets";

const socialMedias = [
  {
    href: "https://github.com/Rafyakbar02",
    src: github,
    text: "github.com/Rafyakbar02",
  },
  {
    href: "https://www.linkedin.com/in/rafy-akbar/",
    src: linkedin,
    text: "in/rafy-akbar",
  },
];

const Contact = () => {
  return (
    <div className="p-5 dark:text-white">
      <h2 className="text-xl font-black text-center">Connect with Me!</h2>
      <div className="flex flex-wrap justify-center gap-10 m-10">
        {socialMedias.map((social, index) => (
          <a
            className="flex items-center mr-8 hover:text-neutral-700 dark:hover:text-neutral-300"
            href={social.href}
            target="_blank"
            key={index}
          >
            <img
              className="mr-2 dark:invert"
              src={social.src}
              alt=""
              width="25"
              height="25"
            />
            <h3 className="text-sm font-semibold">{social.text}</h3>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Contact;
