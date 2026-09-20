import { IconBrandGithub, IconExternalLink } from "@tabler/icons-react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";

import { ProjectEntry } from "@/data/projects";
import { formatProjectDate } from "@/lib/utils";

type ProjectDetailsProps = {
    project: ProjectEntry;
};

const ProjectDetails = ({ project }: ProjectDetailsProps) => {
    const t = useTranslations("Projects");
    const locale = useLocale();
    const highlights = t.raw(`items.${project.id}.highlights`) as string[];

    return (
        <div className="flex flex-col gap-4">
            <p className="text-xs font-medium uppercase tracking-wide text-slate-400 dark:text-slate-500">
                {formatProjectDate(project.date, locale)}
            </p>

            <p>{t(`items.${project.id}.tagline`)}</p>

            <ul className="flex list-disc flex-col gap-1.5 ps-5 marker:text-slate-400 dark:marker:text-slate-500">
                {highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                ))}
            </ul>

            {project.builtWith.length > 0 && (
                <ul className="flex flex-wrap gap-2">
                    {project.builtWith.map((skill) => (
                        <li key={skill}>
                            <span className="inline-flex items-center rounded-full border border-accent-green/50 bg-accent-green/10 px-3 py-1 text-xs font-medium leading-5 text-slate-700 dark:border-accent-green/30 dark:text-slate-200">
                                {skill}
                            </span>
                        </li>
                    ))}
                </ul>
            )}

            {(project.repo || project.demo) && (
                <div className="flex flex-wrap gap-3">
                    {project.repo && (
                        <a
                            href={project.repo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 rounded-md bg-slate-900 px-3 py-1.5 text-sm font-medium text-white transition-colors hover:bg-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-300"
                        >
                            <IconBrandGithub className="size-4" aria-hidden="true" />
                            {t("repo")}
                        </a>
                    )}

                    {project.demo && (
                        <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 rounded-md bg-accent-blue px-3 py-1.5 text-sm font-medium text-slate-900 transition-colors hover:bg-accent-blue/85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue"
                        >
                            <IconExternalLink className="size-4" aria-hidden="true" />
                            {t("demo")}
                        </a>
                    )}
                </div>
            )}

            {project.screenshots && project.screenshots.length > 0 && (
                <div className="flex flex-col gap-2">
                    <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">{t("screenshots")}</h3>
                    <div className="grid grid-cols-2 gap-2">
                        {project.screenshots.map((screenshot, index) => (
                            <Image
                                key={screenshot}
                                src={screenshot}
                                alt={`${t(`items.${project.id}.name`)} — ${index + 1}`}
                                width={480}
                                height={300}
                                className="h-auto w-full rounded border border-slate-200 object-cover dark:border-slate-700"
                            />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProjectDetails;
