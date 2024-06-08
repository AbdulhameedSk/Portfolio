import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/pfp-bgrm.png";

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-36">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h2 className="responsive-text pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-6xl">
              ABDULHAMEED
            </h2>
            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">
              Full Stack Developer
            </span>
            <p className="my-2 max-w-xl py-6 font-light tracking-tighter">
              {HERO_CONTENT}
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <img src={profilePic} alt="PFP" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
