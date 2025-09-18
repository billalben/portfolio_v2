import type { Metadata } from "next";
import { hasLocale, Locale, NextIntlClientProvider } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Inter } from "next/font/google";
import { notFound } from "next/navigation";

import "@/app/globals.css";
import BackgroundGlow from "@/components/BackgroundGlow";
import { routing } from "@/i18n/routing";

// import Navigation from '@/components/Navigation';

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Billal Benzazoua",
  description: "Personal portfolio of Billal Benzazoua, a passionate software developer and tech enthusiast.",
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

async function generateMetadata(props: Omit<LayoutProps<"/[locale]">, "children">) {
  const { locale } = await props.params;

  const t = await getTranslations({
    locale: locale as Locale,
    namespace: "LocaleLayout",
  });

  return {
    title: t("title"),
  };
}

export default async function LocaleLayout({ children, params }: LayoutProps<"/[locale]">) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  // Determine text direction
  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <html lang="en" dir={dir} data-theme="dark">
      <body className={`${inter.variable} antialiased bg-slate-100 dark:bg-slate-900 relative`}>
        <BackgroundGlow />
        <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0">
          <NextIntlClientProvider>{children}</NextIntlClientProvider>
        </div>
      </body>
    </html>
  );
}
