"use client";

import { useState } from "react";

import { IconStarFilled } from "@tabler/icons-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

import { ProjectEntry } from "@/data/projects";

import Modal from "../Modal";
import ProjectDetails from "../projects/ProjectDetails";
import CardShell from "./CardShell";

type ProjectCardProps = {
    project: ProjectEntry;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
    const t = useTranslations("Projects");
    const tModal = useTranslations("Modal");
    const [open, setOpen] = useState(false);

    const title = t(`items.${project.id}.name`);

    return (
        <>
            <CardShell
                onClick={() => setOpen(true)}
                actionLabel={title}
                media={
                    <Image
                        src={project.image}
                        width={120}
                        height={80}
                        alt={title || "Project Image"}
                        className="w-30 h-20 object-cover rounded border-2 border-slate-200/20 transition group-hover:border-slate-300/40 dark:border-slate-700/30 dark:group-hover:border-slate-600/50 opacity-100 pointer-events-none"
                    />
                }
            >
                <div>
                    <div className="flex items-center gap-1.5">
                        <h3 className="font-medium leading-tight text-slate-900 dark:text-slate-100 text-base">{title}</h3>
                        {project.badge && <IconStarFilled aria-hidden="true" className="size-4 shrink-0 text-accent-orange" />}
                    </div>

                    <p className="text-sm leading-normal text-slate-600 dark:text-slate-300 mt-1">{t(`items.${project.id}.tagline`)}</p>
                </div>

                {project.builtWith.length > 0 && (
                    <ul className="mt-2 flex flex-wrap gap-2">
                        {project.builtWith.map((skill) => (
                            <li key={skill}>
                                <div className="flex items-center rounded-full bg-accent-green/10 px-3 py-1 text-xs font-medium leading-5 text-slate-700 border border-accent-green/50 dark:border-accent-green/30 dark:text-slate-200">
                                    {skill}
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </CardShell>

            <Modal open={open} onClose={() => setOpen(false)} title={title} closeLabel={tModal("close")} size="sm">
                <ProjectDetails project={project} />
            </Modal>
        </>
    );
};

export default ProjectCard;
