import { resume, photo } from "../assets";

const Hero = () => {
  return (
    <div className="p-10 md:py-16 md:px-36 scroll-mt-12" id="Home">
      <div className="mx-auto h-64 w-64">
        <img src={photo} alt="photo" className="rounded-full" />
      </div>
      <div className="items-center text-center my-5">
        <h1 className="text-3xl md:text-6xl font-black mb-5">Rafy Akbar</h1>
        <h2 className="md:text-xl mb-10">Aspiring Software Developer</h2>
        <a
          href={resume}
          target="_blank"
          className="transition-all ease-in px-6 py-3 font-semibold rounded-lg bg-slate-900 text-white hover:bg-slate-800 hover:text-lg"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default Hero;
