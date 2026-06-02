import { useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

import Card from "../Card";
import { ArrowOutwardIcon } from "../icons";
import SectionTitle from "./SectionTitle";

const PROJECTS = [
    {
        id: "project1",
        image: "/image.png",
        url: "https://github.com/billalben/project1",
        skills: ["React", "TypeScript", "Next.js"],
    },
    {
        id: "project2",
        image: "/image.png",
        url: "https://github.com/billalben/project2",
        skills: ["JavaScript", "CSS", "HTML"],
    },
];

const Projects = () => {
    const t = useTranslations("Projects");
    const tHeader = useTranslations("Header");

    return (
        <section id="projects">
            <SectionTitle id="projects">{tHeader("sections.projects")}</SectionTitle>
            <div className="flex flex-col gap-8 h-full justify-center">
                <ul className="group/list flex flex-col gap-8">
                    {PROJECTS.map((project) => (
                        <li key={project.id}>
                            <Card
                                type="project"
                                title={t(`${project.id}.name`)}
                                description={t(`${project.id}.description`)}
                                image={project.image}
                                link={project.url}
                                skills={project.skills}
                            />
                        </li>
                    ))}
                </ul>

                {/* show all projects in /projects route */}
                <Link href="/projects" className="flex items-center gap-1 leading-tight font-semibold group/link text-base">
                    {t("viewAll")}
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

export default Projects;
