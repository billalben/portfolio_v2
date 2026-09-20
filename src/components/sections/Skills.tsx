import { useTranslations } from "next-intl";

import type { Skill } from "@/data/skills";
import { SKILLS } from "@/data/skills";

import SkillCard from "../cards/SkillCard";
import SectionTitle from "./SectionTitle";

const HALF = Math.ceil(SKILLS.length / 2);
const ROW_ONE = SKILLS.slice(0, HALF);
const ROW_TWO = SKILLS.slice(HALF);

type SkillRowProps = {
    skills: Skill[];
    direction: "left" | "right";
};

const SkillRow = ({ skills, direction }: SkillRowProps) => {
    const animationClass = direction === "right" ? "marquee-right" : "marquee-left";

    return (
        <div
            dir="ltr"
            className="w-full py-1 overflow-hidden mask-[linear-gradient(to_right,transparent_0,black_64px,black_calc(100%-64px),transparent_100%)]"
        >
            <div className="flex w-max">
                <ul className={`flex w-max items-center ${animationClass}`}>
                    {skills.map((skill) => (
                        <SkillCard key={skill.name} skill={skill} />
                    ))}
                </ul>
                <ul aria-hidden="true" className={`flex w-max items-center ${animationClass}`}>
                    {skills.map((skill) => (
                        <SkillCard key={`clone-${skill.name}`} skill={skill} />
                    ))}
                </ul>
            </div>
        </div>
    );
};

const Skills = () => {
    const tHeader = useTranslations("Header");

    return (
        <section id="skills" className="flex snap-start flex-col py-16 lg:min-h-svh lg:h-full lg:py-0">
            <SectionTitle id="skills">{tHeader("sections.skills")}</SectionTitle>
            <div className="skills-marquee my-auto flex w-full flex-col gap-4">
                <SkillRow skills={ROW_ONE} direction="right" />
                <SkillRow skills={ROW_TWO} direction="left" />
            </div>
        </section>
    );
};

export default Skills;
