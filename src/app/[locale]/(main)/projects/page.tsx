import { Projects } from "@/components/sections";
import { supabase } from "@/lib/supabase";

export default async function ProjectsPage() {
  const projects = await getProjects();
  return (
    <div className="w-full bg-dark-300 px-2 md:px-0 flex flex-col items-center pt-40">
      {projects && <Projects projects={projects} />}
    </div>
  );
}
const getProjects = async () => {
  const { data: projects, error } = await supabase
    .from("projects")
    .select(
      "id,name,year,description,order,description,important,mobile,logo,back_end,front_end, url"
    )
    .eq("important", true);
  if (error) {
    console.error("Error fetching projects", error);
    return;
  }
  return projects;
};
