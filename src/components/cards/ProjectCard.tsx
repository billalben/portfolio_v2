"use client";

import { useState } from "react";

import Image from "next/image";
import { useTranslations } from "next-intl";

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
                    <h3 className="font-medium leading-tight text-slate-900 dark:text-slate-100 text-base">{title}</h3>

                    <p className="text-sm leading-normal text-slate-600 dark:text-slate-300 mt-1">
                        {t(`items.${project.id}.tagline`)}
                    </p>
                </div>

                {project.builtWith.length > 0 && (
                    <ul className="mt-2 flex flex-wrap gap-2">
                        {project.builtWith.map((skill) => (
                            <li key={skill}>
                                <div className="flex items-center rounded-full bg-teal-50 dark:bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-700 dark:text-teal-300 border border-teal-200/50 dark:border-teal-400/20">
                                    {skill}
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </CardShell>

            <Modal open={open} onClose={() => setOpen(false)} title={title} closeLabel={tModal("close")}>
                <ProjectDetails project={project} />
            </Modal>
        </>
    );
};

export default ProjectCard;
