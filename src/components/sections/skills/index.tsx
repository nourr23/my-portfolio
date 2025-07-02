import { RiJavascriptFill, RiNextjsLine } from "react-icons/ri";
import {
  SiTailwindcss,
  SiTypescript,
  SiMongodb,
  SiNestjs,
  SiSupabase,
  SiMedusa,
} from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { DiNodejs } from "react-icons/di";
import { TbBrandReactNative } from "react-icons/tb";

export const Skills = ({ messages }: { messages: Record<string, string> }) => {
  return (
    <div className="border-b border-gray-800 w-full flex justify-center">
      <div className=" md:py-20 py-4 w-full md:px-11 small:px-0 px-2 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))]  from-secondary-500/15 via-dark-300  to-dark-300 max-w-[1080px]">
        <div className="bg-gradient-to-r from-25% from-primary-500 via-secondary-500 to-secondary-500 inline-block text-transparent bg-clip-text text-xl md:text-5xl uppercase">
          {messages.skills}
        </div>
        <div className="text-white text-sm md:text-xl md:text-left text-center mt-8 w-full flex justify-center">
          {messages.skills_description}
        </div>
        <div className="flex items-center flex-wrap w-full justify-center gap-3 md:gap-10 mt-8">
          <FaReact className="text-4xl md:text-6xl" color="#61dafb" />
          <RiNextjsLine className="text-5xl md:text-7xl" color="#000000" />
          <TbBrandReactNative
            className="text-4xl md:text-6xl"
            color="#61dafb"
          />
          <SiTypescript className="text-4xl md:text-6xl" color="#007acc" />
          <RiJavascriptFill className="text-5xl md:text-8xl" color="#f0db4f" />
          <SiTailwindcss className="text-5xl md:text-7xl" color="#06b6d4" />
        </div>
        <div className="flex items-center flex-wrap w-full justify-center gap-3 md:gap-10 mt-8">
          <SiMedusa className="text-4xl md:text-6xl" color="#bd76f6" />
          <DiNodejs className="text-4xl md:text-6xl" color="#3c873a" />
          <SiNestjs className="text-4xl md:text-6xl" color="#E0234E" />
          <SiSupabase className="text-4xl md:text-6xl" color="#639" />
          <SiMongodb className="text-4xl md:text-6xl" color="#4DB33D" />
        </div>
      </div>
    </div>
  );
};
