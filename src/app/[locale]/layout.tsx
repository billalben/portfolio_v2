import { GoogleAnalytics } from "@next/third-parties/google";
import { hasLocale, Locale, NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { Inter } from "next/font/google";
import { notFound } from "next/navigation";

import BackgroundGlow from "@/components/BackgroundGlow";
import { routing } from "@/i18n/routing";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
});

// Helper function to determine if locale is RTL
const isRTL = (locale: string) => {
    return locale === "ar";
};

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata(props: Omit<LayoutProps<"/[locale]">, "children">) {
    const { locale } = await props.params;

    const t = await getTranslations({
        locale: locale as Locale,
        namespace: "LocaleLayout",
    });

    return {
        title: t("title"),
        description: t("description"),
        openGraph: {
            title: `${t("name")} - ${t("title")}`,
            description: t("description"),
            locale,
        },
    };
}

export default async function RootLayout({ children, params }: LayoutProps<"/[locale]">) {
    // Ensure that the incoming `locale` is valid
    const { locale } = await params;
    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }

    // Enable static rendering
    setRequestLocale(locale);

    const messages = await getMessages();

    return (
        <html
            data-theme="dark"
            lang={locale}
            dir={isRTL(locale) ? "rtl" : "ltr"}
            suppressHydrationWarning
            className="lg:snap-y lg:snap-mandatory"
        >
            <body className={`${inter.variable} antialiased bg-slate-100 dark:bg-slate-900 leading-relaxed relative`}>
                <BackgroundGlow />
                <div className="mx-auto min-h-screen max-w-7xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0">
                    <NextIntlClientProvider locale={locale} messages={messages}>
                        {children}
                    </NextIntlClientProvider>
                </div>
            </body>

            <GoogleAnalytics gaId="G-CGT7K6SW93" />
        </html>
    );
}
