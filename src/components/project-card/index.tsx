import { ProjectsProps } from "@/types/projets";
import React from "react";
import { FiExternalLink } from "react-icons/fi"; // Install with 'npm install react-icons'
import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({ project }: { project: ProjectsProps }) => {
  return (
    <div className=" lg:max-w-[320px] max-w-[300px] bg-white rounded-2xl shadow-lg border border-gray-800">
      {/* Top Section: Image & Content */}
      <Link
        href={`/projects/${project.id}`}
        className="px-3 py-8 gap-x-1 border-b border-gray-200 flex justify-between"
      >
        <div>
          <div className="text-xl font-semibold text-gray-800">
            <h3 className="text-blue-500 capitalize line-clamp-1 overflow-hidden text-ellipsis">
              {project.name}
            </h3>
            <div className=" text-xs">Created in {project.year}</div>
          </div>
          <p className="text-gray-600 text-xs mt-2 line-clamp-6 overflow-hidden text-ellipsis">
            {project.description}
          </p>
        </div>

        <div className="relative flex-1 flex justify-end items-center max-h-[148px]">
          {project.logo && (
            <Image
              className=" w-32 h-auto max-w-none object-cover rounded-md"
              src={project.logo} // Replace with actual image
              alt={project.name}
              width={128} // Adjust width as needed
              height={128} // Adjust height as needed
              loading="lazy"
            />
          )}
        </div>
      </Link>

      {/* Bottom Section: Title & Technologies */}
      <div className="bg-gray-900 text-white rounded-b-xl p-5 items-center justify-between">
        <div className="flex items-center justify-between">
          {/* External Link Icon */}
          <div></div>
          <div className=" w-9 h-[2px] bg-gray-800 rounded-3xl"></div>
          <Link
            href={project.url ?? "#"}
            target="_blank"
            className="text-white text-2xl"
          >
            <FiExternalLink />
          </Link>
        </div>
        <div className="flex flex-col items-center">
          <h4 className="text-lg font-semibold capitalize">
            {project.mobile ? "mobile app" : "Website"}
          </h4>
          <p className="text-xs text-gray-300 capitalize">
            {"("}
            {project.back_end}, {project.front_end}
            {")"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
