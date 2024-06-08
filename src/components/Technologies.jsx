import { RiReactjsLine } from "react-icons/ri";
import {
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaDocker,
  FaGitAlt,
  FaNpm,
} from "react-icons/fa";
import {
  SiJavascript,
  SiExpress,
  SiMongodb,
  SiGraphql,
  SiWebpack,
  SiJenkins,
  SiKubernetes,
  SiRedux,
  SiNextdotjs,
} from "react-icons/si";
const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl">Technologies</h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {/* <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaHtml5 className="text-5xl text-orange-500" />
        </div> */}
        {/* <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaCss3Alt className="text-5xl text-blue-500" />
        </div> */}
        {/* <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiJavascript className="text-5xl text-yellow-300" />
        </div> */}
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaNodeJs className="text-5xl text-green-500" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsLine className="text-5xl text-cyan-400" />{" "}
        </div>{" "}
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiExpress className="text-5xl " />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiMongodb className="text-5xl text-green-700" />
        </div>
        {/* <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiGraphql className="text-5xl text-pink-500" />
        </div> */}
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaDocker className="text-5xl text-blue-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaGitAlt className="text-5xl text-orange-600" />
        </div>
        {/* <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaNpm className="text-5xl text-red-600" />
        </div> */}
        {/* <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiWebpack className="text-5xl text-blue-600" />
        </div> */}
        {/* <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiJenkins className="text-5xl text-blue-700" />
        </div> */}
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiKubernetes className="text-5xl text-blue-500" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiRedux className="text-5xl text-purple-600" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiNextdotjs className="text-5xl" />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
