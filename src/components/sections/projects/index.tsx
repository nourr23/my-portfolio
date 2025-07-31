import ProjectCard from "@/components/project-card";
import { ProjectsProps } from "@/types/projets";
import { useTranslations } from "next-intl";
import Link from "next/link";

export const Projects = ({
  projects,
  home_page,
}: {
  projects: ProjectsProps[];
  home_page?: boolean;
}) => {
  const t = useTranslations("home");
  return (
    <div
      id="projects"
      className="border-b border-gray-800 w-full flex justify-center"
    >
      <div className=" max-w-[1080px] small:px-0 md:py-20 py-4 w-full md:px-4 px-2 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))]  from-primary-500/20 via-dark-300  to-dark-300">
        <div className="bg-gradient-to-r from-25% from-primary-500 via-secondary-500 to-secondary-500 inline-block text-transparent bg-clip-text text-2xl md:text-5xl uppercase">
          {t("projects")}
        </div>
        {home_page ? (
          <>
            <div className="flex items-center flex-wrap w-full justify-center gap-2 md:gap-10 mt-8">
              {projects
                .slice(0, 3)
                .sort((a, b) => a.order - b.order)
                .map((project) => {
                  return <ProjectCard key={project.id} project={project} />;
                })}
              {projects
                .slice(3, 6)
                .sort((a, b) => a.order - b.order)
                .map((project) => {
                  return (
                    <div key={project.id} className="hidden md:flex">
                      <ProjectCard project={project} />
                    </div>
                  );
                })}
              {/* </div> */}
            </div>
          </>
        ) : (
          <>
            <div className="flex items-center flex-wrap w-full justify-center gap-2 md:gap-10 mt-8">
              {projects
                .sort((a, b) => a.order - b.order)
                .map((project) => {
                  return <ProjectCard key={project.id} project={project} />;
                })}
              {/* </div> */}
            </div>
          </>
        )}

        {home_page && (
          <div className="flex justify-center mt-10">
            <Link
              href="/projects"
              className="text-primary-500 text-2xl hover:underline"
            >
              {t("see_all_projects")}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
