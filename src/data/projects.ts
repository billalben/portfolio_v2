export type ProjectId = "project1" | "project2" | "project3";

export type ProjectEntry = {
    id: ProjectId;
    url: string;
    builtWith: string[];
};

export const PROJECT_LIST: ProjectEntry[] = [
    {
        id: "project1",
        url: "https://github.com/billalben/project1",
        builtWith: ["React", "TypeScript", "Next.js", "Node.js", "Express"],
    },
    {
        id: "project2",
        url: "https://github.com/billalben/project2",
        builtWith: ["JavaScript", "CSS", "HTML"],
    },
    {
        id: "project3",
        url: "https://github.com/billalben",
        builtWith: ["Next.js", "Tailwind CSS", "TypeScript"],
    },
];
