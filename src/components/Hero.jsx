import { resume, photo } from "../assets";

const Hero = () => {
  return (
    <div
      className="py-12 scroll-mt-16 dark:text-white flex flex-col min-[800px]:flex-row items-center min-[800px]:w-[750px] min-[800px]:mx-auto justify-center gap-8"
      id="Home"
    >
      <img
        src={photo}
        alt="photo"
        className="m-1 h-80 w-64 object-cover rounded-lg brightness-95 transform transition-transform hover:scale-105 hover:rotate-3 ease-out"
      />
      <div className="text-center min-[800px]:text-left">
        <h1 className="text-6xl font-semibold mb-10">
          Hello, I'm{" "}
          <h1 className="font-black tracking-tight block">Rafy Akbar</h1>
        </h1>
        {/* <h2 className="md:text-xl text-neutral-700 dark:text-neutral-300">
              An aspiring computer scientist
            </h2> */}
        <a
          href={resume}
          target="_blank"
          className="transition-all ease-in px-8 py-3 rounded-3xl bg-black tracking-wide dark:bg-white text-white dark:text-black hover:bg-neutral-900 text-sm font-semibold"
        >
          DOWNLOAD RESUME
        </a>
      </div>
    </div>
  );
};

export default Hero;
