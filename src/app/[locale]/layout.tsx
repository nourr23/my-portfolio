import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { getMessages } from "@/lib/getMessages";

export default async function PageLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = await params;
  // Fetch translations for the current locale
  const messages = await getMessages(locale);
  return (
    <html lang={locale}>
      <body>
        <div className=" flex flex-col w-full items-center">
          <Header messages={messages} locale={locale} />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
