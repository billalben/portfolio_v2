import { Skill } from "@/data/skills";

import BrandIcon from "../icons/BrandIcon";

type SkillCardProps = {
    skill: Skill;
};

const SkillCard = ({ skill }: SkillCardProps) => (
    <li className="mx-1.5 shrink-0">
        <div className="group flex items-center gap-2.5 rounded-lg border border-slate-200/60 bg-white/40 px-4 py-2.5 transition-all duration-200 hover:border-accent-blue/40 hover:shadow-sm dark:border-slate-700/50 dark:bg-slate-800/30">
            {skill.icon && (
                <BrandIcon
                    icon={skill.icon}
                    className="size-6 shrink-0 text-slate-500 transition-colors duration-200 group-hover:text-[var(--brand)] dark:text-slate-400 dark:group-hover:text-[var(--brand-dark)]"
                />
            )}
            <span className="whitespace-nowrap text-sm font-medium text-slate-700 dark:text-slate-300">{skill.name}</span>
        </div>
    </li>
);

export default SkillCard;
