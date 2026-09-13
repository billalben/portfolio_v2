import { useTranslations } from "next-intl";
import Link from "next/link";

import { cn } from "@/lib/utils";

import ExperienceCard from "../cards/ExperienceCard";
import { ArrowOutwardIcon } from "../icons";
import SectionTitle from "./SectionTitle";

const EXPERIENCES = ["exp1", "exp2"] as const;

const Experience = () => {
    const t = useTranslations("Experiences");
    const tModal = useTranslations("Modal");
    const tHeader = useTranslations("Header");

    return (
        <section id="experience" className="flex min-h-svh h-full snap-start flex-col">
            <SectionTitle id="experience">{tHeader("sections.experience")}</SectionTitle>

            <div className="my-auto flex w-full flex-col gap-8">
                <ul className="group/list flex flex-col gap-8">
                    {EXPERIENCES.map((id) => (
                        <li key={id}>
                            <ExperienceCard
                                title={t(`${id}.name`)}
                                description={t(`${id}.description`)}
                                date={t(`${id}.date`)}
                                highlights={t.raw(`${id}.highlights`) as string[]}
                                closeLabel={tModal("close")}
                                modalContent={<p>{t("modalSoon")}</p>}
                            />
                        </li>
                    ))}
                </ul>

                {/* link for pdf resume */}
                <Link
                    href="/Billal_Benzazoua_CV.pdf"
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
