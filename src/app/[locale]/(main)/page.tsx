import { getMessages } from "@/lib/getMessages";
import { notFound } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { AboutMe, Skills, Projects, Services } from "@/components/sections";
import { ContactMe } from "@/components/sections/contact-me";

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

  console.log(messages);

  const projects = await getProjects();
  return (
    <main className=" w-full bg-dark-300 px-2 md:px-0 flex flex-col items-center">
      <AboutMe messages={messages} />
      <Skills messages={messages} />
      {projects && <Projects projects={projects} messages={messages} />}
      <Services messages={messages} />
      <ContactMe messages={messages} />
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
