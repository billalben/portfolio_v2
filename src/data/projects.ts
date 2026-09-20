export type ProjectId =
    | "knowsphere"
    | "teamora"
    | "blog-sn-next"
    | "git-finder"
    | "weatherio"
    | "react-admin-dashboard"
    | "blog"
    | "tvflix-next"
    | "stock-media-platform-next"
    | "pure-js-image-slider"
    | "music-player"
    | "nike"
    | "sneakers-ecommerce"
    | "brainwave"
    | "travelia"
    | "sushi"
    | "html-css-template-three"
    | "nftc"
    | "covid-19"
    | "evara-ecommerce"
    | "simple-cool-projects"
    | "car"
    | "metalink-nft"
    | "grilli-restaurant";

export type ProjectEntry = {
    id: ProjectId;
    image: string;
    screenshots?: string[];
    repo?: string;
    demo?: string;
    builtWith: string[];
    badge?: boolean;
    date: string;
};

export const PROJECT_LIST: ProjectEntry[] = [
    {
        id: "knowsphere",
        date: "2026-01",
        image: "/image.png",
        screenshots: [],
        repo: "https://github.com/billalben/KnowSphere",
        demo: "https://knowsphere.billalbenz.com",
        builtWith: ["React", "Next.js", "TypeScript", "PostgreSQL", "Node.js"],
        badge: true,
    },
    {
        id: "teamora",
        date: "2025-11",
        image: "/image.png",
        screenshots: [],
        repo: "https://github.com/billalben/teamora",
        demo: "https://teamora.billalbenz.com",
        builtWith: ["React", "TypeScript", "Node.js", "WebSockets", "PostgreSQL"],
        badge: true,
    },
    {
        id: "git-finder",
        date: "2026-08",
        image: "/image.png",
        screenshots: [],
        repo: "https://github.com/billalben/git-finder",
        demo: "https://git-finder-pro.netlify.app/",
        builtWith: ["React", "TypeScript", "Vite", "GitHub API"],
        badge: true,
    },
    {
        id: "weatherio",
        date: "2026-08",
        image: "/image.png",
        screenshots: [],
        repo: "https://github.com/billalben/weatherio",
        demo: "https://weatherio.billalbenz.com/",
        builtWith: ["Next.js", "React", "TypeScript", "Tailwind CSS", "OpenWeatherMap API"],
        badge: true,
    },
    {
        id: "stock-media-platform-next",
        date: "2026-07",
        image: "/image.png",
        screenshots: [],
        repo: "https://github.com/billalben/stock-media-platform-next",
        demo: "https://stockmedia.billalbenz.com/",
        builtWith: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Pexels API"],
        badge: true,
    },
    {
        id: "tvflix-next",
        date: "2026-05",
        image: "/image.png",
        screenshots: [],
        repo: "https://github.com/billalben/tvflix-next",
        demo: "https://tvflex.billalbenz.com/",
        builtWith: ["Next.js", "React", "TypeScript", "Tailwind CSS", "TMDB API"],
        badge: true,
    },
    {
        id: "blog",
        date: "2026-04",
        image: "/image.png",
        screenshots: [],
        repo: "https://github.com/billalben/blog",
        builtWith: ["Node.js", "Express", "MongoDB", "Mongoose", "Zod", "JWT"],
        badge: true,
    },
    {
        id: "react-admin-dashboard",
        date: "2024-10",
        image: "/image.png",
        screenshots: [],
        repo: "https://github.com/billalben/react-admin-dashboard",
        demo: "https://react-admin-ds.netlify.app/",
        builtWith: ["React", "TypeScript", "Vite", "Tailwind CSS", "Recharts", "Framer Motion"],
    },
    {
        id: "blog-sn-next",
        date: "2024-07",
        image: "/image.png",
        screenshots: [],
        repo: "https://github.com/billalben/blog-sn-next",
        builtWith: ["Next.js", "React", "TypeScript", "Sanity", "Tailwind CSS"],
    },
    {
        id: "pure-js-image-slider",
        date: "2024-05",
        image: "/image.png",
        screenshots: [],
        repo: "https://github.com/billalben/pure-js-image-slider",
        demo: "https://billalben.github.io/pure-js-image-slider/",
        builtWith: ["HTML", "CSS", "JavaScript"],
    },
    {
        id: "music-player",
        date: "2024-05",
        image: "/image.png",
        screenshots: [],
        repo: "https://github.com/billalben/music-player",
        demo: "https://billalben.github.io/music-player/",
        builtWith: ["HTML", "CSS", "JavaScript"],
        badge: true,
    },
    {
        id: "nftc",
        date: "2024-05",
        image: "/image.png",
        screenshots: [],
        repo: "https://github.com/billalben/nftc",
        demo: "https://billalben.github.io/nftc/",
        builtWith: ["HTML", "CSS", "JavaScript"],
    },
    {
        id: "covid-19",
        date: "2024-05",
        image: "/image.png",
        screenshots: [],
        repo: "https://github.com/billalben/covid-19",
        demo: "https://billalben.github.io/covid-19/",
        builtWith: ["HTML", "CSS", "JavaScript"],
    },
    {
        id: "nike",
        date: "2024-04",
        image: "/image.png",
        screenshots: [],
        repo: "https://github.com/billalben/nike",
        demo: "https://billalben.github.io/nike/",
        builtWith: ["React", "Vite", "Tailwind CSS"],
    },
    {
        id: "brainwave",
        date: "2024-04",
        image: "/image.png",
        screenshots: [],
        repo: "https://github.com/billalben/brainwave",
        demo: "https://billalben.github.io/brainwave/",
        builtWith: ["React", "Vite", "Tailwind CSS"],
    },
    {
        id: "simple-cool-projects",
        date: "2024-03",
        image: "/image.png",
        screenshots: [],
        repo: "https://github.com/billalben/simple-cool-projects",
        demo: "https://billalben.github.io/simple-cool-projects/",
        builtWith: ["HTML", "CSS", "JavaScript"],
    },
    {
        id: "sushi",
        date: "2024-02",
        image: "/image.png",
        screenshots: [],
        repo: "https://github.com/billalben/sushi",
        demo: "https://billalben.github.io/sushi/",
        builtWith: ["HTML", "CSS", "JavaScript", "AOS"],
    },
    {
        id: "sneakers-ecommerce",
        date: "2023-12",
        image: "/image.png",
        screenshots: [],
        repo: "https://github.com/billalben/sneakers-ecommerce",
        demo: "https://billalben.github.io/sneakers-ecommerce/",
        builtWith: ["HTML", "CSS", "JavaScript", "Gulp", "Swiper"],
    },
    {
        id: "travelia",
        date: "2023-12",
        image: "/image.png",
        screenshots: [],
        repo: "https://github.com/billalben/travelia",
        demo: "https://billalben.github.io/travelia/",
        builtWith: ["HTML", "CSS", "JavaScript"],
    },
    {
        id: "car",
        date: "2023-12",
        image: "/image.png",
        screenshots: [],
        repo: "https://github.com/billalben/car",
        demo: "https://billalben.github.io/car/",
        builtWith: ["HTML", "CSS", "JavaScript"],
    },
    {
        id: "metalink-nft",
        date: "2023-12",
        image: "/image.png",
        screenshots: [],
        repo: "https://github.com/billalben/metalink-NFT",
        demo: "https://billalben.github.io/metalink-NFT/",
        builtWith: ["HTML", "CSS", "JavaScript"],
    },
    {
        id: "grilli-restaurant",
        date: "2023-12",
        image: "/image.png",
        screenshots: [],
        repo: "https://github.com/billalben/grilli-restaurant",
        demo: "https://billalben.github.io/grilli-restaurant/",
        builtWith: ["HTML", "CSS", "JavaScript"],
    },
    {
        id: "evara-ecommerce",
        date: "2023-11",
        image: "/image.png",
        screenshots: [],
        repo: "https://github.com/billalben/evara-ecommerce",
        demo: "https://billalben.github.io/evara-ecommerce/",
        builtWith: ["HTML", "CSS", "JavaScript"],
    },
    {
        id: "html-css-template-three",
        date: "2023-07",
        image: "/image.png",
        screenshots: [],
        repo: "https://github.com/billalben/html-css-template-three",
        demo: "https://billalben.github.io/html-css-template-three/",
        builtWith: ["HTML", "CSS"],
    },
];

export const FEATURED_PROJECTS = PROJECT_LIST.slice(0, 2);
