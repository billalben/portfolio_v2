export type ProjectId = "knowsphere" | "teamora";

export type ProjectEntry = {
    id: ProjectId;
    image: string;
    screenshots?: string[];
    repo?: string;
    demo?: string;
    builtWith: string[];
    featured: boolean;
};

export const PROJECT_LIST: ProjectEntry[] = [
    {
        id: "knowsphere",
        image: "/image.png",
        screenshots: [],
        repo: "https://github.com/billalben/KnowSphere",
        demo: "https://knowsphere.billalbenz.com",
        builtWith: ["React", "Next.js", "TypeScript", "PostgreSQL", "Node.js"],
        featured: true,
    },
    {
        id: "teamora",
        image: "/image.png",
        screenshots: [],
        repo: "https://github.com/billalben/teamora",
        demo: "https://teamora.billalbenz.com",
        builtWith: ["React", "TypeScript", "Node.js", "WebSockets", "PostgreSQL"],
        featured: true,
    },
];

export const FEATURED_PROJECTS = PROJECT_LIST.filter((project) => project.featured);
