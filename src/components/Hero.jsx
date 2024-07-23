import { photo } from "../assets";

const Hero = () => {
  return (
    <div
      className="flex-1 py-12 flex flex-col min-[800px]:flex-row items-center justify-center gap-8"
      id="Home"
    >
      {/* Profile Photo */}
      <img
        src={photo}
        alt="photo"
        className="m-1 h-80 w-64 object-cover rounded-lg brightness-95"
      />

      {/* Header */}
      <div className="text-center min-[800px]:text-left">
        <h1 className="text-5xl mb-10">
          Hello! I'm <h1 className="font-semibold">Rafy Akbar</h1>
        </h1>
      </div>
    </div>
  );
};

export default Hero;
