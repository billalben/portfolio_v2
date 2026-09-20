export type ExperienceId = "exp1" | "exp2";

export type ExperienceLinkKind = "website" | "linkedin";

export type ExperienceLink = {
    kind: ExperienceLinkKind;
    href: string;
};

export const EXPERIENCE_LINKS: Record<ExperienceId, ExperienceLink[]> = {
    exp1: [
        { kind: "website", href: "https://datamasterai.com" },
        { kind: "linkedin", href: "https://www.linkedin.com/company/datamasterdz" },
    ],
    exp2: [
        { kind: "website", href: "https://intern2grow.pages.dev" },
        { kind: "linkedin", href: "https://www.linkedin.com/company/intern2grow" },
    ],
};
