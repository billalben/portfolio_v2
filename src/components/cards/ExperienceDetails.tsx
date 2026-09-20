import { IconWorld } from "@tabler/icons-react";

import { cn } from "@/lib/utils";

import { ArrowOutwardIcon, LinkedinIcon } from "../icons";

type ExperienceSection = {
    title: string;
    items: string[];
};

type ExperienceLink = {
    href: string;
    label: string;
    kind: "website" | "linkedin";
};

type ExperienceDetailsProps = {
    summary: string;
    sections: ExperienceSection[];
    stackTitle: string;
    stack: string[];
    links: ExperienceLink[];
};

const ExperienceDetails = ({ summary, sections, stackTitle, stack, links }: ExperienceDetailsProps) => {
    return (
        <div className="flex flex-col gap-5">
            <p>{summary}</p>

            {sections.map((section) => (
                <section key={section.title} className="flex flex-col gap-2">
                    <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">{section.title}</h3>
                    <ul className="flex list-disc flex-col gap-1.5 ps-5 marker:text-slate-400 dark:marker:text-slate-500">
                        {section.items.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </section>
            ))}

            {stack.length > 0 && (
                <section className="flex flex-col gap-2">
                    <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">{stackTitle}</h3>
                    <ul className="flex flex-wrap gap-2">
                        {stack.map((skill) => (
                            <li key={skill}>
                                <span className="inline-flex items-center rounded-full border border-accent-green/50 bg-accent-green/10 px-3 py-1 text-xs font-medium leading-5 text-slate-700 dark:border-accent-green/30 dark:text-slate-200">
                                    {skill}
                                </span>
                            </li>
                        ))}
                    </ul>
                </section>
            )}

            {links.length > 0 && (
                <ul className="flex flex-wrap items-center gap-x-4 gap-y-2">
                    {links.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={link.label}
                                className="group/link inline-flex items-center gap-1.5 text-sm font-medium text-slate-700 transition-colors hover:text-accent-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue dark:text-slate-300 dark:hover:text-accent-blue"
                            >
                                {link.kind === "linkedin" ? (
                                    <LinkedinIcon className="size-4 shrink-0" aria-hidden="true" />
                                ) : (
                                    <IconWorld className="size-4 shrink-0" aria-hidden="true" />
                                )}

                                <span className="underline-offset-2 group-hover/link:underline">{link.label}</span>

                                <ArrowOutwardIcon
                                    aria-hidden="true"
                                    className={cn(
                                        "inline-block size-3.5 shrink-0 transition-transform motion-reduce:transition-none",
                                        "group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5",
                                        "group-focus-visible/link:-translate-y-0.5 group-focus-visible/link:translate-x-0.5",
                                        "rtl:scale-x-[-1]",
                                        "rtl:group-hover/link:-translate-x-0.5",
                                        "rtl:group-focus-visible/link:-translate-x-0.5",
                                    )}
                                />
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ExperienceDetails;
