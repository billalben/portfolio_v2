import Image from "next/image";

import { ArrowOutwardIcon } from "./icons";

type TProps = {
    image: string;
    title: string;
    description: string;
    link: string;
    skills?: string[];
};

const ProjectCard = ({ image, title, description, link, skills }: TProps) => {
    return (
        <div className="group relative flex gap-6 pb-1 transition-all lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-100/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg dark:lg:group-hover:bg-slate-800/50"></div>

            <div className="flex-shrink-0 relative">
                <Image
                    src={image}
                    width={120}
                    height={80}
                    alt={title || "Project Image"}
                    className="w-[120px] h-[80px] object-cover rounded border-2 border-slate-200/20 transition group-hover:border-slate-300/40 dark:border-slate-700/30 dark:group-hover:border-slate-600/50 opacity-100 pointer-events-none"
                />
            </div>

            <div className="z-10 flex flex-1 flex-col gap-2 min-h-[80px] justify-start">
                <div>
                    <h3>
                        <a
                            href={link}
                            className="inline-flex items-baseline font-medium leading-tight text-slate-900 hover:text-teal-600 dark:text-slate-100 dark:hover:text-teal-400 focus-visible:text-teal-600 dark:focus-visible:text-teal-400 group/link text-base transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block lg:-inset-x-8"></span>
                            <span className="space-x-2">
                                {title}

                                <ArrowOutwardIcon className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" />
                            </span>
                        </a>
                    </h3>

                    <p className="text-sm leading-normal text-slate-600 dark:text-slate-300 mt-1">{description}</p>
                </div>

                {skills && (
                    <ul className="mt-2 flex flex-wrap gap-2">
                        {skills.map((skill, index) => (
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

export default ProjectCard;
