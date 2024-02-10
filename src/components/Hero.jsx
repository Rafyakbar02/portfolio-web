import { resume, photo } from "../assets";

const Hero = () => {
  return (
    <div
      className="py-12 scroll-mt-16 dark:text-white flex items-center sm:w-[750px] sm:mx-auto justify-center gap-8"
      id="Home"
    >
      <img
        src={photo}
        alt="photo"
        className="m-1 h-80 w-64 object-cover rounded-lg brightness-95"
      />
      <div className="">
        <h1 className="text-3xl md:text-6xl font-semibold mb-10">
          Hello, I'm{" "}
          <h1 className="font-black tracking-tight block">Rafy Akbar</h1>
        </h1>
        {/* <h2 className="md:text-xl text-neutral-700 dark:text-neutral-300">
              An aspiring computer scientist
            </h2> */}
        <a
          href={resume}
          target="_blank"
          className="transition-all ease-in px-8 py-3 rounded-3xl bg-black tracking-wide dark:bg-white text-white dark:text-black hover:bg-neutral-900 text-sm"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default Hero;
