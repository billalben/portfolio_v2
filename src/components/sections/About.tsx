import { useTranslations } from "next-intl";

import SectionTitle from "./SectionTitle";

const About = () => {
    const t = useTranslations("About");
    const tHeader = useTranslations("Header");

    return (
        <section id="about" className="h-[calc(100vh-24px)] scroll-mt-14 lg:scroll-mt-24">
            <SectionTitle id="about">{tHeader("sections.about")}</SectionTitle>
            <div>
                <p className="mb-4 text-slate-700 dark:text-slate-400">
                    {t.rich("p1", {
                        strong: (chunks) => <strong className="font-semibold">{chunks}</strong>,
                    })}
                </p>

                <p className="mb-4 text-slate-700 dark:text-slate-400">
                    {t.rich("p2", {
                        link: (chunks) => (
                            <a
                                href="https://www.linkedin.com/company/datamasterdz"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline text-blue-600 dark:text-blue-400"
                            >
                                {chunks}
                            </a>
                        ),
                    })}
                </p>

                <p className="mb-4 text-slate-700 dark:text-slate-400">{t("p3")}</p>

                <p className="mb-4 text-slate-700 dark:text-slate-400">{t("p4")}</p>

                <p className="mb-4 text-slate-700 dark:text-slate-400">{t("p5")}</p>
            </div>
        </section>
    );
};

export default About;
