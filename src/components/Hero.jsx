import { resume, photo } from "../assets";

const Hero = () => {
  return (
    <div
      className="px-5 py-12 scroll-mt-16 dark:bg-slate-900 dark:text-white flex flex-col gap-5 items-center sm:w-[750px] sm:mx-auto"
      id="Home"
    >
      <img
        src={photo}
        alt="photo"
        className="rounded-full ring-2 ring-slate-900 dark:ring-white m-1 h-48 w-48"
      />
      <h1 className="text-4xl md:text-6xl font-black">Rafy Akbar</h1>
      <h2 className="md:text-lg text-neutral-700 dark:text-neutral-300">
        Aspiring Software Developer
      </h2>
      <a
        href={resume}
        target="_blank"
        className="transition-all ease-in px-6 py-3 font-medium rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-900  hover:rounded-3xl hover:bg-slate-700"
      >
        Download Resume
      </a>
    </div>
  );
};

export default Hero;
