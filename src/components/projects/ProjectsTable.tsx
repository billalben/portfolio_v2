import { IconExternalLink } from "@tabler/icons-react";
import { useTranslations } from "next-intl";

import { PROJECT_LIST } from "@/data/projects";

const ProjectsTable = () => {
    const t = useTranslations("ProjectsPage");

    return (
        <div className="overflow-x-auto">
            <table className="w-full min-w-lg border-collapse text-start">
                <thead>
                    <tr className="border-b border-slate-200 dark:border-slate-700/80">
                        <th
                            scope="col"
                            className="py-3 pe-4 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400"
                        >
                            {t("columns.project")}
                        </th>
                        <th
                            scope="col"
                            className="py-3 pe-4 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400"
                        >
                            {t("columns.builtWith")}
                        </th>
                        <th scope="col" className="py-3 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                            {t("columns.link")}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {PROJECT_LIST.map((project) => (
                        <tr key={project.id} className="border-b border-slate-200/80 dark:border-slate-700/50 last:border-b-0">
                            <td className="py-5 pe-4 align-top">
                                <span className="font-semibold text-slate-900 dark:text-slate-100">{t(`items.${project.id}.name`)}</span>
                            </td>
                            <td className="py-5 pe-4 align-top">
                                <ul className="flex flex-wrap gap-2">
                                    {project.builtWith.map((tech) => (
                                        <li key={tech}>
                                            <span className="inline-block rounded-full bg-teal-400/10 px-2.5 py-0.5 text-xs font-medium text-teal-700 dark:bg-teal-400/15 dark:text-teal-300">
                                                {tech}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </td>
                            <td className="py-5 align-top">
                                <a
                                    href={project.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 break-all text-sm text-slate-600 transition hover:text-teal-600 dark:text-slate-400 dark:hover:text-teal-400"
                                    aria-label={t("openLink", { project: t(`items.${project.id}.name`) })}
                                >
                                    <span className="max-w-48 truncate sm:max-w-xs">{project.url}</span>
                                    <IconExternalLink className="inline-block h-4 w-4 shrink-0 opacity-70" aria-hidden />
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProjectsTable;
