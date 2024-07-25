import { photo } from "../assets";

const Hero = () => {
  return (
    <div
      className="h-full flex p-8 justify-center sm:justify-start items-center"
      id="Home"
    >
      {/* Header */}
      <div>
        <h1 className="text-6xl sm:text-9xl text-center sm:text-left font-extralight">
        Hello! I'm <h1 className="font-merriweather font-bold underline decoration-yellow-500">Rafy Akbar</h1>
        </h1>
      </div>
    </div>
  );
};

export default Hero;
