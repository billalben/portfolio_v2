import { MetadataRoute } from "next";

import { routing } from "@/i18n/routing";

const BASE_URL = "https://www.billalbenz.com";

export default function sitemap(): MetadataRoute.Sitemap {
    const paths: { path: string; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]; priority: number }[] = [
        { path: "", changeFrequency: "monthly", priority: 1 },
        { path: "/projects", changeFrequency: "monthly", priority: 0.8 },
    ];

    return routing.locales.flatMap((locale) =>
        paths.map(({ path, changeFrequency, priority }) => ({
            url: `${BASE_URL}/${locale}${path}`,
            lastModified: new Date(),
            changeFrequency,
            priority,
        })),
    );
}
