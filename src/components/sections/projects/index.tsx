import ProjectCard from "@/components/project-card";
import { ProjectsProps } from "@/types/projets";

export const Projects = ({ projects }: { projects: ProjectsProps[] }) => {
  return (
    <div className="border-b border-gray-800 w-full">
      <div className=" md:py-20 py-4 w-full md:px-11 px-2 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))]  from-primary-500/20 via-dark-300  to-dark-300">
        <div className="bg-gradient-to-r from-25% from-primary-500 via-secondary-500 to-secondary-500 inline-block text-transparent bg-clip-text text-2xl md:text-5xl uppercase">
          Projects
        </div>
        <div className="flex items-center flex-wrap w-full justify-center gap-2 md:gap-10 mt-8">
          {projects
            .slice(0, 3)
            .sort((a, b) => a.order - b.order)
            .map((project) => {
              return <ProjectCard project={project} />;
            })}
          {/* <div className=" hidden lg:flex items-center flex-wrap w-full justify-center gap-2 md:gap-10"> */}
          {projects
            .slice(3, 6)
            .sort((a, b) => a.order - b.order)
            .map((project) => {
              return (
                <div className="hidden md:flex">
                  <ProjectCard project={project} />
                </div>
              );
            })}
          {/* </div> */}
        </div>
        <div className="flex justify-center mt-10">
          <a href="/projects" className="text-primary-500 text-2xl hover:underline">
            See All Projects
          </a>
        </div>
      </div>
    </div>
  );
};
