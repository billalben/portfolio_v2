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

const SITE_URL = "https://www.billalbenz.com";

// Helper function to determine if locale is RTL
const isRTL = (locale: string) => {
    return locale === "ar";
};

const OG_LOCALES: Record<string, string> = {
    en: "en_US",
    fr: "fr_FR",
    ar: "ar_AR",
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

    const tHeader = await getTranslations({
        locale: locale as Locale,
        namespace: "Header",
    });

    return {
        metadataBase: new URL(SITE_URL),
        title: t("title"),
        description: t("description"),
        creator: tHeader("name"),
        authors: [{ name: tHeader("name"), url: "https://github.com/billalben" }],
        alternates: {
            canonical: `/${locale}`,
            languages: {
                "x-default": "/en",
                en: "/en",
                fr: "/fr",
                ar: "/ar",
            },
        },
        openGraph: {
            type: "website",
            siteName: tHeader("name"),
            title: `${tHeader("name")} - ${tHeader("title")}`,
            description: t("description"),
            locale: OG_LOCALES[locale] ?? "en_US",
            url: `${SITE_URL}/${locale}`,
            alternateLocale: ["en_US", "fr_FR", "ar_AR"],
        },
        twitter: {
            card: "summary_large_image",
            title: `${tHeader("name")} - ${tHeader("title")}`,
            description: t("description"),
            creator: "@billalben",
        },
        robots: {
            index: true,
            follow: true,
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

    const t = await getTranslations({ locale: locale as Locale, namespace: "Header" });

    const personStructuredData = {
        "@context": "https://schema.org",
        "@type": "Person",
        name: t("name"),
        url: `${SITE_URL}/${locale}`,
        jobTitle: t("title"),
        description: t("description"),
        email: "mailto:billalben@gmail.com",
        image: `${SITE_URL}/image.png`,
        worksFor: {
            "@type": "Organization",
            name: "DataMasterDZ",
        },
        sameAs: [
            "https://github.com/billalben",
            "https://www.linkedin.com/in/billal-benzazoua/",
        ],
        knowsAbout: [
            "React",
            "Next.js",
            "TypeScript",
            "JavaScript",
            "Tailwind CSS",
            "Redux",
            "Node.js",
            "Vue.js",
            "Accessibility",
            "Responsive Web Design",
        ],
    };

    return (
        <html
            data-theme="dark"
            lang={locale}
            dir={isRTL(locale) ? "rtl" : "ltr"}
            suppressHydrationWarning
            className="scroll-smooth lg:snap-y lg:snap-proximity"
        >
            <body className={`${inter.variable} antialiased bg-slate-100 dark:bg-slate-900 leading-relaxed relative`}>
                <BackgroundGlow />
                <div className="mx-auto min-h-screen max-w-7xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0">
                    <NextIntlClientProvider locale={locale} messages={messages}>
                        {children}
                    </NextIntlClientProvider>
                </div>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(personStructuredData) }}
                />
            </body>

            <GoogleAnalytics gaId="G-CGT7K6SW93" />
        </html>
    );
}