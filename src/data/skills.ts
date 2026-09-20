import type { SimpleIcon } from "simple-icons";
import {
    siAntdesign,
    siBootstrap,
    siCss,
    siExpress,
    siFigma,
    siGit,
    siGithub,
    siHtml5,
    siJavascript,
    siMui,
    siNextdotjs,
    siNodedotjs,
    siReact,
    siShadcnui,
    siTailwindcss,
    siTypescript,
    siVite,
} from "simple-icons";

export type Skill = {
    name: string;
    icon?: SimpleIcon;
};

export const SKILLS: Skill[] = [
    { name: "Git", icon: siGit },
    { name: "GitHub", icon: siGithub },
    { name: "HTML", icon: siHtml5 },
    { name: "CSS", icon: siCss },
    { name: "JavaScript", icon: siJavascript },
    { name: "TypeScript", icon: siTypescript },
    { name: "React", icon: siReact },
    { name: "Next.js", icon: siNextdotjs },
    { name: "Figma", icon: siFigma },
    { name: "Bootstrap", icon: siBootstrap },
    { name: "Tailwind CSS", icon: siTailwindcss },
    { name: "shadcn/ui", icon: siShadcnui },
    { name: "MUI", icon: siMui },
    { name: "Express", icon: siExpress },
    { name: "Node.js", icon: siNodedotjs },
    { name: "Vite", icon: siVite },
    { name: "Ant Design", icon: siAntdesign },
    { name: "Zustand" },
    { name: "VS Code" },
];
