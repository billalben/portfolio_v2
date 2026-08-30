import { Locale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";

import LocaleSwitcher from "@/components/LocaleSwitcher";
import ProjectsTable from "@/components/projects/ProjectsTable";
import ThemeToggle from "@/components/ThemeToggle";
import { Link } from "@/i18n/navigation";

export async function generateMetadata({ params }: PageProps<"/[locale]/projects">) {
    const { locale } = await params;
    const t = await getTranslations({ locale: locale as Locale, namespace: "ProjectsPage" });
    const site = await getTranslations({ locale: locale as Locale, namespace: "Header" });

    return {
        metadataBase: new URL("https://www.billalbenz.com"),
        title: `${t("title")} | ${site("name")}`,
        description: t("description"),
        alternates: {
            canonical: `/${locale}/projects`,
            languages: {
                "x-default": "/en/projects",
                en: "/en/projects",
                fr: "/fr/projects",
                ar: "/ar/projects",
            },
        },
        openGraph: {
            type: "website",
            siteName: site("name"),
            title: `${t("title")} | ${site("name")}`,
            description: t("description"),
            locale: locale === "fr" ? "fr_FR" : locale === "ar" ? "ar_AR" : "en_US",
            url: `https://www.billalbenz.com/${locale}/projects`,
        },
        twitter: {
            card: "summary_large_image",
            title: `${t("title")} | ${site("name")}`,
            description: t("description"),
        },
    };
}

export default async function ProjectsPage({ params }: PageProps<"/[locale]/projects">) {
    const { locale } = await params;
    setRequestLocale(locale);

    const t = await getTranslations("ProjectsPage");
    const tHeader = await getTranslations("Header");

    return (
        <main className="mx-auto max-w-4xl py-8 md:py-16">
            <div className="mb-8 flex items-center justify-end gap-4">
                <ThemeToggle />
                <LocaleSwitcher />
            </div>

            <Link
                href="/"
                className="group mb-8 inline-flex items-center gap-2 text-sm font-medium text-teal-600 transition hover:text-teal-500 dark:text-teal-400 dark:hover:text-teal-300"
            >
                <span aria-hidden className="transition group-hover:-translate-x-0.5 rtl:rotate-180 rtl:group-hover:translate-x-0.5">
                    ←
                </span>
                {tHeader("name")}
            </Link>

            <h1 className="mb-10 text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-5xl">
                {t("title")}
            </h1>

            <ProjectsTable />
        </main>
    );
}
