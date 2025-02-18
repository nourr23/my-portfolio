import { getMessages } from "@/lib/getMessages";
import { notFound } from "next/navigation";
import { AboutMe } from "@/components/sections/about-me";
import { Skills } from "@/components/sections/skills";
import { supabase } from "@/lib/supabase";
import { Projects } from "@/components/sections/projects";

export default async function LocalePage({
  params,
}: {
  params: { locale: string };
}) {
  const { locale } = await params;

  // Supported locales
  const supportedLocales = ["en", "fr"];

  // Handle unsupported locales
  if (!supportedLocales.includes(locale)) {
    notFound(); // Automatically shows the Next.js 404 page
  }

  const projects = await getProjects();
  console.log("projects", projects);
  return (
    <main className=" w-full bg-dark-300 px-2 md:px-0 flex flex-col items-center">
      <AboutMe />
      <Skills />
      {projects && <Projects projects={projects} />}
    </main>
  );
}

const getProjects = async () => {
  let { data: projects, error } = await supabase
    .from("projects")
    .select(
      "id,name,year,description,order,description,important,mobile,logo,back_end,front_end"
    )
    .eq("important", true);
  if (error) {
    console.error("Error fetching projects", error);
    return;
  }
  return projects;
};
