import { getMessages } from "@/lib/getMessages";
import { notFound } from "next/navigation";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { AboutMe } from "@/components/sections/about-me";

export default async function LocalePage({
  params,
}: {
  params: { locale: string };
}) {
  const { locale } = params;

  // Supported locales
  const supportedLocales = ["en", "fr"];

  // Handle unsupported locales
  if (!supportedLocales.includes(locale)) {
    notFound(); // Automatically shows the Next.js 404 page
  }

  // Fetch messages for the locale
  const messages = await getMessages(locale);

  return (
    <main>
      <AboutMe />
      <h1>{messages.welcome}</h1>
      <LanguageSwitcher />
    </main>
  );
}
