import { getMessages } from "@/lib/getMessages";
import { notFound } from "next/navigation";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { AboutMe } from "@/components/sections/about-me";
import { Skills } from "@/components/sections/skills";
import { supabase } from "@/lib/supabase";

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

  // Fetch messages for the locale
  const messages = await getMessages(locale);
  const projects = await getProjects();
  console.log("projects", projects);
  return (
    <main className=" w-full bg-dark-300 px-2 md:px-0 flex flex-col items-center">
      <AboutMe />
      <Skills />
    </main>
  );
}

const getProjects = async () => {
  let { data: projects, error } = await supabase.from("projects").select("*");
  if (error) {
    console.error("Error fetching projects", error);
    return;
  }
  console.log("projects", projects);
  return projects;
};
