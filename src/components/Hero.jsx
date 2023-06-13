import { resume } from "../assets";

const Hero = () => {
  return (
    <div className="w-full p-36">
      <div className="items-center text-center p-5">
        <h1 className="text-6xl font-black mb-5">Rafy Akbar</h1>
        <h2 className="text-xl mb-8">Aspiring Software Developer</h2>
        <a
          href={resume}
          target="_blank"
          className="px-6 py-3 font-semibold rounded-lg bg-slate-900 text-white hover:bg-slate-800"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default Hero;
