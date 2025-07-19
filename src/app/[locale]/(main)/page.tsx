import { supabase } from "@/lib/supabase";
import { AboutMe, Skills, Services, Projects } from "@/components/sections";
import { ContactMe } from "@/components/sections/contact-me";

export default async function LocalePage() {
  const projects = await getProjects();
  return (
    <main className=" w-full bg-dark-300 px-2 md:px-0 flex flex-col items-center">
      <AboutMe />
      <Skills />
      {projects && <Projects projects={projects} />}
      <Services />
      <ContactMe />
    </main>
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
