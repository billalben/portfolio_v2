import { useTranslations } from "next-intl";

import { GithubIcon } from "../icons";
import {
    CssIcon,
    ExpressIcon,
    FigmaIcon,
    GitIcon,
    HtmlIcon,
    JsIcon,
    MuiIcon,
    NextIcon,
    NodeIcon,
    ReactIcon,
    ShadcnIcon,
    TailwindIcon,
    TsIcon,
    VsCodeIcon,
} from "../icons/skills";
import BoostrapIcon from "../icons/skills/BootstrapIcon";
import LogoCarousel from "../LogoCarousel";
import SectionTitle from "./SectionTitle";

const Skills = () => {
    const tHeader = useTranslations("Header");
    const logos = [
        { src: <GitIcon className="w-14 h-14 text-gray-900 dark:text-white" />, alt: "Git" },
        { src: <GithubIcon className="w-14 h-14 text-gray-900 dark:text-white" />, alt: "Github" },
        { src: <HtmlIcon className="w-14 h-14 text-gray-900 dark:text-white" />, alt: "HTML" },
        { src: <CssIcon className="w-14 h-14 text-gray-900 dark:text-white" />, alt: "CSS" },
        { src: <JsIcon className="w-14 h-14 text-gray-900 dark:text-white" />, alt: "JavaScript" },
        { src: <TsIcon className="w-14 h-14 text-gray-900 dark:text-white" />, alt: "TypeScript" },
        { src: <ReactIcon className="w-14 h-14 text-gray-900 dark:text-white" />, alt: "React" },
        { src: <NextIcon className="w-14 h-14 text-gray-900 dark:text-white" />, alt: "Next.js" },
    ];

    const logos2 = [
        { src: <FigmaIcon className="w-14 h-14 text-gray-900 dark:text-white" />, alt: "Figma" },
        { src: <BoostrapIcon className="w-14 h-14 text-gray-900 dark:text-white" />, alt: "Bootstrap" },
        { src: <TailwindIcon className="w-14 h-14 text-gray-900 dark:text-white" />, alt: "Tailwind CSS" },
        { src: <ShadcnIcon className="w-14 h-14 text-gray-900 dark:text-white" />, alt: "Shadcn" },
        { src: <MuiIcon className="w-14 h-14 text-gray-900 dark:text-white" />, alt: "Material UI" },
        { src: <ExpressIcon className="w-14 h-14 text-gray-900 dark:text-white" />, alt: "Express" },
        { src: <NodeIcon className="w-14 h-14 text-gray-900 dark:text-white" />, alt: "Node.js" },
        { src: <VsCodeIcon className="w-14 h-14 text-gray-900 dark:text-white" />, alt: "VS Code" },
    ];

    return (
        <section id="skills">
            <SectionTitle id="skills">{tHeader("sections.skills")}</SectionTitle>
            <div className="space-y-20">
                <LogoCarousel logos={logos} move="right" />
                <LogoCarousel logos={logos2} move="left" />
            </div>
        </section>
    );
};

export default Skills;
