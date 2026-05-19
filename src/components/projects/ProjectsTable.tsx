import { useTranslations } from "next-intl";

import { PROJECT_LIST } from "@/data/projects";

const ExternalLinkIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="inline-block h-4 w-4 shrink-0 opacity-70"
        aria-hidden
    >
        <path
            fillRule="evenodd"
            d="M4.25 5.5a.75.75 0 0 0-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 0 0 .75-.75v-4a.75.75 0 0 1 1.5 0v4A2.25 2.25 0 0 1 12.75 17h-8.5A2.25 2.25 0 0 1 2 14.75v-8.5A2.25 2.25 0 0 1 4.25 4h5a.75.75 0 0 1 0 1.5h-5Z"
            clipRule="evenodd"
        />
        <path
            fillRule="evenodd"
            d="M6.194 12.753a.75.75 0 0 0 1.06.053L16.5 4.44v2.81a.75.75 0 0 0 1.5 0v-4.5a.75.75 0 0 0-.75-.75h-4.5a.75.75 0 0 0 0 1.5h2.553l-9.056 8.194a.75.75 0 0 0-.053 1.06Z"
            clipRule="evenodd"
        />
    </svg>
);

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
                                    <ExternalLinkIcon />
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
