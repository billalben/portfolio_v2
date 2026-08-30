import Image from "next/image";

import { cn } from "@/lib/utils";

import { ArrowOutwardIcon } from "./icons";

type CardProps = {
    title: string;
    description: string;
    link: string;
    skills?: string[];
} & ({ type: "project"; image: string } | { type: "experience"; date: string });

const Card = (props: CardProps) => {
    const { title, description, link, skills } = props;

    return (
        <div className="group relative grid grid-cols-[120px_1fr] gap-4 pb-1 transition-all lg:hover:opacity-100! lg:group-hover/list:opacity-50">
            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-100/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg dark:lg:group-hover:bg-slate-800/50"></div>

            <div className="relative">
                {props.type === "project" ? (
                    <Image
                        src={props.image}
                        width={120}
                        height={80}
                        alt={title || "Project Image"}
                        className="w-30 h-20 object-cover rounded border-2 border-slate-200/20 transition group-hover:border-slate-300/40 dark:border-slate-700/30 dark:group-hover:border-slate-600/50 opacity-100 pointer-events-none"
                    />
                ) : (
                    <span className="text-sm font-semibold text-slate-700 dark:text-slate-400">{props.date}</span>
                )}
            </div>

            <div className="z-10 flex flex-col gap-2 min-h-20 justify-start">
                <div>
                    <h3 className="font-medium leading-tight text-slate-900 dark:text-slate-100 text-base">
                        <a
                            href={link}
                            className="inline-flex items-center hover:text-teal-600 dark:hover:text-teal-400 focus-visible:text-teal-600 dark:focus-visible:text-teal-400 group/link transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span
                                className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block lg:-inset-x-8"
                                aria-hidden="true"
                            />
                            {title}
                            <ArrowOutwardIcon
                                aria-hidden="true"
                                className={cn(
                                    "inline-block h-4 w-4 shrink-0 transition-transform motion-reduce:transition-none translate-y-px ms-1",
                                    "group-hover/link:-translate-y-1 group-hover/link:translate-x-1",
                                    "group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1",
                                    "rtl:scale-x-[-1]",
                                    "rtl:group-hover/link:-translate-x-1",
                                    "rtl:group-focus-visible/link:-translate-x-1",
                                )}
                            />
                        </a>
                    </h3>

                    <p className="text-sm leading-normal text-slate-600 dark:text-slate-300 mt-1">{description}</p>
                </div>

                {skills && (
                    <ul className="mt-2 flex flex-wrap gap-2">
                        {skills.map((skill: string, index: number) => (
                            <li key={index}>
                                <div className="flex items-center rounded-full bg-teal-50 dark:bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-700 dark:text-teal-300 border border-teal-200/50 dark:border-teal-400/20">
                                    {skill}
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default Card;
