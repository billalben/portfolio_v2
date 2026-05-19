import { useTranslations } from "next-intl";
import Link from "next/link";

import { cn } from "@/lib/utils";

import Card from "../Card";
import { ArrowOutwardIcon } from "../icons";
import SectionTitle from "./SectionTitle";

const EXPERIENCES = [
    {
        id: "exp1",
        url: "https://github.com/billalben/experience1",
    },
    {
        id: "exp2",
        url: "https://github.com/billalben/experience2",
    },
];

const Experience = () => {
    const t = useTranslations("Experiences");
    const tHeader = useTranslations("Header");

    return (
        <section id="experience" className="mb-16 scroll-mt-14 md:mb-24 lg:mb-36 lg:scroll-mt-24">
            <SectionTitle id="experience">{tHeader("sections.experience")}</SectionTitle>
            <ul className="group/list flex flex-col gap-8">
                {EXPERIENCES.map((experience) => (
                    <li key={experience.id}>
                        <Card
                            key={experience.id}
                            type="experience"
                            title={t(`${experience.id}.name`)}
                            description={t(`${experience.id}.description`)}
                            link={experience.url}
                            date={t(`${experience.id}.date`)}
                        />
                    </li>
                ))}
            </ul>

            <div className="mt-10">
                {/* link for pdf resume */}
                <Link
                    href="/resume.pdf"
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 leading-tight font-semibold group/link text-base"
                >
                    {t("downloadResume")}
                    <ArrowOutwardIcon
                        className={cn(
                            // LTR base + hover
                            "inline-block h-4 w-4 shrink-0 transition-transform motion-reduce:transition-none translate-y-px",
                            "group-hover/link:-translate-y-1 group-hover/link:translate-x-1",
                            "group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1",
                            // RTL: flip icon + reverse horizontal direction on hover
                            "rtl:scale-x-[-1]",
                            "rtl:group-hover/link:-translate-x-1",
                            "rtl:group-focus-visible/link:-translate-x-1",
                        )}
                    />
                </Link>
            </div>
        </section>
    );
};

export default Experience;
