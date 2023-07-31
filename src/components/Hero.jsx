import { resume, photo } from "../assets";

const Hero = () => {
  return (
    <div
      className="p-10 md:py-16 md:px-36 scroll-mt-12 dark:bg-slate-900 dark:text-white"
      id="Home"
    >
      <div className="mx-auto mb-7 h-48 w-48">
        <img
          src={photo}
          alt="photo"
          className="rounded-full ring-2 ring-slate-900 dark:ring-white ring-offset-4"
        />
      </div>
      <div className="items-center text-center my-5">
        <h1 className="text-4xl md:text-6xl font-black mb-5">Rafy Akbar</h1>
        <h2 className="md:text-lg text-neutral-700 dark:text-neutral-300 mb-10">
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
    </div>
  );
};

export default Hero;
