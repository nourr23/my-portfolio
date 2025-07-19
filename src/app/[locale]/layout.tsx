import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import "./globals.css";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

export default async function PageLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  return (
    <html lang={locale}>
      <body className={`antialiased`}>
        <NextIntlClientProvider>
          <div className=" flex flex-col w-full items-center">
            <Header />
             {children}
           <Footer />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
