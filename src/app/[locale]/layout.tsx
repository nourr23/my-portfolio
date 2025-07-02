import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { getMessages } from "@/lib/getMessages";

type Params = Promise<{ locale: string }>;

export default async function PageLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Params;
}) {
  const { locale } = await params;
  // Fetch translations for the current locale
  const messages = await getMessages(locale);
  return (
    <>
      <div className=" flex flex-col w-full items-center">
        <Header messages={messages} locale={locale} />
        {children}
        <Footer />
      </div>
    </>
  );
}
