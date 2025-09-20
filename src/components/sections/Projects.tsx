import { useTranslations } from "next-intl";
import Link from "next/link";

import { ArrowOutwardIcon } from "../icons";
import ProjectCard from "../ProjectCard";

const Projects = () => {
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
        {
            id: "project2",
            image: "/image.png",
            url: "https://github.com/billlalben/project2",
            skills: ["JavaScript", "CSS", "HTML"],
        },
    ];

    const t = useTranslations("Projects");

    return (
        <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
            <ul className="group/list flex flex-col gap-8">
                {PROJECTS.map((project) => (
                    <li key={project.id}>
                        <ProjectCard
                            key={project.id}
                            title={t(`${project.id}.name`)}
                            description={t(`${project.id}.description`)}
                            image={project.image}
                            link={project.url}
                            skills={project.skills}
                        />
                    </li>
                ))}
            </ul>

            <div className="mt-10">
                {/* show all projects in /projects route */}
                <Link href="/projects" className="text-teal-600 hover:underline">
                    {t("viewAll")}
                </Link>
            </div>
        </section>
    );
};

export default Projects;
